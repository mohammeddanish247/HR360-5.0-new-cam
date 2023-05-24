(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_complete_complete_module_ts"], {
    /***/
    31575:
    /*!*****************************************************!*\
      !*** ./src/app/complete/complete-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletePageRoutingModule": function CompletePageRoutingModule() {
          return (
            /* binding */
            _CompletePageRoutingModule
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


      var _complete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./complete.page */
      52433);

      var routes = [{
        path: '',
        component: _complete_page__WEBPACK_IMPORTED_MODULE_0__.CompletePage
      }];

      var _CompletePageRoutingModule = /*#__PURE__*/_createClass(function CompletePageRoutingModule() {
        _classCallCheck(this, CompletePageRoutingModule);
      });

      _CompletePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CompletePageRoutingModule);
      /***/
    },

    /***/
    50887:
    /*!*********************************************!*\
      !*** ./src/app/complete/complete.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletePageModule": function CompletePageModule() {
          return (
            /* binding */
            _CompletePageModule
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


      var _complete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./complete-routing.module */
      31575);
      /* harmony import */


      var _complete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complete.page */
      52433);

      var _CompletePageModule = /*#__PURE__*/_createClass(function CompletePageModule() {
        _classCallCheck(this, CompletePageModule);
      });

      _CompletePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletePageRoutingModule],
        declarations: [_complete_page__WEBPACK_IMPORTED_MODULE_1__.CompletePage]
      })], _CompletePageModule);
      /***/
    },

    /***/
    52433:
    /*!*******************************************!*\
      !*** ./src/app/complete/complete.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompletePage": function CompletePage() {
          return (
            /* binding */
            _CompletePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complete.page.html */
      1443);
      /* harmony import */


      var _complete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complete.page.scss */
      31608);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/camera */
      4320);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258); ///////////////////completed


      var _CompletePage = /*#__PURE__*/function () {
        function CompletePage(router, route, auth) {
          _classCallCheck(this, CompletePage);

          this.router = router;
          this.route = route;
          this.auth = auth;
          this.base64 = '';
          this.updatePicture = '';
          this.jobOutCome = '';
        }

        _createClass(CompletePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;

                _this.auth.getLocation(); // this.getdata();  

              }
            });
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this2 = this;

            this.auth.database.executeSql('select * from abandon where JOBGUID=?', [this.data['JOBGUID']]).then(function (res) {
              var f;
              _this2.jobOutCome = res.rows.item(0)['OUTCOME'];
              f.value.additional = res.rows.item(0)['JOBNOTE'];
              _this2.base64 = res.rows.item(0)['FILEBASE'];
            });
          }
        }, {
          key: "radiogroupChange",
          value: function radiogroupChange(event) {
            console.log(' rg change ' + event.detail.value);
            this.jobOutCome = event.detail.value;
          }
        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this3 = this;

            this.options = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
              allowEditing: false
            };

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(this.options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
              _this3.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
              _this3.base64 = imageData.base64String;
              console.log('camera' + _this3.base64);
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "complete",
          value: function complete(f) {
            var _this4 = this;

            if (this.base64 == null || this.base64 == '') {
              this.auth.showToast('Image in mandatory', 'danger');
            } else {
              if (this.jobOutCome == '') {
                this.auth.showToast('Job Outcome in mandatory', 'danger');
              } else {
                if (f.value.additional == '') {
                  this.auth.showToast('Additional notes in mandatory', 'danger');
                } else {
                  if (f.value.parts == '') {
                    this.auth.showToast('Parts in mandatory', 'danger');
                  } else {
                    if (f.value.labour == '') {
                      this.auth.showToast('Labour in mandatory', 'danger');
                    } else {
                      console.log('Else code..........' + this.data['JOBGUID']);
                      this.auth.database.executeSql('update  complete set OUTCOME=?,JOBNOTE=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?, HaveData=? where JOBGUID=?', [this.jobOutCome, f.value.additional, this.base64, this.auth.getdateformatV2(), 'lat', 'long', 'yes', this.data['JOBGUID']]).then(function (res) {
                        _this4.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', _this4.data['JOBGUID']]).then(function (res) {
                          console.log('#### jobsstatus success ' + JSON.stringify(res));

                          _this4.auth.showToast('Success! Job has been Completed.', 'success');

                          console.log('#### complete success ' + JSON.stringify(res));

                          _this4.router.navigate(['details']);
                        })["catch"](function (e) {});
                      })["catch"](function (e) {
                        console.log('### complete Failure ' + JSON.stringify(e));
                      });
                    }
                  }
                }
              }
            }
          }
        }]);

        return CompletePage;
      }();

      _CompletePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _CompletePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-complete',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complete_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CompletePage);
      /***/
    },

    /***/
    1443:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complete/complete.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Job Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f='ngForm'  >\n    <ion-radio-group  \n    allow-empty-selection='false' \n    (ionChange)='radiogroupChange($event)'>\n      <ion-card>\n      <ion-list-header>\n        <h2>Job Outcome</h2>\n      </ion-list-header>\n      </ion-card>\n      <ion-item lines=\"full\">\n        <ion-label>Job Completed Successfully</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"JobCompletedSuccessfully\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>At Risk</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"AtRisk\"></ion-radio>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label>Capped Off(Not Safe)</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"CappedOff\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-card>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Parts</ion-label>\n      <ion-input type=\"text\" \n      ngModel \n      name='parts'\n      required\n      #partsCtrl='ngModel'></ion-input>\n    </ion-item>\n    <p *ngIf='!partsCtrl.valid && partsCtrl.touched'>    * parts cannot be empty</p>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Labour</ion-label>\n      <ion-input type=\"text\"  \n      ngModel \n      name='labour'\n      required\n      #labourCtrl='ngModel' ></ion-input>\n    </ion-item>\n    </ion-card>\n    <p *ngIf='!labourCtrl.valid && labourCtrl.touched'>    * labour cannot be empty</p>\n\n    <ion-card>\n      <ion-item>\n        <ion-textarea rows=\"6\" cols=\"20\" \n         placeholder=\"Enter Additional Notes here...\"\n         ngModel \n         name='additional'\n         required\n         #additionalCtrl='ngModel'\n         ></ion-textarea>\n      </ion-item>\n      </ion-card>\n      <p *ngIf='!additionalCtrl.valid && additionalCtrl.touched'>    * additional cannot be empty</p>\n\n    <ion-item lines=\"full\">\n      <p><b>Upload Image</b></p>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera()\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"updatePicture!= null\">\n      <img [src]=\"updatePicture\" />\n    </ion-card>\n    </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary  [disabled]='!f.valid' (click)=\"complete(f)\">Submit</ion-button>\n</ion-footer>\n\n";
      /***/
    },

    /***/
    31608:
    /*!*********************************************!*\
      !*** ./src/app/complete/complete.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_complete_complete_module_ts-es5.js.map