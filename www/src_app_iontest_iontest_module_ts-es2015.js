"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_iontest_iontest_module_ts"],{

/***/ 53698:
/*!***************************************************!*\
  !*** ./src/app/iontest/iontest-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IontestPageRoutingModule": function() { return /* binding */ IontestPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _iontest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iontest.page */ 79007);




const routes = [
    {
        path: '',
        component: _iontest_page__WEBPACK_IMPORTED_MODULE_0__.IontestPage
    }
];
let IontestPageRoutingModule = class IontestPageRoutingModule {
};
IontestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IontestPageRoutingModule);



/***/ }),

/***/ 96570:
/*!*******************************************!*\
  !*** ./src/app/iontest/iontest.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IontestPageModule": function() { return /* binding */ IontestPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _iontest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iontest-routing.module */ 53698);
/* harmony import */ var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/ui-ionic */ 81029);
/* harmony import */ var _iontest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iontest.page */ 79007);








let IontestPageModule = class IontestPageModule {
};
IontestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iontest_routing_module__WEBPACK_IMPORTED_MODULE_0__.IontestPageRoutingModule,
            _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__.DynamicFormsIonicUIModule
        ],
        declarations: [_iontest_page__WEBPACK_IMPORTED_MODULE_1__.IontestPage]
    })
], IontestPageModule);



/***/ }),

/***/ 79007:
/*!*****************************************!*\
  !*** ./src/app/iontest/iontest.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IontestPage": function() { return /* binding */ IontestPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iontest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./iontest.page.html */ 56542);
/* harmony import */ var _iontest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iontest.page.scss */ 91285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 57636);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ 98580);






let IontestPage = class IontestPage {
    constructor(formService) {
        this.formService = formService;
        this.formModel = _model__WEBPACK_IMPORTED_MODULE_2__.MY_FORM_MODEL;
    }
    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
    // onIonEvent($event){
    //   console.log($event);
    // }
    onChange($event) {
        console.log('sa');
    }
};
IontestPage.ctorParameters = () => [
    { type: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__.DynamicFormService }
];
IontestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-iontest',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iontest_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_iontest_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IontestPage);



/***/ }),

/***/ 98580:
/*!**********************************!*\
  !*** ./src/app/iontest/model.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeAnswer": function() { return /* binding */ MakeAnswer; },
/* harmony export */   "ModelAnswer": function() { return /* binding */ ModelAnswer; },
/* harmony export */   "MY_FORM_MODEL": function() { return /* binding */ MY_FORM_MODEL; }
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 57636);

const MakeAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "MakeAnswer",
    label: "Make Answer",
    maxLength: 15,
    placeholder: "Enter Make",
    hidden: true,
    validators: { required: null },
});
const ModelAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "ModelAnswer",
    label: "Model Answer ",
    maxLength: 15,
    placeholder: "Enter Model",
    hidden: true,
    validators: { required: null },
});
const MY_FORM_MODEL = [MakeAnswer, ModelAnswer];


/***/ }),

/***/ 56542:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/iontest/iontest.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n   \n\n  <p>sabr</p>\n\n  <form class=\"form-vertical\" [formGroup]=\"formGroup\" >\n\n      <dynamic-material-form [group]=\"formGroup\"\n                             [layout]=\"formLayout\"\n                             [model]=\"formModel\"     \n                             (change)=\"onChange($event)\"\n                              >\n      </dynamic-material-form>\n\n  </form>\n\n \n  <ion-button  [hidden]=\"SaveFlag\"> save </ion-button>\n\n</ion-content>");

/***/ }),

/***/ 91285:
/*!*******************************************!*\
  !*** ./src/app/iontest/iontest.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpb250ZXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_iontest_iontest_module_ts-es2015.js.map