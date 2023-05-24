(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_sitesurveypics_sitesurveypics_module_ts"], {
    /***/
    45190:
    /*!*****************************************************************!*\
      !*** ./src/app/sitesurveypics/sitesurveypics-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SitesurveypicsPageRoutingModule": function SitesurveypicsPageRoutingModule() {
          return (
            /* binding */
            _SitesurveypicsPageRoutingModule
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


      var _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sitesurveypics.page */
      88867);

      var routes = [{
        path: '',
        component: _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_0__.SitesurveypicsPage
      }];

      var _SitesurveypicsPageRoutingModule = /*#__PURE__*/_createClass(function SitesurveypicsPageRoutingModule() {
        _classCallCheck(this, SitesurveypicsPageRoutingModule);
      });

      _SitesurveypicsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SitesurveypicsPageRoutingModule);
      /***/
    },

    /***/
    81028:
    /*!*********************************************************!*\
      !*** ./src/app/sitesurveypics/sitesurveypics.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SitesurveypicsPageModule": function SitesurveypicsPageModule() {
          return (
            /* binding */
            _SitesurveypicsPageModule
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


      var _sitesurveypics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sitesurveypics-routing.module */
      45190);
      /* harmony import */


      var _sitesurveypics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sitesurveypics.page */
      88867);

      var _SitesurveypicsPageModule = /*#__PURE__*/_createClass(function SitesurveypicsPageModule() {
        _classCallCheck(this, SitesurveypicsPageModule);
      });

      _SitesurveypicsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sitesurveypics_routing_module__WEBPACK_IMPORTED_MODULE_0__.SitesurveypicsPageRoutingModule],
        declarations: [_sitesurveypics_page__WEBPACK_IMPORTED_MODULE_1__.SitesurveypicsPage]
      })], _SitesurveypicsPageModule);
      /***/
    },

    /***/
    88867:
    /*!*******************************************************!*\
      !*** ./src/app/sitesurveypics/sitesurveypics.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SitesurveypicsPage": function SitesurveypicsPage() {
          return (
            /* binding */
            _SitesurveypicsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveypics_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sitesurveypics.page.html */
      89727);
      /* harmony import */


      var _sitesurveypics_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sitesurveypics.page.scss */
      84689);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      12314);

      var _SitesurveypicsPage = /*#__PURE__*/function () {
        function SitesurveypicsPage(storage, platform, router, route, auth) {
          _classCallCheck(this, SitesurveypicsPage);

          this.storage = storage;
          this.platform = platform;
          this.router = router;
          this.route = route;
          this.auth = auth; // flags

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
          this.Additional = false; ///

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
          this.AdditionalFour = ''; // camera

          this.CameraOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
            allowEditing: false
          };
          this.GalleryOptions = {
            quality: 20,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
            height: 360,
            width: 360,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
            allowEditing: false // quality: 20,
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // allowEdit: true,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE,

          };
          this.data = [];
        }

        _createClass(SitesurveypicsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('fluinloft').then(function (res) {
              if (res == "true") {
                _this.flueInLoft = true;
              } else {
                _this.flueInLoft = false;
              }
            });
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this2.router.getCurrentNavigation().extras.state) {
                _this2.data = _this2.router.getCurrentNavigation().extras.state.data;
                console.log('### data ' + _this2.data['JOBGUID']);

                _this2.auth.database.executeSql('select * from sitesurveypics where JOBGUID=?', [_this2.data['JOBGUID']]).then(function (res) {
                  console.log('boiler image ' + JSON.stringify(res.rows.item(0)['BoilerImage']));
                  _this2.BoilerImage = 'data:image/jpeg;base64,' + res.rows.item(0)['BoilerImage'];
                  _this2.Boilerpipework = 'data:image/jpeg;base64,' + res.rows.item(0)['Boilerpipework'];
                  _this2.CondensateterminationImage = 'data:image/jpeg;base64,' + res.rows.item(0)['CondensateterminationImage'];
                  _this2.FusespurImage = 'data:image/jpeg;base64,' + res.rows.item(0)['FusespurImage'];
                  _this2.InternalflueImage = 'data:image/jpeg;base64,' + res.rows.item(0)['InternalflueImage'];
                  _this2.ExternalflueterminalImage = 'data:image/jpeg;base64,' + res.rows.item(0)['ExternalflueterminalImage'];
                  _this2.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + res.rows.item(0)['AiringCupboardCylinderImage'];
                  _this2.StopTapImage = 'data:image/jpeg;base64,' + res.rows.item(0)['StopTapImage'];
                  _this2.Bench_Mark_Certificate = 'data:image/jpeg;base64,' + res.rows.item(0)['BMCImage'];
                  _this2.STLI = 'data:image/jpeg;base64,' + res.rows.item(0)['STLImage'];
                  _this2.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + res.rows.item(0)['DrainOffLocationFlagImage'];
                  _this2.GasMeterImage = 'data:image/jpeg;base64,' + res.rows.item(0)['GasMeterImage'];
                  _this2.AdditionalOne = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalOne'];
                  _this2.AdditionalTwo = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalTwo'];
                  _this2.AdditionalThree = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalThree'];
                  _this2.AdditionalFour = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalFour'];
                })["catch"](function (e) {});
              }
            });
          }
        }, {
          key: "uploadImg1",
          value: function uploadImg1(option) {
            var _this3 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              // var decoded = atob(imageData.base64String);
              // console.log("FileSize: " + decoded.length);
              _this3.BoilerImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this3.auth.database.executeSql('update sitesurveypics set BoilerImage=? where JOBGUID=?', [imageData.base64String, _this3.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "uploadImg2",
          value: function uploadImg2(option) {
            var _this4 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this4.Boilerpipework = 'data:image/jpeg;base64,' + imageData.base64String;

              _this4.auth.database.executeSql('update sitesurveypics set Boilerpipework=? where JOBGUID=?', [imageData.base64String, _this4.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg3",
          value: function uploadImg3(option) {
            var _this5 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this5.CondensateterminationImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this5.auth.database.executeSql('update sitesurveypics set CondensateterminationImage=? where JOBGUID=?', [imageData.base64String, _this5.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg4",
          value: function uploadImg4(option) {
            var _this6 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this6.FusespurImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this6.auth.database.executeSql('update sitesurveypics set FusespurImage=? where JOBGUID=?', [imageData.base64String, _this6.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg5",
          value: function uploadImg5(option) {
            var _this7 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this7.InternalflueImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this7.auth.database.executeSql('update sitesurveypics set InternalflueImage=? where JOBGUID=?', [imageData.base64String, _this7.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg7",
          value: function uploadImg7(option) {
            var _this8 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this8.ExternalflueterminalImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this8.auth.database.executeSql('update sitesurveypics set ExternalflueterminalImage=? where JOBGUID=?', [imageData.base64String, _this8.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg8",
          value: function uploadImg8(option) {
            var _this9 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this9.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this9.auth.database.executeSql('update sitesurveypics set AiringCupboardCylinderImage=? where JOBGUID=?', [imageData.base64String, _this9.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg6",
          value: function uploadImg6(option) {
            var _this10 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this10.StopTapImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this10.auth.database.executeSql('update sitesurveypics set FlueInLoftImage=? where JOBGUID=?', [imageData.base64String, _this10.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg9",
          value: function uploadImg9(option) {
            var _this11 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this11.STLI = 'data:image/jpeg;base64,' + imageData.base64String;

              _this11.auth.database.executeSql('update sitesurveypics set STLImage=? where JOBGUID=?', [imageData.base64String, _this11.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg10",
          value: function uploadImg10(option) {
            var _this12 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this12.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this12.auth.database.executeSql('update sitesurveypics set DrainOffLocationFlagImage=? where JOBGUID=?', [imageData.base64String, _this12.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg11",
          value: function uploadImg11(option) {
            var _this13 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this13.GasMeterImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this13.auth.database.executeSql('update sitesurveypics set GasMeterImage=? where JOBGUID=?', [imageData.base64String, _this13.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg12",
          value: function uploadImg12(option) {
            var _this14 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this14.AdditionalOne = 'data:image/jpeg;base64,' + imageData.base64String;

              _this14.auth.database.executeSql('update sitesurveypics set AdditionalOne=? where JOBGUID=?', [imageData.base64String, _this14.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg13",
          value: function uploadImg13(option) {
            var _this15 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this15.AdditionalTwo = 'data:image/jpeg;base64,' + imageData.base64String;

              _this15.auth.database.executeSql('update sitesurveypics set AdditionalTwo=? where JOBGUID=?', [imageData.base64String, _this15.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg14",
          value: function uploadImg14(option) {
            var _this16 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this16.AdditionalThree = 'data:image/jpeg;base64,' + imageData.base64String;

              _this16.auth.database.executeSql('update sitesurveypics set AdditionalThree=? where JOBGUID=?', [imageData.base64String, _this16.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg15",
          value: function uploadImg15(option) {
            var _this17 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this17.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;

              _this17.auth.database.executeSql('update sitesurveypics set AdditionalFour=? where JOBGUID=?', [imageData.base64String, _this17.data['JOBGUID']]).then(function (res) {
                console.log('success sql BoilerImagge');
              })["catch"](function (e) {
                console.log('error sql BoilerImagge');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "SiteSurveyImage",
          value: function SiteSurveyImage() {
            if (this.BoilerImage == 'data:image/jpeg;base64,null' || this.BoilerImage == undefined) {
              this.auth.showToast('Boiler Image cannot be empty', 'danger');
            } else {
              if (this.Boilerpipework == 'data:image/jpeg;base64,null' || this.Boilerpipework == undefined) {
                this.auth.showToast('Boilerpipework Image cannot be empty', 'danger');
              } else {
                if (this.CondensateterminationImage == 'data:image/jpeg;base64,null' || this.CondensateterminationImage == undefined) {
                  this.auth.showToast('Condensatetermination Image cannot be empty', 'danger');
                } else {
                  if (this.FusespurImage == 'data:image/jpeg;base64,null' || this.FusespurImage == undefined) {
                    this.auth.showToast('Fusespur Image   cannot be empty', 'danger');
                  } else {
                    if (this.InternalflueImage == 'data:image/jpeg;base64,null' || this.InternalflueImage == undefined) {
                      this.auth.showToast('Internalflue Image cannot be empty', 'danger');
                    } else {
                      if (this.ExternalflueterminalImage == 'data:image/jpeg;base64,null' || this.ExternalflueterminalImage == undefined) {
                        this.auth.showToast('Externalflueterminal Image cannot be empty', 'danger');
                      } else {
                        if (this.STLI == 'data:image/jpeg;base64,null' || this.STLI == undefined) {
                          this.auth.showToast('Stop Tap Image cannot be empty', 'danger');
                        } else {
                          if (this.DrainOffLocationFlagImage == 'data:image/jpeg;base64,null' || this.DrainOffLocationFlagImage == undefined) {
                            this.auth.showToast('DrainOffLocationFlag Image cannot be empty', 'danger');
                          } else {
                            if (this.GasMeterImage == 'data:image/jpeg;base64,null' || this.GasMeterImage == undefined) {
                              this.auth.showToast('GasMeter Image cannot be empty', 'danger');
                            } else {
                              if (this.flueInLoft == true) {
                                this.updateTable();
                              } else {
                                if (this.StopTapImage == 'data:image/jpeg;base64,null' || this.StopTapImage == null) {
                                  this.auth.showToast('Flue in Loft Image Image cannot be empty', 'danger');
                                } else {
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
        }, {
          key: "updateTable",
          value: function updateTable() {
            this.auth.database.executeSql('update sitesurveypics set HaveData=? where JOBGUID=?', ['yes', this.data['JOBGUID']]).then(function (res) {
              console.log('success sql BoilerImagge');
            })["catch"](function (e) {
              console.log('error sql BoilerImagge');
            });
            var extras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['sitesurveysign'], extras);
          }
        }]);

        return SitesurveypicsPage;
      }();

      _SitesurveypicsPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _SitesurveypicsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sitesurveypics',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sitesurveypics_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sitesurveypics_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SitesurveypicsPage);
      /***/
    },

    /***/
    89727:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sitesurveypics/sitesurveypics.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"font-size: 16px;\">Site Survay Report Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]=\"boiler\">\n    <ion-item lines=\"full\">\n      <p><b>Boiler Image - </b>Stand back and take a pic of the boiler</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg1('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg1('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"BoilerImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"BoilerImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Boiler_pipe_work\">\n    <ion-item lines=\"full\">\n      <p>Boiler_pipe_work Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg2('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg2('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"Boilerpipework != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"Boilerpipework\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Condensate_termination\">\n    <ion-item lines=\"full\">\n      <p>Condensate_termination Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg3('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg3('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"CondensateterminationImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"CondensateterminationImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Fuse_spur\">\n    <ion-item lines=\"full\">\n      <p>Fuse_spur Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg4('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg4('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"FusespurImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"FusespurImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Internal_flue\">\n    <ion-item lines=\"full\">\n      <p>Internal_flue Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg5('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg5('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"InternalflueImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"InternalflueImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"flueInLoft\">\n    <ion-item lines=\"full\">\n      <p>Flue In Loft</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg6('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg6('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"StopTapImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"StopTapImage\" />\n    </ion-card>\n  </div>\n\n\n  <div [hidden]=\"External_flue_terminal\">\n    <ion-item lines=\"full\">\n      <p>External_flue_terminal Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg7('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg7('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"ExternalflueterminalImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"ExternalflueterminalImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Airing_Cupboard_Cylinder\">\n    <ion-item lines=\"full\">\n      <p>Airing_Cupboard_Cylinder Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg8('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg8('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AiringCupboardCylinderImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AiringCupboardCylinderImage\" />\n    </ion-card>\n  </div>\n\n\n  <div [hidden]=\"STLI_Flag\">\n    <ion-item lines=\"full\">\n      <p>Stop Tap Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg9('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg9('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"STLI != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"STLI\" />\n    </ion-card>\n  </div>\n\n  \n\n  <div [hidden]=\"Drain_off_location_flag\">\n    <ion-item lines=\"full\">\n      <p>Drain Off Location Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg10('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg10('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"DrainOffLocationFlagImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"DrainOffLocationFlagImage\" />\n    </ion-card>\n  </div>\n\n\n  \n  <div [hidden]=\"GasMeterFlag\">\n    <ion-item lines=\"full\">\n      <p>Gas Meter</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg11('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg11('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"GasMeterImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"GasMeterImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 1 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg12('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg12('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalOne!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalOne\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 2 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg13('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg13('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalTwo!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalTwo\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 3 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg14('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg14('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalThree!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalThree\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 4 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg15('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg15('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalFour!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalFour\" />\n    </ion-card>\n  </div>\n\n \n  \n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\"SiteSurveyImage()\">Save & Next</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    84689:
    /*!*********************************************************!*\
      !*** ./src/app/sitesurveypics/sitesurveypics.page.scss ***!
      \*********************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlc3VydmV5cGljcy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_sitesurveypics_sitesurveypics_module_ts-es5.js.map