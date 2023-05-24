import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
// import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { AlertController, Platform, ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { BehaviorSubject, Observable } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { HashTable } from "angular-hashtable";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { SpeedTestService } from "ng-speed-test";
import { ConnectionStatus, Network } from '@capacitor/network';
import { NavigationExtras, Router } from "@angular/router";
import { SQLite, SQLiteObject } from "@awesome-cordova-plugins/sqlite/ngx";
// import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';

declare const Email :any;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  networkStatus: ConnectionStatus;
  public database: SQLiteObject;
  public rowData = [];
  public list: Array<String> = [];
  public makeList: Array<any> = [];
  public makeArray = [];
  public makeModelMap = new Map();
  has = new HashTable<String, String[]>();
  locationCoords: Geoposition;
  lat: any;
  long: any;
  locationData = [];
  username: string;
  /////// https://app.ws.developer.ventureprise.cloud/service1.asmx/             tanushree

  //////// https://ws-v3.ventureprise.cloud/service1.asmx/                  sabir

  public status: string;
  // public url = "https://beta-wsmobileapp.247development.uk/service1.asmx/";
  public url = "https://mobileappapi.home360.org.uk/service1.asmx/";
  public debugUrl = "";
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  
  constructor(
    public geolocation: Geolocation,
    private androidPermission: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    public toastController: ToastController,
    private splashscreen: SplashScreen,
    public loadingController: LoadingController,
    private httpClient: HttpClient,
    private platform: Platform,
    private sqlite: SQLite,
    public alertCtrl: AlertController,
    private storage: Storage,
    private speedTestService: SpeedTestService,
    private router : Router,
    // public openSettings: OpenNativeSettings,
  ) {
    this.lat = " ";
    this.long = " "
    this.platform.ready().then((da) => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
        })
        .catch(e => console.log(e));
    });
  }

  // loader
  presentLoading(msg: string) {
    this.loadingController
      .create({
        spinner: "bubbles",
        message: msg,
        cssClass : "custom-class",
      })
      .then((res) => {
        res.present();
      })
      .catch((e) => { });
  }

  //Custom Loader
    presentCustomLoader(msg: string) {
      return new Promise((resolve, reject)=>{
        this.loadingController
        .create({
          spinner: "bubbles",
          cssClass: "my-custom-class",
          message: msg,
        })
        .then((res) => {
          res.present();
          resolve("");
        })
        .catch((e) => { });
      });    
    }

  //update loading text 
  setLoadingText(text:string){
    const elem = document.querySelector(
      "div.loading-wrapper div.loading-content");
    if(elem) elem.innerHTML = text;
  }

   //Progress Bar
   addProgressBar(){
    const elem = document.querySelector("div.loading-wrapper");
    let newElement = document.createElement('ion-progress-bar');
    newElement.setAttribute("value","0.05")
    newElement.setAttribute("class","progressbar")
    if(elem) elem.append(newElement)
  }

  setProgressBar(val:string){
    let value = (parseInt(val)/100) ;
    const elem = document.querySelector("ion-progress-bar");
    if(elem) elem.setAttribute("value",value.toString());
  }
  //alert
  // presentAlert(subHead: string, msg: string): Promise<boolean> {
  //   this.dismissLoading();
  //   return new Promise((resolve, reject) => {
  //     const ctl = this.alertCtrl;
  //     let alert: any = this.alertCtrl
  //       .create({
  //         header: "Error Message",
  //         subHeader: subHead,
  //         cssClass: "custom-class",
  //         message: msg,
  //         buttons: [
  //           {
  //             text: "OK",
  //             handler: () => {
  //               ctl.dismiss().then(() => {
  //                 this.presentLoading("Syncing Data Please Wait");
  //                 resolve(true);
  //               });
  //               return false;
  //             },
  //           },
  //         ],
  //       })
  //       .then((dlg) => dlg.present());
  //   });
  // }

  alert(msg: string, hdr?: string) {
    return new Promise((resolve) => {
      this.alertCtrl
        .create({
          header: hdr || "Alert Message",
          cssClass: "custom-class",
          subHeader: msg,
          backdropDismiss: false,
          buttons: [
            {
              text: "OK",
              handler: () => {
                resolve("");
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    });
  }


  async showToast(msg, clr?, time?) {
    const toast = await this.toastController.create({
      cssClass: "my-toast",
      color: clr || "dark",
      message: msg,
      duration: time || 3000,
    });
    toast.present();
  }

  dismissLoading() {
    this.loadingController.dismiss((res) => { }).catch((e) => { });
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      console.log("inside getlocation");
      navigator.geolocation.getCurrentPosition((position) => {
        this.long = position.coords.longitude;
        this.lat = position.coords.latitude;
        console.log('#location ' + this.lat + ' ' + this.long);
        resolve(position);
        this.locationCoords = position;
      },
      (err)=>{
        console.log("#location "+JSON.stringify(err));
      },
      {enableHighAccuracy: true, timeout : 10000, maximumAge : 3000}
      );
    });
  }
  // JOBS TABLE
  public createJobTable() {
    return new Promise((resolve, reject) => {
      //this.database
      this.database
        .executeSql(
          "create table IF NOT EXISTS jobslist(CLAIMJOBID VARCHAR(32), CLAIMGUID VARCHAR(32),JOBGUID VARCHAR(32) NOT NULL UNIQUE, RiskPostCode VARCHAR(32), ProductName VARCHAR(32),ContactName VARCHAR(32), BookingDate VARCHAR(32), AppointmentStartTime VARCHAR(32), AppointmentEndTime VARCHAR(32), BookingTimeType VARCHAR(32),RiskAddress VARCHAR(32), phone VARCHAR(32), HomePhone VARCHAR(32), ProductTypeId VARCHAR(32),IsClaim VARCHAR(32),BackgroundColour VARCHAR(32), CLIENTNAME VARCHAR(32), ProductTypeName VARCHAR(32), ListType VARCHAR(32), CLAIMRef VARCHAR(32), SyncStatus VARCHAR(32), RouteOrder INTEGER, ParentJobGuid VARCHAR(32), EngName  VARCHAR(32))",
          []
        )
        .then((d) => {
          resolve("promise resolved");
        }) //id INTEGER PRIMARY KEY AUTOINCREMENT,
        .catch((e) => {
          reject("promise reject");
        });
    });
  }

  // public insertDataIntoJobsListTable(
  //   CLAIMJOBID: string,
  //   CLAIMGUID: string,
  //   JOBGUID: string,
  //   RiskPostCode: string,
  //   ProductName: string,
  //   ContactName: string,
  //   BookingDate: string,
  //   AppointmentStartTime: string,
  //   AppointmentEndTime: string,
  //   BookingTimeType: string,
  //   RiskAddress: string,
  //   phone: string,
  //   ProductTypeId: string,
  //   IsClaim: string,
  //   BackgroundColour: string,
  //   CLIENTNAME: string,
  //   ProductTypeName: string,
  //   ListType: string,
  //   CLAIMRef: string,
  //   RouteOrder: string,
  //   ParentJobGuid: string,
  //   EngName : string,
  //   msg : string,
  // ) {
  //   this.database.executeSql(
  //     "insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  //     [
  //       CLAIMJOBID,
  //       CLAIMGUID,
  //       JOBGUID,
  //       RiskPostCode,
  //       ProductName,
  //       ContactName,
  //       BookingDate,
  //       AppointmentStartTime,
  //       AppointmentEndTime,
  //       BookingTimeType,
  //       RiskAddress,
  //       phone,
  //       ProductTypeId,
  //       IsClaim,
  //       BackgroundColour,
  //       CLIENTNAME,
  //       ProductTypeName,
  //       ListType,
  //       CLAIMRef,
  //       RouteOrder,
  //       ParentJobGuid,
  //       EngName
  //     ]
  //   ).then(res =>{
  //     this.setLoadingText(msg);
  //   }).catch(res =>{
  //     this.setLoadingText(msg);
  //   })

        
  //   // //jobstatus
  //   // this.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [
  //   //   JOBGUID,
  //   // ]);
  //   // //onroute
  //   // this.database.executeSql('select * from onroute where JOBGUID=?',[JOBGUID]).then(res=>{
  //   //   console.log("###dnaish "+JSON.stringify(res.rows.length));
  //   //   console.log("###dnaish "+JSON.stringify(res.rows.item(0)));
  //   // })
  //   // this.database.executeSql("insert into onroute (JOBGUID) values(?)", [
  //   //   JOBGUID,
  //   // ]);
  //   // //arrived
  //   // this.database.executeSql("insert into arrived (JOBGUID) values(?)", [
  //   //   JOBGUID,
  //   // ]);
  //   // //services
  //   // this.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [
  //   //   JOBGUID,ParentJobGuid
  //   // ]);
  //   // //enginfo
  //   // this.database.executeSql(
  //   //   "insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)",
  //   //   [JOBGUID, CLAIMGUID]
  //   // );

    
  // }

  fetchJobs(index: any) {
    this.database
      .executeSql("select * from jobslist", [])
      .then((data) => {
        this.rowData = [
          JSON.stringify(data.rows.item(index)["CLAIMGUID"]),
          JSON.stringify(data.rows.item(index)["JOBGUID"]),
          JSON.stringify(data.rows.item(index)["RiskPostCode"]),
          JSON.stringify(data.rows.item(index)["ProductName"]),
          JSON.stringify(data.rows.item(index)["ContactName"]),
          JSON.stringify(data.rows.item(index)["BookingDate"]),
          JSON.stringify(data.rows.item(index)["BookingTimeType"]),
          JSON.stringify(data.rows.item(index)["RiskAddress"]),
          JSON.stringify(data.rows.item(index)["phone"]),
          JSON.stringify(data.rows.item(index)["HomePhone"]),
          JSON.stringify(data.rows.item(index)["ProductTypeId"]),
          JSON.stringify(data.rows.item(index)["IsClaim"]),
          JSON.stringify(data.rows.item(index)["BackgroundColour"]),
          JSON.stringify(data.rows.item(index)["CLIENTNAME"]),
        ];
      })
      .catch((e) => { });
  }

  // OnRoute Table
  public createOnRouteTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS onroute (JOBGUID VARCHAR(32) NOT NULL UNIQUE ,CLAIMGUID VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then(() => {
          resolve("onroute table created success");
        })
        .catch((e) => { });
    });
  }

  // Arrived Table

  public createArrivedTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS arrived (JOBGUID VARCHAR(32) NOT NULL UNIQUE  ,Lattitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then(() => {
          resolve("arrived table created success");
        })
        .catch((e) => { });
    });
  }

  // JOBS STATUS TABLE

  public createJobsStatusTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS jobsstatus (JOBGUID  VARCHAR(32)  NOT NULL UNIQUE   ,status VARCHAR(32),newapp VARCHAR(32),certificate VARCHAR(32),SyncStatus VARCHAR(32),CertificateLocalURI VARCHAR(32))",
          []
        )
        .then(() => {
          resolve("jobs status sign table created success");
        })
        .catch((e) => { });
    });
  }


  fetchJobsStatus(JobGUID: string) {
    this.database
      .executeSql("select status from jobsstatus where JOBGUID = ?", [JobGUID])
      .then((data) => {
        this.status = JSON.stringify(data.rows.item(0)["status"]);

        return this.status;
      })
      .catch((e) => { });
  }

  // Abandon CallOut

  public createAbandonTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS abandon (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), FORACTION VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("Abandon table created success");
        })
        .catch((e) => { });
    });
  }

  // Authorization Required

  public createAuthorizationTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS authorization (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), parts VARCHAR(32), labour VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("authorizationsign table created success");
        })
        .catch((e) => { });
    });
  }

  // compelete Claim Required

  public createCompleteClaimTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS completeclaim (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), IsClaimCompleted VARCHAR(32), BackgroundColour VARCHAR(32),HaveData VARCHAR(32), ComboIsCompleted VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("complete claim table created success");
        })
        .catch((e) => { });
    });
  }

  // compelete Service Required

  public createCompleteServiceTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS completeservice (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, ParentJobGuid VARCHAR(32) , HaveData VARCHAR(32) , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), ComboIsCompleted VARCHAR(32), CantCompleteReason VARCHAR(32),  IsServiceCompleted VARCHAR(32), BackgroundColour VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("complete Service table created success");
        })
        .catch((e) => { });
    });
  }

  //cannot compelete Required

  public createCanNotCompleteTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS cannotcomplete (JOBGUID  VARCHAR(32)  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("complete table created success");
        })
        .catch((e) => { });
    });
  }

  // New Appliance

  public newApplianceTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS newappliance (SerialNo INTEGER PRIMARY KEY AUTOINCREMENT not null ,HaveData VARCHAR(32), JOBGUID  VARCHAR(32), AppType VARCHAR(32), Make VARCHAR(32), MakeAnswer VARCHAR(32) , Model VARCHAR(32),ModelAnswer VARCHAR(32), BType VARCHAR(32), Loc VARCHAR(32), Flue VARCHAR(32), OwnedBy VARCHAR(32), Inspected VARCHAR(32), ZeroGov VARCHAR(32), OPU VARCHAR(32), OptPrs VARCHAR(32), OSD VARCHAR(32), VS VARCHAR(32), VCF VARCHAR(32), FOC VARCHAR(32), ComRead VARCHAR(32), HRatio VARCHAR(32), HCO2Val VARCHAR(32), HCOPPM VARCHAR(32), LRatio VARCHAR(32), LCO2Val VARCHAR(32), LCOPPM VARCHAR(32), STU VARCHAR(32),DefId VARCHAR(32), GIUSP VARCHAR(32), WarAdRec VARCHAR(32), RemAc VARCHAR(32), IsDelete  VARCHAR(32), GIUS VARCHAR(32),SyncStatus VARCHAR(32),json VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("appliance table created success");
        })
        .catch((e) => { });
    });
  }

  // create certificate
  public certificateTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS certificate (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, CLAIMJOBID VARCHAR(32) ,DetailsWork VARCHAR(32),NoOfAppTested VARCHAR(32), NextDueDt VARCHAR(32), OGIns VARCHAR(32), OGSup VARCHAR(32), ECon VARCHAR(32), OGTight VARCHAR(32), COFitted VARCHAR(32), COTested VARCHAR(32), EquiBond VARCHAR(32), HaveData VARCHAR(32), SigImage VARCHAR(32), SigRec VARCHAR(32), FlueChkDt VARCHAR(32),IsCompleted VARCHAR(32), ParentJobGuid VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("certificate table created success");
        })
        .catch((e) => { });
    });
  }

  //Boiler Installation

  public boilerInstallTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS boilerinstallation (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , BLocation VARCHAR(32), BLocation_Desc VARCHAR(32), BFlue VARCHAR(32),FlueExtension VARCHAR(32),StandOffKit VARCHAR(32),D45Elbow VARCHAR(32),D90Elbow VARCHAR(32),GasRun VARCHAR(32),GasRun_Desc VARCHAR(32),CGasRun VARCHAR(32),CGasRun_Desc VARCHAR(32),ActionDt VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("Boiler install sign table created success" + res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  // boiler installation pics

  public boilerInstallPicsTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS boilerinstallationpics (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , SSID  VARCHAR(32)  , BImage VARCHAR(32), BPWImage VARCHAR(32), CTImage VARCHAR(32),FSImage VARCHAR(32),IFImage VARCHAR(32),FILImage VARCHAR(32), EFTImage VARCHAR(32),ACCImage VARCHAR(32),TImage VARCHAR(32),BMCImage VARCHAR(32),A1Image VARCHAR(32),A2Image VARCHAR(32),A3Image VARCHAR(32),A4Image VARCHAR(32),A5Image VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("Boiler installl pics table created success");
        })
        .catch((e) => { });
    });
  }

  // boiler signature

  public boilerInstallSignTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS boilerinstallationsign (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, SSID  VARCHAR(32)  , BInsComplete VARCHAR(32), BInsComplete_Reason VARCHAR(32), BInsDefects VARCHAR(32),BInsDefects_Reason VARCHAR(32),BInsDamage VARCHAR(32),BInsDamage_Reason VARCHAR(32),BInsAddNotes VARCHAR(32),InstallerSig VARCHAR(32),CustomerSig VARCHAR(32),InstallerName VARCHAR(32),CustomerName VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("Boiler installl sign table created success");
        })
        .catch((e) => { });
    });
  }

  //Site Survey

  public siteSurveyTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS sitesurvey (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , siteSurveyboiler VARCHAR(32), siteSurveyboilerdescription VARCHAR(32), locationboiler VARCHAR(32), NewBoilerLocationSelect VARCHAR(32), NewBoilerLocationDesc VARCHAR(32), FlueSelect VARCHAR(32), FlueextensionsSelect VARCHAR(32), StandOffKitSelect VARCHAR(32), FourtyfivedegreeelbowSelect VARCHAR(32),NinetydegreeelbowSelect VARCHAR(32), StandingInletPressue VARCHAR(32), SiteSurveyReason VARCHAR(32), SiteSurveyProductType VARCHAR(32), GasRunSelect VARCHAR(32),GasRunNewDetails VARCHAR(32),CondensateGasSelect VARCHAR(32),CondensateGasNewDetails VARCHAR(32), WorkingInletPressue VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32),trvs VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("site survey table created success");
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  // Site Survey Pics

  public siteSurveyPics() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS sitesurveypics (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), BoilerImage VARCHAR(32),Boilerpipework VARCHAR(32),CondensateterminationImage VARCHAR(32),FusespurImage VARCHAR(32),InternalflueImage VARCHAR(32),FlueInLoftImage VARCHAR(32),ExternalflueterminalImage VARCHAR(32),AiringCupboardCylinderImage VARCHAR(32),StopTapImage VARCHAR(32),BMCImage VARCHAR(32),STLImage VARCHAR(32),DrainOffLocationFlagImage VARCHAR(32),GasMeterImage VARCHAR(32),AdditionalOne VARCHAR(32),AdditionalTwo VARCHAR(32),AdditionalThree VARCHAR(32),AdditionalFour VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve("sitesurveypics created successs");
        })
        .catch((e) => {
          resolve("sitesurveypics create ERROR");
        });
    });
  }

  // Site Survey Sign

  public siteSurveySign() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS sitesurveysign (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), describeIssue VARCHAR(32),customersign VARCHAR(32),surveyorsign VARCHAR(32),customername VARCHAR(32),surveyorname VARCHAR(32),HaveData VARCHAR(32), CLAIMRef VARCHAR(32),ButtonClicked VARCHAR(32) )",
          []
        )
        .then((res) => {
          resolve("sitesurvey sign created successs");
        })
        .catch((e) => {
          resolve("sitesurvey sign create ERROR");
        });
    });
  }

  //make and model table

  public createmakemodel() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS makemodel (make  VARCHAR(32),model VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve(" makemodel table created successfull");
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  // completed jobs

  public completedjobsTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS compeltedjobs (JOBGUID  VARCHAR(32),SyncStatus VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve(" compeleted jobs table created success ");
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  // engg pics

  public enggPicsTable() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql(
          "create table IF NOT EXISTS enggpics (JOBGUID  VARCHAR(32),CLAIMGUID  VARCHAR(32),pic  VARCHAR(32),onDt VARCHAR(32),latitude VARCHAR(32),longitude VARCHAR(32),HaveData VARCHAR(32))",
          []
        )
        .then((res) => {
          resolve(" enggpics table created success ");
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

    //Developer Mode Table
    createFirmwareUrl() {
      return new Promise((resolve, reject) => {
        this.database.executeSql('create table if not exists firmwareurl (ID integer primary key, Live varchar(32), Debug varchar(32))', [])
          .then((res) => {
            this.database.executeSql('insert into firmwareurl (Live,Debug) values(?,?)',[this.url,this.debugUrl]);
            resolve("Devmode Table created");
          });
      })
    }

  //Error Log Table
  createErrorLogTable() {
    return new Promise((resolve, reject) => {
      this.database.executeSql('create table if not exists errorlog (ErrorMsg varchar(32),JOBGUID  VARCHAR(32),  ActionName VARCHAR(32), Desc VARCHAR(32))', [])
        .then((res) => {
          resolve('Log Table created success ' + res);
          console.log(' Log table created success ');
        }).catch((e) => {
          reject(e);
          console.log(' Error Log table created failed ' + JSON.stringify(e));
        })
    })
  }

  insertIntoErrorLog(ErrorMsg, JOBGUID, actionName, Desc) {
    this.database.executeSql('insert into errorlog (ErrorMsg,JOBGUID,ActionName,Desc) values(?,?,?,?)', [ErrorMsg, JOBGUID, actionName, Desc]).then((res) => {
    }).catch((e) => { console.log('#####ERROR inserting ErrorLog Table' + JSON.stringify(e)); });
  }


  insertIntoSyncLog(JOBGUID, actionName, Msg) {
    this.database.executeSql('insert into SyncLog (JOBGUID,ActionName,Msg) values(?,?,?)', [JOBGUID, actionName, Msg]).then((res) => {
      console.log("SyncLog inserted success");      
    }).catch((e) => { console.log('#####ERROR inserting ErrorLog Table' + JSON.stringify(e)); });
  }

  createEngineerInfoTable(){
    return new Promise((resolve, reject) => {
      this.database.executeSql('create table if not exists EngInfo (GasSafeNumber varchar(32),EngCertName  VARCHAR(32),  GasSafeLicenseNumber VARCHAR(32), CompanyAddress VARCHAR(32), SubContractor VARCHAR(32), TypeName VARCHAR(32), Sign VARCHAR(32))', [])
        .then((res) => {
          resolve('EngInfo Table created success ' + res);
        }).catch((e) => {
          reject(e);
          console.log(' Error EngInfo table created failed ' + JSON.stringify(e));
        })
    })
  }

  deleteEngInfoTable(){
    this.database.executeSql('delete from EngInfo',[]);
  }


  public httpSend(endPoint: string, params: HttpParams, method: string) {
        switch (method) {
          case "post":
            {
              console.log("Danish at http request - "+this.url);              
              return this.httpClient.post<any>(
                this.url + endPoint,
                params
              );
            }
            break;
          case "get":
            {
              return this.httpClient.get<any>(
                this.url + endPoint
              );
            }
        }
  }

  // Empty all tables
  emptyAllTables() {
    return new Promise((resolve, reject) => {
      this.emptyjobslist()
      .then((res) => {
        this.emptyEngPics()
          .then((res) => {
            this.database
              .executeSql("vacuum", [])
              .then((res) => { 
                resolve('jobs list deleted')
              })
              .catch((e) => { });
          })
          .catch((e) => { });
      })
      .catch((e) => { });
     });
  }

  emptyjobslist() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from jobslist", [])
        .then((res) => {
          resolve("jobslist resolved");
        })
        .catch((e) => { });
    });
  }

  emptyroute() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from onroute", [])
        .then((res) => {
          resolve("onroute resolved");
        })
        .catch((e) => { });
    });
  }

  emptyarrived() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from arrived", [])
        .then((res) => {
          resolve("arrived resolved");
        })
        .catch((e) => { });
    });
  }

  emptyjobsstatus() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from jobsstatus", [])
        .then((res) => {
          resolve("jobsstatus resolved");
        })
        .catch((e) => { });
    });
  }

  emptyabandon() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from abandon", [])
        .then((res) => {
          resolve("abandon resolved");
        })
        .catch((e) => { });
    });
  }

  emptyauthorization() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from authorization", [])
        .then((res) => {
          resolve("authorization resolved");
        })
        .catch((e) => { });
    });
  }

  emptycompleteclaim() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from completeclaim", [])
        .then((res) => {
          resolve("complete resolved");
        })
        .catch((e) => { });
    });
  }

  emptycompleteservice() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from completeservice", [])
        .then((res) => {
          resolve("complete resolved");
        })
        .catch((e) => { });
    });
  }

  emptynewappliance() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from newappliance", [])
        .then((res) => {
          resolve("newappliance resolved");
        })
        .catch((e) => { });
    });
  }

  emptycertificate() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from certificate", [])
        .then((res) => {
          resolve("certificate resolved");
        })
        .catch((e) => { });
    });
  }

  emptyboilerinstallation() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from boilerinstallation", [])
        .then((res) => {
          resolve("boilerinstallation resolved");
        })
        .catch((e) => { });
    });
  }

  emptyboilerinstallationpics() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from boilerinstallationpics", [])
        .then((res) => {
          resolve("boilerinstallationpics resolved");
        })
        .catch((e) => { });
    });
  }

  emptyboilerinstallationsign() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from boilerinstallationsign", [])
        .then((res) => {
          resolve("boilerinstallationsign resolved");
        })
        .catch((e) => { });
    });
  }

  emptysitesurvey() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from sitesurvey", [])
        .then((res) => {
          resolve("sitesurvey resolved");
        })
        .catch((e) => { });
    });
  }

  emptysitesurveypic() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from sitesurveypics", [])
        .then((res) => {
          resolve("sitesurveypic resolved");
        })
        .catch((e) => { });
    });
  }

  emptysitesurveysign() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from sitesurveysign", [])
        .then((res) => {
          resolve("sitesurveysign resolved");
        })
        .catch((e) => { });
    });
  }

  emptyEngPics() {
    return new Promise((resolve, reject) => {
      this.database
        .executeSql("delete from enggpics", [])
        .then((res) => {
          resolve("sitesurveysign resolved");
        })
        .catch((e) => { });
    });
  }

  //,complete,authorization,abandon, jobsstatus, arrived, onroute, jobslist
  dropAllTables() {
    this.database
      .executeSql("DROP TABLE IF EXISTS newappliance")
      .then((res) => { })
      .catch((e) => { });
  }

  getdateformatV2() {
    let date = new Date();
    var day = date.getDate(); // yields day
    var month = date.getMonth() + 1; // yields month
    var year = date.getFullYear(); // yields year
    var hour = date.getHours().toString(); // yields hours
    var minute = date.getMinutes().toString(); // yields minutes
    var second = date.getSeconds().toString(); // yields seconds
    if (hour.toString().length == 1) {
      hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
      minute = "0" + minute;
    }
    if (second.toString().length == 1) {
      second = "0" + second;
    }
    // After this construct a string with the above results as below
    var time =
      day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
    return time;
  }

  //Check if application having access permission of location
  checkGPSPermission() {
    return new Promise((resolve, reject) => {
      console.log("!!! under check permistion");
      this.androidPermission.requestPermissions([
        this.androidPermission.PERMISSION.CAMERA, // optional
        this.androidPermission.PERMISSION.READ_EXTERNAL_STORAGE, //optional
        this.androidPermission.PERMISSION.GET_ACCOUNTS, //optional
        this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
      ]);
      this.androidPermission
        .checkPermission(this.androidPermission.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          (result) => {
            if (result.hasPermission) {
              console.log("!!! If having permission");
              //If having permission show 'Turn On GPS' dialogue
              // this.askToTurnOnGPS();
              resolve("Permission Granted!");
              //this.showSyncAlert();
            } else {
              //Permission not given Do not allow clicked 
              console.log("!!! If having no permission");
              reject('Permission Denied!');
            }
          },
          (err) => {
            console.log("!!! check permission err not able to check ");
            reject('Permission Denied!');
          }
        );
    });
  }

  // requestGPSPermission() {
  //   return new Promise((resolve,reject)=>{
  //     this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  //       if (canRequest) {
  //       } else {
  //         //Show 'GPS Permission Request' dialogue from setting
  //         this.androidPermission
  //           .requestPermission(
  //             this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
  //           )
  //           .then(
  //             () => {
  //               console.log("!!! request permision succes");
  //               // call method to turn on GPS
  //               this.askToTurnOnGPS();
  //               resolve("requestGPSPermission resolved");
  //             },
  //             (error) => {
  //               console.log("!!! request permision error");
  //               //Show alert if user click on 'No Thanks'
  //               this.alert("Please allow location permission from app settings as location is mandatory for this application.","Permission Error");
  //             }
  //           ).catch(e=>{
  //             console.log("!!! request permision catch");
  //           })
  //       }
  //     });
  //   });
  // }

  askToTurnOnGPS() {
    // gps turn on and off here popup
    return new Promise((resolve, reject) => {
      console.log("!!! under turn on gps");
      this.locationAccuracy
        .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
        .then(
          (succ) => {
            console.log("!!! gps turned on ");
            resolve("turn on gps resolved");
            // When GPS Turned ON call method to get Accurate location coordinates
            // this.getLocationCoordinates().then(res => {
            //   resolve("turn on gps resolved");
            // });
          },
          (error) => {
            console.log("!!! not turn on gps");
            reject("turn on gps rejects");
          }
        );
    });
  }

  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dismissLoading();
      }, 15000);
      this.geolocation
        .getCurrentPosition({enableHighAccuracy: true, timeout : 10000, maximumAge : 60000})
        .then((resp) => {
          console.log("!!! inside coord succ");
          this.locationCoords = resp;
          resolve("getLocationCoordinates resolved");
        },
        (err)=>{
          this.locationCoords.coords.latitude = null;
          this.locationCoords.coords.longitude = null;
          resolve("");
        }
        ).catch((error) => {
          this.locationCoords.coords.latitude = null;
          this.locationCoords.coords.longitude = null;
          resolve("");
        });
    });
  }

  turnOnGpsAndGetLocation(){
    return new Observable((observer)=>{
    this.presentLoading("Please Wait ... ");
    this.checkGPSPermission().then(res=>{
      this.askToTurnOnGPS().then(res=>{
        this.getLocationCoordinates().then(res=>{
          observer.next(this.locationCoords);
          observer.complete();
        });
      }).catch(err=>{
        this.dismissLoading();
        this.showToast("could not access location, please turn it on.","danger")
      })
    }).catch(err=>{
      setTimeout(() => {
        this.dismissLoading();
      }, 200);
      this.alert("Please allow location permission from app settings as location is mandatory for this application.",err);
    })
    })
  }

  //ckeck network status
  async checkNetwork() {
    this.networkStatus = await Network.getStatus();
    return this.networkStatus;
  }

  //Speed Check for smoothly syncing data
  speedCheck() {
    console.log("Danish inside speed Check");    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("TimeOut");
      }, 60000);
      this.speedTestService.getMbps(
        {
          iterations: 10,
          file: {
            path: 'https://raw.githubusercontent.com/247HR/speedcheckassets/master/1mb.jpg',
            size: 1197292,  //size*1024*1024,
            shouldBustCache: true
          },
          retryDelay: 500,
        }
      ).subscribe(
        (speed) => {
          console.log(speed);
          this.insertIntoSyncLog(" "+speed,"Upload Speed","Test");
          resolve(speed);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  async customAlertBox(hdr : string, msg : string,buttonText, data?, compName?:string) {
    const alert = await this.alertCtrl.create({
      header: hdr,
      subHeader:msg,
      backdropDismiss: false,
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            
          },
        },
        {
          text: buttonText,
          handler: () => {
              this.gotoComponent(data, compName)            
          },
        },
      ],
    });
    await alert.present();
  }

  gotoComponent(data, compName:string){
    const navigationExtras: NavigationExtras = {
      state: {
        data: data,
      }
    };
    this.router.navigate([compName], navigationExtras);
  }

  sendErrorLog(){
    return new Promise((resolve,reject)=>{
      let bodyContent = []
      this.database.executeSql('select * from errorlog',[]).then(res=>{
          if (res.rows.length<1) {
            resolve('SMTP no error found');
          } else {
            for (let i = 0; i < res.rows.length; i++) {
              bodyContent.push(JSON.stringify(res.rows.item(i)));
            }
            const string = JSON.stringify(bodyContent)
            const encodedString = btoa(unescape(encodeURIComponent(string)));
            Email.send({
              name : 'SMTP',
              Host : "smtp.elasticemail.com",
              //smtpserver: "smtp.elasticemail.com",
              Port : "2525",
              Username : "mohammeddanish@247homerescue.co.uk",
              Password : "6699EF4C55E4247F145B943AEAE83074E6CD",
              To : "md03danish@gmail.com",
              From : "mohammeddanish@247homerescue.co.uk",
              Subject : "Error Report - HR360 App",
              Body : "Please Download the HR360 app Error log File, Thank You.",
              Attachments : [
                {
                 name : "HR360-ErrorLog.json",
                 data : encodedString 
                }]
              }).then(
                message => {
                  if(message =='OK'){               
                    this.dismissLoading();
                    this.database.executeSql('delete from errorlog',[]);
                    resolve("SMTP success");
                  }else{
                    this.dismissLoading();
                    resolve("SMTP ERROR "+message);
                  }
                }
              );  
          }                      
      });
    });
  }

  SendErrorEmail(){
    return new Promise((resolve,reject)=>{
      let bodyContent = []
      this.database.executeSql('select * from errorlog',[]).then(res=>{
        console.log(res.rows.length);        
        console.log(JSON.stringify(res.rows.item(0)));
          for (let i = 0; i < res.rows.length; i++) {
            console.log(JSON.stringify(res.rows.item(i)));
            bodyContent.push(JSON.stringify(res.rows.item(i)));
          }
          const string = JSON.stringify(bodyContent)
          const encodedString = btoa(unescape(encodeURIComponent(string)));

          this.storage.get('enggid').then(res=>{
            console.log(string);
            console.log(res);
                        
            let params = new HttpParams()
                .set("attachment", string)
                .set("engId", res)
            this.httpSend("SendErrorEmail", params, "post").subscribe(
              (res)=>{
                this.showToast(res);
                resolve("success");
              },
              (err) =>{
                this.showToast(err);
                resolve("failed");
              }
            )
          }).catch(err=>{
            reject("storage err : "+err)
          });
      });
    });
  }


  scrollToId(id:string){
   setTimeout(() => {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth"});
   }, );
  }

  firmwareUpdateCheck(){
    return new Promise((resolve, reject)=>{
      this.storage.get("updateFirmware").then(firmware =>{
        this.storage.get("debugmode").then(debugmd=>{      
          console.log("Danish live debug "+firmware,debugmd);            
          if(firmware == "true" && debugmd != "true"){ 
             this.database.executeSql('select Live from firmwareurl',[]).then(res=>{
              this.url = res.rows.item(0)["Live"] ;
              console.log("Danish at udatefirmware - "+res.rows.item(0)["Live"]);
              resolve("using Live url");
              });          
          } else {
            if(firmware == "true" && debugmd == "true"){
              this.database.executeSql('select Debug from firmwareurl',[]).then(res=>{
                console.log("Danish at udatefirmware - "+res.rows.item(0)["Debug"]);              
                this.url = res.rows.item(0)["Debug"] ;
                resolve("using Debug url");
              }); 
            } else {
              resolve("firmware not updated");
            }
          }        
        });
      });
    });
  }

  updateEngInfo(column:string, value:string){
    this.database.executeSql(`select ${column} from EngInfo`,[]).then(res =>{
      console.log("sign length"+res.rows.length);         
     if (res.rows.length > 0) {
      this.database.executeSql(`update EngInfo set ${column}=?`, [value]);
       this.showToast("Signature saved Successfully","success",1500);
       this.dismissLoading();
     } else {          
       this.database.executeSql(`insert into EngInfo (${column}) values(?)`, [value]);
       this.showToast("Signature saved Successfully","success",1500);
       this.dismissLoading();
     }
    })
  }

  async loadToken() {
    console.log("load enggid");    
    const token = await this.storage.get('enggid');
      if (token) {
        console.log('have enggid: ', token);
        this.token = token;
        this.isAuthenticated.next(true);
      } else {
        console.log("no enggid");
        this.isAuthenticated.next(false);
      }
  }

  logout(){
    this.isAuthenticated.next(false);
    this.storage.clear().then(res=>{
      // this.statusbar.show();
      this.router.navigate(['login']);
      // this.navCtrl.navigateRoot("login");
      // this.router.navigate([""]);
      this.storage.set("loginStatus", "false");
      this.storage.set('isChecked',false);
      // this.auth.deleteEngInfoTable();
      // this.auth.emptyAllTables();
      this.database.executeSql("delete from SyncLog",[]);
    });
  }


}
