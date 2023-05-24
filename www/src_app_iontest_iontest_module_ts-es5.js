(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_iontest_iontest_module_ts"], {
    /***/
    53698:
    /*!***************************************************!*\
      !*** ./src/app/iontest/iontest-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IontestPageRoutingModule": function IontestPageRoutingModule() {
          return (
            /* binding */
            _IontestPageRoutingModule
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


      var _iontest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./iontest.page */
      79007);

      var routes = [{
        path: '',
        component: _iontest_page__WEBPACK_IMPORTED_MODULE_0__.IontestPage
      }];

      var _IontestPageRoutingModule = /*#__PURE__*/_createClass(function IontestPageRoutingModule() {
        _classCallCheck(this, IontestPageRoutingModule);
      });

      _IontestPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IontestPageRoutingModule);
      /***/
    },

    /***/
    96570:
    /*!*******************************************!*\
      !*** ./src/app/iontest/iontest.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IontestPageModule": function IontestPageModule() {
          return (
            /* binding */
            _IontestPageModule
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


      var _iontest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./iontest-routing.module */
      53698);
      /* harmony import */


      var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-dynamic-forms/ui-ionic */
      81029);
      /* harmony import */


      var _iontest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./iontest.page */
      79007);

      var _IontestPageModule = /*#__PURE__*/_createClass(function IontestPageModule() {
        _classCallCheck(this, IontestPageModule);
      });

      _IontestPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _iontest_routing_module__WEBPACK_IMPORTED_MODULE_0__.IontestPageRoutingModule, _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__.DynamicFormsIonicUIModule],
        declarations: [_iontest_page__WEBPACK_IMPORTED_MODULE_1__.IontestPage]
      })], _IontestPageModule);
      /***/
    },

    /***/
    79007:
    /*!*****************************************!*\
      !*** ./src/app/iontest/iontest.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IontestPage": function IontestPage() {
          return (
            /* binding */
            _IontestPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iontest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./iontest.page.html */
      56542);
      /* harmony import */


      var _iontest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./iontest.page.scss */
      91285);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-dynamic-forms/core */
      57636);
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./model */
      98580);

      var _IontestPage = /*#__PURE__*/function () {
        function IontestPage(formService) {
          _classCallCheck(this, IontestPage);

          this.formService = formService;
          this.formModel = _model__WEBPACK_IMPORTED_MODULE_2__.MY_FORM_MODEL;
        }

        _createClass(IontestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formService.createFormGroup(this.formModel);
          } // onIonEvent($event){
          //   console.log($event);
          // }

        }, {
          key: "onChange",
          value: function onChange($event) {
            console.log('sa');
          }
        }]);

        return IontestPage;
      }();

      _IontestPage.ctorParameters = function () {
        return [{
          type: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__.DynamicFormService
        }];
      };

      _IontestPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-iontest',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iontest_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_iontest_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _IontestPage);
      /***/
    },

    /***/
    98580:
    /*!**********************************!*\
      !*** ./src/app/iontest/model.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MakeAnswer": function MakeAnswer() {
          return (
            /* binding */
            _MakeAnswer
          );
        },

        /* harmony export */
        "ModelAnswer": function ModelAnswer() {
          return (
            /* binding */
            _ModelAnswer
          );
        },

        /* harmony export */
        "MY_FORM_MODEL": function MY_FORM_MODEL() {
          return (
            /* binding */
            _MY_FORM_MODEL
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ng-dynamic-forms/core */
      57636);

      var _MakeAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "MakeAnswer",
        label: "Make Answer",
        maxLength: 15,
        placeholder: "Enter Make",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _ModelAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "ModelAnswer",
        label: "Model Answer ",
        maxLength: 15,
        placeholder: "Enter Model",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _MY_FORM_MODEL = [_MakeAnswer, _ModelAnswer];
      /***/
    },

    /***/
    56542:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/iontest/iontest.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n   \n\n  <p>sabr</p>\n\n  <form class=\"form-vertical\" [formGroup]=\"formGroup\" >\n\n      <dynamic-material-form [group]=\"formGroup\"\n                             [layout]=\"formLayout\"\n                             [model]=\"formModel\"     \n                             (change)=\"onChange($event)\"\n                              >\n      </dynamic-material-form>\n\n  </form>\n\n \n  <ion-button  [hidden]=\"SaveFlag\"> save </ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    91285:
    /*!*******************************************!*\
      !*** ./src/app/iontest/iontest.page.scss ***!
      \*******************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpb250ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_iontest_iontest_module_ts-es5.js.map