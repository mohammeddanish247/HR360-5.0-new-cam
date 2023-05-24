"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_sitesurveypics_sitesurveypics_module_ts"],{

/***/ 45190:
/*!*****************************************************************!*\
  !*** ./src/app/sitesurveypics/sitesurveypics-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveypicsPageRoutingModule": function() { return /* binding */ SitesurveypicsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurveypics.page */ 88867);




const routes = [
    {
        path: '',
        component: _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_0__.SitesurveypicsPage
    }
];
let SitesurveypicsPageRoutingModule = class SitesurveypicsPageRoutingModule {
};
SitesurveypicsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SitesurveypicsPageRoutingModule);



/***/ }),

/***/ 81028:
/*!*********************************************************!*\
  !*** ./src/app/sitesurveypics/sitesurveypics.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveypicsPageModule": function() { return /* binding */ SitesurveypicsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _sitesurveypics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitesurveypics-routing.module */ 45190);
/* harmony import */ var _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurveypics.page */ 88867);







let SitesurveypicsPageModule = class SitesurveypicsPageModule {
};
SitesurveypicsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sitesurveypics_routing_module__WEBPACK_IMPORTED_MODULE_0__.SitesurveypicsPageRoutingModule
        ],
        declarations: [_sitesurveypics_page__WEBPACK_IMPORTED_MODULE_1__.SitesurveypicsPage]
    })
], SitesurveypicsPageModule);



/***/ }),

/***/ 88867:
/*!*******************************************************!*\
  !*** ./src/app/sitesurveypics/sitesurveypics.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitesurveypicsPage": function() { return /* binding */ SitesurveypicsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveypics_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sitesurveypics.page.html */ 89727);
/* harmony import */ var _sitesurveypics_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitesurveypics.page.scss */ 84689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4320);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 12314);









let SitesurveypicsPage = class SitesurveypicsPage {
    constructor(storage, platform, router, route, auth) {
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.route = route;
        this.auth = auth;
        // flags
        this.boiler = false;
        this.Boiler_pipe_work = false;
        this.Condensate_termination = false;
        this.Fuse_spur = false;
        this.Internal_flue = false;
        this.flueInLoft = false;
        this.External_flue_terminal = false;
        this.Airing_Cupboard_Cylinder = false;
        this.StopTapFlag = false;
        this.Bench_Mark_Certificate_Flag = false;
        this.STLI_Flag = false;
        this.Drain_off_location_flag = false;
        this.GasMeterFlag = false;
        this.Additional = false;
        ///
        this.BoilerImage = '';
        this.Boilerpipework = '';
        this.CondensateterminationImage = '';
        this.FusespurImage = '';
        this.InternalflueImage = '';
        this.ExternalflueterminalImage = '';
        this.AiringCupboardCylinderImage = '';
        this.StopTapImage = '';
        this.Bench_Mark_Certificate = '';
        this.STLI = '';
        this.DrainOffLocationFlagImage = '';
        this.GasMeterImage = '';
        this.AdditionalOne = '';
        this.AdditionalTwo = '';
        this.AdditionalThree = '';
        this.AdditionalFour = '';
        // camera
        this.CameraOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
            allowEditing: false,
        };
        this.GalleryOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
            allowEditing: false,
            // quality: 20,
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // allowEdit: true,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE,
        };
        this.data = [];
    }
    ngOnInit() {
        this.storage.get('fluinloft').then(res => {
            if (res == "true") {
                this.flueInLoft = true;
            }
            else {
                this.flueInLoft = false;
            }
        });
        this.getData();
    }
    getData() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('### data ' + this.data['JOBGUID']);
                this.auth.database.executeSql('select * from sitesurveypics where JOBGUID=?', [this.data['JOBGUID']]).then((res) => {
                    console.log('boiler image ' + JSON.stringify(res.rows.item(0)['BoilerImage']));
                    this.BoilerImage = 'data:image/jpeg;base64,' + res.rows.item(0)['BoilerImage'];
                    this.Boilerpipework = 'data:image/jpeg;base64,' + res.rows.item(0)['Boilerpipework'];
                    this.CondensateterminationImage = 'data:image/jpeg;base64,' + res.rows.item(0)['CondensateterminationImage'];
                    this.FusespurImage = 'data:image/jpeg;base64,' + res.rows.item(0)['FusespurImage'];
                    this.InternalflueImage = 'data:image/jpeg;base64,' + res.rows.item(0)['InternalflueImage'];
                    this.ExternalflueterminalImage = 'data:image/jpeg;base64,' + res.rows.item(0)['ExternalflueterminalImage'];
                    this.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + res.rows.item(0)['AiringCupboardCylinderImage'];
                    this.StopTapImage = 'data:image/jpeg;base64,' + res.rows.item(0)['StopTapImage'];
                    this.Bench_Mark_Certificate = 'data:image/jpeg;base64,' + res.rows.item(0)['BMCImage'];
                    this.STLI = 'data:image/jpeg;base64,' + res.rows.item(0)['STLImage'];
                    this.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + res.rows.item(0)['DrainOffLocationFlagImage'];
                    this.GasMeterImage = 'data:image/jpeg;base64,' + res.rows.item(0)['GasMeterImage'];
                    this.AdditionalOne = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalOne'];
                    this.AdditionalTwo = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalTwo'];
                    this.AdditionalThree = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalThree'];
                    this.AdditionalFour = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalFour'];
                }).catch((e) => {
                });
            }
        });
    }
    uploadImg1(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            // var decoded = atob(imageData.base64String);
            // console.log("FileSize: " + decoded.length);
            this.BoilerImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set BoilerImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            console.log(err);
        });
    }
    uploadImg2(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.Boilerpipework = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set Boilerpipework=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg3(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.CondensateterminationImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set CondensateterminationImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg4(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.FusespurImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set FusespurImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg5(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.InternalflueImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set InternalflueImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg7(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.ExternalflueterminalImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set ExternalflueterminalImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg8(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set AiringCupboardCylinderImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg6(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.StopTapImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set FlueInLoftImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg9(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.STLI = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set STLImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg10(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set DrainOffLocationFlagImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg11(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.GasMeterImage = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set GasMeterImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg12(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.AdditionalOne = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set AdditionalOne=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg13(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.AdditionalTwo = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set AdditionalTwo=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg14(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.AdditionalThree = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set AdditionalThree=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    uploadImg15(option) {
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
            this.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;
            this.auth.database.executeSql('update sitesurveypics set AdditionalFour=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
                .then((res) => { console.log('success sql BoilerImagge'); })
                .catch((e) => {
                console.log('error sql BoilerImagge');
            });
        }, (err) => {
            // Handle error
        });
    }
    SiteSurveyImage() {
        if (this.BoilerImage == 'data:image/jpeg;base64,null' || this.BoilerImage == undefined) {
            this.auth.showToast('Boiler Image cannot be empty', 'danger');
        }
        else {
            if (this.Boilerpipework == 'data:image/jpeg;base64,null' || this.Boilerpipework == undefined) {
                this.auth.showToast('Boilerpipework Image cannot be empty', 'danger');
            }
            else {
                if (this.CondensateterminationImage == 'data:image/jpeg;base64,null' || this.CondensateterminationImage == undefined) {
                    this.auth.showToast('Condensatetermination Image cannot be empty', 'danger');
                }
                else {
                    if (this.FusespurImage == 'data:image/jpeg;base64,null' || this.FusespurImage == undefined) {
                        this.auth.showToast('Fusespur Image   cannot be empty', 'danger');
                    }
                    else {
                        if (this.InternalflueImage == 'data:image/jpeg;base64,null' || this.InternalflueImage == undefined) {
                            this.auth.showToast('Internalflue Image cannot be empty', 'danger');
                        }
                        else {
                            if (this.ExternalflueterminalImage == 'data:image/jpeg;base64,null' || this.ExternalflueterminalImage == undefined) {
                                this.auth.showToast('Externalflueterminal Image cannot be empty', 'danger');
                            }
                            else {
                                if (this.STLI == 'data:image/jpeg;base64,null' || this.STLI == undefined) {
                                    this.auth.showToast('Stop Tap Image cannot be empty', 'danger');
                                }
                                else {
                                    if (this.DrainOffLocationFlagImage == 'data:image/jpeg;base64,null' || this.DrainOffLocationFlagImage == undefined) {
                                        this.auth.showToast('DrainOffLocationFlag Image cannot be empty', 'danger');
                                    }
                                    else {
                                        if (this.GasMeterImage == 'data:image/jpeg;base64,null' || this.GasMeterImage == undefined) {
                                            this.auth.showToast('GasMeter Image cannot be empty', 'danger');
                                        }
                                        else {
                                            if (this.flueInLoft == true) {
                                                this.updateTable();
                                            }
                                            else {
                                                if (this.StopTapImage == 'data:image/jpeg;base64,null' || this.StopTapImage == null) {
                                                    this.auth.showToast('Flue in Loft Image Image cannot be empty', 'danger');
                                                }
                                                else {
                                                    this.updateTable();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    updateTable() {
        this.auth.database.executeSql('update sitesurveypics set HaveData=? where JOBGUID=?', ['yes', this.data['JOBGUID']])
            .then((res) => { console.log('success sql BoilerImagge'); })
            .catch((e) => {
            console.log('error sql BoilerImagge');
        });
        const extras = {
            state: {
                data: this.data
            }
        };
        this.router.navigate(['sitesurveysign'], extras);
    }
};
SitesurveypicsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
SitesurveypicsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sitesurveypics',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveypics_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sitesurveypics_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SitesurveypicsPage);



/***/ }),

/***/ 89727:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sitesurveypics/sitesurveypics.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"font-size: 16px;\">Site Survay Report Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]=\"boiler\">\n    <ion-item lines=\"full\">\n      <p><b>Boiler Image - </b>Stand back and take a pic of the boiler</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg1('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg1('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"BoilerImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"BoilerImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Boiler_pipe_work\">\n    <ion-item lines=\"full\">\n      <p>Boiler_pipe_work Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg2('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg2('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"Boilerpipework != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"Boilerpipework\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Condensate_termination\">\n    <ion-item lines=\"full\">\n      <p>Condensate_termination Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg3('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg3('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"CondensateterminationImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"CondensateterminationImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Fuse_spur\">\n    <ion-item lines=\"full\">\n      <p>Fuse_spur Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg4('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg4('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"FusespurImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"FusespurImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Internal_flue\">\n    <ion-item lines=\"full\">\n      <p>Internal_flue Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg5('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg5('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"InternalflueImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"InternalflueImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"flueInLoft\">\n    <ion-item lines=\"full\">\n      <p>Flue In Loft</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg6('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg6('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"StopTapImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"StopTapImage\" />\n    </ion-card>\n  </div>\n\n\n  <div [hidden]=\"External_flue_terminal\">\n    <ion-item lines=\"full\">\n      <p>External_flue_terminal Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg7('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg7('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"ExternalflueterminalImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"ExternalflueterminalImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Airing_Cupboard_Cylinder\">\n    <ion-item lines=\"full\">\n      <p>Airing_Cupboard_Cylinder Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg8('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg8('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AiringCupboardCylinderImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AiringCupboardCylinderImage\" />\n    </ion-card>\n  </div>\n\n\n  <div [hidden]=\"STLI_Flag\">\n    <ion-item lines=\"full\">\n      <p>Stop Tap Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg9('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg9('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"STLI != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"STLI\" />\n    </ion-card>\n  </div>\n\n  \n\n  <div [hidden]=\"Drain_off_location_flag\">\n    <ion-item lines=\"full\">\n      <p>Drain Off Location Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg10('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg10('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"DrainOffLocationFlagImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"DrainOffLocationFlagImage\" />\n    </ion-card>\n  </div>\n\n\n  \n  <div [hidden]=\"GasMeterFlag\">\n    <ion-item lines=\"full\">\n      <p>Gas Meter</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg11('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg11('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"GasMeterImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"GasMeterImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 1 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg12('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg12('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalOne!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalOne\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 2 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg13('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg13('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalTwo!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalTwo\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 3 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg14('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg14('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalThree!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalThree\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 4 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg15('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg15('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalFour!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalFour\" />\n    </ion-card>\n  </div>\n\n \n  \n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\"SiteSurveyImage()\">Save & Next</ion-button>\n</ion-footer>");

/***/ }),

/***/ 84689:
/*!*********************************************************!*\
  !*** ./src/app/sitesurveypics/sitesurveypics.page.scss ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlc3VydmV5cGljcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_sitesurveypics_sitesurveypics_module_ts-es2015.js.map