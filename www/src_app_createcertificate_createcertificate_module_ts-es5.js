(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_createcertificate_createcertificate_module_ts"], {
    /***/
    41618:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "interval": function interval() {
          return (
            /* binding */
            _interval
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      25160);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      32606);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isNumeric */
      82867);

      function _interval() {
        var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;

        if (!(0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
          period = 0;
        }

        if (!scheduler || typeof scheduler.schedule !== 'function') {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
          subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
          }));
          return subscriber;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({
          subscriber: subscriber,
          counter: counter + 1,
          period: period
        }, period);
      }
      /***/

    },

    /***/
    6927:
    /*!***********************************************************************!*\
      !*** ./src/app/createcertificate/createcertificate-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreatecertificatePageRoutingModule": function CreatecertificatePageRoutingModule() {
          return (
            /* binding */
            _CreatecertificatePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _createcertificate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./createcertificate.page */
      50693);

      var routes = [{
        path: '',
        component: _createcertificate_page__WEBPACK_IMPORTED_MODULE_0__.CreatecertificatePage
      }];

      var _CreatecertificatePageRoutingModule = /*#__PURE__*/_createClass(function CreatecertificatePageRoutingModule() {
        _classCallCheck(this, CreatecertificatePageRoutingModule);
      });

      _CreatecertificatePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CreatecertificatePageRoutingModule);
      /***/
    },

    /***/
    88903:
    /*!***************************************************************!*\
      !*** ./src/app/createcertificate/createcertificate.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreatecertificatePageModule": function CreatecertificatePageModule() {
          return (
            /* binding */
            _CreatecertificatePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _createcertificate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./createcertificate-routing.module */
      6927);
      /* harmony import */


      var _createcertificate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./createcertificate.page */
      50693);

      var _CreatecertificatePageModule = /*#__PURE__*/_createClass(function CreatecertificatePageModule() {
        _classCallCheck(this, CreatecertificatePageModule);
      });

      _CreatecertificatePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _createcertificate_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatecertificatePageRoutingModule],
        declarations: [_createcertificate_page__WEBPACK_IMPORTED_MODULE_1__.CreatecertificatePage]
      })], _CreatecertificatePageModule);
      /***/
    },

    /***/
    50693:
    /*!*************************************************************!*\
      !*** ./src/app/createcertificate/createcertificate.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreatecertificatePage": function CreatecertificatePage() {
          return (
            /* binding */
            _CreatecertificatePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_createcertificate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./createcertificate.page.html */
      17562);
      /* harmony import */


      var _createcertificate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./createcertificate.page.scss */
      58349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      41618);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);

      var _CreatecertificatePage = /*#__PURE__*/function () {
        function CreatecertificatePage(auth, router, route, alertCtrl) {
          _classCallCheck(this, CreatecertificatePage);

          this.auth = auth;
          this.router = router;
          this.route = route;
          this.alertCtrl = alertCtrl;
          this.addedApplainces = [];
          this.hideNewApplianceBtn = false;
          this.NextButton = true;
        }

        _createClass(CreatecertificatePage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.updateSubscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getdata();
            this.updateSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(2000).subscribe(function (val) {
              _this.getapplianceList();
            });
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this2 = this;

            this.route.params.subscribe(function (params) {
              if (_this2.router.getCurrentNavigation().extras.state) {
                _this2.data = _this2.router.getCurrentNavigation().extras.state.data;
                console.log('## data createcertificate ' + _this2.data['JOBGUID']);

                _this2.getapplianceList();
              }
            });
          }
        }, {
          key: "getapplianceList",
          value: function getapplianceList() {
            var _this3 = this;

            // this.addedApplainces = [];
            this.auth.database.executeSql('select * from newappliance where JOBGUID=?', [this.data['JOBGUID']]).then(function (res) {
              console.log('### NEW APPp ' + ' ' + ' ' + JSON.stringify(res.rows.length));
              res.rows.length >= 1 ? _this3.NextButton = false : _this3.NextButton = true;

              for (var i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
                if (parseInt(JSON.stringify(res.rows.length)) >= 4) {
                  _this3.hideNewApplianceBtn = true;
                }

                if (res.rows.item(i)['MakeAnswer'] == '' || res.rows.item(i)['MakeAnswer'] == null || res.rows.item(i)['MakeAnswer'] == undefined) {
                  _this3.addedApplainces[i] = {
                    name: res.rows.item(i)['Make'],
                    no: i + 1,
                    sno: res.rows.item(i)['SerialNo']
                  };
                } else {
                  _this3.addedApplainces[i] = {
                    name: res.rows.item(i)['MakeAnswer'],
                    no: i + 1,
                    sno: res.rows.item(i)['SerialNo']
                  };
                }
              }
            })["catch"](function (e) {
              console.log('### NEW APP ERROR ' + JSON.stringify(e));
            });
          }
        }, {
          key: "applianceDetailsClick",
          value: function applianceDetailsClick() {
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['appliancedetails'], navigationExtras);
            this.updateSubscription.unsubscribe();
          }
        }, {
          key: "applianceNewClick",
          value: function applianceNewClick() {
            var navigationExtras = {
              state: {
                data: this.data
              }
            }; //this.router.navigate(['newappliance'],navigationExtras);

            this.router.navigate(['newappliance'], navigationExtras);
          }
        }, {
          key: "appliancedataUpdate",
          value: function appliancedataUpdate(name, sno) {
            var navigationExtras = {
              state: {
                data: {
                  'JOBGUID': this.data['JOBGUID'],
                  'AppName': name,
                  'id': sno
                }
              }
            }; //this.router.navigate(['editappliance'],navigationExtras);

            this.router.navigate(['nwapp'], navigationExtras);
          }
        }, {
          key: "deleteAppliance",
          value: function deleteAppliance(sno, no) {
            var _this4 = this;

            this.auth.database.executeSql('delete from newappliance where SerialNo=?', [sno]).then(function (res) {
              // this.getapplianceList();
              _this4.addedApplainces = _this4.addedApplainces.filter(function (item) {
                return item.no !== no;
              });
              _this4.addedApplainces.length < 1 ? _this4.NextButton = true : _this4.NextButton = false;
            });
          }
        }]);

        return CreatecertificatePage;
      }();

      _CreatecertificatePage.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }];
      };

      _CreatecertificatePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-createcertificate',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_createcertificate_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_createcertificate_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CreatecertificatePage);
      /***/
    },

    /***/
    17562:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/createcertificate/createcertificate.page.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"space\"></div>\n  <ion-item lines=\"none\">\n    <ion-button  class=\"roundbutton1\" color=\"secondary\" shape=\"round\" [disabled]=\"hideNewApplianceBtn\" (click)=\"applianceNewClick()\">Add new appliance</ion-button>\n  </ion-item>\n  <p class=\"ion-text-center\" [hidden]=\"!hideNewApplianceBtn\" > Cannot Add More Than 4 Appliance. </p>\n\n  <ion-card class=\"addedApp\" *ngFor='let appliance of addedApplainces; let i = index'>\n    <ion-list>\n      <ion-item lines='none'>\n        <ion-icon name=\"trash\" slot=\"end\" (click)=\"deleteAppliance(appliance.sno, appliance.no)\"></ion-icon>\n        <ion-icon name=\"create\" slot=\"end\" (click)=\"appliancedataUpdate(appliance.name,appliance.sno)\"></ion-icon>\n        <ion-label>\n          <h2>{{appliance.no}} - &nbsp; {{appliance.name | uppercase}}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n\n  </ion-card>\n\n  <div class=\"icon_container\">\n    <ion-icon size=\"large\" name=\"refresh-circle\" (click)=\"reload()\"></ion-icon>\n  </div>\n  \n</ion-content>\n\n\n<!-- <ion-item lines=\"none\">\n  <ion-button color=\"secondary\" shape=\"round\" (click)=\"applianceDetailsClick()\">Appliance Details</ion-button>\n</ion-item> -->\n\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"applianceDetailsClick()\" [disabled]=\"NextButton\">Next</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    58349:
    /*!***************************************************************!*\
      !*** ./src/app/createcertificate/createcertificate.page.scss ***!
      \***************************************************************/

    /***/
    function _(module) {
      module.exports = ".space {\n  margin-top: 3%;\n}\n\n.roundbutton1 {\n  width: 100%;\n  height: 40px;\n  text-transform: capitalize;\n  font-size: large;\n}\n\np {\n  color: #c4280d;\n  text-indent: 30px;\n  align-self: centre;\n}\n\n.icon_container, .icon_container2 {\n  text-align: center;\n  height: 100px;\n}\n\n.icon_container > ion-icon, .icon_container2 > ion-icon {\n  position: relative;\n  top: calc(50% - 10px);\n  /* 50% - 3/4 of icon height */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZWNlcnRpZmljYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw2QkFBQTtBQUF6QiIsImZpbGUiOiJjcmVhdGVjZXJ0aWZpY2F0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2V7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5yb3VuZGJ1dHRvbjF7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5wIHtcbiAgICBjb2xvcjogcmdiKDE5NiwgNDAsIDEzKTtcbiAgICB0ZXh0LWluZGVudDogMzBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50cmU7XG4gICAgXG4gIH1cblxuXG4uaWNvbl9jb250YWluZXIsIC5pY29uX2NvbnRhaW5lcjIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDoxMDBweDtcbn1cblxuLmljb25fY29udGFpbmVyID4gaW9uLWljb24sIC5pY29uX2NvbnRhaW5lcjIgPiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7IC8qIDUwJSAtIDMvNCBvZiBpY29uIGhlaWdodCAqL1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_createcertificate_createcertificate_module_ts-es5.js.map