(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_splash_splash_module_ts"], {
    /***/
    3523:
    /*!*************************************************!*\
      !*** ./src/app/splash/splash-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPageRoutingModule": function SplashPageRoutingModule() {
          return (
            /* binding */
            _SplashPageRoutingModule
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


      var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splash.page */
      84399);

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
      }];

      var _SplashPageRoutingModule = /*#__PURE__*/_createClass(function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      });

      _SplashPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SplashPageRoutingModule);
      /***/
    },

    /***/
    89623:
    /*!*****************************************!*\
      !*** ./src/app/splash/splash.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPageModule": function SplashPageModule() {
          return (
            /* binding */
            _SplashPageModule
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


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splash-routing.module */
      3523);
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash.page */
      84399);

      var _SplashPageModule = /*#__PURE__*/_createClass(function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      });

      _SplashPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
      })], _SplashPageModule);
      /***/
    },

    /***/
    84399:
    /*!***************************************!*\
      !*** ./src/app/splash/splash.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPage": function SplashPage() {
          return (
            /* binding */
            _SplashPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./splash.page.html */
      851);
      /* harmony import */


      var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash.page.scss */
      299);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _SplashPage = /*#__PURE__*/function () {
        function SplashPage(router) {
          _classCallCheck(this, SplashPage);

          this.router = router;
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            setTimeout(function () {
              _this.router.navigate(['login']);
            }, 500);
          }
        }]);

        return SplashPage;
      }();

      _SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _SplashPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SplashPage);
      /***/
    },

    /***/
    851:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/splash/splash.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"body\">\n    <table>\n     <tr>\n      <td style=\"font-size:13vw;\">HR360</td>\n     </tr>\n    </table>\n </div>\n <!-- <lottie-player src=\"https://assets8.lottiefiles.com/packages/lf20_zrcx7oej.json\"  background=\"transparent\"  speed=\"0.4\"  style=\"width: 65%; height: 90%; margin:0 auto;\" autoplay></lottie-player> -->\n</ion-content>\n";
      /***/
    },

    /***/
    299:
    /*!*****************************************!*\
      !*** ./src/app/splash/splash.page.scss ***!
      \*****************************************/

    /***/
    function _(module) {
      module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans&subset=latin,latin-ext\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\n:root,\n.body {\n  height: 100%;\n  overflow: hidden;\n}\n.body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv {\n  background: 50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom, white, transparent, transparent);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font-size: 6vw;\n  font-family: \"Poppins\";\n  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;\n}\n@keyframes reveal {\n  80% {\n    letter-spacing: 10px;\n  }\n  100% {\n    background-size: 300% 300%;\n  }\n}\n@keyframes glow {\n  40% {\n    text-shadow: 0 0 5px #fff;\n    color: #fff;\n  }\n}\nion-content {\n  --ion-background-color: #fff;\n}\ntable, th, td {\n  vertical-align: middle;\n  text-align: right;\n  padding: 2vw;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsc0VBQUE7QUFDQSwwRkFBQTtBQUNBLDRFQUFBO0FBQ1I7O0VBR0UsWUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHQTtFQUNFLDBHQUFBO0VBRUEsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUZBQUE7QUFERjtBQUlFO0VBQ0U7SUFDRSxvQkFBQTtFQUZKO0VBSUU7SUFDRSwwQkFBQTtFQUZKO0FBQ0Y7QUFJRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0VBRko7QUFDRjtBQU1BO0VBQ0UsNEJBQUE7QUFIRjtBQU1BO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSEoiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc2VmaW4rU2FucyZzdWJzZXQ9bGF0aW4sbGF0aW4tZXh0XCIpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTsgXG46cm9vdCxcbi5ib2R5IHtcbiAgLy9jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3NCk7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy9iYWNrZ3JvdW5kOiAjZGQyMTI3O1xufVxuXG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZGl2IHtcbiAgYmFja2dyb3VuZDogNTAlIDEwMCUgLyA1MCUgNTAlIG5vLXJlcGVhdFxuICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sIHJnYigyNTUsIDI1NSwgMjU1KSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDZ2dztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBhbmltYXRpb246IHJldmVhbCAzMDAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHMgMjAwbXMsXG4gICAgICAgICAgICAgZ2xvdyAyNTAwbXMgbGluZWFyIGluZmluaXRlIDIwMDBtcztcblxuICBAa2V5ZnJhbWVzIHJldmVhbCB7XG4gICAgODAle1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDMwMCU7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZ2xvdyB7XG4gICAgNDAlIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn0gIFxuXG5pb24tY29udGVudHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAydnc7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_splash_splash_module_ts-es5.js.map