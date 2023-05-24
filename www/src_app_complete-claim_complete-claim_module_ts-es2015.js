"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_complete-claim_complete-claim_module_ts"],{

/***/ 23906:
/*!*****************************************************************!*\
  !*** ./src/app/complete-claim/complete-claim-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteClaimPageRoutingModule": function() { return /* binding */ CompleteClaimPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complete_claim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-claim.page */ 61534);




const routes = [
    {
        path: '',
        component: _complete_claim_page__WEBPACK_IMPORTED_MODULE_0__.CompleteClaimPage
    }
];
let CompleteClaimPageRoutingModule = class CompleteClaimPageRoutingModule {
};
CompleteClaimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompleteClaimPageRoutingModule);



/***/ }),

/***/ 45831:
/*!*********************************************************!*\
  !*** ./src/app/complete-claim/complete-claim.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteClaimPageModule": function() { return /* binding */ CompleteClaimPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _complete_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-claim-routing.module */ 23906);
/* harmony import */ var _complete_claim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-claim.page */ 61534);







let CompleteClaimPageModule = class CompleteClaimPageModule {
};
CompleteClaimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complete_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompleteClaimPageRoutingModule
        ],
        declarations: [_complete_claim_page__WEBPACK_IMPORTED_MODULE_1__.CompleteClaimPage]
    })
], CompleteClaimPageModule);



/***/ }),

/***/ 61534:
/*!*******************************************************!*\
  !*** ./src/app/complete-claim/complete-claim.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteClaimPage": function() { return /* binding */ CompleteClaimPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_claim_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complete-claim.page.html */ 89479);
/* harmony import */ var _complete_claim_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-claim.page.scss */ 20292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4320);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);







///////////////////completed
let CompleteClaimPage = class CompleteClaimPage {
    constructor(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.base64 = '';
        this.image1 = '';
        this.image2 = '';
        this.image3 = '';
        this.jobOutCome = '';
        this.image2flag = true;
        this.image3flag = true;
        this.additionalNotes = "Did you work on the appliance: Yes/No \nVisual Inspection of appliance: Pass/Fail \nBurner Pressure/Gas Rate: \nSafety Device: Pass/Fail \nInitial FGA: \nFinal FGA: \nFlue: Pass Fail \nVentilation: Pass/Fail \nDefects: \nClassification: \nAction Taken:";
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.auth.getLocation();
                console.log('## # combo jobid ' + this.data['CLAIMJOBID'] + "" + this.data['BackgroundColour']);
            }
        });
    }
    radiogroupChange(event) {
        this.jobOutComeFlag = false;
        console.log(' rg change ' + event.detail.value);
        this.jobOutCome = event.detail.value;
        if (this.jobOutCome == 'AtRisk' || this.jobOutCome == 'CappedOff') {
            this.image2flag = false;
            this.image3flag = false;
        }
        else {
            this.image2flag = true;
            this.image3flag = true;
        }
    }
    openCamera(opt, option) {
        this.imageflag = false;
        this.cameraOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
        };
        this.galleryOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
        };
        switch (opt) {
            case 1:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.image1 = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.base64 = imageData.base64String;
                }, (err) => {
                    this.auth.showToast(JSON.stringify(err));
                });
                break;
            case 2:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.image2 = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.base64 = imageData.base64String;
                }, (err) => {
                    this.auth.showToast(JSON.stringify(err));
                });
                break;
            case 3:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.image3 = 'data:image/jpeg;base64,' + imageData.base64String;
                    this.base64 = imageData.base64String;
                }, (err) => {
                    this.auth.showToast(JSON.stringify(err));
                });
                break;
            default:
                break;
        }
    }
    partsIonChange(event) {
        this.partsFlag = false;
    }
    labourIonChange(event) {
        this.labourFlag = false;
    }
    additionalIonChange(event) {
        this.additionalFlag = false;
    }
    complete(f) {
        //  if(this.base64==null || this.base64 == ''){
        //   this.auth.showToast('Image in mandatory');
        // }else
        //{
        if (this.jobOutCome == '') {
            this.jobOutComeFlag = true;
            this.auth.scrollToId("joboutcome");
            //this.auth.showToast('Job Outcome in mandatory','danger');
        }
        else {
            if (f.value.parts == '') {
                this.partsFlag = true;
                this.auth.scrollToId("partsandlabour");
                //this.auth.showToast('Parts in mandatory','danger');
            }
            else {
                if (f.value.labour == '') {
                    this.labourFlag = true;
                    this.auth.scrollToId("partsandlabour");
                    //this.auth.showToast('Labour in mandatory','danger');            
                }
                else {
                    if (f.value.additional == '') {
                        this.additionalFlag = true;
                        this.auth.scrollToId("additional");
                        //this.auth.showToast('Additional notes in mandatory','danger');
                    }
                    else {
                        if ((this.jobOutCome == 'AtRisk' || this.jobOutCome == 'CappedOff') && (this.image1 == '')) {
                            this.imageflag = true;
                            this.auth.scrollToId("uploadImage");
                            //this.auth.showToast('Images are  mandatory','danger');
                        }
                        else {
                            if (this.data['BackgroundColour'] == '#20B2AA') {
                                //IN COMBO CLAIM
                                this.auth.database.executeSql('update completeclaim set OUTCOME=?,JOBNOTE=?,PARTS=?,LABOUR=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,IsClaimCompleted=?,BackgroundColour=?,HaveData=?,ComboIsCompleted=? where JOBGUID=?', [this.jobOutCome, f.value.additional, f.value.parts, f.value.labour, this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['CLAIMJOBID'], 'yes', this.data['BackgroundColour'], 'yes', 'yes', this.data['JOBGUID']])
                                    .then((res) => {
                                    this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', this.data['JOBGUID']]).then((res) => {
                                        console.log('#### jobsstatus success ' + JSON.stringify(res));
                                        this.auth.showToast('Success! Claim has been Completed', 'success');
                                        this.router.navigate(['details']);
                                    }).catch((e) => { });
                                }).catch((e) => {
                                    console.log('### complete Failure ' + JSON.stringify(e));
                                });
                            }
                            else {
                                // IN NORMAL CLAIM
                                console.log('Else code..........' + this.data['JOBGUID'] + ' ' + this.data['CLAIMJOBID']);
                                this.auth.database.executeSql('update  completeclaim set OUTCOME=?,JOBNOTE=?,PARTS=?,LABOUR=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,IsClaimCompleted=?,BackgroundColour=?,HaveData=? where JOBGUID=?', [this.jobOutCome, f.value.additional, f.value.parts, f.value.labour, this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['CLAIMJOBID'], 'yes', this.data['BackgroundColour'], 'yes', this.data['JOBGUID']])
                                    .then((res) => {
                                    this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', this.data['JOBGUID']]).then((res) => {
                                        console.log('#### jobsstatus success ' + JSON.stringify(res));
                                        this.auth.showToast('Success! Claim has been Completed', 'success');
                                        console.log('#### complete success ' + JSON.stringify(res));
                                        this.router.navigate(['details']);
                                    }).catch((e) => { });
                                }).catch((e) => {
                                    console.log('### complete Failure ' + JSON.stringify(e));
                                });
                            }
                        }
                    }
                }
            }
        }
        //}
    }
};
CompleteClaimPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
CompleteClaimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-complete-claim',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_claim_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complete_claim_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompleteClaimPage);



/***/ }),

/***/ 89479:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complete-claim/complete-claim.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Job Report Complete Claim</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f='ngForm'  >\n    <ion-card id=\"joboutcome\" class=\"ion-padding\">     \n      <ion-radio-group  \n      allow-empty-selection='false' \n      (ionChange)='radiogroupChange($event)'>\n\n        <div class=\"ion-text-center\">\n          <h5>Job Outcome</h5>\n        </div>\n        <ion-item lines=\"none\">\n          <ion-label>job completed succesfully</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"JobCompletedSuccessfully\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>At Risk</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"AtRisk\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>Capped Off(Not Safe)</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"CappedOff\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item></ion-item>\n      <p *ngIf='jobOutComeFlag' class=\"alert\">Job outcomes cannot be empty</p>\n    </ion-card>\n\n    <ion-card id=\"partsandlabour\" class=\"ion-padding\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Parts</ion-label>\n        <ion-input type=\"text\" \n        (ionChange)=\"partsIonChange($event)\"\n        ngModel \n        name='parts'\n        required\n        #partsCtrl='ngModel'></ion-input>\n      </ion-item>\n      <p *ngIf='(!partsCtrl.valid && partsCtrl.touched) || partsFlag' class=\"alert\"> Parts cannot be empty</p>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Labour</ion-label>\n        <ion-input type=\"text\"  \n        (ionChange)=\"labourIonChange($event)\"\n        ngModel \n        name='labour'\n        required\n        #labourCtrl='ngModel' ></ion-input>\n      </ion-item>\n      <p *ngIf='(!labourCtrl.valid && labourCtrl.touched) || labourFlag' class=\"alert\">Labour cannot be empty</p>\n    </ion-card>\n    \n\n    <ion-card id=\"additional\" class=\"ion-padding\">\n      <ion-item>\n        <ion-textarea rows=\"12\" cols=\"20\"\n        [(ngModel)]='additionalNotes' \n        (ionChange)=\"additionalIonChange($event)\"\n         placeholder=\"Enter Additional Notes here...\"\n         ngModel \n         name='additional'\n         required\n         #additionalCtrl='ngModel'\n         ></ion-textarea>\n      </ion-item>\n      <p *ngIf='(!additionalCtrl.valid && additionalCtrl.touched) || additionalFlag' class=\"alert\">Additional cannot be empty</p>\n    </ion-card>\n      \n    <ion-card id=\"uploadImage\" class=\"ion-padding\">\n      <ion-item>\n        <ion-label> Upload Image 1</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(1,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(1,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image1!= null\">\n        <img [src]=\"image1\" />\n      </span>\n      <p *ngIf='imageflag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n\n    \n    <ion-card id=\"uploadImage2\" class=\"ion-padding\" [hidden]=\"image2flag\">\n      <ion-item>\n        <ion-label> Upload Image 2</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(2,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(2,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image2!= null\">\n        <img [src]=\"image2\" />\n      </span>      \n      <p *ngIf='image2flag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n\n    <ion-card id=\"uploadImage3\" class=\"ion-padding\" [hidden]=\"image3flag\">\n      <ion-item>\n        <ion-label> Upload Image 3</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(3,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(3,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image3!= null\">\n        <img [src]=\"image3\" />\n      </span>\n      <p *ngIf='image3flag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n    \n    </form>\n</ion-content>\n<!-- [disabled]='!f.valid' -->\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\"   (click)=\"complete(f)\">Submit</ion-button>\n</ion-footer>\n\n");

/***/ }),

/***/ 20292:
/*!*********************************************************!*\
  !*** ./src/app/complete-claim/complete-claim.page.scss ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "p {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLWNsYWltLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJjb21wbGV0ZS1jbGFpbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_complete-claim_complete-claim_module_ts-es2015.js.map