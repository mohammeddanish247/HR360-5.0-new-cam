"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 93092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": function() { return /* binding */ Tab2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": function() { return /* binding */ Tab2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 93092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": function() { return /* binding */ Tab2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 72040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 53934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);
/* harmony import */ var ng_speed_test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-speed-test */ 2314);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes.service */ 97324);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/network */ 51573);





//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';








let Tab2Page = class Tab2Page {
    constructor(navCtrl, apiGenerate, loadingCtrl, alertController, toastCtrl, router, httpClient, iab, speedTestService, storage, themeService) {
        this.navCtrl = navCtrl;
        this.apiGenerate = apiGenerate;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.httpClient = httpClient;
        this.iab = iab;
        this.speedTestService = speedTestService;
        this.storage = storage;
        this.themeService = themeService;
        this.makeSet = new Set();
        this.modelSet = new Set();
        this.modelArray = [];
        this.count = 1;
        this.toggleDevMode = false;
        this.devFlag = true;
        // url =  "https://beta-wsmobileapp.247development.uk/service1.asmx/";
        this.url = "https://mobileappapi.home360.org.uk/service1.asmx/";
        this.isLoading = false;
        this.settingArray = [
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
        this.DebugButtonFlag = false;
        this.getdateformat();
    }
    checkNetwork() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.networkStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_5__.Network.getStatus();
        });
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl
                .create({
                backdropDismiss: true,
            })
                .then((a) => {
                a.present().then(() => { });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            this.loadingCtrl.dismiss();
        });
    }
    getdateformat() {
        let tommo;
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
        }
        else if (tommo == "yesterday") {
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
        }
        else if (setting.path === "MakeModel") {
            this.checkNetwork();
            if (this.networkStatus.connected) {
                this.UpdateMakeModelFromServer();
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        }
        else if (setting.path === "gasSafe") {
            this.UpdateGasSafe();
        }
        else if (setting.path === "EngineerCertificate") {
            this.UpdateEngineerCertificate();
        }
        else if (setting.path === "ActivityReport") {
            this.gotoActivityReport();
        }
        else if (setting.path === "Intranet") {
            this.gotoIntranet();
        }
        else if (setting.path === "ErrorLog") {
            this.errorLog();
        }
        else if (setting.path === "updateFirmware") {
            this.updateFirmware();
        }
        else if (setting.path === "syncLog") {
            this.syncLog();
        }
        else {
            this.navCtrl.navigateForward(setting.path);
        }
    }
    syncLog() {
        this.router.navigate(["test"]);
    }
    Signature() {
        this.router.navigate(["engineersignature"]);
    }
    UpdateMakeModelFromServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.count = 1;
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                this.apiGenerate.presentCustomLoader("It may take some time. Please wait... ");
                this.httpClient.get(this.url + "Service_GetMakeModel").subscribe((res) => {
                    for (var i = 0; i < res.length; i++) {
                        this.apiGenerate.database.executeSql('INSERT INTO makemodel (make , model) VALUES(?,?)', [res[i]["Make"], res[i]["Model"]]).then(resp => {
                            this.apiGenerate.setLoadingText(`It may take some time. Please wait... updating ${this.count} of ${res.length}`);
                            this.count++;
                            if (this.count == res.length) {
                                this.apiGenerate.setLoadingText(`It may take some time. Please wait... updating boilers makes.`);
                                this.httpClient.get(this.url + "GetAllBoilerProductsName").subscribe((res) => {
                                    this.storage.set("boilers", res).then(succ => {
                                        console.log("### success boilers names inserted");
                                        this.apiGenerate.dismissLoading();
                                        this.apiGenerate.showToast("Make and Model Successfully Updated.", 'success');
                                    });
                                });
                            }
                        });
                    }
                }, (err) => {
                    this.apiGenerate.alert("Please Try Again.");
                    setTimeout(() => {
                        this.apiGenerate.dismissLoading();
                    }, 300);
                });
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    UpdateGasSafe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                const alert = yield this.alertController.create({
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
                            handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                if (data.UpdateGas == "") {
                                    this.apiGenerate.showToast("Not Saved! Field can not be empty", "warning");
                                }
                                else {
                                    this.apiGenerate.updateEngInfo("GasSafeLicenseNumber", data.UpdateGas);
                                    this.storage.get("enggid").then(res => {
                                        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
                                            .set("EngId", res)
                                            .set("Info", data.UpdateGas);
                                        this.apiGenerate.httpSend("Service_UpdateEngGasSafeLicense", params, "post").subscribe(res => {
                                            console.log(res['Msg']);
                                            this.apiGenerate.showToast(`${data.UpdateGas} Gas Safe License Successfully Updated.`, 'success');
                                        });
                                    });
                                }
                            }),
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    UpdateEngineerCertificate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                const alert = yield this.alertController.create({
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
                            handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                if (data.UpdateEng == "") {
                                }
                                else {
                                    this.storage.get("enggid").then(res => {
                                        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
                                            .set("EngId", res)
                                            .set("Info", data.UpdateEng);
                                        this.apiGenerate.httpSend("Service_UpdateEngCertName", params, "post").subscribe(res => {
                                            console.log(res['Msg']);
                                            this.apiGenerate.showToast("Update Engineer Certificate Name Successfully Updated.", 'success');
                                        });
                                    });
                                }
                            }),
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    gotoActivityReport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                const browser = this.iab.create("https://engineeractivity.home360.org.uk/Home/EngineerActivityReport?id=" +
                    this.ID, '_self', {
                    zoom: 'no'
                });
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    gotoIntranet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                const browser = this.iab.create("https://intranet.home360.org.uk/", '_self', {
                    zoom: 'no'
                });
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    errorLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                this.apiGenerate.sendErrorLog().then(res => {
                    this.apiGenerate.showToast(res);
                });
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    updateFirmware() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.apiGenerate.checkNetwork();
            if (a.connected) {
                this.apiGenerate.presentLoading("Please wait while we updating your Firmware.");
                this.apiGenerate.speedCheck().then((resp) => {
                    if (resp == "TimeOut") {
                        this.apiGenerate.dismissLoading();
                        this.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again.", "Connection TimeOut");
                    }
                    else {
                        if (resp > 0.5) {
                            this.httpClient
                                .get(this.url + "Service_UpdateFirmware")
                                .subscribe((res) => {
                                this.liveUrl = res["liveUrl"];
                                this.debugUrl = res["debugUrl"];
                                this.apiGenerate.database.executeSql("update firmwareurl set live = ?, debug = ? where id=1", [this.liveUrl, this.debugUrl]).then(() => {
                                    this.apiGenerate.url = this.liveUrl;
                                    this.apiGenerate.showToast("Firmware Updated Successfully", "success");
                                    this.DebugButtonFlag = true;
                                    this.storage.set("updateFirmware", "true");
                                    this.apiGenerate.dismissLoading();
                                });
                            }, (err) => {
                                this.apiGenerate.showToast("Error Occured try again later" + err);
                                this.apiGenerate.dismissLoading();
                            });
                        }
                        else {
                            this.apiGenerate.dismissLoading();
                            this.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again", "Connection Failed");
                        }
                    }
                }).catch(e => {
                    this.apiGenerate.dismissLoading();
                    this.apiGenerate.alert(JSON.stringify(e));
                });
            }
            else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    updateUrlInService() {
        this.apiGenerate.database.executeSql("select * from");
    }
    toggle(event) {
        if (this.toggleDevMode == true) {
            this.themeService.enableDebugMode();
            this.storage.set("debugmode", "true");
            this.apiGenerate.database.executeSql('select Debug from firmwareurl', []).then(res => {
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
        }
        else {
            this.themeService.enableLiveMode();
            this.storage.set("debugmode", "false");
            this.apiGenerate.database.executeSql('select Live from firmwareurl', []).then(res => {
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
            }
            else {
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
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: ng_speed_test__WEBPACK_IMPORTED_MODULE_10__.SpeedTestService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _themes_service__WEBPACK_IMPORTED_MODULE_4__.ThemesService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-tab2",
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 72040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"slide bg\">\n    <p>\n      <img src=\"../../assets/images/logobig.png\" />\n    </p>\n  </div>\n  <div class=\"details\">\n\n    <ion-card *ngFor=\"let setting of settingArray\" (click)=\"openOption(setting)\">\n      <ion-item color=\"secondary\" line='none'>\n        <h2>{{setting.name}}</h2>\n      </ion-item>\n    </ion-card>\n\n    <ion-card *ngIf=\"DebugButtonFlag\">\n      <ion-item lines=\"none\" color=\"secondary\">\n        <h2>Debug Mode</h2>\n        <ion-toggle slot=\"end\" color=\"light\"  name=\"togglebutton\" [(ngModel)]=\"toggleDevMode\" (ionChange)=\"toggle($event)\"></ion-toggle>\n      </ion-item>            \n    </ion-card>\n\n    <!-- Danish -->\n  <div class=\"ion-text-center\">\n    <h6 style=\"color:rgb(98, 98, 98); bottom: 0px;\">Beta Version 2.5</h6>\n    <!-- <h6 style=\"color:rgb(98, 98, 98); bottom: 0px;\" [hidden]=\"devFlag\">Developer Mode</h6> -->\n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 53934:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  position: absolute;\n}\nion-content .slide {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 40%;\n}\nion-content .slide p {\n  text-align: center;\n  margin-top: 20%;\n}\nion-content .details {\n  position: absolute;\n  top: 30%;\n  width: 100%;\n  background-color: white;\n  z-index: 1;\n  border-top-left-radius: 26px;\n  border-top-right-radius: 26px;\n}\nion-card {\n  -webkit-margin-start: 20px;\n          margin-inline-start: 20px;\n  -webkit-margin-end: 20px;\n          margin-inline-end: 20px;\n  border-radius: 15px;\n}\nion-card h2 {\n  color: #ffffff;\n  font-size: large;\n}\nion-toggle {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBSlI7QUFXQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFZQTtFQUNJLFdBQUE7QUFUSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAuc2xpZGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDg1JSwgMTUlKTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNnB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjZweDtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBoMntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxufVxuXG5pb24tdG9nZ2xlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es2015.js.map