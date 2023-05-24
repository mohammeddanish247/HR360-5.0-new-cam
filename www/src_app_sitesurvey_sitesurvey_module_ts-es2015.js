"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_sitesurvey_sitesurvey_module_ts"],{

/***/ 5096:
/*!*********************************************************!*\
  !*** ./src/app/sitesurvey/sitesurvey-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveyPageRoutingModule": function() { return /* binding */ SitesurveyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _sitesurvey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurvey.page */ 91455);




const routes = [
    {
        path: '',
        component: _sitesurvey_page__WEBPACK_IMPORTED_MODULE_0__.SitesurveyPage
    }
];
let SitesurveyPageRoutingModule = class SitesurveyPageRoutingModule {
};
SitesurveyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SitesurveyPageRoutingModule);



/***/ }),

/***/ 72571:
/*!*************************************************!*\
  !*** ./src/app/sitesurvey/sitesurvey.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveyPageModule": function() { return /* binding */ SitesurveyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _sitesurvey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurvey-routing.module */ 5096);
/* harmony import */ var _sitesurvey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurvey.page */ 91455);







let SitesurveyPageModule = class SitesurveyPageModule {
};
SitesurveyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sitesurvey_routing_module__WEBPACK_IMPORTED_MODULE_0__.SitesurveyPageRoutingModule
        ],
        declarations: [_sitesurvey_page__WEBPACK_IMPORTED_MODULE_1__.SitesurveyPage]
    })
], SitesurveyPageModule);



/***/ }),

/***/ 91455:
/*!***********************************************!*\
  !*** ./src/app/sitesurvey/sitesurvey.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveyPage": function() { return /* binding */ SitesurveyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurvey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sitesurvey.page.html */ 90107);
/* harmony import */ var _sitesurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurvey.page.scss */ 72640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);








let SitesurveyPage = class SitesurveyPage {
    constructor(router, storage, route, auth, modalCtrl) {
        this.router = router;
        this.storage = storage;
        this.route = route;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.boilers = [];
        this.locations = [
            "Attic",
            "Airing Cupboard",
            "BathRoom",
            "BedRoom",
            "Garage",
            "Kitchen",
            "Living Room",
            "Loft",
            "Landing",
            "Utility Room",
            "Cellar"
        ];
        this.descriptions = [
            "Combi to Combi",
            "Combi to System",
            "Gravity to Fully Pumped (SYSTEM ONLY)",
            "Gravity to Fully Pumped (HEAT ONLY)",
            "Heat Only to System (Open to sealed)",
            "Heat only to Heat only (swap)",
            "System to System (swap)",
        ];
        this.data = [];
        // Flags
        this.GasRunNewFlag = true;
        this.CondensateGasNewFlag = true;
        this.NewBoilerLocationDescFlag = false;
        // ngModels
        this.siteSurveyboiler = '';
        this.siteSurveyboilerdescription = '';
        this.locationboiler = '';
        this.NewBoilerLocationSelect = '';
        this.NewBoilerLocationDesc = '';
        this.FlueSelect = '';
        this.FlueextensionsSelect = '';
        this.StandOffKitSelect = '';
        this.FourtyfivedegreeelbowSelect = '';
        this.NinetydegreeelbowSelect = '';
        this.trvs = "";
        this.StandingInletPressue = '';
        this.SiteSurveyReason = '';
        this.SiteSurveyProductType = '';
        this.GasRunSelect = '';
        this.GasRunNewDetails = '';
        this.CondensateGasSelect = '';
        this.CondensateGasNewDetails = '';
        this.WorkingInletPressue = '';
    }
    ngOnInit() {
        this.getData();
        this.storage.get("boilers").then((res) => {
            this.boilers = res;
        });
        // this.auth.database.executeSql('SELECT DISTINCT make FROM makemodel',[]).then(res=>{
        //   this.makeList = [];
        //   for (var i = 0; i < res.rows.length; i++) {
        //     this.makeList.push(res.rows.item(i)['make']);    
        //   }      
        // });  
    }
    ionViewWillLeave() {
        const siteSurvey = {
            siteSurveyboiler: this.siteSurveyboiler,
            siteSurveyboilerdescription: this.siteSurveyboilerdescription,
            locationboiler: this.locationboiler,
            NewBoilerLocationSelect: this.NewBoilerLocationSelect,
            FlueSelect: this.FlueSelect,
            FlueextensionsSelect: this.FlueextensionsSelect,
            StandOffKitSelect: this.StandOffKitSelect,
            FourtyfivedegreeelbowSelect: this.FourtyfivedegreeelbowSelect,
            NinetydegreeelbowSelect: this.NinetydegreeelbowSelect,
            GasRunSelect: this.GasRunSelect,
            GasRunNewDetails: this.GasRunNewDetails,
            CondensateGasSelect: this.CondensateGasSelect,
            CondensateGasNewDetails: this.CondensateGasNewDetails,
            StandingInletPressue: this.StandingInletPressue,
            WorkingInletPressue: this.WorkingInletPressue
        };
        this.storage.set(this.data['JOBGUID'], siteSurvey);
    }
    getData() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log("jobguid" + this.data['JOBGUID']);
                this.auth.database.executeSql('select * from sitesurvey where JOBGUID=?', [this.data['JOBGUID']])
                    .then((res) => {
                    console.log(JSON.stringify(res.rows.item(0)));
                    console.log(JSON.stringify(res.rows.item(0)['locationboiler']));
                    this.MakeSelect = res.rows.item(0)['siteSurveyboiler'];
                    this.ModelSelect = res.rows.item(0)['siteSurveyboiler'];
                    this.siteSurveyboiler = res.rows.item(0)['siteSurveyboiler'];
                    // this.boilers.push(res.rows.item(0)['siteSurveyboiler']);
                    this.siteSurveyboilerdescription = res.rows.item(0)['siteSurveyboilerdescription'];
                    this.locationboiler = res.rows.item(0)['locationboiler'];
                    this.NewBoilerLocationSelect = res.rows.item(0)['NewBoilerLocationSelect'];
                    this.NewBoilerLocationDesc = res.rows.item(0)['NewBoilerLocationDesc'];
                    this.FlueSelect = res.rows.item(0)['FlueSelect'];
                    this.FlueextensionsSelect = res.rows.item(0)['FlueextensionsSelect'];
                    this.StandOffKitSelect = res.rows.item(0)['StandOffKitSelect'];
                    this.FourtyfivedegreeelbowSelect = res.rows.item(0)['FourtyfivedegreeelbowSelect'];
                    this.NinetydegreeelbowSelect = res.rows.item(0)['NinetydegreeelbowSelect'];
                    this.SiteSurveyProductType = res.rows.item(0)['SiteSurveyProductType'];
                    this.SiteSurveyReason = res.rows.item(0)['SiteSurveyReason'];
                    this.GasRunSelect = res.rows.item(0)['GasRunSelect'];
                    this.GasRunNewDetails = res.rows.item(0)['GasRunNewDetails'];
                    this.CondensateGasSelect = res.rows.item(0)['CondensateGasSelect'];
                    this.CondensateGasNewDetails = res.rows.item(0)['CondensateGasNewDetails'];
                    this.StandingInletPressue = res.rows.item(0)['StandingInletPressue'];
                    this.WorkingInletPressue = res.rows.item(0)['WorkingInletPressue'];
                    this.trvs = res.rows.item(0)['trvs'];
                    if (this.GasRunSelect == "New") {
                        this.GasRunNewFlag = false;
                    }
                    else {
                        this.GasRunNewFlag = true;
                    }
                    if (this.CondensateGasSelect == "New") {
                        this.CondensateGasNewFlag = false;
                    }
                    else {
                        this.CondensateGasNewFlag = true;
                    }
                })
                    .catch((e) => {
                    console.log('ERROR getting data from sitesurvey table' + JSON.stringify(e));
                });
            }
        });
    }
    NewBoilerLocationClick() {
        this.boilerFlag = false;
        if (this.siteSurveyboiler == 'other')
            this.isSiteSurveyboilerOther = true;
    }
    siteSurveyboilerdescriptionClick() {
        this.boilerDescFlag = false;
    }
    locationboilerClick() {
        this.locationboilerFlag = false;
    }
    NewBoilerLocationExistingClick() {
        this.NewBoilerLocationFlag = false;
        if (this.NewBoilerLocationSelect == "New") {
            this.NewBoilerLocationDescFlag = true;
        }
        else {
            this.NewBoilerLocationDescFlag = false;
        }
    }
    flueClick() {
        this.flueflag = false;
    }
    flueExtClick() {
        this.flueExtFlag = false;
    }
    standOffKitClick() {
        this.standOffKitFlag = false;
    }
    degree45elbowClick() {
        this.FourtyfivedegreeelbowFlag = false;
    }
    degree90elbowClick() {
        this.NinetydegreeelbowFlag = false;
    }
    standingInletPressueClick() {
        this.StandingInletPressueFlag = false;
    }
    ssReasonClick() {
        this.SSReasonFlag = false;
    }
    ssPTypeClick() {
        this.SSPTypeFlag = false;
    }
    GasRunClick() {
        this.gasRunFlag = false;
        if (this.GasRunSelect == "New") {
            this.GasRunNewFlag = false;
        }
        else {
            this.GasRunNewFlag = true;
        }
    }
    gasRunDescClick() {
        this.gasRunDescFlag = false;
    }
    CondensateGasClick() {
        this.CondensateFlag = false;
        this.CondensateGasNewFlag = false;
        if (this.CondensateGasSelect == "New") {
            this.CondensateGasNewFlag = false;
        }
        else {
            this.CondensateGasNewFlag = true;
        }
    }
    condensateDescClick() {
        this.CondensateDescFlag = false;
    }
    wipClick() {
        this.wipFlag = false;
    }
    NewBoilerLocationDescClick() {
        this.NewBoilerLocationDescFFlag = false;
    }
    ValidateBInsForm() {
        if (this.FlueSelect == 'Vertical') {
            this.storage.set('fluinloft', "false");
        }
        else {
            this.storage.set('fluinloft', "true");
        }
        if (this.siteSurveyboiler == '' || this.siteSurveyboiler == undefined) {
            this.auth.showToast('Please select a Boiler', 'danger');
            this.boilerFlag = true;
            this.auth.scrollToId("Boiler");
        }
        else {
            if (this.siteSurveyboilerdescription == '' || this.siteSurveyboilerdescription == undefined) {
                this.auth.showToast('Please select Describe Boiler', 'danger');
                this.boilerDescFlag = true;
                this.auth.scrollToId("DBoiler");
            }
            else {
                if (this.locationboiler == '' || this.locationboiler == undefined) {
                    this.auth.showToast('Please choose a location', 'danger');
                    this.locationboilerFlag = true;
                    this.auth.scrollToId("LBoiler");
                }
                else {
                    if (this.NewBoilerLocationSelect == '' || this.NewBoilerLocationSelect == undefined) {
                        this.auth.showToast('Please choose a boiler location', 'danger');
                        this.NewBoilerLocationFlag = true;
                        this.auth.scrollToId("NBoilerL");
                    }
                    else {
                        if ((this.NewBoilerLocationDesc == '' || this.NewBoilerLocationDesc == undefined) && this.NewBoilerLocationSelect == "New") {
                            this.auth.showToast('Please Enter boiler location Desc', 'danger');
                            this.NewBoilerLocationDescFFlag = true;
                            this.auth.scrollToId("NewBoilerLocationDesc");
                        }
                        else {
                            if (this.FlueSelect == '' || this.FlueSelect == undefined) {
                                this.auth.showToast('Please choose a Flue', 'danger');
                                this.flueflag = true;
                                this.auth.scrollToId("Flue");
                            }
                            else {
                                if (this.FlueextensionsSelect == '' || this.FlueextensionsSelect == undefined) {
                                    this.auth.showToast('Please choose a Flue Extension', 'danger');
                                    this.flueExtFlag = true;
                                    this.auth.scrollToId("FlueExt");
                                }
                                else {
                                    if (this.StandOffKitSelect == '' || this.StandOffKitSelect == undefined) {
                                        this.auth.showToast('Please choose a Standoffkit', 'danger');
                                        this.standOffKitFlag = true;
                                        this.auth.scrollToId("StandOffKit");
                                    }
                                    else {
                                        if (this.FourtyfivedegreeelbowSelect == '' || this.FourtyfivedegreeelbowSelect == undefined) {
                                            this.auth.showToast('Please choose a 45 degree Bow', 'danger');
                                            this.FourtyfivedegreeelbowFlag = true;
                                            this.auth.scrollToId("degree45elbow");
                                        }
                                        else {
                                            if (this.NinetydegreeelbowSelect == '' || this.NinetydegreeelbowSelect == undefined) {
                                                this.auth.showToast('Please choose a 90 degree Bow', 'danger');
                                                this.NinetydegreeelbowFlag = true;
                                                this.auth.scrollToId("degree90elbow");
                                            }
                                            else {
                                                if (this.StandingInletPressue == '' || this.StandingInletPressue == undefined) {
                                                    this.auth.showToast('Please choose a Working Pressure @ meter', 'danger');
                                                    this.StandingInletPressueFlag = true;
                                                    this.auth.scrollToId("StandingInletPressue");
                                                }
                                                else {
                                                    if (this.SiteSurveyReason == '' || this.SiteSurveyReason == undefined) {
                                                        this.auth.showToast('Please choose a Site Survey Reason', 'danger');
                                                        this.SSReasonFlag = true;
                                                        this.auth.scrollToId("SSReason");
                                                    }
                                                    else {
                                                        if (this.SiteSurveyProductType == '' || this.SiteSurveyProductType == undefined) {
                                                            this.auth.showToast('Please choose a Site Survey Product Type', 'danger');
                                                            this.SSPTypeFlag = true;
                                                            this.auth.scrollToId("SSPType");
                                                        }
                                                        else {
                                                            if (this.GasRunSelect == '' || this.GasRunSelect == undefined) {
                                                                this.auth.showToast('Please  choose a Gas Run ', 'danger');
                                                                this.gasRunFlag = true;
                                                                this.auth.scrollToId("gasRun");
                                                            }
                                                            else {
                                                                if ((this.GasRunNewDetails == '' || this.GasRunNewDetails == undefined) && this.GasRunSelect == "New") {
                                                                    this.auth.showToast('Please enter  Gas run', 'danger');
                                                                    this.gasRunDescFlag = true;
                                                                    this.auth.scrollToId("gasRunDesc");
                                                                }
                                                                else {
                                                                    if (this.CondensateGasSelect == '' || this.CondensateGasSelect == undefined) {
                                                                        this.auth.showToast('Please  choose Condensate Gas Run', 'danger');
                                                                        this.CondensateFlag = true;
                                                                        this.auth.scrollToId("Condensate");
                                                                    }
                                                                    else {
                                                                        if ((this.CondensateGasNewDetails == '' || this.CondensateGasNewDetails == undefined) && this.CondensateGasSelect == "New") {
                                                                            this.auth.showToast('Please enter a Condense Gas Run', 'danger');
                                                                            this.CondensateDescFlag = true;
                                                                            this.auth.scrollToId("CondensateDesc");
                                                                        }
                                                                        else {
                                                                            if (this.WorkingInletPressue == '' || this.WorkingInletPressue == undefined) {
                                                                                this.auth.showToast('Please choose a WorkingInletPressue @ Boiler', 'danger');
                                                                                this.wipFlag = true;
                                                                                this.auth.scrollToId("wip");
                                                                            }
                                                                            else {
                                                                                this.auth.database.executeSql('update sitesurvey set HaveData=?, siteSurveyboiler=?, siteSurveyboilerdescription=?, locationboiler=?,  NewBoilerLocationSelect=?, NewBoilerLocationDesc=?, FlueSelect=?, FlueextensionsSelect=?,StandOffKitSelect=?, FourtyfivedegreeelbowSelect=?, NinetydegreeelbowSelect=?, StandingInletPressue=?, SiteSurveyReason=?, SiteSurveyProductType=?,  GasRunSelect=?,  GasRunNewDetails=?,  CondensateGasSelect=?,  CondensateGasNewDetails=?,   WorkingInletPressue=?, trvs=? where JOBGUID=?', ['yes', this.siteSurveyboiler, this.siteSurveyboilerdescription, this.locationboiler, this.NewBoilerLocationSelect, this.NewBoilerLocationDesc, this.FlueSelect, this.FlueextensionsSelect, this.StandOffKitSelect, this.FourtyfivedegreeelbowSelect, this.NinetydegreeelbowSelect, this.StandingInletPressue, this.SiteSurveyReason, this.SiteSurveyProductType, this.GasRunSelect, this.GasRunNewDetails, this.CondensateGasSelect, this.CondensateGasNewDetails, this.WorkingInletPressue, this.trvs, this.data['JOBGUID']]).then((res) => {
                                                                                    console.log('update site survey success ');
                                                                                    const navigationExtras = {
                                                                                        state: {
                                                                                            data: this.data,
                                                                                        }
                                                                                    };
                                                                                    this.router.navigate(['sitesurveypics'], navigationExtras);
                                                                                }).catch((e) => {
                                                                                    console.log("error update site survey");
                                                                                });
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
SitesurveyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SitesurveyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sitesurvey',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurvey_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sitesurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SitesurveyPage);



/***/ }),

/***/ 90107:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sitesurvey/sitesurvey.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Site Survey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item id=\"Boiler\">\n      <ion-label [ngStyle]=\"{'color': boilerFlag ? '#ff0000' : null }\">New Boiler</ion-label>\n      <!-- <ion-label *ngIf=\"!boilers.length\">Boilers name not available, please update make and model from settings.</ion-label> -->\n      <ion-select  [(ngModel)]=\"siteSurveyboiler\" (ionChange)=\"NewBoilerLocationClick()\">\n        <ion-select-option *ngFor=\"let boiler of boilers\"  value=\"{{boiler}}\">{{boiler}}</ion-select-option>\n        <ion-select-option  value=\"other\">other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"Boiler\" *ngIf=\"isSiteSurveyboilerOther\">\n      <ion-label>Boiler name</ion-label>\n      <ion-input [(ngModel)]=\"siteSurveyboiler\"></ion-input>\n    </ion-item>\n\n    \n  <!-- <ion-item id=\"Boiler\" (click)=\"openMakeModal()\">\n    <ion-label [ngStyle]=\"{'color': boilerFlag ? '#ff0000' : null }\">New Boiler Make</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\">{{MakeSelect}}</ion-text>\n  </ion-item>\n\n\n  <ion-item (click)=\"openModalModal()\">\n    <ion-label [ngStyle]=\"{'color': boilerFlag ? '#ff0000' : null }\">New Boiler Model</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\"> {{ModelSelect}}</ion-text>\n  </ion-item> -->\n\n\n    <ion-item id=\"DBoiler\">\n      <ion-label [ngStyle]=\"{'color': boilerDescFlag ? '#ff0000' : null }\">Describe the boiler required </ion-label>\n      <ion-select  [(ngModel)]=\"siteSurveyboilerdescription\" (ionChange)=\"siteSurveyboilerdescriptionClick()\">\n        <ion-select-option *ngFor=\"let description of descriptions\"  value=\"{{description}}\">{{description}}</ion-select-option>     \n      </ion-select>\n    </ion-item>\n\n\n    <ion-item id=\"LBoiler\">\n      <ion-label [ngStyle]=\"{'color': locationboilerFlag ? '#ff0000' : null }\">Location of Boiler</ion-label>\n      <ion-select [(ngModel)]=\"locationboiler\" (ionChange)=\"locationboilerClick()\">\n        <ion-select-option *ngFor=\"let location of locations\" value=\"{{location}}\">{{location}}</ion-select-option>\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item id=\"NBoilerL\">\n      <ion-label [ngStyle]=\"{'color': NewBoilerLocationFlag ? '#ff0000' : null }\">New Boiler Location</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"NewBoilerLocationSelect\" (ionChange)=\"NewBoilerLocationExistingClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    \n    <ion-item *ngIf=\"NewBoilerLocationDescFlag\" id=\"NewBoilerLocationDesc\">\n      <ion-textarea (ionChange)=\"NewBoilerLocationDescClick()\" [ngStyle]=\"{'color': NewBoilerLocationDescFFlag ? '#ff0000' : null }\" rows=\"6\" cols=\"30\" [(ngModel)]=\"NewBoilerLocationDesc\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n\n    \n    <ion-item id=\"Flue\">\n      <ion-label [ngStyle]=\"{'color': flueflag ? '#ff0000' : null }\">Flue</ion-label>\n      <ion-select [(ngModel)]=\"FlueSelect\" (ionChange)=\"flueClick()\">\n        <ion-select-option value=\"Horizontal\">Horizontal</ion-select-option>\n        <ion-select-option value=\"Vertical Pitched Roof\">Vertical Pitched Roof</ion-select-option>\n        <ion-select-option value=\"Vertical Flat Roof\">Vertical Flat Roof</ion-select-option>\n        <ion-select-option value=\"Vertical\">Vertical</ion-select-option>\n        <ion-select-option value=\"Rear Entry\">Rear Entry</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"FlueExt\">\n      <ion-label [ngStyle]=\"{'color': flueExtFlag ? '#ff0000' : null }\">Flue extensions required</ion-label>\n      <ion-select [(ngModel)]=\"FlueextensionsSelect\"  (ionChange)=\"flueExtClick()\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n\n    <ion-item id=\"StandOffKit\">\n            <ion-label [ngStyle]=\"{'color': standOffKitFlag ? '#ff0000' : null }\">Stand Off Kit Required</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"StandOffKitSelect\"\n      (ionChange)=\"standOffKitClick()\">\n        <ion-select-option value=\"YES\">Yes</ion-select-option>\n        <ion-select-option value=\"NO\">No</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"degree45elbow\">\n      <ion-label [ngStyle]=\"{'color': FourtyfivedegreeelbowFlag ? '#ff0000' : null }\">45 degree elbow required</ion-label>\n      <ion-select\n      (ionChange)=\"degree45elbowClick()\"\n      [(ngModel)]=\"FourtyfivedegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"degree90elbow\">\n      <ion-label [ngStyle]=\"{'color': NinetydegreeelbowFlag ? '#ff0000' : null }\">90 degree elbow required</ion-label>\n      <ion-select\n      (ionChange)=\"degree90elbowClick()\" \n      [(ngModel)]=\"NinetydegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n     \n\n    <ion-item>\n      <ion-label>Does the property Have TRVs ?</ion-label>\n      <ion-select (ionChange)=\"trvs()\" [(ngModel)]=\"trvs\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n        <ion-select-option value=\"11\">11</ion-select-option>\n        <ion-select-option value=\"12\">12</ion-select-option>\n        <ion-select-option value=\"13\">13</ion-select-option>\n        <ion-select-option value=\"14\">14</ion-select-option>\n        <ion-select-option value=\"15\">15</ion-select-option>\n      </ion-select>\n    </ion-item>\n     \n    \n    <ion-item id=\"StandingInletPressue\">\n      <ion-label [ngStyle]=\"{'color': StandingInletPressueFlag ? '#ff0000' : null }\" position=\"floating\">Working Pressure @ meter</ion-label>\n       <ion-input (ionChange)=\"standingInletPressueClick()\"  type=\"number\" maxlength=\"5\" [(ngModel)]=\"StandingInletPressue\"></ion-input>\n    </ion-item>\n\n    <ion-item id=\"SSReason\">\n            <ion-label [ngStyle]=\"{'color': SSReasonFlag ? '#ff0000' : null }\">Site Survey Reason</ion-label>\n      <ion-select (ionChange)=\"ssReasonClick()\"  [(ngModel)]=\"SiteSurveyReason\">\n        <ion-select-option value=\"Repair/BER (Agent to confirm BER)\">Repair/BER (Agent to confirm BER)</ion-select-option>\n        <ion-select-option value=\"Boiler over 10 years old\">Boiler over 10 years old</ion-select-option>\n        <ion-select-option value=\"Engineer Recommendations\">Engineer Recommendations</ion-select-option>\n        <ion-select-option value=\"Office Request\">Office Request</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"SSPType\">\n      <ion-label [ngStyle]=\"{'color': SSPTypeFlag ? '#ff0000' : null }\">Site Survey Product Type</ion-label>\n      <ion-select  (ionChange)=\"ssPTypeClick()\" interface=\"popover\" [(ngModel)]=\"SiteSurveyProductType\">\n        <ion-select-option value=\"Boiler Breakdown\">Boiler Breakdown</ion-select-option>\n        <ion-select-option value=\"Boiler Service\">Boiler Service</ion-select-option>\n        <ion-select-option value=\"Office Request\">Office Request</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"gasRun\">\n      <ion-label [ngStyle]=\"{'color': gasRunFlag ? '#ff0000' : null }\">Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"GasRunSelect\" (ionChange)=\"GasRunClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"GasRunNewFlag\" id=\"gasRunDesc\">\n      <ion-textarea (ionChange)=\"gasRunDescClick()\"  [ngStyle]=\"{'color': gasRunDescFlag ? '#ff0000' : null }\" rows=\"6\" cols=\"30\" [(ngModel)]=\"GasRunNewDetails\" placeholder=\"Describe the Route.......\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item id=\"Condensate\">\n      <ion-label [ngStyle]=\"{'color': CondensateFlag ? '#ff0000' : null }\">Condensate Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"CondensateGasSelect\" (ionChange)=\"CondensateGasClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"CondensateGasNewFlag\" id=\"CondensateDesc\">\n      <ion-textarea (ionChange)=\"condensateDescClick()\"  [ngStyle]=\"{'color': CondensateDescFlag ? '#ff0000' : null }\" rows=\"6\" cols=\"30\" [(ngModel)]=\"CondensateGasNewDetails\" placeholder=\"Describe the Route.......\">\n      </ion-textarea>\n    </ion-item>\n\n\n    <ion-item id=\"wip\">\n      <ion-label [ngStyle]=\"{'color': wipFlag ? '#ff0000' : null }\" position=\"floating\">Working Inlet Pressure @ boiler</ion-label>\n      <ion-input (ionChange)=\"wipClick()\" type=\"number\" maxlength=\"5\" [(ngModel)]=\"WorkingInletPressue\" >  </ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  \n  \n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\"ValidateBInsForm()\"> Save & Next  </ion-button>\n</ion-footer>");

/***/ }),

/***/ 72640:
/*!*************************************************!*\
  !*** ./src/app/sitesurvey/sitesurvey.page.scss ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlc3VydmV5LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_sitesurvey_sitesurvey_module_ts-es2015.js.map