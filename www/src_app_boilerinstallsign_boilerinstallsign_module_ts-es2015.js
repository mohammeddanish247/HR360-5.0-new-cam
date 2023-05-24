"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_boilerinstallsign_boilerinstallsign_module_ts"],{

/***/ 15579:
/*!***********************************************************************!*\
  !*** ./src/app/boilerinstallsign/boilerinstallsign-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallsignPageRoutingModule": function() { return /* binding */ BoilerinstallsignPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _boilerinstallsign_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerinstallsign.page */ 85631);




const routes = [
    {
        path: '',
        component: _boilerinstallsign_page__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallsignPage
    }
];
let BoilerinstallsignPageRoutingModule = class BoilerinstallsignPageRoutingModule {
};
BoilerinstallsignPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BoilerinstallsignPageRoutingModule);



/***/ }),

/***/ 72512:
/*!***************************************************************!*\
  !*** ./src/app/boilerinstallsign/boilerinstallsign.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallsignPageModule": function() { return /* binding */ BoilerinstallsignPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _boilerinstallsign_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerinstallsign-routing.module */ 15579);
/* harmony import */ var _boilerinstallsign_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerinstallsign.page */ 85631);







let BoilerinstallsignPageModule = class BoilerinstallsignPageModule {
};
BoilerinstallsignPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boilerinstallsign_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallsignPageRoutingModule
        ],
        declarations: [_boilerinstallsign_page__WEBPACK_IMPORTED_MODULE_1__.BoilerinstallsignPage]
    })
], BoilerinstallsignPageModule);



/***/ }),

/***/ 85631:
/*!*************************************************************!*\
  !*** ./src/app/boilerinstallsign/boilerinstallsign.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoilerinstallsignPage": function() { return /* binding */ BoilerinstallsignPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstallsign_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./boilerinstallsign.page.html */ 1179);
/* harmony import */ var _boilerinstallsign_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerinstallsign.page.scss */ 4148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ 35734);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);








let BoilerinstallsignPage = class BoilerinstallsignPage {
    constructor(router, route, storage, auth, elementRef) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.auth = auth;
        this.elementRef = elementRef;
        this.completed = '';
        this.installationNOT = '';
        this.defects = '';
        this.installationnotsuccess = '';
        this.damage = '';
        this.damageNOT = '';
        this.AdditionalNotes = '';
        this.InstallerName = '';
        this.CustomerName = '';
        this.installationFlag = true;
        this.installationnotdoneFlag = true;
        this.NOdamageFlag = true;
    }
    ngOnInit() {
        this.auth.getLocation();
        const canvas1 = this.elementRef.nativeElement.querySelector('#Engsigcanvas1');
        const canvas2 = this.elementRef.nativeElement.querySelector('#Engsigcanvas2');
        this.EngsignaturePad1 = new signature_pad__WEBPACK_IMPORTED_MODULE_2__.default(canvas1);
        this.EngsignaturePad2 = new signature_pad__WEBPACK_IMPORTED_MODULE_2__.default(canvas2);
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
            }
        });
        this.auth.database.executeSql('select * from boilerinstallationsign where JOBGUID=?', [this.data['JOBGUID']]).then((res) => {
            this.EngsignaturePad1.fromDataURL('data:image/jpeg;base64,' + res.rows.item(0)['InstallerSig'], {
                width: canvas1.width,
                height: canvas1.height
            });
            console.log("Danish :" + this.EngsignaturePad1);
            this.EngsignaturePad2.fromDataURL('data:image/jpeg;base64,' + res.rows.item(0)['CustomerSig'], {
                width: canvas2.width,
                height: canvas2.height
            });
            this.completed = res.rows.item(0)['BInsComplete'];
            this.installationNOT = res.rows.item(0)['BInsComplete_Reason'];
            this.defects = res.rows.item(0)['BInsDefects'];
            this.installationnotsuccess = res.rows.item(0)['BInsDefects_Reason'];
            this.damage = res.rows.item(0)['BInsDamage'];
            this.damageNOT = res.rows.item(0)['BInsDamage_Reason'];
            this.AdditionalNotes = res.rows.item(0)['BInsAddNotes'];
            this.InstallerName = res.rows.item(0)['InstallerName'];
            this.CustomerName = res.rows.item(0)['CustomerName'];
        }).catch((e) => {
        });
    }
    completedClick() {
        // this.auth.database.executeSql('update boilerinstallationsign set BInsComplete=? where JOBGUID=?',[this.completed, this.data['JOBGUID']]).then((res)=>{       
        // }).catch((e)=>{
        // });
        if (this.completed == 'YES') {
            this.installationFlag = true;
        }
        else {
            this.installationFlag = false;
        }
    }
    installationClick() {
        // this.auth.database.executeSql('update boilerinstallationsign set BInsDefects=? where JOBGUID=?',[this.defects, this.data['JOBGUID']]).then((res)=>{      
        // }).catch((e)=>{
        // });
        if (this.defects == 'YES') {
            this.installationnotdoneFlag = true;
        }
        else {
            this.installationnotdoneFlag = false;
        }
    }
    damageClick() {
        // this.auth.database.executeSql('update boilerinstallationsign set BInsDamage=? where JOBGUID=?', [this.damage, this.data['JOBGUID']]).then((res) => {
        // }).catch((e) => {
        // });
        if (this.damage == 'YES') {
            this.NOdamageFlag = true;
        }
        else {
            this.NOdamageFlag = false;
        }
    }
    save1() {
        let image = this.EngsignaturePad1.toDataURL();
        this.auth.database.executeSql('update boilerinstallationsign set InstallerSig=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
            this.auth.showToast('Success! Installer Signature has been Saved.', 'success');
        }).catch((e) => {
            this.auth.showToast('Signature not saved Error.' + JSON.stringify(e), 'danger');
        });
    }
    save2() {
        let image = this.EngsignaturePad2.toDataURL();
        this.auth.database.executeSql('update boilerinstallationsign set CustomerSig=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
            this.auth.showToast('Success! Customer Signature has been Saved.', 'success');
        }).catch((e) => {
            this.auth.showToast('Signature not saved Error.' + JSON.stringify(e), 'danger');
        });
    }
    isCanvasBlank1() {
        return this.EngsignaturePad1.isEmpty();
    }
    isCanvasBlank2() {
        return this.EngsignaturePad2.isEmpty();
    }
    clear1() {
        this.EngsignaturePad1.clear();
    }
    clear2() {
        this.EngsignaturePad2.clear();
    }
    boilerInsSignature() {
        if (this.completed == undefined || this.completed == '') {
            this.auth.showToast("Confirmation of Installation complete can not be empty", 'danger');
        }
        else {
            if (this.defects == undefined || this.defects == '') {
                this.auth.showToast("Confirmation of Installation Defects can not be empty", 'danger');
            }
            else {
                if (this.damage == undefined || this.damage == '') {
                    this.auth.showToast("Confirmation of Installation Damage can not be empty", 'danger');
                }
                else {
                    if (this.AdditionalNotes == undefined || this.AdditionalNotes == '') {
                        this.auth.showToast("Additional Notes can not be empty", 'danger');
                    }
                    else {
                        if (this.EngsignaturePad1.isEmpty()) {
                            this.auth.showToast("Installer Signature can not be empty", 'danger');
                        }
                        else {
                            if (this.EngsignaturePad2.isEmpty()) {
                                this.auth.showToast("Customer Signature can not be empty", 'danger');
                            }
                            else {
                                if (this.InstallerName == undefined || this.InstallerName == '') {
                                    this.auth.showToast("Installer Name can not be empty", 'danger');
                                }
                                else {
                                    if (this.CustomerName == undefined || this.CustomerName == '') {
                                        this.auth.showToast("Customer Name can not be empty", 'danger');
                                    }
                                    else {
                                        this.auth.database.executeSql("update  boilerinstallationsign set HaveData=?, BInsComplete=?, BInsComplete_Reason=?, BInsDefects=?, BInsDefects_Reason=?, BInsDamage=?, BInsDamage_Reason=?, BInsAddNotes=?, InstallerName=?, CustomerName=?  where JOBGUID=? ", ['yes', this.completed, this.installationNOT, this.defects, this.installationnotsuccess, this.damage, this.damageNOT, this.AdditionalNotes, this.InstallerName, this.CustomerName, this.data['JOBGUID']]).then((res) => {
                                            this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', this.data['JOBGUID']]).then((res) => {
                                                this.auth.showToast('Sucess! Boiler Installaion has been Completed.', 'success');
                                                this.router.navigate(['details']);
                                            }).catch((e) => {
                                            });
                                        }).catch((e) => {
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
BoilerinstallsignPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef }
];
BoilerinstallsignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-boilerinstallsign',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstallsign_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_boilerinstallsign_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoilerinstallsignPage);



/***/ }),

/***/ 1179:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/boilerinstallsign/boilerinstallsign.page.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"font-size: 16px;\">Boiler Installation Report Signature</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-radio-group allow-empty-selection='false' [(ngModel)]=\"completed\" (ionChange)=\"completedClick()\">\n      <ion-item lines=\"none\">\n        <p>I confirm the installation at my property has been completed.</p>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label>Yes</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>No</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <ion-item [hidden]=\"installationFlag\">\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"installationNOT\" placeholder=\"Write details here...\"></ion-textarea>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-radio-group allow-empty-selection='false' [(ngModel)]=\"defects\" (ionChange)=\"installationClick()\">\n      <ion-item lines=\"none\">\n        <p>I am satisfied that installation has been successful and does not have any defects.</p>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label>Yes</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>No</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <ion-item [hidden]=\"installationnotdoneFlag\">\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"installationnotsuccess\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-radio-group allow-empty-selection='false' [(ngModel)]=\"damage\" (ionChange)=\"damageClick()\">\n      <ion-item lines=\"none\">\n        <p>I can confirm no damage has been caused during the installation process.</p>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label>Yes</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Yes\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>No</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"No\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <ion-item [hidden]=\"NOdamageFlag\">\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"damageNOT\" placeholder=\"Write details here...\"></ion-textarea>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Additional Notes</ion-label>\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"AdditionalNotes\" placeholder=\"Write details here...\"></ion-textarea>\n    </ion-item>\n  </ion-card>\n\n  <h4 style=\"text-align: center;\">Installer Signature</h4>\n  <div id=\"canvasID1\">\n    <canvas id=\"Engsigcanvas1\" width=\"300\" height=\"182\"></canvas>\n  </div>  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" [disabled]=\"isCanvasBlank1()\" (click)=\"save1()\"> Save</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" (click)=\"clear1()\"> Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h4 style=\"text-align: center;\">Customer Signature</h4>\n  <div id=\"canvasID2\">\n    <canvas id=\"Engsigcanvas2\" width=\"300\" height=\"182\"></canvas>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" [disabled]=\"isCanvasBlank2()\" (click)=\"save2()\"> Save</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" (click)=\"clear2()\"> Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Installer Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"InstallerName\" placeholder=\"Enter the Installer Name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Customer Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"CustomerName\" placeholder=\"Enter the Customer Name\"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  \n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"boilerInsSignature()\">Save</ion-button>\n</ion-footer>");

/***/ }),

/***/ 4148:
/*!***************************************************************!*\
  !*** ./src/app/boilerinstallsign/boilerinstallsign.page.scss ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = "#Engsigcanvas1 {\n  border: 3px solid #141313;\n  display: inline-block;\n  background-color: #fffff7;\n}\n\n#canvasID1 {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#Engsigcanvas2 {\n  border: 3px solid #141313;\n  display: inline-block;\n  background-color: #fffff7;\n}\n\n#canvasID2 {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvaWxlcmluc3RhbGxzaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJib2lsZXJpbnN0YWxsc2lnbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjRW5nc2lnY2FudmFzMSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAxOSwgMTkpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI0Nyk7XG4gIFxufVxuXG4jY2FudmFzSUQxe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNFbmdzaWdjYW52YXMyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjAsIDE5LCAxOSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjQ3KTtcbn1cblxuI2NhbnZhc0lEMntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_boilerinstallsign_boilerinstallsign_module_ts-es2015.js.map