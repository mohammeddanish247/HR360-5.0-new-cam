import { Component, OnInit } from "@angular/core";
import {AlertController,LoadingController,NavController,ToastController,} from "@ionic/angular";
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import {SpeedTestService} from 'ng-speed-test';
import { Storage } from "@ionic/storage";
import { ThemesService } from "../themes.service";
import { ConnectionStatus, Network } from '@capacitor/network';
declare const Email :any;

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  makeSet = new Set();
  modelSet = new Set();
  modelArray = [];
  count = 1;
  toggleDevMode : boolean = false;
  // set = new Set();
  // prg = new Set();

  networkStatus: ConnectionStatus;
  key: string;
  devFlag : boolean = true;

  // url =  "https://beta-wsmobileapp.247development.uk/service1.asmx/";
  url = "https://mobileappapi.home360.org.uk/service1.asmx/";
  debugUrl: any;
  liveUrl: any;
  isLoading = false;
  settingArray = [
    { name: "Engineer Signature", path: "EngineerSignature" },
    { name: "Update Make & Model", path: "MakeModel" },
    { name: "Update Gas Safe Licence", path: "gasSafe" },
    { name: "Update Engineer Certificate Name", path: "EngineerCertificate" },
    { name: "Activity Report", path: "ActivityReport" },
    { name: "Intranet", path: "Intranet" },
    { name: "Send Error Report", path: "ErrorLog" },
    { name: "Update Firmware", path: "updateFirmware" },
    { name: "Sync Log", path: "syncLog" },
  ];
  ID: any;
  DebugButtonFlag: boolean = false;
 

  constructor(
    public navCtrl: NavController,
    public apiGenerate: ApiService,
    public loadingCtrl: LoadingController,
    public alertController: AlertController,
    public toastCtrl: ToastController,
    public router: Router,
    private httpClient: HttpClient,
    private iab: InAppBrowser,
    private speedTestService: SpeedTestService,
    public storage : Storage,
    public themeService : ThemesService,
  ) {
    this.getdateformat();
  }

  async checkNetwork() {
    this.networkStatus = await Network.getStatus();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        backdropDismiss: true,
      })
      .then((a) => {
        a.present().then(() => {});
      });
  }

  async dismiss() {
    this.isLoading = false;
    this.loadingCtrl.dismiss();
  }

  getdateformat() {
    let tommo: any;
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var date = new Date();

    if (tommo == "tommo") {
      date.setDate(date.getDate() + 1);
    } else if (tommo == "yesterday") {
      date.setDate(date.getDate() - 1);
    }
    var day = date.getDate();

    var monthIndex = date.getMonth();

    var year = date.getFullYear();

    var result = day + "/" + monthNames[monthIndex] + "/" + year;

    return result;
  }

  openOption(setting) {
    if (setting.path === "EngineerSignature") {
      this.Signature();
    } else if (setting.path === "MakeModel") {
      this.checkNetwork();
      if (this.networkStatus.connected) {
        this.UpdateMakeModelFromServer();
      } else {
        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
      }
    } else if (setting.path === "gasSafe") {
      this.UpdateGasSafe();
    } else if (setting.path === "EngineerCertificate") {
      this.UpdateEngineerCertificate();
    } else if (setting.path === "ActivityReport") {
      this.gotoActivityReport();
    } else if (setting.path === "Intranet") {
      this.gotoIntranet();
    } else  if (setting.path === "ErrorLog") {
      this.errorLog();
    } else if (setting.path === "updateFirmware") {
      this.updateFirmware();
    } else if (setting.path === "syncLog") {
      this.syncLog();
    } else{
      this.navCtrl.navigateForward(setting.path);
    }
  }


  syncLog(){
    this.router.navigate(["test"]);
  }

  Signature() {
    this.router.navigate(["engineersignature"]);
  }

  async UpdateMakeModelFromServer() {
    this.count = 1
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
          this.apiGenerate.presentCustomLoader(
            "It may take some time. Please wait... "
          );
          this.httpClient.get<[]>(this.url + "Service_GetMakeModel").subscribe((res) => {
                for (var i = 0; i < res.length; i++) {
                  this.apiGenerate.database.executeSql('INSERT INTO makemodel (make , model) VALUES(?,?)',[res[i]["Make"],res[i]["Model"]]).then(resp=>{
                    this.apiGenerate.setLoadingText(`It may take some time. Please wait... updating ${this.count} of ${res.length}`);
                    this.count++
                    if(this.count==res.length){
                      this.apiGenerate.setLoadingText(`It may take some time. Please wait... updating boilers makes.`)
                      this.httpClient.get<any[]>(this.url+"GetAllBoilerProductsName").subscribe((res)=>{
                        this.storage.set("boilers",res).then(succ=>{
                          console.log("### success boilers names inserted"); 
                          this.apiGenerate.dismissLoading();
                          this.apiGenerate.showToast("Make and Model Successfully Updated.",'success');             
                        })
                      });
                    }                                       
                  })
                }
            },
            (err) =>{
              this.apiGenerate.alert("Please Try Again.");              
              setTimeout(() => {
                this.apiGenerate.dismissLoading();
              }, 300);
            });
        } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }      
    
  }

  async UpdateGasSafe() {
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      const alert = await this.alertController.create({
        header: "Update",
        message: "Update Gas Safe Register License",
        inputs: [
          {
            name: "UpdateGas",
            placeholder: "Enter Gas Safe Register License No.",
          },
        ],
        buttons: [
          {
            text: "No",
          },
          {
            text: "Yes",
            handler: async (data) => {
              if (data.UpdateGas == "") {
                this.apiGenerate.showToast("Not Saved! Field can not be empty","warning")
              }else{
                this.apiGenerate.updateEngInfo("GasSafeLicenseNumber",data.UpdateGas);
                this.storage.get("enggid").then(res=>{
                  let params = new HttpParams()
                .set("EngId",res)
                .set("Info",data.UpdateGas)
                this.apiGenerate.httpSend("Service_UpdateEngGasSafeLicense", params, "post").subscribe(res=>{
                  console.log(res['Msg']);   
                  this.apiGenerate.showToast(`${data.UpdateGas} Gas Safe License Successfully Updated.`,'success');             
                })
                });             
              }
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }

  }

  async UpdateEngineerCertificate() {
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      const alert = await this.alertController.create({
        header: "Update",
        message: "Update Engineer Certificate Name",
        inputs: [
          {
            name: "UpdateEng",
            placeholder: "Write the name",
          },
        ],
        buttons: [
          {
            text: "No",
          },
          {
            text: "Yes",
            handler: async (data) => {
              if (data.UpdateEng == "") {
                  
              }else{
                this.storage.get("enggid").then(res=>{
                  let params = new HttpParams()
                .set("EngId",res)
                .set("Info",data.UpdateEng)
                this.apiGenerate.httpSend("Service_UpdateEngCertName", params, "post").subscribe(res=>{
                  console.log(res['Msg']);  
                  this.apiGenerate.showToast("Update Engineer Certificate Name Successfully Updated.",'success');    
                })
                })              
              }
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }
   
  }

  async gotoActivityReport() {
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      const browser = this.iab.create(
        "https://engineeractivity.home360.org.uk/Home/EngineerActivityReport?id=" +
          this.ID,'_self',{
            zoom : 'no'
          }
      );
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }
  }

  async gotoIntranet() {
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      const browser = this.iab.create("https://intranet.home360.org.uk/",'_self',{
        zoom : 'no'
      });
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }
   
  }

  async errorLog() {
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      this.apiGenerate.sendErrorLog().then(res=>{
        this.apiGenerate.showToast(res);
      })
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }      
  }


  async updateFirmware(){
    let a = await this.apiGenerate.checkNetwork();
    if (a.connected) {
      this.apiGenerate.presentLoading("Please wait while we updating your Firmware.");
      this.apiGenerate.speedCheck().then((resp: string|number) =>{
        if (resp == "TimeOut") {           
          this.apiGenerate.dismissLoading();
          this.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again.","Connection TimeOut")
        } else {
          if (resp > 0.5) {
            this.httpClient
            .get<[]>(this.url + "Service_UpdateFirmware")
            .subscribe((res) => {
              this.liveUrl = res["liveUrl"];            
              this.debugUrl = res["debugUrl"];
              this.apiGenerate.database.executeSql("update firmwareurl set live = ?, debug = ? where id=1",[this.liveUrl,this.debugUrl]).then(()=>{
                this.apiGenerate.url = this.liveUrl ;
                this.apiGenerate.showToast("Firmware Updated Successfully","success");
                this.DebugButtonFlag = true;
                this.storage.set("updateFirmware","true");
                this.apiGenerate.dismissLoading();
              })            
            },
            (err) =>{
              this.apiGenerate.showToast("Error Occured try again later"+err);
              this.apiGenerate.dismissLoading();
            });
          } else {              
            this.apiGenerate.dismissLoading();
            this.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again","Connection Failed")
          }
        }
      }).catch(e=>{
        this.apiGenerate.dismissLoading();
        this.apiGenerate.alert(JSON.stringify(e));
      });
    } else {
      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }         
  }

  updateUrlInService() {
    this.apiGenerate.database.executeSql("select * from")
  }

  
  toggle(event:any){
    if (this.toggleDevMode==true) {
      this.themeService.enableDebugMode();
      this.storage.set("debugmode","true");
      this.apiGenerate.database.executeSql('select Debug from firmwareurl',[]).then(res=>{
        this.apiGenerate.url = res;
        // if(res == "" || res == undefined || res == null ){
        //   this.themeService.enableLiveMode();
        //   this.storage.set("debugmode","false");
        //   this.toggleDevMode = false;
        //   this.apiGenerate.alert("firmware is not updated please update the firmware to use debug mode.");
        // }else{
        //   this.apiGenerate.url = res;
        // }
      });
    } else {
      this.themeService.enableLiveMode();
      this.storage.set("debugmode","false");
      this.apiGenerate.database.executeSql('select Live from firmwareurl',[]).then(res=>{
        this.apiGenerate.url = res;
      });
    }
  }

  ngOnInit() {
    this.checkNetwork();
    this.storage
    .get("debugmode")
    .then((res) => {
      if (res == "true") {
        this.toggleDevMode = true;
      } else {
        this.toggleDevMode = false;
      }
    });
    this.storage
    .get("updateFirmware")
    .then((res) => {
      if (res == "true") {
        this.DebugButtonFlag = true;
      }
    });
    // this.apiGenerate.database.executeSql("select toggle from devmode where name = ?",["DanishDev"]).then(res=>{
    //   if(res.rows.item(0)["toggle"]=="true"){
    //     this.devFlag = false;
    //   }else{
    //     this.devFlag = true;
    //   }
    // });
  }
}
