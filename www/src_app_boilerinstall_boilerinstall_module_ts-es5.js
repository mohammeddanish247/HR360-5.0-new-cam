(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_boilerinstall_boilerinstall_module_ts"], {
    /***/
    81554:
    /*!***************************************************************!*\
      !*** ./src/app/boilerinstall/boilerinstall-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallPageRoutingModule": function BoilerinstallPageRoutingModule() {
          return (
            /* binding */
            _BoilerinstallPageRoutingModule
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


      var _boilerinstall_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./boilerinstall.page */
      10480);

      var routes = [{
        path: '',
        component: _boilerinstall_page__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallPage
      }];

      var _BoilerinstallPageRoutingModule = /*#__PURE__*/_createClass(function BoilerinstallPageRoutingModule() {
        _classCallCheck(this, BoilerinstallPageRoutingModule);
      });

      _BoilerinstallPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BoilerinstallPageRoutingModule);
      /***/
    },

    /***/
    52310:
    /*!*******************************************************!*\
      !*** ./src/app/boilerinstall/boilerinstall.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallPageModule": function BoilerinstallPageModule() {
          return (
            /* binding */
            _BoilerinstallPageModule
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


      var _boilerinstall_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./boilerinstall-routing.module */
      81554);
      /* harmony import */


      var _boilerinstall_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./boilerinstall.page */
      10480);

      var _BoilerinstallPageModule = /*#__PURE__*/_createClass(function BoilerinstallPageModule() {
        _classCallCheck(this, BoilerinstallPageModule);
      });

      _BoilerinstallPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _boilerinstall_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallPageRoutingModule],
        declarations: [_boilerinstall_page__WEBPACK_IMPORTED_MODULE_1__.BoilerinstallPage]
      })], _BoilerinstallPageModule);
      /***/
    },

    /***/
    10480:
    /*!*****************************************************!*\
      !*** ./src/app/boilerinstall/boilerinstall.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallPage": function BoilerinstallPage() {
          return (
            /* binding */
            _BoilerinstallPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstall_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./boilerinstall.page.html */
      30082);
      /* harmony import */


      var _boilerinstall_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./boilerinstall.page.scss */
      88141);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      12314);

      var _BoilerinstallPage = /*#__PURE__*/function () {
        function BoilerinstallPage(router, route, auth, storage) {
          _classCallCheck(this, BoilerinstallPage);

          this.router = router;
          this.route = route;
          this.auth = auth;
          this.storage = storage; ///// boilerinstallation

          this.NewBoilerLocationSelect = '';
          this.BoilerNewDetails = '';
          this.FlueSelect = '';
          this.FlueextensionsSelect = '';
          this.StandOffKitSelect = '';
          this.FourtyfivedegreeelbowSelect = '';
          this.NinetydegreeelbowSelect = '';
          this.GasRunSelect = '';
          this.GasRunNewDetails = '';
          this.CondensateGasSelect = '';
          this.CondensateGasNewDetails = '';
        }

        _createClass(BoilerinstallPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.BoilerNew = true;
            this.GasRunNew = true;
            this.CondensateGasNew = true;
            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;

                _this.auth.getLocation();

                _this.auth.database.executeSql('select * from boilerinstallation where JOBGUID=?', [_this.data['JOBGUID']]).then(function (res) {
                  console.log('RESPONSE' + JSON.stringify(res.rows.item(0)['BLocation']) + " All Data" + JSON.stringify(res));
                  _this.NewBoilerLocationSelect = res.rows.item(0)['BLocation']; // this.NewBoilerLocationClick();

                  _this.BoilerNewDetails = res.rows.item(0)['BLocation_Desc'];
                  _this.FlueSelect = res.rows.item(0)['BFlue'];
                  _this.FlueextensionsSelect = res.rows.item(0)['FlueExtension'];
                  _this.StandOffKitSelect = res.rows.item(0)['StandOffKit'];
                  _this.FourtyfivedegreeelbowSelect = res.rows.item(0)['D45Elbow'];
                  _this.NinetydegreeelbowSelect = res.rows.item(0)['D90Elbow'];
                  _this.GasRunSelect = res.rows.item(0)['GasRun'];
                  _this.GasRunNewDetails = res.rows.item(0)['GasRun_Desc'];
                  _this.CondensateGasSelect = res.rows.item(0)['CGasRun'];
                  _this.CondensateGasNewDetails = res.rows.item(0)['CGasRun_Desc'];
                })["catch"](function (e) {
                  console.log('ERROR getting data from boilerinstallation table' + JSON.stringify(e));
                });
              }
            });
          }
        }, {
          key: "NewBoilerLocationClick",
          value: function NewBoilerLocationClick() {
            if (this.NewBoilerLocationSelect == 'New') {
              this.BoilerNew = false;
            } else {
              this.BoilerNew = true;
            }
          }
        }, {
          key: "GasRunClick",
          value: function GasRunClick() {
            if (this.GasRunSelect == 'New') {
              this.GasRunNew = false;
            } else {
              this.GasRunNew = true;
            }
          }
        }, {
          key: "CondensateGasClick",
          value: function CondensateGasClick() {
            if (this.CondensateGasSelect == 'New') {
              this.CondensateGasNew = false;
            } else {
              this.CondensateGasNew = true;
            }
          }
        }, {
          key: "ValidateBInsForm",
          value: function ValidateBInsForm() {
            var _this2 = this;

            if (this.FlueSelect == 'Vertical') {
              this.storage.set('fluinloft_B', "false");
            } else {
              this.storage.set('fluinloft_B', "true");
            }

            if (this.NewBoilerLocationSelect == '' || this.NewBoilerLocationSelect == null) {
              this.auth.showToast('New Boiler Location can not be empty.', 'danger');
            } else {
              if (this.FlueSelect == '' || this.FlueSelect == null) {
                this.auth.showToast('FlueSelect Location can not be empty.', 'danger');
              } else {
                if (this.FlueextensionsSelect == '' || this.FlueextensionsSelect == null) {
                  this.auth.showToast('FlueextensionsSelect Location can not be empty.', 'danger');
                } else {
                  if (this.StandOffKitSelect == '' || this.StandOffKitSelect == null) {
                    this.auth.showToast('StandOffKitSelect Location can not be empty.', 'danger');
                  } else {
                    if (this.FourtyfivedegreeelbowSelect == '' || this.FourtyfivedegreeelbowSelect == null) {
                      this.auth.showToast('Fourtyfivedegreeelbow  can not be empty.', 'danger');
                    } else {
                      if (this.NinetydegreeelbowSelect == '' || this.NinetydegreeelbowSelect == null) {
                        this.auth.showToast('NinetydegreeelbowSelect  can not be empty.', 'danger');
                      } else {
                        if (this.GasRunSelect == '' || this.GasRunSelect == null) {
                          this.auth.showToast('GasRunSelect  can not be empty.', 'danger');
                        } else {
                          if (this.CondensateGasSelect == '' || this.CondensateGasSelect == null) {
                            this.auth.showToast('CondensateGasSelect  can not be empty.', 'danger');
                          } else {
                            this.auth.database.executeSql('update boilerinstallation set BLocation=?, BLocation_Desc=?,BFlue=?,FlueExtension=?,StandOffKit=?,D45Elbow=?,D90Elbow=?,GasRun=?,GasRun_Desc=?,CGasRun=?,CGasRun_Desc=?,ActionDt=?,Latitude=?,Longitude=? where JOBGUID=?', [this.NewBoilerLocationSelect, this.BoilerNewDetails, this.FlueSelect, this.FlueextensionsSelect, this.StandOffKitSelect, this.FourtyfivedegreeelbowSelect, this.NinetydegreeelbowSelect, this.GasRunSelect, this.GasRunNewDetails, this.CondensateGasSelect, this.CondensateGasNewDetails, this.auth.getdateformatV2(), this.auth.lat, this.auth["long"], this.data['JOBGUID']]).then(function (res) {
                              _this2.auth.database.executeSql("update  boilerinstallation set  HaveData=? where JOBGUID=? ", ['yes', _this2.data['JOBGUID']]).then(function (res) {
                                var navigationExtras = {
                                  state: {
                                    data: _this2.data
                                  }
                                };

                                _this2.router.navigate(['boilerinstallnext'], navigationExtras);
                              })["catch"](function (e) {
                                console.log('cathc status boiler install ' + JSON.stringify(e));
                              });
                            })["catch"](function (e) {
                              console.log('ERROR update boilerinstall table');

                              _this2.auth.dismissLoading();
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
        }]);

        return BoilerinstallPage;
      }();

      _BoilerinstallPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
        }];
      };

      _BoilerinstallPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-boilerinstall',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstall_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_boilerinstall_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BoilerinstallPage);
      /***/
    },

    /***/
    30082:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/boilerinstall/boilerinstall.page.html ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Boiler Installation Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>New Boiler Location</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"NewBoilerLocationSelect\" (ionChange)=\"NewBoilerLocationClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    \n    <ion-item [hidden]=\"BoilerNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"BoilerNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Flue</ion-label>\n      <ion-select [(ngModel)]=\"FlueSelect\">\n        <ion-select-option value=\"Horizontal\">Horizontal</ion-select-option>\n        <ion-select-option value=\"Vertical Pitched Roof\">Vertical Pitched Roof</ion-select-option>\n        <ion-select-option value=\"Vertical Flat Roof\">Vertical Flat Roof</ion-select-option>\n        <ion-select-option value=\"Vertical\">Vertical</ion-select-option>\n        <ion-select-option value=\"Rear Entry\">Rear Entry</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Flue extensions required</ion-label>\n      <ion-select [(ngModel)]=\"FlueextensionsSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stand Off Kit Required</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"StandOffKitSelect\">\n        <ion-select-option value=\"YES\">Yes</ion-select-option>\n        <ion-select-option value=\"NO\">No</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>45 degree elbow required</ion-label>\n      <ion-select [(ngModel)]=\"FourtyfivedegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>90 degree elbow required</ion-label>\n      <ion-select [(ngModel)]=\"NinetydegreeelbowSelect\">\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"GasRunSelect\" (ionChange)=\"GasRunClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"GasRunNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"GasRunNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Condensate Gas Run</ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"CondensateGasSelect\" (ionChange)=\"CondensateGasClick()\">\n        <ion-select-option value=\"Existing\">Existing</ion-select-option>\n        <ion-select-option value=\"New\">New</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]=\"CondensateGasNew\">\n      <ion-textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"CondensateGasNewDetails\" placeholder=\"Write details here...\">\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\"ValidateBInsForm()\"> Save & Next  </ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    88141:
    /*!*******************************************************!*\
      !*** ./src/app/boilerinstall/boilerinstall.page.scss ***!
      \*******************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2lsZXJpbnN0YWxsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_boilerinstall_boilerinstall_module_ts-es5.js.map