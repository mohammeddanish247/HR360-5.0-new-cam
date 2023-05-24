(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_boilerinstallnext_boilerinstallnext_module_ts"], {
    /***/
    56190:
    /*!***********************************************************************!*\
      !*** ./src/app/boilerinstallnext/boilerinstallnext-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallnextPageRoutingModule": function BoilerinstallnextPageRoutingModule() {
          return (
            /* binding */
            _BoilerinstallnextPageRoutingModule
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


      var _boilerinstallnext_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./boilerinstallnext.page */
      73414);

      var routes = [{
        path: '',
        component: _boilerinstallnext_page__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallnextPage
      }];

      var _BoilerinstallnextPageRoutingModule = /*#__PURE__*/_createClass(function BoilerinstallnextPageRoutingModule() {
        _classCallCheck(this, BoilerinstallnextPageRoutingModule);
      });

      _BoilerinstallnextPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BoilerinstallnextPageRoutingModule);
      /***/
    },

    /***/
    54049:
    /*!***************************************************************!*\
      !*** ./src/app/boilerinstallnext/boilerinstallnext.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallnextPageModule": function BoilerinstallnextPageModule() {
          return (
            /* binding */
            _BoilerinstallnextPageModule
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


      var _boilerinstallnext_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./boilerinstallnext-routing.module */
      56190);
      /* harmony import */


      var _boilerinstallnext_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./boilerinstallnext.page */
      73414);

      var _BoilerinstallnextPageModule = /*#__PURE__*/_createClass(function BoilerinstallnextPageModule() {
        _classCallCheck(this, BoilerinstallnextPageModule);
      });

      _BoilerinstallnextPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _boilerinstallnext_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoilerinstallnextPageRoutingModule],
        declarations: [_boilerinstallnext_page__WEBPACK_IMPORTED_MODULE_1__.BoilerinstallnextPage]
      })], _BoilerinstallnextPageModule);
      /***/
    },

    /***/
    73414:
    /*!*************************************************************!*\
      !*** ./src/app/boilerinstallnext/boilerinstallnext.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoilerinstallnextPage": function BoilerinstallnextPage() {
          return (
            /* binding */
            _BoilerinstallnextPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstallnext_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./boilerinstallnext.page.html */
      33385);
      /* harmony import */


      var _boilerinstallnext_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./boilerinstallnext.page.scss */
      48298);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      12314);

      var _BoilerinstallnextPage = /*#__PURE__*/function () {
        function BoilerinstallnextPage(platfrom, router, route, auth, storage) {
          _classCallCheck(this, BoilerinstallnextPage);

          this.platfrom = platfrom;
          this.router = router;
          this.route = route;
          this.auth = auth;
          this.storage = storage; ///////////////// boilerinstallationpics

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
            allowEditing: false // allowEdit: true,
            // mediaType : this.camera.MediaType.PICTURE,

          };
          this.BoilerImage = '';
          this.Boilerpipework = '';
          this.CondensateterminationImage = '';
          this.FusespurImage = '';
          this.InternalflueImage = '';
          this.flueInLoftImage = '';
          this.ExternalflueterminalImage = '';
          this.AiringCupboardCylinderImage = '';
          this.ThermostatImage = '';
          this.BenchMarkCertificateImage = '';
          this.AdditionalOne = '';
          this.AdditionalTwo = '';
          this.AdditionalThree = '';
          this.AdditionalFour = '';
        }

        _createClass(BoilerinstallnextPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('fluinloft_B').then(function (res) {
              if (res == "true") {
                _this.flueInLoft = true;
              } else {
                _this.flueInLoft = false;
              }
            });
            this.route.queryParams.subscribe(function (params) {
              console.log('### data ' + _this.router.getCurrentNavigation().extras.state);

              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
                console.log('### data ' + _this.data['JOBGUID']);

                _this.auth.getLocation();

                _this.getData();
              }
            }); // this.platfrom.ready().then(()=>{
            //   this.options = {
            //     quality: 100,
            //     destinationType: this.camera.DestinationType.DATA_URL,
            //     encodingType: this.camera.EncodingType.JPEG,
            //     mediaType: this.camera.MediaType.PICTURE,
            //     targetHeight:360,
            //     targetWidth:360,}
            // });
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this2.router.getCurrentNavigation().extras.state) {
                _this2.data = _this2.router.getCurrentNavigation().extras.state.data;
                console.log('### data ' + _this2.data['JOBGUID']);

                _this2.auth.database.executeSql('select * from boilerinstallationpics where JOBGUID=?', [_this2.data['JOBGUID']]).then(function (res) {
                  _this2.BoilerImage = 'data:image/jpeg;base64,' + res.rows.item(0)['BImage'];
                  _this2.Boilerpipework = 'data:image/jpeg;base64,' + res.rows.item(0)['BPWImage'];
                  _this2.CondensateterminationImage = 'data:image/jpeg;base64,' + res.rows.item(0)['CTImage'];
                  _this2.FusespurImage = 'data:image/jpeg;base64,' + res.rows.item(0)['FSImage'];
                  _this2.InternalflueImage = 'data:image/jpeg;base64,' + res.rows.item(0)['IFImage'];
                  _this2.flueInLoftImage = 'data:image/jpeg;base64,' + res.rows.item(0)['FILImage'];
                  _this2.ExternalflueterminalImage = 'data:image/jpeg;base64,' + res.rows.item(0)['EFTImage'];
                  _this2.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + res.rows.item(0)['ACCImage'];
                  _this2.ThermostatImage = 'data:image/jpeg;base64,' + res.rows.item(0)['TImage'];
                  _this2.BenchMarkCertificateImage = 'data:image/jpeg;base64,' + res.rows.item(0)['BMCImage'];
                  _this2.AdditionalOne = 'data:image/jpeg;base64,' + res.rows.item(0)['A1Image'];
                  _this2.AdditionalTwo = 'data:image/jpeg;base64,' + res.rows.item(0)['A2Image'];
                  _this2.AdditionalThree = 'data:image/jpeg;base64,' + res.rows.item(0)['A3Image'];
                  _this2.AdditionalFour = 'data:image/jpeg;base64,' + res.rows.item(0)['A4Image'];
                })["catch"](function (e) {});
              }
            });
          }
        }, {
          key: "uploadImg1",
          value: function uploadImg1(option) {
            var _this3 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this3.BoilerImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this3.auth.database.executeSql('update boilerinstallationpics set BImage=? where JOBGUID=?', [imageData.base64String, _this3.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg2",
          value: function uploadImg2(option) {
            var _this4 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this4.Boilerpipework = 'data:image/jpeg;base64,' + imageData.base64String;

              _this4.auth.database.executeSql('update boilerinstallationpics set BPWImage=? where JOBGUID=?', [imageData.base64String, _this4.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
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

              _this5.auth.database.executeSql('update boilerinstallationpics set CTImage=? where JOBGUID=?', [imageData.base64String, _this5.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
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

              _this6.auth.database.executeSql('update boilerinstallationpics set FSImage=? where JOBGUID=?', [imageData.base64String, _this6.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
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

              _this7.auth.database.executeSql('update boilerinstallationpics set IFImage=? where JOBGUID=?', [imageData.base64String, _this7.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "fili",
          value: function fili(option) {
            var _this8 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this8.flueInLoftImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this8.auth.database.executeSql('update boilerinstallationpics set FILImage=? where JOBGUID=?', [imageData.base64String, _this8.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg6",
          value: function uploadImg6(option) {
            var _this9 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this9.ExternalflueterminalImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this9.auth.database.executeSql('update boilerinstallationpics set EFTImage=? where JOBGUID=?', [imageData.base64String, _this9.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg7",
          value: function uploadImg7(option) {
            var _this10 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this10.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this10.auth.database.executeSql('update boilerinstallationpics set ACCImage=? where JOBGUID=?', [imageData.base64String, _this10.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg8",
          value: function uploadImg8(option) {
            var _this11 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this11.ThermostatImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this11.auth.database.executeSql('update boilerinstallationpics set TImage=? where JOBGUID=?', [imageData.base64String, _this11.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg9",
          value: function uploadImg9(option) {
            var _this12 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this12.BenchMarkCertificateImage = 'data:image/jpeg;base64,' + imageData.base64String;

              _this12.auth.database.executeSql('update boilerinstallationpics set BMCImage=? where JOBGUID=?', [imageData.base64String, _this12.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg10",
          value: function uploadImg10(option) {
            var _this13 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this13.AdditionalOne = 'data:image/jpeg;base64,' + imageData.base64String;

              _this13.auth.database.executeSql('update boilerinstallationpics set A1Image=? where JOBGUID=?', [imageData.base64String, _this13.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg11",
          value: function uploadImg11(option) {
            var _this14 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this14.AdditionalTwo = 'data:image/jpeg;base64,' + imageData.base64String;

              _this14.auth.database.executeSql('update boilerinstallationpics set A2Image=? where JOBGUID=?', [imageData.base64String, _this14.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg12",
          value: function uploadImg12(option) {
            var _this15 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this15.AdditionalThree = 'data:image/jpeg;base64,' + imageData.base64String;

              _this15.auth.database.executeSql('update boilerinstallationpics set A3Image=? where JOBGUID=?', [imageData.base64String, _this15.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg13",
          value: function uploadImg13(option) {
            var _this16 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this16.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;

              _this16.auth.database.executeSql('update boilerinstallationpics set A4Image=? where JOBGUID=?', [imageData.base64String, _this16.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "uploadImg14",
          value: function uploadImg14(option) {
            var _this17 = this;

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then(function (imageData) {
              _this17.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;

              _this17.auth.database.executeSql('update boilerinstallationpics set A5Image=? where JOBGUID=?', [imageData.base64String, _this17.data['JOBGUID']]).then(function (res) {
                console.log('success sql');
              })["catch"](function (e) {
                console.log('error sql');
              });
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "boilerInsImage",
          value: function boilerInsImage() {
            if (this.BoilerImage == 'data:image/jpeg;base64,null' || this.BoilerImage == null) {
              this.auth.showToast('Boiler Image cannot be empty', 'danger');
            } else {
              if (this.Boilerpipework == 'data:image/jpeg;base64,null' || this.Boilerpipework == null) {
                this.auth.showToast('Boiler Pipe work Image cannot be empty', 'danger');
              } else {
                if (this.CondensateterminationImage == 'data:image/jpeg;base64,null' || this.CondensateterminationImage == null) {
                  this.auth.showToast('Boiler Condensate termination Image  cannot be empty', 'danger');
                } else {
                  if (this.FusespurImage == 'data:image/jpeg;base64,null' || this.FusespurImage == null) {
                    this.auth.showToast('Boiler Fusespur Image cannot be empty', 'danger');
                  } else {
                    if (this.InternalflueImage == 'data:image/jpeg;base64,null' || this.InternalflueImage == null) {
                      this.auth.showToast('Boiler Internal flue Image cannot be empty', 'danger');
                    } else {
                      if (this.ExternalflueterminalImage == 'data:image/jpeg;base64,null' || this.ExternalflueterminalImage == null) {
                        this.auth.showToast('Boiler External flueterminal Image cannot be empty', 'danger');
                      } else {
                        if (this.AiringCupboardCylinderImage == 'data:image/jpeg;base64,null' || this.AiringCupboardCylinderImage == null) {
                          this.auth.showToast('Boiler Airing Cupboard Cylinder Image cannot be empty', 'danger');
                        } else {
                          if (this.ThermostatImage == 'data:image/jpeg;base64,null' || this.ThermostatImage == null) {
                            this.auth.showToast('Boiler Thermostat Image cannot be empty', 'danger');
                          } else {
                            if (this.BenchMarkCertificateImage == 'data:image/jpeg;base64,null' || this.BenchMarkCertificateImage == null) {
                              this.auth.showToast('Boiler BenchMark Certificate Image cannot be empty', 'danger');
                            } else {
                              if (this.flueInLoft == true) {
                                this.updateBoilerTable();
                              } else {
                                if (this.flueInLoftImage == 'data:image/jpeg;base64,null' || this.flueInLoftImage == null) {
                                  this.auth.showToast('Boiler Flue in Loft Image Image cannot be empty', 'danger');
                                } else {
                                  this.updateBoilerTable();
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
          key: "updateBoilerTable",
          value: function updateBoilerTable() {
            var _this18 = this;

            this.auth.database.executeSql("update  boilerinstallationpics set  HaveData=? where JOBGUID=? ", ['yes', this.data['JOBGUID']]).then(function (res) {
              var navigationExtras = {
                state: {
                  data: _this18.data
                }
              };

              _this18.router.navigate(['boilerinstallsign'], navigationExtras);
            })["catch"](function (e) {
              _this18.auth.alert('some thing went wrong please re install the app', 'Table update error');
            });
          }
        }]);

        return BoilerinstallnextPage;
      }();

      _BoilerinstallnextPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage
        }];
      };

      _BoilerinstallnextPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-boilerinstallnext',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boilerinstallnext_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_boilerinstallnext_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BoilerinstallnextPage);
      /***/
    },

    /***/
    33385:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/boilerinstallnext/boilerinstallnext.page.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"font-size: 16px;\">Boiler Installation Report Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]=\"BoilerImageStandback\">\n    <ion-item lines=\"full\">\n      <p><b>Boiler Image - </b>Stand back and take a pic of the boiler</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg1('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg1('cam')\"></ion-icon>\n    </ion-item>\n    <div class=\"outerdiv\">\n    <ion-card *ngIf=\"BoilerImage != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"BoilerImage\" />   <!-- BoilerImage -->\n    </ion-card>\n    </div>\n  </div>\n\n  <div [hidden]=\"Boiler_pipe_work\">\n    <ion-item lines=\"full\">\n      <p>Boiler_pipe_work Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg2('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg2('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"Boilerpipework != 'data:image/jpeg;base64,null' \">\n      <img [src]=\"Boilerpipework\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Condensate_termination\">\n    <ion-item lines=\"full\">\n      <p>Condensate_termination Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg3('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg3('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"CondensateterminationImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"CondensateterminationImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Fuse_spur\">\n    <ion-item lines=\"full\">\n      <p>Fuse_spur Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg4('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg4('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"FusespurImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"FusespurImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Internal_flue\">\n    <ion-item lines=\"full\">\n      <p>Internal_flue Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg5('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg5('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"InternalflueImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"InternalflueImage\" />\n    </ion-card>\n  </div>\n\n  \n  <div [hidden]=\"flueInLoft\">\n    <ion-item lines=\"full\">\n      <p>Flue In Loft</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"fili('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"fili('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"flueInLoftImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"flueInLoftImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"External_flue_terminal\">\n    <ion-item lines=\"full\">\n      <p>External_flue_terminal Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg6('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg6('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"ExternalflueterminalImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"ExternalflueterminalImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Airing_Cupboard_Cylinder\">\n    <ion-item lines=\"full\">\n      <p>Airing_Cupboard_Cylinder Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg7('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg7('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AiringCupboardCylinderImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AiringCupboardCylinderImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Thermostat\">\n    <ion-item lines=\"full\">\n      <p>Thermostat Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg8('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg8('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"ThermostatImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"ThermostatImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Bench_Mark_Certificate\">\n    <ion-item lines=\"full\">\n      <p>Bench_Mark_Certificate Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg9('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg9('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"BenchMarkCertificateImage!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"BenchMarkCertificateImage\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 1 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg10('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg10('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalOne!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalOne\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 2 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg11('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg11('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalTwo!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalTwo\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 3 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg12('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg12('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalThree!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalThree\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 4 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg13('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg13('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalFour!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalFour\" />\n    </ion-card>\n  </div>\n\n  <div [hidden]=\"Additional\">\n    <ion-item lines=\"full\">\n      <p>Additional 5 Image</p>\n      <ion-icon slot=\"end\" name=\"image\" (click)=\"uploadImg14('gal')\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"camera\" (click)=\"uploadImg14('cam')\"></ion-icon>\n    </ion-item>\n    <ion-card *ngIf=\"AdditionalFour!= 'data:image/jpeg;base64,null' \">\n      <img [src]=\"AdditionalFour\" />\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"boilerInsImage()\">Save</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    48298:
    /*!***************************************************************!*\
      !*** ./src/app/boilerinstallnext/boilerinstallnext.page.scss ***!
      \***************************************************************/

    /***/
    function _(module) {
      module.exports = ".fixed-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.outerdiv {\n  width: 100%;\n  height: 100%;\n}\n\nion-button {\n  height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvaWxlcmluc3RhbGxuZXh0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREoiLCJmaWxlIjoiYm9pbGVyaW5zdGFsbG5leHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZml4ZWQtaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59XG5cbi5vdXRlcmRpdntcbiAgICAgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICAxMDAlO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIGhlaWdodDogNTVweDtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_boilerinstallnext_boilerinstallnext_module_ts-es5.js.map