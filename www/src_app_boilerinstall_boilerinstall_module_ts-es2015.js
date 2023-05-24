"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_boilerinstall_boilerinstall_module_ts"],{

/***/ 81554:
/*!***************************************************************!*\
  !*** ./src/app/boilerinstall/boilerinstall-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallPageRoutingModule": function() { return /* binding */ BoilerinstallPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _boilerinstall_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerinstall.page */ 10480);




const routes = [
    {
        path: '',
        component: _boilerinstall_page__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallPage
    }
];
let BoilerinstallPageRoutingModule = class BoilerinstallPageRoutingModule {
};
BoilerinstallPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BoilerinstallPageRoutingModule);



/***/ }),

/***/ 52310:
/*!*******************************************************!*\
  !*** ./src/app/boilerinstall/boilerinstall.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallPageModule": function() { return /* binding */ BoilerinstallPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _boilerinstall_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerinstall-routing.module */ 81554);
/* harmony import */ var _boilerinstall_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerinstall.page */ 10480);







let BoilerinstallPageModule = class BoilerinstallPageModule {
};
BoilerinstallPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boilerinstall_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallPageRoutingModule
        ],
        declarations: [_boilerinstall_page__WEBPACK_IMPORTED_MODULE_1__.BoilerinstallPage]
    })
], BoilerinstallPageModule);



/***/ }),

/***/ 10480:
/*!*****************************************************!*\
  !*** ./src/app/boilerinstall/boilerinstall.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallPage": function() { return /* binding */ BoilerinstallPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstall_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./boilerinstall.page.html */ 30082);
/* harmony import */ var _boilerinstall_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerinstall.page.scss */ 88141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 12314);







let BoilerinstallPage = class BoilerinstallPage {
    constructor(router, route, auth, storage) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.storage = storage;
        ///// boilerinstallation
        this.NewBoilerLocationSelect = '';
        this.BoilerNewDetails = '';
        this.FlueSelect = '';
        this.FlueextensionsSelect = '';
        this.StandOffKitSelect = '';
        this.FourtyfivedegreeelbowSelect = '';
        this.NinetydegreeelbowSelect = '';
        this.GasRunSelect = '';
        this.GasRunNewDetails = '';
        this.CondensateGasSelect = '';
        this.CondensateGasNewDetails = '';
    }
    ngOnInit() {
        this.BoilerNew = true;
        this.GasRunNew = true;
        this.CondensateGasNew = true;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.auth.getLocation();
                this.auth.database.executeSql('select * from boilerinstallation where JOBGUID=?', [this.data['JOBGUID']])
                    .then((res) => {
                    console.log('RESPONSE' + JSON.stringify(res.rows.item(0)['BLocation']) + " All Data" + JSON.stringify(res));
                    this.NewBoilerLocationSelect = res.rows.item(0)['BLocation'];
                    // this.NewBoilerLocationClick();
                    this.BoilerNewDetails = res.rows.item(0)['BLocation_Desc'];
                    this.FlueSelect = res.rows.item(0)['BFlue'];
                    this.FlueextensionsSelect = res.rows.item(0)['FlueExtension'];
                    this.StandOffKitSelect = res.rows.item(0)['StandOffKit'];
                    this.FourtyfivedegreeelbowSelect = res.rows.item(0)['D45Elbow'];
                    this.NinetydegreeelbowSelect = res.rows.item(0)['D90Elbow'];
                    this.GasRunSelect = res.rows.item(0)['GasRun'];
                    this.GasRunNewDetails = res.rows.item(0)['GasRun_Desc'];
                    this.CondensateGasSelect = res.rows.item(0)['CGasRun'];
                    this.CondensateGasNewDetails = res.rows.item(0)['CGasRun_Desc'];
                })
                    .catch((e) => {
                    console.log('ERROR getting data from boilerinstallation table' + JSON.stringify(e));
                });
            }
        });
    }
    NewBoilerLocationClick() {
        if (this.NewBoilerLocationSelect == 'New') {
            this.BoilerNew = false;
        }
        else {
            this.BoilerNew = true;
        }
    }
    GasRunClick() {
        if (this.GasRunSelect == 'New') {
            this.GasRunNew = false;
        }
        else {
            this.GasRunNew = true;
        }
    }
    CondensateGasClick() {
        if (this.CondensateGasSelect == 'New') {
            this.CondensateGasNew = false;
        }
        else {
            this.CondensateGasNew = true;
        }
    }
    ValidateBInsForm() {
        if (this.FlueSelect == 'Vertical') {
            this.storage.set('fluinloft_B', "false");
        }
        else {
            this.storage.set('fluinloft_B', "true");
        }
        if (this.NewBoilerLocationSelect == '' || this.NewBoilerLocationSelect == null) {
            this.auth.showToast('New Boiler Location can not be empty.', 'danger');
        }
        else {
            if (this.FlueSelect == '' || this.FlueSelect == null) {
                this.auth.showToast('FlueSelect Location can not be empty.', 'danger');
            }
            else {
                if (this.FlueextensionsSelect == '' || this.FlueextensionsSelect == null) {
                    this.auth.showToast('FlueextensionsSelect Location can not be empty.', 'danger');
                }
                else {
                    if (this.StandOffKitSelect == '' || this.StandOffKitSelect == null) {
                        this.auth.showToast('StandOffKitSelect Location can not be empty.', 'danger');
                    }
                    else {
                        if (this.FourtyfivedegreeelbowSelect == '' || this.FourtyfivedegreeelbowSelect == null) {
                            this.auth.showToast('Fourtyfivedegreeelbow  can not be empty.', 'danger');
                        }
                        else {
                            if (this.NinetydegreeelbowSelect == '' || this.NinetydegreeelbowSelect == null) {
                                this.auth.showToast('NinetydegreeelbowSelect  can not be empty.', 'danger');
                            }
                            else {
                                if (this.GasRunSelect == '' || this.GasRunSelect == null) {
                                    this.auth.showToast('GasRunSelect  can not be empty.', 'danger');
                                }
                                else {
                                    if (this.CondensateGasSelect == '' || this.CondensateGasSelect == null) {
                                        this.auth.showToast('CondensateGasSelect  can not be empty.', 'danger');
                                    }
                                    else {
                                        this.auth.database.executeSql('update boilerinstallation set BLocation=?, BLocation_Desc=?,BFlue=?,FlueExtension=?,StandOffKit=?,D45Elbow=?,D90Elbow=?,GasRun=?,GasRun_Desc=?,CGasRun=?,CGasRun_Desc=?,ActionDt=?,Latitude=?,Longitude=? where JOBGUID=?', [this.NewBoilerLocationSelect, this.BoilerNewDetails, this.FlueSelect, this.FlueextensionsSelect, this.StandOffKitSelect, this.FourtyfivedegreeelbowSelect, this.NinetydegreeelbowSelect, this.GasRunSelect, this.GasRunNewDetails, this.CondensateGasSelect, this.CondensateGasNewDetails, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['JOBGUID']])
                                            .then((res) => {
                                            this.auth.database.executeSql("update  boilerinstallation set  HaveData=? where JOBGUID=? ", ['yes', this.data['JOBGUID']]).then((res) => {
                                                const navigationExtras = {
                                                    state: {
                                                        data: this.data,
                                                    }
                                                };
                                                this.router.navigate(['boilerinstallnext'], navigationExtras);
                                            }).catch((e) => {
                                                console.log('cathc status boiler install ' + JSON.stringify(e));
                                            });
                                        })
                                            .catch((e) => {
                                            console.log('ERROR update boilerinstall table');
                                            this.auth.dismissLoading();
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
};
BoilerinstallPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage }
];
BoilerinstallPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-boilerinstall',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstall_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_boilerinstall_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoilerinstallPage);



/***/ }),

/***/ 30082:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/boilerinstall/boilerinstall.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Boiler Installation Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>New Boiler Location</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"NewBoilerLocationSelect\" (ionChange)=\"NewBoilerLocationClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    \n    <ion-item [hidden]=\"BoilerNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"BoilerNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Flue</ion-label>\n      <ion-select [(ngModel)]=\"FlueSelect\">\n        <ion-select-option value=\"Horizontal\">Horizontal</ion-select-option>\n        <ion-select-option value=\"Vertical Pitched Roof\">Vertical Pitched Roof</ion-select-option>\n        <ion-select-option value=\"Vertical Flat Roof\">Vertical Flat Roof</ion-select-option>\n        <ion-select-option value=\"Vertical\">Vertical</ion-select-option>\n        <ion-select-option value=\"Rear Entry\">Rear Entry</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Flue extensions required</ion-label>\n      <ion-select [(ngModel)]=\"FlueextensionsSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stand Off Kit Required</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"StandOffKitSelect\">\n        <ion-select-option value=\"YES\">Yes</ion-select-option>\n        <ion-select-option value=\"NO\">No</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>45 degree elbow required</ion-label>\n      <ion-select [(ngModel)]=\"FourtyfivedegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>90 degree elbow required</ion-label>\n      <ion-select [(ngModel)]=\"NinetydegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"GasRunSelect\" (ionChange)=\"GasRunClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"GasRunNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"GasRunNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Condensate Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"CondensateGasSelect\" (ionChange)=\"CondensateGasClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"CondensateGasNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"CondensateGasNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\"ValidateBInsForm()\"> Save & Next  </ion-button>\n</ion-footer>");

/***/ }),

/***/ 88141:
/*!*******************************************************!*\
  !*** ./src/app/boilerinstall/boilerinstall.page.scss ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2lsZXJpbnN0YWxsLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_boilerinstall_boilerinstall_module_ts-es2015.js.map