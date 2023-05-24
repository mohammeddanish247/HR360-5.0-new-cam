(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 51491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 64967);
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-hashtable */ 31405);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 89131);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 33293);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 77607);
/* harmony import */ var ng_speed_test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-speed-test */ 2314);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 51573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 38298);



// import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";













let ApiService = class ApiService {
    constructor(geolocation, androidPermission, locationAccuracy, toastController, splashscreen, loadingController, httpClient, platform, sqlite, alertCtrl, storage, speedTestService, router) {
        this.geolocation = geolocation;
        this.androidPermission = androidPermission;
        this.locationAccuracy = locationAccuracy;
        this.toastController = toastController;
        this.splashscreen = splashscreen;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.platform = platform;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.speedTestService = speedTestService;
        this.router = router;
        this.rowData = [];
        this.list = [];
        this.makeList = [];
        this.makeArray = [];
        this.makeModelMap = new Map();
        this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_6__.HashTable();
        this.locationData = [];
        // public url = "https://beta-wsmobileapp.247development.uk/service1.asmx/";
        this.url = "https://mobileappapi.home360.org.uk/service1.asmx/";
        this.debugUrl = "";
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.token = '';
        this.lat = " ";
        this.long = " ";
        this.platform.ready().then((da) => {
            this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then((db) => {
                this.database = db;
            })
                .catch(e => console.log(e));
        });
    }
    // loader
    presentLoading(msg) {
        this.loadingController
            .create({
            spinner: "bubbles",
            message: msg,
            cssClass: "custom-class",
        })
            .then((res) => {
            res.present();
        })
            .catch((e) => { });
    }
    //Custom Loader
    presentCustomLoader(msg) {
        return new Promise((resolve, reject) => {
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
    setLoadingText(text) {
        const elem = document.querySelector("div.loading-wrapper div.loading-content");
        if (elem)
            elem.innerHTML = text;
    }
    //Progress Bar
    addProgressBar() {
        const elem = document.querySelector("div.loading-wrapper");
        let newElement = document.createElement('ion-progress-bar');
        newElement.setAttribute("value", "0.05");
        newElement.setAttribute("class", "progressbar");
        if (elem)
            elem.append(newElement);
    }
    setProgressBar(val) {
        let value = (parseInt(val) / 100);
        const elem = document.querySelector("ion-progress-bar");
        if (elem)
            elem.setAttribute("value", value.toString());
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
    alert(msg, hdr) {
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
    showToast(msg, clr, time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                cssClass: "my-toast",
                color: clr || "dark",
                message: msg,
                duration: time || 3000,
            });
            toast.present();
        });
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
            }, (err) => {
                console.log("#location " + JSON.stringify(err));
            }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 });
        });
    }
    // JOBS TABLE
    createJobTable() {
        return new Promise((resolve, reject) => {
            //this.database
            this.database
                .executeSql("create table IF NOT EXISTS jobslist(CLAIMJOBID VARCHAR(32), CLAIMGUID VARCHAR(32),JOBGUID VARCHAR(32) NOT NULL UNIQUE, RiskPostCode VARCHAR(32), ProductName VARCHAR(32),ContactName VARCHAR(32), BookingDate VARCHAR(32), AppointmentStartTime VARCHAR(32), AppointmentEndTime VARCHAR(32), BookingTimeType VARCHAR(32),RiskAddress VARCHAR(32), phone VARCHAR(32), HomePhone VARCHAR(32), ProductTypeId VARCHAR(32),IsClaim VARCHAR(32),BackgroundColour VARCHAR(32), CLIENTNAME VARCHAR(32), ProductTypeName VARCHAR(32), ListType VARCHAR(32), CLAIMRef VARCHAR(32), SyncStatus VARCHAR(32), RouteOrder INTEGER, ParentJobGuid VARCHAR(32), EngName  VARCHAR(32))", [])
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
    fetchJobs(index) {
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
    createOnRouteTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS onroute (JOBGUID VARCHAR(32) NOT NULL UNIQUE ,CLAIMGUID VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then(() => {
                resolve("onroute table created success");
            })
                .catch((e) => { });
        });
    }
    // Arrived Table
    createArrivedTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS arrived (JOBGUID VARCHAR(32) NOT NULL UNIQUE  ,Lattitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then(() => {
                resolve("arrived table created success");
            })
                .catch((e) => { });
        });
    }
    // JOBS STATUS TABLE
    createJobsStatusTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS jobsstatus (JOBGUID  VARCHAR(32)  NOT NULL UNIQUE   ,status VARCHAR(32),newapp VARCHAR(32),certificate VARCHAR(32),SyncStatus VARCHAR(32),CertificateLocalURI VARCHAR(32))", [])
                .then(() => {
                resolve("jobs status sign table created success");
            })
                .catch((e) => { });
        });
    }
    fetchJobsStatus(JobGUID) {
        this.database
            .executeSql("select status from jobsstatus where JOBGUID = ?", [JobGUID])
            .then((data) => {
            this.status = JSON.stringify(data.rows.item(0)["status"]);
            return this.status;
        })
            .catch((e) => { });
    }
    // Abandon CallOut
    createAbandonTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS abandon (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), FORACTION VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))", [])
                .then((res) => {
                resolve("Abandon table created success");
            })
                .catch((e) => { });
        });
    }
    // Authorization Required
    createAuthorizationTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS authorization (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), parts VARCHAR(32), labour VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))", [])
                .then((res) => {
                resolve("authorizationsign table created success");
            })
                .catch((e) => { });
        });
    }
    // compelete Claim Required
    createCompleteClaimTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS completeclaim (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), IsClaimCompleted VARCHAR(32), BackgroundColour VARCHAR(32),HaveData VARCHAR(32), ComboIsCompleted VARCHAR(32))", [])
                .then((res) => {
                resolve("complete claim table created success");
            })
                .catch((e) => { });
        });
    }
    // compelete Service Required
    createCompleteServiceTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS completeservice (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, ParentJobGuid VARCHAR(32) , HaveData VARCHAR(32) , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), ComboIsCompleted VARCHAR(32), CantCompleteReason VARCHAR(32),  IsServiceCompleted VARCHAR(32), BackgroundColour VARCHAR(32))", [])
                .then((res) => {
                resolve("complete Service table created success");
            })
                .catch((e) => { });
        });
    }
    //cannot compelete Required
    createCanNotCompleteTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS cannotcomplete (JOBGUID  VARCHAR(32)  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then((res) => {
                resolve("complete table created success");
            })
                .catch((e) => { });
        });
    }
    // New Appliance
    newApplianceTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS newappliance (SerialNo INTEGER PRIMARY KEY AUTOINCREMENT not null ,HaveData VARCHAR(32), JOBGUID  VARCHAR(32), AppType VARCHAR(32), Make VARCHAR(32), MakeAnswer VARCHAR(32) , Model VARCHAR(32),ModelAnswer VARCHAR(32), BType VARCHAR(32), Loc VARCHAR(32), Flue VARCHAR(32), OwnedBy VARCHAR(32), Inspected VARCHAR(32), ZeroGov VARCHAR(32), OPU VARCHAR(32), OptPrs VARCHAR(32), OSD VARCHAR(32), VS VARCHAR(32), VCF VARCHAR(32), FOC VARCHAR(32), ComRead VARCHAR(32), HRatio VARCHAR(32), HCO2Val VARCHAR(32), HCOPPM VARCHAR(32), LRatio VARCHAR(32), LCO2Val VARCHAR(32), LCOPPM VARCHAR(32), STU VARCHAR(32),DefId VARCHAR(32), GIUSP VARCHAR(32), WarAdRec VARCHAR(32), RemAc VARCHAR(32), IsDelete  VARCHAR(32), GIUS VARCHAR(32),SyncStatus VARCHAR(32),json VARCHAR(32))", [])
                .then((res) => {
                resolve("appliance table created success");
            })
                .catch((e) => { });
        });
    }
    // create certificate
    certificateTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS certificate (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, CLAIMJOBID VARCHAR(32) ,DetailsWork VARCHAR(32),NoOfAppTested VARCHAR(32), NextDueDt VARCHAR(32), OGIns VARCHAR(32), OGSup VARCHAR(32), ECon VARCHAR(32), OGTight VARCHAR(32), COFitted VARCHAR(32), COTested VARCHAR(32), EquiBond VARCHAR(32), HaveData VARCHAR(32), SigImage VARCHAR(32), SigRec VARCHAR(32), FlueChkDt VARCHAR(32),IsCompleted VARCHAR(32), ParentJobGuid VARCHAR(32))", [])
                .then((res) => {
                resolve("certificate table created success");
            })
                .catch((e) => { });
        });
    }
    //Boiler Installation
    boilerInstallTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS boilerinstallation (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , BLocation VARCHAR(32), BLocation_Desc VARCHAR(32), BFlue VARCHAR(32),FlueExtension VARCHAR(32),StandOffKit VARCHAR(32),D45Elbow VARCHAR(32),D90Elbow VARCHAR(32),GasRun VARCHAR(32),GasRun_Desc VARCHAR(32),CGasRun VARCHAR(32),CGasRun_Desc VARCHAR(32),ActionDt VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then((res) => {
                resolve("Boiler install sign table created success" + res);
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    // boiler installation pics
    boilerInstallPicsTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS boilerinstallationpics (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , SSID  VARCHAR(32)  , BImage VARCHAR(32), BPWImage VARCHAR(32), CTImage VARCHAR(32),FSImage VARCHAR(32),IFImage VARCHAR(32),FILImage VARCHAR(32), EFTImage VARCHAR(32),ACCImage VARCHAR(32),TImage VARCHAR(32),BMCImage VARCHAR(32),A1Image VARCHAR(32),A2Image VARCHAR(32),A3Image VARCHAR(32),A4Image VARCHAR(32),A5Image VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then((res) => {
                resolve("Boiler installl pics table created success");
            })
                .catch((e) => { });
        });
    }
    // boiler signature
    boilerInstallSignTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS boilerinstallationsign (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, SSID  VARCHAR(32)  , BInsComplete VARCHAR(32), BInsComplete_Reason VARCHAR(32), BInsDefects VARCHAR(32),BInsDefects_Reason VARCHAR(32),BInsDamage VARCHAR(32),BInsDamage_Reason VARCHAR(32),BInsAddNotes VARCHAR(32),InstallerSig VARCHAR(32),CustomerSig VARCHAR(32),InstallerName VARCHAR(32),CustomerName VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", [])
                .then((res) => {
                resolve("Boiler installl sign table created success");
            })
                .catch((e) => { });
        });
    }
    //Site Survey
    siteSurveyTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS sitesurvey (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , siteSurveyboiler VARCHAR(32), siteSurveyboilerdescription VARCHAR(32), locationboiler VARCHAR(32), NewBoilerLocationSelect VARCHAR(32), NewBoilerLocationDesc VARCHAR(32), FlueSelect VARCHAR(32), FlueextensionsSelect VARCHAR(32), StandOffKitSelect VARCHAR(32), FourtyfivedegreeelbowSelect VARCHAR(32),NinetydegreeelbowSelect VARCHAR(32), StandingInletPressue VARCHAR(32), SiteSurveyReason VARCHAR(32), SiteSurveyProductType VARCHAR(32), GasRunSelect VARCHAR(32),GasRunNewDetails VARCHAR(32),CondensateGasSelect VARCHAR(32),CondensateGasNewDetails VARCHAR(32), WorkingInletPressue VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32),trvs VARCHAR(32))", [])
                .then((res) => {
                resolve("site survey table created success");
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    // Site Survey Pics
    siteSurveyPics() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS sitesurveypics (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), BoilerImage VARCHAR(32),Boilerpipework VARCHAR(32),CondensateterminationImage VARCHAR(32),FusespurImage VARCHAR(32),InternalflueImage VARCHAR(32),FlueInLoftImage VARCHAR(32),ExternalflueterminalImage VARCHAR(32),AiringCupboardCylinderImage VARCHAR(32),StopTapImage VARCHAR(32),BMCImage VARCHAR(32),STLImage VARCHAR(32),DrainOffLocationFlagImage VARCHAR(32),GasMeterImage VARCHAR(32),AdditionalOne VARCHAR(32),AdditionalTwo VARCHAR(32),AdditionalThree VARCHAR(32),AdditionalFour VARCHAR(32),HaveData VARCHAR(32))", [])
                .then((res) => {
                resolve("sitesurveypics created successs");
            })
                .catch((e) => {
                resolve("sitesurveypics create ERROR");
            });
        });
    }
    // Site Survey Sign
    siteSurveySign() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS sitesurveysign (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), describeIssue VARCHAR(32),customersign VARCHAR(32),surveyorsign VARCHAR(32),customername VARCHAR(32),surveyorname VARCHAR(32),HaveData VARCHAR(32), CLAIMRef VARCHAR(32),ButtonClicked VARCHAR(32) )", [])
                .then((res) => {
                resolve("sitesurvey sign created successs");
            })
                .catch((e) => {
                resolve("sitesurvey sign create ERROR");
            });
        });
    }
    //make and model table
    createmakemodel() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS makemodel (make  VARCHAR(32),model VARCHAR(32))", [])
                .then((res) => {
                resolve(" makemodel table created successfull");
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    // completed jobs
    completedjobsTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS compeltedjobs (JOBGUID  VARCHAR(32),SyncStatus VARCHAR(32))", [])
                .then((res) => {
                resolve(" compeleted jobs table created success ");
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    // engg pics
    enggPicsTable() {
        return new Promise((resolve, reject) => {
            this.database
                .executeSql("create table IF NOT EXISTS enggpics (JOBGUID  VARCHAR(32),CLAIMGUID  VARCHAR(32),pic  VARCHAR(32),onDt VARCHAR(32),latitude VARCHAR(32),longitude VARCHAR(32),HaveData VARCHAR(32))", [])
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
                this.database.executeSql('insert into firmwareurl (Live,Debug) values(?,?)', [this.url, this.debugUrl]);
                resolve("Devmode Table created");
            });
        });
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
            });
        });
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
    createEngineerInfoTable() {
        return new Promise((resolve, reject) => {
            this.database.executeSql('create table if not exists EngInfo (GasSafeNumber varchar(32),EngCertName  VARCHAR(32),  GasSafeLicenseNumber VARCHAR(32), CompanyAddress VARCHAR(32), SubContractor VARCHAR(32), TypeName VARCHAR(32), Sign VARCHAR(32))', [])
                .then((res) => {
                resolve('EngInfo Table created success ' + res);
            }).catch((e) => {
                reject(e);
                console.log(' Error EngInfo table created failed ' + JSON.stringify(e));
            });
        });
    }
    deleteEngInfoTable() {
        this.database.executeSql('delete from EngInfo', []);
    }
    httpSend(endPoint, params, method) {
        switch (method) {
            case "post":
                {
                    console.log("Danish at http request - " + this.url);
                    return this.httpClient.post(this.url + endPoint, params);
                }
                break;
            case "get":
                {
                    return this.httpClient.get(this.url + endPoint);
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
                        resolve('jobs list deleted');
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
        var time = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
        return time;
    }
    //Check if application having access permission of location
    checkGPSPermission() {
        return new Promise((resolve, reject) => {
            console.log("!!! under check permistion");
            this.androidPermission.requestPermissions([
                this.androidPermission.PERMISSION.CAMERA,
                this.androidPermission.PERMISSION.READ_EXTERNAL_STORAGE,
                this.androidPermission.PERMISSION.GET_ACCOUNTS,
                this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
            ]);
            this.androidPermission
                .checkPermission(this.androidPermission.PERMISSION.ACCESS_COARSE_LOCATION)
                .then((result) => {
                if (result.hasPermission) {
                    console.log("!!! If having permission");
                    //If having permission show 'Turn On GPS' dialogue
                    // this.askToTurnOnGPS();
                    resolve("Permission Granted!");
                    //this.showSyncAlert();
                }
                else {
                    //Permission not given Do not allow clicked 
                    console.log("!!! If having no permission");
                    reject('Permission Denied!');
                }
            }, (err) => {
                console.log("!!! check permission err not able to check ");
                reject('Permission Denied!');
            });
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
                .then((succ) => {
                console.log("!!! gps turned on ");
                resolve("turn on gps resolved");
                // When GPS Turned ON call method to get Accurate location coordinates
                // this.getLocationCoordinates().then(res => {
                //   resolve("turn on gps resolved");
                // });
            }, (error) => {
                console.log("!!! not turn on gps");
                reject("turn on gps rejects");
            });
        });
    }
    // Methos to get device accurate coordinates using device GPS
    getLocationCoordinates() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.dismissLoading();
            }, 15000);
            this.geolocation
                .getCurrentPosition({ enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 })
                .then((resp) => {
                console.log("!!! inside coord succ");
                this.locationCoords = resp;
                resolve("getLocationCoordinates resolved");
            }, (err) => {
                this.locationCoords.coords.latitude = null;
                this.locationCoords.coords.longitude = null;
                resolve("");
            }).catch((error) => {
                this.locationCoords.coords.latitude = null;
                this.locationCoords.coords.longitude = null;
                resolve("");
            });
        });
    }
    turnOnGpsAndGetLocation() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable((observer) => {
            this.presentLoading("Please Wait ... ");
            this.checkGPSPermission().then(res => {
                this.askToTurnOnGPS().then(res => {
                    this.getLocationCoordinates().then(res => {
                        observer.next(this.locationCoords);
                        observer.complete();
                    });
                }).catch(err => {
                    this.dismissLoading();
                    this.showToast("could not access location, please turn it on.", "danger");
                });
            }).catch(err => {
                setTimeout(() => {
                    this.dismissLoading();
                }, 200);
                this.alert("Please allow location permission from app settings as location is mandatory for this application.", err);
            });
        });
    }
    //ckeck network status
    checkNetwork() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.networkStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();
            return this.networkStatus;
        });
    }
    //Speed Check for smoothly syncing data
    speedCheck() {
        console.log("Danish inside speed Check");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("TimeOut");
            }, 60000);
            this.speedTestService.getMbps({
                iterations: 10,
                file: {
                    path: 'https://raw.githubusercontent.com/247HR/speedcheckassets/master/1mb.jpg',
                    size: 1197292,
                    shouldBustCache: true
                },
                retryDelay: 500,
            }).subscribe((speed) => {
                console.log(speed);
                this.insertIntoSyncLog(" " + speed, "Upload Speed", "Test");
                resolve(speed);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    customAlertBox(hdr, msg, buttonText, data, compName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: hdr,
                subHeader: msg,
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
                            this.gotoComponent(data, compName);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    gotoComponent(data, compName) {
        const navigationExtras = {
            state: {
                data: data,
            }
        };
        this.router.navigate([compName], navigationExtras);
    }
    sendErrorLog() {
        return new Promise((resolve, reject) => {
            let bodyContent = [];
            this.database.executeSql('select * from errorlog', []).then(res => {
                if (res.rows.length < 1) {
                    resolve('SMTP no error found');
                }
                else {
                    for (let i = 0; i < res.rows.length; i++) {
                        bodyContent.push(JSON.stringify(res.rows.item(i)));
                    }
                    const string = JSON.stringify(bodyContent);
                    const encodedString = btoa(unescape(encodeURIComponent(string)));
                    Email.send({
                        name: 'SMTP',
                        Host: "smtp.elasticemail.com",
                        //smtpserver: "smtp.elasticemail.com",
                        Port: "2525",
                        Username: "mohammeddanish@247homerescue.co.uk",
                        Password: "6699EF4C55E4247F145B943AEAE83074E6CD",
                        To: "md03danish@gmail.com",
                        From: "mohammeddanish@247homerescue.co.uk",
                        Subject: "Error Report - HR360 App",
                        Body: "Please Download the HR360 app Error log File, Thank You.",
                        Attachments: [
                            {
                                name: "HR360-ErrorLog.json",
                                data: encodedString
                            }
                        ]
                    }).then(message => {
                        if (message == 'OK') {
                            this.dismissLoading();
                            this.database.executeSql('delete from errorlog', []);
                            resolve("SMTP success");
                        }
                        else {
                            this.dismissLoading();
                            resolve("SMTP ERROR " + message);
                        }
                    });
                }
            });
        });
    }
    SendErrorEmail() {
        return new Promise((resolve, reject) => {
            let bodyContent = [];
            this.database.executeSql('select * from errorlog', []).then(res => {
                console.log(res.rows.length);
                console.log(JSON.stringify(res.rows.item(0)));
                for (let i = 0; i < res.rows.length; i++) {
                    console.log(JSON.stringify(res.rows.item(i)));
                    bodyContent.push(JSON.stringify(res.rows.item(i)));
                }
                const string = JSON.stringify(bodyContent);
                const encodedString = btoa(unescape(encodeURIComponent(string)));
                this.storage.get('enggid').then(res => {
                    console.log(string);
                    console.log(res);
                    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams()
                        .set("attachment", string)
                        .set("engId", res);
                    this.httpSend("SendErrorEmail", params, "post").subscribe((res) => {
                        this.showToast(res);
                        resolve("success");
                    }, (err) => {
                        this.showToast(err);
                        resolve("failed");
                    });
                }).catch(err => {
                    reject("storage err : " + err);
                });
            });
        });
    }
    scrollToId(id) {
        setTimeout(() => {
            let el = document.getElementById(id);
            el.scrollIntoView({ behavior: "smooth" });
        });
    }
    firmwareUpdateCheck() {
        return new Promise((resolve, reject) => {
            this.storage.get("updateFirmware").then(firmware => {
                this.storage.get("debugmode").then(debugmd => {
                    console.log("Danish live debug " + firmware, debugmd);
                    if (firmware == "true" && debugmd != "true") {
                        this.database.executeSql('select Live from firmwareurl', []).then(res => {
                            this.url = res.rows.item(0)["Live"];
                            console.log("Danish at udatefirmware - " + res.rows.item(0)["Live"]);
                            resolve("using Live url");
                        });
                    }
                    else {
                        if (firmware == "true" && debugmd == "true") {
                            this.database.executeSql('select Debug from firmwareurl', []).then(res => {
                                console.log("Danish at udatefirmware - " + res.rows.item(0)["Debug"]);
                                this.url = res.rows.item(0)["Debug"];
                                resolve("using Debug url");
                            });
                        }
                        else {
                            resolve("firmware not updated");
                        }
                    }
                });
            });
        });
    }
    updateEngInfo(column, value) {
        this.database.executeSql(`select ${column} from EngInfo`, []).then(res => {
            console.log("sign length" + res.rows.length);
            if (res.rows.length > 0) {
                this.database.executeSql(`update EngInfo set ${column}=?`, [value]);
                this.showToast("Signature saved Successfully", "success", 1500);
                this.dismissLoading();
            }
            else {
                this.database.executeSql(`insert into EngInfo (${column}) values(?)`, [value]);
                this.showToast("Signature saved Successfully", "success", 1500);
                this.dismissLoading();
            }
        });
    }
    loadToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("load enggid");
            const token = yield this.storage.get('enggid');
            if (token) {
                console.log('have enggid: ', token);
                this.token = token;
                this.isAuthenticated.next(true);
            }
            else {
                console.log("no enggid");
                this.isAuthenticated.next(false);
            }
        });
    }
    logout() {
        this.isAuthenticated.next(false);
        this.storage.clear().then(res => {
            // this.statusbar.show();
            this.router.navigate(['login']);
            // this.navCtrl.navigateRoot("login");
            // this.router.navigate([""]);
            this.storage.set("loginStatus", "false");
            this.storage.set('isChecked', false);
            // this.auth.deleteEngInfoTable();
            // this.auth.emptyAllTables();
            this.database.executeSql("delete from SyncLog", []);
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__.LocationAccuracy },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage },
    { type: ng_speed_test__WEBPACK_IMPORTED_MODULE_13__.SpeedTestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auto-login.guard */ 73986);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 89623)).then(m => m.SplashPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule),
        canLoad: [_guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_0__.AutoLoginGuard]
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 10396)).then(m => m.DetailsPageModule)
    },
    {
        path: 'createcertificate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_createcertificate_createcertificate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./createcertificate/createcertificate.module */ 88903)).then(m => m.CreatecertificatePageModule)
    },
    {
        path: 'appliancedetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_appliancedetails_appliancedetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./appliancedetails/appliancedetails.module */ 5691)).then(m => m.AppliancedetailsPageModule)
    },
    {
        path: 'outcomes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_outcomes_outcomes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./outcomes/outcomes.module */ 20231)).then(m => m.OutcomesPageModule)
    },
    {
        path: 'signaturecertificate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_signaturecertificate_signaturecertificate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signaturecertificate/signaturecertificate.module */ 62043)).then(m => m.SignaturecertificatePageModule)
    },
    {
        path: 'newappliance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_newappliance_newappliance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./newappliance/newappliance.module */ 40835)).then(m => m.NewappliancePageModule)
    },
    {
        path: 'abandoncall',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_abandoncall_abandoncall_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./abandoncall/abandoncall.module */ 93347)).then(m => m.AbandoncallPageModule)
    },
    {
        path: 'authorizationrequired',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_authorizationrequired_authorizationrequired_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authorizationrequired/authorizationrequired.module */ 86026)).then(m => m.AuthorizationrequiredPageModule)
    },
    {
        path: 'engineersignature',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_engineersignature_engineersignature_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./engineersignature/engineersignature.module */ 53044)).then(m => m.EngineersignaturePageModule)
    },
    {
        path: 'complete',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_complete_complete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./complete/complete.module */ 50887)).then(m => m.CompletePageModule)
    },
    {
        path: 'boilerinstall',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_boilerinstall_boilerinstall_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./boilerinstall/boilerinstall.module */ 52310)).then(m => m.BoilerinstallPageModule)
    },
    {
        path: 'boilerinstallnext',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_boilerinstallnext_boilerinstallnext_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boilerinstallnext/boilerinstallnext.module */ 54049)).then(m => m.BoilerinstallnextPageModule)
    },
    {
        path: 'boilerinstallsign',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_boilerinstallsign_boilerinstallsign_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boilerinstallsign/boilerinstallsign.module */ 72512)).then(m => m.BoilerinstallsignPageModule)
    },
    {
        path: 'editappliance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editappliance_editappliance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editappliance/editappliance.module */ 28917)).then(m => m.EditappliancePageModule)
    },
    {
        path: 'cannotcomplete',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cannotcomplete_cannotcomplete_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cannotcomplete/cannotcomplete.module */ 78162)).then(m => m.CannotcompletePageModule)
    },
    {
        path: 'complete-claim',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_complete-claim_complete-claim_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./complete-claim/complete-claim.module */ 45831)).then(m => m.CompleteClaimPageModule)
    },
    {
        path: 'complete-service',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_complete-service_complete-service_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./complete-service/complete-service.module */ 48949)).then(m => m.CompleteServicePageModule)
    },
    {
        path: 'test',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-material___ivy_ngcc___fesm2015_ui-material_js"), __webpack_require__.e("src_app_test_test_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./test/test.module */ 16615)).then(m => m.TestPageModule)
    },
    {
        path: 'test-bind',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("src_app_test-bind_test-bind_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./test-bind/test-bind.module */ 85305)).then(m => m.TestBindPageModule)
    },
    {
        path: 'sitesurvey',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sitesurvey_sitesurvey_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sitesurvey/sitesurvey.module */ 72571)).then(m => m.SitesurveyPageModule)
    },
    {
        path: 'sitesurveypics',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sitesurveypics_sitesurveypics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sitesurveypics/sitesurveypics.module */ 81028)).then(m => m.SitesurveypicsPageModule)
    },
    {
        path: 'sitesurveysign',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_sitesurveysign_sitesurveysign_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sitesurveysign/sitesurveysign.module */ 39032)).then(m => m.SitesurveysignPageModule)
    },
    {
        path: 'nwapp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nwapp_nwapp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nwapp/nwapp.module */ 56254)).then(m => m.NwappPageModule)
    },
    {
        path: 'iontest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("src_app_iontest_iontest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./iontest/iontest.module */ 96570)).then(m => m.IontestPageModule)
    },
    {
        path: 'testedit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-material___ivy_ngcc___fesm2015_ui-material_js"), __webpack_require__.e("src_app_testedit_testedit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./testedit/testedit.module */ 92679)).then(m => m.TesteditPageModule)
    },
    {
        path: 'querychk',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_querychk_querychk_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./querychk/querychk.module */ 70017)).then(m => m.QuerychkPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules, relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 53040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 6469);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes.service */ 97324);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ 51491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 64967);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 41899);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);






// import { StatusBar } from '@ionic-native/status-bar/ngx';








const BackgroundGeolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_6__.registerPlugin)("BackgroundGeolocation");
let AppComponent = class AppComponent {
    constructor(platform, 
    // private statusBar: StatusBar,
    storage, navCtrl, fio, auth, themeService, location, router, alertController, splashScreen) {
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.fio = fio;
        this.auth = auth;
        this.themeService = themeService;
        this.location = location;
        this.router = router;
        this.alertController = alertController;
        this.splashScreen = splashScreen;
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.initializeApp();
        this.backButtonEvent();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.splashScreen.hide();
            // this.statusBar.backgroundColorByHexString("062c47");
            this.storage.get('enggid').then(res => {
                this.engineerID = res;
            });
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
                }
                else {
                    this.themeService.enableLiveMode();
                }
            });
        });
    }
    sendLocation(lat, long, time) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
            .set('engineerid', this.engineerID)
            .set('longitude', long)
            .set('latitude', lat)
            .set('createdDate', time);
        this.auth.httpSend('AddToLocationTracker', params, 'post').subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    authenticatefinger() {
        return new Promise((resolve, reject) => {
            this.fio.isAvailable().then(() => {
                this.fio.show({
                    title: 'Biometric Authentication',
                    subtitle: 'Confirm your identity, We need to make sure this is you touch the finger print sensor to continue' // (Android Only) | optional | Default: null
                }).then((val) => {
                    this.storage.set("loginCount", 2);
                    resolve("");
                }, (err) => {
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(0, () => {
            console.log("Danish" + this.router.url);
            this.routerOutlets.forEach((outlet) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (this.router.url === '/tabs/tab1' || this.router.url === '/login' || this.router.url === '/') {
                    if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                        this.lastTimeBackPress = new Date().getTime();
                        this.presentAlertConfirm();
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                }
                else if (this.router.url != '/tabs/tab1') {
                    yield this.router.navigate(['/tabs/tab1']);
                    //this.location.back();
                }
            }));
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Confirm!',
                message: 'Are you sure you want to close the app?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Close App',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__.FingerprintAIO },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _themes_service__WEBPACK_IMPORTED_MODULE_3__.ThemesService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet,] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 89131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 64967);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_speed_test__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-speed-test */ 2314);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 6469);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 5954);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 33293);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 77607);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _app_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.validator */ 32028);
/* harmony import */ var _scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scroll-to-bottom.directive */ 20116);
/* harmony import */ var _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modalpopup/modal-example.component */ 91025);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 38298);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 54364);








// import { SQLite } from '@ionic-native/sqlite/ngx';



















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_12__.ScrollToBottomDirective, _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_13__.ModalExampleComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.NoopAnimationsModule, ng_speed_test__WEBPACK_IMPORTED_MODULE_22__.SpeedTestModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen,
            _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__.SQLite,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.Keyboard,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder,
            _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions,
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__.LocationAccuracy,
            _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe,
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__.FingerprintAIO,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NG_VALIDATORS,
                useValue: _app_validator__WEBPACK_IMPORTED_MODULE_11__.customValidator,
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 32028:
/*!**********************************!*\
  !*** ./src/app/app.validator.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customValidator": function() { return /* binding */ customValidator; },
/* harmony export */   "customValidator100": function() { return /* binding */ customValidator100; }
/* harmony export */ });
function customValidator(control) {
    /// 0.0001
    let decRegex = /^[0](\.\d{4})$/;
    console.log("val  " + decRegex.test(control.value));
    const hasError = control.value ? !decRegex.test(control.value) : false;
    //const hasError = control.value ? (control.value as string).startsWith("abc") : false;
    return hasError ? { customValidator: true } : null;
}
function customValidator100(control) {
    /// 100
    let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
    console.log("val  " + decRegex.test(control.value));
    const hasError = control.value ? !decRegex.test(control.value) : false;
    //const hasError = control.value ? (control.value as string).startsWith("abc") : false;
    return hasError ? { customValidator: true } : null;
}


/***/ }),

/***/ 73986:
/*!********************************************!*\
  !*** ./src/app/guards/auto-login.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoLoginGuard": function() { return /* binding */ AutoLoginGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);





let AutoLoginGuard = class AutoLoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        console.log("Danish inside Auto Login Guard");
        this.authService.loadToken();
    }
    canLoad() {
        console.log(this.authService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(val => val !== null)));
        return this.authService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(val => val !== null), // Filter out initial Behaviour subject value
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), // Otherwise the Observable doesn't complete!
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuthenticated => {
            console.log('inside automatic login guard value ' + isAuthenticated);
            if (isAuthenticated) {
                // Directly open inside area       
                console.log('value is true that is why showing dashboard page');
                this.router.navigate(['tabs']);
            }
            else {
                // Simply allow access to the login
                console.log('value is false that is why showing login page');
                return true;
            }
        }));
    }
};
AutoLoginGuard.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AutoLoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AutoLoginGuard);



/***/ }),

/***/ 91025:
/*!*******************************************************!*\
  !*** ./src/app/modalpopup/modal-example.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalExampleComponent": function() { return /* binding */ ModalExampleComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_example_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-example.component.html */ 57274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 7602);




let ModalExampleComponent = class ModalExampleComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.dataList = [];
        this.topLimit = 30;
    }
    ngOnInit() {
        this.dataList = this.data.slice(0, this.topLimit);
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm(name) {
        return this.modalCtrl.dismiss(name, 'confirm');
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.topLimit += 30;
            this.dataList = this.data.slice(0, this.topLimit);
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length == this.dataList.length) {
                event.target.disabled = true;
            }
        }, 100);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
};
ModalExampleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController }
];
ModalExampleComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInfiniteScroll,] }]
};
ModalExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-modal-example',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_example_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], ModalExampleComponent);



/***/ }),

/***/ 20116:
/*!***********************************************!*\
  !*** ./src/app/scroll-to-bottom.directive.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToBottomDirective": function() { return /* binding */ ScrollToBottomDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


let ScrollToBottomDirective = class ScrollToBottomDirective {
    constructor(_el) {
        this._el = _el;
    }
    // public ngAfterViewInit() {
    //   const el: HTMLDivElement = this._el.nativeElement;
    //   // Does not work as scrollHeight === offsetHeight
    //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    //   // This work but we see scroll moving
    //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
    // }
    // public ngOnInit() {
    //   const el: HTMLDivElement = this._el.nativeElement;
    //   // Does not work as scrollHeight === offsetHeight
    //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    //   // This work but we see scroll moving
    //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
    // }
    scrollToBottom() {
        const el = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
};
ScrollToBottomDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ScrollToBottomDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[scroll-to-bottom]'
    })
], ScrollToBottomDirective);



/***/ }),

/***/ 97324:
/*!***********************************!*\
  !*** ./src/app/themes.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemesService": function() { return /* binding */ ThemesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



let ThemesService = class ThemesService {
    constructor(renderFactory, document) {
        this.renderFactory = renderFactory;
        this.document = document;
        this.renderer = this.renderFactory.createRenderer(null, null);
    }
    enableDebugMode() {
        console.log("Inside Debugmode");
        this.renderer.addClass(this.document.body, "debug-theme");
    }
    enableLiveMode() {
        console.log("Inside Live mode");
        this.renderer.removeClass(this.document.body, "debug-theme");
    }
};
ThemesService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2 },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
ThemesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], ThemesService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(JSON.stringify(err)));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		90733,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		20985,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		93899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		5121,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		52960,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		45473,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		19787,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66165,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		69569,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		35119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		90799,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68918,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		94028,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		98107,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		72178,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		20123,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		18706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		12099,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		84868,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		54377,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		15678,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		16735,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		87686,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		48555,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		30568,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		6231,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		45772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		14977,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		42886,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		54990,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		13810,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		2446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		47619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		28393,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		56281,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		35932,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		57970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		80298,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		71006,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		74783,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		62749,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		55404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		39043,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 57274:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modalpopup/modal-example.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"medium\" (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Select {{msg}} Name</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <ion-item (click)='confirm(\"other\")'>\n    <ion-label>Other</ion-label>\n  </ion-item>\n  <ion-item *ngFor=\"let name of dataList\" (click)='confirm(name)'>\n    <ion-label>{{name}}</ion-label>\n  </ion-item>\n\n\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ 53040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map