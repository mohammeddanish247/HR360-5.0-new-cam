import { Component, QueryList, ViewChildren } from '@angular/core';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { Platform, NavController, AlertController, IonRouterOutlet } from '@ionic/angular';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemesService } from './themes.service';
import {Storage} from '@ionic/storage';
import { ApiService } from './api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { registerPlugin } from "@capacitor/core";
import { BackgroundGeolocationPlugin } from "@capacitor-community/background-geolocation";
import { HttpParams } from '@angular/common/http';
const BackgroundGeolocation = registerPlugin<BackgroundGeolocationPlugin>("BackgroundGeolocation");



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

lastTimeBackPress = 0;
timePeriodToExit = 2000;
@ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  engineerID: string;

  constructor(
    private platform: Platform,
    // private statusBar: StatusBar,
    private storage: Storage,
    public navCtrl: NavController,
    private fio : FingerprintAIO,
    private auth : ApiService,
    public themeService: ThemesService,
    private location: Location,
    private router :Router,
    public alertController : AlertController ,
    public splashScreen : SplashScreen,
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }
 

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      // this.statusBar.backgroundColorByHexString("062c47");
      this.storage.get('enggid').then(res=>{
        this.engineerID = res;
      })

      
      // BackgroundGeolocation.addWatcher({
      //   backgroundMessage: "Appllication is running in Background",
      //   backgroundTitle: "HR360 is Running",
      //   requestPermissions: true,
      //   stale: false,
      //   distanceFilter: 100
      // },
      // (location, error)=> {
      //   if (error) {
      //       if (error.code === "NOT_AUTHORIZED") {
      //           if (window.confirm(
      //               "This app needs your location, " +
      //               "but does not have permission.\n\n" +
      //               "Open settings now?"
      //           )) {
      //               BackgroundGeolocation.openSettings();
      //               }
      //           }
      //           return console.error(error);
      //       }
      //       this.sendLocation(location.latitude, location.longitude, location.time);
      //       return console.log("Danish "+JSON.stringify(location));
            
      //   }
      // );

      this.splashScreen.hide();

        this.storage
        .get("debugmode")
        .then((res) => {
          if (res == "true") {
          this.themeService.enableDebugMode();
          } else {
          this.themeService.enableLiveMode();
          }
        });
    });

  }
  
  sendLocation(lat, long, time) {
    let params = new HttpParams()
    .set('engineerid',this.engineerID)
    .set('longitude',long)	
    .set('latitude',lat)
    .set('createdDate', time)
    this.auth.httpSend('AddToLocationTracker',params,'post').subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }

  authenticatefinger(){
    return new Promise((resolve, reject)=>{
      this.fio.isAvailable().then(()=>{
        this.fio.show({
          title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
          subtitle: 'Confirm your identity, We need to make sure this is you touch the finger print sensor to continue' // (Android Only) | optional | Default: null
        }).then((val)=>{
            this.storage.set("loginCount", 2);
            resolve("");
        },(err)=>{
          
        })
      },(err)=>{
        reject(err);
      })
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      console.log("Danish"+ this.router.url);
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
         if (this.router.url === '/tabs/tab1' || this.router.url === '/login' ||  this.router.url === '/') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        } else if (this.router.url != '/tabs/tab1') {
          await this.router.navigate(['/tabs/tab1']);
          //this.location.back();
        }
      });
    });
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to close the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }

}
