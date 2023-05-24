"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_details_details_module_ts"],{

/***/ 95048:
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": function() { return /* binding */ DetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 21735);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 10396:
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": function() { return /* binding */ DetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 95048);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 21735);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 21735:
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": function() { return /* binding */ DetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details.page.html */ 15463);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 75267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4320);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 89131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);












class validation {
    constructor(route) {
        this.route = route;
    }
}
let DetailsPage = class DetailsPage {
    constructor(platform, geolocation, storage, router, route, auth, iab) {
        this.platform = platform;
        this.geolocation = geolocation;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.iab = iab;
        this.base64 = '';
        this.updatePicture = '';
        this.userLatitude = '';
        this.userLongitude = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                setTimeout(() => {
                    if (this.data['ProductName'] == 'SITE SURVEY') {
                        this.hideInventory = true;
                    }
                }, 200);
                this.auth.database.executeSql("select status from jobsstatus where JOBGUID = ?", [this.data['JOBGUID']]).then((res) => {
                    console.log('################# ISCLAIM  JOBS STATUS ' + this.data['IsClaim'] + ' ' + JSON.stringify(res) + ' ' + res.rows.item(0)['status'] + ' ' + this.data['ProductName'] + ' ' + this.data['ProductTypeName']);
                    this.auth.dismissLoading();
                    if (res.rows.item(0)['status'] == 'onroute') {
                        this.updateButtons(true, false, true, true, true, true, true, true, true, true, true, false, false);
                    }
                    else if (res.rows.item(0)['status'] == 'arrived' && this.data['IsClaim'] == 'True') {
                        if (this.data['ProductName'] == 'BOILER INSTALLATION') {
                            this.updateButtons(true, true, false, false, false, false, false, true, true, true, true, false, false);
                        }
                        else if (this.data['ProductTypeName'] == 'Boiler' && this.data['BackgroundColour'] == '#20B2AA') {
                            this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                        }
                        else {
                            this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                        }
                    }
                    else if (res.rows.item(0)['status'] == 'arrived' && this.data['IsClaim'] == 'False') {
                        if (this.data['ProductName'] == 'SITE SURVEY') {
                            this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                        }
                        else
                            this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                    }
                    else if (res.rows.item(0)['status'] == null) {
                        this.updateButtons(false, true, true, true, true, true, true, true, true, true, true, false, false);
                    }
                    else if (res.rows.item(0)['status'] == 'boilerinstallation' && this.data['IsClaim'] == 'True') {
                        this.updateButtons(true, true, false, false, false, true, false, true, true, true, true, false, false);
                    }
                    else {
                        if (res.rows.item(0)['status'] == 'completed') {
                            this.auth.alert("Job already completed");
                            if (this.data['IsClaim'] == 'True') {
                                if (this.data['ProductName'] == 'BOILER INSTALLATION') {
                                    this.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false);
                                    //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);
                                }
                                else if (this.data['ProductTypeName'] == 'Boiler' && this.data['BackgroundColour'] == '#20B2AA') {
                                    this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                                }
                                else {
                                    this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                                }
                            }
                            else {
                                if (this.data['ProductName'] == 'SITE SURVEY') {
                                    this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                                }
                                else
                                    this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                            }
                        }
                        else {
                            this.auth.alert(' Something went wrong. ');
                            if (this.data['IsClaim'] == 'True') {
                                if (this.data['ProductName'] == 'BOILER INSTALLATION') {
                                    this.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false);
                                    //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);
                                }
                                else if (this.data['ProductTypeName'] == 'Boiler' && this.data['BackgroundColour'] == '#20B2AA') {
                                    this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                                }
                                else {
                                    this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                                }
                            }
                            else {
                                if (this.data['ProductName'] == 'SITE SURVEY') {
                                    this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                                }
                                else
                                    this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                            }
                        }
                    }
                }).catch((e) => {
                    this.auth.dismissLoading();
                    console.log('################# ERROR ISCLAIM  JOBS STATUS' + this.data['IsClaim'] + ' ' + JSON.stringify(e));
                });
            }
        });
        console.log("Danish " + this.data['CLAIMRef']);
    }
    // Arrived
    btnArrivedAtJobClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.auth.checkNetwork();
            if (a.connected) {
                this.auth.turnOnGpsAndGetLocation().subscribe((pos) => {
                    this.syncArrived(pos);
                });
            }
            else {
                this.auth.turnOnGpsAndGetLocation().subscribe((pos) => {
                    this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', this.data['JOBGUID']]).then((res) => {
                        this.updateOnArrivedButton();
                    }).catch(() => {
                        this.auth.dismissLoading();
                        this.auth.showToast('error occured please press again');
                    });
                });
            }
        });
    }
    syncArrived(pos) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
            .set("JOBGUID", this.data["JOBGUID"])
            .set("Latitude", pos.coords.latitude.toString())
            .set("Longitude", pos.coords.latitude.toString())
            .set("ArrAtJobDT", this.auth.getdateformatV2())
            .set("Desc", this.auth.getdateformatV2())
            .set("title", "Arrived at job");
        this.auth.httpSend("Service_SaveArrivedAtJob", params, "post")
            .subscribe((msg) => {
            this.auth.insertIntoSyncLog(this.data['JOBGUID'], "OnArrived Done", msg["Msg"]);
            this.updateOnArrivedButton();
        }, (err) => {
            this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', this.data['JOBGUID']]).then((res) => {
                this.updateOnArrivedButton();
            }).catch(() => {
                this.auth.dismissLoading();
                this.auth.showToast('error occured please press again');
            });
        });
    }
    updateOnArrivedButton() {
        this.auth.database.executeSql("update jobsstatus set status=? where JOBGUID=?", ['arrived', this.data['JOBGUID']]).then((res) => {
            if (this.data['IsClaim'] == 'True') {
                if (this.data['ProductName'] == 'BOILER INSTALLATION') {
                    this.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false);
                }
                else if (this.data['ProductTypeName'] == 'Boiler' && this.data['BackgroundColour'] == '#20B2AA') {
                    this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                }
                else {
                    this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                }
            }
            else {
                if (this.data['ProductName'] == 'SITE SURVEY') {
                    this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                }
                else
                    this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
            }
            this.auth.dismissLoading();
        }).catch((e) => {
            this.auth.dismissLoading();
            this.auth.alert("Please turn on the location. Location is mandatory to use the application.", "Permission Error");
        });
    }
    // OnRoute
    btnOnRouteClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.auth.checkNetwork();
            if (a.connected) {
                this.auth.turnOnGpsAndGetLocation().subscribe((pos) => {
                    this.synconRoute(pos);
                });
            }
            else {
                this.auth.turnOnGpsAndGetLocation().subscribe((pos) => {
                    this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ", [this.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', this.data['JOBGUID']])
                        .then((res) => {
                        this.updateOnRouteButtons();
                    }).catch(err => {
                        this.auth.dismissLoading();
                        this.auth.showToast('error occured please press again');
                    });
                });
            }
        });
    }
    synconRoute(pos) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
            .set("CLAIMGUID", this.data["CLAIMGUID"])
            .set("JOBGUID", this.data["JOBGUID"])
            .set("Latitude", pos.coords.latitude.toString())
            .set("Longitude", pos.coords.longitude.toString())
            .set("OnRouteDT", this.auth.getdateformatV2())
            .set("Desc", this.auth.getdateformatV2())
            .set("title", "On Route");
        this.auth
            .httpSend("Service_SaveOnRoute", params, "post")
            .subscribe((msg) => {
            this.updateOnRouteButtons();
            this.auth.insertIntoSyncLog(this.data['JOBGUID'], "OnRoute Done", msg["Msg"]);
        }, (err) => {
            this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ", [this.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', this.data['JOBGUID']])
                .then((res) => {
                this.updateOnRouteButtons();
            }).catch(err => {
                this.auth.dismissLoading();
                this.auth.showToast('error occured please press again');
            });
            ;
        });
    }
    updateOnRouteButtons() {
        this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['onroute', this.data['JOBGUID']])
            .then(() => {
            if (this.data['ProductName'] == 'SITE SURVEY') {
                this.updateButtons(true, false, true, true, true, true, true, true, true, true, true, true, false);
            }
            else {
                this.updateButtons(true, false, true, true, true, true, true, true, true, true, true, false, false);
            }
            this.auth.dismissLoading();
        }).catch(() => {
            this.auth.dismissLoading();
            this.auth.showToast('error occured please press again');
        });
    }
    // click certificate
    CertificateClick(ServicedetailsList) {
        this.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [this.data['JOBGUID'], this.data['CLAIMJOBID'], " "]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['createcertificate'], navigationExtras);
    }
    btnAbandonCallClick() {
        this.auth.database.executeSql('insert into abandon (JOBGUID) values(?)', [this.data['JOBGUID']]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['abandoncall'], navigationExtras);
    }
    btnAuthorizationRequiredClick() {
        this.auth.database.executeSql('insert into authorization (JOBGUID) values(?)', [this.data['JOBGUID']]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['authorizationrequired'], navigationExtras);
    }
    fetchJobStatus(JOBGUID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("job status " + this.auth.status);
            return yield this.auth.fetchJobsStatus(JOBGUID);
        });
    }
    updateButtons(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13) {
        this.hideRouteFlag = b1;
        this.hideArrivedFlag = b2;
        this.hideAbandonFlag = b3;
        this.hideAuthorizationFlag = b4;
        this.hideCompleteFlag = b5;
        this.hidecreateCertificateFlag = b6;
        this.hideBoilerInstallationReport = b7;
        this.hideComboLabel = b8;
        this.hideStartService = b9;
        this.hideCannotComplete = b10;
        this.hideSiteSurvey = b11;
        this.hideInventory = b12;
        this.hideVanStock = b13;
    }
    CompleteClick() {
        this.auth.database.executeSql('insert into completeclaim (JOBGUID, BackgroundColour) values(?,?)', [this.data['JOBGUID'], this.data['BackgroundColour']]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['complete-claim'], navigationExtras);
    }
    BoilerInstallClick() {
        this.auth.database.executeSql('insert into boilerinstallation (JOBGUID) values(?)', [this.data['JOBGUID']]);
        this.auth.database.executeSql('insert into boilerinstallationpics (JOBGUID) values(?)', [this.data['JOBGUID']]);
        this.auth.database.executeSql('insert into boilerinstallationsign (JOBGUID) values(?)', [this.data['JOBGUID']]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['boilerinstall'], navigationExtras);
    }
    StartServiceClick() {
        this.auth.database.executeSql('select * from jobslist where ParentJobGuid=?', [this.data['JOBGUID']]).then(res => {
            console.log("dddd claim job guid" + this.data["JOBGUID"]);
            console.log("dddd service data" + JSON.stringify(res.rows.item(0)));
            console.log("dddd service jobguid" + res.rows.item(0)["JOBGUID"]);
            let dat = {
                JOBGUID: res.rows.item(0)["JOBGUID"],
                CLAIMJOBID: res.rows.item(0)['CLAIMJOBID'],
                ComboClaimJobId: this.data['CLAIMJOBID'],
                RiskAddress: this.data['RiskAddress'],
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
                EngName: this.data["EngName"]
            };
            console.log("dddd " + JSON.stringify(dat));
            console.log("dddd " + JSON.stringify(res.rows.item(0)["JOBGUID"]));
            const navigationExtras = {
                state: {
                    data: dat,
                }
            };
            this.router.navigate(['createcertificate'], navigationExtras);
            this.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [dat.JOBGUID, dat.CLAIMJOBID, this.data['JOBGUID']]);
            // updating on route and on Arrived
            this.auth.turnOnGpsAndGetLocation().subscribe((pos) => {
                this.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [dat.CLAIMJOBID, pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', dat.JOBGUID]);
                this.auth.database.executeSql("update arrived set CLAIMGUID=?, Lattitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [dat.CLAIMJOBID, pos.coords.latitude.toString(), pos.coords.longitude.toString(), this.auth.getdateformatV2(), 'yes', dat.JOBGUID]);
                this.auth.dismissLoading();
            });
        });
        // console.log("Data Fetched from this Job : "+this.data['JOBGUID']+""+this.data['CLAIMGUID']+"");
    }
    CannotCompleteClick() {
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['cannotcomplete'], navigationExtras);
    }
    call(no) {
        no == 1 ? window.open('tel:' + this.data['phone']) : window.open('tel:' + this.data['HomePhone']);
    }
    mapopen() {
        window.open('https://maps.google.com/?q=' + this.data['RiskAddress'] + ' ' + this.data['RiskPostCode'], '_system');
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
    btnInventoryClick() {
        this.storage.get('enggid').then((res) => {
            const browser = this.iab.create('https://inventory.home360.org.uk/?RefNo=' +
                this.data['CLAIMRef'] + '&' + 'ClaimId=' + this.data['CLAIMGUID'] + '&' + 'EngId=' + res, '_self', {
                zoom: 'no'
            });
        }).catch((e) => {
        });
    }
    btnTicketClick() {
        const browser = this.iab.create('https://newticket.home360.org.uk/Claim/Ticket?JobID=' + this.data['JOBGUID'], '_self', {
            zoom: 'no'
        });
    }
    takePhoto() {
        console.log(this.data['CLAIMGUID']);
        this.options = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
            allowEditing: false,
        };
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(this.options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
            this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql("update  enggpics set  pic=?, HaveData=?,latitude=?,longitude=?,onDt=? where JOBGUID=? ", [imageData, 'yes', this.auth.lat, this.auth.long, this.auth.getdateformatV2(), this.data['JOBGUID']]).then((res) => {
                this.auth.showToast('Success! Engineer Image has been saved.', 'success');
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams()
                    .set("data", imageData.base64String)
                    .set("CLAIMGUID", this.data['CLAIMGUID']);
                console.log(this.data['CLAIMGUID']);
                this.auth.httpSend("SavePhoto", params, "post").subscribe(res => {
                    console.log(res['Msg']);
                    this.auth.database.executeSql('delete from enggpics where JOBGUID= ?', [this.data['JOBGUID']]);
                }, err => {
                    console.log("send photo error" + err);
                });
            }).catch((e) => {
                this.auth.showToast('Error Saving Engineer Image.' + e, 'danger');
            });
        }, (err) => {
            this.auth.showToast('Error Getting Photo', 'danger');
        });
    }
    btnVSClick() {
        this.storage.get('enggid').then((enggid) => {
            const browser = this.iab.create('https://hr.home360.org.uk/VanStockHistory/Index?ClaimId=' +
                this.data['CLAIMGUID'] + '&' + 'EngId=' + enggid, '_self', {
                zoom: 'no'
            });
        }).catch((e) => {
        });
    }
    btnSiteSurveyClick() {
        this.auth.database.executeSql('insert into sitesurvey (JOBGUID) values(?)', [this.data['JOBGUID']]);
        this.auth.database.executeSql('insert into sitesurveypics (JOBGUID) values(?)', [this.data['JOBGUID']]);
        this.auth.database.executeSql('insert into sitesurveysign (JOBGUID) values(?)', [this.data['JOBGUID']]);
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['sitesurvey'], navigationExtras);
        // this.storage.get('enggid').then((res)=>{
        //   const browser = this.iab.create('https://sitesurvey.home360.org.uk/?EngId=' +
        //   res + '&' + 'ClaimId=' + this.data['CLAIMGUID']);
        // }).catch((e)=>{
        // });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-details',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 15463:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/details/details.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n <ion-content>\n\n  <ion-card>\n    <ion-item style=\"--background: {{data.BackgroundColour}};\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label>\n              Pruduct Name : {{data.ProductName}} <br><br>\n              ClaimJobID : {{data.CLAIMJOBID}} <br><br>\n              JOBGUID : {{data.JOBGUID}} <br><br>\n              AppointmentDate : {{data.BookingDate}} <br><br>\n              Appointment Start Time : {{data.AppointmentStartTime}} <br><br>\n              Appointment End Time : {{data.AppointmentEndTime}} <br><br>\n              Client Name : {{data.CLIENTNAME}}                \n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label class=\"ion-text-wrap ion-text-justify\">RiskAddress : {{data.RiskAddress}} - {{data.RiskPostCode}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" style=\"display: flex; align-items: center;\">\n            <div class=\"callandmap\">\n              <div class=\"map\">\n                <ion-icon name=\"location\" (click)=\"mapopen()\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label>Phone: {{data.phone}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"callandmap\">\n              <div class=\"call\">\n                <ion-icon name=\"call\" (click)=\"call(1)\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label>HomePhone : {{data.HomePhone}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"callandmap\">\n              <div class=\"call\">\n                <ion-icon name=\"call\" (click)=\"call(2)\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>        \n      </ion-grid>\n      \n    </ion-item>\n  </ion-card>\n\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnTicketClick()\">\n          <ion-icon size=\"large\" name=\"eye\"></ion-icon>&nbsp;\n          View Job Ticket\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"takePhoto()\">\n          <ion-icon name=\"camera\"></ion-icon>&nbsp;\n          Take Picture\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnVSClick()\" [hidden]=\"hideVanStock\">\n          <ion-icon name=\"car\"></ion-icon>&nbsp;\n          Van Stock\n        </ion-button>\n      </ion-col>\n<!-- *ngIf=\"ProductName == 'BOILER SERVICE+GAS CERTIFICATE(GSI)' || ProductName == ''\" -->\n      <!-- <ion-col size=\"6\" *ngIf=\"data.ProductName == 'BOILER SERVICE+GAS CERTIFICATE(GSI)'\"> -->\n        <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnInventoryClick()\" [disabled]=\"hideInventory\">\n          <ion-icon name=\"document-text\"></ion-icon>&nbsp;\n          Inventory\n        </ion-button>\n      </ion-col>\n      \n      <!--         *ngIf=\"data.ProductName == 'SITE SURVEY' || data.ProductName == 'BOILER SERVICE'\n      || data.ProductName == 'BOILER BREAKDOWN' || data.ProductName == 'BOILER INSTALLATION'\" -->\n\n      <ion-col size=\"12\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnSiteSurveyClick()\" [hidden]=\"hideSiteSurvey\">\n          <ion-icon name=\"people\"></ion-icon>&nbsp;\n          Site Survey\n        </ion-button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button color=\"secondary\" [hidden]=\"hideRouteFlag\" expand=\"full\" (click)=\"btnOnRouteClick()\">On\n          Route</ion-button>\n        <ion-button color=\"secondary\" [hidden]=\"hideArrivedFlag\" expand=\"full\"\n          (click)=\"btnArrivedAtJobClick()\">Arrived at Job</ion-button>\n\n        <ion-button color=\"secondary\"  expand=\"full\"  [hidden]=\"hideAbandonFlag\"\n          (click)=\"btnAbandonCallClick()\">Abandon Call</ion-button>\n\n        <ion-button color=\"secondary\"  expand=\"full\" [hidden]=\"hideAuthorizationFlag\"\n          (click)=\"btnAuthorizationRequiredClick()\">Authorization Required</ion-button>\n\n        <ion-button color=\"secondary\"  [hidden]=\"hideCompleteFlag\" expand=\"full\" \n          (click)=\"CompleteClick()\"> Complete </ion-button>\n\n        <ion-button color=\"secondary\" expand=\"full\" [hidden]= \"hidecreateCertificateFlag\"\n          (click)=\"CertificateClick()\">Create Certificate</ion-button>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideBoilerInstallationReport\" expand=\"full\"\n          (click)=\"BoilerInstallClick()\">Boiler Install Report</ion-button>\n\n          <ion-label [hidden]=\"hideComboLabel\">  Please complete breakdown before Boiler Service </ion-label>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideStartService\" expand=\"full\"\n          (click)=\"StartServiceClick()\">Start Service</ion-button>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideCannotComplete\" expand=\"full\"\n          (click)=\"CannotCompleteClick()\">Cannot Complete Service</ion-button>\n<!-- \n          <ion-button color='secondary' expand=\"full\" (click)=\"syncRoute()\">Sync </ion-button>\n\n          <ion-button color='secondary' expand=\"full\" (click)=\"syncArrved()\">Sync </ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> \n\n\n\n<!-- \n\n<ion-button color=\"secondary\" [hidden]=\"hidestartServiceFlag\" expand=\"full\"\n(click)=\"InsertFromCertNoFutureJob(ServicedetailsList)\">Start Service</ion-button>\n\n<ion-button color=\"secondary\" [hidden]=\"hideCannotCompleteServiceFlag\" expand=\"full\"\n(click)=\"CannotCompleteClick(ServicedetailsList)\">Cannot Complete Service</ion-button>\n\n -->");

/***/ }),

/***/ 75267:
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "ion-card ion-item ion-icon {\n  color: #1a1c20;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmQge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICMxYTFjMjA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIGljb24gc2l6ZSBoZXJlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_details_details_module_ts-es2015.js.map