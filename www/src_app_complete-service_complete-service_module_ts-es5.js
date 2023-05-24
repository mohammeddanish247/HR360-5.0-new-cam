(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_complete-service_complete-service_module_ts"], {
    /***/
    14551:
    /*!*********************************************************************!*\
      !*** ./src/app/complete-service/complete-service-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompleteServicePageRoutingModule": function CompleteServicePageRoutingModule() {
          return (
            /* binding */
            _CompleteServicePageRoutingModule
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


      var _complete_service_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./complete-service.page */
      64194);

      var routes = [{
        path: '',
        component: _complete_service_page__WEBPACK_IMPORTED_MODULE_0__.CompleteServicePage
      }];

      var _CompleteServicePageRoutingModule = /*#__PURE__*/_createClass(function CompleteServicePageRoutingModule() {
        _classCallCheck(this, CompleteServicePageRoutingModule);
      });

      _CompleteServicePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CompleteServicePageRoutingModule);
      /***/
    },

    /***/
    48949:
    /*!*************************************************************!*\
      !*** ./src/app/complete-service/complete-service.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompleteServicePageModule": function CompleteServicePageModule() {
          return (
            /* binding */
            _CompleteServicePageModule
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


      var _complete_service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./complete-service-routing.module */
      14551);
      /* harmony import */


      var _complete_service_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complete-service.page */
      64194);

      var _CompleteServicePageModule = /*#__PURE__*/_createClass(function CompleteServicePageModule() {
        _classCallCheck(this, CompleteServicePageModule);
      });

      _CompleteServicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _complete_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompleteServicePageRoutingModule],
        declarations: [_complete_service_page__WEBPACK_IMPORTED_MODULE_1__.CompleteServicePage]
      })], _CompleteServicePageModule);
      /***/
    },

    /***/
    64194:
    /*!***********************************************************!*\
      !*** ./src/app/complete-service/complete-service.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompleteServicePage": function CompleteServicePage() {
          return (
            /* binding */
            _CompleteServicePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_service_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complete-service.page.html */
      5135);
      /* harmony import */


      var _complete_service_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./complete-service.page.scss */
      208);
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


      var _CompleteServicePage = /*#__PURE__*/function () {
        function CompleteServicePage(router, route, auth) {
          _classCallCheck(this, CompleteServicePage);

          this.router = router;
          this.route = route;
          this.auth = auth;
          this.base64 = '';
          this.image1 = '';
          this.image2 = '';
          this.image3 = '';
          this.jobOutCome = '';
          this.additional = "";
          this.parts = "";
          this.image2flag = true;
          this.image3flag = true;
        }

        _createClass(CompleteServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;

                _this.auth.getLocation();

                console.log(JSON.stringify(_this.data)); // this.auth.showToast(this.data['JOBGUID'],"warning")
              }
            });
          }
        }, {
          key: "radiogroupChange",
          value: function radiogroupChange(event) {
            this.jobOutComeFlag = false;
            this.jobOutCome = event.detail.value;

            if (this.jobOutCome == 'At Risk' || this.jobOutCome == 'Capped Off (Not Safe)') {
              this.image2flag = false;
              this.image3flag = false;
            } else {
              this.image2flag = true;
              this.image3flag = true;
            }
          }
        }, {
          key: "partsIonChange",
          value: function partsIonChange(event) {
            this.parts = event.detail.value;
            this.partsFlag = false;
          }
        }, {
          key: "additionalIonChange",
          value: function additionalIonChange(event) {
            this.additional = event.detail.value;
            this.additionalFlag = false;
          }
        }, {
          key: "openCamera",
          value: function openCamera(opt, option) {
            var _this2 = this;

            this.imageflag = false;
            this.cameraOptions = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
            };
            this.galleryOptions = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
            };

            switch (opt) {
              case 1:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then(function (imageData) {
                  var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.image1 = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.base64 = imageData.base64String;
                }, function (err) {});

                break;

              case 2:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then(function (imageData) {
                  var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.image2 = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.base64 = imageData.base64String;
                }, function (err) {});

                break;

              case 3:
                _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then(function (imageData) {
                  var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.image3 = 'data:image/jpeg;base64,' + imageData.base64String;
                  _this2.base64 = imageData.base64String;
                }, function (err) {});

                break;

              default:
                break;
            }
          }
        }, {
          key: "complete",
          value: function complete(f) {
            var _this3 = this;

            if (this.jobOutCome == '') {
              this.jobOutComeFlag = true;
              this.auth.scrollToId("joboutcome");
            } else {
              if ((this.jobOutCome == 'At Risk' || this.jobOutCome == 'Capped Off (Not Safe)') && this.image1 == '') {
                //this.auth.showToast('Upload Image is  mandatory','danger');
                this.imageflag = true;
                this.auth.scrollToId("uploadImage");
              } else {
                console.log(JSON.stringify(this.data));

                if (this.data['BackgroundColour'] == '#20B2AA') {
                  //In COMBO SERVICE
                  this.auth.database.executeSql('update  completeservice set HaveData=?, OUTCOME=?, JOBNOTE=?, PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', ['combo', this.jobOutCome, this.additional, this.parts, this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth["long"], this.data['ComboClaimJobId'], "NA - Service Completed", "Yes", this.data['BackgroundColour'], this.data["JOBGUID"]]).then(function (res) {
                    _this3.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', _this3.data['JOBGUID']]).then(function (res) {
                      _this3.auth.showToast('Success! Job has been Completed.', 'success');

                      _this3.router.navigate(['details']);
                    })["catch"](function (e) {});
                  })["catch"](function (e) {});
                } else {
                  //In NOrmal Service
                  console.log('Else code..........' + this.data['JOBGUID'] + ' ' + this.data['BackgroundColour']);
                  this.auth.database.executeSql('update  completeservice set HaveData=?, OUTCOME=?, JOBNOTE=?, PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', ['yes', this.jobOutCome, this.additional, this.parts, this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth["long"], this.data['ComboClaimJobId'], " ", "yes", this.data['BackgroundColour'], this.data["JOBGUID"]]).then(function (res) {
                    console.log('Upated service in Normal JOB' + JSON.stringify(res)); // this.auth.database.executeSql('update  completeservice set OUTCOME=?,JOBNOTE=?,PARTS=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,  CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long,this.data['CLAIMJOBID'], 'yes',this.data['BackgroundColour'], this.data['JOBGUID']])
                    //   .then((res) => {

                    _this3.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['completed', _this3.data['JOBGUID']]).then(function (res) {
                      console.log('#### devdx jobsstatus success ' + JSON.stringify(res));

                      _this3.auth.showToast('Success! Job has been Completed.', 'success');

                      console.log('#### complete success ' + JSON.stringify(res));

                      _this3.router.navigate(['details']);
                    })["catch"](function (e) {});
                  })["catch"](function (e) {
                    console.log('### devdx complete Failure ' + JSON.stringify(e));
                  }); // }              
                  // }
                }
              }
            }
          }
        }]);

        return CompleteServicePage;
      }();

      _CompleteServicePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _CompleteServicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-complete-service',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complete_service_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complete_service_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CompleteServicePage);
      /***/
    },

    /***/
    5135:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complete-service/complete-service.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Job Report Complete Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f='ngForm'>\n    <ion-card id=\"joboutcome\" class=\"ion-padding\">\n      <ion-radio-group  \n      allow-empty-selection='false' \n      (ionChange)='radiogroupChange($event)'>      \n          <div class=\"ion-text-center\">\n            <h5>Job Outcome</h5> \n          </div>    \n        <ion-item lines=\"none\">\n          <ion-label>Job Completed Successfully</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"job completed succesfully\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>At Risk</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"At Risk\"></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\">\n          <ion-label>Capped Off (Not Safe)</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"Capped Off (Not Safe)\"></ion-radio>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label>CP12 Failed</ion-label>\n          <ion-radio slot=\"end\" color=\"primary\" value=\"CP12 Failed\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      <ion-item></ion-item>\n      <p *ngIf='jobOutComeFlag' class=\"alert\">Job outcomes cannot be empty</p>\n    </ion-card>\n\n    <ion-card id=\"parts\" class=\"ion-padding\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Parts</ion-label>\n        <ion-input type=\"text\" \n        [(ngModel)]=\"parts\"\n        (ionChange)=\"partsIonChange($event)\"\n        name='parts'\n        required\n        #partsCtrl='ngModel'>\n      </ion-input>\n      </ion-item>\n      <p *ngIf='(!partsCtrl.valid && partsCtrl.touched) || partsFlag' class=\"alert\"> Parts cannot be empty</p>\n    </ion-card>\n\n\n    <ion-card id=\"additional\" class=\"ion-padding\">\n      <ion-item>\n        <ion-textarea rows=\"6\" cols=\"20\" \n         placeholder=\"Enter Additional Notes here...\"\n         [(ngModel)]=\"additional\" \n         (ionChange)=\"additionalIonChange($event)\"\n         name='additional'\n         required\n         #additionalCtrl='ngModel'\n         ></ion-textarea>\n      </ion-item>\n      <p *ngIf='(!additionalCtrl.valid && additionalCtrl.touched) || additionalFlag' class=\"alert\"> Additional notes cannot be empty</p>\n    </ion-card>\n      \n    <ion-card id=\"uploadImage\" class=\"ion-padding\">\n      <ion-item>\n        <ion-label> Upload Image 1</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(1,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(1,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image1!= null\">\n        <img [src]=\"image1\" />\n      </span>\n      <p *ngIf='imageflag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n\n    \n    <ion-card id=\"uploadImage2\" class=\"ion-padding\" [hidden]=\"image2flag\">\n      <ion-item>\n        <ion-label> Upload Image 2</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(2,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(2,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image2!= null\">\n        <img [src]=\"image2\" />\n      </span>      \n      <p *ngIf='image2flag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n\n    <ion-card id=\"uploadImage3\" class=\"ion-padding\" [hidden]=\"image3flag\">\n      <ion-item>\n        <ion-label> Upload Image 3</ion-label>     \n        <ion-icon slot=\"end\" name=\"camera\" (click)=\"openCamera(3,'cam')\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"image\" (click)=\"openCamera(3 ,'gall')\"></ion-icon>\n      </ion-item>\n      <span *ngIf=\"image3!= null\">\n        <img [src]=\"image3\" />\n      </span>\n      <p *ngIf='image3flag' class=\"alert\">Image cannot be empty</p>\n    </ion-card>\n\n    </form>\n</ion-content>\n\n<!-- <ion-button (click)=\"checking()\">Check</ion-button> -->\n<!-- [disabled]='!f.valid' -->\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\"  (click)=\"complete(f)\">Submit</ion-button>\n</ion-footer>\n\n";
      /***/
    },

    /***/
    208:
    /*!*************************************************************!*\
      !*** ./src/app/complete-service/complete-service.page.scss ***!
      \*************************************************************/

    /***/
    function _(module) {
      module.exports = "p {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6ImNvbXBsZXRlLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBjb2xvcjogcmVkO1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_complete-service_complete-service_module_ts-es5.js.map