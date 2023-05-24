(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_editappliance_editappliance_module_ts"], {
    /***/
    15364:
    /*!***************************************************************!*\
      !*** ./src/app/editappliance/editappliance-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditappliancePageRoutingModule": function EditappliancePageRoutingModule() {
          return (
            /* binding */
            _EditappliancePageRoutingModule
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


      var _editappliance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editappliance.page */
      42650);

      var routes = [{
        path: '',
        component: _editappliance_page__WEBPACK_IMPORTED_MODULE_0__.EditappliancePage
      }];

      var _EditappliancePageRoutingModule = /*#__PURE__*/_createClass(function EditappliancePageRoutingModule() {
        _classCallCheck(this, EditappliancePageRoutingModule);
      });

      _EditappliancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditappliancePageRoutingModule);
      /***/
    },

    /***/
    28917:
    /*!*******************************************************!*\
      !*** ./src/app/editappliance/editappliance.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditappliancePageModule": function EditappliancePageModule() {
          return (
            /* binding */
            _EditappliancePageModule
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


      var _editappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editappliance-routing.module */
      15364);
      /* harmony import */


      var _editappliance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editappliance.page */
      42650);

      var _EditappliancePageModule = /*#__PURE__*/_createClass(function EditappliancePageModule() {
        _classCallCheck(this, EditappliancePageModule);
      });

      _EditappliancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditappliancePageRoutingModule],
        declarations: [_editappliance_page__WEBPACK_IMPORTED_MODULE_1__.EditappliancePage]
      })], _EditappliancePageModule);
      /***/
    },

    /***/
    42650:
    /*!*****************************************************!*\
      !*** ./src/app/editappliance/editappliance.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditappliancePage": function EditappliancePage() {
          return (
            /* binding */
            _EditappliancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editappliance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editappliance.page.html */
      82137);
      /* harmony import */


      var _editappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editappliance.page.scss */
      50213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var angular_hashtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-hashtable */
      31405);

      var _EditappliancePage = /*#__PURE__*/function () {
        function EditappliancePage(router, route, navCtrl, alertController, loadingCtrl, keyboard, httpClient, auth) {
          _classCallCheck(this, EditappliancePage);

          this.router = router;
          this.route = route;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.loadingCtrl = loadingCtrl;
          this.keyboard = keyboard;
          this.httpClient = httpClient;
          this.auth = auth; //   data:any[];
          //     ApplianceTypeSelect:string= '';
          //     ngMake:'';
          //     MakeAnswer: '';
          //     Model: '';
          //     ModelAnswer:'';
          //     BoilerTypeSelect: '';
          //     Location: '';
          //     FlueSelect: '';
          //     OwnedSelect: '';
          //     InspectedSelect: '';
          //     GovenorSelect: '';
          //     OperatingSelect: '';
          //     GasRate: '';
          //     safetydeviceSelect: '';
          //     VentilationSatisfactorySelect: '';
          //     VisualConditionSelect: '';
          //     continuitySpillageSelect: '';
          //     analyserReadingSelect:'';
          //     HighInitalRatioAns: '';
          //     HighInitalCO2Ans:'';
          //     HighInitalCOppmAns: '';
          //     LowFinalRatioAns:'';
          //     LowFinalCO2Ans: '';
          //     LowFinalCOppmAns: '';
          //     SafeToUseSelect: '';
          //     DefectIdentifiedAnswer: '';
          //     GIUSPSelect:'';
          //     WarningNoticeReferenceAnswer: '';
          //     RemedialActionSelect: '';
          //     /// new 
          //     ID: any;
          //   id: any;
          //   AppliancedetailsList: any;
          //   ApplianceType = false;
          //   makeFlag = false;
          //   makeOther = false;
          //   makeanswer = false;
          //   modelFlag = false;
          //   modelanswer = false;
          //   BoilerType = false;
          //   location = false;
          //   Flue = false;
          //   Flueless = false;
          //   Owned = false;
          //   Ownedby = false;
          //   Inspected = false;
          //   GovenorNA = false;
          //   Operating = false;;
          //   safetydevice = false;
          //   VentilationSatisfactory = false;
          //   VisualCondition = false;
          //   continuitySpillage = false;
          //   analyserReading1 = false;
          //   analyserReading2 = false;
          //   analyserReading3 = false;
          //   HighInitalRatio = false;
          //   HighInitalCO2 = false;
          //   HighInitalCOppm = false;
          //   LowFinalRatio = false;
          //   LowFinalCO2 = false;
          //   LowFinalCOppm = false;
          //   SafeToUse = false;
          //   DefectIdentified = false;
          //   GIUSP = false;
          //   WarningNotice = false;
          //   RemedialAction = false;
          //   save = false;
          //   AddApplianceForm: any;
          //   Appliance = [
          //     { name: 'Boiler' },
          //     { name: 'Cooker' },
          //     { name: 'Hob' },
          //     { name: 'Fire' },
          //     { name: 'Water Heater' },
          //   ];
          //   company = {
          //     form:null
          //  }; 
          //   // Appliance = [
          //   //    'Boiler' ,
          //   //     'Cooker' ,
          //   //     'Hob' ,
          //   //     'Fire' ,
          //   //     'Water Heater' 
          //   // ];
          //   MakeModel: any;
          //   MakeModelValue: any;
          //   isLoading = false;
          //   applianceList: any;
          //   Fluelist:any[];
          //   governlist:any[]= ['Yes','No'];
          //   operatinglist:any[];
          //   continuitySpillagelist:any[];
          //   analyserlist:any[];
          //   giusplist:any[];
          //   advicelist:any[];
          //   private makes: String;
          //   private models: String[];
          //   url1 = 'https://ws-v3.ventureprise.cloud/service1.asmx/';
          //   set = new Set();
          //   prg = new Set();
          //   has = new HashTable<String, String[]>();
          //   key: string;
          //   list: Array<String> = [];
          //   makeList: Array<any> = [];
          //   response: Array<Make>;
          //   ApplianceValue:any;
          //   sew:string='';
          //////// new
          // Flags

          this.ApplianceTypeFlag = false;
          this.MakeFlag = true;
          this.MakeAnswerFlag = true;
          this.ModelFlag = true;
          this.ModelAnswerFlag = true;
          this.BoilerTypeFlag = true;
          this.LocationFlag = true;
          this.FlueFlag = true;
          this.OwnedFlag = true;
          this.InspectedFlag = true;
          this.GovenorFlag = true;
          this.OperatingFlag = true;
          this.GasRateFlag = true;
          this.SafetyDeviceFlag = true;
          this.VentilationSatisfactoryFlag = true;
          this.VisualConditionFlag = true;
          this.ContinuitySpillageFlag = true;
          this.AnalyserReading1Flag = true;
          this.HighInitalRatioFlag = true;
          this.HighInitalCO2Flag = true;
          this.HighInitalCOppmFlag = true;
          this.LowFinalRatioFlag = true;
          this.LowFinalCO2Flag = true;
          this.LowFinalCOppmFlag = true;
          this.SafeToUseFlag = true;
          this.DefectIdentifiedFlag = true;
          this.GIUSPFlag = true;
          this.WarningNoticeFlag = true;
          this.RemedialActionFlag = true;
          this.SaveFlag = true; // Selects

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
          this.isLoading = false;
          this.governlist = ['Yes', 'No'];
          this.url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';
          this.set = new Set();
          this.prg = new Set();
          this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_4__.HashTable();
          this.list = [];
          this.makeList = [];
        }

        _createClass(EditappliancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
                console.log('## data createcertificate ' + _this.data['JOBGUID']);

                _this.auth.getLocation();

                _this.auth.database.executeSql('select * from newappliance where JOBGUID=?', [_this.data['JOBGUID']]).then(function (res) {
                  for (var i = 0; i < res.rows.length; i++) {
                    console.log('### NEW APP ' + ' ' + JSON.stringify(res.rows.item(i)));

                    if (res.rows.item(i)['Make'] == _this.data['AppName'] || res.rows.item(i)['MakeAnswer'] == _this.data['AppName']) {
                      _this.ApplianceTypeSelect = res.rows.item(i)['AppType'];
                      _this.MakeSelect = res.rows.item(i)['Make'];
                      _this.MakeAnswerSelect = res.rows.item(i)['MakeAnswer'];
                      _this.ModelSelect = res.rows.item(i)['Model'];
                      _this.ModelAnswerSelect = res.rows.item(i)['ModelAnswer'];
                      _this.BoilerTypeSelect = res.rows.item(i)['BType'];
                      _this.LocationSelect = res.rows.item(i)['Loc'];
                      _this.FlueSelect = res.rows.item(i)['Flue'];
                      _this.OwnedSelect = res.rows.item(i)['OwnedBy'];
                      _this.InspectedSelect = res.rows.item(i)['Inspected'];
                      _this.GovenorSelect = res.rows.item(i)['ZeroGov'];
                      _this.OperatingSelect = res.rows.item(i)['OPU'];
                      _this.GasRateSelect = res.rows.item(i)['OptPrs'];
                      _this.SafetyDeviceSelect = res.rows.item(i)['OSD'];
                      _this.VentilationSatisfactorySelect = res.rows.item(i)['VS'];
                      _this.VisualConditionSelect = res.rows.item(i)['VCF'];
                      _this.ContinuitySpillageSelect = res.rows.item(i)['FOC'];
                      _this.AnalyserReading1Select = res.rows.item(i)['ComRead'];
                      _this.HighInitalRatioSelect = res.rows.item(i)['HRatio'];
                      _this.HighInitalCO2Select = res.rows.item(i)['HCO2Val'];
                      _this.HighInitalCOppmSelect = res.rows.item(i)['HCOPPM'];
                      _this.LowFinalRatioSelect = res.rows.item(i)['LRatio'];
                      _this.LowFinalCO2Select = res.rows.item(i)['LCO2Val'];
                      _this.LowFinalCOppmSelect = res.rows.item(i)['LCOPPM'];
                      _this.SafeToUseSelect = res.rows.item(i)['STU'];
                      _this.DefectIdentifiedSelect = res.rows.item(i)['DefId'];
                      _this.GIUSPSelect = res.rows.item(i)['GIUSP'];
                      _this.WarningNoticeSelect = res.rows.item(i)['WarAdRec'];
                      _this.RemedialActionSelect = res.rows.item(i)['RemAc'];
                      console.log('sabr ' + _this.ApplianceTypeSelect + ' ' + _this.GasRateSelect + ' ' + res.rows.item(i)['OSD']);
                      _this.ApplianceTypeFlag = false;
                      _this.MakeFlag = false;
                      _this.MakeAnswerFlag = false;
                      _this.ModelFlag = false;
                      _this.ModelAnswerFlag = false;
                      _this.BoilerTypeFlag = false;
                      _this.LocationFlag = false;
                      _this.FlueFlag = false;
                      _this.OwnedFlag = false;
                      _this.InspectedFlag = false;
                      _this.GovenorFlag = false;
                      _this.OperatingFlag = false;
                      _this.GasRateFlag = false;
                      _this.SafetyDeviceFlag = false;
                      _this.VentilationSatisfactoryFlag = false;
                      _this.VisualConditionFlag = false;
                      _this.ContinuitySpillageFlag = false;
                      _this.AnalyserReading1Flag = false;
                      _this.HighInitalRatioFlag = false;
                      _this.HighInitalCO2Flag = false;
                      _this.HighInitalCOppmFlag = false;
                      _this.LowFinalRatioFlag = false;
                      _this.LowFinalCO2Flag = false;
                      _this.LowFinalCOppmFlag = false;
                      _this.SafeToUseFlag = false;
                      _this.DefectIdentifiedFlag = false;
                      _this.GIUSPFlag = false;
                      _this.WarningNoticeFlag = false;
                      _this.RemedialActionFlag = false;
                      _this.SaveFlag = false;
                    }
                  }
                })["catch"](function (e) {
                  console.log('sabr error ' + JSON.stringify(e));
                });
              }
            });
          }
        }, {
          key: "ApplianceTypeClick",
          value: function ApplianceTypeClick(appliancetype) {
            console.log('##### modelngggg ' + this.ApplianceTypeSelect);
            this.MakeFlag = false; // this.firstSelect(this.ngMake);
            // this.makeList = ['hp', 'samsung', 'asus', 'dell'];
            //this.list =['model 1', 'model 2', 'model 3'];
          }
        }, {
          key: "MakeChange",
          value: function MakeChange($event) {
            if (this.MakeSelect == 'other') {
              console.log('#### if');
              this.MakeAnswerFlag = false;
              this.ModelFlag = true;
            } else {
              console.log('#### else' + this.list.length);
              this.firstSelect(this.MakeSelect);
              this.MakeAnswerFlag = true;
              this.ModelFlag = false;
            } //this.ModelSelect = ''; same blunder

          }
        }, {
          key: "AnswerMakeDone",
          value: function AnswerMakeDone() {
            console.log('MAKE  DONE');
            this.ModelAnswerFlag = false;
          }
        }, {
          key: "ModelChange",
          value: function ModelChange() {
            if (this.ModelSelect === 'other') {
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
          }
        }, {
          key: "AnswerModelDone",
          value: function AnswerModelDone() {
            this.keyboard.hide();
            this.BoilerTypeFlag = false;
          }
        }, {
          key: "BoilerTypeClick",
          value: function BoilerTypeClick() {
            this.LocationFlag = false;
          }
        }, {
          key: "LocationClick",
          value: function LocationClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              this.Fluelist = ['Open Flued', 'Room Sealed'];
              this.FlueFlag = false;
            } else {
              this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
              this.FlueFlag = false;
            }
          }
        }, {
          key: "FlueClick",
          value: function FlueClick() {
            this.OwnedFlag = false;
          }
        }, {
          key: "OwnedClick",
          value: function OwnedClick() {
            this.InspectedFlag = false;
          }
        }, {
          key: "InspectedClick",
          value: function InspectedClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              if (this.FlueSelect == 'Room Sealed') {
                this.GovenorFlag = false;
                this.OperatingFlag = true;
              } else {
                this.GovenorFlag = true;
                this.OperatingFlag = false;
                this.operatinglist = ['KWH', 'MBAR'];
              }
            } else {
              // non boiler
              this.GovenorFlag = true;
              this.OperatingFlag = false;

              if (this.ApplianceTypeSelect == 'Boiler') {
                this.OperatingFlag = false;

                if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
                  this.operatinglist = ['KWH'];
                  console.log('IF');
                } else {
                  console.log('ELSE');
                  this.operatinglist = ['KWH', 'MBAR'];
                }
              } else {/// non boiler situation doesnot exist
                // non boiler
                // if(this.InspectedSelect=='WorkedOn'){
                // this.operatinglist=['KWH','mBar'];
                // }else{
                //   this.Operating = true;
                //   this.GasRate =false;
                // }
              }
            }
          }
        }, {
          key: "GovenorClick",
          value: function GovenorClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              this.OperatingFlag = false;

              if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
                this.operatinglist = ['KWH'];
                console.log('IF');
              } else {
                console.log('ELSE');
                this.operatinglist = ['KWH', 'MBAR'];
              }
            } else {/// non boiler situation doesnot exist
              // non boiler
              // if(this.InspectedSelect=='WorkedOn'){
              // this.operatinglist=['KWH','mBar'];
              // }else{
              //   this.Operating = true;
              //   this.GasRate =false;
              // }
            }
          }
        }, {
          key: "OperatingClick",
          value: function OperatingClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              if (this.InspectedSelect == 'WorkedOn') {
                this.GasRateFlag = false;
                this.SafetyDeviceFlag = true;
              } else {
                this.GasRateFlag = true;
                this.SafetyDeviceFlag = false;
              }
            } else {
              // same situation for both worked on and non woerked on senario
              // non boiler
              if (this.InspectedSelect == 'WorkedOn') {
                this.GasRateFlag = false;
                this.SafetyDeviceFlag = true;
              } else {
                this.GasRateFlag = true;
                this.SafetyDeviceFlag = false;
              }
            }
          }
        }, {
          key: "gasRateClick",
          value: function gasRateClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'KWH') {
                // KWH
                if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                  this.presentkwh();
                } else {
                  this.SafetyDeviceFlag = false;
                }
              } else if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'MBAR') {
                //mBAR
                if (Number.parseInt(this.GasRateSelect) > 17 || Number.parseInt(this.GasRateSelect) < 0) {
                  this.presentMbar('0', '17');
                } else {
                  this.SafetyDeviceFlag = false;
                }
              } else {}
            } else {
              // for non boiler
              if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'KWH') {
                // KWH
                if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                  this.presentkwh();
                } else {
                  this.SafetyDeviceFlag = false;
                }
              } else if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'MBAR') {
                //mBAR
                if (Number.parseInt(this.GasRateSelect) > 25 || Number.parseInt(this.GasRateSelect) < 0) {
                  this.presentMbar('0', '25');
                } else {
                  this.SafetyDeviceFlag = false;
                }
              }
            }
          }
        }, {
          key: "presentMbar",
          value: function presentMbar(low, high) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Mbar should be between' + low + ' & ' + high,
                        backdropDismiss: false,
                        buttons: ['OK']
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
          key: "presentkwh",
          value: function presentkwh() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Kw/h should be between 0 & 70',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
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
          }
        }, {
          key: "VentilationSatisfactoryClick",
          value: function VentilationSatisfactoryClick() {
            // same condition for both boiler and non boiler
            if (this.FlueSelect == 'Open Flued' || this.FlueSelect == 'Room Sealed') {
              this.VisualConditionFlag = false;
            } else {
              this.VisualConditionFlag = true;
            }
          }
        }, {
          key: "VisualConditionClick",
          value: function VisualConditionClick() {
            if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Boiler') {
              this.continuitySpillagelist = ['Pass', 'Fail'];
              this.ContinuitySpillageFlag = false;
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Fire') {
              this.continuitySpillagelist = ['Pass', 'Fail'];
              this.ContinuitySpillageFlag = false;
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Water Heater') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
              this.ContinuitySpillageFlag = false;
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Hob') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
              this.ContinuitySpillageFlag = false;
            } else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Cooker') {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
              this.ContinuitySpillageFlag = false;
            } else {
              this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
              this.ContinuitySpillageFlag = false;
            }
          }
        }, {
          key: "continuitySpillageClick",
          value: function continuitySpillageClick() {
            if (this.ApplianceTypeSelect == 'Boiler' && this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
              this.analyserlist = ['Pass', 'Fail'];
              console.log('yes');
            } else if (this.ApplianceTypeSelect == 'Boiler' && this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'No') {
              this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
              console.log('No');
            } else {
              this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
              console.log('ELSE');
            }

            this.AnalyserReading1Flag = false;
          }
        }, {
          key: "analyserReadingClick",
          value: function analyserReadingClick() {
            if (this.ApplianceTypeSelect == 'Boiler') {
              this.HighInitalRatioFlag = false;
            } else {
              this.HighInitalRatioFlag = false;
            }
          }
        }, {
          key: "HighInitalRatioClick",
          value: function HighInitalRatioClick() {
            var decRegex = /^[0](\.\d{4})$/;
            console.log(+' ' + this.HighInitalRatioSelect);

            if (decRegex.test(this.HighInitalRatioSelect)) {
              this.HighInitalCO2Flag = false;
            } else {
              this.presentValidationHighInitalRatioClick();
            }
          }
        }, {
          key: "presentValidationHighInitalRatioClick",
          value: function presentValidationHighInitalRatioClick() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be of format 0.0001',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
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
            var decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

            if (decRegex.test(this.HighInitalCO2Select)) {
              this.HighInitalCOppmFlag = false;
            } else {
              this.presentValidationHighInitalCO2Click();
            }
          }
        }, {
          key: "presentValidationHighInitalCO2Click",
          value: function presentValidationHighInitalCO2Click() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be of format 100',
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
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
            //let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
            var decRegex = /^[0-9]*$/;

            if (decRegex.test(this.HighInitalCOppmSelect)) {
              this.LowFinalRatioFlag = false;
            } else {
              this.presentValidationHighInitalCO2Click();
            }
          }
        }, {
          key: "LowFinalRatioClick",
          value: function LowFinalRatioClick() {
            var decRegex = /^[0](\.\d{4})$/;

            if (decRegex.test(this.LowFinalRatioSelect)) {
              this.LowFinalCO2Flag = false;
            } else {
              this.presentValidationHighInitalRatioClick();
            }
          }
        }, {
          key: "LowFinalCO2Click",
          value: function LowFinalCO2Click() {
            //let decRegex = /^[0](\.\d{4})$/;
            var decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

            if (decRegex.test(this.LowFinalCO2Select)) {
              this.LowFinalCOppmFlag = false;
            } else {
              this.presentValidationHighInitalRatioClick();
            }
          }
        }, {
          key: "LowFinalCOppmClick",
          value: function LowFinalCOppmClick() {
            var decRegex = /^[0-9]*$/;

            if (decRegex.test(this.LowFinalCOppmSelect)) {
              this.SafeToUseFlag = false;
            } else {
              this.presentValidationHighInitalCO2Click();
            }
          }
        }, {
          key: "SafeToUseClick",
          value: function SafeToUseClick() {
            this.DefectIdentifiedFlag = false;
          }
        }, {
          key: "DefectIdentifiedAns",
          value: function DefectIdentifiedAns() {
            this.GIUSPFlag = false;

            if (this.DefectIdentifiedSelect == 'Yes') {
              this.giusplist = ['Advisory', 'Not Applicable'];
            } else {
              this.giusplist = ['At Risk', 'Immediately Dangerous'];
            }
          }
        }, {
          key: "GIUSPClick",
          value: function GIUSPClick() {
            // this.save = false;
            if (this.GIUSPSelect == 'Advisory') {
              this.RemedialActionFlag = false;
              this.advicelist = ['Advised Customer', 'NA'];
            } else if (this.GIUSPSelect == 'Not Applicable') {
              this.RemedialActionFlag = false;
              this.advicelist = ['Advised Customer', 'NA'];
            } else if (this.GIUSPSelect == 'At Risk') {
              this.WarningNoticeFlag = false;
              this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Capped off', 'Pass to ESP (customer refused to cap off)'];
            } else if (this.GIUSPSelect == 'Immediately Dangerous') {
              this.WarningNoticeFlag = false;
              this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Capped off', 'Pass to ESP (customer refused to cap off)'];
            }
          }
        }, {
          key: "WarningNoticeAns",
          value: function WarningNoticeAns() {
            this.RemedialActionFlag = false;
          }
        }, {
          key: "RemedialActionTakenClick",
          value: function RemedialActionTakenClick() {
            this.SaveFlag = false;
          }
        }, {
          key: "present",
          value: function present() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.isLoading = true;
                      _context5.next = 3;
                      return this.loadingCtrl.create({
                        backdropDismiss: true
                      }).then(function (a) {
                        a.present().then(function () {});
                      });

                    case 3:
                      return _context5.abrupt("return", _context5.sent);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.isLoading = false;
                      this.loadingCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "InsertApplianceNew",
          value: function InsertApplianceNew() {
            var _this2 = this;

            var AppliancesNewDetailsList = {
              ApplianceTypeSelect: this.ApplianceTypeSelect,
              Make: this.makes,
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
              continuitySpillageSelect: this.ContinuitySpillageSelect,
              analyserReadingSelect: this.AnalyserReading1Select,
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
              RemedialActionSelect: this.RemedialActionSelect
            };
            console.log(AppliancesNewDetailsList);
            this.auth.database.executeSql('update  newappliance set  AppType  =?, Make  =?, MakeAnswer =?, Model  =?, ModelAnswer =?, BType  =?, Loc  =?, Flue  =?, OwnedBy  =?, Inspected  =?, ZeroGov  =?, OPU  =?, OptPrs  =?, OSD  =?, VS  =?, VCF  =?, FOC  =?, ComRead  =?, HRatio  =?, HCO2Val  =?, HCOPPM  =?, LRatio  =?, LCO2Val  =?, LCOPPM  =?, STU  =?, DefId =?, GIUSP  =?, WarAdRec =?, RemAc =?, IsDelete =?,  GIUS=? where JOBGUID=? ', [AppliancesNewDetailsList.ApplianceTypeSelect, AppliancesNewDetailsList.Make, AppliancesNewDetailsList.MakeAnswer, AppliancesNewDetailsList.Model, AppliancesNewDetailsList.ModelAnswer, AppliancesNewDetailsList.BoilerTypeSelect, AppliancesNewDetailsList.Location, AppliancesNewDetailsList.FlueSelect, AppliancesNewDetailsList.OwnedSelect, AppliancesNewDetailsList.InspectedSelect, AppliancesNewDetailsList.GovenorSelect, AppliancesNewDetailsList.OperatingSelect, AppliancesNewDetailsList.GasRate, AppliancesNewDetailsList.OperatingSelect, AppliancesNewDetailsList.VentilationSatisfactorySelect, AppliancesNewDetailsList.VisualConditionSelect, AppliancesNewDetailsList.continuitySpillageSelect, AppliancesNewDetailsList.analyserReadingSelect, AppliancesNewDetailsList.HighInitalRatioAns, AppliancesNewDetailsList.HighInitalCO2Ans, AppliancesNewDetailsList.HighInitalCOppmAns, AppliancesNewDetailsList.LowFinalRatioAns, AppliancesNewDetailsList.LowFinalCO2Ans, AppliancesNewDetailsList.LowFinalCOppmAns, AppliancesNewDetailsList.SafeToUseSelect, AppliancesNewDetailsList.DefectIdentifiedAnswer, AppliancesNewDetailsList.GIUSPSelect, AppliancesNewDetailsList.WarningNoticeReferenceAnswer, AppliancesNewDetailsList.RemedialActionSelect, '', '', this.data['JOBGUID']]).then(function (res) {
              _this2.auth.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ", ['newappliance', _this2.data['JOBGUID']]).then(function (res) {
                console.log('#### new appliance success ' + JSON.stringify(res));

                _this2.router.navigate(['details']);

                _this2.auth.showToast('Success! Appliance has been saved.', 'success');
              })["catch"](function (e) {});
            })["catch"](function (e) {
              _this2.auth.showToast('Error Save Appliance in device' + JSON.stringify(e), 'danger');
            });
          }
        }, {
          key: "makeModel",
          value: function makeModel() {
            var _this3 = this;

            this.httpClient.get(this.url1 + 'Service_GetMakeModel').subscribe(function (res) {
              for (var i = 0; i < res.length; i++) {
                _this3.key = res[i]['Make'];

                _this3.prg.add(_this3.key);

                if (_this3.prg.has(res[i]['Make'])) {
                  if (!_this3.set.has(res[i]['Make'])) {
                    _this3.list.push(res[i]['Model']);
                  } else {}
                } else {
                  _this3.set.add(res[i - 1]['Make']);
                }

                _this3.has.putArray(_this3.key, _this3.list);

                _this3.list = [];
              }

              _this3.makeList = Array.from(_this3.prg);
              console.log('size ' + _this3.has.getArray(res[1]['Make']).length + " array =>" + _this3.has.getArray(res[2]['Make']));
            });
          }
        }, {
          key: "firstSelect",
          value: function firstSelect(make) {
            console.log('ion change' + make);
            this.list = this.auth.has.getArray(make);
          }
        }]);

        return EditappliancePage;
      }();

      _EditappliancePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _EditappliancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-editappliance',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editappliance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _EditappliancePage);
      /***/
    },

    /***/
    82137:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/editappliance/editappliance.page.html ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title > Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item [hidden]=\"ApplianceTypeFlag\">\n    <ion-label>Appliance Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ApplianceTypeSelect\" (ionChange)=\"ApplianceTypeClick()\">\n      <ion-select-option value={{ApplianceTypeSelect}} selected  disabled > {{ApplianceTypeSelect}} </ion-select-option>\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Appliance\">{{item.name}}</ion-select-option>\n    </ion-select>\n  </ion-item> \n\n  <ion-item [hidden]=\"MakeFlag\">\n    <ion-label>Make</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"MakeSelect\" (ionChange)=\"MakeChange($event)\">\n      <ion-select-option value={{MakeSelect}} selected  disabled > {{MakeSelect}} </ion-select-option>\n\n      <ion-select-option *ngFor=\"let user of makeList\">{{user}}</ion-select-option>\n      <ion-select-option value=\"other\">Other</ion-select-option>  \n    </ion-select>\n  </ion-item>\n  \n  <ion-item [hidden]=\"MakeAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"MakeAnswerSelect\" placeholder=\"Enter the Manufacturer Name\"\n      (keyup.enter)=\"AnswerMakeDone()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelFlag\">\n    <ion-label>Model</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ModelSelect\" (ionChange)=\"ModelChange()\">\n      <ion-select-option value={{ModelSelect}} selected  disabled > {{ModelSelect}} </ion-select-option>\n      <ion-select-option *ngFor=\"let user of list\">{{user}}</ion-select-option>\n      <ion-select-option value=\"other\">Other</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"ModelAnswerSelect\" placeholder=\"Enter the Model Name\"\n      (keyup.enter)=\"AnswerModelDone()\"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"BoilerTypeFlag\">\n    <ion-label>Boiler Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"BoilerTypeSelect\" (ionChange)=\"BoilerTypeClick()\">\n      <ion-select-option value=\"HeatOnly\">Heat Only</ion-select-option>\n      <ion-select-option value=\"System\">System</ion-select-option>\n      <ion-select-option value=\"Combi\">Combi</ion-select-option>\n      <ion-select-option value=\"BackBoiler\">Back Boiler</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"LocationFlag\">\n    <ion-label>Location</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"LocationSelect\" (ionChange)=\"LocationClick()\">\n      <ion-select-option value=\"AiringCupboard/Compartment\">Airing Cupboard/Compartment</ion-select-option>\n      <ion-select-option value=\"Bathroom\">Bathroom</ion-select-option>\n      <ion-select-option value=\"Bedroom\">Bedroom</ion-select-option>\n      <ion-select-option value=\"Conservatory\">Conservatory</ion-select-option>\n      <ion-select-option value=\"DiningRoom\">Dining Room</ion-select-option>\n      <ion-select-option value=\"Garage\">Garage</ion-select-option>\n      <ion-select-option value=\"Hall\">Hall</ion-select-option>\n      <ion-select-option value=\"Kitchen\">Kitchen</ion-select-option>\n      <ion-select-option value=\"Landing\">Landing</ion-select-option>\n      <ion-select-option value=\"LivingRoom\">Living Room</ion-select-option>\n      <ion-select-option value=\"Loft\">Loft</ion-select-option>\n      <ion-select-option value=\"Lounge\">Lounge</ion-select-option>\n      <ion-select-option value=\"Utility\">Utility</ion-select-option>\n      <ion-select-option value=\"WC\">WC</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"FlueFlag\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueSelect\" (ionChange)=\"FlueClick()\">\n      <ion-select-option value={{FlueSelect}} selected  disabled > {{FlueSelect}} </ion-select-option>\n\n      <div *ngFor='let flue of Fluelist'>\n        <ion-select-option value={{flue}}>{{flue}}</ion-select-option>\n      </div>\n      \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"Flueless\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueLessSelect\" (ionChange)=\"FlueLessClick()\">\n      <ion-select-option value=\"OpenFlued\">Open Flued</ion-select-option>\n      <ion-select-option value=\"RoomSealed\">Room Sealed</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item [hidden]=\"OwnedFlag\">\n    <ion-label>Owned by</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OwnedSelect\" (ionChange)=\"OwnedClick()\">\n      <ion-select-option value=\"Landlord\">Landlord</ion-select-option>\n      <ion-select-option value=\"Tenant\">Tenant</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"InspectedFlag\">\n    <ion-label>Inspected</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"InspectedSelect\" (ionChange)=\"InspectedClick()\">\n      <ion-select-option value=\"WorkedOn\">Worked On</ion-select-option>\n      <ion-select-option value=\"Visual\">Visual</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"GovenorNAFlag\">\n    <ion-label>Zero Govenor</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GovenorSelect\" (ionChange)=\"GovenorClick()\">\n      <ion-select-option value={{GovenorSelect}} selected  disabled > {{GovenorSelect}} </ion-select-option>\n      \n      <div *ngFor='let govrn of governlist'> \n      <ion-select-option value={{govrn}}>{{govrn}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"OperatingFlag\">\n    <ion-label>Operating pressure units</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OperatingSelect\" (ionChange)=\"OperatingClick()\">\n      <ion-select-option value={{OperatingSelect}} selected  disabled > {{OperatingSelect}} </ion-select-option>\n\n      <div *ngFor='let operating of operatinglist'>     \n         <ion-select-option value={{operating}}>{{operating}}</ion-select-option>\n      </div>\n\n    </ion-select>\n  </ion-item>\n\n \n\n  <ion-item [hidden]=\"GasRateFlag\">\n    <ion-label>Gas Rate/Burner pressure</ion-label>\n    <ion-input placeholder=\"tap here to enter answer\" type=\"number\" [(ngModel)]=\"GasRateSelect\"\n      (keyup.enter)=\"gasRateClick()\"></ion-input>\n  </ion-item>\n\n  \n\n  <ion-item [hidden]=\"SafetyDeviceFlag\">\n    <ion-label>Operation of safety device(s)</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafetyDeviceSelect\" (ionChange)=\"safetydeviceClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VentilationSatisfactoryFlag\">\n    <ion-label>Ventilation satisfactory</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VentilationSatisfactorySelect\"\n      (ionChange)=\"VentilationSatisfactoryClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VisualConditionFlag\">\n    <ion-label>Visual condition of flue and termination</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VisualConditionSelect\" (ionChange)=\"VisualConditionClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ContinuitySpillageFlag\">\n    <ion-label>Flue flow continuity + Spillage</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ContinuitySpillageSelect\" (ionChange)=\"continuitySpillageClick()\">\n      <ion-select-option value={{continuitySpillageSelect}} selected  disabled > {{continuitySpillageSelect}} </ion-select-option>\n\n     <div *ngFor='let continuityspillage of continuitySpillagelist'>\n      <ion-select-option value={{continuityspillage}}>{{continuityspillage}}</ion-select-option>\n     </div>\n      \n       \n      \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"AnalyserReading1Flag\">\n    <ion-label>Combustion analyser reading</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"AnalyserReading1Select\" (ionChange)=\"analyserReadingClick()\">\n      <ion-select-option value={{AnalyserReading1Select}} selected  disabled > {{AnalyserReading1Select}} </ion-select-option>\n     <div *ngFor='let  analyser of analyserlist'> \n\n        <ion-select-option value={{analyser}}>{{analyser}}</ion-select-option>\n      \n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalRatioFlag\">\n    <ion-label position=\"floating\">High / Inital Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.1234\" type=\"number\" [(ngModel)]=\"HighInitalRatioSelect\"\n      (keyup.enter)=\"HighInitalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCO2Flag\">\n    <ion-label position=\"floating\">High/ Inital CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCO2Select\"\n      (keyup.enter)=\"HighInitalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCOppmFlag\">\n    <ion-label position=\"floating\">High/ Inital CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCOppmSelect\"\n      (keyup.enter)=\"HighInitalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalRatioFlag\">\n    <ion-label position=\"floating\">Low/ Final Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.1234\" type=\"number\" [(ngModel)]=\"LowFinalRatioSelect\"\n      (keyup.enter)=\"LowFinalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCO2Flag\">\n    <ion-label position=\"floating\">Low/ Final CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCO2Select\"\n      (keyup.enter)=\"LowFinalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCOppmFlag\">\n    <ion-label position=\"floating\">Low/ Final CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCOppmSelect\"\n      (keyup.enter)=\"LowFinalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"SafeToUseFlag\">\n    <ion-label>Safe To Use</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafeToUseSelect\" (ionChange)=\"SafeToUseClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"DefectIdentifiedFlag\">\n    <ion-label position=\"floating\">Defect(s) identified</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"DefectIdentifiedSelect\" placeholder=\"Write here the answer\"\n      (keyup.enter)=\"DefectIdentifiedAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"GIUSPFlag\">\n    <ion-label>GIUSP  </ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GIUSPSelect\" (ionChange)=\"GIUSPClick()\">\n      <ion-select-option value={{GIUSPSelect}} selected  disabled > {{GIUSPSelect}} </ion-select-option>\n\n      <div *ngFor='let giusp of giusplist'>\n        <ion-select-option value={{giusp}}> {{giusp}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"WarningNoticeFlag\">\n    <ion-label position=\"floating\">Warning Notice Reference No</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"WarningNoticeSelect\" placeholder=\"Write here the answer\"\n      (keyup.enter)=\"WarningNoticeAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"RemedialActionFlag\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value={{RemedialActionSelect}} selected  disabled > {{RemedialActionSelect}} </ion-select-option>\n\n     <div *ngFor='let advise of advicelist'>\n      <ion-select-option value={{advise}}>{{advise}}</ion-select-option>\n     </div> \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"RemedialAction2\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value=\"Turnedoffwithpermission\">Turned off with permission, documeted and labled\n      </ion-select-option>\n      <ion-select-option value=\"Customerrefusedpermission\">Customer refused permission</ion-select-option>\n      <ion-select-option value=\"Cappedoff\">Capped off</ion-select-option>\n      <ion-select-option value=\"PasstoESP\">Pass to ESP (customer refused to cap off)</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div style=\"margin-top: 5%;\">\n    <ion-button [hidden]=\"SaveFlag\" expand=\"block\" (click)=\"InsertApplianceNew()\">Update</ion-button>\n  </div>\n\n</ion-content>\n\n<!-- <form [formGroup]=\"AddApplianceForm\" (ngSubmit)=\"gotologinformsubmit()\"> </form>  -->";
      /***/
    },

    /***/
    50213:
    /*!*******************************************************!*\
      !*** ./src/app/editappliance/editappliance.page.scss ***!
      \*******************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXBwbGlhbmNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_editappliance_editappliance_module_ts-es5.js.map