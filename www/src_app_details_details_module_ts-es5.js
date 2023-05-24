(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_details_details_module_ts"], {
    /***/
    95048:
    /*!***************************************************!*\
      !*** ./src/app/details/details-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailsPageRoutingModule": function DetailsPageRoutingModule() {
          return (
            /* binding */
            _DetailsPageRoutingModule
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


      var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./details.page */
      21735);

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
      }];

      var _DetailsPageRoutingModule = /*#__PURE__*/_createClass(function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      });

      _DetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DetailsPageRoutingModule);
      /***/
    },

    /***/
    10396:
    /*!*******************************************!*\
      !*** ./src/app/details/details.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailsPageModule": function DetailsPageModule() {
          return (
            /* binding */
            _DetailsPageModule
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./details-routing.module */
      95048);
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./details.page */
      21735);

      var _DetailsPageModule = /*#__PURE__*/_createClass(function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      });

      _DetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
      })], _DetailsPageModule);
      /***/
    },

    /***/
    21735:
    /*!*****************************************!*\
      !*** ./src/app/details/details.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailsPage": function DetailsPage() {
          return (
            /* binding */
            _DetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details.page.html */
      15463);
      /* harmony import */


      var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./details.page.scss */
      75267);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/camera */
      4320);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      89131);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var validation = /*#__PURE__*/_createClass(function validation(route) {
        _classCallCheck(this, validation);

        this.route = route;
      });

      var _DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(platform, geolocation, storage, router, route, auth, iab) {
          _classCallCheck(this, DetailsPage);

          this.platform = platform;
          this.geolocation = geolocation;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.auth = auth;
          this.iab = iab;
          this.base64 = '';
          this.updatePicture = '';
          this.userLatitude = '';
          this.userLongitude = '';
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
                setTimeout(function () {
                  if (_this.data['ProductName'] == 'SITE SURVEY') {
                    _this.hideInventory = true;
                  }
                }, 200);

                _this.auth.database.executeSql("select status from jobsstatus where JOBGUID = ?", [_this.data['JOBGUID']]).then(function (res) {
                  console.log('################# ISCLAIM  JOBS STATUS ' + _this.data['IsClaim'] + ' ' + JSON.stringify(res) + ' ' + res.rows.item(0)['status'] + ' ' + _this.data['ProductName'] + ' ' + _this.data['ProductTypeName']);

                  _this.auth.dismissLoading();

                  if (res.rows.item(0)['status'] == 'onroute') {
                    _this.updateButtons(true, false, true, true, true, true, true, true, true, true, true, false, false);
                  } else if (res.rows.item(0)['status'] == 'arrived' && _this.data['IsClaim'] == 'True') {
                    if (_this.data['ProductName'] == 'BOILER INSTALLATION') {
                      _this.updateButtons(true, true, false, false, false, false, false, true, true, true, true, false, false);
                    } else if (_this.data['ProductTypeName'] == 'Boiler' && _this.data['BackgroundColour'] == '#20B2AA') {
                      _this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                    } else {
                      _this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                    }
                  } else if (res.rows.item(0)['status'] == 'arrived' && _this.data['IsClaim'] == 'False') {
                    if (_this.data['ProductName'] == 'SITE SURVEY') {
                      _this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                    } else _this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                  } else if (res.rows.item(0)['status'] == null) {
                    _this.updateButtons(false, true, true, true, true, true, true, true, true, true, true, false, false);
                  } else if (res.rows.item(0)['status'] == 'boilerinstallation' && _this.data['IsClaim'] == 'True') {
                    _this.updateButtons(true, true, false, false, false, true, false, true, true, true, true, false, false);
                  } else {
                    if (res.rows.item(0)['status'] == 'completed') {
                      _this.auth.alert("Job already completed");

                      if (_this.data['IsClaim'] == 'True') {
                        if (_this.data['ProductName'] == 'BOILER INSTALLATION') {
                          _this.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false); //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);

                        } else if (_this.data['ProductTypeName'] == 'Boiler' && _this.data['BackgroundColour'] == '#20B2AA') {
                          _this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                        } else {
                          _this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                        }
                      } else {
                        if (_this.data['ProductName'] == 'SITE SURVEY') {
                          _this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                        } else _this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                      }
                    } else {
                      _this.auth.alert(' Something went wrong. ');

                      if (_this.data['IsClaim'] == 'True') {
                        if (_this.data['ProductName'] == 'BOILER INSTALLATION') {
                          _this.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false); //this.updateButtons(true,true,false,false,false,false,false,true,true,true,true,false,false);

                        } else if (_this.data['ProductTypeName'] == 'Boiler' && _this.data['BackgroundColour'] == '#20B2AA') {
                          _this.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                        } else {
                          _this.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                        }
                      } else {
                        if (_this.data['ProductName'] == 'SITE SURVEY') {
                          _this.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                        } else _this.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
                      }
                    }
                  }
                })["catch"](function (e) {
                  _this.auth.dismissLoading();

                  console.log('################# ERROR ISCLAIM  JOBS STATUS' + _this.data['IsClaim'] + ' ' + JSON.stringify(e));
                });
              }
            });
            console.log("Danish " + this.data['CLAIMRef']);
          } // Arrived

        }, {
          key: "btnArrivedAtJobClick",
          value: function btnArrivedAtJobClick() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var a;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.auth.checkNetwork();

                    case 2:
                      a = _context.sent;

                      if (a.connected) {
                        this.auth.turnOnGpsAndGetLocation().subscribe(function (pos) {
                          _this2.syncArrived(pos);
                        });
                      } else {
                        this.auth.turnOnGpsAndGetLocation().subscribe(function (pos) {
                          _this2.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this2.auth.getdateformatV2(), 'yes', _this2.data['JOBGUID']]).then(function (res) {
                            _this2.updateOnArrivedButton();
                          })["catch"](function () {
                            _this2.auth.dismissLoading();

                            _this2.auth.showToast('error occured please press again');
                          });
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "syncArrived",
          value: function syncArrived(pos) {
            var _this3 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set("JOBGUID", this.data["JOBGUID"]).set("Latitude", pos.coords.latitude.toString()).set("Longitude", pos.coords.latitude.toString()).set("ArrAtJobDT", this.auth.getdateformatV2()).set("Desc", this.auth.getdateformatV2()).set("title", "Arrived at job");
            this.auth.httpSend("Service_SaveArrivedAtJob", params, "post").subscribe(function (msg) {
              _this3.auth.insertIntoSyncLog(_this3.data['JOBGUID'], "OnArrived Done", msg["Msg"]);

              _this3.updateOnArrivedButton();
            }, function (err) {
              _this3.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this3.auth.getdateformatV2(), 'yes', _this3.data['JOBGUID']]).then(function (res) {
                _this3.updateOnArrivedButton();
              })["catch"](function () {
                _this3.auth.dismissLoading();

                _this3.auth.showToast('error occured please press again');
              });
            });
          }
        }, {
          key: "updateOnArrivedButton",
          value: function updateOnArrivedButton() {
            var _this4 = this;

            this.auth.database.executeSql("update jobsstatus set status=? where JOBGUID=?", ['arrived', this.data['JOBGUID']]).then(function (res) {
              if (_this4.data['IsClaim'] == 'True') {
                if (_this4.data['ProductName'] == 'BOILER INSTALLATION') {
                  _this4.updateButtons(true, true, false, false, true, true, false, true, true, true, true, false, false);
                } else if (_this4.data['ProductTypeName'] == 'Boiler' && _this4.data['BackgroundColour'] == '#20B2AA') {
                  _this4.updateButtons(true, true, false, false, false, true, true, false, false, false, true, false, false);
                } else {
                  _this4.updateButtons(true, true, false, false, false, true, true, true, true, true, true, false, false);
                }
              } else {
                if (_this4.data['ProductName'] == 'SITE SURVEY') {
                  _this4.updateButtons(true, true, false, true, true, true, true, true, true, true, false, true, false);
                } else _this4.updateButtons(true, true, false, true, true, false, true, true, true, true, true, false, false);
              }

              _this4.auth.dismissLoading();
            })["catch"](function (e) {
              _this4.auth.dismissLoading();

              _this4.auth.alert("Please turn on the location. Location is mandatory to use the application.", "Permission Error");
            });
          } // OnRoute

        }, {
          key: "btnOnRouteClick",
          value: function btnOnRouteClick() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var a;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.auth.checkNetwork();

                    case 2:
                      a = _context2.sent;

                      if (a.connected) {
                        this.auth.turnOnGpsAndGetLocation().subscribe(function (pos) {
                          _this5.synconRoute(pos);
                        });
                      } else {
                        this.auth.turnOnGpsAndGetLocation().subscribe(function (pos) {
                          _this5.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ", [_this5.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this5.auth.getdateformatV2(), 'yes', _this5.data['JOBGUID']]).then(function (res) {
                            _this5.updateOnRouteButtons();
                          })["catch"](function (err) {
                            _this5.auth.dismissLoading();

                            _this5.auth.showToast('error occured please press again');
                          });
                        });
                      }

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "synconRoute",
          value: function synconRoute(pos) {
            var _this6 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set("CLAIMGUID", this.data["CLAIMGUID"]).set("JOBGUID", this.data["JOBGUID"]).set("Latitude", pos.coords.latitude.toString()).set("Longitude", pos.coords.longitude.toString()).set("OnRouteDT", this.auth.getdateformatV2()).set("Desc", this.auth.getdateformatV2()).set("title", "On Route");
            this.auth.httpSend("Service_SaveOnRoute", params, "post").subscribe(function (msg) {
              _this6.updateOnRouteButtons();

              _this6.auth.insertIntoSyncLog(_this6.data['JOBGUID'], "OnRoute Done", msg["Msg"]);
            }, function (err) {
              _this6.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=? ", [_this6.data['CLAIMGUID'], pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this6.auth.getdateformatV2(), 'yes', _this6.data['JOBGUID']]).then(function (res) {
                _this6.updateOnRouteButtons();
              })["catch"](function (err) {
                _this6.auth.dismissLoading();

                _this6.auth.showToast('error occured please press again');
              });

              ;
            });
          }
        }, {
          key: "updateOnRouteButtons",
          value: function updateOnRouteButtons() {
            var _this7 = this;

            this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ", ['onroute', this.data['JOBGUID']]).then(function () {
              if (_this7.data['ProductName'] == 'SITE SURVEY') {
                _this7.updateButtons(true, false, true, true, true, true, true, true, true, true, true, true, false);
              } else {
                _this7.updateButtons(true, false, true, true, true, true, true, true, true, true, true, false, false);
              }

              _this7.auth.dismissLoading();
            })["catch"](function () {
              _this7.auth.dismissLoading();

              _this7.auth.showToast('error occured please press again');
            });
          } // click certificate

        }, {
          key: "CertificateClick",
          value: function CertificateClick(ServicedetailsList) {
            this.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [this.data['JOBGUID'], this.data['CLAIMJOBID'], " "]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['createcertificate'], navigationExtras);
          }
        }, {
          key: "btnAbandonCallClick",
          value: function btnAbandonCallClick() {
            this.auth.database.executeSql('insert into abandon (JOBGUID) values(?)', [this.data['JOBGUID']]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['abandoncall'], navigationExtras);
          }
        }, {
          key: "btnAuthorizationRequiredClick",
          value: function btnAuthorizationRequiredClick() {
            this.auth.database.executeSql('insert into authorization (JOBGUID) values(?)', [this.data['JOBGUID']]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['authorizationrequired'], navigationExtras);
          }
        }, {
          key: "fetchJobStatus",
          value: function fetchJobStatus(JOBGUID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("job status " + this.auth.status);
                      _context3.next = 3;
                      return this.auth.fetchJobsStatus(JOBGUID);

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "updateButtons",
          value: function updateButtons(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13) {
            this.hideRouteFlag = b1;
            this.hideArrivedFlag = b2;
            this.hideAbandonFlag = b3;
            this.hideAuthorizationFlag = b4;
            this.hideCompleteFlag = b5;
            this.hidecreateCertificateFlag = b6;
            this.hideBoilerInstallationReport = b7;
            this.hideComboLabel = b8;
            this.hideStartService = b9;
            this.hideCannotComplete = b10;
            this.hideSiteSurvey = b11;
            this.hideInventory = b12;
            this.hideVanStock = b13;
          }
        }, {
          key: "CompleteClick",
          value: function CompleteClick() {
            this.auth.database.executeSql('insert into completeclaim (JOBGUID, BackgroundColour) values(?,?)', [this.data['JOBGUID'], this.data['BackgroundColour']]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['complete-claim'], navigationExtras);
          }
        }, {
          key: "BoilerInstallClick",
          value: function BoilerInstallClick() {
            this.auth.database.executeSql('insert into boilerinstallation (JOBGUID) values(?)', [this.data['JOBGUID']]);
            this.auth.database.executeSql('insert into boilerinstallationpics (JOBGUID) values(?)', [this.data['JOBGUID']]);
            this.auth.database.executeSql('insert into boilerinstallationsign (JOBGUID) values(?)', [this.data['JOBGUID']]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['boilerinstall'], navigationExtras);
          }
        }, {
          key: "StartServiceClick",
          value: function StartServiceClick() {
            var _this8 = this;

            this.auth.database.executeSql('select * from jobslist where ParentJobGuid=?', [this.data['JOBGUID']]).then(function (res) {
              console.log("dddd claim job guid" + _this8.data["JOBGUID"]);
              console.log("dddd service data" + JSON.stringify(res.rows.item(0)));
              console.log("dddd service jobguid" + res.rows.item(0)["JOBGUID"]);
              var dat = {
                JOBGUID: res.rows.item(0)["JOBGUID"],
                CLAIMJOBID: res.rows.item(0)['CLAIMJOBID'],
                ComboClaimJobId: _this8.data['CLAIMJOBID'],
                RiskAddress: _this8.data['RiskAddress'],
                CLAIMGUID: res.rows.item(0)['CLAIMGUID'],
                CLAIMRef: _this8.data["CLAIMRef"],
                RiskPostCode: _this8.data["RiskPostCode"],
                ProductName: _this8.data["ProductName"],
                ContactName: _this8.data["ContactName"],
                BookingDate: _this8.data["BookingDate"],
                AppointmentStartTime: _this8.data["AppointmentStartTime"],
                AppointmentEndTime: _this8.data["AppointmentEndTime"],
                BookingTimeType: _this8.data["BookingTimeType"],
                phone: _this8.data["phone"],
                ProductTypeId: _this8.data["ProductTypeId"],
                IsClaim: _this8.data["IsClaim"],
                BackgroundColour: _this8.data["BackgroundColour"],
                CLIENTNAME: _this8.data["CLIENTNAME"],
                ProductTypeName: _this8.data["ProductTypeName"],
                EngName: _this8.data["EngName"]
              };
              console.log("dddd " + JSON.stringify(dat));
              console.log("dddd " + JSON.stringify(res.rows.item(0)["JOBGUID"]));
              var navigationExtras = {
                state: {
                  data: dat
                }
              };

              _this8.router.navigate(['createcertificate'], navigationExtras);

              _this8.auth.database.executeSql('insert into certificate (JOBGUID, CLAIMJOBID, ParentJobGuid) values(?,?,?)', [dat.JOBGUID, dat.CLAIMJOBID, _this8.data['JOBGUID']]); // updating on route and on Arrived


              _this8.auth.turnOnGpsAndGetLocation().subscribe(function (pos) {
                _this8.auth.database.executeSql("update onroute set CLAIMGUID=?, Latitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [dat.CLAIMJOBID, pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this8.auth.getdateformatV2(), 'yes', dat.JOBGUID]);

                _this8.auth.database.executeSql("update arrived set CLAIMGUID=?, Lattitude=?, Longitude=?,OnRouteDT=?,HaveData=? where JOBGUID=?", [dat.CLAIMJOBID, pos.coords.latitude.toString(), pos.coords.longitude.toString(), _this8.auth.getdateformatV2(), 'yes', dat.JOBGUID]);

                _this8.auth.dismissLoading();
              });
            }); // console.log("Data Fetched from this Job : "+this.data['JOBGUID']+""+this.data['CLAIMGUID']+"");
          }
        }, {
          key: "CannotCompleteClick",
          value: function CannotCompleteClick() {
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['cannotcomplete'], navigationExtras);
          }
        }, {
          key: "call",
          value: function call(no) {
            no == 1 ? window.open('tel:' + this.data['phone']) : window.open('tel:' + this.data['HomePhone']);
          }
        }, {
          key: "mapopen",
          value: function mapopen() {
            window.open('https://maps.google.com/?q=' + this.data['RiskAddress'] + ' ' + this.data['RiskPostCode'], '_system');
          } // syncRoute(){
          //   this.syncOnRoute().then((res)=>{
          //       console.log('SYNC SUCCESS'+JSON.stringify(res));
          //   }).catch((e)=>{
          //     console.log('SYNC SUCCESS'+JSON.stringify(e));
          //   });
          // }
          // syncArrved(){
          //   this.syncArrived().then((res)=>{
          //     console.log('SYNC SUCCESS'+JSON.stringify(res));
          // }).catch((e)=>{
          //   console.log('SYNC SUCCESS'+JSON.stringify(e));
          // });
          // }
          // syncArrived(){   
          //   this.auth.presentLoading('Syncing Arrived Table...');
          //    return new Promise((resolve, reject)=>{
          //     this.auth.database.executeSql('select * from arrived',[]).then((res)=>{
          //       console.log(' # # on arrived data '+JSON.stringify(res)+' '+res.rows.length+' '+res.rows.item(0)['JOBGUID']);  
          //       for(let i=0; i< res.rows.length; i++ ){
          //       let params = new HttpParams()
          //       .set('JOBGUID',res.rows.item(0)['JOBGUID'])
          //       .set('Latitude',res.rows.item(0)['Latitude'])
          //       .set('Longitude',res.rows.item(0)['Longitude'])
          //       .set('ArrAtJobDT',res.rows.item(0)['OnRouteDT'])
          //       .set('Desc','arrived')
          //       .set('title','arrived');
          //       this.auth.httpSend('Service_SaveArrivedAtJob',params,'post').subscribe(
          //         (res)=>{
          //             console.log('## SUCCESS arrived SYNC'+JSON.stringify(res));    
          //             this.auth.dismissLoading();
          //       },
          //       (err)=>{
          //         console.log('## ERROR arrived SYNC'+JSON.stringify(err));    
          //         this.auth.dismissLoading();
          //       }
          //       );       
          //     }// end of for loop
          //      this.auth.dismissLoading(); 
          //      resolve('arrived complete'); 
          //   }).catch((e)=>{ this.auth.dismissLoading(); console.log(' # # on arrived get data failed.'); reject('# # on arrived complete'); }
          //   );
          //   });  
          // }
          // syncOnRoute(){  
          //   this.auth.presentLoading('Syncing OnRoute Table...');
          //    return new Promise((resolve, reject)=>{
          //     this.auth.database.executeSql('select * from onroute',[]).then((res)=>{
          //       console.log(' # # on route data '+JSON.stringify(res)+' '+res.rows.length+' '+res.rows.item(0)['CLAIMGUID']);  
          //       for(let i=0; i< res.rows.length; i++ ){
          //       let params = new HttpParams()
          //       .set('CLAIMGUID',res.rows.item(0)['CLAIMGUID'])
          //       .set('JOBGUID',res.rows.item(0)['JOBGUID'])
          //       .set('Latitude',res.rows.item(0)['Latitude'])
          //       .set('Longitude',res.rows.item(0)['Longitude'])
          //       .set('OnRouteDT',res.rows.item(0)['OnRouteDT'])
          //       .set('Desc',this.auth.getdateformatV2())
          //       .set('title','onroute');               
          //       this.auth.httpSend('Service_SaveOnRoute',params,'post').subscribe(
          //         (res)=>{
          //             console.log('##SUCCESS ONROUTE SYNC'+JSON.stringify(res));
          //             this.auth.dismissLoading();             
          //       },
          //       (err)=>{
          //         console.log('##ERROR ONROUTE SYNC'+JSON.stringify(err));
          //         this.auth.dismissLoading();
          //       }                
          //       );       
          //     }// end of for loop
          //      this.auth.dismissLoading(); 
          //      resolve('onroute complete'); 
          //   }).catch((e)=>{console.log(' # # on route get data failed.'); reject('# # on route failed'+JSON.stringify(e)); }
          //   )
          //   }); 
          // }

        }, {
          key: "btnInventoryClick",
          value: function btnInventoryClick() {
            var _this9 = this;

            this.storage.get('enggid').then(function (res) {
              var browser = _this9.iab.create('https://inventory.home360.org.uk/?RefNo=' + _this9.data['CLAIMRef'] + '&' + 'ClaimId=' + _this9.data['CLAIMGUID'] + '&' + 'EngId=' + res, '_self', {
                zoom: 'no'
              });
            })["catch"](function (e) {});
          }
        }, {
          key: "btnTicketClick",
          value: function btnTicketClick() {
            var browser = this.iab.create('https://newticket.home360.org.uk/Claim/Ticket?JobID=' + this.data['JOBGUID'], '_self', {
              zoom: 'no'
            });
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this10 = this;

            console.log(this.data['CLAIMGUID']);
            this.options = {
              quality: 20,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
              height: 360,
              width: 360,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
              allowEditing: false
            };

            _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(this.options).then(function (imageData) {
              var base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
              _this10.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;

              _this10.auth.database.executeSql("update  enggpics set  pic=?, HaveData=?,latitude=?,longitude=?,onDt=? where JOBGUID=? ", [imageData, 'yes', _this10.auth.lat, _this10.auth["long"], _this10.auth.getdateformatV2(), _this10.data['JOBGUID']]).then(function (res) {
                _this10.auth.showToast('Success! Engineer Image has been saved.', 'success');

                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set("data", imageData.base64String).set("CLAIMGUID", _this10.data['CLAIMGUID']);
                console.log(_this10.data['CLAIMGUID']);

                _this10.auth.httpSend("SavePhoto", params, "post").subscribe(function (res) {
                  console.log(res['Msg']);

                  _this10.auth.database.executeSql('delete from enggpics where JOBGUID= ?', [_this10.data['JOBGUID']]);
                }, function (err) {
                  console.log("send photo error" + err);
                });
              })["catch"](function (e) {
                _this10.auth.showToast('Error Saving Engineer Image.' + e, 'danger');
              });
            }, function (err) {
              _this10.auth.showToast('Error Getting Photo', 'danger');
            });
          }
        }, {
          key: "btnVSClick",
          value: function btnVSClick() {
            var _this11 = this;

            this.storage.get('enggid').then(function (enggid) {
              var browser = _this11.iab.create('https://hr.home360.org.uk/VanStockHistory/Index?ClaimId=' + _this11.data['CLAIMGUID'] + '&' + 'EngId=' + enggid, '_self', {
                zoom: 'no'
              });
            })["catch"](function (e) {});
          }
        }, {
          key: "btnSiteSurveyClick",
          value: function btnSiteSurveyClick() {
            this.auth.database.executeSql('insert into sitesurvey (JOBGUID) values(?)', [this.data['JOBGUID']]);
            this.auth.database.executeSql('insert into sitesurveypics (JOBGUID) values(?)', [this.data['JOBGUID']]);
            this.auth.database.executeSql('insert into sitesurveysign (JOBGUID) values(?)', [this.data['JOBGUID']]);
            var navigationExtras = {
              state: {
                data: this.data
              }
            };
            this.router.navigate(['sitesurvey'], navigationExtras); // this.storage.get('enggid').then((res)=>{
            //   const browser = this.iab.create('https://sitesurvey.home360.org.uk/?EngId=' +
            //   res + '&' + 'ClaimId=' + this.data['CLAIMGUID']);
            // }).catch((e)=>{
            // });
          }
        }]);

        return DetailsPage;
      }();

      _DetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser
        }];
      };

      _DetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-details',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DetailsPage);
      /***/
    },

    /***/
    15463:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/details/details.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n <ion-content>\n\n  <ion-card>\n    <ion-item style=\"--background: {{data.BackgroundColour}};\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label>\n              Pruduct Name : {{data.ProductName}} <br><br>\n              ClaimJobID : {{data.CLAIMJOBID}} <br><br>\n              JOBGUID : {{data.JOBGUID}} <br><br>\n              AppointmentDate : {{data.BookingDate}} <br><br>\n              Appointment Start Time : {{data.AppointmentStartTime}} <br><br>\n              Appointment End Time : {{data.AppointmentEndTime}} <br><br>\n              Client Name : {{data.CLIENTNAME}}                \n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label class=\"ion-text-wrap ion-text-justify\">RiskAddress : {{data.RiskAddress}} - {{data.RiskPostCode}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" style=\"display: flex; align-items: center;\">\n            <div class=\"callandmap\">\n              <div class=\"map\">\n                <ion-icon name=\"location\" (click)=\"mapopen()\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label>Phone: {{data.phone}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"callandmap\">\n              <div class=\"call\">\n                <ion-icon name=\"call\" (click)=\"call(1)\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" style=\"display: flex; align-items: center;\">\n            <ion-label>HomePhone : {{data.HomePhone}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"callandmap\">\n              <div class=\"call\">\n                <ion-icon name=\"call\" (click)=\"call(2)\"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>        \n      </ion-grid>\n      \n    </ion-item>\n  </ion-card>\n\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnTicketClick()\">\n          <ion-icon size=\"large\" name=\"eye\"></ion-icon>&nbsp;\n          View Job Ticket\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"takePhoto()\">\n          <ion-icon name=\"camera\"></ion-icon>&nbsp;\n          Take Picture\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnVSClick()\" [hidden]=\"hideVanStock\">\n          <ion-icon name=\"car\"></ion-icon>&nbsp;\n          Van Stock\n        </ion-button>\n      </ion-col>\n<!-- *ngIf=\"ProductName == 'BOILER SERVICE+GAS CERTIFICATE(GSI)' || ProductName == ''\" -->\n      <!-- <ion-col size=\"6\" *ngIf=\"data.ProductName == 'BOILER SERVICE+GAS CERTIFICATE(GSI)'\"> -->\n        <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnInventoryClick()\" [disabled]=\"hideInventory\">\n          <ion-icon name=\"document-text\"></ion-icon>&nbsp;\n          Inventory\n        </ion-button>\n      </ion-col>\n      \n      <!--         *ngIf=\"data.ProductName == 'SITE SURVEY' || data.ProductName == 'BOILER SERVICE'\n      || data.ProductName == 'BOILER BREAKDOWN' || data.ProductName == 'BOILER INSTALLATION'\" -->\n\n      <ion-col size=\"12\">\n        <ion-button color=\"secondary\" expand=\"full\" (click)=\"btnSiteSurveyClick()\" [hidden]=\"hideSiteSurvey\">\n          <ion-icon name=\"people\"></ion-icon>&nbsp;\n          Site Survey\n        </ion-button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button color=\"secondary\" [hidden]=\"hideRouteFlag\" expand=\"full\" (click)=\"btnOnRouteClick()\">On\n          Route</ion-button>\n        <ion-button color=\"secondary\" [hidden]=\"hideArrivedFlag\" expand=\"full\"\n          (click)=\"btnArrivedAtJobClick()\">Arrived at Job</ion-button>\n\n        <ion-button color=\"secondary\"  expand=\"full\"  [hidden]=\"hideAbandonFlag\"\n          (click)=\"btnAbandonCallClick()\">Abandon Call</ion-button>\n\n        <ion-button color=\"secondary\"  expand=\"full\" [hidden]=\"hideAuthorizationFlag\"\n          (click)=\"btnAuthorizationRequiredClick()\">Authorization Required</ion-button>\n\n        <ion-button color=\"secondary\"  [hidden]=\"hideCompleteFlag\" expand=\"full\" \n          (click)=\"CompleteClick()\"> Complete </ion-button>\n\n        <ion-button color=\"secondary\" expand=\"full\" [hidden]= \"hidecreateCertificateFlag\"\n          (click)=\"CertificateClick()\">Create Certificate</ion-button>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideBoilerInstallationReport\" expand=\"full\"\n          (click)=\"BoilerInstallClick()\">Boiler Install Report</ion-button>\n\n          <ion-label [hidden]=\"hideComboLabel\">  Please complete breakdown before Boiler Service </ion-label>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideStartService\" expand=\"full\"\n          (click)=\"StartServiceClick()\">Start Service</ion-button>\n\n          <ion-button color=\"secondary\" [hidden]=\"hideCannotComplete\" expand=\"full\"\n          (click)=\"CannotCompleteClick()\">Cannot Complete Service</ion-button>\n<!-- \n          <ion-button color='secondary' expand=\"full\" (click)=\"syncRoute()\">Sync </ion-button>\n\n          <ion-button color='secondary' expand=\"full\" (click)=\"syncArrved()\">Sync </ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> \n\n\n\n<!-- \n\n<ion-button color=\"secondary\" [hidden]=\"hidestartServiceFlag\" expand=\"full\"\n(click)=\"InsertFromCertNoFutureJob(ServicedetailsList)\">Start Service</ion-button>\n\n<ion-button color=\"secondary\" [hidden]=\"hideCannotCompleteServiceFlag\" expand=\"full\"\n(click)=\"CannotCompleteClick(ServicedetailsList)\">Cannot Complete Service</ion-button>\n\n -->";
      /***/
    },

    /***/
    75267:
    /*!*******************************************!*\
      !*** ./src/app/details/details.page.scss ***!
      \*******************************************/

    /***/
    function _(module) {
      module.exports = "ion-card ion-item ion-icon {\n  color: #1a1c20;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmQge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICMxYTFjMjA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIGljb24gc2l6ZSBoZXJlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_details_details_module_ts-es5.js.map