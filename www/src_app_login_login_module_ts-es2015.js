"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_login_login_module_ts"],{

/***/ 61354:
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": function() { return /* binding */ ButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./button.component.html */ 92352);
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component.scss */ 455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let ButtonComponent = class ButtonComponent {
};
ButtonComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-button',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonComponent);



/***/ }),

/***/ 80772:
/*!*****************************************************************!*\
  !*** ./src/app/components/icon-button/icon-button.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButtonComponent": function() { return /* binding */ IconButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_icon_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./icon-button.component.html */ 47812);
/* harmony import */ var _icon_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-button.component.scss */ 21695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let IconButtonComponent = class IconButtonComponent {
};
IconButtonComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IconButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-icon-button',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_icon_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_icon_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IconButtonComponent);



/***/ }),

/***/ 52187:
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": function() { return /* binding */ InputComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input.component.html */ 97442);
/* harmony import */ var _input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.scss */ 27352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let InputComponent = class InputComponent {
    constructor() {
        this.type = 'text'; // set default type be text
    }
    onBlur(event) {
        const value = event.target.value;
        console.log("Danish" + value);
        if (!value) {
            this.focused = false;
            this.error = true;
        }
        else {
            this.error = false;
        }
    }
};
InputComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_input_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputComponent);



/***/ }),

/***/ 30881:
/*!*********************************************!*\
  !*** ./src/app/components/shared.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/input.component */ 52187);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.component */ 61354);
/* harmony import */ var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-button/icon-button.component */ 80772);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule],
        exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent],
    })
], SharedModule);



/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared.module */ 30881);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 59006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 64967);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 33293);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes.service */ 97324);













let LoginPage = class LoginPage {
    constructor(storage, androidPermission, navCtrl, auth, router, route, platform, splashscreen, iab, themeService) {
        this.storage = storage;
        this.androidPermission = androidPermission;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.platform = platform;
        this.splashscreen = splashscreen;
        this.iab = iab;
        this.themeService = themeService;
        this.devcolor = "#a71d31";
        route.params.subscribe((val) => {
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.storage.get("debugmode").then((res) => {
            if (res == "true") {
                this.themeService.enableDebugMode();
            }
            else {
                this.themeService.enableLiveMode();
            }
        });
        this.platform.ready().then((da) => {
            this.auth.checkNetwork();
            this.storage
                .get("updateFirmware").then((res) => {
                console.log("Danish" + res);
                if (res == "true") {
                    console.log("Danish" + res);
                    this.themeService.enableDebugMode();
                }
                else {
                    this.themeService.enableLiveMode();
                }
            });
        });
        this.storage.get('isChecked').then(res => {
            this.isChecked = res;
            if (res) {
                this.storage.get('username').then(un => {
                    this.storage.get('password').then(pw => {
                        console.log(un + " and " + pw);
                        this.username = un;
                        this.password = pw;
                        // this.loginService(un,pw);
                    });
                });
            }
            else {
                this.username = "";
                this.password = "";
            }
        });
    }
    onBlur(event) {
        const value = event.target.value;
        this.username = value;
        if (!value) {
            this.focused = false;
            this.error = true;
        }
        else {
            this.error = false;
        }
    }
    onBlur2(event) {
        const value = event.target.value;
        this.password = value;
        if (!value) {
            this.focused2 = false;
            this.error2 = true;
        }
        else {
            this.error2 = false;
        }
    }
    //Check if application having GPS access permission
    checkWritePermission() {
        this.androidPermission
            .checkPermission(this.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
            }
            else {
                //If not having permission ask for permission
                this.androidPermission
                    .requestPermission(this.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE)
                    .then(() => {
                    // call method to turn on GPS
                }, (error) => {
                    //Show alert if user click on 'No Thanks'
                    alert("requestPermission Error requesting file read permissions " +
                        error);
                });
            }
        }, (err) => {
            alert(err);
        });
    }
    gotoRegister() {
        const browser = this.iab.create("https://www.homeresponse360.co.uk/app-signup/");
    }
    emptyjobslist() {
        return new Promise((resolve, reject) => {
            this.auth.database
                .executeSql("delete from jobslist", [])
                .then((res) => {
                resolve("jobslist resolved");
            })
                .catch((e) => { });
        });
    }
    onSubmit(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let a = yield this.auth.checkNetwork();
            if (a.connected) {
                if (this.username == "" || this.username == null || this.username == undefined) {
                    this.auth.showToast("Username cannot be empty.", 'danger');
                }
                else {
                    if (this.password == "" || this.password == null || this.password == undefined) {
                        this.auth.showToast("Password cannot be empty.", 'danger');
                    }
                    else {
                        this.loginService(this.username, this.password);
                        this.storage.set('username', this.username);
                        this.storage.set('password', this.password);
                    }
                }
            }
            else {
                this.auth.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
            }
        });
    }
    loginService(username, password) {
        this.auth.firmwareUpdateCheck().then(res => {
            console.log("Danish " + res);
            this.auth.presentLoading("Please wait while we sign you in.");
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
                .set("username", username)
                .set("password", password);
            this.auth.httpSend("Service_Login", params, "post").subscribe((resLogin) => {
                console.log();
                //resLogin = "18648a22-5f02-41bf-a171-d2873adc9c0b";
                if (resLogin["Msg"] == "Failed" || resLogin["Msg"] == "null") {
                    this.auth.dismissLoading();
                    this.auth.alert("The Username or Password that you've entered is either incorrect or misspelled. Please try again.", "Invalid Credentials");
                }
                else {
                    //login success
                    this.storage.set('datasyncstatus', 'novice');
                    this.storage.set("enggid", resLogin["Msg"]);
                    this.gotoTabs(resLogin["Msg"]);
                    // this.storage.get('loginCount').then((res)=>{
                    //     console.log("plan login count before login page "+res);
                    //     if (res == null || res == undefined || res == "null") {
                    //       this.storage.set('datasyncstatus','novice');
                    //       this.storage.set("loginCount", 1).then(()=>{
                    //         this.gotoTabs(resLogin["Msg"]);
                    //       });
                    //     } else {
                    //       this.storage.set('datasyncstatus','mature');
                    //       this.storage.set("loginCount", (res+1)).then((res)=>{
                    //         this.gotoTabs(resLogin["Msg"]);
                    //       });
                    //     }
                    // }
                    // ).catch(e=>{
                    //   this.auth.dismissLoading();
                    //   this.auth.showToast("unable to fetch previous login please clear data/cache and login again")
                    // })
                    if (this.isChecked) {
                        this.storage.set('isChecked', this.isChecked);
                    }
                    else {
                        this.storage.set('isChecked', this.isChecked);
                    }
                }
            }, (err) => {
                setTimeout(() => {
                    this.auth.dismissLoading();
                }, 300);
                this.auth.alert(err.message, err.name);
            });
        });
    }
    gotoTabs(res) {
        // this.storage.set('datasyncstatus','novice');
        this.storage.set("loginStatus", "true");
        this.auth.createEngineerInfoTable();
        this.createAllTables()
            .then((res) => {
            this.auth.dismissLoading();
            this.router.navigate(["tabs"]);
        }).catch((e) => {
            this.auth.dismissLoading();
            this.auth.alert("Something went wrong. Try later after clearing data/cache" + e);
        });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams()
            .set("enggid", res);
        this.auth.httpSend("Service_Engineerandcompanydetailsforpdfcreation", params, "post").subscribe(res => {
            this.auth.database.executeSql('select * from EngInfo', []).then(succ => {
                console.log("sign length" + succ.rows.length);
                if (succ.rows.length > 0) {
                    this.auth.database.executeSql('update EngInfo set GasSafeNumber =?, EngCertName=?, GasSafeLicenseNumber=?, CompanyAddress=?, SubContractor=?, TypeName=?', [res['GasSafeNumber'], res['EngCertName'], res['GasSafeLicenseNumber'], res['CompanyAddress'], res['SubContractor'], res['TypeName']]);
                }
                else {
                    this.auth.database.executeSql('insert into EngInfo (GasSafeNumber, EngCertName, GasSafeLicenseNumber, CompanyAddress, SubContractor, TypeName, Sign) values(?,?,?,?,?,?,?)', [res['GasSafeNumber'], res['EngCertName'], res['GasSafeLicenseNumber'], res['CompanyAddress'], res['SubContractor'], res['TypeName'], " "]);
                }
            });
        });
    }
    createAllTables() {
        return new Promise((resolve, reject) => {
            this.auth.createJobTable().then((res) => {
                this.auth
                    .createOnRouteTable()
                    .then((res) => {
                    this.auth
                        .createArrivedTable()
                        .then((res) => {
                        this.auth
                            .createJobsStatusTable()
                            .then((res) => {
                            this.auth
                                .createAbandonTable()
                                .then((res) => {
                                this.auth
                                    .createAuthorizationTable()
                                    .then((res) => {
                                    this.auth
                                        .createCompleteClaimTable()
                                        .then((res) => {
                                        this.auth
                                            .createCompleteServiceTable()
                                            .then((res) => {
                                            this.auth
                                                .newApplianceTable()
                                                .then((res) => {
                                                this.auth
                                                    .certificateTable()
                                                    .then((res) => {
                                                    this.auth
                                                        .boilerInstallTable()
                                                        .then((res) => {
                                                        this.auth
                                                            .boilerInstallPicsTable()
                                                            .then((res) => {
                                                            this.auth
                                                                .boilerInstallSignTable()
                                                                .then((res) => {
                                                                this.auth
                                                                    .completedjobsTable()
                                                                    .then((res) => {
                                                                    this.auth
                                                                        .enggPicsTable()
                                                                        .then((res) => {
                                                                        this.auth
                                                                            .siteSurveyTable()
                                                                            .then((res) => {
                                                                            this.auth
                                                                                .siteSurveyPics()
                                                                                .then((res) => {
                                                                                this.auth
                                                                                    .siteSurveySign()
                                                                                    .then((res) => {
                                                                                    this.auth.createmakemodel()
                                                                                        .then((res) => {
                                                                                        this.auth.createErrorLogTable().then(res => {
                                                                                            this.auth.createFirmwareUrl().then(res => {
                                                                                                resolve("All TABLES CREATED");
                                                                                            }).catch(e => {
                                                                                                reject(JSON.stringify(e));
                                                                                            });
                                                                                        }).catch(e => {
                                                                                            reject(JSON.stringify(e));
                                                                                        });
                                                                                    })
                                                                                        .catch((e) => {
                                                                                        reject(JSON.stringify(e));
                                                                                    });
                                                                                })
                                                                                    .catch((e) => {
                                                                                    reject(JSON.stringify(e));
                                                                                });
                                                                            })
                                                                                .catch((e) => {
                                                                                reject(JSON.stringify(e));
                                                                            });
                                                                        })
                                                                            .catch((e) => {
                                                                            reject(JSON.stringify(e));
                                                                        });
                                                                    })
                                                                        .catch((e) => {
                                                                        reject(JSON.stringify(e));
                                                                    });
                                                                })
                                                                    .catch((e) => {
                                                                    reject(JSON.stringify(e));
                                                                });
                                                            })
                                                                .catch((e) => {
                                                                reject(JSON.stringify(e));
                                                            });
                                                        })
                                                            .catch((e) => {
                                                            reject(JSON.stringify(e));
                                                        });
                                                    })
                                                        .catch((e) => {
                                                        reject(JSON.stringify(e));
                                                    });
                                                })
                                                    .catch((e) => {
                                                    reject(JSON.stringify(e));
                                                });
                                            })
                                                .catch((e) => {
                                                reject(JSON.stringify(e));
                                            });
                                        })
                                            .catch((e) => {
                                            reject(JSON.stringify(e));
                                        });
                                    })
                                        .catch((e) => {
                                        reject(JSON.stringify(e));
                                    });
                                })
                                    .catch((e) => {
                                    reject(JSON.stringify(e));
                                });
                            })
                                .catch((e) => {
                                reject(JSON.stringify(e));
                            });
                        })
                            .catch((e) => {
                            reject(JSON.stringify(e));
                        });
                    })
                        .catch((e) => {
                        reject(JSON.stringify(e));
                    });
                })
                    .catch((e) => {
                    reject(JSON.stringify(e));
                });
            }, (err) => {
                reject(JSON.stringify(err));
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser },
    { type: _themes_service__WEBPACK_IMPORTED_MODULE_6__.ThemesService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-login",
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 92352:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/button/button.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand='block'>\n  {{label}}\n</ion-button>");

/***/ }),

/***/ 47812:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/icon-button/icon-button.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand='block'>\n  <ion-icon [name]='icon'></ion-icon> {{label}}\n</ion-button>");

/***/ }),

/***/ 97442:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/input/input.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-field\">\n  <label [ngClass]=\"focused ? 'label-focused' : ''\">Enter {{label}}</label>\n  <input [type]=\"type\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\" />\n</div>\n<span>&nbsp;</span> <span *ngIf ='error'> {{label}} cannot be empty</span>\n\n");

/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"loginbg\">\n    <table>\n      <tr>\n        <td>\n          <ion-card>\n            <div class=\"image\">\n              <img class=\"picture\" src=\"../../assets/images/logo.png\" />\n            </div>\n            <div class=\"header\">\n              <h2>\n                Welcome to <br />\n                HomeResponse360\n              </h2>\n            </div>\n  \n            <ion-card-content>\n              <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"form-field\">\n                  <label [ngClass]=\"focused ? 'label-focused' : ''\"\n                    >Username</label\n                  >\n                  <input\n                    name=\"username\"\n                    [ngClass]=\"focused ? 'input-focused' : ''\"\n                    type=\"text\"\n                    (focus)=\"focused = true\"\n                    (blur)=\"onBlur($event)\"\n                    [(ngModel)]=\"username\"\n                  />\n                </div>\n                <!-- <span>&nbsp;</span> <span *ngIf ='error'> Username cannot be empty</span> -->\n  \n                <div class=\"form-field\">\n                  <label [ngClass]=\"focused2 ? 'label-focused' : ''\"\n                    >Password</label\n                  >\n                  <input\n                    name=\"password\"\n                    [ngClass]=\"focused2 ? 'input-focused' : ''\"\n                    type=\"password\"\n                    (focus)=\"focused2 = true\"\n                    (blur)=\"onBlur2($event)\"\n                    [(ngModel)]=\"password\"\n                  />\n                </div>\n                <div>\n                  <ion-item lines=\"none\">\n                    <ion-checkbox name=\"cb\" color=\"secondary\" slot=\"start\" [(ngModel)]=\"isChecked\" (click)=\"checkCheckbox()\"></ion-checkbox>\n                    <ion-label>Remember me</ion-label>\n                  </ion-item>\n                </div>\n  \n                <div>\n                  <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\n                    Sign In\n                  </ion-button>\n                </div>\n  \n                <h5>\n                  Don't Have an Account?<br /><label (click)=\"gotoRegister()\"\n                    ><b>Register</b></label\n                  >\n                </h5>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </td>\n      </tr>\n    </table>\n  </ion-content>\n  ");

/***/ }),

/***/ 455:
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "ion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  height: 48px;\n  font-size: 1rem;\n  color: #fff;\n  margin-bottom: 0.5rem;\n  text-transform: none;\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsdUJBQUE7QUFDRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 21695:
/*!*******************************************************************!*\
  !*** ./src/app/components/icon-button/icon-button.component.scss ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = "ion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: #ebeef4;\n  height: 48px;\n  font-size: 1rem;\n  color: #123681;\n  margin-bottom: 0.7rem;\n  text-transform: none;\n  text-transform: initial;\n}\nion-button ion-icon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLHVCQUFBO0FBQUY7QUFFRTtFQUNFLG9CQUFBO0FBQUoiLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ViZWVmNDtcblxuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxMjM2ODE7XG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG5cbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 27352:
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = ".form-field {\n  position: relative;\n  margin-bottom: 0.2rem;\n  height: 50px;\n}\n.form-field label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n}\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n.form-field input:focus {\n  border-color: #0f75bc;\n}\n.form-field .label-focused {\n  top: -0.4rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\nspan {\n  display: inline-block;\n  color: red;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRko7QUFPQTtFQUVFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBTEYiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBoZWlnaHQ6IDUwcHg7XG4gXG4gIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGNvbG9yOiAjOTM5ZmFiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3ZWJlZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6ICMxNzFjMjU7XG4gIH1cblxuICBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzBmNzViYztcbiAgfVxuXG4gIC5sYWJlbC1mb2N1c2VkIHtcbiAgICB0b3A6IC0wLjRyZW07XG4gICAgbGVmdDogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG59XG5cbnNwYW57XG4gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufSJdfQ== */";

/***/ }),

/***/ 59006:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(module) {

module.exports = ":host ion-content {\n  --background: hsl(205, 85%, 15%) linear-gradient(100deg, hsl(205, 85%, 15%), hsl(195, 77%, 40%)) !important ;\n}\n\nion-card {\n  margin-left: 5%;\n  margin-right: 5%;\n  border-radius: 15px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.image {\n  margin-top: 1.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n.tdclass {\n  vertical-align: middle;\n}\n\n.card-content-md h2 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.card-content-md h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 0px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\nion-button {\n  font-size: 16px;\n  height: 40px;\n  text-transform: uppercase;\n  --border-radius: 10px;\n  margin: 50px 0 20px 0;\n}\n\n.validator-error {\n  font-size: small;\n  color: red;\n}\n\np {\n  font-size: 14px;\n  margin-left: 5px;\n  color: red;\n}\n\nion-list {\n  padding-top: 14px;\n}\n\n.itemLeft {\n  border-right: 1px solid rgba(0, 0, 0, 0.72);\n  padding-right: 8px;\n  z-index: 20;\n  height: 85%;\n  padding-top: 10px;\n}\n\n.picture {\n  display: inline;\n  display: initial;\n  width: 120px;\n  height: 120px;\n}\n\n.itemLeft .imgSpan {\n  width: 35px;\n  float: left;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.dotIcon {\n  height: 10px;\n  width: 10px;\n  display: inline;\n  display: initial;\n}\n\n.notifyError {\n  color: red;\n}\n\ntable {\n  height: 100%;\n  width: 100%;\n}\n\nh5 {\n  text-align: center;\n}\n\nh2 {\n  font-family: \"Merriweather\", serif;\n  width: 100%;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  font-size: 28px;\n  font-weight: 500;\n  text-align: center;\n  color: #0E588C;\n}\n\nh3 {\n  color: #939fab;\n  font-weight: 600;\n}\n\nion-row {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLDRHQUFBO0FBRE47O0FBS0U7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUdBLGdEQUFBO0FBSEo7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVNFO0VBQ0Usc0JBQUE7QUFOSjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBUUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFMSjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFOSjs7QUFTRTtFQUNFLGlCQUFBO0FBTko7O0FBU0U7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUFBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0FBTko7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVFFO0VBQ0Usa0JBQUE7QUFMSjs7QUFTRTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5KOztBQWtCRTtFQUNFLGdCQUFBO0FBZkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIpIHJlcGVhdCAxMDAlIDEwMCU7XG4gICAgICAtLWJhY2tncm91bmQ6IGhzbCgyMDUsIDg1JSwgMTUlKSBsaW5lYXItZ3JhZGllbnQoMTAwZGVnLCBoc2woMjA1LCA4NSUsIDE1JSksIGhzbCgxOTUsIDc3JSwgNDAlKSkgIWltcG9ydGFudCA7XG4gICAgfVxuICB9XG4gXG4gIGlvbi1jYXJkIHtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB9XG4gIFxuICBcbiAgLmltYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAgXG4gIFxuICAudGRjbGFzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY2FyZC1jb250ZW50LW1kIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmNhcmQtY29udGVudC1tZCBoNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbiAgfVxuICBcbiAgLnZhbGlkYXRvci1lcnJvciB7XG4gICAgZm9udC1zaXplOnNtYWxsO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG5cbiAgcHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICB9XG4gIFxuICAuaXRlbUxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGhlaWdodDogODUlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIFxuICAucGljdHVyZSB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBcbiAgLml0ZW1MZWZ0IC5pbWdTcGFuIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLmxpc3QtbWQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICAuZG90SWNvbiB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbiAgXG4gIC5ub3RpZnlFcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBcbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwRTU4OEM7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBjb2xvcjogIzkzOWZhYjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiBcblxuICBcbiAgLy8gaW9uLWxhYmVse1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAvLyB9XG5cbiBcblxuICBpb24tcm93e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map