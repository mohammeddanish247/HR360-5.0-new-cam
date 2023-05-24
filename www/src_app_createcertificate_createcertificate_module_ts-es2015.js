"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_createcertificate_createcertificate_module_ts"],{

/***/ 41618:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": function() { return /* binding */ interval; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 25160);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 32606);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 82867);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 6927:
/*!***********************************************************************!*\
  !*** ./src/app/createcertificate/createcertificate-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatecertificatePageRoutingModule": function() { return /* binding */ CreatecertificatePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _createcertificate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcertificate.page */ 50693);




const routes = [
    {
        path: '',
        component: _createcertificate_page__WEBPACK_IMPORTED_MODULE_0__.CreatecertificatePage
    }
];
let CreatecertificatePageRoutingModule = class CreatecertificatePageRoutingModule {
};
CreatecertificatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatecertificatePageRoutingModule);



/***/ }),

/***/ 88903:
/*!***************************************************************!*\
  !*** ./src/app/createcertificate/createcertificate.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatecertificatePageModule": function() { return /* binding */ CreatecertificatePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _createcertificate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcertificate-routing.module */ 6927);
/* harmony import */ var _createcertificate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createcertificate.page */ 50693);







let CreatecertificatePageModule = class CreatecertificatePageModule {
};
CreatecertificatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _createcertificate_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatecertificatePageRoutingModule
        ],
        declarations: [_createcertificate_page__WEBPACK_IMPORTED_MODULE_1__.CreatecertificatePage]
    })
], CreatecertificatePageModule);



/***/ }),

/***/ 50693:
/*!*************************************************************!*\
  !*** ./src/app/createcertificate/createcertificate.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatecertificatePage": function() { return /* binding */ CreatecertificatePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_createcertificate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./createcertificate.page.html */ 17562);
/* harmony import */ var _createcertificate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createcertificate.page.scss */ 58349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);








let CreatecertificatePage = class CreatecertificatePage {
    constructor(auth, router, route, alertCtrl) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.addedApplainces = [];
        this.hideNewApplianceBtn = false;
        this.NextButton = true;
    }
    ngOnDestroy() {
        this.updateSubscription.unsubscribe();
    }
    ngOnInit() {
        this.getdata();
        this.updateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(2000).subscribe((val) => { this.getapplianceList(); });
    }
    getdata() {
        this.route.params.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('## data createcertificate ' + this.data['JOBGUID']);
                this.getapplianceList();
            }
        });
    }
    getapplianceList() {
        // this.addedApplainces = [];
        this.auth.database.executeSql('select * from newappliance where JOBGUID=?', [this.data['JOBGUID']])
            .then((res) => {
            console.log('### NEW APPp ' + ' ' + ' ' + JSON.stringify(res.rows.length));
            res.rows.length >= 1 ? this.NextButton = false : this.NextButton = true;
            for (let i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
                if (parseInt(JSON.stringify(res.rows.length)) >= 4) {
                    this.hideNewApplianceBtn = true;
                }
                if (res.rows.item(i)['MakeAnswer'] == '' ||
                    res.rows.item(i)['MakeAnswer'] == null ||
                    res.rows.item(i)['MakeAnswer'] == undefined) {
                    this.addedApplainces[i] = {
                        name: res.rows.item(i)['Make'],
                        no: i + 1,
                        sno: res.rows.item(i)['SerialNo']
                    };
                }
                else {
                    this.addedApplainces[i] = {
                        name: res.rows.item(i)['MakeAnswer'],
                        no: i + 1,
                        sno: res.rows.item(i)['SerialNo']
                    };
                }
            }
        }).catch((e) => {
            console.log('### NEW APP ERROR ' + JSON.stringify(e));
        });
    }
    applianceDetailsClick() {
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        this.router.navigate(['appliancedetails'], navigationExtras);
        this.updateSubscription.unsubscribe();
    }
    applianceNewClick() {
        const navigationExtras = {
            state: {
                data: this.data,
            }
        };
        //this.router.navigate(['newappliance'],navigationExtras);
        this.router.navigate(['newappliance'], navigationExtras);
    }
    appliancedataUpdate(name, sno) {
        const navigationExtras = {
            state: {
                data: { 'JOBGUID': this.data['JOBGUID'], 'AppName': name, 'id': sno },
            }
        };
        //this.router.navigate(['editappliance'],navigationExtras);
        this.router.navigate(['nwapp'], navigationExtras);
    }
    deleteAppliance(sno, no) {
        this.auth.database.executeSql('delete from newappliance where SerialNo=?', [sno]).then(res => {
            // this.getapplianceList();
            this.addedApplainces = this.addedApplainces.filter((item => item.no !== no));
            this.addedApplainces.length < 1 ? this.NextButton = true : this.NextButton = false;
        });
    }
};
CreatecertificatePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
CreatecertificatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-createcertificate',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_createcertificate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_createcertificate_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatecertificatePage);



/***/ }),

/***/ 17562:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/createcertificate/createcertificate.page.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"space\"></div>\n  <ion-item lines=\"none\">\n    <ion-button  class=\"roundbutton1\" color=\"secondary\" shape=\"round\" [disabled]=\"hideNewApplianceBtn\" (click)=\"applianceNewClick()\">Add new appliance</ion-button>\n  </ion-item>\n  <p class=\"ion-text-center\" [hidden]=\"!hideNewApplianceBtn\" > Cannot Add More Than 4 Appliance. </p>\n\n  <ion-card class=\"addedApp\" *ngFor='let appliance of addedApplainces; let i = index'>\n    <ion-list>\n      <ion-item lines='none'>\n        <ion-icon name=\"trash\" slot=\"end\" (click)=\"deleteAppliance(appliance.sno, appliance.no)\"></ion-icon>\n        <ion-icon name=\"create\" slot=\"end\" (click)=\"appliancedataUpdate(appliance.name,appliance.sno)\"></ion-icon>\n        <ion-label>\n          <h2>{{appliance.no}} - &nbsp; {{appliance.name | uppercase}}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n\n  </ion-card>\n\n  <div class=\"icon_container\">\n    <ion-icon size=\"large\" name=\"refresh-circle\" (click)=\"reload()\"></ion-icon>\n  </div>\n  \n</ion-content>\n\n\n<!-- <ion-item lines=\"none\">\n  <ion-button color=\"secondary\" shape=\"round\" (click)=\"applianceDetailsClick()\">Appliance Details</ion-button>\n</ion-item> -->\n\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"applianceDetailsClick()\" [disabled]=\"NextButton\">Next</ion-button>\n</ion-footer>");

/***/ }),

/***/ 58349:
/*!***************************************************************!*\
  !*** ./src/app/createcertificate/createcertificate.page.scss ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = ".space {\n  margin-top: 3%;\n}\n\n.roundbutton1 {\n  width: 100%;\n  height: 40px;\n  text-transform: capitalize;\n  font-size: large;\n}\n\np {\n  color: #c4280d;\n  text-indent: 30px;\n  align-self: centre;\n}\n\n.icon_container, .icon_container2 {\n  text-align: center;\n  height: 100px;\n}\n\n.icon_container > ion-icon, .icon_container2 > ion-icon {\n  position: relative;\n  top: calc(50% - 10px);\n  /* 50% - 3/4 of icon height */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZWNlcnRpZmljYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw2QkFBQTtBQUF6QiIsImZpbGUiOiJjcmVhdGVjZXJ0aWZpY2F0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2V7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5yb3VuZGJ1dHRvbjF7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5wIHtcbiAgICBjb2xvcjogcmdiKDE5NiwgNDAsIDEzKTtcbiAgICB0ZXh0LWluZGVudDogMzBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50cmU7XG4gICAgXG4gIH1cblxuXG4uaWNvbl9jb250YWluZXIsIC5pY29uX2NvbnRhaW5lcjIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDoxMDBweDtcbn1cblxuLmljb25fY29udGFpbmVyID4gaW9uLWljb24sIC5pY29uX2NvbnRhaW5lcjIgPiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7IC8qIDUwJSAtIDMvNCBvZiBpY29uIGhlaWdodCAqL1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_createcertificate_createcertificate_module_ts-es2015.js.map