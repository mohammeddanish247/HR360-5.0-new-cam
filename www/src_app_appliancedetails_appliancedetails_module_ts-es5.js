(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_appliancedetails_appliancedetails_module_ts"], {
    /***/
    24386:
    /*!*********************************************************************!*\
      !*** ./src/app/appliancedetails/appliancedetails-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppliancedetailsPageRoutingModule": function AppliancedetailsPageRoutingModule() {
          return (
            /* binding */
            _AppliancedetailsPageRoutingModule
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


      var _appliancedetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appliancedetails.page */
      83508);

      var routes = [{
        path: '',
        component: _appliancedetails_page__WEBPACK_IMPORTED_MODULE_0__.AppliancedetailsPage
      }];

      var _AppliancedetailsPageRoutingModule = /*#__PURE__*/_createClass(function AppliancedetailsPageRoutingModule() {
        _classCallCheck(this, AppliancedetailsPageRoutingModule);
      });

      _AppliancedetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppliancedetailsPageRoutingModule);
      /***/
    },

    /***/
    5691:
    /*!*************************************************************!*\
      !*** ./src/app/appliancedetails/appliancedetails.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppliancedetailsPageModule": function AppliancedetailsPageModule() {
          return (
            /* binding */
            _AppliancedetailsPageModule
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


      var _appliancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appliancedetails-routing.module */
      24386);
      /* harmony import */


      var _appliancedetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./appliancedetails.page */
      83508);

      var _AppliancedetailsPageModule = /*#__PURE__*/_createClass(function AppliancedetailsPageModule() {
        _classCallCheck(this, AppliancedetailsPageModule);
      });

      _AppliancedetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _appliancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppliancedetailsPageRoutingModule],
        declarations: [_appliancedetails_page__WEBPACK_IMPORTED_MODULE_1__.AppliancedetailsPage]
      })], _AppliancedetailsPageModule);
      /***/
    },

    /***/
    83508:
    /*!***********************************************************!*\
      !*** ./src/app/appliancedetails/appliancedetails.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppliancedetailsPage": function AppliancedetailsPage() {
          return (
            /* binding */
            _AppliancedetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_appliancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./appliancedetails.page.html */
      26336);
      /* harmony import */


      var _appliancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./appliancedetails.page.scss */
      82445);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
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

      var _AppliancedetailsPage = /*#__PURE__*/function () {
        function AppliancedetailsPage(router, route, auth, datePipe) {
          _classCallCheck(this, AppliancedetailsPage);

          this.router = router;
          this.route = route;
          this.auth = auth;
          this.datePipe = datePipe;
          this.Detailsworkcarriedout = ' ';
          this.appliancestestedNumber = ' ';
        }

        _createClass(AppliancedetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentyear = this.auth.getdateformatV2();
            this.currentyear = this.currentyear.split("/")[2];
            this.currentyear = parseInt(this.currentyear.split(" ")[0]);
            this.lastyear = this.currentyear + 10;
            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
              }

              _this.auth.getLocation();
            });
            this.auth.database.executeSql('select * from certificate where JOBGUID=?', [this.data['JOBGUID']]).then(function (res) {
              console.log("@@" + res.rows.item(0)['JOBGUID'] + "," + res.rows.item(0)['DetailsWork'] + "," + res.rows.item(0)['NoOfAppTested'] + "," + res.rows.item(0)['NextDueDt']);
              var inputDate = res.rows.item(0)['NextDueDt'];

              var _inputDate$split = inputDate.split(/[\s/:]+/),
                  _inputDate$split2 = _slicedToArray(_inputDate$split, 6),
                  dd = _inputDate$split2[0],
                  MM = _inputDate$split2[1],
                  yyyy = _inputDate$split2[2],
                  HH = _inputDate$split2[3],
                  mm = _inputDate$split2[4],
                  ss = _inputDate$split2[5]; // split the date string into components


              var isoDate = new Date("".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(HH, ":").concat(mm, ":").concat(ss)).toISOString(); //converting to ISO date formate

              _this.Detailsworkcarriedout = res.rows.item(0)['DetailsWork'];
              _this.appliancestestedNumber = res.rows.item(0)['NoOfAppTested'];
              _this.safetycheckDate = isoDate;
            })["catch"](function (e) {
              console.log("error getting saved certicate appliance Details :" + e);
            });
          }
        }, {
          key: "saveNext",
          value: function saveNext() {
            var _this2 = this;

            if (this.Detailsworkcarriedout == ' ' || this.Detailsworkcarriedout == undefined) {
              this.auth.showToast('Details of work carried out cannot be empty', 'danger');
            } else {
              if (this.appliancestestedNumber == ' ' || this.appliancestestedNumber == undefined) {
                this.auth.showToast('Number of appliances tested cannot be empty', 'danger');
              } else {
                if (parseInt(this.appliancestestedNumber) > 4) {
                  this.auth.showToast('Number of tested devices cannot be more than 4', 'danger');
                } else {
                  if (this.safetycheckDate == null) {
                    this.auth.showToast('Safety check date can not be empty.', 'danger');
                  } else {
                    console.log("before " + this.safetycheckDate);
                    var date = new Date(this.safetycheckDate);
                    var formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
                    console.log("after " + this.safetycheckDate); // this.auth.showToast(a);

                    this.auth.database.executeSql('update certificate set DetailsWork=?, NoOfAppTested=?, NextDueDt=? where JOBGUID=?', [this.Detailsworkcarriedout, this.appliancestestedNumber, formattedDate, this.data['JOBGUID']]).then(function (res) {
                      _this2.data['DetailsWork'] = _this2.Detailsworkcarriedout;
                      _this2.data['NoOfAppTested'] = _this2.appliancestestedNumber;
                      _this2.data['NextDueDt'] = _this2.safetycheckDate;
                      console.log(JSON.stringify(res));
                      var navigationExtras = {
                        state: {
                          data: _this2.data
                        }
                      };

                      _this2.router.navigate(['outcomes'], navigationExtras);
                    })["catch"](function (e) {
                      _this2.auth.showToast('Error Saving Data ' + e, 'danger');
                    });
                  }
                }
              }
            }
          }
        }, {
          key: "isDateFormatValid",
          value: function isDateFormatValid(dateString) {
            var pattern = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
            return pattern.test(dateString);
          }
        }]);

        return AppliancedetailsPage;
      }();

      _AppliancedetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe
        }];
      };

      _AppliancedetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-appliancedetails',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_appliancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_appliancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppliancedetailsPage);
      /***/
    },

    /***/
    26336:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/appliancedetails/appliancedetails.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Details of work carried out</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"Detailsworkcarriedout\" placeholder=\"Write details here...\" ></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Number of appliances tested</ion-label>\n    <ion-input type=\"number\" inputmode=\"numeric\" [(ngModel)]=\"appliancestestedNumber\"\n     required placeholder=\"appliances tested No.\"></ion-input>\n  </ion-item>\n    \n  \n\n  <ion-item>\n    <ion-label position=\"floating\">Next safety check due by</ion-label>\n    <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MM YYYY\" [min]=\"currentyear\" [max]=\"lastyear\"  [(ngModel)]=\"safetycheckDate\" #safetycheck=\"ngModel\" required placeholder=\"Tap here to enter Date\"></ion-datetime>\n  </ion-item>\n\n  <div *ngIf=\"safetycheck.invalid && (safetycheck.dirty || safetycheck.touched)\" class=\"validator-error\">\n    <div *ngIf=\"safetycheck.errors.required\">\n      Please select a valid date.\n    </div>\n  </div>\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\"  color=\"secondary\" (click)=\"saveNext()\">Save & Next</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    82445:
    /*!*************************************************************!*\
      !*** ./src/app/appliancedetails/appliancedetails.page.scss ***!
      \*************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-label {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpYW5jZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHBsaWFuY2VkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_appliancedetails_appliancedetails_module_ts-es5.js.map