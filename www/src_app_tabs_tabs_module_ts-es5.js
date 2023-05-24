(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    80530:
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab1/tab1.module */
            2168)).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab2/tab2.module */
            14608)).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab3/tab3.module */
            53746)).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var _TabsPageRoutingModule = /*#__PURE__*/_createClass(function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      });

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    15564:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      80530);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var _TabsPageModule = /*#__PURE__*/_createClass(function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      });

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    7942:
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */
      8711);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      79593);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TabsPage = /*#__PURE__*/_createClass(function TabsPage() {
        _classCallCheck(this, TabsPage);
      });

      _TabsPage.ctorParameters = function () {
        return [];
      };

      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TabsPage);
      /***/
    },

    /***/
    8711:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>My Jobs</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Settings</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" (click)=\"LogoutAction()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n      <ion-label>LogOut</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    79593:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      module.exports = "ion-tab-button {\n  background-color: transparent;\n}\nion-tab-button ion-icon {\n  color: #d8dadb;\n}\nion-tab-button ion-label {\n  color: #d8dadb;\n}\nion-tab-bar {\n  background-color: #062c47;\n}\n.tab-selected ion-icon {\n  color: #00aeed;\n}\n.tab-selected ion-label {\n  color: #00aeed;\n}\n#tab-button-tab1:after,\n#tab-button-tab2:after,\n#tab-button-tab3:after {\n  background: none repeat scroll 0 0 transparent;\n  content: \"\";\n  display: block;\n  height: 5px;\n  position: absolute;\n  transition: width 0.4s ease 0s, background-color 0.4s ease;\n  width: 0;\n  bottom: 0;\n}\n#tab-button-tab1.tab-selected::after,\n#tab-button-tab2.tab-selected::after,\n#tab-button-tab3.tab-selected::after {\n  width: 33%;\n  background: #00aeed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFJQTtFQUNJLHlCQUFBO0FBREo7QUFPQTtFQUNJLGNBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBU0E7OztFQUdJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBTko7QUFVQTs7O0VBR0ksVUFBQTtFQUNBLG1CQUFBO0FBUEoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiAjZDhkYWRiO1xuICAgICAgXG4gICAgfVxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgY29sb3I6I2Q4ZGFkYjtcbiAgICB9XG5cbn1cblxuaW9uLXRhYi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDg1JSwgMTUlKTtcbn1cblxuICAgIFxuXG5cbi50YWItc2VsZWN0ZWQgaW9uLWljb257XG4gICAgY29sb3I6ICMwMGFlZWQ7XG5cbn1cbi50YWItc2VsZWN0ZWQgaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjMDBhZWVkO1xuXG59XG5cblxuI3RhYi1idXR0b24tdGFiMTphZnRlcixcbiN0YWItYnV0dG9uLXRhYjI6YWZ0ZXIsXG4jdGFiLWJ1dHRvbi10YWIzOmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgd2lkdGg6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgXG59XG5cbiN0YWItYnV0dG9uLXRhYjEudGFiLXNlbGVjdGVkOjphZnRlcixcbiN0YWItYnV0dG9uLXRhYjIudGFiLXNlbGVjdGVkOjphZnRlcixcbiN0YWItYnV0dG9uLXRhYjMudGFiLXNlbGVjdGVkOjphZnRlcntcbiAgICB3aWR0aDogMzMlO1xuICAgIGJhY2tncm91bmQ6ICMwMGFlZWQ7XG4gICAgXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map