(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_authorizationrequired_authorizationrequired_module_ts"], {
    /***/
    10649:
    /*!*******************************************************************************!*\
      !*** ./src/app/authorizationrequired/authorizationrequired-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizationrequiredPageRoutingModule": function AuthorizationrequiredPageRoutingModule() {
          return (
            /* binding */
            _AuthorizationrequiredPageRoutingModule
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


      var _authorizationrequired_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorizationrequired.page */
      67336);

      var routes = [{
        path: '',
        component: _authorizationrequired_page__WEBPACK_IMPORTED_MODULE_0__.AuthorizationrequiredPage
      }];

      var _AuthorizationrequiredPageRoutingModule = /*#__PURE__*/_createClass(function AuthorizationrequiredPageRoutingModule() {
        _classCallCheck(this, AuthorizationrequiredPageRoutingModule);
      });

      _AuthorizationrequiredPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AuthorizationrequiredPageRoutingModule);
      /***/
    },

    /***/
    86026:
    /*!***********************************************************************!*\
      !*** ./src/app/authorizationrequired/authorizationrequired.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizationrequiredPageModule": function AuthorizationrequiredPageModule() {
          return (
            /* binding */
            _AuthorizationrequiredPageModule
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


      var _authorizationrequired_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorizationrequired-routing.module */
      10649);
      /* harmony import */


      var _authorizationrequired_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authorizationrequired.page */
      67336);

      var _AuthorizationrequiredPageModule = /*#__PURE__*/_createClass(function AuthorizationrequiredPageModule() {
        _classCallCheck(this, AuthorizationrequiredPageModule);
      });

      _AuthorizationrequiredPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _authorizationrequired_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizationrequiredPageRoutingModule],
        declarations: [_authorizationrequired_page__WEBPACK_IMPORTED_MODULE_1__.AuthorizationrequiredPage]
      })], _AuthorizationrequiredPageModule);
      /***/
    },

    /***/
    67336:
    /*!*********************************************************************!*\
      !*** ./src/app/authorizationrequired/authorizationrequired.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizationrequiredPage": function AuthorizationrequiredPage() {
          return (
            /* binding */
            _AuthorizationrequiredPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_authorizationrequired_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./authorizationrequired.page.html */
      28251);
      /* harmony import */


      var _authorizationrequired_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authorizationrequired.page.scss */
      94932);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/camera */
      4320);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api.service */
      51491); //////authorization


      var _AuthorizationrequiredPage = /*#__PURE__*/function () {
        function AuthorizationrequiredPage(auth, router, route) {
          _classCallCheck(this, AuthorizationrequiredPage);

          this.auth = auth;
          this.router = router;
          this.route = route;
          this.base64 = '';
          this.updatePicture = '';
          this.jobOutcome = '';
          this.parts = '';
          this.labour = '';
          this.additional = "Did you work on the appliance: Yes/No \nVisual Inspection of appliance: Pass/Fail \nBurner Pressure/Gas Rate: \nSafety Device: Pass/Fail \nInitial FGA: \nFinal FGA: \nFlue: Pass Fail \nVentilation: Pass/Fail \nDefects: \nClassification: \nAction Taken:";
        }

        _createClass(AuthorizationrequiredPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;

                _this.auth.getLocation();
              }
            });
          }
        }, {
          key: "radiogroupChange",
          value: function radiogroupChange(event) {
            this.jobOutcome = event.detail.value;
          }
        }, {
          key: "openCamera",
          value: function openCamera(option) {
            var _this2 = this;

            this.cameraOptions = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
              allowEditing: false
            };
            this.galleryOptions = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
              allowEditing: false
            };

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
              _this2.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
              _this2.base64 = imageData.base64String.replace(/\s+/g, "+");
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "authoizationSubmit",
          value: function authoizationSubmit(form) {
            var _this3 = this;

            var date = this.auth.getdateformatV2().split(' ')[0];

            if (this.jobOutcome == '') {
              this.auth.showToast('Job outcome cannot be empty.', 'danger');
            } else {
              if (String(form.value.parts).trim() == '') {
                this.auth.showToast('Parts cannot be empty.', 'danger');
              } else {
                if (String(form.value.labour).trim() == '') {
                  this.auth.showToast('Labour field cannot be empty.', 'danger');
                } else {
                  if (String(form.value.additionalNotes).trim() == '') {
                    this.auth.showToast('Additional Notes cannot be empty.', 'danger');
                  } else {
                    // if(this.updatePicture==''){
                    //   this.auth.showToast('Picture cannot be empty.');
                    // }else{
                    console.log('Else code..........' + this.data['JOBGUID']);
                    var haveData = "yes";
                    this.auth.database.executeSql('update authorization set OUTCOME=?,JOBNOTE=?,parts=?,labour=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,HaveData=? where JOBGUID=?', [this.jobOutcome, form.value.additionalNotes, this.parts, this.labour, this.base64, date, this.auth.lat, this.auth["long"], haveData, this.data['JOBGUID']]).then(function (res) {
                      console.log('#### authorization success ' + JSON.stringify(res));

                      _this3.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', _this3.data['JOBGUID']]).then(function (res) {
                        _this3.router.navigate(['details']);

                        _this3.auth.showToast("Success! Job Authorization has been completed.", 'success');
                      })["catch"](function (e) {});
                    })["catch"](function (e) {
                      console.log('### authorization Failure ' + JSON.stringify(e));
                    }); // }
                  }
                }
              }
            }
          }
        }]);

        return AuthorizationrequiredPage;
      }();

      _AuthorizationrequiredPage.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _AuthorizationrequiredPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-authorizationrequired',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_authorizationrequired_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_authorizationrequired_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AuthorizationrequiredPage);
      /***/
    },

    /***/
    28251:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/authorizationrequired/authorizationrequired.page.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Job Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #f='ngForm'  >\n    <ion-card>\n    <ion-radio-group allow-empty-selection='false' (ionChange)='radiogroupChange($event)'>\n      \n        <div class=\"ion-text-center ion-padding\">\n          <b>Job Outcome</b>\n        </div>\n      \n      <ion-item lines=\"full\">\n        <ion-label>Banding</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Banding\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Part Not Available</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"PartNotAvailable\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Ber</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"Ber\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Review Case</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"ReviewCase\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Insufficent Time To Complete</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"InsufficentTimeToComplete\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Not Covered</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"NotCovered\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>Out Of Skill Set</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"OutOfSkillSet\"></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-card>\n\n    <ion-card>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Parts</ion-label>\n        <ion-input type=\"text\"  \n        [(ngModel)]=\"parts\" \n        name='parts'\n        required\n        #partsCtrl='ngModel'></ion-input>\n      </ion-item>\n      <p *ngIf='!partsCtrl.valid && partsCtrl.touched'>    * Parts cannot be empty</p>\n\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Labour</ion-label>\n        <ion-input type=\"text\"  \n        [(ngModel)]=\"labour\" \n        name='labour'\n        required\n        #labourCtrl='ngModel'></ion-input>\n      </ion-item>\n\n      <p *ngIf='!labourCtrl.valid && labourCtrl.touched'>    * Labours field cannot be empty</p>\n\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-textarea rows=\"12\" cols=\"20\" \n        placeholder=\"Enter Additional Notes here...\"\n        [(ngModel)]=\"additional\" \n        name='additionalNotes'\n        required\n        #additionalNotesCtrl='ngModel'\n        ></ion-textarea>\n      </ion-item>\n      <p *ngIf='!additionalNotesCtrl.valid && additionalNotesCtrl.touched'>    * Additional cannot be empty</p>\n\n      </ion-card>\n      <ion-card>\n        <ion-item lines=\"full\">\n          <b>Upload Image</b>\n          <ion-icon slot=\"end\" name=\"camera\"  (click)=\"openCamera('cam')\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"image\"  (click)=\"openCamera('gall')\"></ion-icon>\n        </ion-item>\n        <span *ngIf=\"updatePicture!= null\">\n          <img [src]=\"updatePicture\" />\n        </span>\n      </ion-card>\n    \n    </form>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" [disabled]='!f.valid' (click)=\"authoizationSubmit(f)\">Submit</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    94932:
    /*!***********************************************************************!*\
      !*** ./src/app/authorizationrequired/authorizationrequired.page.scss ***!
      \***********************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-item {\n  font-size: unset;\n}\n\np {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb25yZXF1aXJlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUNKIiwiZmlsZSI6ImF1dGhvcml6YXRpb25yZXF1aXJlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBmb250LXNpemU6IHVuc2V0O1xuICB9XG5cbiAgcHtcbiAgICBjb2xvcjogcmVkO1xuICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_authorizationrequired_authorizationrequired_module_ts-es5.js.map