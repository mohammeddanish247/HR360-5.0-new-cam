(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    93092:
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageRoutingModule": function Tab2PageRoutingModule() {
          return (
            /* binding */
            _Tab2PageRoutingModule
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
      }];

      var _Tab2PageRoutingModule = /*#__PURE__*/_createClass(function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      });

      _Tab2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab2PageRoutingModule);
      /***/
    },

    /***/
    14608:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2-routing.module */
      93092);

      var _Tab2PageModule = /*#__PURE__*/_createClass(function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      });

      _Tab2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
      })], _Tab2PageModule);
      /***/
    },

    /***/
    70442:
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */
      72040);
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab2.page.scss */
      53934);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var ng_speed_test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-speed-test */
      2314);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _themes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../themes.service */
      97324);
      /* harmony import */


      var _capacitor_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/network */
      51573); //import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


      var _Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(navCtrl, apiGenerate, loadingCtrl, alertController, toastCtrl, router, httpClient, iab, speedTestService, storage, themeService) {
          _classCallCheck(this, Tab2Page);

          this.navCtrl = navCtrl;
          this.apiGenerate = apiGenerate;
          this.loadingCtrl = loadingCtrl;
          this.alertController = alertController;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.httpClient = httpClient;
          this.iab = iab;
          this.speedTestService = speedTestService;
          this.storage = storage;
          this.themeService = themeService;
          this.makeSet = new Set();
          this.modelSet = new Set();
          this.modelArray = [];
          this.count = 1;
          this.toggleDevMode = false;
          this.devFlag = true; // url =  "https://beta-wsmobileapp.247development.uk/service1.asmx/";

          this.url = "https://mobileappapi.home360.org.uk/service1.asmx/";
          this.isLoading = false;
          this.settingArray = [{
            name: "Engineer Signature",
            path: "EngineerSignature"
          }, {
            name: "Update Make & Model",
            path: "MakeModel"
          }, {
            name: "Update Gas Safe Licence",
            path: "gasSafe"
          }, {
            name: "Update Engineer Certificate Name",
            path: "EngineerCertificate"
          }, {
            name: "Activity Report",
            path: "ActivityReport"
          }, {
            name: "Intranet",
            path: "Intranet"
          }, {
            name: "Send Error Report",
            path: "ErrorLog"
          }, {
            name: "Update Firmware",
            path: "updateFirmware"
          }, {
            name: "Sync Log",
            path: "syncLog"
          }];
          this.DebugButtonFlag = false;
          this.getdateformat();
        }

        _createClass(Tab2Page, [{
          key: "checkNetwork",
          value: function checkNetwork() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_network__WEBPACK_IMPORTED_MODULE_5__.Network.getStatus();

                    case 2:
                      this.networkStatus = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingCtrl.create({
                        backdropDismiss: true
                      }).then(function (a) {
                        a.present().then(function () {});
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = false;
                      this.loadingCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getdateformat",
          value: function getdateformat() {
            var tommo;
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var date = new Date();

            if (tommo == "tommo") {
              date.setDate(date.getDate() + 1);
            } else if (tommo == "yesterday") {
              date.setDate(date.getDate() - 1);
            }

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var result = day + "/" + monthNames[monthIndex] + "/" + year;
            return result;
          }
        }, {
          key: "openOption",
          value: function openOption(setting) {
            if (setting.path === "EngineerSignature") {
              this.Signature();
            } else if (setting.path === "MakeModel") {
              this.checkNetwork();

              if (this.networkStatus.connected) {
                this.UpdateMakeModelFromServer();
              } else {
                this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
              }
            } else if (setting.path === "gasSafe") {
              this.UpdateGasSafe();
            } else if (setting.path === "EngineerCertificate") {
              this.UpdateEngineerCertificate();
            } else if (setting.path === "ActivityReport") {
              this.gotoActivityReport();
            } else if (setting.path === "Intranet") {
              this.gotoIntranet();
            } else if (setting.path === "ErrorLog") {
              this.errorLog();
            } else if (setting.path === "updateFirmware") {
              this.updateFirmware();
            } else if (setting.path === "syncLog") {
              this.syncLog();
            } else {
              this.navCtrl.navigateForward(setting.path);
            }
          }
        }, {
          key: "syncLog",
          value: function syncLog() {
            this.router.navigate(["test"]);
          }
        }, {
          key: "Signature",
          value: function Signature() {
            this.router.navigate(["engineersignature"]);
          }
        }, {
          key: "UpdateMakeModelFromServer",
          value: function UpdateMakeModelFromServer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this = this;

              var a;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.count = 1;
                      _context4.next = 3;
                      return this.apiGenerate.checkNetwork();

                    case 3:
                      a = _context4.sent;

                      if (a.connected) {
                        this.apiGenerate.presentCustomLoader("It may take some time. Please wait... ");
                        this.httpClient.get(this.url + "Service_GetMakeModel").subscribe(function (res) {
                          for (var i = 0; i < res.length; i++) {
                            _this.apiGenerate.database.executeSql('INSERT INTO makemodel (make , model) VALUES(?,?)', [res[i]["Make"], res[i]["Model"]]).then(function (resp) {
                              _this.apiGenerate.setLoadingText("It may take some time. Please wait... updating ".concat(_this.count, " of ").concat(res.length));

                              _this.count++;

                              if (_this.count == res.length) {
                                _this.apiGenerate.setLoadingText("It may take some time. Please wait... updating boilers makes.");

                                _this.httpClient.get(_this.url + "GetAllBoilerProductsName").subscribe(function (res) {
                                  _this.storage.set("boilers", res).then(function (succ) {
                                    console.log("### success boilers names inserted");

                                    _this.apiGenerate.dismissLoading();

                                    _this.apiGenerate.showToast("Make and Model Successfully Updated.", 'success');
                                  });
                                });
                              }
                            });
                          }
                        }, function (err) {
                          _this.apiGenerate.alert("Please Try Again.");

                          setTimeout(function () {
                            _this.apiGenerate.dismissLoading();
                          }, 300);
                        });
                      } else {
                        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "UpdateGasSafe",
          value: function UpdateGasSafe() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this2 = this;

              var a, alert;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context6.sent;

                      if (!a.connected) {
                        _context6.next = 11;
                        break;
                      }

                      _context6.next = 6;
                      return this.alertController.create({
                        header: "Update",
                        message: "Update Gas Safe Register License",
                        inputs: [{
                          name: "UpdateGas",
                          placeholder: "Enter Gas Safe Register License No."
                        }],
                        buttons: [{
                          text: "No"
                        }, {
                          text: "Yes",
                          handler: function handler(data) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                              var _this3 = this;

                              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      if (data.UpdateGas == "") {
                                        this.apiGenerate.showToast("Not Saved! Field can not be empty", "warning");
                                      } else {
                                        this.apiGenerate.updateEngInfo("GasSafeLicenseNumber", data.UpdateGas);
                                        this.storage.get("enggid").then(function (res) {
                                          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set("EngId", res).set("Info", data.UpdateGas);

                                          _this3.apiGenerate.httpSend("Service_UpdateEngGasSafeLicense", params, "post").subscribe(function (res) {
                                            console.log(res['Msg']);

                                            _this3.apiGenerate.showToast("".concat(data.UpdateGas, " Gas Safe License Successfully Updated."), 'success');
                                          });
                                        });
                                      }

                                    case 1:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }
                        }]
                      });

                    case 6:
                      alert = _context6.sent;
                      _context6.next = 9;
                      return alert.present();

                    case 9:
                      _context6.next = 12;
                      break;

                    case 11:
                      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "UpdateEngineerCertificate",
          value: function UpdateEngineerCertificate() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this4 = this;

              var a, alert;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context8.sent;

                      if (!a.connected) {
                        _context8.next = 11;
                        break;
                      }

                      _context8.next = 6;
                      return this.alertController.create({
                        header: "Update",
                        message: "Update Engineer Certificate Name",
                        inputs: [{
                          name: "UpdateEng",
                          placeholder: "Write the name"
                        }],
                        buttons: [{
                          text: "No"
                        }, {
                          text: "Yes",
                          handler: function handler(data) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                              var _this5 = this;

                              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                                while (1) {
                                  switch (_context7.prev = _context7.next) {
                                    case 0:
                                      if (data.UpdateEng == "") {} else {
                                        this.storage.get("enggid").then(function (res) {
                                          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set("EngId", res).set("Info", data.UpdateEng);

                                          _this5.apiGenerate.httpSend("Service_UpdateEngCertName", params, "post").subscribe(function (res) {
                                            console.log(res['Msg']);

                                            _this5.apiGenerate.showToast("Update Engineer Certificate Name Successfully Updated.", 'success');
                                          });
                                        });
                                      }

                                    case 1:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }
                              }, _callee7, this);
                            }));
                          }
                        }]
                      });

                    case 6:
                      alert = _context8.sent;
                      _context8.next = 9;
                      return alert.present();

                    case 9:
                      _context8.next = 12;
                      break;

                    case 11:
                      this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "gotoActivityReport",
          value: function gotoActivityReport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var a, browser;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context9.sent;

                      if (a.connected) {
                        browser = this.iab.create("https://engineeractivity.home360.org.uk/Home/EngineerActivityReport?id=" + this.ID, '_self', {
                          zoom: 'no'
                        });
                      } else {
                        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                      }

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "gotoIntranet",
          value: function gotoIntranet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var a, browser;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context10.sent;

                      if (a.connected) {
                        browser = this.iab.create("https://intranet.home360.org.uk/", '_self', {
                          zoom: 'no'
                        });
                      } else {
                        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                      }

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "errorLog",
          value: function errorLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var _this6 = this;

              var a;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context11.sent;

                      if (a.connected) {
                        this.apiGenerate.sendErrorLog().then(function (res) {
                          _this6.apiGenerate.showToast(res);
                        });
                      } else {
                        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                      }

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "updateFirmware",
          value: function updateFirmware() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var _this7 = this;

              var a;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.apiGenerate.checkNetwork();

                    case 2:
                      a = _context12.sent;

                      if (a.connected) {
                        this.apiGenerate.presentLoading("Please wait while we updating your Firmware.");
                        this.apiGenerate.speedCheck().then(function (resp) {
                          if (resp == "TimeOut") {
                            _this7.apiGenerate.dismissLoading();

                            _this7.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again.", "Connection TimeOut");
                          } else {
                            if (resp > 0.5) {
                              _this7.httpClient.get(_this7.url + "Service_UpdateFirmware").subscribe(function (res) {
                                _this7.liveUrl = res["liveUrl"];
                                _this7.debugUrl = res["debugUrl"];

                                _this7.apiGenerate.database.executeSql("update firmwareurl set live = ?, debug = ? where id=1", [_this7.liveUrl, _this7.debugUrl]).then(function () {
                                  _this7.apiGenerate.url = _this7.liveUrl;

                                  _this7.apiGenerate.showToast("Firmware Updated Successfully", "success");

                                  _this7.DebugButtonFlag = true;

                                  _this7.storage.set("updateFirmware", "true");

                                  _this7.apiGenerate.dismissLoading();
                                });
                              }, function (err) {
                                _this7.apiGenerate.showToast("Error Occured try again later" + err);

                                _this7.apiGenerate.dismissLoading();
                              });
                            } else {
                              _this7.apiGenerate.dismissLoading();

                              _this7.apiGenerate.alert("There migth be an issue with your internet connection. Please check you internet connection and try again", "Connection Failed");
                            }
                          }
                        })["catch"](function (e) {
                          _this7.apiGenerate.dismissLoading();

                          _this7.apiGenerate.alert(JSON.stringify(e));
                        });
                      } else {
                        this.apiGenerate.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                      }

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "updateUrlInService",
          value: function updateUrlInService() {
            this.apiGenerate.database.executeSql("select * from");
          }
        }, {
          key: "toggle",
          value: function toggle(event) {
            var _this8 = this;

            if (this.toggleDevMode == true) {
              this.themeService.enableDebugMode();
              this.storage.set("debugmode", "true");
              this.apiGenerate.database.executeSql('select Debug from firmwareurl', []).then(function (res) {
                _this8.apiGenerate.url = res; // if(res == "" || res == undefined || res == null ){
                //   this.themeService.enableLiveMode();
                //   this.storage.set("debugmode","false");
                //   this.toggleDevMode = false;
                //   this.apiGenerate.alert("firmware is not updated please update the firmware to use debug mode.");
                // }else{
                //   this.apiGenerate.url = res;
                // }
              });
            } else {
              this.themeService.enableLiveMode();
              this.storage.set("debugmode", "false");
              this.apiGenerate.database.executeSql('select Live from firmwareurl', []).then(function (res) {
                _this8.apiGenerate.url = res;
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.checkNetwork();
            this.storage.get("debugmode").then(function (res) {
              if (res == "true") {
                _this9.toggleDevMode = true;
              } else {
                _this9.toggleDevMode = false;
              }
            });
            this.storage.get("updateFirmware").then(function (res) {
              if (res == "true") {
                _this9.DebugButtonFlag = true;
              }
            }); // this.apiGenerate.database.executeSql("select toggle from devmode where name = ?",["DanishDev"]).then(res=>{
            //   if(res.rows.item(0)["toggle"]=="true"){
            //     this.devFlag = false;
            //   }else{
            //     this.devFlag = true;
            //   }
            // });
          }
        }]);

        return Tab2Page;
      }();

      _Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser
        }, {
          type: ng_speed_test__WEBPACK_IMPORTED_MODULE_10__.SpeedTestService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage
        }, {
          type: _themes_service__WEBPACK_IMPORTED_MODULE_4__.ThemesService
        }];
      };

      _Tab2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-tab2",
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _Tab2Page);
      /***/
    },

    /***/
    72040:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"slide bg\">\n    <p>\n      <img src=\"../../assets/images/logobig.png\" />\n    </p>\n  </div>\n  <div class=\"details\">\n\n    <ion-card *ngFor=\"let setting of settingArray\" (click)=\"openOption(setting)\">\n      <ion-item color=\"secondary\" line='none'>\n        <h2>{{setting.name}}</h2>\n      </ion-item>\n    </ion-card>\n\n    <ion-card *ngIf=\"DebugButtonFlag\">\n      <ion-item lines=\"none\" color=\"secondary\">\n        <h2>Debug Mode</h2>\n        <ion-toggle slot=\"end\" color=\"light\"  name=\"togglebutton\" [(ngModel)]=\"toggleDevMode\" (ionChange)=\"toggle($event)\"></ion-toggle>\n      </ion-item>            \n    </ion-card>\n\n    <!-- Danish -->\n  <div class=\"ion-text-center\">\n    <h6 style=\"color:rgb(98, 98, 98); bottom: 0px;\">Beta Version 2.5</h6>\n    <!-- <h6 style=\"color:rgb(98, 98, 98); bottom: 0px;\" [hidden]=\"devFlag\">Developer Mode</h6> -->\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    53934:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      module.exports = "ion-content {\n  position: absolute;\n}\nion-content .slide {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 40%;\n}\nion-content .slide p {\n  text-align: center;\n  margin-top: 20%;\n}\nion-content .details {\n  position: absolute;\n  top: 30%;\n  width: 100%;\n  background-color: white;\n  z-index: 1;\n  border-top-left-radius: 26px;\n  border-top-right-radius: 26px;\n}\nion-card {\n  -webkit-margin-start: 20px;\n          margin-inline-start: 20px;\n  -webkit-margin-end: 20px;\n          margin-inline-end: 20px;\n  border-radius: 15px;\n}\nion-card h2 {\n  color: #ffffff;\n  font-size: large;\n}\nion-toggle {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBSlI7QUFXQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFZQTtFQUNJLFdBQUE7QUFUSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAuc2xpZGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDg1JSwgMTUlKTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNnB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjZweDtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBoMntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxufVxuXG5pb24tdG9nZ2xlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map