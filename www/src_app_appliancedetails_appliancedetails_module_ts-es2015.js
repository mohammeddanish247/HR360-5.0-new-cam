"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_appliancedetails_appliancedetails_module_ts"],{

/***/ 24386:
/*!*********************************************************************!*\
  !*** ./src/app/appliancedetails/appliancedetails-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliancedetailsPageRoutingModule": function() { return /* binding */ AppliancedetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _appliancedetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliancedetails.page */ 83508);




const routes = [
    {
        path: '',
        component: _appliancedetails_page__WEBPACK_IMPORTED_MODULE_0__.AppliancedetailsPage
    }
];
let AppliancedetailsPageRoutingModule = class AppliancedetailsPageRoutingModule {
};
AppliancedetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppliancedetailsPageRoutingModule);



/***/ }),

/***/ 5691:
/*!*************************************************************!*\
  !*** ./src/app/appliancedetails/appliancedetails.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliancedetailsPageModule": function() { return /* binding */ AppliancedetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _appliancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliancedetails-routing.module */ 24386);
/* harmony import */ var _appliancedetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliancedetails.page */ 83508);







let AppliancedetailsPageModule = class AppliancedetailsPageModule {
};
AppliancedetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appliancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppliancedetailsPageRoutingModule
        ],
        declarations: [_appliancedetails_page__WEBPACK_IMPORTED_MODULE_1__.AppliancedetailsPage]
    })
], AppliancedetailsPageModule);



/***/ }),

/***/ 83508:
/*!***********************************************************!*\
  !*** ./src/app/appliancedetails/appliancedetails.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliancedetailsPage": function() { return /* binding */ AppliancedetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_appliancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./appliancedetails.page.html */ 26336);
/* harmony import */ var _appliancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliancedetails.page.scss */ 82445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);







let AppliancedetailsPage = class AppliancedetailsPage {
    constructor(router, route, auth, datePipe) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.datePipe = datePipe;
        this.Detailsworkcarriedout = ' ';
        this.appliancestestedNumber = ' ';
    }
    ngOnInit() {
        this.currentyear = this.auth.getdateformatV2();
        this.currentyear = this.currentyear.split("/")[2];
        this.currentyear = parseInt(this.currentyear.split(" ")[0]);
        this.lastyear = this.currentyear + 10;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
            }
            this.auth.getLocation();
        });
        this.auth.database.executeSql('select * from certificate where JOBGUID=?', [this.data['JOBGUID']])
            .then(res => {
            console.log("@@" + res.rows.item(0)['JOBGUID'] + "," + res.rows.item(0)['DetailsWork'] + "," + res.rows.item(0)['NoOfAppTested'] + "," + res.rows.item(0)['NextDueDt']);
            const inputDate = res.rows.item(0)['NextDueDt'];
            const [dd, MM, yyyy, HH, mm, ss] = inputDate.split(/[\s/:]+/); // split the date string into components
            const isoDate = new Date(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`).toISOString(); //converting to ISO date formate
            this.Detailsworkcarriedout = res.rows.item(0)['DetailsWork'];
            this.appliancestestedNumber = res.rows.item(0)['NoOfAppTested'];
            this.safetycheckDate = isoDate;
        }).catch(e => {
            console.log("error getting saved certicate appliance Details :" + e);
        });
    }
    saveNext() {
        if (this.Detailsworkcarriedout == ' ' || this.Detailsworkcarriedout == undefined) {
            this.auth.showToast('Details of work carried out cannot be empty', 'danger');
        }
        else {
            if (this.appliancestestedNumber == ' ' || this.appliancestestedNumber == undefined) {
                this.auth.showToast('Number of appliances tested cannot be empty', 'danger');
            }
            else {
                if (parseInt(this.appliancestestedNumber) > 4) {
                    this.auth.showToast('Number of tested devices cannot be more than 4', 'danger');
                }
                else {
                    if (this.safetycheckDate == null) {
                        this.auth.showToast('Safety check date can not be empty.', 'danger');
                    }
                    else {
                        console.log("before " + this.safetycheckDate);
                        let date = new Date(this.safetycheckDate);
                        let formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
                        console.log("after " + this.safetycheckDate);
                        // this.auth.showToast(a);
                        this.auth.database.executeSql('update certificate set DetailsWork=?, NoOfAppTested=?, NextDueDt=? where JOBGUID=?', [this.Detailsworkcarriedout, this.appliancestestedNumber, formattedDate, this.data['JOBGUID']])
                            .then((res) => {
                            this.data['DetailsWork'] = this.Detailsworkcarriedout;
                            this.data['NoOfAppTested'] = this.appliancestestedNumber;
                            this.data['NextDueDt'] = this.safetycheckDate;
                            console.log(JSON.stringify(res));
                            const navigationExtras = {
                                state: {
                                    data: this.data,
                                }
                            };
                            this.router.navigate(['outcomes'], navigationExtras);
                        }).catch((e) => {
                            this.auth.showToast('Error Saving Data ' + e, 'danger');
                        });
                    }
                }
            }
        }
    }
    isDateFormatValid(dateString) {
        const pattern = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
        return pattern.test(dateString);
    }
};
AppliancedetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe }
];
AppliancedetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-appliancedetails',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_appliancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_appliancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppliancedetailsPage);



/***/ }),

/***/ 26336:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/appliancedetails/appliancedetails.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Details of work carried out</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"Detailsworkcarriedout\" placeholder=\"Write details here...\" ></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Number of appliances tested</ion-label>\n    <ion-input type=\"number\" inputmode=\"numeric\" [(ngModel)]=\"appliancestestedNumber\"\n     required placeholder=\"appliances tested No.\"></ion-input>\n  </ion-item>\n    \n  \n\n  <ion-item>\n    <ion-label position=\"floating\">Next safety check due by</ion-label>\n    <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MM YYYY\" [min]=\"currentyear\" [max]=\"lastyear\"  [(ngModel)]=\"safetycheckDate\" #safetycheck=\"ngModel\" required placeholder=\"Tap here to enter Date\"></ion-datetime>\n  </ion-item>\n\n  <div *ngIf=\"safetycheck.invalid && (safetycheck.dirty || safetycheck.touched)\" class=\"validator-error\">\n    <div *ngIf=\"safetycheck.errors.required\">\n      Please select a valid date.\n    </div>\n  </div>\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\"  color=\"secondary\" (click)=\"saveNext()\">Save & Next</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 82445:
/*!*************************************************************!*\
  !*** ./src/app/appliancedetails/appliancedetails.page.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "ion-label {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpYW5jZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHBsaWFuY2VkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_appliancedetails_appliancedetails_module_ts-es2015.js.map