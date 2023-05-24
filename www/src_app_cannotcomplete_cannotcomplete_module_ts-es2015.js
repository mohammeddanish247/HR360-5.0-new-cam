"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_cannotcomplete_cannotcomplete_module_ts"],{

/***/ 18088:
/*!*****************************************************************!*\
  !*** ./src/app/cannotcomplete/cannotcomplete-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CannotcompletePageRoutingModule": function() { return /* binding */ CannotcompletePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _cannotcomplete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cannotcomplete.page */ 64979);




const routes = [
    {
        path: '',
        component: _cannotcomplete_page__WEBPACK_IMPORTED_MODULE_0__.CannotcompletePage
    }
];
let CannotcompletePageRoutingModule = class CannotcompletePageRoutingModule {
};
CannotcompletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CannotcompletePageRoutingModule);



/***/ }),

/***/ 78162:
/*!*********************************************************!*\
  !*** ./src/app/cannotcomplete/cannotcomplete.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CannotcompletePageModule": function() { return /* binding */ CannotcompletePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _cannotcomplete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cannotcomplete-routing.module */ 18088);
/* harmony import */ var _cannotcomplete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cannotcomplete.page */ 64979);







let CannotcompletePageModule = class CannotcompletePageModule {
};
CannotcompletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cannotcomplete_routing_module__WEBPACK_IMPORTED_MODULE_0__.CannotcompletePageRoutingModule
        ],
        declarations: [_cannotcomplete_page__WEBPACK_IMPORTED_MODULE_1__.CannotcompletePage]
    })
], CannotcompletePageModule);



/***/ }),

/***/ 64979:
/*!*******************************************************!*\
  !*** ./src/app/cannotcomplete/cannotcomplete.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CannotcompletePage": function() { return /* binding */ CannotcompletePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cannotcomplete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cannotcomplete.page.html */ 30690);
/* harmony import */ var _cannotcomplete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cannotcomplete.page.scss */ 79487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);






let CannotcompletePage = class CannotcompletePage {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.Reason = "";
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.auth.getLocation();
                this.auth.database.executeSql('select * from completeservice where ParentJobGuid=?', [this.data['JOBGUID']]).then(res => {
                    console.log(JSON.stringify(res));
                    this.Reason = res.rows.item(0)['CantCompleteReason'];
                });
            }
        });
    }
    CannotcompleteClick() {
        if (this.Reason == '' || this.Reason == null) {
            this.auth.showToast('Reason cannot be empty', 'danger');
        }
        else {
            if (this.data['BackgroundColour'] == '#20B2AA') {
                this.auth.database.executeSql('update completeservice set HaveData=?, CantCompleteReason=?, IsServiceCompleted=? , BackgroundColour=? where ParentJobGuid=?', ["service not completed", this.Reason, 'No', this.data['BackgroundColour'], this.data['JOBGUID']])
                    .then((res) => {
                    this.auth.showToast('Service Not Completed', 'warning');
                    this.router.navigate(['details']);
                }).catch((e) => {
                    this.auth.showToast('Cannot update db ' + JSON.stringify(e), 'danger');
                });
            }
        }
    }
};
CannotcompletePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
CannotcompletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cannotcomplete',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cannotcomplete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cannotcomplete_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CannotcompletePage);



/***/ }),

/***/ 30690:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/cannotcomplete/cannotcomplete.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Can not complete certificate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Reason</ion-label>\n    <ion-textarea rows=\"10\" cols=\"40\" [(ngModel)]=\"Reason\" placeholder=\"Write details here...\" ></ion-textarea>\n  </ion-item>\n\n \n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"CannotcompleteClick()\">Submit</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 79487:
/*!*********************************************************!*\
  !*** ./src/app/cannotcomplete/cannotcomplete.page.scss ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5ub3Rjb21wbGV0ZS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_cannotcomplete_cannotcomplete_module_ts-es2015.js.map