import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Form, NgForm } from "@angular/forms";
import { ApiService } from "../api.service";
import { HttpParams } from "@angular/common/http";
import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Storage } from "@ionic/storage";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ThemesService } from "../themes.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  isChecked: boolean;

  constructor(
    private storage: Storage,
    private androidPermission: AndroidPermissions,
    public navCtrl: NavController,
    private auth: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private platform: Platform,
    private splashscreen: SplashScreen,
    private iab: InAppBrowser,
    private themeService : ThemesService
  ) {
    route.params.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.storage.get("debugmode").then((res) => {
      if (res == "true") {
        this.themeService.enableDebugMode();
      } else {
        this.themeService.enableLiveMode();
      }
    });
    this.platform.ready().then((da) => {
      this.auth.checkNetwork();    
      this.storage
      .get("updateFirmware").then((res) => {
        console.log("Danish"+res);        
        if (res == "true") {
          console.log("Danish"+res);
          this.themeService.enableDebugMode();
        } else {
          this.themeService.enableLiveMode();
        }
      });
    });
    this.storage.get('isChecked').then(res=>{
      this.isChecked = res;
      if (res) {
        this.storage.get('username').then(un=>{
          this.storage.get('password').then(pw=>{
            console.log(un+" and "+pw);
            
            this.username = un;
            this.password = pw;
            // this.loginService(un,pw);
          })
        })
      }else{
        this.username = "";
        this.password = "";
      }
    })
 
  }

  focused: boolean;
  error: boolean;
  focused2: boolean;
  error2: boolean;
  username: string;
  password: string;
  newusername: string;
  devcolor= "#a71d31";

  onBlur(event: any) {
    const value = event.target.value;
    this.username = value;
    if (!value) {
      this.focused = false;
      this.error = true;
    } else {
      this.error = false;
    }
  }

  onBlur2(event: any) {
    const value = event.target.value;
    this.password = value;
    if (!value) {
      this.focused2 = false;
      this.error2 = true;
    } else {
      this.error2 = false;
    }
  }



  //Check if application having GPS access permission
  checkWritePermission() {
    this.androidPermission
      .checkPermission(this.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then(
        (result) => {
          if (result.hasPermission) {
            //If having permission show 'Turn On GPS' dialogue
          } else {
            //If not having permission ask for permission
            this.androidPermission
              .requestPermission(
                this.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE
              )
              .then(
                () => {
                  // call method to turn on GPS
                },
                (error) => {
                  //Show alert if user click on 'No Thanks'
                  alert(
                    "requestPermission Error requesting file read permissions " +
                      error
                  );
                }
              );
          }
        },
        (err) => {
          alert(err);
        }
      );
  }


  gotoRegister() {
    const browser = this.iab.create(
      "https://www.homeresponse360.co.uk/app-signup/"
    );
  }

  emptyjobslist() {
    return new Promise((resolve, reject) => {
      this.auth.database
        .executeSql("delete from jobslist", [])
        .then((res) => {
          resolve("jobslist resolved");
        })
        .catch((e) => {});
    });
  }


  async onSubmit(form: NgForm) {
    let a = await this.auth.checkNetwork();
    if (a.connected) {
      if(this.username==""||this.username==null||this.username==undefined){
        this.auth.showToast("Username cannot be empty.",'danger');
      }else {
        if(this.password==""||this.password==null||this.password==undefined){
        this.auth.showToast("Password cannot be empty.",'danger');
        }else{
          this.loginService(this.username,this.password);
          this.storage.set('username',this.username);
          this.storage.set('password',this.password);
        } 
      }
    } else {
      this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }
    
  }

  loginService(username : string, password : string){
    this.auth.firmwareUpdateCheck().then(res=>{
      console.log("Danish "+res);      
      this.auth.presentLoading("Please wait while we sign you in.");
      let params = new HttpParams()
      .set("username", username)
      .set("password", password)
      this.auth.httpSend("Service_Login", params, "post").subscribe(
      (resLogin) => {
        console.log();
        
        //resLogin = "18648a22-5f02-41bf-a171-d2873adc9c0b";
        if (resLogin["Msg"] == "Failed" || resLogin["Msg"] == "null") {
          this.auth.dismissLoading();
          this.auth.alert("The Username or Password that you've entered is either incorrect or misspelled. Please try again.","Invalid Credentials");
        } else {
          //login success
          this.storage.set('datasyncstatus','novice');
          this.storage.set("enggid", resLogin["Msg"]);
          this.gotoTabs(resLogin["Msg"]);
          // this.storage.get('loginCount').then((res)=>{
          //     console.log("plan login count before login page "+res);
          //     if (res == null || res == undefined || res == "null") {
          //       this.storage.set('datasyncstatus','novice');
          //       this.storage.set("loginCount", 1).then(()=>{
          //         this.gotoTabs(resLogin["Msg"]);
          //       });
                
          //     } else {
          //       this.storage.set('datasyncstatus','mature');
          //       this.storage.set("loginCount", (res+1)).then((res)=>{
          //         this.gotoTabs(resLogin["Msg"]);
          //       });
          //     }
          // }
          // ).catch(e=>{
          //   this.auth.dismissLoading();
          //   this.auth.showToast("unable to fetch previous login please clear data/cache and login again")
          // })
          if (this.isChecked) {
            this.storage.set('isChecked',this.isChecked);
          } else {
            this.storage.set('isChecked',this.isChecked);
          }
        }
      },
      (err) => {
        setTimeout(() => {
          this.auth.dismissLoading();
        }, 300);      
        this.auth.alert(err.message,err.name);
      }
    );
    });
  }

  gotoTabs(res:string){
    // this.storage.set('datasyncstatus','novice');
    this.storage.set("loginStatus", "true");
    this.auth.createEngineerInfoTable();
    this.createAllTables()
    .then((res) => {
    this.auth.dismissLoading();
    this.router.navigate(["tabs"]);
    }).catch((e) => {
    this.auth.dismissLoading();
    this.auth.alert(
    "Something went wrong. Try later after clearing data/cache" + e
    );
    });



    let params = new HttpParams()
      .set("enggid",res)
      this.auth.httpSend("Service_Engineerandcompanydetailsforpdfcreation", params, "post").subscribe(res=>{
        this.auth.database.executeSql('select * from EngInfo',[]).then(succ =>{
          console.log("sign length"+succ.rows.length);         
         if (succ.rows.length > 0) {
           this.auth.database.executeSql('update EngInfo set GasSafeNumber =?, EngCertName=?, GasSafeLicenseNumber=?, CompanyAddress=?, SubContractor=?, TypeName=?',
            [res['GasSafeNumber'],res['EngCertName'],res['GasSafeLicenseNumber'],res['CompanyAddress'],res['SubContractor'],res['TypeName']]);
         } else {          
           this.auth.database.executeSql('insert into EngInfo (GasSafeNumber, EngCertName, GasSafeLicenseNumber, CompanyAddress, SubContractor, TypeName, Sign) values(?,?,?,?,?,?,?)', [res['GasSafeNumber'],res['EngCertName'],res['GasSafeLicenseNumber'],res['CompanyAddress'],res['SubContractor'],res['TypeName']," "]);
         }
        })
      })                            
  }

  createAllTables() {
    return new Promise((resolve, reject) => {
      this.auth.createJobTable().then(
        (res) => {
          this.auth
            .createOnRouteTable()
            .then((res) => {
              this.auth
                .createArrivedTable()
                .then((res) => {
                  this.auth
                    .createJobsStatusTable()
                    .then((res) => {
                      this.auth
                        .createAbandonTable()
                        .then((res) => {
                          this.auth
                            .createAuthorizationTable()
                            .then((res) => {
                              this.auth
                                .createCompleteClaimTable()
                                .then((res) => {
                                  this.auth
                                    .createCompleteServiceTable()
                                    .then((res) => {
                                      this.auth
                                        .newApplianceTable()
                                        .then((res) => {
                                          this.auth
                                            .certificateTable()
                                            .then((res) => {
                                              this.auth
                                                .boilerInstallTable()
                                                .then((res) => {
                                                  this.auth
                                                    .boilerInstallPicsTable()
                                                    .then((res) => {
                                                      this.auth
                                                        .boilerInstallSignTable()
                                                        .then((res) => {
                                                          this.auth
                                                            .completedjobsTable()
                                                            .then((res) => {
                                                              this.auth
                                                                .enggPicsTable()
                                                                .then((res) => {
                                                                  this.auth
                                                                    .siteSurveyTable()
                                                                    .then(
                                                                      (res) => {
                                                                        this.auth
                                                                          .siteSurveyPics()
                                                                          .then(
                                                                            (
                                                                              res
                                                                            ) => {
                                                                              this.auth
                                                                                .siteSurveySign()
                                                                                .then(
                                                                                  (
                                                                                    res
                                                                                  ) => {
                                                                                    this.auth.createmakemodel()
                                                                                    .then(
                                                                                      (
                                                                                        res
                                                                                      ) => {
                                                                                        this.auth.createErrorLogTable().then(res =>{
                                                                                          this.auth.createFirmwareUrl().then(res=>{
                                                                                            resolve("All TABLES CREATED");  
                                                                                          }).catch(e=>{
                                                                                            reject(JSON.stringify(e));
                                                                                          });                                                                                                                                                                                
                                                                                        }).catch(e=>{
                                                                                          reject(JSON.stringify(e));
                                                                                        });                                                                        
                                                                                      })
                                                                                      .catch(
                                                                                        (
                                                                                          e
                                                                                        ) => {
                                                                                          reject(
                                                                                            JSON.stringify(
                                                                                              e
                                                                                            )
                                                                                          );
                                                                                        }
                                                                                      );
                                                                                   
                                                                                  }
                                                                                )
                                                                                .catch(
                                                                                  (
                                                                                    e
                                                                                  ) => {
                                                                                    reject(
                                                                                      JSON.stringify(
                                                                                        e
                                                                                      )
                                                                                    );
                                                                                  }
                                                                                );
                                                                            }
                                                                          )
                                                                          .catch(
                                                                            (
                                                                              e
                                                                            ) => {
                                                                              reject(
                                                                                JSON.stringify(
                                                                                  e
                                                                                )
                                                                              );
                                                                            }
                                                                          );
                                                                      }
                                                                    )
                                                                    .catch(
                                                                      (e) => {
                                                                        reject(
                                                                          JSON.stringify(
                                                                            e
                                                                          )
                                                                        );
                                                                      }
                                                                    );
                                                                })
                                                                .catch((e) => {
                                                                  reject(
                                                                    JSON.stringify(
                                                                      e
                                                                    )
                                                                  );
                                                                });
                                                            })
                                                            .catch((e) => {
                                                              reject(
                                                                JSON.stringify(
                                                                  e
                                                                )
                                                              );
                                                            });
                                                        })
                                                        .catch((e) => {
                                                          reject(
                                                            JSON.stringify(e)
                                                          );
                                                        });
                                                    })
                                                    .catch((e) => {
                                                      reject(JSON.stringify(e));
                                                    });
                                                })
                                                .catch((e) => {
                                                  reject(JSON.stringify(e));
                                                });
                                            })
                                            .catch((e) => {
                                              reject(JSON.stringify(e));
                                            });
                                        })
                                        .catch((e) => {
                                          reject(JSON.stringify(e));
                                        });
                                    })
                                    .catch((e) => {
                                      reject(JSON.stringify(e));
                                    });
                                })
                                .catch((e) => {
                                  reject(JSON.stringify(e));
                                });
                            })
                            .catch((e) => {
                              reject(JSON.stringify(e));
                            });
                        })
                        .catch((e) => {
                          reject(JSON.stringify(e));
                        });
                    })
                    .catch((e) => {
                      reject(JSON.stringify(e));
                    });
                })
                .catch((e) => {
                  reject(JSON.stringify(e));
                });
            })
            .catch((e) => {
              reject(JSON.stringify(e));
            });
        },
        (err) => {
          reject(JSON.stringify(err));
        }
      );
    });
  }
}
