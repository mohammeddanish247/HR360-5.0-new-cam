"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_outcomes_outcomes_module_ts"],{

/***/ 15454:
/*!*****************************************************!*\
  !*** ./src/app/outcomes/outcomes-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutcomesPageRoutingModule": function() { return /* binding */ OutcomesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _outcomes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outcomes.page */ 30650);




const routes = [
    {
        path: '',
        component: _outcomes_page__WEBPACK_IMPORTED_MODULE_0__.OutcomesPage
    }
];
let OutcomesPageRoutingModule = class OutcomesPageRoutingModule {
};
OutcomesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OutcomesPageRoutingModule);



/***/ }),

/***/ 20231:
/*!*********************************************!*\
  !*** ./src/app/outcomes/outcomes.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutcomesPageModule": function() { return /* binding */ OutcomesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _outcomes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outcomes-routing.module */ 15454);
/* harmony import */ var _outcomes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outcomes.page */ 30650);







let OutcomesPageModule = class OutcomesPageModule {
};
OutcomesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _outcomes_routing_module__WEBPACK_IMPORTED_MODULE_0__.OutcomesPageRoutingModule
        ],
        declarations: [_outcomes_page__WEBPACK_IMPORTED_MODULE_1__.OutcomesPage]
    })
], OutcomesPageModule);



/***/ }),

/***/ 30650:
/*!*******************************************!*\
  !*** ./src/app/outcomes/outcomes.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutcomesPage": function() { return /* binding */ OutcomesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_outcomes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./outcomes.page.html */ 69151);
/* harmony import */ var _outcomes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outcomes.page.scss */ 71148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);






let OutcomesPage = class OutcomesPage {
    constructor(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.Outcomegasinstallation = '';
        this.Outcomegassupply = '';
        this.emergencycontrolvalveaccess = '';
        this.gastightnesstest = '';
        this.protectiveequipotentialbonding = '';
        this.COalarmFitted = '';
        this.COalarmtested = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
            }
        });
        this.auth.database.executeSql('select * from certificate where JOBGUID=?', [this.data['JOBGUID']])
            .then(res => {
            console.log("@@" + res.rows.item(0)['OGIns'] + "," + res.rows.item(0)['OGSup'] + "," + res.rows.item(0)['ECon'] + "," + res.rows.item(0)['COTested']);
            this.Outcomegasinstallation = res.rows.item(0)['OGIns'];
            this.Outcomegassupply = res.rows.item(0)['OGSup'];
            this.emergencycontrolvalveaccess = res.rows.item(0)['ECon'];
            this.gastightnesstest = res.rows.item(0)['OGTight'];
            this.protectiveequipotentialbonding = res.rows.item(0)['EquiBond'];
            this.COalarmFitted = res.rows.item(0)['COFitted'];
            this.COalarmtested = res.rows.item(0)['COTested'];
        }).catch(e => {
            console.log("error getting saved certicate outcomes :" + e);
        });
    }
    OutComesDetailsClick() {
        if (this.Outcomegasinstallation == undefined || this.Outcomegasinstallation == '') {
            this.auth.showToast('Please select an answer for Question:1', 'danger');
        }
        else {
            if (this.Outcomegassupply == undefined || this.Outcomegassupply == '') {
                this.auth.showToast('Please select an answer for Question:2', 'danger');
            }
            else {
                if (this.emergencycontrolvalveaccess == undefined || this.emergencycontrolvalveaccess == '') {
                    this.auth.showToast('Please select an answer for Question:3', 'danger');
                }
                else {
                    if (this.gastightnesstest == undefined || this.gastightnesstest == '') {
                        this.auth.showToast('Please select an answer for Question:4', 'danger');
                    }
                    else {
                        if (this.protectiveequipotentialbonding == undefined || this.protectiveequipotentialbonding == '') {
                            this.auth.showToast('Please select an answer for Question:5', 'danger');
                        }
                        else {
                            if (this.COalarmFitted == undefined || this.COalarmFitted == '') {
                                this.auth.showToast('Please select an answer for Question:6', 'danger');
                            }
                            else {
                                if (this.COalarmtested == undefined || this.COalarmtested == '') {
                                    this.auth.showToast('Please select an answer for Question:7', 'danger');
                                }
                                else {
                                    this.auth.database.executeSql('update certificate set OGIns=?, OGSup=?, ECon=?, OGTight=?,EquiBond=?, COFitted=?, COTested=? where JOBGUID=?', [this.Outcomegasinstallation, this.Outcomegassupply, this.emergencycontrolvalveaccess, this.gastightnesstest, this.protectiveequipotentialbonding, this.COalarmFitted, this.COalarmtested, this.data['JOBGUID']])
                                        .then((res) => {
                                        this.data['OGIns'] = this.Outcomegasinstallation;
                                        this.data['OGSup'] = this.Outcomegassupply;
                                        this.data['ECon'] = this.emergencycontrolvalveaccess;
                                        this.data['OGTight'] = this.gastightnesstest;
                                        this.data['EquiBond'] = this.protectiveequipotentialbonding;
                                        this.data['COFitted'] = this.COalarmFitted;
                                        this.data['COTested'] = this.COalarmtested;
                                        const navigationExtras = {
                                            state: {
                                                data: this.data,
                                            }
                                        };
                                        this.router.navigate(['signaturecertificate'], navigationExtras);
                                    }).catch((e) => {
                                        console.log('Error ' + JSON.stringify(e));
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
OutcomesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
OutcomesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-outcomes',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_outcomes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_outcomes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OutcomesPage);



/***/ }),

/***/ 69151:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/outcomes/outcomes.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Outcomes of Test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n    <ion-radio-group allow-empty-selection [(ngModel)]=\"Outcomegasinstallation\" #gas='ngModel' >\n     <ion-item lines=\"none\">\n       <p>1.Outcome of gas installation pipework visual inspection?</p>\n     </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label>Pass</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Pass\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>Fail</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Fail\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>N/A</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"NA\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    </ion-card>\n  \n    <ion-card>\n    <ion-radio-group allow-empty-selection [(ngModel)]=\"Outcomegassupply\" #gaspipe='ngModel' >\n       <ion-item lines=\"none\">\n         <p>2.Outcome of gas supply pipework visual inspection?</p>\n       </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Pass</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Pass\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>Fail</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Fail\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>N/A</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"NA\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-radio-group allow-empty-selection [(ngModel)]=\"emergencycontrolvalveaccess\" #ecv='ngModel' >\n       <ion-item lines=\"none\">\n         <p>3.Is the emergency control valve access satisfactory?</p>\n       </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>N/A</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"NA\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-radio-group allow-empty-selection [(ngModel)]=\"gastightnesstest\" #gastight='ngModel' >\n       <ion-item lines=\"none\">\n         <p>4.Outcome of gas tightness test?</p>\n       </ion-item>\n       <ion-item lines=\"full\">\n        <ion-label>Pass</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Pass\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>Fail</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Fail\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>N/A</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"NA\"></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-radio-group allow-empty-selection [(ngModel)]=\"protectiveequipotentialbonding\" #pebs='ngModel'  >\n       <ion-item lines=\"none\">\n         <p>5.Is the protective equipotential bonding satisfactory?</p>\n       </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>N/A</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"NA\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-radio-group allow-empty-selection [(ngModel)]=\"COalarmFitted\" #coalarmfit='ngModel' >\n       <ion-item lines=\"none\">\n         <p>6.CO alarm Fitted</p>\n       </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-radio-group allow-empty-selection [(ngModel)]=\"COalarmtested\" #coalarmtest='ngModel' >\n       <ion-item lines=\"none\">\n         <p>7.CO alarm tested</p>\n       </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Yes</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-card>\n\n    <!-- <div style=\"margin-top: 3%;\">\n      <ion-button expand=\"full\"  color=\"secondary\" (click)=\"OutComesDetailsClick()\">Save & Next</ion-button>\n    </div> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\"  color=\"secondary\" (click)=\"OutComesDetailsClick()\">Save & Next</ion-button>\n</ion-footer>");

/***/ }),

/***/ 71148:
/*!*********************************************!*\
  !*** ./src/app/outcomes/outcomes.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRjb21lcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_outcomes_outcomes_module_ts-es2015.js.map