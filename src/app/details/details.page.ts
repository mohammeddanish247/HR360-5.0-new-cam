import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';
import {HttpParams, JsonpClientBackend} from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import {Storage} from '@ionic/storage'
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

class validation{
  constructor(private route){}
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit  {

  index:any;
  hideRouteFlag ;
  hideArrivedFlag ;
  hideAbandonFlag ;
  hideCompleteFlag ;
  hideAuthorizationFlag;
  hidecreateCertificateFlag ;
  hidestartServiceFlag ;
  hideCannotCompleteServiceFlag ;
  hideBoilerInstallationReport ;
  hideComboLabel;
  hideStartService;
  hideCannotComplete;
  hideSiteSurvey ;
  hideInventory;
  hideVanStock;
   

  CLAIMGUID:string;
  JOBGUID:string;
  RiskPostCode:string;
  ProductName:string;
  ContactName:string;
  BookingDate:string;
  BookingTimeType:string;
  RiskAddress:string;
  phone:string;
  ProductTypeId:string;
  IsClaim:string;
  BackgroundColour:string;
  CLIENTNAME:string;

  data:any[];
  lattitude: any;
  longitude: any;
  OnRouteDT:string;
  options: ImageOptions;
  base64:string='';
  updatePicture :any='';

  userLatitude :any='';
  userLongitude :any='';

  constructor(private platform : Platform,private geolocation : Geolocation, public storage:Storage ,public router: Router, public route: ActivatedRoute,private auth:ApiService,public iab: InAppBrowser,) { }

  
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        setTimeout(() => {
          if (this.data['ProductName'] == 'SITE SURVEY'){
            this.hideInventory = true;
          }
        }, 200);
         this.auth.database.executeSql("select status from jobsstatus where JOBGUID = ?",[this.data['JOBGUID']]).then(
           (res)=>{ 
              console.log('################# ISCLAIM  JOBS STATUS '+this.data['IsClaim']+' '+JSON.stringify(res)+' '+res.rows.item(0)['status']+' '+this.data['ProductName']+' '+this.data['ProductTypeName']);
              this.auth.dismissLoading();
              if(res.rows.item(0)['status']=='onroute')
              {
                  this.updateButtons(true,false,true,true,true,true,true,true,true,true,true,false,false);
              }else if(res.rows.item(0)['status']=='arrived' && this.data['IsClaim']=='True'){
                
                if(this.data['ProductName']=='BOILER INSTALLATION'){
                  this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);
                }else if(this.data['ProductTypeName']=='Boiler' && this.data['BackgroundColour']=='#20B2AA' ){
                  this.updateButtons(true,true,false,false,false,true,true,false,false,false,true,false,false);
                }else{
                  this.updateButtons(true,true,false,false,false,true,true,true,true,true,true,false,false);
                }
              }else if(res.rows.item(0)['status']=='arrived' && this.data['IsClaim']=='False'){
                if (this.data['ProductName'] == 'SITE SURVEY') {
                  this.updateButtons(true,true,false,true,true,true,true,true,true,true,false,true,false);
                }else
                this.updateButtons(true,true,false,true,true,false,true,true,true,true,true,false,false);
              }else if(res.rows.item(0)['status']==null){
                this.updateButtons(false,true,true,true,true,true,true,true,true,true,true,false,false);
              }else if(res.rows.item(0)['status']=='boilerinstallation' && this.data['IsClaim']=='True'){
                this.updateButtons(true,true,false,false,false,true,false,true,true,true,true,false,false);
              }else{
                if (res.rows.item(0)['status']=='completed') {
                  this.auth.alert("Job already completed")
                  if(this.data['IsClaim']=='True'){
                    if(this.data['ProductName']=='BOILER INSTALLATION'){
                      this.updateButtons(true,true,false,false,true,true,false,true,true,true,true,false,false);
                      //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);
                    }else if(this.data['ProductTypeName']=='Boiler' && this.data['BackgroundColour']=='#20B2AA' ){
                      this.updateButtons(true,true,false,false,false,true,true,false,false,false,true,false,false);
                    }else{
                      this.updateButtons(true,true,false,false,false,true,true,true,true,true,true,false,false);
                    }
                  }else{
                    if (this.data['ProductName'] == 'SITE SURVEY') {
                      this.updateButtons(true,true,false,true,true,true,true,true,true,true,false,true,false);
                    }else
                    this.updateButtons(true,true,false,true,true,false,true,true,true,true,true,false,false);
                  }
                } else {
                  this.auth.alert(' Something went wrong. ');
                  if(this.data['IsClaim']=='True'){
                    if(this.data['ProductName']=='BOILER INSTALLATION'){
                      this.updateButtons(true,true,false,false,true,true,false,true,true,true,true,false,false);
                      //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);
                    }else if(this.data['ProductTypeName']=='Boiler' && this.data['BackgroundColour']=='#20B2AA' ){
                      this.updateButtons(true,true,false,false,false,true,true,false,false,false,true,false,false);
                    }else{
                      this.updateButtons(true,true,false,false,false,true,true,true,true,true,true,false,false);
                    }
                  }else{
                    if (this.data['ProductName'] == 'SITE SURVEY') {
                      this.updateButtons(true,true,false,true,true,true,true,true,true,true,false,true,false);
                    }else
                    this.updateButtons(true,true,false,true,true,false,true,true,true,true,true,false,false);
                  }
                }
                
              }
           }
         ).catch((e)=>{
           this.auth.dismissLoading();
           console.log('################# ERROR ISCLAIM  JOBS STATUS'+this.data['IsClaim']+' '+JSON.stringify(e));

          });   
      }
    });
    console.log("Danish "+this.data['CLAIMRef']);
    
  }

  
  // Arrived
  async btnArrivedAtJobClick(){
    let a = await this.auth.checkNetwork();
    if (a.connected) { 
    this.auth.turnOnGpsAndGetLocation().subscribe((pos:Geoposition)=>{
      this.syncArrived(pos);
    })  
  } else{
    this.auth.turnOnGpsAndGetLocation().subscribe((pos:Geoposition)=>{
      this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?",[pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes',this.data['JOBGUID']]).then(
        (res)=>{
          this.updateOnArrivedButton();
        }).catch(()=>{
          this.auth.dismissLoading();
          this.auth.showToast('error occured please press again');
        });
    })  
    }
  }

   syncArrived(pos:Geoposition){
      let params = new HttpParams()
      .set("JOBGUID", this.data["JOBGUID"])
      .set("Latitude", pos.coords.latitude.toString())
      .set("Longitude",pos.coords.latitude.toString())
      .set("ArrAtJobDT", this.auth.getdateformatV2())
      .set("Desc", this.auth.getdateformatV2())
      .set("title", "Arrived at job");
      this.auth.httpSend("Service_SaveArrivedAtJob", params, "post")
      .subscribe(
        (msg) => {
          this.auth.insertIntoSyncLog(this.data['JOBGUID'],  "OnArrived Done", msg["Msg"]);  
          this.updateOnArrivedButton();             
        },
        (err)=>{
          this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?",[pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes',this.data['JOBGUID']]).then(
            (res)=>{
              this.updateOnArrivedButton();
            }).catch(()=>{
              this.auth.dismissLoading();
              this.auth.showToast('error occured please press again');
            });
            }
      );
    }

  updateOnArrivedButton(){
    this.auth.database.executeSql("update jobsstatus set status=? where JOBGUID=?",[ 'arrived', this.data['JOBGUID']]).then((res)=>{       
      if(this.data['IsClaim']=='True'){
        if(this.data['ProductName']=='BOILER INSTALLATION'){
            this.updateButtons(true,true,false,false,true,true,false,true,true,true,true,false,false);
            
        }else if(this.data['ProductTypeName']=='Boiler'&& this.data['BackgroundColour']=='#20B2AA'){
          this.updateButtons(true,true,false,false,false,true,true,false,false,false,true,false,false);
        }else{
          this.updateButtons(true,true,false,false,false,true,true,true,true,true,true,false,false);              
        }
    
        }else{
              if (this.data['ProductName']=='SITE SURVEY') {
                this.updateButtons(true,true,false,true,true,true,true,true,true,true,false,true,false);
              } else 
              this.updateButtons(true,true,false,true,true,false,true,true,true,true,true,false,false);                          
        }
        this.auth.dismissLoading();
    }).catch((e)=>{
      this.auth.dismissLoading();
      this.auth.alert("Please turn on the location. Location is mandatory to use the application.","Permission Error");
    });
  }

  // OnRoute
  async btnOnRouteClick(){   
    let a = await this.auth.checkNetwork();
  if (a.connected) { 
    this.auth.turnOnGpsAndGetLocation().subscribe((pos:Geoposition)=>{
      this.synconRoute(pos);
    })  
  } else {
    this.auth.turnOnGpsAndGetLocation().subscribe((pos:Geoposition)=>{
      this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ",[this.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes', this.data['JOBGUID'] ])
      .then((res)=>{ 
        this.updateOnRouteButtons();
      }).catch(err=>{
        this.auth.dismissLoading();
        this.auth.showToast('error occured please press again');
      });
    });  
  }
 }

  synconRoute(pos:Geoposition){
      let params = new HttpParams()
      .set("CLAIMGUID", this.data["CLAIMGUID"])
      .set("JOBGUID", this.data["JOBGUID"])
      .set("Latitude",  pos.coords.latitude.toString())
      .set("Longitude", pos.coords.longitude.toString())
      .set("OnRouteDT", this.auth.getdateformatV2())
      .set("Desc", this.auth.getdateformatV2())
      .set("title", "On Route");
    this.auth
      .httpSend("Service_SaveOnRoute", params, "post")
      .subscribe(
        (msg) => {
          this.updateOnRouteButtons(); 
          this.auth.insertIntoSyncLog(this.data['JOBGUID'],  "OnRoute Done", msg["Msg"]);                          
        },(err)=>{                    
          this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ",[this.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes', this.data['JOBGUID'] ])
          .then((res)=>{ 
            this.updateOnRouteButtons();
          }).catch(err=>{
            this.auth.dismissLoading();
            this.auth.showToast('error occured please press again');
          });;
        });
 }

 updateOnRouteButtons(){
  this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'onroute', this.data['JOBGUID']])
  .then(()=>{
    if (this.data['ProductName'] == 'SITE SURVEY') {
      this.updateButtons(true,false,true,true,true,true,true,true,true,true,true,true,false);
    } else {
      this.updateButtons(true,false,true,true,true,true,true,true,true,true,true,false,false);
    }
    this.auth.dismissLoading();
  }).catch(()=>{
    this.auth.dismissLoading();
    this.auth.showToast('error occured please press again');
  });

 }
  // click certificate
  CertificateClick(ServicedetailsList){
    this.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [this.data['JOBGUID'],this.data['CLAIMJOBID']," "]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    this.router.navigate(['createcertificate'],navigationExtras);
  }

  btnAbandonCallClick(){
    this.auth.database.executeSql('insert into abandon (JOBGUID) values(?)', [this.data['JOBGUID']]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    this.router.navigate(['abandoncall'],navigationExtras);
  }

  btnAuthorizationRequiredClick(){
    this.auth.database.executeSql('insert into authorization (JOBGUID) values(?)', [this.data['JOBGUID']]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    this.router.navigate(['authorizationrequired'],navigationExtras);
  }

  async fetchJobStatus(JOBGUID:string){
    console.log("job status "+this.auth.status);                

   return await this.auth.fetchJobsStatus(JOBGUID);

  }

  updateButtons(b1:boolean,  b2:boolean, b3:boolean, b4:boolean, 
    b5:boolean, b6:boolean, b7:boolean, b8:boolean, b9:boolean, b10:boolean
    , b11:boolean, b12:boolean, b13:boolean){
    this.hideRouteFlag = b1;
    this.hideArrivedFlag = b2;
    this.hideAbandonFlag = b3;
    this.hideAuthorizationFlag = b4;
    this.hideCompleteFlag = b5;
    this.hidecreateCertificateFlag = b6;
    this.hideBoilerInstallationReport = b7;
    this.hideComboLabel = b8;
    this.hideStartService = b9;
    this.hideCannotComplete= b10;
    this.hideSiteSurvey = b11;
    this.hideInventory = b12;
    this.hideVanStock =b13;

  }

  CompleteClick(){

    this.auth.database.executeSql('insert into completeclaim (JOBGUID, BackgroundColour) values(?,?)', [this.data['JOBGUID'],this.data['BackgroundColour']]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };

     
    this.router.navigate(['complete-claim'],navigationExtras);
  }


  BoilerInstallClick(){
    this.auth.database.executeSql('insert into boilerinstallation (JOBGUID) values(?)', [this.data['JOBGUID']]);
    this.auth.database.executeSql('insert into boilerinstallationpics (JOBGUID) values(?)', [this.data['JOBGUID']]);
    this.auth.database.executeSql('insert into boilerinstallationsign (JOBGUID) values(?)', [this.data['JOBGUID']]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    this.router.navigate(['boilerinstall'],navigationExtras);
  }


  StartServiceClick(){

    this.auth.database.executeSql('select * from jobslist where ParentJobGuid=?', [this.data['JOBGUID']]).then(res=>{
      console.log("dddd claim job guid"+this.data["JOBGUID"]);
      console.log("dddd service data"+JSON.stringify(res.rows.item(0)));
      console.log("dddd service jobguid"+res.rows.item(0)["JOBGUID"]);
      let dat = {
        JOBGUID: res.rows.item(0)["JOBGUID"],
        CLAIMJOBID: res.rows.item(0)['CLAIMJOBID'],
        ComboClaimJobId: this.data['CLAIMJOBID'],
        RiskAddress : this.data['RiskAddress'],
        CLAIMGUID: res.rows.item(0)['CLAIMGUID'],
        CLAIMRef: this.data["CLAIMRef"],
        RiskPostCode: this.data["RiskPostCode"],
        ProductName: this.data["ProductName"],
        ContactName: this.data["ContactName"],
        BookingDate: this.data["BookingDate"],
        AppointmentStartTime: this.data["AppointmentStartTime"],
        AppointmentEndTime: this.data["AppointmentEndTime"],
        BookingTimeType: this.data["BookingTimeType"],
        phone: this.data["phone"],
        ProductTypeId: this.data["ProductTypeId"],
        IsClaim: this.data["IsClaim"],
        BackgroundColour: this.data["BackgroundColour"],
        CLIENTNAME: this.data["CLIENTNAME"],
        ProductTypeName: this.data["ProductTypeName"],
        EngName : this.data["EngName"]

      };
      console.log("dddd "+JSON.stringify(dat));
      
      console.log("dddd "+JSON.stringify(res.rows.item(0)["JOBGUID"]));
      const navigationExtras: NavigationExtras = {
        state: {
        data: dat,
              }
       };
      this.router.navigate(['createcertificate'],navigationExtras);
      this.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [dat.JOBGUID,dat.CLAIMJOBID,this.data['JOBGUID']]);
      // updating on route and on Arrived
      this.auth.turnOnGpsAndGetLocation().subscribe((pos:Geoposition)=>{
        this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?",[dat.CLAIMJOBID,pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes',dat.JOBGUID ]);
        this.auth.database.executeSql("update arrived set CLAIMGUID=?, Lattitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?",[dat.CLAIMJOBID,pos.coords.latitude.toString(), pos.coords.longitude.toString(),this.auth.getdateformatV2(),'yes',dat.JOBGUID]);
        this.auth.dismissLoading();
      })  
    })

   // console.log("Data Fetched from this Job : "+this.data['JOBGUID']+""+this.data['CLAIMGUID']+"");
    

  }

  CannotCompleteClick(){

    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };   
    this.router.navigate(['cannotcomplete'],navigationExtras);
  }

  call(no :number){
    no == 1 ? window.open('tel:' +this.data['phone']) : window.open('tel:' +this.data['HomePhone'])
  }

  
  mapopen(){
    window.open('https://maps.google.com/?q='+this.data['RiskAddress']+' '+this.data['RiskPostCode'],'_system')
  }
  // syncRoute(){


  //   this.syncOnRoute().then((res)=>{
  //       console.log('SYNC SUCCESS'+JSON.stringify(res));
        
  //   }).catch((e)=>{
  //     console.log('SYNC SUCCESS'+JSON.stringify(e));

  //   });


  // }

  // syncArrved(){

  //   this.syncArrived().then((res)=>{
  //     console.log('SYNC SUCCESS'+JSON.stringify(res));
      
  // }).catch((e)=>{
  //   console.log('SYNC SUCCESS'+JSON.stringify(e));

  // });

  // }

  // syncArrived(){   
  //   this.auth.presentLoading('Syncing Arrived Table...');
  //    return new Promise((resolve, reject)=>{
  //     this.auth.database.executeSql('select * from arrived',[]).then((res)=>{
  //       console.log(' # # on arrived data '+JSON.stringify(res)+' '+res.rows.length+' '+res.rows.item(0)['JOBGUID']);  
  //       for(let i=0; i< res.rows.length; i++ ){
  //       let params = new HttpParams()
  //       .set('JOBGUID',res.rows.item(0)['JOBGUID'])
  //       .set('Latitude',res.rows.item(0)['Latitude'])
  //       .set('Longitude',res.rows.item(0)['Longitude'])
  //       .set('ArrAtJobDT',res.rows.item(0)['OnRouteDT'])
  //       .set('Desc','arrived')
  //       .set('title','arrived');
  //       this.auth.httpSend('Service_SaveArrivedAtJob',params,'post').subscribe(
  //         (res)=>{
  //             console.log('## SUCCESS arrived SYNC'+JSON.stringify(res));    
  //             this.auth.dismissLoading();
  //       },
  //       (err)=>{
  //         console.log('## ERROR arrived SYNC'+JSON.stringify(err));    
  //         this.auth.dismissLoading();
  //       }
  //       );       
  //     }// end of for loop
  //      this.auth.dismissLoading(); 
  //      resolve('arrived complete'); 
  //   }).catch((e)=>{ this.auth.dismissLoading(); console.log(' # # on arrived get data failed.'); reject('# # on arrived complete'); }
  //   );
  //   });  
  // }
  
  // syncOnRoute(){  
  //   this.auth.presentLoading('Syncing OnRoute Table...');
  //    return new Promise((resolve, reject)=>{
  //     this.auth.database.executeSql('select * from onroute',[]).then((res)=>{
  //       console.log(' # # on route data '+JSON.stringify(res)+' '+res.rows.length+' '+res.rows.item(0)['CLAIMGUID']);  
  //       for(let i=0; i< res.rows.length; i++ ){
  //       let params = new HttpParams()
  //       .set('CLAIMGUID',res.rows.item(0)['CLAIMGUID'])
  //       .set('JOBGUID',res.rows.item(0)['JOBGUID'])
  //       .set('Latitude',res.rows.item(0)['Latitude'])
  //       .set('Longitude',res.rows.item(0)['Longitude'])
  //       .set('OnRouteDT',res.rows.item(0)['OnRouteDT'])
  //       .set('Desc',this.auth.getdateformatV2())
  //       .set('title','onroute');               
  //       this.auth.httpSend('Service_SaveOnRoute',params,'post').subscribe(
  //         (res)=>{
  //             console.log('##SUCCESS ONROUTE SYNC'+JSON.stringify(res));
  //             this.auth.dismissLoading();             
  //       },
  //       (err)=>{
  //         console.log('##ERROR ONROUTE SYNC'+JSON.stringify(err));
  //         this.auth.dismissLoading();
  //       }                
  //       );       
  //     }// end of for loop
  //      this.auth.dismissLoading(); 
  //      resolve('onroute complete'); 
  //   }).catch((e)=>{console.log(' # # on route get data failed.'); reject('# # on route failed'+JSON.stringify(e)); }
  //   )
  //   }); 
  // }

  btnInventoryClick(){
 
    this.storage.get('enggid').then((res)=>{
      const browser = this.iab.create('https://inventory.home360.org.uk/?RefNo=' +
      this.data['CLAIMRef'] + '&' + 'ClaimId=' + this.data['CLAIMGUID'] + '&' + 'EngId=' + res,'_self',{
        zoom : 'no'
      });
      
  
    }).catch((e)=>{

    });
    
  }

  btnTicketClick(){
  const browser = this.iab.create('https://newticket.home360.org.uk/Claim/Ticket?JobID=' + this.data['JOBGUID'],'_self',{
    zoom : 'no'
  });
  }

  takePhoto(){
    console.log(this.data['CLAIMGUID']);
    this.options = {
      quality: 20,
      source: CameraSource.Camera,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false ,
    }
    Camera.getPhoto(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
      this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;

      this.auth.database.executeSql("update  enggpics set  pic=?, HaveData=?,latitude=?,longitude=?,onDt=? where JOBGUID=? ",[imageData,'yes',this.auth.lat,this.auth.long,this.auth.getdateformatV2(), this.data['JOBGUID']]).then((res)=>{
        this.auth.showToast('Success! Engineer Image has been saved.','success')
        let params = new HttpParams()
        .set("data",imageData.base64String)
        .set("CLAIMGUID",this.data['CLAIMGUID'])
        console.log(this.data['CLAIMGUID'])
        this.auth.httpSend("SavePhoto",params,"post").subscribe(res=>{
          console.log(res['Msg']);          
          this.auth.database.executeSql('delete from enggpics where JOBGUID= ?',[this.data['JOBGUID']])
        },err=>{
          console.log("send photo error"+err);
        })
      }).catch((e)=>{
        this.auth.showToast('Error Saving Engineer Image.'+e,'danger')
      });

      
   
     }, (err) => {
      this.auth.showToast('Error Getting Photo','danger')
     }); 
      
    }

  

    btnVSClick(){

      this.storage.get('enggid').then((enggid)=>{
        const browser = this.iab.create('https://hr.home360.org.uk/VanStockHistory/Index?ClaimId=' +
        this.data['CLAIMGUID']+ '&' + 'EngId=' + enggid,'_self',{
          zoom : 'no'
        });
      }).catch((e)=>{
  
      });
      
  
      
    }

  btnSiteSurveyClick(){
    this.auth.database.executeSql('insert into sitesurvey (JOBGUID) values(?)', [this.data['JOBGUID']]);                                      
    this.auth.database.executeSql('insert into sitesurveypics (JOBGUID) values(?)', [this.data['JOBGUID']]);                                                                         
    this.auth.database.executeSql('insert into sitesurveysign (JOBGUID) values(?)', [this.data['JOBGUID']]);
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };

     
    this.router.navigate(['sitesurvey'],navigationExtras);

 

    // this.storage.get('enggid').then((res)=>{
    //   const browser = this.iab.create('https://sitesurvey.home360.org.uk/?EngId=' +
    //   res + '&' + 'ClaimId=' + this.data['CLAIMGUID']);
    // }).catch((e)=>{

    // });

    
  }


}

