"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_sitesurveysign_sitesurveysign_module_ts"],{

/***/ 45645:
/*!*****************************************************************!*\
  !*** ./src/app/sitesurveysign/sitesurveysign-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveysignPageRoutingModule": function() { return /* binding */ SitesurveysignPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _sitesurveysign_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurveysign.page */ 70091);




const routes = [
    {
        path: '',
        component: _sitesurveysign_page__WEBPACK_IMPORTED_MODULE_0__.SitesurveysignPage
    }
];
let SitesurveysignPageRoutingModule = class SitesurveysignPageRoutingModule {
};
SitesurveysignPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SitesurveysignPageRoutingModule);



/***/ }),

/***/ 39032:
/*!*********************************************************!*\
  !*** ./src/app/sitesurveysign/sitesurveysign.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveysignPageModule": function() { return /* binding */ SitesurveysignPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _sitesurveysign_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurveysign-routing.module */ 45645);
/* harmony import */ var _sitesurveysign_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurveysign.page */ 70091);







let SitesurveysignPageModule = class SitesurveysignPageModule {
};
SitesurveysignPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sitesurveysign_routing_module__WEBPACK_IMPORTED_MODULE_0__.SitesurveysignPageRoutingModule
        ],
        declarations: [_sitesurveysign_page__WEBPACK_IMPORTED_MODULE_1__.SitesurveysignPage]
    })
], SitesurveysignPageModule);



/***/ }),

/***/ 70091:
/*!*******************************************************!*\
  !*** ./src/app/sitesurveysign/sitesurveysign.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveysignPage": function() { return /* binding */ SitesurveysignPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveysign_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sitesurveysign.page.html */ 26812);
/* harmony import */ var _sitesurveysign_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurveysign.page.scss */ 8038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ 35734);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 12314);








let SitesurveysignPage = class SitesurveysignPage {
    constructor(storage, elementRef, route, router, auth) {
        this.storage = storage;
        this.elementRef = elementRef;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.data = [];
        // ngmodels
        this.describeIssue = '';
        this.SurveyorName = '';
        this.CustomerName = '';
        this.hideflag = true;
    }
    ngOnInit() {
        const canvas1 = this.elementRef.nativeElement.querySelector('#Engsigcanvas1');
        const canvas2 = this.elementRef.nativeElement.querySelector('#Engsigcanvas2');
        this.EngsignaturePad1 = new signature_pad__WEBPACK_IMPORTED_MODULE_2__.default(canvas1);
        this.EngsignaturePad2 = new signature_pad__WEBPACK_IMPORTED_MODULE_2__.default(canvas2);
        this.EngsignaturePad1.clear();
        this.EngsignaturePad2.clear();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.storage.get(this.data['JOBGUID']).then((res) => {
                    this.CustomerName = res['CustomerName'];
                    this.SurveyorName = res['SurveyorName'];
                    this.describeIssue = res['describeIssue'];
                    this.auth.database.executeSql('select * from sitesurveysign where JOBGUID=?', [this.data['JOBGUID']]).then((res) => {
                        this.describeIssue = res.rows.item(0)['describeIssue'];
                        this.SurveyorName = res.rows.item(0)['surveyorname'];
                        this.CustomerName = res.rows.item(0)['customername'];
                        if (JSON.stringify(res.rows.item(0)['surveyorsign']) != "null") {
                            this.EngsignaturePad1.fromDataURL('data:image/jpeg;base64,' + res.rows.item(0)['surveyorsign'], {
                                width: canvas1.width,
                                height: canvas1.height
                            });
                            this.EngsignaturePad2.fromDataURL('data:image/jpeg;base64,' + res.rows.item(0)['customersign'], {
                                width: canvas2.width,
                                height: canvas2.height
                            });
                        }
                    }).catch((e) => {
                    });
                }).catch((e) => {
                });
            }
        });
    }
    ionViewWillLeave() {
        const signdata = {
            CustomerName: this.CustomerName,
            SurveyorName: this.SurveyorName,
            describeIssue: this.describeIssue
        };
        this.storage.set(this.data['JOBGUID'], signdata);
    }
    save1() {
        let image = this.EngsignaturePad1.toDataURL();
        this.auth.database.executeSql('update sitesurveysign set surveyorsign=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
            // this.auth.showToast('Surveyor Signature has been Saved successfully.','success');  
        }).catch((e) => {
            this.auth.showToast('Signature Saved Error.' + JSON.stringify(e), 'danger');
        });
    }
    save2() {
        let image = this.EngsignaturePad2.toDataURL();
        this.auth.database.executeSql('update sitesurveysign set customersign=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
            // this.auth.showToast('Customer Signature has been saved successfully.','success');
        }).catch((e) => {
            this.auth.showToast('Signature Saved Error.' + JSON.stringify(e), 'danger');
        });
    }
    clear1() {
        this.EngsignaturePad1.clear();
    }
    clear2() {
        this.EngsignaturePad2.clear();
    }
    isCanvasBlank1() {
        return this.EngsignaturePad1.isEmpty();
    }
    isCanvasBlank2() {
        return this.EngsignaturePad2.isEmpty();
    }
    SiteSurveySignature() {
        if (this.describeIssue == '' || this.describeIssue == undefined) {
            this.auth.showToast('Describe Issue cannot be empty', 'danger');
        }
        else {
            if (this.EngsignaturePad1.isEmpty()) {
                this.auth.showToast('Surveyor signature cannot be empty', 'danger');
            }
            else {
                if (this.EngsignaturePad2.isEmpty()) {
                    this.auth.showToast('Customer signature cannot be empty', 'danger');
                }
                else {
                    if (this.SurveyorName == '' || this.SurveyorName == undefined) {
                        this.auth.showToast('Surveyor name cannot be empty', 'danger');
                    }
                    else {
                        if (this.CustomerName == '' || this.CustomerName == undefined) {
                            this.auth.showToast('Customer name cannot be empty', 'danger');
                        }
                        else {
                            this.save1();
                            this.save2();
                            this.auth.database.executeSql('update sitesurveysign set describeIssue=?, customername=? , surveyorname=?, HaveData=?  where JOBGUID=?', [this.describeIssue, this.CustomerName, this.SurveyorName, 'yes', this.data['JOBGUID']]).then((res) => {
                                this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', this.data['JOBGUID']]).then((res) => {
                                    this.hideflag = false;
                                }).catch((e) => { this.auth.showToast("Error." + e, 'danger'); });
                            }).catch((e) => {
                                this.auth.showToast("Error." + e, 'danger');
                            });
                        }
                    }
                }
            }
        }
    }
    notSpokenToCustomer() {
        this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?', [this.data['CLAIMRef'], 'NotSpokenToCustomer', this.data['JOBGUID']]).then((res) => {
            this.router.navigate(['details']);
            this.auth.showToast("Success! Job have been completed successfully.", 'success');
        }).catch((e) => {
            this.auth.showToast("Error. inserting data ", 'danger');
        });
    }
    customerNotInterested() {
        this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?', [this.data['CLAIMRef'], 'CustomerNotInterested', this.data['JOBGUID']]).then((res) => {
            this.router.navigate(['details']);
            this.auth.showToast("Success! Job have been completed successfully.", 'success');
        }).catch((e) => {
            this.auth.showToast("Error. inserting data ", 'danger');
        });
    }
    customerInterestedCallBack() {
        this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?', [this.data['CLAIMRef'], 'CustomerInterestedCallBack', this.data['JOBGUID']]).then((res) => {
            this.router.navigate(['details']);
            this.auth.showToast("Success! Job have been completed successfully.", 'success');
        }).catch((e) => {
            this.auth.showToast("Error. inserting data ", 'danger');
        });
    }
    customerInterestedHotKeyLive() {
        this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?', [this.data['CLAIMRef'], 'CustomerInterestedHotKeyLive', this.data['JOBGUID']]).then((res) => {
            this.router.navigate(['details']);
            this.auth.showToast("Success! Job have been completed successfully.", 'success');
        }).catch((e) => {
            this.auth.showToast("Error. inserting data ", 'danger');
        });
    }
};
SitesurveysignPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
SitesurveysignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sitesurveysign',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveysign_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sitesurveysign_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SitesurveysignPage);



/***/ }),

/***/ 26812:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sitesurveysign/sitesurveysign.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"font-size: 16px;\">Site Survey Report Signature</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <p id=\"Para\">Notes: Please describe any issue which the installer may face. </p>\n  <ion-card>\n    <ion-item [hidden]=\"describeIssueFlag\">\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"describeIssue\" placeholder=\"Write details here...\"></ion-textarea>\n    </ion-item>\n  </ion-card>\n\n  <p id=\"Para\">I the customer have read and understood the Terms & Conditions. I can also confirm that I have been given and understood advice in respect of the condition of my smoke detectors and carbon monoxide meters where present, or the recommendations to install these if not present. </p>\n\n  <h4 style=\"text-align: center;\">Surveyor Signature</h4>\n  <div id=\"canvasID1\">\n    <canvas id=\"Engsigcanvas1\" width=\"300\" height=\"182\"></canvas>\n  </div>  \n  \n  \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" [disabled]=\"isCanvasBlank1()\" (click)=\"save1()\"> Save</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" (click)=\"clear1()\"> Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h4 style=\"text-align: center;\">Customer Signature</h4>\n  <div id=\"canvasID2\">\n    <canvas id=\"Engsigcanvas2\" width=\"300\" height=\"182\"></canvas>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" [disabled]=\"isCanvasBlank2()\" (click)=\"save2()\"> Save</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" (click)=\"clear2()\"> Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Surveyor Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"SurveyorName\" placeholder=\"Enter the Installer Name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Customer Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"CustomerName\" placeholder=\"Enter the Customer Name\"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"SiteSurveySignature()\">Save</ion-button>\n  </div>\n  <p id=\"Para\">Important : First Click on Save to Save all work. </p>\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"notSpokenToCustomer()\" [disabled]=\"hideflag\">Not spoken to customer</ion-button>\n  </div>\n\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"customerNotInterested()\" [disabled]=\"hideflag\">Customer not interested</ion-button>\n  </div>\n\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"customerInterestedCallBack()\" [disabled]=\"hideflag\">Customer interested call back</ion-button>\n  </div>\n\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"customerInterestedHotKeyLive()\" [disabled]=\"hideflag\">Customer interested Hot Key Live</ion-button>\n  </div>\n\n\n</ion-content>\n\n\n<ion-footer>\n \n</ion-footer>");

/***/ }),

/***/ 8038:
/*!*********************************************************!*\
  !*** ./src/app/sitesurveysign/sitesurveysign.page.scss ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "#Engsigcanvas1 {\n  border: 3px solid #141313;\n  display: inline-block;\n  background-color: #fffff7;\n}\n\n#canvasID1 {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#Engsigcanvas2 {\n  border: 3px solid #141313;\n  display: inline-block;\n  background-color: #fffff7;\n}\n\n#canvasID2 {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#Para {\n  display: inline-block;\n  text-align: justify;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGVzdXJ2ZXlzaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSEoiLCJmaWxlIjoic2l0ZXN1cnZleXNpZ24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0VuZ3NpZ2NhbnZhczEge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMCwgMTksIDE5KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNDcpO1xuICBcbn1cblxuI2NhbnZhc0lEMXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jRW5nc2lnY2FudmFzMiB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAxOSwgMTkpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0Nyk7XG4gIFxufVxuXG5cblxuI2NhbnZhc0lEMntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jUGFyYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW46IDFyZW07XG4gICBcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_sitesurveysign_sitesurveysign_module_ts-es2015.js.map