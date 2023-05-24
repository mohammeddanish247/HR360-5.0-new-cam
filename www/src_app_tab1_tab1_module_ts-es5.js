(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    42580:
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }];

      var _Tab1PageRoutingModule = /*#__PURE__*/_createClass(function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      });

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      42580);

      var _Tab1PageModule = /*#__PURE__*/_createClass(function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      });

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */
      32817);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      39115);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      89131);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      5954);
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      33293);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      77607);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _themes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../themes.service */
      97324);

      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(storage, nativeGeocoder, router, auth, geolocation, androidPermission, locationAccuracy, alertCtrl, themeService, loadingController) {
          _classCallCheck(this, Tab1Page);

          this.storage = storage;
          this.nativeGeocoder = nativeGeocoder;
          this.router = router;
          this.auth = auth;
          this.geolocation = geolocation;
          this.androidPermission = androidPermission;
          this.locationAccuracy = locationAccuracy;
          this.alertCtrl = alertCtrl;
          this.themeService = themeService;
          this.loadingController = loadingController;
          this.model = []; //public modell: String[];

          this.address = ""; // syncFlag :boolean = true;

          this.jobfetchmsg = "Please wait whilst the jobs are loading up. It may Take some time.";
          this.retryCount = 0;
          this.isJobsfetched = false;
          this.locationCoords = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
          };
          this.timetest = Date.now();
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.auth.checkGPSPermission();
            this.getLocation();
            this.getJobs(); // START FOR SYNC LOG ONLY

            this.auth.database.executeSql('create table if not exists SyncLog (JOBGUID  VARCHAR(32),  ActionName VARCHAR(32),  Msg varchar(32))', []).then(function (res) {
              console.log('SyncLog created success ');
            })["catch"](function (e) {
              console.log('SyncLog created failed ' + JSON.stringify(e));
            }); // END FOR SYNC LOG ONLY
          }
        }, {
          key: "showSyncAlert",
          value: function showSyncAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: "Are you sure?",
                        message: "You D",
                        backdropDismiss: false,
                        buttons: [{
                          text: "Sync Now",
                          handler: function handler() {
                            _this.syncAllJobs();
                          }
                        }, {
                          text: "Sync Later",
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "syncClick",
          value: function syncClick() {
            this.syncDataToServer();
          }
        }, {
          key: "getJobs",
          value: function getJobs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var networkStatus;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.auth.checkNetwork();

                    case 2:
                      networkStatus = _context2.sent;
                      this.storage.get("datasyncstatus").then(function (datasyncstatus) {
                        // this.storage.get('loginCount').then((res)=>{
                        //   console.log("plan login count after login page "+res);
                        if (datasyncstatus == "novice") {
                          console.log("Plan A"); // EXECUTE PLAN B put jobslist from API

                          if (networkStatus.connected) {
                            _this2.getJobsfromApi();
                          } else {
                            _this2.auth.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
                          }
                        } else {
                          console.log("Plan B");

                          _this2.getJobListFromLocal();
                        } // } else if ((datasyncstatus == "mature" && res > 1)||(datasyncstatus == "novice" && res > 1)) {
                        //   console.log("Plan B");
                        //   //Execute Plan A
                        //   // sync data to server
                        //   // empty tables
                        //   // then execute Plan B
                        //   //this.syncDataToServer();
                        //   this.getJobListFromLocal();
                        // } else{
                        //   console.log("Plan C");
                        //   if (networkStatus.connected) {
                        //     this.syncDataToServer();
                        //   } else {
                        //     this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
                        //   }
                        // }
                        // }).catch((e) => {
                        //   this.auth.showToast("LoginCount Error Somthing went wrong! unable to access ionic storage" + e,'danger');
                        // });

                      })["catch"](function (e) {
                        _this2.auth.showToast("data Sync status Error Somthing went wrong! unable to access ionic storage" + e, 'danger');
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {}
        }, {
          key: "gotoDetails",
          value: function gotoDetails(CLAIMGUID) {
            var _this3 = this;

            this.auth.database.executeSql("select * from jobslist where CLAIMGUID=?", [CLAIMGUID]).then(function (res) {
              console.log("dddd " + JSON.stringify(res.rows.item(0)));
              var dat = {
                CLAIMGUID: res.rows.item(0)["CLAIMGUID"],
                CLAIMRef: res.rows.item(0)["CLAIMRef"],
                CLAIMJOBID: res.rows.item(0)["CLAIMJOBID"],
                JOBGUID: res.rows.item(0)["JOBGUID"],
                RiskPostCode: res.rows.item(0)["RiskPostCode"],
                ProductName: res.rows.item(0)["ProductName"],
                ContactName: res.rows.item(0)["ContactName"],
                BookingDate: res.rows.item(0)["BookingDate"],
                AppointmentStartTime: res.rows.item(0)["AppointmentStartTime"],
                AppointmentEndTime: res.rows.item(0)["AppointmentEndTime"],
                BookingTimeType: res.rows.item(0)["BookingTimeType"],
                RiskAddress: res.rows.item(0)["RiskAddress"],
                phone: res.rows.item(0)["phone"],
                HomePhone: res.rows.item(0)["HomePhone"],
                ProductTypeId: res.rows.item(0)["ProductTypeId"],
                IsClaim: res.rows.item(0)["IsClaim"],
                BackgroundColour: res.rows.item(0)["BackgroundColour"],
                CLIENTNAME: res.rows.item(0)["CLIENTNAME"],
                ProductTypeName: res.rows.item(0)["ProductTypeName"],
                EngName: res.rows.item(0)["EngName"]
              };
              var navigationExtras = {
                state: {
                  data: dat
                }
              }; //querychk

              _this3.router.navigate(["details"], navigationExtras).then(function (res) {
                return console.log(res);
              })["catch"](function (e) {
                return console.log(e);
              });
            })["catch"](function (e) {
              console.log(e);
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this4 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              var options = {
                useLocale: true,
                maxResults: 5
              };

              _this4.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options).then(function (result) {
                var responseAddress = [];

                for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                      key = _Object$entries$_i[0],
                      value = _Object$entries$_i[1];

                  if (value.length > 0) {
                    responseAddress.push(value);
                  }
                }

                responseAddress.reverse();

                for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
                  var _value = _responseAddress[_i2];
                  _this4.address += _value + ", ";
                }

                _this4.address = _this4.address.slice(); //  this.addressConfiramtion(this.address, lattitude, longitude);
              })["catch"]();
            })["catch"](function (error) {});
          }
        }, {
          key: "getJobListFromLocal",
          value: function getJobListFromLocal() {
            var _this5 = this;

            console.log("calling get job from local");
            this.auth.database.executeSql("select * from jobslist ORDER BY RouteOrder ASC", []).then(function (res) {
              for (var i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
                _this5.model.push(res.rows.item(i));
              }
            })["catch"](function (e) {
              _this5.auth.showToast("Error Fetching local jobs table " + JSON.stringify(e), 'danger');
            });
          } // TODO
          // getJobListFromAPI() {
          //   this.auth.firmwareUpdateCheck().then(res=>{
          //     console.log("Danish "+res);      
          //     this.auth.presentCustomLoader(this.jobfetchmsg);
          //     this.storage
          //       .get("enggid")
          //       .then((res) => {
          //         this.auth.speedCheck().then((resp : string|number)=>{     
          //           if (resp == "TimeOut") {           
          //             this.auth.dismissLoading();
          //             this.retryAlert("Need a Good internet connection. Please try again later after some time","Connection TimeOut");
          //           } else {
          //             if (resp > 1) {
          //               let params = new HttpParams()
          //               .set("EngineerID", res)
          //               .set("AppVersion", "2.1.8");
          //               console.log("DanishDev");
          //               this.auth
          //               .httpSend("Service_GetJobsForAEngineer2", params, "post")
          //               .subscribe(
          //                 (res) => {
          //                   this.model = [];
          //                   this.model = res;
          //                   this.model = this.model.sort((a,b)=> {
          //                     return a.RouteOrder - b.RouteOrder ;
          //                   });
          //                   if (this.model.length == 0) {
          //                     this.auth.alert("No Jobs Found or You are not assigned to any job. Please Try again after some time.");
          //                     this.auth.dismissLoading();
          //                   } else {
          //                     this.insertJobsInDB();
          //                   }
          //                 },
          //                 (err) => {
          //                   this.retryAlert("Cannot get Jobs. There might be some web service issue. Please try again after some time.","Web Service Issue");
          //                   setTimeout(() => {
          //                     this.auth.dismissLoading();
          //                   }, 300);              
          //                 }
          //               );
          //             } else {              
          //               this.auth.dismissLoading();
          //               this.retryAlert("Unable to Sync/Get Jobs! There might be some issue in your Internet connection, either it is too slow or it is not connected. Please Try again later.","Internet Connection Failed")
          //             }
          //           }
          //         }).catch(e=>{
          //           this.auth.dismissLoading();           
          //           this.retryAlert("There might be some issue please try again.","Unknown Error");
          //         });
          //       })
          //       .catch((e) => {
          //         this.auth.dismissLoading();
          //         this.auth.showToast("Erro Cannot get Engg. Info, Please Logout and Login again",'danger');
          //       });
          //   });
          // }

        }, {
          key: "getJobsfromApi",
          value: function getJobsfromApi() {
            var _this6 = this;

            this.auth.getLocation();
            this.auth.presentCustomLoader(this.jobfetchmsg).then(function (res) {
              setTimeout(function () {
                if (!_this6.isJobsfetched) {
                  _this6.auth.dismissLoading();

                  console.log("### after 30 sec calling this");
                  if (!_this6.model.length) _this6.retryAlert('Somthing went wrong, Please re-sync.', "Unable to Get Jobs", "".concat(3 - _this6.retryCount, " attempts Left"));
                }
              }, 30000);
            });
            this.storage.get("enggid").then(function (res) {
              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("EngineerID", res).set("AppVersion", "2.2");
              console.log("DanishDev");

              _this6.auth.httpSend("Service_GetJobsForAEngineer2", params, "post").subscribe(function (res) {
                _this6.isJobsfetched = true;
                _this6.model = [];
                _this6.model = res;
                console.log("dddd " + JSON.stringify(_this6.model));
                _this6.model = _this6.model.sort(function (a, b) {
                  return a.RouteOrder - b.RouteOrder;
                });
                console.log("### after soring in model and sorting");

                if (_this6.model.length == 0) {
                  _this6.auth.alert("No Jobs Found or You are not assigned to any job. Please Try again after some time.");

                  _this6.auth.dismissLoading();

                  console.log("### no jobs found");
                } else {
                  console.log("### insert jobs in db calling");

                  _this6.insertJobsInDB();
                }
              }, function (err) {
                _this6.retryAlert("Cannot get Jobs. There might be some web service issue. Please try again after some time.", "Web Service Issue", "".concat(3 - _this6.retryCount, " attempts Left"));

                setTimeout(function () {
                  _this6.auth.dismissLoading();
                }, 300);
              });
            })["catch"](function (e) {
              _this6.auth.dismissLoading();

              _this6.retryAlert("Cannot get Engg Info, Please Logout and Login again", "Database Error", "".concat(3 - _this6.retryCount, " attempts Left"));
            });
          }
        }, {
          key: "insertJobsInDB",
          value: function insertJobsInDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this7 = this;

              var i, _iterator, _step, _loop;

              return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      i = 1;
                      _iterator = _createForOfIteratorHelper(this.model);
                      _context4.prev = 2;
                      _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                        var el;
                        return _regeneratorRuntime().wrap(function _loop$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                el = _step.value;
                                console.log("### updating ".concat(i, " of ").concat(_this7.model.length, " jobs"));

                                _this7.auth.setLoadingText("Please wait whilst the jobs are loading up. Updating ".concat(i, " of ").concat(_this7.model.length, " jobs"));

                                _context3.next = 5;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,HomePhone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [el.CLAIMJOBID, el.CLAIMGUID, el.JOBGUID, el.RiskPostCode, el.ProductName, el.ContactName, el.BookingDate, el.AppointmentStartTime, el.AppointmentEndTime, el.BookingTimeType, el.RiskAddress, el.phone, el.HomePhone, el.ProductTypeId, el.IsClaim, el.BackgroundColour, el.CLIENTNAME, el.ProductTypeName, el.ListType, el.CLAIMRef, el.RouteOrder, el.ParentJobGuid, el.EngName]).then(function () {
                                    resolve("");
                                    console.log("### jobslist inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### jobslist not inserted");
                                  });
                                });

                              case 5:
                                _context3.next = 7;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [el.JOBGUID]).then(function () {
                                    resolve("");
                                    console.log("### jobsstatus inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### jobsstatus not inserted");
                                  });
                                });

                              case 7:
                                _context3.next = 9;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into onroute (JOBGUID) values(?)", [el.JOBGUID]).then(function () {
                                    resolve("");
                                    console.log("### onroute inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### onroute not inserted");
                                  });
                                });

                              case 9:
                                _context3.next = 11;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into arrived (JOBGUID) values(?)", [el.JOBGUID]).then(function () {
                                    resolve("");
                                    console.log("### arrived inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### arrived not inserted");
                                  });
                                });

                              case 11:
                                _context3.next = 13;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [el.JOBGUID, el.ParentJobGuid]).then(function () {
                                    resolve("");
                                    console.log("### completeservice inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### completeservice not inserted");
                                  });
                                });

                              case 13:
                                _context3.next = 15;
                                return new Promise(function (resolve) {
                                  _this7.auth.database.executeSql("insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)", [el.JOBGUID, el.CLAIMGUID]).then(function () {
                                    resolve("");
                                    console.log("### enggpics inserted");
                                  })["catch"](function () {
                                    resolve("");
                                    console.log("### enggpics not inserted");
                                  });
                                });

                              case 15:
                                ++i;

                              case 16:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _loop);
                      });

                      _iterator.s();

                    case 5:
                      if ((_step = _iterator.n()).done) {
                        _context4.next = 9;
                        break;
                      }

                      return _context4.delegateYield(_loop(), "t0", 7);

                    case 7:
                      _context4.next = 5;
                      break;

                    case 9:
                      _context4.next = 14;
                      break;

                    case 11:
                      _context4.prev = 11;
                      _context4.t1 = _context4["catch"](2);

                      _iterator.e(_context4.t1);

                    case 14:
                      _context4.prev = 14;

                      _iterator.f();

                      return _context4.finish(14);

                    case 17:
                      console.log("### all the data are inserted if its new");
                      this.auth.dismissLoading();
                      console.log("### Plan set satuts mature");
                      this.storage.set("datasyncstatus", "mature"); // let counter = 1;
                      // for (let i = 0; i < this.model.length; i++) {
                      //   console.log(`### updating ${i+1} of ${this.model.length} jobs`);
                      //   // this.auth.insertDataIntoJobsListTable(
                      //     // this.model[i]["CLAIMJOBID"],
                      //     // this.model[i]["CLAIMGUID"],
                      //     // this.model[i]["JOBGUID"],
                      //     // this.model[i]["RiskPostCode"],
                      //     // this.model[i]["ProductName"],
                      //     // this.model[i]["ContactName"],
                      //     // this.model[i]["BookingDate"],
                      //     // this.model[i]["AppointmentStartTime"],
                      //     // this.model[i]["AppointmentEndTime"],
                      //     // this.model[i]["BookingTimeType"],
                      //     // this.model[i]["RiskAddress"],
                      //     // this.model[i]["phone"],
                      //     // this.model[i]["ProductTypeId"],
                      //     // this.model[i]["IsClaim"],
                      //     // this.model[i]["BackgroundColour"],
                      //     // this.model[i]["CLIENTNAME"],
                      //     // this.model[i]["ProductTypeName"],
                      //     // this.model[i]["ListType"],
                      //     // this.model[i]["CLAIMRef"],
                      //     // this.model[i]["RouteOrder"],
                      //     // this.model[i]["ParentJobGuid"],
                      //     // this.model[i]["EngName"],
                      //     // this.jobfetchmsg+` updating ${counter} of ${this.model.length} jobs`
                      //   // );
                      //   this.auth.database.executeSql(
                      //     "insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                      //     [
                      //       this.model[i]["CLAIMJOBID"],
                      //       this.model[i]["CLAIMGUID"],
                      //       this.model[i]["JOBGUID"],
                      //       this.model[i]["RiskPostCode"],
                      //       this.model[i]["ProductName"],
                      //       this.model[i]["ContactName"],
                      //       this.model[i]["BookingDate"],
                      //       this.model[i]["AppointmentStartTime"],
                      //       this.model[i]["AppointmentEndTime"],
                      //       this.model[i]["BookingTimeType"],
                      //       this.model[i]["RiskAddress"],
                      //       this.model[i]["phone"],
                      //       this.model[i]["ProductTypeId"],
                      //       this.model[i]["IsClaim"],
                      //       this.model[i]["BackgroundColour"],
                      //       this.model[i]["CLIENTNAME"],
                      //       this.model[i]["ProductTypeName"],
                      //       this.model[i]["ListType"],
                      //       this.model[i]["CLAIMRef"],
                      //       this.model[i]["RouteOrder"],
                      //       this.model[i]["ParentJobGuid"],
                      //       this.model[i]["EngName"],
                      //     ]
                      //   );
                      //   this.auth.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [
                      //     this.model[i]["JOBGUID"],
                      //   ]);
                      //   this.auth.database.executeSql("insert into onroute (JOBGUID) values(?)", [
                      //     this.model[i]["JOBGUID"],
                      //   ]);
                      //   this.auth.database.executeSql("insert into arrived (JOBGUID) values(?)", [
                      //     this.model[i]["JOBGUID"],
                      //   ]);
                      //   this.auth.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [
                      //     this.model[i]["JOBGUID"],this.model[i]["ParentJobGuid"],
                      //   ]);
                      //   this.auth.database.executeSql(
                      //     "insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)",
                      //     [ this.model[i]["JOBGUID"],,  this.model[i]["CLAIMGUID"],]
                      //   );
                      //   if (i == this.model.length - 1) {
                      //     console.log("### Plan set satuts mature");        
                      //     this.storage.set("datasyncstatus", "mature");
                      //     // setTimeout(() => {
                      //     //   this.auth.dismissLoading();
                      //     //   this.auth.dismissLoading();
                      //     // }, 5000);
                      //   }
                      //   // counter++;
                      // }

                    case 21:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this, [[2, 11, 14, 17]]);
            }));
          }
        }, {
          key: "syncDataToServer",
          value: function syncDataToServer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this8 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.auth.firmwareUpdateCheck().then(function (res) {
                        console.log("Danish " + res);

                        _this8.auth.presentCustomLoader("Syncing Data. It may take some time. Please wait... Thank you").then(function () {
                          _this8.auth.addProgressBar();
                        });

                        _this8.auth.speedCheck().then(function (res) {
                          // this.auth.showToast(res)
                          if (res == "TimeOut") {
                            _this8.auth.setProgressBar("100");

                            _this8.auth.dismissLoading();

                            _this8.auth.alert("Need a Good internet connection. Please try again later after some time", "Connection TimeOut");
                          } else {
                            if (res > 0.5) {
                              _this8.syncAllJobs();
                            } else {
                              _this8.auth.setProgressBar("100");

                              _this8.auth.dismissLoading();

                              _this8.auth.alert("Unable to Sync/Get Jobs! Your Internet connection is too slow Please Try again later.", "Poor Internet Connection");
                            }
                          }
                        })["catch"](function (e) {
                          _this8.auth.dismissLoading();

                          _this8.auth.alert(JSON.stringify(e));
                        });
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "syncAllJobs",
          value: function syncAllJobs() {
            var _this9 = this;

            this.syncOnRoute().then(function (res) {
              _this9.syncArrived().then(function (res) {
                _this9.syncAbandon().then(function (res) {
                  _this9.syncAuthorization().then(function (res) {
                    _this9.syncCertificate().then(function (res) {
                      _this9.syncNewAppliance().then(function (res) {
                        _this9.syncCompleteService1().then(function (res) {
                          _this9.syncboilerInstallation().then(function (res) {
                            _this9.syncBoilerInstallationPics().then(function (res) {
                              _this9.syncBoilerInstallationSign().then(function (res) {
                                _this9.syncCompleteClaim1().then(function (res) {
                                  _this9.syncEnggPic().then(function (res) {
                                    _this9.syncSiteSurvey().then(function (res) {
                                      _this9.syncSurveyPics().then(function (res) {
                                        _this9.syncSurveySign().then(function (res) {
                                          _this9.completesync(); // if(this.syncFlag){
                                          //   this.resync();
                                          // } else {
                                          //   this.auth.database.executeSql('select * from errorlog',[]).then(res =>{
                                          //     if (res.rows.length > 0) {
                                          //       // this.auth.sendErrorLog();
                                          //       // this.auth.SendErrorEmail();
                                          //       this.completesync();
                                          //     } else {
                                          //       this.completesync();
                                          //     }  
                                          //   }); 
                                          // }                                                                                                                                                                                                                                                                                                  

                                        })["catch"](function (e) {
                                          _this9.auth.showToast("syncSurveySign Error" + JSON.stringify(e), 'danger');
                                        });
                                      })["catch"](function (e) {
                                        _this9.auth.showToast("syncSurveyPics Error" + JSON.stringify(e), 'danger');
                                      });
                                    })["catch"](function (e) {
                                      _this9.auth.showToast("syncSiteSurvey Error" + JSON.stringify(e), 'danger');
                                    });
                                  })["catch"](function (e) {
                                    _this9.auth.showToast("syncEnggPic Sync Error" + JSON.stringify(e), 'danger');
                                  });
                                })["catch"](function (e) {
                                  _this9.auth.showToast("Complete claim Sync Error" + JSON.stringify(e), 'danger');
                                });
                              })["catch"](function (e) {
                                _this9.auth.showToast("Boiler installation sign Sync Error" + JSON.stringify(e), 'danger');
                              });
                            })["catch"](function (e) {
                              _this9.auth.showToast("Boiler installation pics Sync Error" + JSON.stringify(e), 'danger');
                            });
                          })["catch"](function (e) {
                            _this9.auth.showToast("Boiler Installation Sync Error" + JSON.stringify(e), 'danger');
                          }); //    }).catch((e) => {   this.auth.showToast('Make Certificate Sync Error' + JSON.stringify(e)) });

                        })["catch"](function (e) {
                          _this9.auth.showToast("Complete Service Sync Error" + JSON.stringify(e), 'danger');
                        });
                      })["catch"](function (e) {
                        _this9.auth.showToast("New Appliance Sync Error" + JSON.stringify(e), 'danger');
                      });
                    })["catch"](function (e) {
                      _this9.auth.showToast("certificate Sync Error" + JSON.stringify(e), 'danger');
                    });
                  })["catch"](function (e) {
                    _this9.auth.showToast("Authoraization Sync Error" + JSON.stringify(e), 'danger');
                  });
                })["catch"](function (e) {
                  _this9.auth.showToast("Abandon Sync Error" + JSON.stringify(e), 'danger');
                });
              })["catch"](function (e) {
                _this9.auth.showToast("OnArrived Sync Error" + JSON.stringify(e), 'danger');
              });
            })["catch"](function (e) {
              _this9.auth.showToast("OnRoute Sync Error" + JSON.stringify(e), 'danger');
            }); // setTimeout(() => {
            //   this.auth.dismissLoading();
            //   this.auth.alert("Please check you network setting and try again.","Connection Timed out")
            // }, 180000);
          }
        }, {
          key: "completesync",
          value: function completesync() {
            this.auth.setProgressBar("100");
            this.auth.dismissLoading();
            this.auth.emptyAllTables();
            this.getJobsfromApi(); // this.syncFlag = true;
          }
        }, {
          key: "resync",
          value: function resync() {
            this.syncAllJobs(); // this.syncFlag = false;
          }
        }, {
          key: "syncOnRoute",
          value: function syncOnRoute() {
            var _this10 = this;

            this.auth.setLoadingText("Syncing OnRoute. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("6.6");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this10.auth.database.executeSql("select * from onroute where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop2 = function _loop2(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("CLAIMGUID", res.rows.item(i)["CLAIMGUID"]).set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("Latitude", res.rows.item(i)["Latitude"]).set("Longitude", res.rows.item(i)["Longitude"]).set("OnRouteDT", res.rows.item(i)["OnRouteDT"]).set("Desc", res.rows.item(i)["OnRouteDT"]).set("title", "On Route");

                    _this10.auth.httpSend("Service_SaveOnRoute", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "OnRoute Success", msg["Msg"]);
                      array.push(msg["Msg"]); //deleting syned data from database

                      _this10.auth.database.executeSql("delete from onroute where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("onroute complete");
                      }
                    }, function (err) {
                      // Start ErrorLog
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "OnRoute Failed", err["Msg"]);
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_SaveOnRoute";
                      // console.log(res.rows.item(i)["CLAIMGUID"]);
                      // let Descp = 
                      //   {
                      //     CLAIMGUID : res.rows.item(i)["CLAIMGUID"],
                      //     JOBGUID : res.rows.item(i)["JOBGUID"],
                      //     Latitude : res.rows.item(i)["Latitude"],
                      //     Longitude : res.rows.item(i)["Longitude"],
                      //     OnRouteDT : res.rows.item(i)["OnRouteDT"],
                      //     Desc : res.rows.item(i)["OnRouteDT"],
                      //     title : "On Route"
                      // }
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this10.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop2(i);
                  } // end of for loop

                } else {
                  resolve("onroute complete");
                }
              })["catch"](function (e) {
                reject("# # on route failed" + JSON.stringify(e));
              });
            });
          }
        }, {
          key: "syncArrived",
          value: function syncArrived() {
            var _this11 = this;

            this.auth.setLoadingText("Syncing On Arrived. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("13.3");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this11.auth.database.executeSql("select * from arrived where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop3 = function _loop3(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("Latitude", res.rows.item(i)["Latitude"]).set("Longitude", res.rows.item(i)["Longitude"]).set("ArrAtJobDT", res.rows.item(i)["OnRouteDT"]).set("Desc", res.rows.item(i)["OnRouteDT"]).set("title", "Arrived at job");

                    _this11.auth.httpSend("Service_SaveArrivedAtJob", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ArrivedAtJob Success", msg["Msg"]);
                      array.push(msg["Msg"]); //deleting syned data from database

                      _this11.auth.database.executeSql("delete from arrived where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("OnArrive complete");
                      }
                    }, function (err) {
                      // Start ErrorLog
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ArrivedAtJob Failed", err["Msg"]);
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_SaveArrivedAtJob";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     Latitude: res.rows.item(i)["Latitude"],
                      //     Longitude: res.rows.item(i)["Longitude"],
                      //     ArrAtJobDT: res.rows.item(i)["OnRouteDT"],
                      //     Desc: res.rows.item(i)["OnRouteDT"],
                      //     title: "Arrived at job"
                      // }                      
                      // ;
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog                  
                      array.push(err["header"]);

                      _this11.auth.showToast(err.message);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop3(i);
                  } // end of for loop

                } else {
                  resolve("OnArrive complete");
                }
              })["catch"](function (e) {
                reject("# # on arrived complete");
              });
            });
          }
        }, {
          key: "syncAbandon",
          value: function syncAbandon() {
            var _this12 = this;

            this.auth.setLoadingText("Syncing Abandon Call Out. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("20");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this12.auth.database.executeSql("select * from abandon where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop4 = function _loop4(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("OUTCOME", res.rows.item(i)["OUTCOME"]).set("PARTS", res.rows.item(i)["parts"]).set("LABOUR", res.rows.item(i)["labour"]).set("JOBNOTE", res.rows.item(i)["JOBNOTE"]).set("FILEBASE", res.rows.item(i)["FILEBASE"]).set("FILENAME", res.rows.item(i)["FILENAME"]).set("FORACTION", "AbandonCallOut").set("OnDt", res.rows.item(i)["OnDt"]).set("Latitude", res.rows.item(i)["Latitude"]).set("Longitude", res.rows.item(i)["Longitude"]).set("ComboClaimJobId", "").set("ComboIsCompleted", "").set("CantCompleteReason", "");

                    _this12.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Abandoned Success", msg["Msg"]);
                      array.push(msg["Msg"]); //deleting syned data from database

                      _this12.auth.database.executeSql("delete from abandon where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("Abandon complete");
                      }
                    }, function (err) {
                      // Start ErrorLog
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Abandoned Failed", err["Msg"]);
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     OUTCOME: res.rows.item(i)["OUTCOME"],                              
                      //     PARTS: res.rows.item(i)["parts"],
                      //     LABOUR: res.rows.item(i)["labour"],
                      //     JOBNOTE: res.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: res.rows.item(i)["FILEBASE"],
                      //     FILENAME: res.rows.item(i)["FILENAME"],
                      //     FORACTION: "AbandonCallOut",
                      //     OnDt: res.rows.item(i)["OnDt"], 
                      //     Latitude: res.rows.item(i)["Latitude"],
                      //     Longitude: res.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason: ""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog                    
                      array.push(err["header"]);

                      _this12.auth.showToast(JSON.stringify(err.message));

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop4(i);
                  }
                } else {
                  resolve("Abandon complete");
                }
              })["catch"](function (e) {
                reject("# # on Abandon failed");
              });
            });
          }
        }, {
          key: "syncAuthorization",
          value: function syncAuthorization() {
            var _this13 = this;

            this.auth.setLoadingText("Syncing Authorization. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("26.6");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this13.auth.database.executeSql("select * from authorization where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop5 = function _loop5(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("OUTCOME", res.rows.item(i)["OUTCOME"]).set("PARTS", res.rows.item(i)["parts"]).set("LABOUR", res.rows.item(i)["labour"]).set("JOBNOTE", res.rows.item(i)["JOBNOTE"]).set("FILEBASE", res.rows.item(i)["FILEBASE"]).set("FILENAME", res.rows.item(i)["FILENAME"]).set("FORACTION", "AuthorisationRequired").set("OnDt", res.rows.item(i)["OnDt"]).set("Latitude", res.rows.item(i)["Latitude"]).set("Longitude", res.rows.item(i)["Longitude"]).set("ComboClaimJobId", "").set("ComboIsCompleted", "").set("CantCompleteReason", "");

                    _this13.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Authorization Success", msg["Msg"]);
                      array.push(msg["Msg"]); //deleting syned data from database

                      _this13.auth.database.executeSql("delete from authorization where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("authorization complete");
                      }
                    }, function (err) {
                      // Start ErrorLog
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "Authorization Failed", err["Msg"]);
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     OUTCOME: res.rows.item(i)["OUTCOME"],                              
                      //     PARTS: res.rows.item(i)["parts"],
                      //     LABOUR: res.rows.item(i)["labour"],
                      //     JOBNOTE: res.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: res.rows.item(i)["FILEBASE"],
                      //     FILENAME: res.rows.item(i)["FILENAME"],
                      //     FORACTION: "AuthorisationRequired",
                      //     OnDt: res.rows.item(i)["OnDt"], 
                      //     Latitude: res.rows.item(i)["Latitude"],
                      //     Longitude: res.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason: ""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog       
                      _this13.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop5(i);
                  }
                } else {
                  resolve("authorization complete");
                }
              })["catch"](function (e) {
                reject("# # on authorization failed");
              });
            });
          }
        }, {
          key: "syncNewAppliance",
          value: function syncNewAppliance() {
            var _this14 = this;

            this.auth.setLoadingText("Syncing Appliances. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("40");
            return new Promise(function (resolve, reject) {
              resolve('resolved');
              var array = [];

              _this14.auth.database.executeSql("select * from newappliance where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop6 = function _loop6(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("AppType", res.rows.item(i)["AppType"]).set("Make", res.rows.item(i)["Make"]).set("Model", res.rows.item(i)["Model"]).set("BType", res.rows.item(i)["BType"]).set("Loc", res.rows.item(i)["Loc"]).set("Flue", res.rows.item(i)["Flue"]).set("OwnedBy", res.rows.item(i)["OwnedBy"]).set("Inspected", res.rows.item(i)["Inspected"]).set("ZeroGov", res.rows.item(i)["ZeroGov"]).set("OPU", res.rows.item(i)["OPU"]).set("OptPrs", res.rows.item(i)["OptPrs"]).set("OSD", res.rows.item(i)["OSD"]).set("VS", res.rows.item(i)["VS"]).set("VCF", res.rows.item(i)["VCF"]).set("FOC", res.rows.item(i)["FOC"]).set("ComRead", res.rows.item(i)["ComRead"]).set("HRatio", res.rows.item(i)["HRatio"]).set("HCO2Val", res.rows.item(i)["HCO2Val"]).set("HCOPPM", res.rows.item(i)["HCOPPM"]).set("LRatio", res.rows.item(i)["LRatio"]).set("LCO2Val", res.rows.item(i)["LCO2Val"]).set("LCOPPM", res.rows.item(i)["LCOPPM"]).set("STU", res.rows.item(i)["STU"]).set("DefId", res.rows.item(i)["DefId"]).set("GIUSP", res.rows.item(i)["GIUSP"]).set("WarAdRec", res.rows.item(i)["WarAdRec"]).set("RemAc", res.rows.item(i)["RemAc"]).set("IsDelete", res.rows.item(i)["IsDelete"]);

                    _this14.auth.httpSend("Service_ApplianceNew", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ApplianceNew Success", msg["Msg"]);
                      array.push(msg["Msg"]);

                      _this14.auth.database.executeSql("delete from newappliance where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("newappliance complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "ApplianceNew Failed", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_ApplianceNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     AppType: res.rows.item(i)["AppType"],
                      //     Make: res.rows.item(i)["Make"],
                      //     Model: res.rows.item(i)["Model"],
                      //     BType: res.rows.item(i)["BType"],
                      //     Loc: res.rows.item(i)["Loc"],
                      //     Flue: res.rows.item(i)["Flue"],
                      //     OwnedBy: res.rows.item(i)["OwnedBy"],
                      //     Inspected: res.rows.item(i)["Inspected"],
                      //     ZeroGov: res.rows.item(i)["ZeroGov"],
                      //     OPU: res.rows.item(i)["OPU"],
                      //     OptPrs: res.rows.item(i)["OptPrs"],
                      //     OSD: res.rows.item(i)["OSD"],
                      //     VS: res.rows.item(i)["VS"],
                      //     VCF: res.rows.item(i)["VCF"],
                      //     FOC: res.rows.item(i)["FOC"],
                      //     ComRead: res.rows.item(i)["ComRead"],
                      //     HRatio: res.rows.item(i)["HRatio"],
                      //     HCO2Val: res.rows.item(i)["HCO2Val"],
                      //     HCOPPM: res.rows.item(i)["HCOPPM"],
                      //     LRatio: res.rows.item(i)["LRatio"],
                      //     LCO2Val: res.rows.item(i)["LCO2Val"],
                      //     LCOPPM: res.rows.item(i)["LCOPPM"],
                      //     STU: res.rows.item(i)["STU"],
                      //     DefId: res.rows.item(i)["DefId"],
                      //     GIUSP: res.rows.item(i)["GIUSP"],
                      //     WarAdRec: res.rows.item(i)["WarAdRec"],
                      //     RemAc: res.rows.item(i)["RemAc"],
                      //     IsDelete: res.rows.item(i)["IsDelete"],
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this14.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("newappliance complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop6(i);
                  } // end of for loop

                } else {
                  resolve("newappliance complete");
                }
              })["catch"](function (e) {
                reject("# # on newappliance failed");
              });
            });
          }
        }, {
          key: "syncCertificate",
          value: function syncCertificate() {
            var _this15 = this;

            this.auth.setLoadingText("Syncing Certificates. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("33.2");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this15.auth.database.executeSql("select * from certificate where HaveData=?", ["yes"]).then(function (res) {
                console.log("dddd " + JSON.stringify(res.rows.item(0)));

                if (res.rows.length > 0) {
                  var _loop7 = function _loop7(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("DetailsWork", res.rows.item(i)["DetailsWork"]).set("NoOfAppTested", res.rows.item(i)["NoOfAppTested"]).set("NextDueDt", res.rows.item(i)["NextDueDt"]).set("OGIns", res.rows.item(i)["OGIns"]).set("OGSup", res.rows.item(i)["OGSup"]).set("ECon", res.rows.item(i)["ECon"]).set("OGTight", res.rows.item(i)["OGTight"]).set("COFitted", res.rows.item(i)["COFitted"]).set("COTested", res.rows.item(i)["COTested"]).set("EquiBond", res.rows.item(i)["EquiBond"]).set("SigImage", res.rows.item(i)["SigImage"]).set("SigRec", res.rows.item(i)["SigRec"]).set("FlueChkDt", res.rows.item(i)["FlueChkDt"]).set("ClaimJobId", res.rows.item(i)["CLAIMJOBID"]).set("ParentJobGuid", res.rows.item(i)["ParentJobGuid"]);

                    _this15.auth.httpSend("Service_Certificate", params, "post").subscribe(function (msg) {
                      console.log('#### cert succ' + JSON.stringify(msg)); // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "certificate Success", msg["Msg"]);

                      array.push(msg["Msg"]);

                      _this15.auth.database.executeSql("delete from certificate where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      if (array.length == res.rows.length) {
                        resolve("certificate complete");
                      }
                    }, function (err) {
                      console.log('#### cert err' + JSON.stringify(err)); // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "certificate Failed", JSON.stringify(err));
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_Certificate";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     DetailsWork: res.rows.item(i)["DetailsWork"],
                      //     NoOfAppTested: res.rows.item(i)["NoOfAppTested"],
                      //     NextDueDt: res.rows.item(i)["NextDueDt"],
                      //     OGIns: res.rows.item(i)["OGIns"],
                      //     OGSup: res.rows.item(i)["OGSup"],
                      //     ECon: res.rows.item(i)["ECon"],
                      //     OGTight: res.rows.item(i)["OGTight"],
                      //     COFitted: res.rows.item(i)["COFitted"],
                      //     COTested: res.rows.item(i)["COTested"],
                      //     EquiBond: res.rows.item(i)["EquiBond"],
                      //     SigImage: res.rows.item(i)["SigImage"],
                      //     SigRec: res.rows.item(i)["SigRec"],
                      //     FlueChkDt: res.rows.item(i)["FlueChkDt"],
                      //     ClaimJobId: res.rows.item(i)["ClaimJobId"],
                      //     ParentJobGuid: ""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog

                      _this15.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("certificate complete");
                      }
                    }, function () {});
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop7(i);
                  } // end of for loop

                } else {
                  resolve("certificate complete");
                }
              })["catch"](function (e) {
                reject("# # on certificate failed");
              });

              resolve("certificate complete");
            });
          }
        }, {
          key: "syncCompleteClaim1",
          value: function syncCompleteClaim1() {
            var _this16 = this;

            this.auth.setLoadingText("Syncing Claims Completed It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("73");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this16.auth.database.executeSql("select * from completeclaim where HaveData=?", ["yes"]).then(function (completeClaimRes) {
                if (completeClaimRes.rows.length > 0) {
                  var _loop8 = function _loop8(i) {
                    if (completeClaimRes.rows.item(i)["BackgroundColour"] == "#20B2AA") {
                      // check for the combo job
                      console.log("combo check for the combo job ");

                      _this16.auth.database.executeSql("select * from completeservice where ParentJobGuid=?", [completeClaimRes.rows.item(i)["JOBGUID"]]).then(function (serviceResG) {
                        if (serviceResG.rows.item(0)["HaveData"] == "combo") {
                          // check is  service also completed then sync BOTH claim and service
                          console.log("combo check is  service also completed then sync BOTH claim and service");
                          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams() //Sync Claim
                          .set("JOBGUID", completeClaimRes.rows.item(i)["JOBGUID"]).set("OUTCOME", completeClaimRes.rows.item(i)["OUTCOME"]).set("PARTS", completeClaimRes.rows.item(i)["PARTS"]).set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"]).set("JOBNOTE", completeClaimRes.rows.item(i)["JOBNOTE"]).set("FILEBASE", completeClaimRes.rows.item(i)["FILEBASE"]).set("FILENAME", completeClaimRes.rows.item(i)["FILENAME"]).set("FORACTION", "Claim").set("OnDt", completeClaimRes.rows.item(i)["OnDt"]).set("Latitude", completeClaimRes.rows.item(i)["Latitude"]).set("Longitude", completeClaimRes.rows.item(i)["Longitude"]).set("ComboClaimJobId", completeClaimRes.rows.item(i)["ComboClaimJobId"]).set("ComboIsCompleted", "true").set("CantCompleteReason", serviceResG.rows.item(i)["CantCompleteReason"]);

                          _this16.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (claimSyncResponse) {
                            console.log("combo claim synced"); // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Success", claimSyncResponse["Msg"]);

                            _this16.auth.database.executeSql("delete from completeclaim where JOBGUID=?", [completeClaimRes.rows.item(i)["JOBGUID"]]); // Sync Service


                            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", serviceResG.rows.item(i)["JOBGUID"]).set("OUTCOME", serviceResG.rows.item(i)["OUTCOME"]).set("PARTS", serviceResG.rows.item(i)["PARTS"]).set("LABOUR", serviceResG.rows.item(i)["LABOUR"]).set("JOBNOTE", serviceResG.rows.item(i)["JOBNOTE"]).set("FILEBASE", serviceResG.rows.item(i)["FILEBASE"]).set("FILENAME", serviceResG.rows.item(i)["FILENAME"]).set("FORACTION", "Service").set("OnDt", serviceResG.rows.item(i)["OnDt"]).set("Latitude", completeClaimRes.rows.item(i)["Latitude"]).set("Longitude", completeClaimRes.rows.item(i)["Longitude"]).set("ComboClaimJobId", completeClaimRes.rows.item(i)["ComboClaimJobId"]).set("ComboIsCompleted", "true").set("CantCompleteReason", serviceResG.rows.item(i)["CantCompleteReason"]);

                            _this16.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (serviceSyncResponse) {
                              console.log("combo service synced"); // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Combo S Success", serviceSyncResponse["Msg"]);

                              _this16.auth.database.executeSql("delete from completeservice where JOBGUID=?", [serviceResG.rows.item(i)["JOBGUID"]]);

                              array.push(serviceSyncResponse["Msg"]);

                              if (array.length == completeClaimRes.rows.length) {
                                resolve("Combo complete");
                              } //

                            }, function (serviceSyncError) {
                              // Start ErrorLog
                              // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Combo S Failed", serviceSyncError["Msg"]);
                              // let errorMsg = JSON.stringify(serviceSyncError);
                              // let actionName ="Service_AllEngineerActionsNew";
                              // let Descp = 
                              //   {
                              //     JOBGUID: serviceResG.rows.item(i)["JOBGUID"],
                              //     OUTCOME: serviceResG.rows.item(i)["OUTCOME"],
                              //     PARTS: serviceResG.rows.item(i)["PARTS"],
                              //     LABOUR: serviceResG.rows.item(i)["LABOUR"],
                              //     JOBNOTE: serviceResG.rows.item(i)["JOBNOTE"],
                              //     FILEBASE: serviceResG.rows.item(i)["FILEBASE"],
                              //     FILENAME: serviceResG.rows.item(i)["FILENAME"],
                              //     FORACTION: "Service",
                              //     OnDt: serviceResG.rows.item(i)["OnDt"],
                              //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                              //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                              //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                              //     ComboIsCompleted: "true",
                              //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                              // }                      
                              // ; 
                              // let Desc = JSON.stringify(Descp);
                              // this.auth.insertIntoErrorLog(errorMsg, serviceResG.rows.item(i)['JOBGUID'],  actionName, Desc);
                              // End of ErrorLog
                              _this16.auth.showToast(JSON.stringify(serviceSyncError.message));

                              array.push(serviceSyncError["header"]);

                              if (array.length == completeClaimRes.rows.length) {
                                resolve("enggpics complete");
                              }
                            }); //

                          }, function (claimSyncError) {
                            // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Failed", claimSyncError["Msg"]);
                            // Start ErrorLog
                            // let errorMsg = JSON.stringify(claimSyncError);
                            // let actionName ="Service_AllEngineerActionsNew";
                            // let Descp = 
                            //   {
                            //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                            //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                            //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                            //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                            //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                            //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                            //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                            //     FORACTION: "Claim",
                            //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                            //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                            //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                            //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                            //     ComboIsCompleted: "true",
                            //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                            // }                      
                            // ; 
                            // let Desc = JSON.stringify(Descp);
                            // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                            // End of ErrorLog
                            _this16.auth.showToast(JSON.stringify(claimSyncError.message));

                            array.push(claimSyncError["header"]);

                            if (array.length == completeClaimRes.rows.length) {
                              resolve("enggpics complete");
                            }
                          });
                        } else {
                          console.log("combo service of combo job not completed");
                          console.log("combo Sync Only Claim not service"); // service of combo job not completed
                          // Sync Only Claim not service

                          var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", completeClaimRes.rows.item(i)["JOBGUID"]).set("OUTCOME", completeClaimRes.rows.item(i)["OUTCOME"]).set("PARTS", completeClaimRes.rows.item(i)["PARTS"]).set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"]).set("JOBNOTE", completeClaimRes.rows.item(i)["JOBNOTE"]).set("FILEBASE", completeClaimRes.rows.item(i)["FILEBASE"]).set("FILENAME", completeClaimRes.rows.item(i)["FILENAME"]).set("FORACTION", "Claim").set("OnDt", completeClaimRes.rows.item(i)["OnDt"]).set("Latitude", completeClaimRes.rows.item(i)["Latitude"]).set("Longitude", completeClaimRes.rows.item(i)["Longitude"]).set("ComboClaimJobId", completeClaimRes.rows.item(i)["ComboClaimJobId"]).set("ComboIsCompleted", "false").set("CantCompleteReason", serviceResG.rows.item(i)["CantCompleteReason"]);

                          _this16.auth.httpSend("Service_AllEngineerActionsNew", _params, "post").subscribe(function (claimSyncResponse) {
                            // this.auth.insertIntoSyncLog(serviceResG.rows.item(i)['JOBGUID'],  "CC Suceess", claimSyncResponse["Msg"]);
                            _this16.auth.database.executeSql("delete from completeclaim where JOBGUID=?", [completeClaimRes.rows.item(i)["JOBGUID"]]);

                            array.push(completeClaimRes["Msg"]);

                            if (array.length == completeClaimRes.rows.length) {
                              resolve("Claim complete but Service Pending");
                            }
                          }, function (claimSyncError) {
                            // Start ErrorLog
                            // this.auth.insertIntoSyncLog(serviceResG.rows.item(i)['JOBGUID'],  "CC Failed", claimSyncError["Msg"]);
                            // let errorMsg = JSON.stringify(claimSyncError);
                            // let actionName ="Service_AllEngineerActionsNew";
                            // let Descp = 
                            //   {
                            //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                            //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                            //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                            //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                            //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                            //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                            //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                            //     FORACTION: "Claim",
                            //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                            //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                            //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                            //     ComboClaimJobId: completeClaimRes.rows.item(i)["ComboClaimJobId"],
                            //     ComboIsCompleted: "true",
                            //     CantCompleteReason:serviceResG.rows.item(i)["CantCompleteReason"]
                            // }                      
                            // ; 
                            // let Desc = JSON.stringify(Descp);
                            // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                            // End of ErrorLog
                            _this16.auth.showToast(JSON.stringify(claimSyncError.message));

                            array.push(claimSyncError["header"]);

                            if (array.length == completeClaimRes.rows.length) {
                              resolve("enggpics complete");
                            }
                          });
                        }
                      })["catch"]();
                    } else {
                      // if job is not combo then sync claim
                      var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", completeClaimRes.rows.item(i)["JOBGUID"]).set("OUTCOME", completeClaimRes.rows.item(i)["OUTCOME"]).set("PARTS", completeClaimRes.rows.item(i)["PARTS"]).set("LABOUR", completeClaimRes.rows.item(i)["LABOUR"]).set("JOBNOTE", completeClaimRes.rows.item(i)["JOBNOTE"]).set("FILEBASE", completeClaimRes.rows.item(i)["FILEBASE"]).set("FILENAME", completeClaimRes.rows.item(i)["FILENAME"]).set("FORACTION", "Claim").set("OnDt", completeClaimRes.rows.item(i)["OnDt"]).set("Latitude", completeClaimRes.rows.item(i)["Latitude"]).set("Longitude", completeClaimRes.rows.item(i)["Longitude"]).set("ComboClaimJobId", "").set("ComboIsCompleted", "").set("CantCompleteReason", "");

                      _this16.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (msg) {
                        // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Calim Success", msg["Msg"]);
                        _this16.auth.database.executeSql("delete from completeclaim where JOBGUID=?", [completeClaimRes.rows.item(i)["JOBGUID"]]);

                        array.push(msg["Msg"]);

                        if (array.length == completeClaimRes.rows.length) {
                          resolve("claim complete");
                        } //

                      }, function (claimSyncError) {
                        // this.auth.insertIntoSyncLog(completeClaimRes.rows.item(i)['JOBGUID'],  "Claim Failed", claimSyncError["Msg"]);
                        // Start ErrorLog
                        // let errorMsg = JSON.stringify(claimSyncError);
                        // let actionName ="Service_AllEngineerActionsNew";
                        // let Descp = 
                        //   {
                        //     JOBGUID: completeClaimRes.rows.item(i)["JOBGUID"],
                        //     OUTCOME: completeClaimRes.rows.item(i)["OUTCOME"],
                        //     PARTS: completeClaimRes.rows.item(i)["PARTS"],
                        //     LABOUR: completeClaimRes.rows.item(i)["LABOUR"],
                        //     JOBNOTE: completeClaimRes.rows.item(i)["JOBNOTE"],
                        //     FILEBASE: completeClaimRes.rows.item(i)["FILEBASE"],
                        //     FILENAME: completeClaimRes.rows.item(i)["FILENAME"],
                        //     FORACTION: "Claim",
                        //     OnDt: completeClaimRes.rows.item(i)["OnDt"],
                        //     Latitude: completeClaimRes.rows.item(i)["Latitude"],
                        //     Longitude: completeClaimRes.rows.item(i)["Longitude"],
                        //     ComboClaimJobId: "",
                        //     ComboIsCompleted: "",
                        //     CantCompleteReason:""
                        // }                      
                        // ; 
                        // let Desc = JSON.stringify(Descp);
                        // this.auth.insertIntoErrorLog(errorMsg, completeClaimRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                        // End of ErrorLog
                        _this16.auth.showToast(JSON.stringify(claimSyncError.message));

                        array.push(claimSyncError["header"]);

                        if (array.length == completeClaimRes.rows.length) {
                          resolve("enggpics complete");
                        }
                      });
                    }
                  };

                  //For Loop Start
                  for (var i = 0; i < completeClaimRes.rows.length; i++) {
                    _loop8(i);
                  } //For Loop End

                } else {
                  resolve("success No Data in Claim");
                }
              })["catch"](function (completeClaimError) {
                reject(" error complete claim" + JSON.stringify(completeClaimError));
              });
            });
          }
        }, {
          key: "syncCompleteService1",
          value: function syncCompleteService1() {
            var _this17 = this;

            this.auth.setLoadingText("Syncing Completed Services. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("46.6");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this17.auth.database.executeSql("select * from completeservice where HaveData=?", ["yes"]).then(function (completeServiceRes) {
                if (completeServiceRes.rows.length > 0) {
                  var _loop9 = function _loop9(i) {
                    console.log("Danish inside sync service");
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", completeServiceRes.rows.item(i)["JOBGUID"]).set("OUTCOME", completeServiceRes.rows.item(i)["OUTCOME"]).set("PARTS", completeServiceRes.rows.item(i)["PARTS"]).set("LABOUR", completeServiceRes.rows.item(i)["LABOUR"]).set("JOBNOTE", completeServiceRes.rows.item(i)["JOBNOTE"]).set("FILEBASE", completeServiceRes.rows.item(i)["FILEBASE"]).set("FILENAME", completeServiceRes.rows.item(i)["FILENAME"]).set("FORACTION", "Service").set("OnDt", completeServiceRes.rows.item(i)["OnDt"]).set("Latitude", completeServiceRes.rows.item(i)["Latitude"]).set("Longitude", completeServiceRes.rows.item(i)["Longitude"]).set("ComboClaimJobId", "").set("ComboIsCompleted", "").set("CantCompleteReason", "");

                    _this17.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(completeServiceRes.rows.item(i)['JOBGUID'],  "Service Success", msg["Msg"]);
                      _this17.auth.database.executeSql("delete from completeservice where JOBGUID=?", [completeServiceRes.rows.item(i)["JOBGUID"]]);

                      array.push(msg["Msg"]);

                      if (array.length == completeServiceRes.rows.length) {
                        resolve("complete SERVICE complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(completeServiceRes.rows.item(i)['JOBGUID'],  "Serive Failed", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: completeServiceRes.rows.item(i)["JOBGUID"],
                      //     OUTCOME: completeServiceRes.rows.item(i)["OUTCOME"],
                      //     PARTS: completeServiceRes.rows.item(i)["PARTS"],
                      //     LABOUR: completeServiceRes.rows.item(i)["LABOUR"],
                      //     JOBNOTE: completeServiceRes.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: completeServiceRes.rows.item(i)["FILEBASE"],
                      //     FILENAME: completeServiceRes.rows.item(i)["FILENAME"],
                      //     FORACTION: "Service",
                      //     OnDt: completeServiceRes.rows.item(i)["OnDt"],
                      //     Latitude: completeServiceRes.rows.item(i)["Latitude"],
                      //     Longitude: completeServiceRes.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason:""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, completeServiceRes.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this17.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == completeServiceRes.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < completeServiceRes.rows.length; i++) {
                    _loop9(i);
                  } //for loop

                } else {
                  resolve("complete SERVICE complete");
                }
              })["catch"](function (completeServiceError) {});
            });
          }
        }, {
          key: "syncboilerInstallation",
          value: function syncboilerInstallation() {
            var _this18 = this;

            this.auth.setLoadingText("Syncing Boiler Installation Report. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("53");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this18.auth.database.executeSql("select * from boilerinstallation where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop10 = function _loop10(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("BLocation", res.rows.item(i)["BLocation"]).set("BLocation_Desc", res.rows.item(i)["BLocation_Desc"]).set("BFlue", res.rows.item(i)["BFlue"]).set("FlueExtension", res.rows.item(i)["FlueExtension"]).set("StandOffKit", res.rows.item(i)["StandOffKit"]).set("D45Elbow", res.rows.item(i)["D45Elbow"]).set("D90Elbow", res.rows.item(i)["D90Elbow"]).set("GasRun", res.rows.item(i)["GasRun"]).set("CGasRun_Desc", res.rows.item(i)["CGasRun_Desc"]).set("CGasRun", res.rows.item(i)["CGasRun"]).set("GasRun_Desc", res.rows.item(i)["GasRun_Desc"]).set("ActionDt", res.rows.item(i)["ActionDt"]).set("Latitude", res.rows.item(i)["Latitude"]).set("Longitude", res.rows.item(i)["Longitude"]);

                    _this18.auth.httpSend("Service_BInsReport", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsRep Success", msg["Msg"]);
                      _this18.auth.database.executeSql("update boilerinstallationpics set SSID = ? where JOBGUID=?", [msg["Msg"], res.rows.item(i)["JOBGUID"]]);

                      _this18.auth.database.executeSql("update boilerinstallationsign set SSID = ? where JOBGUID=?", [msg["Msg"], res.rows.item(i)["JOBGUID"]]);

                      array.push(msg["Msg"]);

                      if (array.length == res.rows.length) {
                        resolve("boilerinstallation complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsRep Failed", err["Msg"]);
                      // Start ErrorLog
                      //   let errorMsg = JSON.stringify(err);
                      //   let actionName ="Service_BInsReport";
                      //   let Descp = 
                      //     {
                      //       JOBGUID: res.rows.item(i)["JOBGUID"],
                      //       BLocation: res.rows.item(i)["BLocation"],
                      //       BLocation_Desc: res.rows.item(i)["BLocation_Desc"],
                      //       BFlue: res.rows.item(i)["BFlue"],
                      //       FlueExtension: res.rows.item(i)["FlueExtension"],
                      //       StandOffKit: res.rows.item(i)["StandOffKit"],
                      //       D45Elbow: res.rows.item(i)["D45Elbow"],
                      //       D90Elbow: res.rows.item(i)["D90Elbow"],
                      //       GasRun: res.rows.item(i)["GasRun"],
                      //       CGasRun_Desc: res.rows.item(i)["CGasRun_Desc"],
                      //       CGasRun: res.rows.item(i)["CGasRun"],
                      //       GasRun_Desc: res.rows.item(i)["GasRun_Desc"],
                      //       ActionDt: res.rows.item(i)["ActionDt"],
                      //       Latitude: res.rows.item(i)["Latitude"],
                      //       Longitude: res.rows.item(i)["Longitude"],
                      //   }                      
                      //   ; 
                      //   let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this18.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop10(i);
                  }
                } else {
                  resolve("boilerinstallation complete");
                }
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "syncBoilerInstallationPics",
          value: function syncBoilerInstallationPics() {
            var _this19 = this;

            this.auth.setLoadingText("Syncing Boiler Installation Images. It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("59");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this19.auth.database.executeSql("select * from boilerinstallationpics where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length) {
                  for (var i = 0; i < res.rows.length; i++) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("SSID", res.rows.item(i)["SSID"]).set("BImage", res.rows.item(i)["BImage"]).set("BPWImage", res.rows.item(i)["BPWImage"]).set("CTImage", res.rows.item(i)["CTImage"]).set("FSImage", res.rows.item(i)["FSImage"]).set("IFImage", res.rows.item(i)["IFImage"]).set("FILImage", res.rows.item(i)["FILImage"]).set("EFTImage", res.rows.item(i)["EFTImage"]).set("ACCImage", res.rows.item(i)["ACCImage"]).set("TImage", res.rows.item(i)["TImage"]).set("BMCImage", res.rows.item(i)["BMCImage"]).set("A1Image", res.rows.item(i)["A1Image"]).set("A2Image", res.rows.item(i)["A2Image"]).set("A3Image", res.rows.item(i)["A3Image"]).set("A4Image", res.rows.item(i)["A4Image"]).set("A5Image", res.rows.item(i)["A5Image"]);

                    _this19.auth.httpSend("Service_BInsImags", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsPic Success", msg["Msg"]);
                      array.push(msg["Msg"]);

                      if (array.length == res.rows.length) {
                        resolve("boilerinstallationpics complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsPic Failed", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_BInsImags";
                      // let Descp = 
                      //   {
                      //     SSID: res.rows.item(i)["SSID"],
                      //     BImage: res.rows.item(i)["BImage"],
                      //     BPWImage: res.rows.item(i)["BPWImage"],
                      //     CTImage: res.rows.item(i)["CTImage"],
                      //     FSImage: res.rows.item(i)["FSImage"],
                      //     IFImage: res.rows.item(i)["IFImage"],
                      //     FILImage:res.rows.item(i)["FILImage"],
                      //     EFTImage: res.rows.item(i)["EFTImage"],
                      //     ACCImage: res.rows.item(i)["ACCImage"],
                      //     TImage: res.rows.item(i)["TImage"],
                      //     BMCImage: res.rows.item(i)["BMCImage"],
                      //     A1Image: res.rows.item(i)["A1Image"],
                      //     A2Image: res.rows.item(i)["A2Image"],
                      //     A3Image: res.rows.item(i)["A3Image"],
                      //     A4Image: res.rows.item(i)["A4Image"],
                      //     A5Image: res.rows.item(i)["A5Image"]
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      //   this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this19.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    });
                  } // end of for loop

                } else {
                  resolve("boilerinstallationpics complete");
                }
              })["catch"](function (e) {
                reject("# # sync Boiler Installation Pics failed");
              });
            });
          }
        }, {
          key: "syncBoilerInstallationSign",
          value: function syncBoilerInstallationSign() {
            var _this20 = this;

            this.auth.setLoadingText("Syncing Boiler Installation Signatures It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("66.3");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this20.auth.database.executeSql("select * from boilerinstallationsign where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length) {
                  var _loop11 = function _loop11(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("SSID", res.rows.item(i)["SSID"]).set("BInsComplete", res.rows.item(i)["BInsComplete"]).set("BInsComplete_Reason", res.rows.item(i)["BInsComplete_Reason"]).set("BInsDefects", res.rows.item(i)["BInsDefects"]).set("BInsDefects_Reason", res.rows.item(i)["BInsDefects_Reason"]).set("BInsDamage", res.rows.item(i)["BInsDamage"]).set("BInsDamage_Reason", res.rows.item(i)["BInsDamage_Reason"]).set("BInsAddNotes", res.rows.item(i)["BInsAddNotes"]).set("InstallerSig", res.rows.item(i)["InstallerSig"]).set("CustomerSig", res.rows.item(i)["CustomerSig"]).set("InstallerName", res.rows.item(i)["InstallerName"]).set("CustomerName", res.rows.item(i)["CustomerName"]);

                    _this20.auth.httpSend("Service_BInsSignature", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsSig Success", msg["Msg"]);
                      _this20.auth.database.executeSql("delete from boilerinstallation where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      _this20.auth.database.executeSql("delete from boilerinstallationpics where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      _this20.auth.database.executeSql("delete from boilerinstallationsign where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      array.push(msg["Msg"]);

                      if (array.length == res.rows.length) {
                        resolve("boilerinstallationsign complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "BoilerInsSig Success", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_BInsSignature";
                      // let Descp = 
                      //   {
                      //     SSID: res.rows.item(i)["SSID"],
                      //     BInsComplete: res.rows.item(i)["BInsComplete"],
                      //     BInsComplete_Reason:res.rows.item(i)["BInsComplete_Reason"],
                      //     BInsDefects: res.rows.item(i)["BInsDefects"],
                      //     BInsDefects_Reason:res.rows.item(i)["BInsDefects_Reason"],
                      //     BInsDamage: res.rows.item(i)["BInsDamage"],
                      //     BInsDamage_Reason: res.rows.item(i)["BInsDamage_Reason"],
                      //     BInsAddNotes: res.rows.item(i)["BInsAddNotes"],
                      //     InstallerSig: res.rows.item(i)["InstallerSig"],               
                      //     CustomerSig: res.rows.item(i)["CustomerSig"],               
                      //     InstallerName: res.rows.item(i)["InstallerName"],
                      //     CustomerName: res.rows.item(i)["CustomerName"]
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      //   this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this20.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics complete");
                      }
                    }); //subscribe end

                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop11(i);
                  } // end of for loop

                } else {
                  resolve("boilerinstallationsign complete");
                }
              })["catch"](function (e) {
                reject("# # on boilerinstallationsign failed");
              });
            });
          } // donloadNative(urlpdf: string, JOBGUID: string) {
          //   return new Promise((resolve, reject) => {
          //     this.http
          //       .downloadFile(
          //         urlpdf, //https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf
          //         { id: "12", message: "test" },
          //         { Authorization: "OAuth2: token" },
          //         this.file.externalRootDirectory +
          //           "download/" +
          //           JOBGUID +
          //           "certificate.pdf"
          //       )
          //       .then((response) => {
          //         // prints 200
          //         resolve(JSON.stringify(response.status));
          //         this.auth.database
          //           .executeSql(
          //             "update jobsstatus set CertificateLocalURI=? where JOBGUID=?",
          //             [
          //               this.file.externalRootDirectory +
          //                 "download/" +
          //                 JOBGUID +
          //                 "certificate.pdf",
          //               JOBGUID,
          //             ]
          //           )
          //           .then((res) => {})
          //           .catch((e) => {});
          //       })
          //       .catch((response) => {
          //         reject(JSON.stringify(response.error));
          //       });
          //   });
          // }

        }, {
          key: "syncEnggPic",
          value: function syncEnggPic() {
            var _this21 = this;

            this.auth.setLoadingText("Syncing Engineers Pictures  It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("80");
            return new Promise(function (resolve, reject) {
              var array = [];

              _this21.auth.database.executeSql("select *  from enggpics where HaveData=?", ["yes"]).then(function (resp) {
                if (resp.rows.length > 0) {
                  for (var i = 0; i < resp.rows.length; i++) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", resp.rows.item(i)["JOBGUID"]).set("JOBNOTE", resp.rows.item(i)["JOBNOTE"]).set("OUTCOME", resp.rows.item(i)["OUTCOME"]).set("PARTS", resp.rows.item(i)["PARTS"]).set("LABOUR", resp.rows.item(i)["LABOUR"]).set("FILEBASE", resp.rows.item(i)["pic"]).set("FILENAME", "Take Image").set("FORACTION", "Take Image").set("OnDt", resp.rows.item(i)["onDt"]).set("Latitude", resp.rows.item(i)["latitude"]).set("Longitude", resp.rows.item(i)["longitude"]).set("ComboClaimJobId", "").set("ComboIsCompleted", "").set("CantCompleteReason", "");

                    _this21.auth.httpSend("Service_AllEngineerActionsNew", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(resp.rows.item(i)['JOBGUID'],  "EngSig Success", msg["Msg"]);
                      array.push(msg["Msg"]);

                      if (array.length == resp.rows.length) {
                        resolve("enggpics complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(resp.rows.item(i)['JOBGUID'],  "EngSig Failed", err["Msg"]);
                      // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_AllEngineerActionsNew";
                      // let Descp = 
                      //   {
                      //     JOBGUID: resp.rows.item(i)["JOBGUID"],
                      //     OUTCOME: resp.rows.item(i)["OUTCOME"],
                      //     PARTS: resp.rows.item(i)["PARTS"],
                      //     LABOUR: resp.rows.item(i)["LABOUR"],
                      //     JOBNOTE: resp.rows.item(i)["JOBNOTE"],
                      //     FILEBASE: resp.rows.item(i)["FILEBASE"],
                      //     FILENAME: "Take Image",
                      //     FORACTION: "Take Image",
                      //     OnDt: resp.rows.item(i)["OnDt"],
                      //     Latitude: resp.rows.item(i)["Latitude"],
                      //     Longitude: resp.rows.item(i)["Longitude"],
                      //     ComboClaimJobId: "",
                      //     ComboIsCompleted: "",
                      //     CantCompleteReason:""
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, resp.rows.item(i)["JOBGUID"],  actionName, Desc);
                      // End of ErrorLog
                      _this21.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == resp.rows.length) {
                        resolve("enggpics incomplete" + JSON.stringify(err));
                      }
                    });
                  } // end of for loop

                } else {
                  resolve("enggpics complete");
                }
              })["catch"](function (e) {
                reject(JSON.stringify(e));
              });
            });
          } // sync site survey

        }, {
          key: "syncSiteSurvey",
          value: function syncSiteSurvey() {
            var _this22 = this;

            this.auth.setLoadingText("Syncing Site Survey Report It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("85.5");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this22.auth.database.executeSql("select * from sitesurvey where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop12 = function _loop12(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("JOBGUID", res.rows.item(i)["JOBGUID"]).set("NB", res.rows.item(i)["siteSurveyboiler"]).set("BReq", res.rows.item(i)["siteSurveyboilerdescription"]).set("BLocation", res.rows.item(i)["locationboiler"]).set("NBLocation", res.rows.item(i)["NewBoilerLocationSelect"]).set("BLocation_Desc", res.rows.item(i)["NewBoilerLocationDesc"]).set("BFlue", res.rows.item(i)["FlueSelect"]).set("FlueExtension", res.rows.item(i)["FlueextensionsSelect"]).set("StandOffKit", res.rows.item(i)["StandOffKitSelect"]).set("D45Elbow", res.rows.item(i)["FourtyfivedegreeelbowSelect"]).set("D90Elbow", res.rows.item(i)["NinetydegreeelbowSelect"]).set("StandingInletPressure", res.rows.item(i)["StandingInletPressue"]).set("SSReason", res.rows.item(i)["SiteSurveyReason"]).set("SPrdctType", res.rows.item(i)["SiteSurveyProductType"]).set("GasRun", res.rows.item(i)["GasRunSelect"]).set("GasRun_Desc", res.rows.item(i)["GasRunNewDetails"]).set("CGasRun", res.rows.item(i)["CondensateGasSelect"]).set("CGasRun_Desc", res.rows.item(i)["CondensateGasNewDetails"]).set("WorkingInletPressure", res.rows.item(i)["WorkingInletPressue"]).set("ActionDt", _this22.auth.getdateformatV2()).set("Latitude", _this22.auth.lat).set("Longitude", _this22.auth["long"]).set("TRVs", res.rows.item(i)["trvs"]);

                    _this22.auth.httpSend("Service_BInsReport_SS", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyRep Success", msg["Msg"]);
                      console.log("Danish SS Report" + msg["Msg"]);

                      _this22.auth.database.executeSql("update sitesurveypics set SSID = ? where JOBGUID=?", [msg["Msg"], res.rows.item(i)["JOBGUID"]]);

                      _this22.auth.database.executeSql("update sitesurveysign set SSID = ? where JOBGUID=?", [msg["Msg"], res.rows.item(i)["JOBGUID"]]);

                      array.push(msg["Msg"]);

                      if (array.length == res.rows.length) {
                        resolve("sitesurvey complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyRep Failed", err["Msg"]);
                      // Start ErrorLog
                      // console.log("Danish BInsReport error "+JSON.stringify(err));
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_BInsReport_SS";
                      // let Descp = 
                      //   {
                      //     JOBGUID: res.rows.item(i)["JOBGUID"],
                      //     NB: res.rows.item(i)["siteSurveyboiler"],
                      //     BReq: res.rows.item(i)["siteSurveyboilerdescription"],
                      //     BLocation: res.rows.item(i)["locationboiler"],
                      //     NBLocation: res.rows.item(i)["NewBoilerLocationSelect"],
                      //     BLocation_Desc:res.rows.item(i)["NewBoilerLocationDesc"],
                      //     BFlue: res.rows.item(i)["FlueSelect"],
                      //     FlueExtension: res.rows.item(i)["FlueextensionsSelect"],
                      //     StandOffKit: res.rows.item(i)["StandOffKitSelect"],
                      //     D45Elbow:res.rows.item(i)["FourtyfivedegreeelbowSelect"],
                      //     D90Elbow: res.rows.item(i)["NinetydegreeelbowSelect"],
                      //     StandingInletPressure:res.rows.item(i)["StandingInletPressue"],
                      //     SSReason: res.rows.item(i)["SiteSurveyReason"],
                      //     SPrdctType: res.rows.item(i)["SiteSurveyProductType"],
                      //     GasRun: res.rows.item(i)["GasRunSelect"],
                      //     GasRun_Desc: res.rows.item(i)["GasRunNewDetails"],
                      //     CGasRun: res.rows.item(i)["CondensateGasSelect"],
                      //     CGasRun_Desc:res.rows.item(i)["CondensateGasNewDetails"],
                      //     WorkingInletPressure:res.rows.item(i)["WorkingInletPressue"],                
                      //     ActionDt: this.auth.getdateformatV2(),
                      //     Latitude: this.auth.locationCoords.coords.latitude,
                      //     Longitude: this.auth.locationCoords.coords.longitude,
                      //     TRVs : res.rows.item(i)["trvs"]
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this22.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics incomplete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop12(i);
                  }
                } else {
                  resolve("sitesuvery complete");
                }
              })["catch"](function (e) {
                reject(" sync survey error");
              });
            });
          }
        }, {
          key: "syncSurveyPics",
          value: function syncSurveyPics() {
            var _this23 = this;

            this.auth.setLoadingText("Syncing Site Survey Images It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("92");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this23.auth.database.executeSql("select * from sitesurveypics where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("SSID", res.rows.item(i)["SSID"]).set("BImage", res.rows.item(i)["BoilerImage"]).set("BPWImage", res.rows.item(i)["Boilerpipework"]).set("CTImage", res.rows.item(i)["CondensateterminationImage"]).set("FSImage", res.rows.item(i)["FusespurImage"]).set("IFImage", res.rows.item(i)["InternalflueImage"]).set("FILImage", res.rows.item(i)["FlueInLoftImage"]).set("EFTImage", res.rows.item(i)["ExternalflueterminalImage"]).set("ACCImage", res.rows.item(i)["AiringCupboardCylinderImage"]).set("TImage", '').set('BMCImage', '').set("STLImage", res.rows.item(i)["STLImage"]).set("DOLImage", res.rows.item(i)["DrainOffLocationFlagImage"]).set("GMImage", res.rows.item(i)["GasMeterImage"]).set("A1Image", res.rows.item(i)["AdditionalOne"]).set("A2Image", res.rows.item(i)["AdditionalTwo"]).set("A3Image", res.rows.item(i)["AdditionalThree"]).set("A4Image", res.rows.item(i)["AdditionalFour"]);

                    _this23.auth.httpSend("Service_BInsImags_SS", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyPic Success", msg["Msg"]);
                      console.log("Danish pic succ" + msg["Msg"]);
                      array.push(msg["Msg"]);

                      if (array.length == res.rows.length) {
                        resolve("sitesurveypic complete");
                      }
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyPic Failed", err["Msg"]);
                      // Start ErrorLog
                      // console.log("Danish BInsImags error "+JSON.stringify(err));
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_BInsImags_SS";
                      // let Descp = 
                      //   {
                      //     SSID: res.rows.item(i)["SSID"],
                      //     BImage: res.rows.item(i)["BoilerImage"],
                      //     BPWImage: res.rows.item(i)["Boilerpipework"],
                      //     CTImage: res.rows.item(i)["CondensateterminationImage"],
                      //     FSImage: res.rows.item(i)["FusespurImage"],
                      //     IFImage: res.rows.item(i)["InternalflueImage"],
                      //     FILImage: res.rows.item(i)["FlueInLoftImage"],
                      //     EFTImage: res.rows.item(i)["ExternalflueterminalImage"],
                      //     ACCImage:res.rows.item(i)["AiringCupboardCylinderImage"],
                      //     TImage: '',
                      //     BMCImage: '',
                      //     STLImage: res.rows.item(i)["STLImage"],
                      //     DOLImage: res.rows.item(i)["DrainOffLocationFlagImage"],
                      //     GMImage: res.rows.item(i)["GasMeterImage"],
                      //     A1Image: res.rows.item(i)["AdditionalOne"],
                      //     A2Image: res.rows.item(i)["AdditionalTwo"],
                      //     A3Image: res.rows.item(i)["AdditionalThree"],
                      //     A4Image: res.rows.item(i)["AdditionalFour"]
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // End of ErrorLog
                      _this23.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("enggpics incomplete");
                      }
                    });
                  }
                } else {
                  resolve(" sync  sitesuvery Pics complete");
                }
              })["catch"](function (e) {
                reject(" sync survey error");
              });
            });
          }
        }, {
          key: "syncSurveySign",
          value: function syncSurveySign() {
            var _this24 = this;

            this.auth.setLoadingText("Syncing Site Survey Signatures It may take some time. Please wait... Thank you");
            this.auth.setProgressBar("96");
            var array = [];
            return new Promise(function (resolve, reject) {
              _this24.auth.database.executeSql("select * from sitesurveysign  where HaveData=?", ["yes"]).then(function (res) {
                if (res.rows.length > 0) {
                  var _loop13 = function _loop13(i) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("SSID", res.rows.item(i)["SSID"]).set("BInsAddNotes", res.rows.item(i)["describeIssue"]).set("InstallerSig", res.rows.item(i)["surveyorsign"]).set("CustomerSig", res.rows.item(i)["customersign"]).set("InstallerName", res.rows.item(i)["surveyorname"]).set("CustomerName", res.rows.item(i)["customername"]);

                    _this24.auth.httpSend("Service_BInsSignature_SS", params, "post").subscribe(function (msg) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveySig Success", msg["Msg"]);
                      console.log("Danish sig" + JSON.stringify(msg));

                      _this24.auth.database.executeSql("delete from sitesurvey where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      _this24.auth.database.executeSql("delete from sitesurveypics where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      _this24.auth.database.executeSql("delete from sitesurveysign where JOBGUID=?", [res.rows.item(i)["JOBGUID"]]);

                      array.push(msg["Msg"]); //sync SS button Clicked

                      console.log("Danish caim ref, ssid , buton " + res.rows.item(i)["CLAIMRef"], res.rows.item(i)["SSID"], res.rows.item(i)["ButtonClicked"]);
                      var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams().set("Ref247", res.rows.item(i)["CLAIMRef"]).set("SiteSurveyNewsId", res.rows.item(i)["SSID"]).set("BtnClick", res.rows.item(i)["ButtonClicked"]);

                      _this24.auth.httpSend("SwChannelApi_SiteSurveyButtonsClicked", params, "post").subscribe(function (btn_msg) {
                        // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyButton Success", btn_msg["Msg"]);
                        if (array.length == res.rows.length) {
                          resolve("sitesuvery sign complete");
                        }
                      }, function (btn_err) {
                        // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveyButton Failed", btn_err["Msg"]);
                        // console.log("Danish error button err"+JSON.stringify(btn_err));
                        // // Start ErrorLog
                        // let errorMsg = JSON.stringify(btn_err);
                        // let actionName ="SwChannelApi_SiteSurveyButtonsClicked";
                        // let Descp = 
                        //   {
                        //     Ref247: res.rows.item(i)["CLAIMRef"],
                        //     SiteSurveyNewsId: res.rows.item(i)["SSID"],
                        //     BtnClick: res.rows.item(i)["ButtonClicked"],
                        // }                      
                        // ; 
                        // let Desc = JSON.stringify(Descp);
                        // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                        // // End of ErrorLog
                        _this24.auth.showToast(JSON.stringify(btn_err.message));

                        if (array.length == res.rows.length) {
                          resolve("sitesuvery sign incomplete");
                        }
                      });
                    }, function (err) {
                      // this.auth.insertIntoSyncLog(res.rows.item(i)['JOBGUID'],  "SiteSurveySig Failed", err["Msg"]);
                      // console.log("Danish BInsSignature error "+JSON.stringify(err));
                      // // Start ErrorLog
                      // let errorMsg = JSON.stringify(err);
                      // let actionName ="Service_BInsSignature_SS";
                      // let Descp = 
                      //   {
                      //     SSID: res.rows.item(i)["SSID"],
                      //     BInsAddNotes: res.rows.item(i)["describeIssue"],
                      //     InstallerSig: res.rows.item(i)["surveyorsign"],
                      //     CustomerSig: res.rows.item(i)["customersign"],
                      //     InstallerName: res.rows.item(i)["surveyorname"],
                      //     CustomerName: res.rows.item(i)["customername"]
                      // }                      
                      // ; 
                      // let Desc = JSON.stringify(Descp);
                      // this.auth.insertIntoErrorLog(errorMsg, res.rows.item(i)['JOBGUID'],  actionName, Desc);
                      // // End of ErrorLog
                      _this24.auth.showToast(JSON.stringify(err.message));

                      array.push(err["header"]);

                      if (array.length == res.rows.length) {
                        resolve("sitesurvay complete");
                      }
                    });
                  };

                  for (var i = 0; i < res.rows.length; i++) {
                    _loop13(i);
                  }
                } else {
                  resolve(" sync survey Installation Pics complete");
                }
              })["catch"](function (e) {
                reject(" sync survey error");
              });
            });
          }
        }, {
          key: "retryAlert",
          value: function retryAlert(msg, hdr, subHeader) {
            var _this25 = this;

            console.log("ddddd " + this.retryCount);
            ++this.retryCount;
            console.log("ddddd " + this.retryCount);

            if (this.retryCount <= 3) {
              this.alertCtrl.create({
                header: hdr || "Alert Message",
                subHeader: subHeader,
                cssClass: "custom-class",
                message: msg,
                backdropDismiss: false,
                buttons: [{
                  text: "Re-Try",
                  handler: function handler() {
                    _this25.getJobsfromApi();
                  }
                }]
              }).then(function (res) {
                res.present();
              });
            } else {
              this.auth.alert("Unexpected Error Occured Please Contact IT Support Team");
            }
          }
        }]);

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
        }, {
          type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__.AndroidPermissions
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__.LocationAccuracy
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _themes_service__WEBPACK_IMPORTED_MODULE_7__.ThemesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-tab1",
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _Tab1Page);
      /***/
    },

    /***/
    32817:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"bgcolour\">\n    <ion-row>\n      <ion-col size=\"10\" >\n          <div>\n            <img src=\"../../assets/images/name.png\">\n          </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div>\n          <ion-icon class=\"syncbutton\" size=\"large\" name=\"sync\" (click)=\"syncClick()\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  \n  <div id=\"address\" class=\"whitebg\">\n    <marquee behavior=\"\" direction=\"\">\n      <span>{{address}}</span>\n    </marquee>    \n  </div>\n\n  <ion-segment class=\"whitebg\" color=\"favorite\" value=\"today\"  [(ngModel)]=\"segment\">  \n    <ion-segment-button value=\"today\">\n      <ion-label>Today</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"past\">\n      <ion-label>Past</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"future\">\n      <ion-label>Future</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n   <div [ngSwitch]=\"segment\">\n    <div *ngSwitchCase=\"'today'\">\n      <div *ngFor='let engineerJob of model; let i = index' (click)= 'gotoDetails(engineerJob.CLAIMGUID)'>\n        <div *ngIf=\"engineerJob.ListType == 'Today'\" >\n          <ion-card [hidden]=\"engineerJob.ParentJobGuid != ''\"> \n            <ion-list>\n              <ion-item lines='none' style=\"--background:{{engineerJob.BackgroundColour}};\" >\n                <ion-thumbnail slot=\"start\">\n                  <ion-label>\n                    <p>{{engineerJob.BookingDate}}</p>\n                    <p>{{engineerJob.BookingTimeType}}</p>\n                  </ion-label>\n                </ion-thumbnail>\n                <ion-label>\n                  <h4>{{engineerJob.CLAIMJOBID}} {{engineerJob.RiskPostCode}}</h4>\n                  <h2>{{engineerJob.ProductName}}</h2>\n                  <p>{{engineerJob.ContactName}}</p>\n                  <p>{{engineerJob.RiskAddress}}</p>\n                </ion-label>\n                <ion-icon slot='end' name=\"chevron-forward\"></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    \n  \n    <div *ngSwitchCase=\"'past'\">\n      <div *ngFor='let engineerJob of model; let i = index' (click)= 'gotoDetails(engineerJob.CLAIMGUID)'>\n        <div *ngIf=\"engineerJob.ListType == 'Past'\" >\n          <ion-card [hidden]=\"engineerJob.ParentJobGuid != ''\"> \n            <ion-list>\n              <ion-item lines=\"none\" [hidden]=\"engineerJob.ParentJobGuid!=''\" style=\"--background:{{engineerJob.BackgroundColour}};\" >\n                <ion-thumbnail slot=\"start\">\n                  <ion-label>\n                    <p>{{engineerJob.BookingDate}}</p>\n                    <p>{{engineerJob.BookingTimeType}}</p>\n                  </ion-label>\n                </ion-thumbnail>\n                <ion-label>\n                  <h4>{{engineerJob.CLAIMJOBID}} {{engineerJob.RiskPostCode}}</h4>\n                  <h2>{{engineerJob.ProductName}}</h2>\n                  <p>{{engineerJob.ContactName}}</p>\n                  <p>{{engineerJob.RiskAddress}}</p>\n                </ion-label>\n                <ion-icon slot='end' name=\"chevron-forward\"></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    \n\n    <div *ngSwitchCase=\"'future'\">\n      <div *ngFor='let engineerJob of model; let i = index' (click)= 'gotoDetails(engineerJob.CLAIMGUID)'>\n        <div *ngIf=\"engineerJob.ListType == 'Future'\" >\n          <ion-card [hidden]=\"engineerJob.ParentJobGuid != ''\"> \n            <ion-list>\n              <ion-item lines='none' style=\"--background:{{engineerJob.BackgroundColour}};\" >\n                <ion-thumbnail slot=\"start\">\n                  <ion-label>\n                    <p>{{engineerJob.BookingDate}}</p>\n                    <p>{{engineerJob.BookingTimeType}}</p>\n                  </ion-label>\n                </ion-thumbnail>\n                <ion-label>\n                  <h4>{{engineerJob.CLAIMJOBID}} {{engineerJob.RiskPostCode}}</h4>\n                  <h2>{{engineerJob.ProductName}}</h2>\n                  <p>{{engineerJob.ContactName}}</p>\n                  <p>{{engineerJob.RiskAddress}}</p>\n                </ion-label>\n                <ion-icon slot='end' name=\"chevron-forward\"></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    39115:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      module.exports = "ion-header ion-toolbar ion-row {\n  margin: 0;\n}\nion-header ion-toolbar ion-row ion-col div {\n  display: flex;\n  vertical-align: middle;\n}\nion-header ion-toolbar ion-row ion-col div img {\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  width: 100%;\n}\nion-header ion-toolbar ion-row ion-col ion-icon {\n  color: #e4e6e6;\n}\nion-header #address {\n  padding: 0px 1rem 0px 1rem;\n  font-size: 15px;\n  font-weight: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000000;\n}\nion-card {\n  border-radius: 10px;\n}\nion-card ion-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nion-card ion-list ion-item ion-label h2 {\n  color: #1a1c20;\n}\nion-card ion-list ion-item ion-label h4 {\n  color: #1a1c20;\n}\nion-card ion-list ion-item ion-label p {\n  color: #1a1c20;\n}\nion-card ion-list ion-item ion-icon {\n  color: #1a1c20;\n}\n.category-block {\n  margin-bottom: 4px;\n}\nion-grid {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 0px));\n          padding-inline-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 0px));\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  -webkit-padding-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 0px));\n          padding-inline-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 0px));\n}\n.category-banner {\n  text-align: center;\n}\n.bgcolour {\n  --background: hsl(205, 85%, 15%);\n}\n.syncbutton {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.whitebg {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksU0FBQTtBQURaO0FBR2dCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRHBCO0FBRW9CO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBeEI7QUFJYTtFQUNHLGNBQUE7QUFGaEI7QUFPSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBV0E7RUFDSSxtQkFBQTtBQVJKO0FBWUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFnQmdCO0VBQ0ksY0FBQTtBQWRwQjtBQWlCZ0I7RUFDSSxjQUFBO0FBZnBCO0FBa0JnQjtFQUNJLGNBQUE7QUFoQnBCO0FBcUJZO0VBQ0ksY0FBQTtBQW5CaEI7QUEwQkE7RUFDSSxrQkFBQTtBQXZCSjtBQXlCQztFQUNHLDBCQUFBO1VBQUEseUJBQUE7RUFBQSwrRUFBQTtVQUFBLDhFQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUFBLDZFQUFBO1VBQUEsNEVBQUE7QUF0Qko7QUF3QkE7RUFHSSxrQkFBQTtBQXZCSjtBQTBCQTtFQUNJLGdDQUFBO0FBdkJKO0FBeUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBdEJKO0FBMEJBO0VBQ0kseUJBQUE7QUF2QkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U0ZTZlNjtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2FkZHJlc3Mge1xuICAgICAgICBwYWRkaW5nOiAwcHggMXJlbSAwcHggMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG59XG5cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICBcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFjMjA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWMyMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFjMjA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWMyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4uY2F0ZWdvcnktYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbiBpb24tZ3JpZHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgMHB4KSk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCAwcHgpKTtcbiB9XG4uY2F0ZWdvcnktYmFubmVyIHtcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLy9wYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnY29sb3Vye1xuICAgIC0tYmFja2dyb3VuZCA6IGhzbCgyMDUsIDg1JSwgMTUlKTtcbn1cbi5zeW5jYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5cbi53aGl0ZWJne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map