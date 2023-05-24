import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpParams, JsonpClientBackend } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router, NavigationExtras } from "@angular/router";
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { AlertController, LoadingController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { ThemesService } from "../themes.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})

export class Tab1Page {
  public model = [];
  //public modell: String[];
  address = "";
  index: any;
  locationCoords: any;
  timetest: any;
  jobsListInsertId: any;
  onRoutePromise: any;
  // syncFlag :boolean = true;
  jobfetchmsg: string = "Please wait whilst the jobs are loading up. It may Take some time.";
  retryCount: number = 0;
  isJobsfetched: boolean = false;

  constructor(
    private storage: Storage,
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    private auth: ApiService,
    private geolocation: Geolocation,
    private androidPermission: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    public alertCtrl: AlertController,
    public themeService :ThemesService,
    public loadingController: LoadingController
  ) {
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: "",
    };
    this.timetest = Date.now();
  }

  ngOnInit() {
    this.auth.checkGPSPermission();
    this.getLocation();
    this.getJobs();
    // START FOR SYNC LOG ONLY
        this.auth.database.executeSql('create table if not exists SyncLog (JOBGUID  VARCHAR(32),  ActionName VARCHAR(32),  Msg varchar(32))', [])
          .then((res) => {      
            console.log('SyncLog created success ');
          }).catch((e) => {            
            console.log('SyncLog created failed ' + JSON.stringify(e));
          })
    // END FOR SYNC LOG ONLY

  }

  async showSyncAlert() {
    const alert = await this.alertCtrl.create({
      header: "Are you sure?",
      message: "You D",
      backdropDismiss: false,
      buttons: [
        {
          text: "Sync Now",
          handler: () => {
            this.syncAllJobs();
          },
        },
        {
          text: "Sync Later",
          handler: () => {},
        },
      ],
    });
    await alert.present();
  }

  syncClick(){
    this.syncDataToServer();
  }

  async getJobs() {
    let networkStatus = await this.auth.checkNetwork();
        this.storage.get("datasyncstatus").then((datasyncstatus) => {
          // this.storage.get('loginCount').then((res)=>{
          //   console.log("plan login count after login page "+res);
            if (datasyncstatus == "novice") {
              console.log("Plan A");          
              // EXECUTE PLAN B put jobslist from API
              if (networkStatus.connected) {
                this.getJobsfromApi();
              } else {
                this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
              }
            }else{
              console.log("Plan B");        
              this.getJobListFromLocal();
            }
            // } else if ((datasyncstatus == "mature" && res > 1)||(datasyncstatus == "novice" && res > 1)) {
            //   console.log("Plan B");
            //   //Execute Plan A
            //   // sync data to server
            //   // empty tables
            //   // then execute Plan B
            //   //this.syncDataToServer();
            //   this.getJobListFromLocal();
            // } else{
            //   console.log("Plan C");
            //   if (networkStatus.connected) {
            //     this.syncDataToServer();
            //   } else {
            //     this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
            //   }
            // }
            
          // }).catch((e) => {
          //   this.auth.showToast("LoginCount Error Somthing went wrong! unable to access ionic storage" + e,'danger');
          // });
        }).catch((e) => {
          this.auth.showToast("data Sync status Error Somthing went wrong! unable to access ionic storage" + e,'danger');
        });
  }

  segmentChanged(event: any) {}

  gotoDetails(CLAIMGUID: any) {
    this.auth.database
      .executeSql("select * from jobslist where CLAIMGUID=?", [CLAIMGUID])
      .then((res) => {
        console.log("dddd "+JSON.stringify(res.rows.item(0)));
        
        let dat = {
          CLAIMGUID: res.rows.item(0)["CLAIMGUID"],
          CLAIMRef: res.rows.item(0)["CLAIMRef"],
          CLAIMJOBID: res.rows.item(0)["CLAIMJOBID"],
          JOBGUID: res.rows.item(0)["JOBGUID"],
          RiskPostCode: res.rows.item(0)["RiskPostCode"],
          ProductName: res.rows.item(0)["ProductName"],
          ContactName: res.rows.item(0)["ContactName"],
          BookingDate: res.rows.item(0)["BookingDate"],
          AppointmentStartTime: res.rows.item(0)["AppointmentStartTime"],
          AppointmentEndTime: res.rows.item(0)["AppointmentEndTime"],
          BookingTimeType: res.rows.item(0)["BookingTimeType"],
          RiskAddress: res.rows.item(0)["RiskAddress"],
          phone: res.rows.item(0)["phone"],
          HomePhone: res.rows.item(0)["HomePhone"],
          ProductTypeId: res.rows.item(0)["ProductTypeId"],
          IsClaim: res.rows.item(0)["IsClaim"],
          BackgroundColour: res.rows.item(0)["BackgroundColour"],
          CLIENTNAME: res.rows.item(0)["CLIENTNAME"],
          ProductTypeName: res.rows.item(0)["ProductTypeName"],
          EngName : res.rows.item(0)["EngName"]
        };

        const navigationExtras: NavigationExtras = {
          state: {
            data: dat,
          },
        };
        //querychk
        this.router.navigate(["details"], navigationExtras).then(res=>
          console.log(res)
          
        ).catch(e=>console.log(e)
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  public getLocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5,
        };
        this.nativeGeocoder
          .reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result: NativeGeocoderResult[]) => {
            const responseAddress = [];
            for (const [key, value] of Object.entries(result[0])) {
              if (value.length > 0) {
                responseAddress.push(value);
              }
            }
            responseAddress.reverse();
            for (const value of responseAddress) {
              this.address += value + ", ";
            }
            this.address = this.address.slice();
            //  this.addressConfiramtion(this.address, lattitude, longitude);
          })
          .catch();
      })
      .catch((error) => {});
  }

  getJobListFromLocal(){
    console.log("calling get job from local");
    this.auth.database
    .executeSql("select * from jobslist ORDER BY RouteOrder ASC", [])
    .then((res) => {
      for (
        let i = 0;
        i < parseInt(JSON.stringify(res.rows.length));
        i++
      ) {
        this.model.push(res.rows.item(i));
      }
    })
    .catch((e) => {
      this.auth.showToast(
        "Error Fetching local jobs table " + JSON.stringify(e),'danger'
      );
    });
  }

  // TODO
  // getJobListFromAPI() {
  //   this.auth.firmwareUpdateCheck().then(res=>{
  //     console.log("Danish "+res);      
  //     this.auth.presentCustomLoader(this.jobfetchmsg);
  //     this.storage
  //       .get("enggid")
  //       .then((res) => {
  //         this.auth.speedCheck().then((resp : string|number)=>{     
  //           if (resp == "TimeOut") {           
  //             this.auth.dismissLoading();
  //             this.retryAlert("Need a Good internet connection. Please try again later after some time","Connection TimeOut");
  //           } else {
  //             if (resp > 1) {
  //               let params = new HttpParams()
  //               .set("EngineerID", res)
  //               .set("AppVersion", "2.1.8");
  //               console.log("DanishDev");
  //               this.auth
  //               .httpSend("Service_GetJobsForAEngineer2", params, "post")
  //               .subscribe(
  //                 (res) => {
  //                   this.model = [];
  //                   this.model = res;
  //                   this.model = this.model.sort((a,b)=> {
  //                     return a.RouteOrder - b.RouteOrder ;
  //                   });
  //                   if (this.model.length == 0) {
  //                     this.auth.alert("No Jobs Found or You are not assigned to any job. Please Try again after some time.");
  //                     this.auth.dismissLoading();
  //                   } else {
  //                     this.insertJobsInDB();
  //                   }
  //                 },
  //                 (err) => {
  //                   this.retryAlert("Cannot get Jobs. There might be some web service issue. Please try again after some time.","Web Service Issue");
  //                   setTimeout(() => {
  //                     this.auth.dismissLoading();
  //                   }, 300);              
  //                 }
  //               );
  //             } else {              
  //               this.auth.dismissLoading();
  //               this.retryAlert("Unable to Sync/Get Jobs! There might be some issue in your Internet connection, either it is too slow or it is not connected. Please Try again later.","Internet Connection Failed")
  //             }
  //           }
  //         }).catch(e=>{
  //           this.auth.dismissLoading();           
  //           this.retryAlert("There might be some issue please try again.","Unknown Error");
  //         });
  //       })
  //       .catch((e) => {
  //         this.auth.dismissLoading();
  //         this.auth.showToast("Erro Cannot get Engg. Info, Please Logout and Login again",'danger');
  //       });
  //   });
  // }

  getJobsfromApi() {   
    this.auth.getLocation();
      this.auth.presentCustomLoader(this.jobfetchmsg)
      .then(res=>{
        setTimeout(() => {
          if(!this.isJobsfetched){
            this.auth.dismissLoading();
            console.log("### after 30 sec calling this");
            if(!this.model.length)
            this.retryAlert('Somthing went wrong, Please re-sync.',"Unable to Get Jobs",`${3-this.retryCount} attempts Left`);
          }
        }, 30000);
      })
      this.storage
        .get("enggid")
        .then((res) => {
                let params = new HttpParams()
                .set("EngineerID", res)
                .set("AppVersion", "2.2");
                console.log("DanishDev");
                this.auth
                .httpSend("Service_GetJobsForAEngineer2", params, "post")
                .subscribe(
                  (res) => {
                    this.isJobsfetched = true;
                    this.model = [];
                    this.model = res;
                    console.log("dddd "+JSON.stringify(this.model));
                    this.model = this.model.sort((a,b)=> {
                      return a.RouteOrder - b.RouteOrder ;
                    });
                    console.log("### after soring in model and sorting");
                    
                    if (this.model.length == 0) {
                      this.auth.alert("No Jobs Found or You are not assigned to any job. Please Try again after some time.");
                      this.auth.dismissLoading();
                      console.log("### no jobs found");
                    } else {
                      console.log("### insert jobs in db calling");
                      this.insertJobsInDB();
                    }
                  },
                  (err) => {
                    this.retryAlert("Cannot get Jobs. There might be some web service issue. Please try again after some time.","Web Service Issue",`${3-this.retryCount} attempts Left`);
                    setTimeout(() => {
                      this.auth.dismissLoading();
                    }, 300);              
                  }
                );
              }).catch((e) => {
                        this.auth.dismissLoading();
                        this.retryAlert("Cannot get Engg Info, Please Logout and Login again","Database Error",`${3-this.retryCount} attempts Left`);
                      });

  }


  async insertJobsInDB() {
    let i = 1;
    for (const el of this.model) {
      console.log(`### updating ${i} of ${this.model.length} jobs`);
      this.auth.setLoadingText(`Please wait whilst the jobs are loading up. Updating ${i} of ${this.model.length} jobs`);
      await new Promise(resolve => {
        this.auth.database.executeSql(
          "insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,HomePhone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [
            el.CLAIMJOBID,
            el.CLAIMGUID,
            el.JOBGUID,
            el.RiskPostCode,
            el.ProductName,
            el.ContactName,
            el.BookingDate,
            el.AppointmentStartTime,
            el.AppointmentEndTime,
            el.BookingTimeType,
            el.RiskAddress,
            el.phone,
            el.HomePhone,
            el.ProductTypeId,
            el.IsClaim,
            el.BackgroundColour,
            el.CLIENTNAME,
            el.ProductTypeName,
            el.ListType,
            el.CLAIMRef,
            el.RouteOrder,
            el.ParentJobGuid,
            el.EngName
          ]
        ).then(()=>{
          resolve("");
          console.log("### jobslist inserted");
          }).catch(()=>{
            resolve("");
          console.log("### jobslist not inserted");
          });
      });
      await new Promise(resolve => {
        this.auth.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [
          el.JOBGUID
        ]).then(()=>{
          resolve("");
          console.log("### jobsstatus inserted");
          }).catch(()=>{
            resolve("");
          console.log("### jobsstatus not inserted");
          });
      });
      await new Promise(resolve => {
        this.auth.database.executeSql("insert into onroute (JOBGUID) values(?)", [
          el.JOBGUID
        ]).then(()=>{
          resolve("");
          console.log("### onroute inserted");
          }).catch(()=>{
            resolve("");
          console.log("### onroute not inserted");
          });
      });
      await new Promise(resolve => {
        this.auth.database.executeSql("insert into arrived (JOBGUID) values(?)", [
          el.JOBGUID
        ]).then(()=>{
          resolve("");
          console.log("### arrived inserted");
          }).catch(()=>{
            resolve("");
          console.log("### arrived not inserted");
          });
      });
      await new Promise(resolve => {
        this.auth.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [
          el.JOBGUID,el.ParentJobGuid
        ]).then(()=>{
          resolve("");
          console.log("### completeservice inserted");
          }).catch(()=>{
            resolve("");
          console.log("### completeservice not inserted");
          });
      });
      await new Promise(resolve => {
        this.auth.database.executeSql(
          "insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)",
          [el.JOBGUID,el.CLAIMGUID]
        ).then(()=>{
          resolve("");
          console.log("### enggpics inserted");
          }).catch(()=>{
            resolve("");
          console.log("### enggpics not inserted");
          });
      });
      ++i;
    }

    console.log("### all the data are inserted if its new");
    this.auth.dismissLoading();

    console.log("### Plan set satuts mature");        
    this.storage.set("datasyncstatus", "mature");

    // let counter = 1;
    // for (let i = 0; i < this.model.length; i++) {
    //   console.log(`### updating ${i+1} of ${this.model.length} jobs`);
    //   // this.auth.insertDataIntoJobsListTable(
    //     // this.model[i]["CLAIMJOBID"],
    //     // this.model[i]["CLAIMGUID"],
    //     // this.model[i]["JOBGUID"],
    //     // this.model[i]["RiskPostCode"],
    //     // this.model[i]["ProductName"],
    //     // this.model[i]["ContactName"],
    //     // this.model[i]["BookingDate"],
    //     // this.model[i]["AppointmentStartTime"],
    //     // this.model[i]["AppointmentEndTime"],
    //     // this.model[i]["BookingTimeType"],
    //     // this.model[i]["RiskAddress"],
    //     // this.model[i]["phone"],
    //     // this.model[i]["ProductTypeId"],
    //     // this.model[i]["IsClaim"],
    //     // this.model[i]["BackgroundColour"],
    //     // this.model[i]["CLIENTNAME"],
    //     // this.model[i]["ProductTypeName"],
    //     // this.model[i]["ListType"],
    //     // this.model[i]["CLAIMRef"],
    //     // this.model[i]["RouteOrder"],
    //     // this.model[i]["ParentJobGuid"],
    //     // this.model[i]["EngName"],
    //     // this.jobfetchmsg+` updating ${counter} of ${this.model.length} jobs`
    //   // );
    //   this.auth.database.executeSql(
    //     "insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    //     [
    //       this.model[i]["CLAIMJOBID"],
    //       this.model[i]["CLAIMGUID"],
    //       this.model[i]["JOBGUID"],
    //       this.model[i]["RiskPostCode"],
    //       this.model[i]["ProductName"],
    //       this.model[i]["ContactName"],
    //       this.model[i]["BookingDate"],
    //       this.model[i]["AppointmentStartTime"],
    //       this.model[i]["AppointmentEndTime"],
    //       this.model[i]["BookingTimeType"],
    //       this.model[i]["RiskAddress"],
    //       this.model[i]["phone"],
    //       this.model[i]["ProductTypeId"],
    //       this.model[i]["IsClaim"],
    //       this.model[i]["BackgroundColour"],
    //       this.model[i]["CLIENTNAME"],
    //       this.model[i]["ProductTypeName"],
    //       this.model[i]["ListType"],
    //       this.model[i]["CLAIMRef"],
    //       this.model[i]["RouteOrder"],
    //       this.model[i]["ParentJobGuid"],
    //       this.model[i]["EngName"],
    //     ]
    //   );
    //   this.auth.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [
    //     this.model[i]["JOBGUID"],
    //   ]);
    //   this.auth.database.executeSql("insert into onroute (JOBGUID) values(?)", [
    //     this.model[i]["JOBGUID"],
    //   ]);
    //   this.auth.database.executeSql("insert into arrived (JOBGUID) values(?)", [
    //     this.model[i]["JOBGUID"],
    //   ]);
    //   this.auth.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [
    //     this.model[i]["JOBGUID"],this.model[i]["ParentJobGuid"],
    //   ]);
    //   this.auth.database.executeSql(
    //     "insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)",
    //     [ this.model[i]["JOBGUID"],,  this.model[i]["CLAIMGUID"],]
    //   );

    //   if (i == this.model.length - 1) {
    //     console.log("### Plan set satuts mature");        
    //     this.storage.set("datasyncstatus", "mature");
    //     // setTimeout(() => {
    //     //   this.auth.dismissLoading();
    //     //   this.auth.dismissLoading();
    //     // }, 5000);
    //   }
    //   // counter++;
    // }
  }

  async syncDataToServer() {
    this.auth.firmwareUpdateCheck().then(res=>{
      console.log("Danish "+res);      
      this.auth.presentCustomLoader("Syncing Data. It may take some time. Please wait... Thank you").then(()=>{
        this.auth.addProgressBar();
      })
      this.auth.speedCheck().then((res : string|number)=>{     
        // this.auth.showToast(res)
        if (res == "TimeOut") {
          this.auth.setProgressBar("100")
          this.auth.dismissLoading();
          this.auth.alert("Need a Good internet connection. Please try again later after some time","Connection TimeOut")
        } else {
          if (res > 0.5) {
            this.syncAllJobs();
          } else {
            this.auth.setProgressBar("100")
            this.auth.dismissLoading();
            this.auth.alert("Unable to Sync/Get Jobs! Your Internet connection is too slow Please Try again later.","Poor Internet Connection")
          }
        }
      }).catch(e=>{
        this.auth.dismissLoading();
        this.auth.alert(JSON.stringify(e));
      });
    });
  }

  syncAllJobs(){
    this.syncOnRoute()
      .then((res) => {
        this.syncArrived()
          .then((res) => {
            this.syncAbandon()
              .then((res) => {
                this.syncAuthorization()
                  .then((res) => {
                    this.syncCertificate()
                      .then((res) => {
                        this.syncNewAppliance()
                          .then((res) => {
                            this.syncCompleteService1()
                              .then((res) => {
                                this.syncboilerInstallation()
                                  .then((res) => {
                                    this.syncBoilerInstallationPics()
                                      .then((res) => {
                                        this.syncBoilerInstallationSign()
                                          .then((res) => {
                                            this.syncCompleteClaim1()
                                              .then((res) => {
                                                this.syncEnggPic()
                                                  .then((res) => {
                                                    this.syncSiteSurvey()
                                                      .then((res) => {
                                                        this.syncSurveyPics()
                                                          .then((res) => {
                                                            this.syncSurveySign()
                                                              .then((res) => {
                                                                this.completesync();

                                                                // if(this.syncFlag){
                                                                //   this.resync();
                                                                // } else {
                                                                //   this.auth.database.executeSql('select * from errorlog',[]).then(res =>{
                                                                //     if (res.rows.length > 0) {
                                                                //       // this.auth.sendErrorLog();
                                                                //       // this.auth.SendErrorEmail();
                                                                //       this.completesync();
                                                                //     } else {
                                                                //       this.completesync();
                                                                //     }  
                                                                //   }); 
                                                                // }                                                                                                                                                                                                                                                                                                  
                                                              })
                                                              .catch((e) => {
                                                                this.auth.showToast(
                                                                  "syncSurveySign Error" +
                                                                    JSON.stringify(
                                                                      e
                                                                    ),'danger'
                                                                );
                                                              });
                                                          })
                                                          .catch((e) => {
                                                            this.auth.showToast(
                                                              "syncSurveyPics Error" +
                                                                JSON.stringify(
                                                                  e
                                                                ),'danger'
                                                            );
                                                          });
                                                      })
                                                      .catch((e) => {
                                                        this.auth.showToast(
                                                          "syncSiteSurvey Error" +
                                                            JSON.stringify(e),'danger'
                                                        );
                                                      });
                                                  })
                                                  .catch((e) => {
                                                    this.auth.showToast(
                                                      "syncEnggPic Sync Error" +
                                                        JSON.stringify(e),'danger'
                                                    );
                                                  });
                                              })
                                              .catch((e) => {
                                                this.auth.showToast(
                                                  "Complete claim Sync Error" +
                                                    JSON.stringify(e),'danger'
                                                );
                                              });
                                          })
                                          .catch((e) => {
                                            this.auth.showToast(
                                              "Boiler installation sign Sync Error" +
                                                JSON.stringify(e),'danger'
                                            );
                                          });
                                      })
                                      .catch((e) => {
                                        this.auth.showToast(
                                          "Boiler installation pics Sync Error" +
                                            JSON.stringify(e),'danger'
                                        );
                                      });
                                  })
                                  .catch((e) => {
                                    this.auth.showToast(
                                      "Boiler Installation Sync Error" +
                                        JSON.stringify(e),'danger'
                                    );
                                  });
                                //    }).catch((e) => {   this.auth.showToast('Make Certificate Sync Error' + JSON.stringify(e)) });
                              })
                              .catch((e) => {
                                this.auth.showToast(
                                  "Complete Service Sync Error" +
                                    JSON.stringify(e),'danger'
                                );
                              });
                          })
                          .catch((e) => {
                            this.auth.showToast(
                              "New Appliance Sync Error" + JSON.stringify(e),'danger'
                            );
                          });
                      })
                      .catch((e) => {
                        this.auth.showToast(
                          "certificate Sync Error" + JSON.stringify(e),'danger'
                        );
                      });
                  })
                  .catch((e) => {
                    this.auth.showToast(
                      "Authoraization Sync Error" + JSON.stringify(e),'danger'
                    );
                  });
              })
              .catch((e) => {
                this.auth.showToast("Abandon Sync Error" + JSON.stringify(e),'danger');
              });
          })
          .catch((e) => {
            this.auth.showToast("OnArrived Sync Error" + JSON.stringify(e),'danger');
          });
      })
      .catch((e) => {
        this.auth.showToast("OnRoute Sync Error" + JSON.stringify(e),'danger');
      });
      // setTimeout(() => {
      //   this.auth.dismissLoading();
      //   this.auth.alert("Please check you network setting and try again.","Connection Timed out")
      // }, 180000);
  }
  completesync() {
    this.auth.setProgressBar("100");
    this.auth.dismissLoading();
    this.auth.emptyAllTables();
    this.getJobsfromApi();
    // this.syncFlag = true;
  }
  resync() {
    this.syncAllJobs();
    // this.syncFlag = false;
  }

  syncOnRoute() {
    this.auth.setLoadingText("Syncing OnRoute. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("6.6");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from onroute where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("CLAIMGUID", res.rows.item(i)["CLAIMGUID"])
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("Latitude", res.rows.item(i)["Latitude"])
                .set("Longitude", res.rows.item(i)["Longitude"])
                .set("OnRouteDT", res.rows.item(i)["OnRouteDT"])
                .set("Desc", res.rows.item(i)["OnRouteDT"])
                .set("title", "On Route");
              this.auth
                .httpSend("Service_SaveOnRoute", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "OnRoute Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    //deleting syned data from database
                    this.auth.database.executeSql(
                      "delete from onroute where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );

                    if (array.length == res.rows.length) {
                      resolve("onroute complete");
                    }                    
                  },
                  (err) => {                    
                    // Start ErrorLog
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "OnRoute Failed", err["Msg"]);
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_SaveOnRoute";
                    // console.log(res.rows.item(i)["CLAIMGUID"]);
                    // let Descp = 
                    //   {
                    //     CLAIMGUID : res.rows.item(i)["CLAIMGUID"],
                    //     JOBGUID : res.rows.item(i)["JOBGUID"],
                    //     Latitude : res.rows.item(i)["Latitude"],
                    //     Longitude : res.rows.item(i)["Longitude"],
                    //     OnRouteDT : res.rows.item(i)["OnRouteDT"],
                    //     Desc : res.rows.item(i)["OnRouteDT"],
                    //     title : "On Route"
                    // }
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message));
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            } // end of for loop
          } else {
            resolve("onroute complete");
          }
        })
        .catch((e) => {
          reject("# # on route failed" + JSON.stringify(e));
        });
    });
  }

  syncArrived() {
    this.auth.setLoadingText("Syncing On Arrived. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("13.3");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from arrived where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("Latitude", res.rows.item(i)["Latitude"])
                .set("Longitude", res.rows.item(i)["Longitude"])
                .set("ArrAtJobDT", res.rows.item(i)["OnRouteDT"])
                .set("Desc", res.rows.item(i)["OnRouteDT"])
                .set("title", "Arrived at job");
              this.auth
                .httpSend("Service_SaveArrivedAtJob", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ArrivedAtJob Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    //deleting syned data from database
                    this.auth.database.executeSql(
                      "delete from arrived where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );

                    if (array.length == res.rows.length) {
                      resolve("OnArrive complete");
                    }
                  },
                  (err) => {
                    // Start ErrorLog
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ArrivedAtJob Failed", err["Msg"]);
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_SaveArrivedAtJob";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     Latitude: res.rows.item(i)["Latitude"],
                    //     Longitude: res.rows.item(i)["Longitude"],
                    //     ArrAtJobDT: res.rows.item(i)["OnRouteDT"],
                    //     Desc: res.rows.item(i)["OnRouteDT"],
                    //     title: "Arrived at job"
                    // }                      
                    // ;
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog                  
                    array.push(err["header"]);
                    this.auth.showToast(err.message)
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            } // end of for loop
          } else {
            resolve("OnArrive complete");
          }
        })
        .catch((e) => {
          reject("# # on arrived complete");
        });
    });
  }

  syncAbandon() {
    this.auth.setLoadingText("Syncing Abandon Call Out. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("20");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from abandon where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("OUTCOME", res.rows.item(i)["OUTCOME"])
                .set("PARTS", res.rows.item(i)["parts"])
                .set("LABOUR", res.rows.item(i)["labour"])
                .set("JOBNOTE", res.rows.item(i)["JOBNOTE"])
                .set("FILEBASE", res.rows.item(i)["FILEBASE"])
                .set("FILENAME", res.rows.item(i)["FILENAME"])
                .set("FORACTION", "AbandonCallOut")
                .set("OnDt", res.rows.item(i)["OnDt"])
                .set("Latitude", res.rows.item(i)["Latitude"])
                .set("Longitude", res.rows.item(i)["Longitude"])
                .set("ComboClaimJobId", "")
                .set("ComboIsCompleted", "")
                .set("CantCompleteReason", "");
              this.auth
                .httpSend("Service_AllEngineerActionsNew", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Abandoned Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    //deleting syned data from database
                    this.auth.database.executeSql(
                      "delete from abandon where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );

                    if (array.length == res.rows.length) {
                      resolve("Abandon complete");
                    }
                  },
                  (err) => {
                    // Start ErrorLog
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Abandoned Failed", err["Msg"]);
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_AllEngineerActionsNew";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     OUTCOME: res.rows.item(i)["OUTCOME"],                              
                    //     PARTS: res.rows.item(i)["parts"],
                    //     LABOUR: res.rows.item(i)["labour"],
                    //     JOBNOTE: res.rows.item(i)["JOBNOTE"],
                    //     FILEBASE: res.rows.item(i)["FILEBASE"],
                    //     FILENAME: res.rows.item(i)["FILENAME"],
                    //     FORACTION: "AbandonCallOut",
                    //     OnDt: res.rows.item(i)["OnDt"], 
                    //     Latitude: res.rows.item(i)["Latitude"],
                    //     Longitude: res.rows.item(i)["Longitude"],
                    //     ComboClaimJobId: "",
                    //     ComboIsCompleted: "",
                    //     CantCompleteReason: ""
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog                    
                    array.push(err["header"]);
                    this.auth.showToast(JSON.stringify(err.message))
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            }
          } else {
            resolve("Abandon complete");
          }
        })
        .catch((e) => {
          reject("# # on Abandon failed");
        });
    });
  }

  syncAuthorization() {
    this.auth.setLoadingText("Syncing Authorization. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("26.6");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from authorization where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("OUTCOME", res.rows.item(i)["OUTCOME"])
                .set("PARTS", res.rows.item(i)["parts"])
                .set("LABOUR", res.rows.item(i)["labour"])
                .set("JOBNOTE", res.rows.item(i)["JOBNOTE"])
                .set("FILEBASE", res.rows.item(i)["FILEBASE"])
                .set("FILENAME", res.rows.item(i)["FILENAME"])
                .set("FORACTION", "AuthorisationRequired")
                .set("OnDt", res.rows.item(i)["OnDt"])
                .set("Latitude", res.rows.item(i)["Latitude"])
                .set("Longitude", res.rows.item(i)["Longitude"])
                .set("ComboClaimJobId", "")
                .set("ComboIsCompleted", "")
                .set("CantCompleteReason", "");
              this.auth
                .httpSend("Service_AllEngineerActionsNew", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Authorization Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    //deleting syned data from database
                    this.auth.database.executeSql(
                      "delete from authorization where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );

                    if (array.length == res.rows.length) {
                      resolve("authorization complete");
                    }
                  },
                  (err) => {
                    // Start ErrorLog
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Authorization Failed", err["Msg"]);
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_AllEngineerActionsNew";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     OUTCOME: res.rows.item(i)["OUTCOME"],                              
                    //     PARTS: res.rows.item(i)["parts"],
                    //     LABOUR: res.rows.item(i)["labour"],
                    //     JOBNOTE: res.rows.item(i)["JOBNOTE"],
                    //     FILEBASE: res.rows.item(i)["FILEBASE"],
                    //     FILENAME: res.rows.item(i)["FILENAME"],
                    //     FORACTION: "AuthorisationRequired",
                    //     OnDt: res.rows.item(i)["OnDt"], 
                    //     Latitude: res.rows.item(i)["Latitude"],
                    //     Longitude: res.rows.item(i)["Longitude"],
                    //     ComboClaimJobId: "",
                    //     ComboIsCompleted: "",
                    //     CantCompleteReason: ""
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog       
                    this.auth.showToast(JSON.stringify(err.message))             
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            }
          } else {
            resolve("authorization complete");
          }
        })
        .catch((e) => {
          reject("# # on authorization failed");
        });
    });
  }

  syncNewAppliance() {
    this.auth.setLoadingText("Syncing Appliances. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("40");
    return new Promise((resolve, reject) => {
      resolve('resolved')
      let array = [];
      this.auth.database
        .executeSql("select * from newappliance where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("AppType", res.rows.item(i)["AppType"])
                .set("Make", res.rows.item(i)["Make"])
                .set("Model", res.rows.item(i)["Model"])
                .set("BType", res.rows.item(i)["BType"])
                .set("Loc", res.rows.item(i)["Loc"])
                .set("Flue", res.rows.item(i)["Flue"])
                .set("OwnedBy", res.rows.item(i)["OwnedBy"])
                .set("Inspected", res.rows.item(i)["Inspected"])
                .set("ZeroGov", res.rows.item(i)["ZeroGov"])
                .set("OPU", res.rows.item(i)["OPU"])
                .set("OptPrs", res.rows.item(i)["OptPrs"])
                .set("OSD", res.rows.item(i)["OSD"])
                .set("VS", res.rows.item(i)["VS"])
                .set("VCF", res.rows.item(i)["VCF"])
                .set("FOC", res.rows.item(i)["FOC"])
                .set("ComRead", res.rows.item(i)["ComRead"])
                .set("HRatio", res.rows.item(i)["HRatio"])
                .set("HCO2Val", res.rows.item(i)["HCO2Val"])
                .set("HCOPPM", res.rows.item(i)["HCOPPM"])
                .set("LRatio", res.rows.item(i)["LRatio"])
                .set("LCO2Val", res.rows.item(i)["LCO2Val"])
                .set("LCOPPM", res.rows.item(i)["LCOPPM"])
                .set("STU", res.rows.item(i)["STU"])
                .set("DefId", res.rows.item(i)["DefId"])
                .set("GIUSP", res.rows.item(i)["GIUSP"])
                .set("WarAdRec", res.rows.item(i)["WarAdRec"])
                .set("RemAc", res.rows.item(i)["RemAc"])
                .set("IsDelete", res.rows.item(i)["IsDelete"]);
              this.auth
                .httpSend("Service_ApplianceNew", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ApplianceNew Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    this.auth.database.executeSql(
                      "delete from newappliance where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    if (array.length == res.rows.length) {
                      resolve("newappliance complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ApplianceNew Failed", err["Msg"]);
                    // Start ErrorLog
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_ApplianceNew";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     AppType: res.rows.item(i)["AppType"],
                    //     Make: res.rows.item(i)["Make"],
                    //     Model: res.rows.item(i)["Model"],
                    //     BType: res.rows.item(i)["BType"],
                    //     Loc: res.rows.item(i)["Loc"],
                    //     Flue: res.rows.item(i)["Flue"],
                    //     OwnedBy: res.rows.item(i)["OwnedBy"],
                    //     Inspected: res.rows.item(i)["Inspected"],
                    //     ZeroGov: res.rows.item(i)["ZeroGov"],
                    //     OPU: res.rows.item(i)["OPU"],
                    //     OptPrs: res.rows.item(i)["OptPrs"],
                    //     OSD: res.rows.item(i)["OSD"],
                    //     VS: res.rows.item(i)["VS"],
                    //     VCF: res.rows.item(i)["VCF"],
                    //     FOC: res.rows.item(i)["FOC"],
                    //     ComRead: res.rows.item(i)["ComRead"],
                    //     HRatio: res.rows.item(i)["HRatio"],
                    //     HCO2Val: res.rows.item(i)["HCO2Val"],
                    //     HCOPPM: res.rows.item(i)["HCOPPM"],
                    //     LRatio: res.rows.item(i)["LRatio"],
                    //     LCO2Val: res.rows.item(i)["LCO2Val"],
                    //     LCOPPM: res.rows.item(i)["LCOPPM"],
                    //     STU: res.rows.item(i)["STU"],
                    //     DefId: res.rows.item(i)["DefId"],
                    //     GIUSP: res.rows.item(i)["GIUSP"],
                    //     WarAdRec: res.rows.item(i)["WarAdRec"],
                    //     RemAc: res.rows.item(i)["RemAc"],
                    //     IsDelete: res.rows.item(i)["IsDelete"],
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("newappliance complete");
                    }
                  }
                );
            } // end of for loop
          } else {
            resolve("newappliance complete");
          }
        })
        .catch((e) => {
          reject("# # on newappliance failed");
        });
    });
  }

  syncCertificate() {
    this.auth.setLoadingText("Syncing Certificates. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("33.2");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from certificate where HaveData=?", ["yes"])
        .then((res) => {
          console.log("dddd "+JSON.stringify(res.rows.item(0)));
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("DetailsWork", res.rows.item(i)["DetailsWork"])
                .set("NoOfAppTested", res.rows.item(i)["NoOfAppTested"])
                .set("NextDueDt", res.rows.item(i)["NextDueDt"])
                .set("OGIns", res.rows.item(i)["OGIns"])
                .set("OGSup", res.rows.item(i)["OGSup"])
                .set("ECon", res.rows.item(i)["ECon"])
                .set("OGTight", res.rows.item(i)["OGTight"])
                .set("COFitted", res.rows.item(i)["COFitted"])
                .set("COTested", res.rows.item(i)["COTested"])
                .set("EquiBond", res.rows.item(i)["EquiBond"])
                .set("SigImage", res.rows.item(i)["SigImage"])
                .set("SigRec", res.rows.item(i)["SigRec"])
                .set("FlueChkDt", res.rows.item(i)["FlueChkDt"])
                .set("ClaimJobId", res.rows.item(i)["CLAIMJOBID"])
                .set("ParentJobGuid", res.rows.item(i)["ParentJobGuid"]);
              this.auth
                .httpSend("Service_Certificate", params, "post")
                .subscribe(
                  (msg) => {
                    console.log('#### cert succ'+JSON.stringify(msg));                    
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "certificate Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    this.auth.database.executeSql(
                      "delete from certificate where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    if (array.length == res.rows.length) {
                      resolve("certificate complete");
                    }
                  },
                  (err) => {
                    console.log('#### cert err'+JSON.stringify(err));     
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "certificate Failed", JSON.stringify(err));
                    // Start ErrorLog
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_Certificate";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     DetailsWork: res.rows.item(i)["DetailsWork"],
                    //     NoOfAppTested: res.rows.item(i)["NoOfAppTested"],
                    //     NextDueDt: res.rows.item(i)["NextDueDt"],
                    //     OGIns: res.rows.item(i)["OGIns"],
                    //     OGSup: res.rows.item(i)["OGSup"],
                    //     ECon: res.rows.item(i)["ECon"],
                    //     OGTight: res.rows.item(i)["OGTight"],
                    //     COFitted: res.rows.item(i)["COFitted"],
                    //     COTested: res.rows.item(i)["COTested"],
                    //     EquiBond: res.rows.item(i)["EquiBond"],
                    //     SigImage: res.rows.item(i)["SigImage"],
                    //     SigRec: res.rows.item(i)["SigRec"],
                    //     FlueChkDt: res.rows.item(i)["FlueChkDt"],
                    //     ClaimJobId: res.rows.item(i)["ClaimJobId"],
                    //     ParentJobGuid: ""
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("certificate complete");
                    }
                  },()=>{

                  }
                );
            } // end of for loop
          } else {
            resolve("certificate complete");
          }
        })
        .catch((e) => {
          reject("# # on certificate failed");
        });
      resolve("certificate complete");
    });
  }

  syncCompleteClaim1() {
    this.auth.setLoadingText("Syncing Claims Completed It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("73");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from completeclaim where HaveData=?", ["yes"])
        .then((completeClaimRes) => {
          if (completeClaimRes.rows.length > 0) {
            //For Loop Start
            for (let i = 0; i < completeClaimRes.rows.length; i++) {
              if (completeClaimRes.rows.item(i)["BackgroundColour"] == "#20B2AA") {
                // check for the combo job
                console.log("combo check for the combo job ");                
                this.auth.database
                  .executeSql(
                    "select * from completeservice where ParentJobGuid=?",
                    [completeClaimRes.rows.item(i)["JOBGUID"]]
                  )
                  .then((serviceResG) => {
                    if (serviceResG.rows.item(0)["HaveData"] == "combo") {
                      // check is  service also completed then sync BOTH claim and service
                      console.log("combo check is  service also completed then sync BOTH claim and service");  
                      let params = new HttpParams() //Sync Claim
                        .set("JOBGUID", completeClaimRes.rows.item(i)["JOBGUID"])
                        .set("OUTCOME", completeClaimRes.rows.item(i)["OUTCOME"])
                        .set("PARTS", completeClaimRes.rows.item(i)["PARTS"])
                        .set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"])
                        .set("JOBNOTE", completeClaimRes.rows.item(i)["JOBNOTE"])
                        .set("FILEBASE", completeClaimRes.rows.item(i)["FILEBASE"])
                        .set("FILENAME", completeClaimRes.rows.item(i)["FILENAME"])
                        .set("FORACTION", "Claim")
                        .set("OnDt", completeClaimRes.rows.item(i)["OnDt"])
                        .set("Latitude", completeClaimRes.rows.item(i)["Latitude"])
                        .set("Longitude", completeClaimRes.rows.item(i)["Longitude"])
                        .set("ComboClaimJobId", completeClaimRes.rows.item(i)["ComboClaimJobId"])
                        .set("ComboIsCompleted", "true")
                        .set("CantCompleteReason",serviceResG.rows.item(i)["CantCompleteReason"]);
                      this.auth.httpSend("Service_AllEngineerActionsNew",params,"post")
                        .subscribe(
                          (claimSyncResponse) => {                            
                            console.log("combo claim synced");  
                            // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Success", claimSyncResponse["Msg"]);
                            this.auth.database.executeSql(
                              "delete from completeclaim where JOBGUID=?",
                              [completeClaimRes.rows.item(i)["JOBGUID"]]
                            );
                            // Sync Service
                            let params = new HttpParams()
                              .set("JOBGUID",serviceResG.rows.item(i)["JOBGUID"])
                              .set("OUTCOME",serviceResG.rows.item(i)["OUTCOME"])
                              .set("PARTS", serviceResG.rows.item(i)["PARTS"])
                              .set("LABOUR", serviceResG.rows.item(i)["LABOUR"])
                              .set("JOBNOTE",serviceResG.rows.item(i)["JOBNOTE"])
                              .set("FILEBASE",serviceResG.rows.item(i)["FILEBASE"])
                              .set("FILENAME",serviceResG.rows.item(i)["FILENAME"])
                              .set("FORACTION", "Service")
                              .set("OnDt", serviceResG.rows.item(i)["OnDt"])
                              .set( "Latitude",completeClaimRes.rows.item(i)["Latitude"])
                              .set("Longitude",completeClaimRes.rows.item(i)["Longitude"])
                              .set("ComboClaimJobId",completeClaimRes.rows.item(i)["ComboClaimJobId"])
                              .set("ComboIsCompleted", "true")
                              .set("CantCompleteReason",serviceResG.rows.item(i)["CantCompleteReason"]);
                              this.auth.httpSend("Service_AllEngineerActionsNew", params,"post")
                              .subscribe(
                                (serviceSyncResponse) => {
                                  console.log("combo service synced");  
                                  // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Combo S Success", serviceSyncResponse["Msg"]);
                                  this.auth.database.executeSql(
                                    "delete from completeservice where JOBGUID=?",
                                    [serviceResG.rows.item(i)["JOBGUID"]]
                                  );
                                  array.push(serviceSyncResponse["Msg"]);
                                  if (
                                    array.length == completeClaimRes.rows.length
                                  ) {
                                    resolve("Combo complete");
                                  }
                                  //
                                },
                                (serviceSyncError) => {
                                  // Start ErrorLog
                                  // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Combo S Failed", serviceSyncError["Msg"]);
                                  // let errorMsg = JSON.stringify(serviceSyncError);
                                  // let actionName ="Service_AllEngineerActionsNew";
                                  // let Descp = 
                                  //   {
                                  //     JOBGUID: serviceResG.rows.item(i)["JOBGUID"],
                                  //     OUTCOME: serviceResG.rows.item(i)["OUTCOME"],
                                  //     PARTS: serviceResG.rows.item(i)["PARTS"],
                                  //     LABOUR: serviceResG.rows.item(i)["LABOUR"],
                                  //     JOBNOTE: serviceResG.rows.item(i)["JOBNOTE"],
                                  //     FILEBASE: serviceResG.rows.item(i)["FILEBASE"],
                                  //     FILENAME: serviceResG.rows.item(i)["FILENAME"],
                                  //     FORACTION: "Service",
                                  //     OnDt: serviceResG.rows.item(i)["OnDt"],
                                  //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                                  //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                                  //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                                  //     ComboIsCompleted: "true",
                                  //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                                  // }                      
                                  // ; 
                                  // let Desc = JSON.stringify(Descp);
                                  // this.auth.insertIntoErrorLog(errorMsg, serviceResG.rows.item(i)['JOBGUID'],  actionName, Desc);
                                  // End of ErrorLog
                                  this.auth.showToast(JSON.stringify(serviceSyncError.message))
                                  array.push(serviceSyncError["header"]);
                                  if (
                                    array.length == completeClaimRes.rows.length
                                  ) {
                                    resolve("enggpics complete");
                                  }
                                }
                              );

                            //
                          },
                          (claimSyncError) => {
                            // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Failed", claimSyncError["Msg"]);
                            // Start ErrorLog
                            // let errorMsg = JSON.stringify(claimSyncError);
                            // let actionName ="Service_AllEngineerActionsNew";
                            // let Descp = 
                            //   {
                            //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                            //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                            //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                            //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                            //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                            //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                            //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                            //     FORACTION: "Claim",
                            //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                            //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                            //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                            //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                            //     ComboIsCompleted: "true",
                            //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                            // }                      
                            // ; 
                            // let Desc = JSON.stringify(Descp);
                            // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                            // End of ErrorLog
                            this.auth.showToast(JSON.stringify(claimSyncError.message))
                            array.push(claimSyncError["header"]);
                            if (array.length == completeClaimRes.rows.length) {
                              resolve("enggpics complete");
                            }
                          }
                        );
                    } else {
                      console.log("combo service of combo job not completed");  
                      console.log("combo Sync Only Claim not service");  
                      // service of combo job not completed
                      // Sync Only Claim not service
                      let params = new HttpParams()
                        .set(
                          "JOBGUID",
                          completeClaimRes.rows.item(i)["JOBGUID"]
                        )
                        .set(
                          "OUTCOME",
                          completeClaimRes.rows.item(i)["OUTCOME"]
                        )
                        .set("PARTS", completeClaimRes.rows.item(i)["PARTS"])
                        .set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"])
                        .set(
                          "JOBNOTE",
                          completeClaimRes.rows.item(i)["JOBNOTE"]
                        )
                        .set(
                          "FILEBASE",
                          completeClaimRes.rows.item(i)["FILEBASE"]
                        )
                        .set(
                          "FILENAME",
                          completeClaimRes.rows.item(i)["FILENAME"]
                        )
                        .set("FORACTION", "Claim")
                        .set("OnDt", completeClaimRes.rows.item(i)["OnDt"])
                        .set(
                          "Latitude",
                          completeClaimRes.rows.item(i)["Latitude"]
                        )
                        .set(
                          "Longitude",
                          completeClaimRes.rows.item(i)["Longitude"]
                        )
                        .set(
                          "ComboClaimJobId",
                          completeClaimRes.rows.item(i)["ComboClaimJobId"]
                        )
                        .set("ComboIsCompleted", "false")
                        .set(
                          "CantCompleteReason",
                          serviceResG.rows.item(i)["CantCompleteReason"]
                        );
                      this.auth
                        .httpSend(
                          "Service_AllEngineerActionsNew",
                          params,
                          "post"
                        )
                        .subscribe(
                          (claimSyncResponse) => {
                            // this.auth.insertIntoSyncLog(serviceResG.rows.item(i)['JOBGUID'],  "CC Suceess", claimSyncResponse["Msg"]);
                            this.auth.database.executeSql(
                              "delete from completeclaim where JOBGUID=?",
                              [completeClaimRes.rows.item(i)["JOBGUID"]]
                            );
                            array.push(completeClaimRes["Msg"]);
                            if (array.length == completeClaimRes.rows.length) {
                              resolve("Claim complete but Service Pending");
                            }
                          },
                          (claimSyncError) => {
                            // Start ErrorLog
                            // this.auth.insertIntoSyncLog(serviceResG.rows.item(i)['JOBGUID'],  "CC Failed", claimSyncError["Msg"]);
                            // let errorMsg = JSON.stringify(claimSyncError);
                            // let actionName ="Service_AllEngineerActionsNew";
                            // let Descp = 
                            //   {
                            //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                            //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                            //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                            //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                            //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                            //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                            //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                            //     FORACTION: "Claim",
                            //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                            //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                            //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                            //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                            //     ComboIsCompleted: "true",
                            //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                            // }                      
                            // ; 
                            // let Desc = JSON.stringify(Descp);
                            // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                            // End of ErrorLog
                            this.auth.showToast(JSON.stringify(claimSyncError.message))
                            array.push(claimSyncError["header"]);
                            if (array.length == completeClaimRes.rows.length) {
                              resolve("enggpics complete");
                            }
                          }
                        );
                    }
                  })
                  .catch();
              } else {
                // if job is not combo then sync claim

                let params = new HttpParams()
                  .set("JOBGUID", completeClaimRes.rows.item(i)["JOBGUID"])
                  .set("OUTCOME", completeClaimRes.rows.item(i)["OUTCOME"])
                  .set("PARTS", completeClaimRes.rows.item(i)["PARTS"])
                  .set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"])
                  .set("JOBNOTE", completeClaimRes.rows.item(i)["JOBNOTE"])
                  .set("FILEBASE", completeClaimRes.rows.item(i)["FILEBASE"])
                  .set("FILENAME", completeClaimRes.rows.item(i)["FILENAME"])
                  .set("FORACTION", "Claim")
                  .set("OnDt", completeClaimRes.rows.item(i)["OnDt"])
                  .set("Latitude", completeClaimRes.rows.item(i)["Latitude"])
                  .set("Longitude", completeClaimRes.rows.item(i)["Longitude"])
                  .set("ComboClaimJobId", "")
                  .set("ComboIsCompleted", "")
                  .set("CantCompleteReason", "");
                this.auth
                  .httpSend("Service_AllEngineerActionsNew", params, "post")
                  .subscribe(
                    (msg) => {
                      // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Success", msg["Msg"]);
                      this.auth.database.executeSql(
                        "delete from completeclaim where JOBGUID=?",
                        [completeClaimRes.rows.item(i)["JOBGUID"]]
                      );
                      array.push(msg["Msg"]);
                      if (array.length == completeClaimRes.rows.length) {
                        resolve("claim complete");
                      }
                      //
                    },
                    (claimSyncError) => {
                      // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Claim Failed", claimSyncError["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(claimSyncError);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                      //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                      //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                      //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                      //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                      //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                      //     FORACTION: "Claim",
                      //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                      //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                      //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason:""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      this.auth.showToast(JSON.stringify(claimSyncError.message))
                      array.push(claimSyncError["header"]);
                      if (array.length == completeClaimRes.rows.length) {
                        resolve("enggpics complete");
                      }
                    }
                  );
              }
            }
            //For Loop End
          } else {
            resolve("success No Data in Claim");
          }
        })
        .catch((completeClaimError) => {
          reject(" error complete claim" + JSON.stringify(completeClaimError));
        });
    });
  }

  syncCompleteService1() {
    this.auth.setLoadingText("Syncing Completed Services. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("46.6");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from completeservice where HaveData=?", ["yes"])
        .then((completeServiceRes) => {
          if (completeServiceRes.rows.length > 0) {
            for (let i = 0; i < completeServiceRes.rows.length; i++) {
              console.log("Danish inside sync service");
              let params = new HttpParams()                
                .set("JOBGUID", completeServiceRes.rows.item(i)["JOBGUID"])
                .set("OUTCOME", completeServiceRes.rows.item(i)["OUTCOME"])
                .set("PARTS", completeServiceRes.rows.item(i)["PARTS"])
                .set("LABOUR", completeServiceRes.rows.item(i)["LABOUR"])
                .set("JOBNOTE", completeServiceRes.rows.item(i)["JOBNOTE"])
                .set("FILEBASE", completeServiceRes.rows.item(i)["FILEBASE"])
                .set("FILENAME", completeServiceRes.rows.item(i)["FILENAME"])
                .set("FORACTION", "Service")
                .set("OnDt", completeServiceRes.rows.item(i)["OnDt"])
                .set("Latitude", completeServiceRes.rows.item(i)["Latitude"])
                .set("Longitude", completeServiceRes.rows.item(i)["Longitude"])
                .set("ComboClaimJobId", "")
                .set("ComboIsCompleted", "")
                .set("CantCompleteReason", "");
              this.auth
                .httpSend("Service_AllEngineerActionsNew", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(completeServiceRes.rows.item(i)['JOBGUID'],  "Service Success", msg["Msg"]);
                    this.auth.database.executeSql(
                      "delete from completeservice where JOBGUID=?",
                      [completeServiceRes.rows.item(i)["JOBGUID"]]
                    );

                    array.push(msg["Msg"]);
                    if (array.length == completeServiceRes.rows.length) {
                      resolve("complete SERVICE complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(completeServiceRes.rows.item(i)['JOBGUID'],  "Serive Failed", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: completeServiceRes.rows.item(i)["JOBGUID"],
                      //     OUTCOME: completeServiceRes.rows.item(i)["OUTCOME"],
                      //     PARTS: completeServiceRes.rows.item(i)["PARTS"],
                      //     LABOUR: completeServiceRes.rows.item(i)["LABOUR"],
                      //     JOBNOTE: completeServiceRes.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: completeServiceRes.rows.item(i)["FILEBASE"],
                      //     FILENAME: completeServiceRes.rows.item(i)["FILENAME"],
                      //     FORACTION: "Service",
                      //     OnDt: completeServiceRes.rows.item(i)["OnDt"],
                      //     Latitude: completeServiceRes.rows.item(i)["Latitude"],
                      //     Longitude: completeServiceRes.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason:""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, completeServiceRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == completeServiceRes.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            } //for loop
          } else {
            resolve("complete SERVICE complete");
          }
        })
        .catch((completeServiceError) => {});
    });
  }

  syncboilerInstallation() {
    this.auth.setLoadingText("Syncing Boiler Installation Report. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("53");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from boilerinstallation where HaveData=?", [
          "yes",
        ])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("BLocation", res.rows.item(i)["BLocation"])
                .set("BLocation_Desc", res.rows.item(i)["BLocation_Desc"])
                .set("BFlue", res.rows.item(i)["BFlue"])
                .set("FlueExtension", res.rows.item(i)["FlueExtension"])
                .set("StandOffKit", res.rows.item(i)["StandOffKit"])
                .set("D45Elbow", res.rows.item(i)["D45Elbow"])
                .set("D90Elbow", res.rows.item(i)["D90Elbow"])
                .set("GasRun", res.rows.item(i)["GasRun"])
                .set("CGasRun_Desc", res.rows.item(i)["CGasRun_Desc"])
                .set("CGasRun", res.rows.item(i)["CGasRun"])
                .set("GasRun_Desc", res.rows.item(i)["GasRun_Desc"])
                .set("ActionDt", res.rows.item(i)["ActionDt"])
                .set("Latitude", res.rows.item(i)["Latitude"])
                .set("Longitude", res.rows.item(i)["Longitude"]);
              this.auth
                .httpSend("Service_BInsReport", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsRep Success", msg["Msg"]);
                    this.auth.database.executeSql(
                      "update boilerinstallationpics set SSID = ? where JOBGUID=?",
                      [msg["Msg"], res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "update boilerinstallationsign set SSID = ? where JOBGUID=?",
                      [msg["Msg"], res.rows.item(i)["JOBGUID"]]
                    );
                    array.push(msg["Msg"]);
                    if (array.length == res.rows.length) {
                      resolve("boilerinstallation complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsRep Failed", err["Msg"]);
                      // Start ErrorLog
                    //   let errorMsg = JSON.stringify(err);
                    //   let actionName ="Service_BInsReport";
                    //   let Descp = 
                    //     {
                    //       JOBGUID: res.rows.item(i)["JOBGUID"],
                    //       BLocation: res.rows.item(i)["BLocation"],
                    //       BLocation_Desc: res.rows.item(i)["BLocation_Desc"],
                    //       BFlue: res.rows.item(i)["BFlue"],
                    //       FlueExtension: res.rows.item(i)["FlueExtension"],
                    //       StandOffKit: res.rows.item(i)["StandOffKit"],
                    //       D45Elbow: res.rows.item(i)["D45Elbow"],
                    //       D90Elbow: res.rows.item(i)["D90Elbow"],
                    //       GasRun: res.rows.item(i)["GasRun"],
                    //       CGasRun_Desc: res.rows.item(i)["CGasRun_Desc"],
                    //       CGasRun: res.rows.item(i)["CGasRun"],
                    //       GasRun_Desc: res.rows.item(i)["GasRun_Desc"],
                    //       ActionDt: res.rows.item(i)["ActionDt"],
                    //       Latitude: res.rows.item(i)["Latitude"],
                    //       Longitude: res.rows.item(i)["Longitude"],
                    //   }                      
                    //   ; 
                    //   let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                );
            }
          } else {
            resolve("boilerinstallation complete");
          }
        })
        .catch((e) => {});
    });
  }

  syncBoilerInstallationPics() {
    this.auth.setLoadingText("Syncing Boiler Installation Images. It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("59");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from boilerinstallationpics where HaveData=?", [
          "yes",
        ])
        .then((res) => {
          if (res.rows.length) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("SSID", res.rows.item(i)["SSID"])
                .set("BImage", res.rows.item(i)["BImage"])
                .set("BPWImage", res.rows.item(i)["BPWImage"])
                .set("CTImage", res.rows.item(i)["CTImage"])
                .set("FSImage", res.rows.item(i)["FSImage"])
                .set("IFImage", res.rows.item(i)["IFImage"])
                .set("FILImage",res.rows.item(i)["FILImage"])
                .set("EFTImage", res.rows.item(i)["EFTImage"])
                .set("ACCImage", res.rows.item(i)["ACCImage"])
                .set("TImage", res.rows.item(i)["TImage"])
                .set("BMCImage", res.rows.item(i)["BMCImage"])
                .set("A1Image", res.rows.item(i)["A1Image"])
                .set("A2Image", res.rows.item(i)["A2Image"])
                .set("A3Image", res.rows.item(i)["A3Image"])
                .set("A4Image", res.rows.item(i)["A4Image"])
                .set("A5Image", res.rows.item(i)["A5Image"]);
              this.auth.httpSend("Service_BInsImags", params, "post").subscribe(
                (msg) => {
                  // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsPic Success", msg["Msg"]);
                  array.push(msg["Msg"]);
                  if (array.length == res.rows.length) {
                    resolve("boilerinstallationpics complete");
                  }
                },
                (err) => {
                  // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsPic Failed", err["Msg"]);
                  // Start ErrorLog
                  // let errorMsg = JSON.stringify(err);
                  // let actionName ="Service_BInsImags";
                  // let Descp = 
                  //   {
                  //     SSID: res.rows.item(i)["SSID"],
                  //     BImage: res.rows.item(i)["BImage"],
                  //     BPWImage: res.rows.item(i)["BPWImage"],
                  //     CTImage: res.rows.item(i)["CTImage"],
                  //     FSImage: res.rows.item(i)["FSImage"],
                  //     IFImage: res.rows.item(i)["IFImage"],
                  //     FILImage:res.rows.item(i)["FILImage"],
                  //     EFTImage: res.rows.item(i)["EFTImage"],
                  //     ACCImage: res.rows.item(i)["ACCImage"],
                  //     TImage: res.rows.item(i)["TImage"],
                  //     BMCImage: res.rows.item(i)["BMCImage"],
                  //     A1Image: res.rows.item(i)["A1Image"],
                  //     A2Image: res.rows.item(i)["A2Image"],
                  //     A3Image: res.rows.item(i)["A3Image"],
                  //     A4Image: res.rows.item(i)["A4Image"],
                  //     A5Image: res.rows.item(i)["A5Image"]
                  // }                      
                  // ; 
                  // let Desc = JSON.stringify(Descp);
                  //   this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                  // End of ErrorLog
                  this.auth.showToast(JSON.stringify(err.message))
                  array.push(err["header"]);
                  if (array.length == res.rows.length) {
                    resolve("enggpics complete");
                  }
                }
              );
            } // end of for loop
          } else {
            resolve("boilerinstallationpics complete");
          }
        })
        .catch((e) => {
          reject("# # sync Boiler Installation Pics failed");
        });
    });
  }

  syncBoilerInstallationSign() {
    this.auth.setLoadingText("Syncing Boiler Installation Signatures It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("66.3");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select * from boilerinstallationsign where HaveData=?", [
          "yes",
        ])
        .then((res) => {
          if (res.rows.length) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("SSID", res.rows.item(i)["SSID"])
                .set("BInsComplete", res.rows.item(i)["BInsComplete"])
                .set("BInsComplete_Reason",res.rows.item(i)["BInsComplete_Reason"])
                .set("BInsDefects", res.rows.item(i)["BInsDefects"])
                .set("BInsDefects_Reason",res.rows.item(i)["BInsDefects_Reason"])
                .set("BInsDamage", res.rows.item(i)["BInsDamage"])
                .set("BInsDamage_Reason", res.rows.item(i)["BInsDamage_Reason"])
                .set("BInsAddNotes", res.rows.item(i)["BInsAddNotes"])
                .set("InstallerSig", res.rows.item(i)["InstallerSig"])               
                .set("CustomerSig", res.rows.item(i)["CustomerSig"])               
                .set("InstallerName", res.rows.item(i)["InstallerName"])
                .set("CustomerName", res.rows.item(i)["CustomerName"]);
              this.auth
                .httpSend("Service_BInsSignature", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsSig Success", msg["Msg"]);
                    this.auth.database.executeSql(
                      "delete from boilerinstallation where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "delete from boilerinstallationpics where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "delete from boilerinstallationsign where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );

                    array.push(msg["Msg"]);
                    if (array.length == res.rows.length) {
                      resolve("boilerinstallationsign complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsSig Success", err["Msg"]);
                    // Start ErrorLog
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_BInsSignature";
                    // let Descp = 
                    //   {
                    //     SSID: res.rows.item(i)["SSID"],
                    //     BInsComplete: res.rows.item(i)["BInsComplete"],
                    //     BInsComplete_Reason:res.rows.item(i)["BInsComplete_Reason"],
                    //     BInsDefects: res.rows.item(i)["BInsDefects"],
                    //     BInsDefects_Reason:res.rows.item(i)["BInsDefects_Reason"],
                    //     BInsDamage: res.rows.item(i)["BInsDamage"],
                    //     BInsDamage_Reason: res.rows.item(i)["BInsDamage_Reason"],
                    //     BInsAddNotes: res.rows.item(i)["BInsAddNotes"],
                    //     InstallerSig: res.rows.item(i)["InstallerSig"],               
                    //     CustomerSig: res.rows.item(i)["CustomerSig"],               
                    //     InstallerName: res.rows.item(i)["InstallerName"],
                    //     CustomerName: res.rows.item(i)["CustomerName"]
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    //   this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics complete");
                    }
                  }
                ); //subscribe end
            } // end of for loop
          } else {
            resolve("boilerinstallationsign complete");
          }
        })
        .catch((e) => {
          reject("# # on boilerinstallationsign failed");
        });
    });
  }

  // donloadNative(urlpdf: string, JOBGUID: string) {
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .downloadFile(
  //         urlpdf, //https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf
  //         { id: "12", message: "test" },
  //         { Authorization: "OAuth2: token" },
  //         this.file.externalRootDirectory +
  //           "download/" +
  //           JOBGUID +
  //           "certificate.pdf"
  //       )
  //       .then((response) => {
  //         // prints 200

  //         resolve(JSON.stringify(response.status));
  //         this.auth.database
  //           .executeSql(
  //             "update jobsstatus set CertificateLocalURI=? where JOBGUID=?",
  //             [
  //               this.file.externalRootDirectory +
  //                 "download/" +
  //                 JOBGUID +
  //                 "certificate.pdf",
  //               JOBGUID,
  //             ]
  //           )
  //           .then((res) => {})
  //           .catch((e) => {});
  //       })
  //       .catch((response) => {
  //         reject(JSON.stringify(response.error));
  //       });
  //   });
  // }

  syncEnggPic() {
    this.auth.setLoadingText("Syncing Engineers Pictures  It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("80");
    return new Promise((resolve, reject) => {
      let array = [];
      this.auth.database
        .executeSql("select *  from enggpics where HaveData=?", ["yes"])
        .then((resp) => {
          if (resp.rows.length > 0) {
            for (let i = 0; i < resp.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", resp.rows.item(i)["JOBGUID"])
                .set("JOBNOTE", resp.rows.item(i)["JOBNOTE"])
                .set("OUTCOME", resp.rows.item(i)["OUTCOME"])
                .set("PARTS", resp.rows.item(i)["PARTS"])
                .set("LABOUR", resp.rows.item(i)["LABOUR"])
                .set("FILEBASE", resp.rows.item(i)["pic"])
                .set("FILENAME", "Take Image")
                .set("FORACTION", "Take Image")
                .set("OnDt", resp.rows.item(i)["onDt"])
                .set("Latitude", resp.rows.item(i)["latitude"])
                .set("Longitude", resp.rows.item(i)["longitude"])
                .set("ComboClaimJobId", "")
                .set("ComboIsCompleted", "")
                .set("CantCompleteReason", "");
              this.auth
                .httpSend("Service_AllEngineerActionsNew", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(resp.rows.item(i)['JOBGUID'],  "EngSig Success", msg["Msg"]);
                    array.push(msg["Msg"]);
                    if (array.length == resp.rows.length) {
                      resolve("enggpics complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(resp.rows.item(i)['JOBGUID'],  "EngSig Failed", err["Msg"]);
                    // Start ErrorLog
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_AllEngineerActionsNew";
                    // let Descp = 
                    //   {
                    //     JOBGUID: resp.rows.item(i)["JOBGUID"],
                    //     OUTCOME: resp.rows.item(i)["OUTCOME"],
                    //     PARTS: resp.rows.item(i)["PARTS"],
                    //     LABOUR: resp.rows.item(i)["LABOUR"],
                    //     JOBNOTE: resp.rows.item(i)["JOBNOTE"],
                    //     FILEBASE: resp.rows.item(i)["FILEBASE"],
                    //     FILENAME: "Take Image",
                    //     FORACTION: "Take Image",
                    //     OnDt: resp.rows.item(i)["OnDt"],
                    //     Latitude: resp.rows.item(i)["Latitude"],
                    //     Longitude: resp.rows.item(i)["Longitude"],
                    //     ComboClaimJobId: "",
                    //     ComboIsCompleted: "",
                    //     CantCompleteReason:""
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, resp.rows.item(i)["JOBGUID"],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == resp.rows.length) {
                      resolve("enggpics incomplete" + JSON.stringify(err));
                    }
                  }
                );
            } // end of for loop
          } else {
            resolve("enggpics complete");
          }
        })
        .catch((e) => {
          reject(JSON.stringify(e));
        });
    });
  }

  // sync site survey

  syncSiteSurvey() {
    this.auth.setLoadingText("Syncing Site Survey Report It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("85.5");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from sitesurvey where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("JOBGUID", res.rows.item(i)["JOBGUID"])
                .set("NB", res.rows.item(i)["siteSurveyboiler"])
                .set("BReq", res.rows.item(i)["siteSurveyboilerdescription"])
                .set("BLocation", res.rows.item(i)["locationboiler"])
                .set("NBLocation", res.rows.item(i)["NewBoilerLocationSelect"])
                .set("BLocation_Desc",res.rows.item(i)["NewBoilerLocationDesc"])
                .set("BFlue", res.rows.item(i)["FlueSelect"])
                .set("FlueExtension", res.rows.item(i)["FlueextensionsSelect"])
                .set("StandOffKit", res.rows.item(i)["StandOffKitSelect"])
                .set("D45Elbow",res.rows.item(i)["FourtyfivedegreeelbowSelect"])
                .set("D90Elbow", res.rows.item(i)["NinetydegreeelbowSelect"])
                .set("StandingInletPressure",res.rows.item(i)["StandingInletPressue"])
                .set("SSReason", res.rows.item(i)["SiteSurveyReason"])
                .set("SPrdctType", res.rows.item(i)["SiteSurveyProductType"])
                .set("GasRun", res.rows.item(i)["GasRunSelect"])
                .set("GasRun_Desc", res.rows.item(i)["GasRunNewDetails"])
                .set("CGasRun", res.rows.item(i)["CondensateGasSelect"])
                .set("CGasRun_Desc",res.rows.item(i)["CondensateGasNewDetails"])
                .set("WorkingInletPressure",res.rows.item(i)["WorkingInletPressue"])
                .set("ActionDt", this.auth.getdateformatV2())
                .set("Latitude", this.auth.lat)
                .set("Longitude", this.auth.long)
                .set("TRVs", res.rows.item(i)["trvs"]);

              this.auth
                .httpSend("Service_BInsReport_SS", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyRep Success", msg["Msg"]);
                    console.log("Danish SS Report"+msg["Msg"]);
                    this.auth.database.executeSql(
                      "update sitesurveypics set SSID = ? where JOBGUID=?",
                      [msg["Msg"], res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "update sitesurveysign set SSID = ? where JOBGUID=?",
                      [msg["Msg"], res.rows.item(i)["JOBGUID"]]
                    );

                    array.push(msg["Msg"]);
                    if (array.length == res.rows.length) {
                      resolve("sitesurvey complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyRep Failed", err["Msg"]);
                    // Start ErrorLog
                    // console.log("Danish BInsReport error "+JSON.stringify(err));
                    
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_BInsReport_SS";
                    // let Descp = 
                    //   {
                    //     JOBGUID: res.rows.item(i)["JOBGUID"],
                    //     NB: res.rows.item(i)["siteSurveyboiler"],
                    //     BReq: res.rows.item(i)["siteSurveyboilerdescription"],
                    //     BLocation: res.rows.item(i)["locationboiler"],
                    //     NBLocation: res.rows.item(i)["NewBoilerLocationSelect"],
                    //     BLocation_Desc:res.rows.item(i)["NewBoilerLocationDesc"],
                    //     BFlue: res.rows.item(i)["FlueSelect"],
                    //     FlueExtension: res.rows.item(i)["FlueextensionsSelect"],
                    //     StandOffKit: res.rows.item(i)["StandOffKitSelect"],
                    //     D45Elbow:res.rows.item(i)["FourtyfivedegreeelbowSelect"],
                    //     D90Elbow: res.rows.item(i)["NinetydegreeelbowSelect"],
                    //     StandingInletPressure:res.rows.item(i)["StandingInletPressue"],
                    //     SSReason: res.rows.item(i)["SiteSurveyReason"],
                    //     SPrdctType: res.rows.item(i)["SiteSurveyProductType"],
                    //     GasRun: res.rows.item(i)["GasRunSelect"],
                    //     GasRun_Desc: res.rows.item(i)["GasRunNewDetails"],
                    //     CGasRun: res.rows.item(i)["CondensateGasSelect"],
                    //     CGasRun_Desc:res.rows.item(i)["CondensateGasNewDetails"],
                    //     WorkingInletPressure:res.rows.item(i)["WorkingInletPressue"],                
                    //     ActionDt: this.auth.getdateformatV2(),
                    //     Latitude: this.auth.locationCoords.coords.latitude,
                    //     Longitude: this.auth.locationCoords.coords.longitude,
                    //     TRVs : res.rows.item(i)["trvs"]
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics incomplete");
                    }
                  }
                );
            }
          } else {
            resolve("sitesuvery complete");
          }
        })
        .catch((e) => {
          reject(" sync survey error");
        });
    });
  }

  syncSurveyPics() {
    this.auth.setLoadingText("Syncing Site Survey Images It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("92");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from sitesurveypics where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("SSID", res.rows.item(i)["SSID"])
                .set("BImage", res.rows.item(i)["BoilerImage"])
                .set("BPWImage", res.rows.item(i)["Boilerpipework"])
                .set("CTImage", res.rows.item(i)["CondensateterminationImage"])
                .set("FSImage", res.rows.item(i)["FusespurImage"])
                .set("IFImage", res.rows.item(i)["InternalflueImage"])
                .set("FILImage", res.rows.item(i)["FlueInLoftImage"])
                .set("EFTImage", res.rows.item(i)["ExternalflueterminalImage"])
                .set("ACCImage",res.rows.item(i)["AiringCupboardCylinderImage"])
                .set("TImage", '')
                .set('BMCImage', '')
                .set("STLImage", res.rows.item(i)["STLImage"])
                .set("DOLImage", res.rows.item(i)["DrainOffLocationFlagImage"])
                .set("GMImage", res.rows.item(i)["GasMeterImage"])
                .set("A1Image", res.rows.item(i)["AdditionalOne"])
                .set("A2Image", res.rows.item(i)["AdditionalTwo"])
                .set("A3Image", res.rows.item(i)["AdditionalThree"])
                .set("A4Image", res.rows.item(i)["AdditionalFour"]);

              this.auth
                .httpSend("Service_BInsImags_SS", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyPic Success", msg["Msg"]);
                    console.log("Danish pic succ"+msg["Msg"]);
                    array.push(msg["Msg"]);
                    if (array.length == res.rows.length) {
                      resolve("sitesurveypic complete");
                    }
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyPic Failed", err["Msg"]);
                    // Start ErrorLog
                    // console.log("Danish BInsImags error "+JSON.stringify(err));
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_BInsImags_SS";
                    // let Descp = 
                    //   {
                    //     SSID: res.rows.item(i)["SSID"],
                    //     BImage: res.rows.item(i)["BoilerImage"],
                    //     BPWImage: res.rows.item(i)["Boilerpipework"],
                    //     CTImage: res.rows.item(i)["CondensateterminationImage"],
                    //     FSImage: res.rows.item(i)["FusespurImage"],
                    //     IFImage: res.rows.item(i)["InternalflueImage"],
                    //     FILImage: res.rows.item(i)["FlueInLoftImage"],
                    //     EFTImage: res.rows.item(i)["ExternalflueterminalImage"],
                    //     ACCImage:res.rows.item(i)["AiringCupboardCylinderImage"],
                    //     TImage: '',
                    //     BMCImage: '',
                    //     STLImage: res.rows.item(i)["STLImage"],
                    //     DOLImage: res.rows.item(i)["DrainOffLocationFlagImage"],
                    //     GMImage: res.rows.item(i)["GasMeterImage"],
                    //     A1Image: res.rows.item(i)["AdditionalOne"],
                    //     A2Image: res.rows.item(i)["AdditionalTwo"],
                    //     A3Image: res.rows.item(i)["AdditionalThree"],
                    //     A4Image: res.rows.item(i)["AdditionalFour"]
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("enggpics incomplete");
                    }
                  }
                );
            }
          } else {
            resolve(" sync  sitesuvery Pics complete");
          }
        })
        .catch((e) => {
          reject(" sync survey error");
        });
    });
  }

  syncSurveySign() {
    this.auth.setLoadingText("Syncing Site Survey Signatures It may take some time. Please wait... Thank you");
    this.auth.setProgressBar("96");
    let array = [];
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("select * from sitesurveysign  where HaveData=?", ["yes"])
        .then((res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let params = new HttpParams()
                .set("SSID", res.rows.item(i)["SSID"])
                .set("BInsAddNotes", res.rows.item(i)["describeIssue"])
                .set("InstallerSig", res.rows.item(i)["surveyorsign"])
                .set("CustomerSig", res.rows.item(i)["customersign"])
                .set("InstallerName", res.rows.item(i)["surveyorname"])
                .set("CustomerName", res.rows.item(i)["customername"]);

              this.auth
                .httpSend("Service_BInsSignature_SS", params, "post")
                .subscribe(
                  (msg) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveySig Success", msg["Msg"]);
                    console.log("Danish sig"+JSON.stringify(msg));
                    
                    this.auth.database.executeSql(
                      "delete from sitesurvey where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "delete from sitesurveypics where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    this.auth.database.executeSql(
                      "delete from sitesurveysign where JOBGUID=?",
                      [res.rows.item(i)["JOBGUID"]]
                    );
                    array.push(msg["Msg"]);
                    //sync SS button Clicked
                    console.log("Danish caim ref, ssid , buton "+res.rows.item(i)["CLAIMRef"],res.rows.item(i)["SSID"],res.rows.item(i)["ButtonClicked"]);
                    
                    let params = new HttpParams()
                      .set("Ref247", res.rows.item(i)["CLAIMRef"])
                      .set("SiteSurveyNewsId", res.rows.item(i)["SSID"])
                      .set("BtnClick", res.rows.item(i)["ButtonClicked"]);
                    this.auth
                      .httpSend(
                        "SwChannelApi_SiteSurveyButtonsClicked",
                        params,
                        "post"
                      )
                      .subscribe(
                        (btn_msg) => {
                          // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyButton Success", btn_msg["Msg"]);
                          if (array.length == res.rows.length) {
                            resolve("sitesuvery sign complete");
                          }
                        },
                        (btn_err) => {
                          // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyButton Failed", btn_err["Msg"]);
                          // console.log("Danish error button err"+JSON.stringify(btn_err));
                          // // Start ErrorLog
                          // let errorMsg = JSON.stringify(btn_err);
                          // let actionName ="SwChannelApi_SiteSurveyButtonsClicked";
                          // let Descp = 
                          //   {
                          //     Ref247: res.rows.item(i)["CLAIMRef"],
                          //     SiteSurveyNewsId: res.rows.item(i)["SSID"],
                          //     BtnClick: res.rows.item(i)["ButtonClicked"],
                          // }                      
                          // ; 
                          // let Desc = JSON.stringify(Descp);
                          // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                          // // End of ErrorLog
                          this.auth.showToast(JSON.stringify(btn_err.message))
                          if (array.length == res.rows.length) {
                            resolve("sitesuvery sign incomplete");
                          }
                        }
                      );
                  },
                  (err) => {
                    // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveySig Failed", err["Msg"]);
                    // console.log("Danish BInsSignature error "+JSON.stringify(err));
                    // // Start ErrorLog
                    // let errorMsg = JSON.stringify(err);
                    // let actionName ="Service_BInsSignature_SS";
                    // let Descp = 
                    //   {
                    //     SSID: res.rows.item(i)["SSID"],
                    //     BInsAddNotes: res.rows.item(i)["describeIssue"],
                    //     InstallerSig: res.rows.item(i)["surveyorsign"],
                    //     CustomerSig: res.rows.item(i)["customersign"],
                    //     InstallerName: res.rows.item(i)["surveyorname"],
                    //     CustomerName: res.rows.item(i)["customername"]
                    // }                      
                    // ; 
                    // let Desc = JSON.stringify(Descp);
                    // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                    // // End of ErrorLog
                    this.auth.showToast(JSON.stringify(err.message))
                    array.push(err["header"]);
                    if (array.length == res.rows.length) {
                      resolve("sitesurvay complete");
                    }
                  }
                );
            }
          } else {
            resolve(" sync survey Installation Pics complete");
          }
        })
        .catch((e) => {
          reject(" sync survey error");
        });
    });
  }

  retryAlert(msg: string, hdr?: string, subHeader?:string) {
    console.log("ddddd "+this.retryCount);
    ++this.retryCount;
    console.log("ddddd "+this.retryCount);
    if (this.retryCount<=3) {
      this.alertCtrl
      .create({
        header: hdr || "Alert Message",
        subHeader : subHeader,
        cssClass: "custom-class",
        message: msg,
        backdropDismiss: false,
        buttons: [
          {
            text: "Re-Try",
            handler: () => {
              this.getJobsfromApi();
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
    } else {
      this.auth.alert("Unexpected Error Occured Please Contact IT Support Team");
    }
}

}
