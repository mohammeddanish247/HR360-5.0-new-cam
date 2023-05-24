"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_engineersignature_engineersignature_module_ts"],{

/***/ 85888:
/*!***********************************************************************!*\
  !*** ./src/app/engineersignature/engineersignature-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineersignaturePageRoutingModule": function() { return /* binding */ EngineersignaturePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _engineersignature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineersignature.page */ 75530);




const routes = [
    {
        path: '',
        component: _engineersignature_page__WEBPACK_IMPORTED_MODULE_0__.EngineersignaturePage
    }
];
let EngineersignaturePageRoutingModule = class EngineersignaturePageRoutingModule {
};
EngineersignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EngineersignaturePageRoutingModule);



/***/ }),

/***/ 53044:
/*!***************************************************************!*\
  !*** ./src/app/engineersignature/engineersignature.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineersignaturePageModule": function() { return /* binding */ EngineersignaturePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _engineersignature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineersignature-routing.module */ 85888);
/* harmony import */ var _engineersignature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engineersignature.page */ 75530);







let EngineersignaturePageModule = class EngineersignaturePageModule {
};
EngineersignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _engineersignature_routing_module__WEBPACK_IMPORTED_MODULE_0__.EngineersignaturePageRoutingModule,
        ],
        declarations: [_engineersignature_page__WEBPACK_IMPORTED_MODULE_1__.EngineersignaturePage]
    })
], EngineersignaturePageModule);



/***/ }),

/***/ 75530:
/*!*************************************************************!*\
  !*** ./src/app/engineersignature/engineersignature.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineersignaturePage": function() { return /* binding */ EngineersignaturePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_engineersignature_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./engineersignature.page.html */ 58100);
/* harmony import */ var _engineersignature_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engineersignature.page.scss */ 41450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ 35734);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-hashtable */ 31405);









let EngineersignaturePage = class EngineersignaturePage {
    constructor(storage, auth, elementRef) {
        this.storage = storage;
        this.auth = auth;
        this.elementRef = elementRef;
        this.set = new Set();
        this.prg = new Set();
        this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_4__.HashTable();
    }
    ngOnInit() {
        const canvas = this.elementRef.nativeElement.querySelector('canvas');
        this.EngsignaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_2__.default(canvas);
        this.auth.database.executeSql('select Sign from EngInfo', []).then(res => {
            this.EngsignaturePad.fromDataURL(res.rows.item(0)['Sign'], {
                width: canvas.width,
                height: canvas.height
            });
        });
    }
    isCanvasBlank() {
        if (this.EngsignaturePad) {
            return this.EngsignaturePad.isEmpty() ? true : false;
        }
    }
    clear() {
        this.EngsignaturePad.clear();
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sigImage = this.EngsignaturePad.toDataURL();
            let a = yield this.auth.checkNetwork();
            if (a.connected) {
                this.auth.presentLoading('Please wait while we Uploading your Signature');
                this.storage.get('enggid').then((daa) => {
                    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams().set('SigImage', this.sigImage.split(',')[1]).set('EngId', daa);
                    this.auth.httpSend('Service_EngSignatureUpload', httpParams, 'post').subscribe((res) => {
                        console.log('Signature Updated');
                        this.auth.dismissLoading();
                        this.auth.showToast('Success! Engineer Signature has been updated', 'success');
                    }, (error) => {
                        console.log('errror');
                        this.auth.dismissLoading();
                    });
                }).catch((e) => { this.auth.dismissLoading(); });
                ;
            }
            else {
                //this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
            }
            this.auth.updateEngInfo("Sign", this.sigImage);
        });
    }
};
EngineersignaturePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
EngineersignaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-engineersignature',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_engineersignature_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_engineersignature_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EngineersignaturePage);



/***/ }),

/***/ 58100:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/engineersignature/engineersignature.page.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Engineer Signature</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"canvasID\">\n    <canvas id=\"Engsigcanvas\" width=\"300\" height=\"182\"></canvas>\n  </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"medium\" expand=\"full\" [disabled]=\"isCanvasBlank()\" (click)=\"save()\"> Save</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"medium\" expand=\"full\" (click)=\"clear()\"> Clear</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n </ion-content>\n");

/***/ }),

/***/ 41450:
/*!***************************************************************!*\
  !*** ./src/app/engineersignature/engineersignature.page.scss ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = "#Engsigcanvas {\n  border: 3px solid #141313;\n  display: inline-block;\n  background-color: #fffff7;\n}\n\n#canvasID {\n  width: 100%;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZWVyc2lnbmF0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImVuZ2luZWVyc2lnbmF0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNFbmdzaWdjYW52YXMge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMCwgMTksIDE5KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDcpO1xuICAgIFxufVxuXG4jY2FudmFzSUR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_engineersignature_engineersignature_module_ts-es2015.js.map