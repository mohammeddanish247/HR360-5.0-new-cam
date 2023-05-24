(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_newappliance_newappliance_module_ts"], {
    /***/
    10700:
    /*!*************************************************************!*\
      !*** ./src/app/newappliance/newappliance-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewappliancePageRoutingModule": function NewappliancePageRoutingModule() {
          return (
            /* binding */
            _NewappliancePageRoutingModule
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


      var _newappliance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newappliance.page */
      64338);

      var routes = [{
        path: '',
        component: _newappliance_page__WEBPACK_IMPORTED_MODULE_0__.NewappliancePage
      }];

      var _NewappliancePageRoutingModule = /*#__PURE__*/_createClass(function NewappliancePageRoutingModule() {
        _classCallCheck(this, NewappliancePageRoutingModule);
      });

      _NewappliancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewappliancePageRoutingModule);
      /***/
    },

    /***/
    40835:
    /*!*****************************************************!*\
      !*** ./src/app/newappliance/newappliance.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewappliancePageModule": function NewappliancePageModule() {
          return (
            /* binding */
            _NewappliancePageModule
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


      var _newappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newappliance-routing.module */
      10700);
      /* harmony import */


      var _newappliance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newappliance.page */
      64338);

      var _NewappliancePageModule = /*#__PURE__*/_createClass(function NewappliancePageModule() {
        _classCallCheck(this, NewappliancePageModule);
      });

      _NewappliancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewappliancePageRoutingModule],
        declarations: [_newappliance_page__WEBPACK_IMPORTED_MODULE_1__.NewappliancePage]
      })], _NewappliancePageModule);
      /***/
    },

    /***/
    64338:
    /*!***************************************************!*\
      !*** ./src/app/newappliance/newappliance.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewappliancePage": function NewappliancePage() {
          return (
            /* binding */
            _NewappliancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newappliance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newappliance.page.html */
      70350);
      /* harmony import */


      var _newappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newappliance.page.scss */
      30155);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var angular_hashtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-hashtable */
      31405);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modalpopup/modal-example.component */
      91025);

      var _NewappliancePage = /*#__PURE__*/function () {
        function NewappliancePage(storage, router, route, apiGenerate, navCtrl, alertController, loadingCtrl, keyboard, httpClient, modalCtrl, platform) {
          var _this = this;

          _classCallCheck(this, NewappliancePage);

          this.storage = storage;
          this.router = router;
          this.route = route;
          this.apiGenerate = apiGenerate;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.loadingCtrl = loadingCtrl;
          this.keyboard = keyboard;
          this.httpClient = httpClient;
          this.modalCtrl = modalCtrl;
          this.platform = platform; //Flag 

          this.b1 = false;
          this.b2 = true;
          this.b3 = true;
          this.b4 = true;
          this.b5 = true;
          this.b6 = true;
          this.b7 = true;
          this.b8 = true;
          this.b9 = true;
          this.b10 = true;
          this.b11 = true;
          this.b12 = true;
          this.b13 = true;
          this.b14 = true;
          this.b15 = true;
          this.b16 = true;
          this.b17 = true;
          this.b18 = true;
          this.b19 = true;
          this.b20 = true;
          this.b21 = true;
          this.b22 = true;
          this.b23 = true;
          this.b24 = true;
          this.b25 = true;
          this.b26 = true;
          this.b27 = true;
          this.b28 = true;
          this.b29 = true;
          this.b30 = true;
          this.ApplianceTypeFlag = this.b1;
          this.MakeFlag = this.b2;
          this.MakeAnswerFlag = this.b3;
          this.ModelFlag = this.b4;
          this.ModelAnswerFlag = this.b5;
          this.BoilerTypeFlag = this.b6;
          this.LocationFlag = this.b7;
          this.FlueFlag = this.b8;
          this.OwnedFlag = this.b9;
          this.InspectedFlag = this.b10;
          this.GovenorFlag = this.b11;
          this.OperatingFlag = this.b12;
          this.GasRateFlag = this.b13;
          this.SafetyDeviceFlag = this.b14;
          this.VentilationSatisfactoryFlag = this.b15;
          this.VisualConditionFlag = this.b16;
          this.ContinuitySpillageFlag = this.b17;
          this.AnalyserReading1Flag = this.b18;
          this.HighInitalRatioFlag = this.b19;
          this.HighInitalCO2Flag = this.b20;
          this.HighInitalCOppmFlag = this.b21;
          this.LowFinalRatioFlag = this.b22;
          this.LowFinalCO2Flag = this.b23;
          this.LowFinalCOppmFlag = this.b24;
          this.SafeToUseFlag = this.b25;
          this.DefectIdentifiedFlag = this.b26;
          this.GIUSPFlag = this.b27;
          this.WarningNoticeFlag = this.b28;
          this.RemedialActionFlag = this.b29;
          this.SaveFlag = this.b30;
          this.ApplianceTypeSelect = '';
          this.MakeSelect = '';
          this.MakeAnswerSelect = '';
          this.ModelSelect = '';
          this.ModelAnswerSelect = '';
          this.BoilerTypeSelect = '';
          this.LocationSelect = '';
          this.FlueSelect = '';
          this.OwnedSelect = '';
          this.InspectedSelect = '';
          this.GovenorSelect = '';
          this.OperatingSelect = '';
          this.GasRateSelect = '';
          this.SafetyDeviceSelect = '';
          this.VentilationSatisfactorySelect = '';
          this.VisualConditionSelect = '';
          this.ContinuitySpillageSelect = '';
          this.AnalyserReading1Select = '';
          this.HighInitalRatioSelect = '';
          this.HighInitalCO2Select = '';
          this.HighInitalCOppmSelect = '';
          this.LowFinalRatioSelect = '';
          this.LowFinalCO2Select = '';
          this.LowFinalCOppmSelect = '';
          this.SafeToUseSelect = '';
          this.DefectIdentifiedSelect = '';
          this.GIUSPSelect = '';
          this.WarningNoticeSelect = '';
          this.RemedialActionSelect = '';
          this.SaveSelect = '';
          this.editmode = true;
          this.Appliance = [{
            name: 'Boiler'
          }, {
            name: 'Cooker'
          }, {
            name: 'Hob'
          }, {
            name: 'Fire'
          }, {
            name: 'Water Heater'
          }];
          this.OwnedSelectList = [];
          this.isLoading = false;
          this.governlist = [];
          this.url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';
          this.set = new Set();
          this.prg = new Set();
          this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_5__.HashTable();
          this.list = [];
          this.makeList = [];
          this.modelList = [];
          this.a = {
            'name': 'Danish',
            'job': 'developer',
            'age': '27',
            'qual': 'Grad'
          };
          this.clickcounter = 0;
          this.alertFlag = true;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.data = _this.router.getCurrentNavigation().extras.state.data;
              console.log('###params item: ', _this.data['JOBGUID']);

              _this.apiGenerate.database.executeSql('select * from newappliance where JOBGUID=?', [_this.data['JOBGUID']]).then(function (res) {
                console.log('### select success ' + JSON.stringify(res));
              })["catch"](function (e) {
                console.log('#### ERRRROR' + JSON.stringify(e));
              });
            }
          });
        }

        _createClass(NewappliancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.apiGenerate.database.executeSql('SELECT DISTINCT make FROM makemodel', []).then(function (res) {
              _this2.makeList = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this2.makeList.push(res.rows.item(i)['make']);
              }
            });

            if (this.data['AppName'] && this.data['id'] != undefined) {
              this.editmode = false;
              this.apiGenerate.database.executeSql('select * from newappliance where SerialNo=?', [this.data['id']]).then(function (res) {
                console.log(res.rows.item(0)['LRatio']);
                console.log(res.rows.item(0)['HCOPPM']);
                console.log(res.rows.item(0)['HCO2Val']);
                console.log(res.rows.item(0)['LCOPPM']);
                console.log(res.rows.item(0)['LCO2Val']);
                _this2.ApplianceTypeSelect = res.rows.item(0)['AppType']; //done

                _this2.MakeSelect = res.rows.item(0)['Make'];

                if (_this2.MakeSelect == "Other") {
                  _this2.MakeAnswerSelect = res.rows.item(0)['MakeAnswer'];
                }

                _this2.ModelSelect = res.rows.item(0)['Model']; //done

                if (_this2.MakeSelect == "Other") {
                  _this2.ModelAnswerSelect = res.rows.item(0)['ModelAnswer'];
                }

                _this2.BoilerTypeSelect = res.rows.item(0)['BType']; //done

                _this2.LocationSelect = res.rows.item(0)['Loc']; //done

                _this2.FlueSelect = res.rows.item(0)['Flue']; //done

                _this2.OwnedSelect = res.rows.item(0)['OwnedBy']; //done

                _this2.InspectedSelect = res.rows.item(0)['Inspected']; //done

                _this2.GovenorSelect = res.rows.item(0)['ZeroGov'];
                _this2.OperatingSelect = res.rows.item(0)['OPU']; //done

                _this2.GasRateSelect = res.rows.item(0)['OptPrs'];
                _this2.SafetyDeviceSelect = res.rows.item(0)['OSD'];
                _this2.VentilationSatisfactorySelect = res.rows.item(0)['VS']; //done

                _this2.VisualConditionSelect = res.rows.item(0)['VCF']; //done

                _this2.ContinuitySpillageSelect = res.rows.item(0)['FOC'];
                _this2.AnalyserReading1Select = res.rows.item(0)['ComRead'];
                _this2.HighInitalRatioSelect = res.rows.item(0)['HRatio'];
                _this2.HighInitalCO2Select = res.rows.item(0)['HCO2Val'];
                _this2.HighInitalCOppmSelect = res.rows.item(0)['HCOPPM'];
                _this2.LowFinalRatioSelect = res.rows.item(0)['LRatio'];
                _this2.LowFinalCO2Select = res.rows.item(0)['LCO2Val'];
                _this2.LowFinalCOppmSelect = res.rows.item(0)['LCOPPM'];
                _this2.SafeToUseSelect = res.rows.item(0)['STU'];
                _this2.DefectIdentifiedSelect = res.rows.item(0)['DefId'];
                _this2.GIUSPSelect = res.rows.item(0)['GUISP'];
                _this2.WarningNoticeSelect = res.rows.item(0)['WarAdRec'];
                _this2.RemedialActionSelect = res.rows.item(0)['RemAc']; //this.SaveSelect=res.rows.item(0)['HaveData'];
              })["catch"]();
            }

            if (this.data["ProductName"] == "BOILER SERVICE+GAS CERTIFICATE(GSI)" || this.data["ProductName"] == "GAS CERTIFICATE ") {
              this.OwnedSelectList = ["Landlord", "Tenant"];
              console.log("pname" + this.data["ProductName"]);
            } else {
              if (this.data['IsClaim'] == 'False') {
                console.log("pname" + this.data["ProductName"]);
                this.OwnedSelectList = ["Homeowner"];
              } else {
                this.OwnedSelectList = ["Landlord", "Tenant", "Homeowner"];
              }
            }
          }
        }, {
          key: "gotoBottom",
          value: function gotoBottom() {
            var _this3 = this;

            setTimeout(function () {
              _this3.content.scrollToBottom(1000);
            }, 100);
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this4 = this;

            /// this.data['JOBGUID']
            this.storage.get(this.data['JOBGUID']).then(function (res) {
              //console.log('get dats   '+JSON.stringify(res)+'  '+res['AnalyserReading1Select']);
              if (res['ApplianceTypeSelect'] == '' || res['ApplianceTypeSelect'] == null || res['ApplianceTypeSelect'] == undefined) {} else {
                _this4.ApplianceTypeFlag = false;
                _this4.ApplianceTypeSelect = res['ApplianceTypeSelect'];
              }

              if (res['MakeSelect'] == '' || res['MakeSelect'] == null || res['MakeSelect'] == undefined) {} else {
                _this4.MakeSelect = res['MakeSelect'];
                _this4.MakeFlag = false;
              }

              if (res['MakeAnswerSelect'] == '' || res['MakeAnswerSelect'] == null || res['MakeAnswerSelect'] == undefined) {} else {
                console.log('## Make answer select ' + res['MakeAnswerSelect']);
                _this4.MakeAnswerSelect = res['MakeAnswerSelect'];
                _this4.MakeAnswerFlag = false;
              }

              if (res['ModelSelect'] == '' || res['ModelSelect'] == null || res['ModelSelect'] == undefined) {} else {
                _this4.ModelSelect = res['ModelSelect'];
                _this4.ModelFlag = false;
              }

              if (res['ModelAnswerSelect'] == '' || res['ModelAnswerSelect'] == null || res['ModelAnswerSelect'] == undefined) {} else {
                console.log('## Model answer select ' + res['MakeAnswerSelect']);
                _this4.ModelAnswerSelect = res['ModelAnswerSelect'];
                _this4.ModelAnswerFlag = false;
              }

              if (res['BoilerTypeSelect'] == '' || res['BoilerTypeSelect'] == null || res['BoilerTypeSelect'] == undefined) {} else {
                _this4.BoilerTypeSelect = res['BoilerTypeSelect'];
                _this4.BoilerTypeFlag = false;
              }

              if (res['LocationSelect'] == '' || res['LocationSelect'] == null || res['LocationSelect'] == undefined) {} else {
                console.log('## Location select ' + res['LocationSelect']);
                _this4.LocationSelect = res['LocationSelect'];
                _this4.LocationFlag = false;
              }

              if (res['FlueSelect'] == '' || res['FlueSelect'] == null || res['FlueSelect'] == undefined) {} else {
                _this4.FlueSelect = res['FlueSelect'];
                _this4.FlueFlag = false;
              }

              if (res['OwnedSelect'] == '' || res['OwnedSelect'] == null || res['OwnedSelect'] == undefined) {} else {
                _this4.OwnedSelect = res['OwnedSelect'];
                _this4.OwnedFlag = false;
              }

              if (res['InspectedSelect'] == '' || res['InspectedSelect'] == null || res['InspectedSelect'] == undefined) {
                console.log('Outside Inspected ' + _this4.InspectedSelect + ' ' + res['InspectedSelect']);
              } else {
                _this4.InspectedSelect = res['InspectedSelect'];
                console.log('Inside Inspected ' + _this4.InspectedSelect); // this.InspectedFlag = false;
              }

              if (res['GovenorSelect'] == '' || res['GovenorSelect'] == null || res['GovenorSelect'] == undefined) {} else {
                _this4.GovenorSelect = res['GovenorSelect'];
                _this4.GovenorFlag = false;
              }

              if (res['OperatingSelect'] == '' || res['OperatingSelect'] == null || res['OperatingSelect'] == undefined) {} else {
                _this4.OperatingSelect = res['OperatingSelect'];
                _this4.OperatingFlag = false;
              }

              if (res['GasRateSelect'] == '' || res['GasRateSelect'] == null || res['GasRateSelect'] == undefined) {} else {
                _this4.GasRateSelect = res['GasRateSelect'];
                _this4.GasRateFlag = false;
              }

              if (res['SafetyDeviceSelect'] == '' || res['SafetyDeviceSelect'] == null || res['SafetyDeviceSelect'] == undefined) {} else {
                _this4.SafetyDeviceSelect = res['SafetyDeviceSelect'];
                _this4.SafetyDeviceFlag = false;
              }

              if (res['VentilationSatisfactorySelect'] == '' || res['VentilationSatisfactorySelect'] == null || res['VentilationSatisfactorySelect'] == undefined) {} else {
                _this4.VentilationSatisfactorySelect = res['VentilationSatisfactorySelect'];
                _this4.VentilationSatisfactoryFlag = false;
              }

              if (res['VisualConditionSelect'] == '' || res['VisualConditionSelect'] == null || res['VisualConditionSelect'] == undefined) {} else {
                _this4.VisualConditionSelect = res['VisualConditionSelect'];
                _this4.VisualConditionFlag = false;
              }

              if (res['ContinuitySpillageSelect'] == '' || res['ContinuitySpillageSelect'] == null || res['ContinuitySpillageSelect'] == undefined) {} else {
                _this4.ContinuitySpillageSelect = res['ContinuitySpillageSelect'];
                _this4.ContinuitySpillageFlag = false;
              }

              if (res['AnalyserReading1Select'] == '' || res['AnalyserReading1Select'] == null || res['AnalyserReading1Select'] == undefined) {} else {
                _this4.AnalyserReading1Select = res['AnalyserReading1Select'];
                _this4.AnalyserReading1Flag = false;
              }

              if (res['HighInitalRatioSelect'] == '' || res['HighInitalRatioSelect'] == null || res['HighInitalRatioSelect'] == undefined) {} else {
                _this4.HighInitalRatioSelect = res['HighInitalRatioSelect'];
                _this4.HighInitalRatioFlag = false;
              }

              if (res['HighInitalCO2Select'] == '' || res['HighInitalCO2Select'] == null || res['HighInitalCO2Select'] == undefined) {} else {
                _this4.HighInitalCO2Select = res['HighInitalCO2Select'];
                _this4.HighInitalCO2Flag = false;
              }

              if (res['HighInitalCOppmSelect'] == '' || res['HighInitalCOppmSelect'] == null || res['HighInitalCOppmSelect'] == undefined) {} else {
                _this4.HighInitalCOppmSelect = res['HighInitalCOppmSelect'];
                _this4.HighInitalCOppmFlag = false;
              }

              if (res['LowFinalRatioSelect'] == '' || res['LowFinalRatioSelect'] == null || res['LowFinalRatioSelect'] == undefined) {} else {
                _this4.LowFinalRatioSelect = res['LowFinalRatioSelect'];
                _this4.LowFinalRatioFlag = false;
              }

              if (res['LowFinalCO2Select'] == '' || res['LowFinalCO2Select'] == null || res['LowFinalCO2Select'] == undefined) {} else {
                _this4.LowFinalCO2Select = res['LowFinalCO2Select'];
                _this4.LowFinalCO2Flag = false;
              }

              if (res['LowFinalCOppmSelect'] == '' || res['LowFinalCOppmSelect'] == null || res['LowFinalCOppmSelect'] == undefined) {} else {
                _this4.LowFinalCOppmSelect = res['LowFinalCOppmSelect'];
                _this4.LowFinalCOppmFlag = false;
              }

              if (res['SafeToUseSelect'] == '' || res['SafeToUseSelect'] == null || res['SafeToUseSelect'] == undefined) {} else {
                _this4.SafeToUseSelect = res['SafeToUseSelect'];
                _this4.SafeToUseFlag = false;
              }

              if (res['DefectIdentifiedSelect'] == '' || res['DefectIdentifiedSelect'] == null || res['DefectIdentifiedSelect'] == undefined) {} else {
                _this4.DefectIdentifiedSelect = res['DefectIdentifiedSelect'];
                _this4.DefectIdentifiedFlag = false;
              }

              if (res['GIUSPSelect'] == '' || res['GIUSPSelect'] == null || res['GIUSPSelect'] == undefined) {} else {
                _this4.GIUSPSelect = res['GIUSPSelect'];
                _this4.GIUSPFlag = false;
              }

              if (res['WarningNoticeSelect'] == '' || res['WarningNoticeSelect'] == null || res['WarningNoticeSelect'] == undefined) {} else {
                _this4.WarningNoticeSelect = res['WarningNoticeSelect'];
                _this4.WarningNoticeFlag = false;
              }

              if (res['RemedialActionSelect'] == '' || res['RemedialActionSelect'] == null || res['RemedialActionSelect'] == undefined) {} else {
                _this4.RemedialActionSelect = res['RemedialActionSelect'];
                _this4.RemedialActionFlag = false;
              }
            }, function (err) {
              console.log('ERR get' + JSON.stringify(err));
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            console.log('ion view leave' + this.InspectedSelect);
            var AppliancesNewDetailsList = {
              ApplianceTypeSelect: this.ApplianceTypeSelect,
              MakeSelect: this.MakeSelect,
              MakeAnswerSelect: this.MakeAnswerSelect,
              ModelSelect: this.ModelSelect,
              ModelAnswerSelect: this.ModelAnswerSelect,
              BoilerTypeSelect: this.BoilerTypeSelect,
              LocationSelect: this.LocationSelect,
              FlueSelect: this.FlueSelect,
              OwnedSelect: this.OwnedSelect,
              InspectedSelect: this.InspectedSelect,
              GovenorSelect: this.GovenorSelect,
              OperatingSelect: this.OperatingSelect,
              GasRateSelect: this.GasRateSelect,
              safetydeviceSelect: this.SafetyDeviceSelect,
              VentilationSatisfactorySelect: this.VentilationSatisfactorySelect,
              VisualConditionSelect: this.VisualConditionSelect,
              ContinuitySpillageSelect: this.ContinuitySpillageSelect,
              AnalyserReading1Select: this.AnalyserReading1Select,
              HighInitalRatioSelect: this.HighInitalRatioSelect,
              HighInitalCO2Select: this.HighInitalCO2Select,
              HighInitalCOppmSelect: this.HighInitalCOppmSelect,
              LowFinalRatioSelect: this.LowFinalRatioSelect,
              LowFinalCO2Select: this.LowFinalCO2Select,
              LowFinalCOppmSelect: this.LowFinalCOppmSelect,
              SafeToUseSelect: this.SafeToUseSelect,
              DefectIdentifiedSelect: this.DefectIdentifiedSelect,
              GIUSPSelect: this.GIUSPSelect,
              WarningNoticeSelect: this.WarningNoticeSelect,
              RemedialActionSelect: this.RemedialActionSelect
            };
          }
        }, {
          key: "clearFilledDependency",
          value: function clearFilledDependency(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29) {
            this.MakeFlag = b1;
            this.MakeAnswerFlag = b2;
            this.ModelFlag = b3;
            this.ModelAnswerFlag = b4;
            this.BoilerTypeFlag = b5;
            this.LocationFlag = b6;
            this.FlueFlag = b7;
            this.OwnedFlag = b8;
            this.InspectedFlag = b9;
            this.GovenorFlag = b10;
            this.OperatingFlag = b11;
            this.GasRateFlag = b12;
            this.SafetyDeviceFlag = b13;
            this.VentilationSatisfactoryFlag = b14;
            this.VisualConditionFlag = b15;
            this.ContinuitySpillageFlag = b16;
            this.AnalyserReading1Flag = b17;
            this.HighInitalRatioFlag = b18;
            this.HighInitalCO2Flag = b19;
            this.HighInitalCOppmFlag = b20;
            this.LowFinalRatioFlag = b21;
            this.LowFinalCO2Flag = b22;
            this.LowFinalCOppmFlag = b23;
            this.SafeToUseFlag = b24;
            this.DefectIdentifiedFlag = b25;
            this.GIUSPFlag = b26;
            this.WarningNoticeFlag = b27;
            this.RemedialActionFlag = b28;
            this.SaveFlag = b29;
          }
        }, {
          key: "ApplianceTypeClick",
          value: function ApplianceTypeClick() {
            console.log('##### modelngggg ' + this.ApplianceTypeSelect);
            this.MakeFlag = false;

            if (this.ApplianceTypeSelect != 'Boiler') {
              this.BoilerTypeFlag = true;
            }

            if (this.ApplianceTypeSelect == 'Boiler') {
              this.Fluelist = ['Open Flued', 'Room Sealed'];
            } else {
              this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
            }
          }
        }, {
          key: "MakeChange",
          value: function MakeChange() {
            var _this5 = this;

            this.modelList = [];
            this.apiGenerate.database.executeSql('SELECT DISTINCT model FROM makemodel where make = ?', [this.MakeSelect]).then(function (res) {
              for (var i = 0; i < res.rows.length; i++) {
                _this5.modelList.push(res.rows.item(i)['model']);
              }
            });

            if (this.MakeSelect == 'other') {
              this.MakeAnswerFlag = false;
              this.ModelFlag = true;
            } else {
              // this.firstSelect(this.MakeSelect) //makeselect is name of selected brand
              this.MakeAnswerFlag = true;
              this.ModelAnswerFlag = true;
              this.ModelFlag = false; //this.modelList.length=0;

              this.list = this.apiGenerate.makeModelMap.get(this.MakeSelect);
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "AnswerMakeDone",
          value: function AnswerMakeDone() {
            this.MakeSelect = this.MakeAnswerSelect;
            this.ModelAnswerFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "ModelChange",
          value: function ModelChange() {
            if (this.ModelSelect == 'other') {
              this.ModelAnswerFlag = false;
            } else {
              if (this.ApplianceTypeSelect == 'Boiler') {
                this.ModelAnswerFlag = true;
                this.BoilerTypeFlag = false;
              } else {
                this.ModelAnswerFlag = true;
                this.LocationFlag = false;
              }
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "AnswerModelDone",
          value: function AnswerModelDone() {
            this.ModelSelect = this.ModelAnswerSelect;
            this.keyboard.hide();

            if (this.ApplianceTypeSelect == 'Boiler') {
              this.BoilerTypeFlag = false;
            } else {
              this.BoilerTypeFlag = true;
              this.LocationFlag = false;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "BoilerTypeClick",
          value: function BoilerTypeClick() {
            this.BoilerTypeFlag = false;
            this.LocationFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "LocationClick",
          value: function LocationClick() {
            this.FlueFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "FlueClick",
          value: function FlueClick() {
            this.OwnedFlag = false;
            this.gotoBottom();

            if (this.FlueSelect == 'Room Sealed') {
              this.governlist = ['Yes', 'No'];
            } else {
              this.governlist = ['Yes', 'No', 'N/A'];
            }

            if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Boiler') {
              this.continuitySpillagelist = ['Pass', 'Fail'];
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Fire') {
              this.continuitySpillagelist = ['Pass', 'Fail'];
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Water Heater') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Hob') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Cooker') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            } else {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            }
          }
        }, {
          key: "OwnedClick",
          value: function OwnedClick() {
            this.InspectedFlag = false;
            this.gotoBottom();
          }
        }, {
          key: "InspectedClick",
          value: function InspectedClick() {
            var _this6 = this;

            this.clickcounter = this.clickcounter + 1;

            if (this.InspectedSelect == 'WorkedOn') {
              this.GovenorFlag = false;
              this.VentilationSatisfactoryFlag = true;
            } else {
              this.GovenorFlag = true;
              this.VentilationSatisfactoryFlag = false;
            }

            if (this.clickcounter > 1) {
              this.GovenorSelect = undefined;
              this.OperatingSelect = undefined;
              this.GasRateSelect = undefined;
              this.SafetyDeviceSelect = undefined;
              this.VisualConditionSelect = undefined;
              this.VentilationSatisfactorySelect = undefined;
              this.ContinuitySpillageSelect = undefined;
              this.AnalyserReading1Select = undefined;
              this.HighInitalRatioSelect = "N/A";
              this.HighInitalCO2Select = "N/A";
              this.HighInitalCOppmSelect = "N/A";
              this.LowFinalRatioSelect = "N/A";
              this.LowFinalCO2Select = "N/A";
              this.LowFinalCOppmSelect = "N/A";
              this.SafeToUseSelect = undefined;
              this.DefectIdentifiedSelect = undefined;
              this.GIUSPSelect = undefined;
              this.WarningNoticeSelect = undefined;
              this.RemedialActionSelect = undefined;
              setTimeout(function () {
                _this6.OperatingFlag = true;
                _this6.GasRateFlag = true;
                _this6.SafetyDeviceFlag = true;
                _this6.VisualConditionFlag = true;
                _this6.ContinuitySpillageFlag = true;
                _this6.AnalyserReading1Flag = true;
                _this6.HighInitalRatioFlag = true;
                _this6.HighInitalCO2Flag = true;
                _this6.HighInitalCOppmFlag = true;
                _this6.LowFinalRatioFlag = true;
                _this6.LowFinalCO2Flag = true;
                _this6.LowFinalCOppmFlag = true;
                _this6.SafeToUseFlag = true;
                _this6.DefectIdentifiedFlag = true;
                _this6.GIUSPFlag = true;
                _this6.WarningNoticeFlag = true;
                _this6.RemedialActionFlag = true;
                _this6.SaveFlag = true;
              }, 300);
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "GovenorClick",
          value: function GovenorClick() {
            if (this.InspectedSelect == 'Visual') {
              this.VentilationSatisfactoryFlag = false;
            } else {
              this.OperatingFlag = false;
            }

            if (this.GovenorSelect == 'Yes') {
              this.operatinglist = ['KWH'];
            } else {
              this.operatinglist = ['KWH', 'MBAR'];
            } // }


            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "OperatingClick",
          value: function OperatingClick() {
            this.GasRateFlag = false; // }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "gasRateClick",
          value: function gasRateClick() {
            if (this.OperatingSelect == 'KWH') {
              if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                this.presentkwh();
                this.SafetyDeviceFlag = true;
              } else {
                this.SafetyDeviceFlag = false;
              }
            } else {
              if (Number.parseInt(this.GasRateSelect) > 17 || Number.parseInt(this.GasRateSelect) < 0) {
                this.presentMbar('0', '17');
                this.SafetyDeviceFlag = true;
              } else {
                this.SafetyDeviceFlag = false;
              }
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "presentMbar",
          value: function presentMbar(low, high) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.alertFlag == true)) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Mbar should be between' + low + ' & ' + high,
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentkwh",
          value: function presentkwh() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.alertFlag == true)) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Kw/h should be between 0 & 70',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "safetydeviceClick",
          value: function safetydeviceClick() {
            this.VentilationSatisfactoryFlag = false;
            this.gotoBottom(); // will scroll to bottom 
          }
        }, {
          key: "VentilationSatisfactoryClick",
          value: function VentilationSatisfactoryClick() {
            this.VisualConditionFlag = false;
            this.gotoBottom(); // will scroll to bottom 

            if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
              this.analyserlist = ['Pass', 'Fail'];
            } else {
              this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
            }
          }
        }, {
          key: "VisualConditionClick",
          value: function VisualConditionClick() {
            if (this.FlueSelect == 'Open Flued') {
              this.ContinuitySpillageFlag = false;
            } else {
              if (this.InspectedSelect == 'Visual') {
                this.AnalyserReading1Flag = true;
                this.SafeToUseFlag = false;
              } else {
                this.AnalyserReading1Flag = false;
              }
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "continuitySpillageClick",
          value: function continuitySpillageClick() {
            this.gotoBottom(); // will scroll to bottom

            if (this.InspectedSelect == 'Visual') {
              this.AnalyserReading1Flag = true;
              this.SafeToUseFlag = false;
            } else {
              this.AnalyserReading1Flag = false;
            }
          }
        }, {
          key: "analyserReadingClick",
          value: function analyserReadingClick() {
            if (this.InspectedSelect == 'WorkedOn' && this.AnalyserReading1Select != 'Stripdown') {
              this.HighInitalRatioFlag = false;
            } else {
              this.SafeToUseFlag = false;
              this.HighInitalRatioFlag = true;
              this.HighInitalCO2Flag = true;
              this.HighInitalCOppmFlag = true;
              this.LowFinalRatioFlag = true;
              this.LowFinalCO2Flag = true;
              this.LowFinalCOppmFlag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "HighInitalRatioClick",
          value: function HighInitalRatioClick() {
            var decRegex = /^(0)+(.[0-9]{1,4})?$/; ///^(0)+0\.[0-9]{3}$/ ;

            console.log(decRegex.test(this.HighInitalRatioSelect));
            console.log(this.HighInitalRatioSelect);

            if (decRegex.test(this.HighInitalRatioSelect)) {
              this.HighInitalCO2Flag = false;
              this.gotoBottom(); // will scroll to bottom
            } else {
              this.presentValidationHighInitalRatioClick();
              this.HighInitalCO2Flag = true;
              this.gotoBottom(); // will scroll to bottom
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "presentValidationHighInitalRatioClick",
          value: function presentValidationHighInitalRatioClick() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.alertFlag == true)) {
                        _context3.next = 6;
                        break;
                      }

                      _context3.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be in range from 0.0000 to 0.9999 and must be fixed to four decimal points ',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context3.sent;
                      _context3.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "HighInitalCO2Click",
          value: function HighInitalCO2Click() {
            var decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;

            if (decRegex.test(this.HighInitalCO2Select)) {
              this.HighInitalCOppmFlag = false;
            } else {
              this.presentValidationHighInitalCO2Click();
              this.HighInitalCOppmFlag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "presentValidationHighInitalCO2Click",
          value: function presentValidationHighInitalCO2Click() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.alertFlag == true)) {
                        _context4.next = 6;
                        break;
                      }

                      _context4.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be of format 0 to 100 with one decimal point',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "HighInitalCOppmClick",
          value: function HighInitalCOppmClick() {
            // let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
            var decRegex = /^[0-9]*$/;

            if (decRegex.test(this.HighInitalCOppmSelect)) {
              this.LowFinalRatioFlag = false;
            } else {
              this.presentValidationCOppm();
              this.LowFinalRatioFlag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "LowFinalRatioClick",
          value: function LowFinalRatioClick() {
            var decRegex = /^(0)+(.[0-9]{1,4})?$/;

            if (decRegex.test(this.LowFinalRatioSelect)) {
              this.LowFinalCO2Flag = false;
            } else {
              this.presentValidationHighInitalRatioClick();
              this.LowFinalCO2Flag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "LowFinalCO2Click",
          value: function LowFinalCO2Click() {
            //let decRegex = /^[0](\.\d{4})$/;
            var decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;

            if (decRegex.test(this.LowFinalCO2Select)) {
              this.LowFinalCOppmFlag = false;
            } else {
              this.presentValidationHighInitalCO2Click();
              this.LowFinalCOppmFlag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "LowFinalCOppmClick",
          value: function LowFinalCOppmClick() {
            var decRegex = /^[0-9]*$/;

            if (decRegex.test(this.LowFinalCOppmSelect)) {
              this.SafeToUseFlag = false;
            } else {
              this.presentValidationCOppm();
              this.SafeToUseFlag = true;
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "presentValidationCOppm",
          value: function presentValidationCOppm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(this.alertFlag == true)) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be a whole number.',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context5.sent;
                      _context5.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "SafeToUseClick",
          value: function SafeToUseClick() {
            this.DefectIdentifiedFlag = false;

            if (this.SafeToUseSelect == 'Yes') {
              this.giusplist = ['Advisory', 'Not Applicable'];
            } else {
              this.giusplist = ['At Risk', 'Immediately Dangerous'];
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "DefectIdentifiedAns",
          value: function DefectIdentifiedAns() {
            this.GIUSPFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "GIUSPClick",
          value: function GIUSPClick() {
            // this.save = false;
            if (this.GIUSPSelect == 'Advisory') {
              this.RemedialActionFlag = false;
              this.WarningNoticeFlag = true;
              this.advicelist = ['Advised Customer', 'NA'];
            } else if (this.GIUSPSelect == 'Not Applicable') {
              this.RemedialActionFlag = false;
              this.WarningNoticeFlag = true;
              this.advicelist = ['Advised Customer', 'NA'];
            } else if (this.GIUSPSelect == 'At Risk') {
              this.WarningNoticeFlag = false;
              this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Pass to ESP (customer refused to cap off)'];
            } else if (this.GIUSPSelect == 'Immediately Dangerous') {
              this.WarningNoticeFlag = false;
              this.advicelist = ['Capped off', 'Pass to ESP (customer refused to cap off)'];
            }

            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "WarningNoticeAns",
          value: function WarningNoticeAns() {
            this.RemedialActionFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "RemedialActionTakenClick",
          value: function RemedialActionTakenClick() {
            this.SaveFlag = false;
            this.gotoBottom(); // will scroll to bottom
          }
        }, {
          key: "present",
          value: function present() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.isLoading = true;
                      _context6.next = 3;
                      return this.loadingCtrl.create({
                        backdropDismiss: true
                      }).then(function (a) {
                        a.present().then(function () {});
                      });

                    case 3:
                      return _context6.abrupt("return", _context6.sent);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.isLoading = false;
                      this.loadingCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // EditApplianceNew(){
          //   this.apiGenerate.database.executeSql('update newappliance set AppType=?  , Make=?  , MakeAnswer=? , Model=?  , ModelAnswer=? , BType=?  , Loc=?  , Flue=?  , OwnedBy=?  , Inspected=?  , ZeroGov=?  , OPU=?  , OptPrs=?  , OSD=?  , VS=?  , VCF=?  , FOC=?  , ComRead=?  , HRatio=?  , HCO2Val=?  , HCOPPM=?  , LRatio=?  , LCO2Val=?  , LCOPPM=?  , STU=?  , DefId=? , GIUSP=?  , WarAdRec=? , RemAc=? where SerialNo = ?',
          //   [this.ApplianceTypeSelect,this.MakeSelect,this.MakeAnswerSelect,this.ModelSelect,this.ModelAnswerSelect,this.BoilerTypeSelect,this.LocationSelect,this.FlueSelect,this.OwnedSelect,this.InspectedSelect,this.GovenorSelect,this.OperatingSelect,this.GasRateSelect,this.SafetyDeviceSelect,this.VentilationSatisfactorySelect,
          //                                                  this.VisualConditionSelect,this.ContinuitySpillageSelect,this.AnalyserReading1Select,this.HighInitalRatioSelect,this.HighInitalCO2Select,this.HighInitalCOppmSelect,this.LowFinalRatioSelect,this.LowFinalCO2Select,this.LowFinalCOppmSelect,this.SafeToUseSelect,this.DefectIdentifiedSelect,this.GIUSPSelect,this.WarningNoticeSelect,this.RemedialActionSelect,this.data['id']]).then(succ=>{
          //    this.router.navigate(['details']);
          //    this.apiGenerate.showToast('Success! Appliance has been updated successfully','success');
          //   });
          // }

        }, {
          key: "InsertApplianceNew",
          value: function InsertApplianceNew() {
            var _this7 = this;

            this.alertFlag = false;

            if (this.HighInitalCO2Flag == true || this.AnalyserReading1Select == "Stripdown" || this.InspectedSelect == "Visual") {
              this.HighInitalRatioSelect = 'N/A';
              this.HighInitalCO2Select = 'N/A';
              this.HighInitalCOppmSelect = 'N/A';
              this.LowFinalRatioSelect = 'N/A';
              this.LowFinalCO2Select = 'N/A';
              this.LowFinalCOppmSelect = 'N/A';
            }

            if (this.WarningNoticeFlag == true) {
              this.WarningNoticeSelect = 'N/A';
            }

            if (this.RemedialActionFlag == true) {
              this.RemedialActionSelect = 'N/A';
            }

            if (this.AnalyserReading1Flag == true) {
              this.AnalyserReading1Select = 'N/A';
            }

            if (this.ContinuitySpillageFlag == true) {
              this.ContinuitySpillageSelect = 'N/A';
            }

            if (this.OperatingFlag == true) {
              this.OperatingSelect = 'N/A';
            }

            if (this.GasRateFlag == true) {
              this.GasRateSelect = 'N/A';
            }

            if (this.GovenorFlag == true) {
              this.GovenorSelect = 'N/A';
            }

            if (this.BoilerTypeFlag == true) {
              this.BoilerTypeSelect = 'N/A';
            }

            if (this.LocationFlag == true) {
              this.LocationSelect = 'N/A';
            }

            if (this.SafetyDeviceFlag == true) {
              this.SafetyDeviceSelect = 'N/A';
            }

            if (this.VentilationSatisfactoryFlag == true) {
              this.VentilationSatisfactorySelect = 'N/A';
            }

            if (this.VisualConditionFlag == true) {
              this.VisualConditionSelect = 'N/A';
            }

            if (this.SafeToUseFlag == true) {
              this.SafeToUseSelect = 'N/A';
            }

            if (this.DefectIdentifiedFlag == true) {
              this.DefectIdentifiedSelect = 'N/A';
            }

            if (this.GIUSPFlag == true) {
              this.GIUSPSelect = 'N/A';
            }

            var AppliancesNewDetailsList = {
              ApplianceTypeSelect: this.ApplianceTypeSelect,
              Make: this.MakeSelect,
              MakeAnswer: this.MakeAnswerSelect,
              Model: this.ModelSelect,
              ModelAnswer: this.ModelAnswerSelect,
              BoilerTypeSelect: this.BoilerTypeSelect,
              Location: this.LocationSelect,
              FlueSelect: this.FlueSelect,
              OwnedSelect: this.OwnedSelect,
              InspectedSelect: this.InspectedSelect,
              GovenorSelect: this.GovenorSelect,
              OperatingSelect: this.OperatingSelect,
              GasRate: this.GasRateSelect,
              safetydeviceSelect: this.SafetyDeviceSelect,
              VentilationSatisfactorySelect: this.VentilationSatisfactorySelect,
              VisualConditionSelect: this.VisualConditionSelect,
              ContinuitySpillageSelect: this.ContinuitySpillageSelect,
              AnalyserReading1Select: this.AnalyserReading1Select,
              HighInitalRatioAns: this.HighInitalRatioSelect,
              HighInitalCO2Ans: this.HighInitalCO2Select,
              HighInitalCOppmAns: this.HighInitalCOppmSelect,
              LowFinalRatioAns: this.LowFinalRatioSelect,
              LowFinalCO2Ans: this.LowFinalCO2Select,
              LowFinalCOppmAns: this.LowFinalCOppmSelect,
              SafeToUseSelect: this.SafeToUseSelect,
              DefectIdentifiedAnswer: this.DefectIdentifiedSelect,
              GIUSPSelect: this.GIUSPSelect,
              WarningNoticeReferenceAnswer: this.WarningNoticeSelect,
              RemedialActionSelect: this.RemedialActionSelect,
              havedata: "yes"
            };

            if (AppliancesNewDetailsList.Make == 'other') {
              AppliancesNewDetailsList.Make = AppliancesNewDetailsList.MakeAnswer;
              AppliancesNewDetailsList.Model = AppliancesNewDetailsList.ModelAnswer;
            } //this.storage.set(this.data['JOBGUID'],AppliancesNewDetailsList);


            console.log(AppliancesNewDetailsList);
            this.apiGenerate.database.executeSql('insert into newappliance  (HaveData,AppType,Make,MakeAnswer,Model,ModelAnswer,BType,Loc,Flue,OwnedBy,Inspected,ZeroGov,OPU,OptPrs,OSD,VS,VCF,FOC,ComRead,HRatio,HCO2Val,HCOPPM,LRatio,LCO2Val,LCOPPM,STU, DefId,GIUSP,WarAdRec,RemAc,IsDelete,JOBGUID )  values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [AppliancesNewDetailsList.havedata, AppliancesNewDetailsList.ApplianceTypeSelect, AppliancesNewDetailsList.Make, AppliancesNewDetailsList.MakeAnswer, AppliancesNewDetailsList.Model, AppliancesNewDetailsList.ModelAnswer, AppliancesNewDetailsList.BoilerTypeSelect, AppliancesNewDetailsList.Location, AppliancesNewDetailsList.FlueSelect, AppliancesNewDetailsList.OwnedSelect, AppliancesNewDetailsList.InspectedSelect, AppliancesNewDetailsList.GovenorSelect, AppliancesNewDetailsList.OperatingSelect, AppliancesNewDetailsList.GasRate, AppliancesNewDetailsList.safetydeviceSelect, AppliancesNewDetailsList.VentilationSatisfactorySelect, AppliancesNewDetailsList.VisualConditionSelect, AppliancesNewDetailsList.ContinuitySpillageSelect, AppliancesNewDetailsList.AnalyserReading1Select, AppliancesNewDetailsList.HighInitalRatioAns, AppliancesNewDetailsList.HighInitalCO2Ans, AppliancesNewDetailsList.HighInitalCOppmAns, AppliancesNewDetailsList.LowFinalRatioAns, AppliancesNewDetailsList.LowFinalCO2Ans, AppliancesNewDetailsList.LowFinalCOppmAns, AppliancesNewDetailsList.SafeToUseSelect, AppliancesNewDetailsList.DefectIdentifiedAnswer, AppliancesNewDetailsList.GIUSPSelect, AppliancesNewDetailsList.WarningNoticeReferenceAnswer, AppliancesNewDetailsList.RemedialActionSelect, '', this.data['JOBGUID']]).then(function (res) {
              console.log('Insert newappliance success' + JSON.stringify(res));

              _this7.apiGenerate.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ", ['newappliance', _this7.data['JOBGUID']]).then(function (res) {
                console.log('#### new appliance success ' + JSON.stringify(res));

                _this7.router.navigate(['createcertificate']);

                _this7.storage.set(_this7.data['JOBGUID'], {
                  '': ''
                }); // clean local 

              })["catch"](function (e) {});
            })["catch"](function (e) {
              _this7.apiGenerate.showToast('Error Save Appliance in device' + JSON.stringify(e), 'danger');
            });
          } // makeModel() {
          //   this.httpClient.get<Make[]>(this.url1 + 'Service_GetMakeModel').subscribe(res => {
          //     for (var i = 0; i < res.length; i++) {
          //       this.key = res[i]['Make'];
          //       this.prg.add(this.key);
          //       if (this.prg.has(res[i]['Make'])) {
          //         if (!this.set.has(res[i]['Make'])) {
          //           this.list.push(res[i]['Model']);
          //         } else {
          //         }
          //       } else {
          //         this.set.add(res[i - 1]['Make']);
          //       }
          //       this.has.putArray(this.key, this.list);
          //       this.list = [];
          //     }
          //     this.makeList = Array.from(this.prg);
          //     console.log('size ' + this.has.getArray(res[1]['Make']).length +
          //       " array =>" + this.has.getArray(res[2]['Make']));
          //   });
          // }
          // firstSelect(make:any) {
          //   console.log('ion change' +make );
          //   this.list = this.apiGenerate.has.getArray(make);
          // }

        }, {
          key: "openMakeModal",
          value: function openMakeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var modal, _yield$modal$onWillDi, data, role;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.modalCtrl.create({
                        component: _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__.ModalExampleComponent,
                        componentProps: {
                          data: this.makeList,
                          msg: "Make"
                        }
                      });

                    case 2:
                      modal = _context8.sent;
                      modal.present();
                      _context8.next = 6;
                      return modal.onWillDismiss();

                    case 6:
                      _yield$modal$onWillDi = _context8.sent;
                      data = _yield$modal$onWillDi.data;
                      role = _yield$modal$onWillDi.role;

                      if (role === 'confirm') {
                        this.MakeSelect = data;
                        console.log("make name is " + this.MakeSelect);
                        this.MakeChange();
                      }

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "openModalModal",
          value: function openModalModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var modal, _yield$modal$onWillDi2, data, role;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.modalCtrl.create({
                        component: _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__.ModalExampleComponent,
                        componentProps: {
                          data: this.modelList,
                          msg: "Model"
                        }
                      });

                    case 2:
                      modal = _context9.sent;
                      modal.present();
                      _context9.next = 6;
                      return modal.onWillDismiss();

                    case 6:
                      _yield$modal$onWillDi2 = _context9.sent;
                      data = _yield$modal$onWillDi2.data;
                      role = _yield$modal$onWillDi2.role;

                      if (role === 'confirm') {
                        this.ModelSelect = data;
                        console.log("model name is " + this.MakeSelect);
                        this.ModelChange();
                      }

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return NewappliancePage;
      }();

      _NewappliancePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }];
      };

      _NewappliancePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, {
            "static": true
          }]
        }],
        myContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent
          }]
        }],
        targetx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: ['theTarget']
        }],
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll]
        }]
      };
      _NewappliancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-newappliance',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newappliance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _NewappliancePage);
      /***/
    },

    /***/
    70350:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/newappliance/newappliance.page.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <ion-item [hidden]=\"ApplianceTypeFlag\">\n    <ion-label>Appliance Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ApplianceTypeSelect\" (ionChange)=\"ApplianceTypeClick()\">\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Appliance\">{{item.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"MakeFlag\" (click)=\"openMakeModal()\">\n    <ion-label>Make</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\">{{MakeSelect}}</ion-text>\n  </ion-item>\n\n  \n  <ion-item [hidden]=\"MakeAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"MakeAnswerSelect\" placeholder=\"Enter the Manufacturer Name\"\n      (keyup.enter)=\"AnswerMakeDone()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelFlag\" (click)=\"openModalModal()\">\n    <ion-label>Model</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\">{{ModelSelect}}</ion-text>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"ModelAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"ModelAnswerSelect\" placeholder=\"Enter the Model Name\"\n      (keyup.enter)=\"AnswerModelDone()\"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"BoilerTypeFlag\">\n    <ion-label>Boiler Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"BoilerTypeSelect\" (ionChange)=\"BoilerTypeClick()\">\n      <ion-select-option value=\"HeatOnly\">Heat Only</ion-select-option>\n      <ion-select-option value=\"System\">System</ion-select-option>\n      <ion-select-option value=\"Combi\">Combi</ion-select-option>\n      <ion-select-option value=\"BackBoiler\">Back Boiler</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"LocationFlag\">\n    <ion-label>Location</ion-label>\n    <ion-select\n     [(ngModel)]=\"LocationSelect\" (ionChange)=\"LocationClick()\">\n      <ion-select-option value=\"AiringCupboard/Compartment\">Airing Cupboard/Compartment</ion-select-option>\n      <ion-select-option value=\"Bathroom\">Bathroom</ion-select-option>\n      <ion-select-option value=\"Bedroom\">Bedroom</ion-select-option>\n      <ion-select-option value=\"Conservatory\">Conservatory</ion-select-option>\n      <ion-select-option value=\"DiningRoom\">Dining Room</ion-select-option>\n      <ion-select-option value=\"Garage\">Garage</ion-select-option>\n      <ion-select-option value=\"Hall\">Hall</ion-select-option>\n      <ion-select-option value=\"Kitchen\">Kitchen</ion-select-option>\n      <ion-select-option value=\"Landing\">Landing</ion-select-option>\n      <ion-select-option value=\"LivingRoom\">Living Room</ion-select-option>\n      <ion-select-option value=\"Loft\">Loft</ion-select-option>\n      <ion-select-option value=\"Lounge\">Lounge</ion-select-option>\n      <ion-select-option value=\"Utility\">Utility</ion-select-option>\n      <ion-select-option value=\"Cellar\">Cellar</ion-select-option>\n      <ion-select-option value=\"WC\">WC</ion-select-option>\n    </ion-select> \n  </ion-item>\n\n  <ion-item [hidden]=\"FlueFlag\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueSelect\" (ionChange)=\"FlueClick()\">\n      <div *ngFor='let flue of Fluelist'>\n        <ion-select-option value={{flue}}>{{flue}}</ion-select-option>\n      </div>\n      \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"Flueless\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueLessSelect\" (ionChange)=\"FlueLessClick()\">\n      <ion-select-option value=\"OpenFlued\">Open Flued</ion-select-option>\n      <ion-select-option value=\"RoomSealed\">Room Sealed</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item [hidden]=\"OwnedFlag\">\n    <ion-label>Owned by</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OwnedSelect\" (ionChange)=\"OwnedClick()\">\n      <ion-select-option *ngFor=\"let list of OwnedSelectList\">{{list}}</ion-select-option>\n      <!-- <ion-select-option value=\"Landlord\">Landlord</ion-select-option>\n      <ion-select-option value=\"Tenant\">Tenant</ion-select-option>\n      <ion-select-option value=\"Homeowner\">Homeowner</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"InspectedFlag\">\n    <ion-label>Inspected</ion-label>\n\n    <!-- <select name=\"Inspected\" id=\"Inspected\" [(ngModel)]=\"InspectedSelect\">\n      <option value=\"WorkedOn\">Worked On</option>\n      <option value=\"Visual\">Visual</option>\n    </select> -->\n\n    <ion-select interface=\"popover\" [(ngModel)]=\"InspectedSelect\" (ionChange)=\"InspectedClick()\">\n      <ion-select-option value={{InspectedSelect}} selected  disabled > {{InspectedSelect}} </ion-select-option>\n      <ion-select-option value=\"WorkedOn\">Worked On</ion-select-option>\n      <ion-select-option value=\"Visual\">Visual</ion-select-option>\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item [hidden]=\"GovenorFlag\">\n    <ion-label>Zero Govenor</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GovenorSelect\" (ionChange)=\"GovenorClick()\">\n      <ion-select-option value={{GovenorSelect}} selected  disabled > {{GovenorSelect}} </ion-select-option>\n      <div *ngFor='let govrn of governlist'> \n      <ion-select-option value={{govrn}}>{{govrn}}</ion-select-option>\n      </div>     \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"OperatingFlag\">\n    <!-- <ion-label>Operating pressure units</ion-label>Operating pressure/ Gas Rate -->\n    <ion-label>Operating pressure/ Gas Rate</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OperatingSelect\" (ionChange)=\"OperatingClick()\">\n      <div *ngFor='let operating of operatinglist'>     \n         <ion-select-option value={{operating}}>{{operating}}</ion-select-option>\n      </div>\n\n    </ion-select>\n  </ion-item>\n\n \n\n  <ion-item [hidden]=\"GasRateFlag\">\n    <ion-label>Gas Rate/Burner pressure</ion-label>\n    <ion-input placeholder=\"tap here to enter answer\" type=\"number\" [(ngModel)]=\"GasRateSelect\"\n      (ionChange)=\"gasRateClick()\"></ion-input>\n  </ion-item>\n\n  \n\n  <ion-item [hidden]=\"SafetyDeviceFlag\">\n    <ion-label>Operation of safety device(s)</ion-label>\n\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafetyDeviceSelect\" (ionChange)=\"safetydeviceClick()\">\n      <ion-select-option value={{SafetyDeviceSelect}} selected  disabled > {{SafetyDeviceSelect}} </ion-select-option>\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VentilationSatisfactoryFlag\">\n    <ion-label>Ventilation satisfactory</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VentilationSatisfactorySelect\"\n      (ionChange)=\"VentilationSatisfactoryClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"VisualConditionFlag\">\n    <ion-label>Visual condition of flue and termination</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VisualConditionSelect\" (ionChange)=\"VisualConditionClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ContinuitySpillageFlag\">\n    <ion-label>Flue flow continuity + Spillage</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ContinuitySpillageSelect\" (ionChange)=\"continuitySpillageClick()\">\n      <ion-select-option value={{continuitySpillageSelect}} selected  disabled > {{continuitySpillageSelect}} </ion-select-option>\n     <div *ngFor='let continuityspillage of continuitySpillagelist'>\n      <ion-select-option value={{continuityspillage}}>{{continuityspillage}}</ion-select-option>\n     </div>              \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"AnalyserReading1Flag\">\n    <ion-label>Combustion analyser reading</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"AnalyserReading1Select\" (ionChange)=\"analyserReadingClick()\">\n      <ion-select-option value={{AnalyserReading1Select}} selected  disabled > {{AnalyserReading1Select}} </ion-select-option>\n      <div *ngFor='let  analyser of analyserlist'> \n        <ion-select-option value={{analyser}}>{{analyser}}</ion-select-option>    \n      </div>   \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalRatioFlag\">\n    <ion-label position=\"floating\">High / Inital Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.0000 to 0.9999\" type=\"number\" [(ngModel)]=\"HighInitalRatioSelect\"\n      (ionChange)=\"HighInitalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCO2Flag\">\n    <ion-label position=\"floating\">High/ Inital CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCO2Select\"\n      (ionChange)=\"HighInitalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCOppmFlag\">\n    <ion-label position=\"floating\">High/ Inital CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCOppmSelect\"\n      (ionChange)=\"HighInitalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalRatioFlag\">\n    <ion-label position=\"floating\">Low/ Final Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.0000 to 0.9999\" type=\"number\" [(ngModel)]=\"LowFinalRatioSelect\"\n      (ionChange)=\"LowFinalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCO2Flag\">\n    <ion-label position=\"floating\">Low/ Final CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCO2Select\"\n      (ionChange)=\"LowFinalCO2Click()\"></ion-input>\n  </ion-item>\n  \n\n  <ion-item [hidden]=\"LowFinalCOppmFlag\">\n    <ion-label position=\"floating\">Low/ Final CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCOppmSelect\"\n      (ionChange)=\"LowFinalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"SafeToUseFlag\">\n    <ion-label>Safe To Use</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafeToUseSelect\" (ionChange)=\"SafeToUseClick()\">\n      <ion-select-option value=\"Yes\">Yes</ion-select-option>\n      <ion-select-option value=\"No\">No</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"DefectIdentifiedFlag\">\n    <ion-label position=\"floating\">Defect(s) identified</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"DefectIdentifiedSelect\" placeholder=\"Write here the answer\"\n      (ionChange)=\"DefectIdentifiedAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"GIUSPFlag\">\n    <ion-label>GIUSP  </ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GIUSPSelect\" (ionChange)=\"GIUSPClick()\">\n      <div *ngFor='let giusp of giusplist'>\n        <ion-select-option value={{giusp}}> {{giusp}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n \n\n  \n\n  <ion-item [hidden]=\"WarningNoticeFlag\">\n    <ion-label position=\"floating\">Warning Notice Reference No</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"WarningNoticeSelect\" placeholder=\"Write here the answer\"\n      (ionChange)=\"WarningNoticeAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"RemedialActionFlag\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n     <div *ngFor='let advise of advicelist'>\n      <ion-select-option value={{advise}}>{{advise}}</ion-select-option>\n     </div> \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"RemedialAction2\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value=\"Turnedoffwithpermission\">Turned off with permission, documeted and labled\n      </ion-select-option>\n      <ion-select-option value=\"Customerrefusedpermission\">Customer refused permission</ion-select-option>\n      <ion-select-option value=\"Cappedoff\">Capped off</ion-select-option>\n      <ion-select-option value=\"PasstoESP\">Pass to ESP (customer refused to cap off)</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div style=\"margin-top: 5%;\">\n    \n  </div>\n\n  <!-- <div style=\"margin-top: 5%;\">\n    <ion-button [hidden]=\"editmode\" color=\"secondary\" expand=\"full\" (click)=\"EditApplianceNew()\">UPDATE</ion-button>\n  </div> -->\n  \n</ion-content>\n\n<ion-footer>\n  <ion-button [disabled]=\"SaveFlag\" color=\"secondary\" expand=\"full\" (click)=\"InsertApplianceNew()\">SAVE</ion-button>\n  <!-- <ion-button [hidden]=\"true\" color=\"secondary\" expand=\"block\" (click)=\"getData()\">GET</ion-button> -->\n</ion-footer>\n<!-- <form [formGroup]=\"AddApplianceForm\" (ngSubmit)=\"gotologinformsubmit()\"> </form>  -->";
      /***/
    },

    /***/
    30155:
    /*!*****************************************************!*\
      !*** ./src/app/newappliance/newappliance.page.scss ***!
      \*****************************************************/

    /***/
    function _(module) {
      module.exports = "ion-content {\n  padding-bottom: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2FwcGxpYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoibmV3YXBwbGlhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newappliance_newappliance_module_ts-es5.js.map