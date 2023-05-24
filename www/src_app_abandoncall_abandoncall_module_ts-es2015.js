"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_abandoncall_abandoncall_module_ts"],{

/***/ 1084:
/*!***********************************************************!*\
  !*** ./src/app/abandoncall/abandoncall-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbandoncallPageRoutingModule": function() { return /* binding */ AbandoncallPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _abandoncall_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abandoncall.page */ 19012);




const routes = [
    {
        path: '',
        component: _abandoncall_page__WEBPACK_IMPORTED_MODULE_0__.AbandoncallPage
    }
];
let AbandoncallPageRoutingModule = class AbandoncallPageRoutingModule {
};
AbandoncallPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AbandoncallPageRoutingModule);



/***/ }),

/***/ 93347:
/*!***************************************************!*\
  !*** ./src/app/abandoncall/abandoncall.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbandoncallPageModule": function() { return /* binding */ AbandoncallPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _abandoncall_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abandoncall-routing.module */ 1084);
/* harmony import */ var _abandoncall_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abandoncall.page */ 19012);







let AbandoncallPageModule = class AbandoncallPageModule {
};
AbandoncallPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _abandoncall_routing_module__WEBPACK_IMPORTED_MODULE_0__.AbandoncallPageRoutingModule
        ],
        declarations: [_abandoncall_page__WEBPACK_IMPORTED_MODULE_1__.AbandoncallPage]
    })
], AbandoncallPageModule);



/***/ }),

/***/ 19012:
/*!*************************************************!*\
  !*** ./src/app/abandoncall/abandoncall.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbandoncallPage": function() { return /* binding */ AbandoncallPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_abandoncall_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./abandoncall.page.html */ 30967);
/* harmony import */ var _abandoncall_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abandoncall.page.scss */ 48393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4320);




// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';



///// abandoned
let AbandoncallPage = class AbandoncallPage {
    constructor(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.base64 = '';
        this.updatePicture = '';
        this.jobOutCome = '';
        this.additionalNotes = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.auth.getLocation();
                // this.getdata();  
            }
        });
    }
    getdata() {
        this.auth.database.executeSql('select * from abandon where JOBGUID=?', [this.data['JOBGUID']])
            .then((res) => {
            this.jobOutCome = res.rows.item(0)['OUTCOME'];
            this.additionalNotes = res.rows.item(0)['JOBNOTE'];
            this.base64 = res.rows.item(0)['FILEBASE'];
        });
    }
    radiogroupChange(event) {
        this.jobOutCome = event.detail.value;
        this.jobOutComeFlag = false;
    }
    textarea(event) {
        this.additionalNotes = event.detail.value;
        this.additionalNotesFlage = false;
    }
    openCamera(option) {
        this.imageFlage = false;
        this.cameraOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
            allowEditing: false
        };
        this.galleryOption = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Photos,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
            allowEditing: false
        };
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOption).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
            this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
            this.base64 = imageData.base64String.replace(/\s+/g, "+");
            // let base64Image = imageData.base64String;
            // this.updatePicture = imageData.base64String;
            // this.base64 =   imageData.base64String;
        }, (err) => {
            this.auth.showToast(JSON.stringify(err));
        });
    }
    submitAbandon(form) {
        let date = String(this.auth.getdateformatV2()).split(' ')[0];
        if (this.jobOutCome == '') {
            this.auth.scrollToId("joboutcome");
            this.jobOutComeFlag = true;
        }
        else {
            if (String(form.value.additionalNotes).trim() == '') {
                this.additionalNotesFlage = true;
                this.auth.scrollToId("textarea");
            }
            else {
                if (this.base64 == '') {
                    this.imageFlage = true;
                    this.auth.scrollToId("uploadImage");
                }
                else {
                    let haveData = "yes";
                    this.auth.database.executeSql('update abandon set  OUTCOME=?,JOBNOTE=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,HaveData=? where JOBGUID=? ', [this.jobOutCome, this.additionalNotes, this.base64, date, this.auth.lat, this.auth.long, haveData, this.data['JOBGUID']])
                        .then((res) => {
                        this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', this.data['JOBGUID']]).then((res) => {
                            this.router.navigate(['details']);
                            this.auth.showToast("Success! Your Job has been abandoned.", 'success');
                        }).catch((e) => { });
                    }).catch((e) => {
                        this.auth.showToast('### Abandon Failure ' + JSON.stringify(e), 'danger');
                    });
                }
            }
        }
    }
};
AbandoncallPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AbandoncallPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-abandoncall',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_abandoncall_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_abandoncall_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AbandoncallPage);



/***/ }),

/***/ 30967:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/abandoncall/abandoncall.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Job Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f='ngForm'  >\n  <ion-card id=\"joboutcome\" class=\"ion-padding\">\n      <ion-radio-group allow-empty-selection='true' (ionChange)='radiogroupChange($event)'>\n        \n          <div class=\"ion-text-center\">\n            <h5>Job Outcome</h5> \n          </div>\n    \n        <ion-item lines=\"none\">\n          <ion-label>Nobody At Home</ion-label>\n          <ion-radio value=\"Nobody at Home\" ></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>No Adult At Home</ion-label>\n          <ion-radio value=\"No Adult at Home\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>No Access to boiler</ion-label>\n          <ion-radio value=\"No Access to boiler\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>No Parking</ion-label>\n          <ion-radio value=\"No Parking\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label lines=\"none\">Boiler Not Working,<br> Cannot Complete This Job.</ion-label>\n          <ion-radio value=\"Boiler Not Working Cannot Complete Service\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item></ion-item>\n      <p *ngIf='jobOutComeFlag' class=\"alert\">Job outcomes cannot be empty</p>\n  </ion-card>\n\n  <ion-card id=\"textarea\" class=\"ion-padding\">\n    <ion-item>\n      <ion-textarea rows=\"5\" cols=\"20\"  \n      placeholder=\"Enter Additional Notes here...\"\n      ngModel \n      name='additionalNotes'\n      required\n      #additionalNotesCtrl='ngModel'\n      (ionChange)='textarea($event)'\n      >\n      </ion-textarea>\n    </ion-item>\n    <p *ngIf='(!additionalNotesCtrl.valid && additionalNotesCtrl.touched) || additionalNotesFlage' class=\"alert\">Additional notes cannot be empty</p>\n\n  </ion-card>\n\n  <ion-card id=\"uploadImage\" class=\"ion-padding\">\n    <ion-item lines=\"full\">\n      <p><b>Upload Image</b></p>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera('cam')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera('gall')\"></ion-icon>\n    </ion-item>\n    <span *ngIf=\"updatePicture!= null\">\n      <img [src]=\"updatePicture\" />\n    </span>\n    <p *ngIf='imageFlage' class=\"alert\">Image cannot be empty</p>\n  </ion-card>\n  \n\n</form>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)='submitAbandon(f)' >Submit</ion-button>\n</ion-footer>\n\n");

/***/ }),

/***/ 48393:
/*!***************************************************!*\
  !*** ./src/app/abandoncall/abandoncall.page.scss ***!
  \***************************************************/
/***/ (function(module) {

module.exports = "img {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFiYW5kb25jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLG1CQUFBO0tBQUEsZ0JBQUE7QUFDSCIsImZpbGUiOiJhYmFuZG9uY2FsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_abandoncall_abandoncall_module_ts-es2015.js.map