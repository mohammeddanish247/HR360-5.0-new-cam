(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_querychk_querychk_module_ts"], {
    /***/
    55418:
    /*!*****************************************************!*\
      !*** ./src/app/querychk/querychk-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuerychkPageRoutingModule": function QuerychkPageRoutingModule() {
          return (
            /* binding */
            _QuerychkPageRoutingModule
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


      var _querychk_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./querychk.page */
      86506);

      var routes = [{
        path: '',
        component: _querychk_page__WEBPACK_IMPORTED_MODULE_0__.QuerychkPage
      }];

      var _QuerychkPageRoutingModule = /*#__PURE__*/_createClass(function QuerychkPageRoutingModule() {
        _classCallCheck(this, QuerychkPageRoutingModule);
      });

      _QuerychkPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _QuerychkPageRoutingModule);
      /***/
    },

    /***/
    70017:
    /*!*********************************************!*\
      !*** ./src/app/querychk/querychk.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuerychkPageModule": function QuerychkPageModule() {
          return (
            /* binding */
            _QuerychkPageModule
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


      var _querychk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./querychk-routing.module */
      55418);
      /* harmony import */


      var _querychk_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./querychk.page */
      86506);

      var _QuerychkPageModule = /*#__PURE__*/_createClass(function QuerychkPageModule() {
        _classCallCheck(this, QuerychkPageModule);
      });

      _QuerychkPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _querychk_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuerychkPageRoutingModule],
        declarations: [_querychk_page__WEBPACK_IMPORTED_MODULE_1__.QuerychkPage]
      })], _QuerychkPageModule);
      /***/
    },

    /***/
    86506:
    /*!*******************************************!*\
      !*** ./src/app/querychk/querychk.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuerychkPage": function QuerychkPage() {
          return (
            /* binding */
            _QuerychkPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_querychk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./querychk.page.html */
      6151);
      /* harmony import */


      var _querychk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./querychk.page.scss */
      18185);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _QuerychkPage = /*#__PURE__*/function () {
        function QuerychkPage(auth, router, route) {
          _classCallCheck(this, QuerychkPage);

          this.auth = auth;
          this.router = router;
          this.route = route;
          this.data = [];
        }

        _createClass(QuerychkPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
                console.log('#devdx JOBGUID: ', _this.data['JOBGUID']);
              }
            });
          }
        }, {
          key: "show",
          value: function show() {
            this.auth.database.executeSql('select * from completeservice where JOBGUID=? ', [this.data["JOBGUID"]]).then(function (completeServiceRes) {
              console.log("#devdx success gett " + JSON.stringify(completeServiceRes.rows.length));

              for (var i = 0; i < completeServiceRes.rows.length; i++) {
                console.log("#devdx success gett " + JSON.stringify(completeServiceRes.rows.item(i)));
              }
            })["catch"](function (e) {
              console.log("#devdx error gett " + JSON.stringify(e));
            });
          } //    where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long,this.data['CLAIMJOBID'], 'yes',this.data['BackgroundColour'], this.data['JOBGUID']])

        }, {
          key: "store",
          value: function store() {
            this.auth.database.executeSql('update  completeservice set OUTCOME=?,JOBNOTE=?,PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', ["jboutcome", "additional", "parts", "file", "date", "lat", "long", "claimguid", "canntcpltresn", "isservicecompltd", "bgclr", this.data["JOBGUID"]]).then(function (res) {
              console.log("#devdx stored " + JSON.stringify(res));
            })["catch"](function (e) {
              console.log("#devdx stored error " + JSON.stringify(e));
            }); // this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=? where JOBGUID=?",["latti","longitude","OnRouteDT",this.data['JOBGUID']]).then(
            //   (res)=>{
            //     this.auth.dismissLoading();
            //       console.log('### arrived '+JSON.stringify(res));         
            //   }
            // ).catch((e)=>{console.log('error'+JSON.stringify(e));
            // });
          }
        }, {
          key: "insert",
          value: function insert() {
            this.auth.database.executeSql("insert into  completeservice (JOBGUID) values(?)", ["sabir"]).then(function (res) {
              console.log('# complete Service Table inserted ');
            })["catch"](function (e) {
              console.log('# complete  Service Table inseet ERROR ' + JSON.stringify(e));
            });
          }
        }, {
          key: "createCompleteServiceTable",
          value: function createCompleteServiceTable() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.auth.database.executeSql("create table IF NOT EXISTS completeservice (JOBGUID  VARCHAR(32)  , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), ComboIsCompleted VARCHAR(32), CantCompleteReason VARCHAR(32),  IsServiceCompleted VARCHAR(32), BackgroundColour VARCHAR(32))", []).then(function (res) {
                console.log('# complete Service Table created ');
                resolve('complete Service table created success');
              })["catch"](function (e) {
                console.log('# complete  Service Table Create ERROR ' + JSON.stringify(e));
              });
            });
          }
        }]);

        return QuerychkPage;
      }();

      _QuerychkPage.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _QuerychkPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-querychk',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_querychk_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_querychk_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _QuerychkPage);
      /***/
    },

    /***/
    6151:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/querychk/querychk.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>querychk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button (click)=\"store()\">Store</ion-button>\n  <ion-button (click)=\"show()\">Show</ion-button>\n  <ion-button (click)=\"insert()\">Insert</ion-button>\n  <ion-button (click)=\"createCompleteServiceTable()\">create</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    18185:
    /*!*********************************************!*\
      !*** ./src/app/querychk/querychk.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVyeWNoay5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_querychk_querychk_module_ts-es5.js.map