(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    61354:
    /*!*******************************************************!*\
      !*** ./src/app/components/button/button.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonComponent": function ButtonComponent() {
          return (
            /* binding */
            _ButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./button.component.html */
      92352);
      /* harmony import */


      var _button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./button.component.scss */
      455);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ButtonComponent = /*#__PURE__*/_createClass(function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);
      });

      _ButtonComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ButtonComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-button',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ButtonComponent);
      /***/
    },

    /***/
    80772:
    /*!*****************************************************************!*\
      !*** ./src/app/components/icon-button/icon-button.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IconButtonComponent": function IconButtonComponent() {
          return (
            /* binding */
            _IconButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_icon_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./icon-button.component.html */
      47812);
      /* harmony import */


      var _icon_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./icon-button.component.scss */
      21695);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _IconButtonComponent = /*#__PURE__*/_createClass(function IconButtonComponent() {
        _classCallCheck(this, IconButtonComponent);
      });

      _IconButtonComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _IconButtonComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-icon-button',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_icon_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_icon_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _IconButtonComponent);
      /***/
    },

    /***/
    52187:
    /*!*****************************************************!*\
      !*** ./src/app/components/input/input.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InputComponent": function InputComponent() {
          return (
            /* binding */
            _InputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input.component.html */
      97442);
      /* harmony import */


      var _input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./input.component.scss */
      27352);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InputComponent = /*#__PURE__*/function () {
        function InputComponent() {
          _classCallCheck(this, InputComponent);

          this.type = 'text'; // set default type be text
        }

        _createClass(InputComponent, [{
          key: "onBlur",
          value: function onBlur(event) {
            var value = event.target.value;
            console.log("Danish" + value);

            if (!value) {
              this.focused = false;
              this.error = true;
            } else {
              this.error = false;
            }
          }
        }]);

        return InputComponent;
      }();

      _InputComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _InputComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_input_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _InputComponent);
      /***/
    },

    /***/
    30881:
    /*!*********************************************!*\
      !*** ./src/app/components/shared.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./input/input.component */
      52187);
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./button/button.component */
      61354);
      /* harmony import */


      var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./icon-button/icon-button.component */
      80772);

      var _SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      _SharedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule],
        exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent]
      })], _SharedModule);
      /***/
    },

    /***/
    45393:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825);
      /* harmony import */


      var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/shared.module */
      30881);

      var _LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */
      99403);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      59006);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      33293);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var _themes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../themes.service */
      97324);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(storage, androidPermission, navCtrl, auth, router, route, platform, splashscreen, iab, themeService) {
          var _this = this;

          _classCallCheck(this, LoginPage);

          this.storage = storage;
          this.androidPermission = androidPermission;
          this.navCtrl = navCtrl;
          this.auth = auth;
          this.router = router;
          this.route = route;
          this.platform = platform;
          this.splashscreen = splashscreen;
          this.iab = iab;
          this.themeService = themeService;
          this.devcolor = "#a71d31";
          route.params.subscribe(function (val) {
            _this.ngOnInit();
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storage.get("debugmode").then(function (res) {
              if (res == "true") {
                _this2.themeService.enableDebugMode();
              } else {
                _this2.themeService.enableLiveMode();
              }
            });
            this.platform.ready().then(function (da) {
              _this2.auth.checkNetwork();

              _this2.storage.get("updateFirmware").then(function (res) {
                console.log("Danish" + res);

                if (res == "true") {
                  console.log("Danish" + res);

                  _this2.themeService.enableDebugMode();
                } else {
                  _this2.themeService.enableLiveMode();
                }
              });
            });
            this.storage.get('isChecked').then(function (res) {
              _this2.isChecked = res;

              if (res) {
                _this2.storage.get('username').then(function (un) {
                  _this2.storage.get('password').then(function (pw) {
                    console.log(un + " and " + pw);
                    _this2.username = un;
                    _this2.password = pw; // this.loginService(un,pw);
                  });
                });
              } else {
                _this2.username = "";
                _this2.password = "";
              }
            });
          }
        }, {
          key: "onBlur",
          value: function onBlur(event) {
            var value = event.target.value;
            this.username = value;

            if (!value) {
              this.focused = false;
              this.error = true;
            } else {
              this.error = false;
            }
          }
        }, {
          key: "onBlur2",
          value: function onBlur2(event) {
            var value = event.target.value;
            this.password = value;

            if (!value) {
              this.focused2 = false;
              this.error2 = true;
            } else {
              this.error2 = false;
            }
          } //Check if application having GPS access permission

        }, {
          key: "checkWritePermission",
          value: function checkWritePermission() {
            var _this3 = this;

            this.androidPermission.checkPermission(this.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) {
              if (result.hasPermission) {//If having permission show 'Turn On GPS' dialogue
              } else {
                //If not having permission ask for permission
                _this3.androidPermission.requestPermission(_this3.androidPermission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function () {// call method to turn on GPS
                }, function (error) {
                  //Show alert if user click on 'No Thanks'
                  alert("requestPermission Error requesting file read permissions " + error);
                });
              }
            }, function (err) {
              alert(err);
            });
          }
        }, {
          key: "gotoRegister",
          value: function gotoRegister() {
            var browser = this.iab.create("https://www.homeresponse360.co.uk/app-signup/");
          }
        }, {
          key: "emptyjobslist",
          value: function emptyjobslist() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.auth.database.executeSql("delete from jobslist", []).then(function (res) {
                resolve("jobslist resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
                        if (this.username == "" || this.username == null || this.username == undefined) {
                          this.auth.showToast("Username cannot be empty.", 'danger');
                        } else {
                          if (this.password == "" || this.password == null || this.password == undefined) {
                            this.auth.showToast("Password cannot be empty.", 'danger');
                          } else {
                            this.loginService(this.username, this.password);
                            this.storage.set('username', this.username);
                            this.storage.set('password', this.password);
                          }
                        }
                      } else {
                        this.auth.showToast("Internet not connected. There was a problem with your network connection.", 'danger');
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
          key: "loginService",
          value: function loginService(username, password) {
            var _this5 = this;

            this.auth.firmwareUpdateCheck().then(function (res) {
              console.log("Danish " + res);

              _this5.auth.presentLoading("Please wait while we sign you in.");

              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams().set("username", username).set("password", password);

              _this5.auth.httpSend("Service_Login", params, "post").subscribe(function (resLogin) {
                console.log(); //resLogin = "18648a22-5f02-41bf-a171-d2873adc9c0b";

                if (resLogin["Msg"] == "Failed" || resLogin["Msg"] == "null") {
                  _this5.auth.dismissLoading();

                  _this5.auth.alert("The Username or Password that you've entered is either incorrect or misspelled. Please try again.", "Invalid Credentials");
                } else {
                  //login success
                  _this5.storage.set('datasyncstatus', 'novice');

                  _this5.storage.set("enggid", resLogin["Msg"]);

                  _this5.gotoTabs(resLogin["Msg"]); // this.storage.get('loginCount').then((res)=>{
                  //     console.log("plan login count before login page "+res);
                  //     if (res == null || res == undefined || res == "null") {
                  //       this.storage.set('datasyncstatus','novice');
                  //       this.storage.set("loginCount", 1).then(()=>{
                  //         this.gotoTabs(resLogin["Msg"]);
                  //       });
                  //     } else {
                  //       this.storage.set('datasyncstatus','mature');
                  //       this.storage.set("loginCount", (res+1)).then((res)=>{
                  //         this.gotoTabs(resLogin["Msg"]);
                  //       });
                  //     }
                  // }
                  // ).catch(e=>{
                  //   this.auth.dismissLoading();
                  //   this.auth.showToast("unable to fetch previous login please clear data/cache and login again")
                  // })


                  if (_this5.isChecked) {
                    _this5.storage.set('isChecked', _this5.isChecked);
                  } else {
                    _this5.storage.set('isChecked', _this5.isChecked);
                  }
                }
              }, function (err) {
                setTimeout(function () {
                  _this5.auth.dismissLoading();
                }, 300);

                _this5.auth.alert(err.message, err.name);
              });
            });
          }
        }, {
          key: "gotoTabs",
          value: function gotoTabs(res) {
            var _this6 = this;

            // this.storage.set('datasyncstatus','novice');
            this.storage.set("loginStatus", "true");
            this.auth.createEngineerInfoTable();
            this.createAllTables().then(function (res) {
              _this6.auth.dismissLoading();

              _this6.router.navigate(["tabs"]);
            })["catch"](function (e) {
              _this6.auth.dismissLoading();

              _this6.auth.alert("Something went wrong. Try later after clearing data/cache" + e);
            });
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams().set("enggid", res);
            this.auth.httpSend("Service_Engineerandcompanydetailsforpdfcreation", params, "post").subscribe(function (res) {
              _this6.auth.database.executeSql('select * from EngInfo', []).then(function (succ) {
                console.log("sign length" + succ.rows.length);

                if (succ.rows.length > 0) {
                  _this6.auth.database.executeSql('update EngInfo set GasSafeNumber =?, EngCertName=?, GasSafeLicenseNumber=?, CompanyAddress=?, SubContractor=?, TypeName=?', [res['GasSafeNumber'], res['EngCertName'], res['GasSafeLicenseNumber'], res['CompanyAddress'], res['SubContractor'], res['TypeName']]);
                } else {
                  _this6.auth.database.executeSql('insert into EngInfo (GasSafeNumber, EngCertName, GasSafeLicenseNumber, CompanyAddress, SubContractor, TypeName, Sign) values(?,?,?,?,?,?,?)', [res['GasSafeNumber'], res['EngCertName'], res['GasSafeLicenseNumber'], res['CompanyAddress'], res['SubContractor'], res['TypeName'], " "]);
                }
              });
            });
          }
        }, {
          key: "createAllTables",
          value: function createAllTables() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.auth.createJobTable().then(function (res) {
                _this7.auth.createOnRouteTable().then(function (res) {
                  _this7.auth.createArrivedTable().then(function (res) {
                    _this7.auth.createJobsStatusTable().then(function (res) {
                      _this7.auth.createAbandonTable().then(function (res) {
                        _this7.auth.createAuthorizationTable().then(function (res) {
                          _this7.auth.createCompleteClaimTable().then(function (res) {
                            _this7.auth.createCompleteServiceTable().then(function (res) {
                              _this7.auth.newApplianceTable().then(function (res) {
                                _this7.auth.certificateTable().then(function (res) {
                                  _this7.auth.boilerInstallTable().then(function (res) {
                                    _this7.auth.boilerInstallPicsTable().then(function (res) {
                                      _this7.auth.boilerInstallSignTable().then(function (res) {
                                        _this7.auth.completedjobsTable().then(function (res) {
                                          _this7.auth.enggPicsTable().then(function (res) {
                                            _this7.auth.siteSurveyTable().then(function (res) {
                                              _this7.auth.siteSurveyPics().then(function (res) {
                                                _this7.auth.siteSurveySign().then(function (res) {
                                                  _this7.auth.createmakemodel().then(function (res) {
                                                    _this7.auth.createErrorLogTable().then(function (res) {
                                                      _this7.auth.createFirmwareUrl().then(function (res) {
                                                        resolve("All TABLES CREATED");
                                                      })["catch"](function (e) {
                                                        reject(JSON.stringify(e));
                                                      });
                                                    })["catch"](function (e) {
                                                      reject(JSON.stringify(e));
                                                    });
                                                  })["catch"](function (e) {
                                                    reject(JSON.stringify(e));
                                                  });
                                                })["catch"](function (e) {
                                                  reject(JSON.stringify(e));
                                                });
                                              })["catch"](function (e) {
                                                reject(JSON.stringify(e));
                                              });
                                            })["catch"](function (e) {
                                              reject(JSON.stringify(e));
                                            });
                                          })["catch"](function (e) {
                                            reject(JSON.stringify(e));
                                          });
                                        })["catch"](function (e) {
                                          reject(JSON.stringify(e));
                                        });
                                      })["catch"](function (e) {
                                        reject(JSON.stringify(e));
                                      });
                                    })["catch"](function (e) {
                                      reject(JSON.stringify(e));
                                    });
                                  })["catch"](function (e) {
                                    reject(JSON.stringify(e));
                                  });
                                })["catch"](function (e) {
                                  reject(JSON.stringify(e));
                                });
                              })["catch"](function (e) {
                                reject(JSON.stringify(e));
                              });
                            })["catch"](function (e) {
                              reject(JSON.stringify(e));
                            });
                          })["catch"](function (e) {
                            reject(JSON.stringify(e));
                          });
                        })["catch"](function (e) {
                          reject(JSON.stringify(e));
                        });
                      })["catch"](function (e) {
                        reject(JSON.stringify(e));
                      });
                    })["catch"](function (e) {
                      reject(JSON.stringify(e));
                    });
                  })["catch"](function (e) {
                    reject(JSON.stringify(e));
                  });
                })["catch"](function (e) {
                  reject(JSON.stringify(e));
                });
              }, function (err) {
                reject(JSON.stringify(err));
              });
            });
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage
        }, {
          type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
        }, {
          type: _themes_service__WEBPACK_IMPORTED_MODULE_6__.ThemesService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-login",
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _LoginPage);
      /***/
    },

    /***/
    92352:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/button/button.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button expand='block'>\n  {{label}}\n</ion-button>";
      /***/
    },

    /***/
    47812:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/icon-button/icon-button.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button expand='block'>\n  <ion-icon [name]='icon'></ion-icon> {{label}}\n</ion-button>";
      /***/
    },

    /***/
    97442:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/input/input.component.html ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"form-field\">\n  <label [ngClass]=\"focused ? 'label-focused' : ''\">Enter {{label}}</label>\n  <input [type]=\"type\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\" />\n</div>\n<span>&nbsp;</span> <span *ngIf ='error'> {{label}} cannot be empty</span>\n\n";
      /***/
    },

    /***/
    99403:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"loginbg\">\n    <table>\n      <tr>\n        <td>\n          <ion-card>\n            <div class=\"image\">\n              <img class=\"picture\" src=\"../../assets/images/logo.png\" />\n            </div>\n            <div class=\"header\">\n              <h2>\n                Welcome to <br />\n                HomeResponse360\n              </h2>\n            </div>\n  \n            <ion-card-content>\n              <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"form-field\">\n                  <label [ngClass]=\"focused ? 'label-focused' : ''\"\n                    >Username</label\n                  >\n                  <input\n                    name=\"username\"\n                    [ngClass]=\"focused ? 'input-focused' : ''\"\n                    type=\"text\"\n                    (focus)=\"focused = true\"\n                    (blur)=\"onBlur($event)\"\n                    [(ngModel)]=\"username\"\n                  />\n                </div>\n                <!-- <span>&nbsp;</span> <span *ngIf ='error'> Username cannot be empty</span> -->\n  \n                <div class=\"form-field\">\n                  <label [ngClass]=\"focused2 ? 'label-focused' : ''\"\n                    >Password</label\n                  >\n                  <input\n                    name=\"password\"\n                    [ngClass]=\"focused2 ? 'input-focused' : ''\"\n                    type=\"password\"\n                    (focus)=\"focused2 = true\"\n                    (blur)=\"onBlur2($event)\"\n                    [(ngModel)]=\"password\"\n                  />\n                </div>\n                <div>\n                  <ion-item lines=\"none\">\n                    <ion-checkbox name=\"cb\" color=\"secondary\" slot=\"start\" [(ngModel)]=\"isChecked\" (click)=\"checkCheckbox()\"></ion-checkbox>\n                    <ion-label>Remember me</ion-label>\n                  </ion-item>\n                </div>\n  \n                <div>\n                  <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\n                    Sign In\n                  </ion-button>\n                </div>\n  \n                <h5>\n                  Don't Have an Account?<br /><label (click)=\"gotoRegister()\"\n                    ><b>Register</b></label\n                  >\n                </h5>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </td>\n      </tr>\n    </table>\n  </ion-content>\n  ";
      /***/
    },

    /***/
    455:
    /*!*********************************************************!*\
      !*** ./src/app/components/button/button.component.scss ***!
      \*********************************************************/

    /***/
    function _(module) {
      module.exports = "ion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  height: 48px;\n  font-size: 1rem;\n  color: #fff;\n  margin-bottom: 0.5rem;\n  text-transform: none;\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsdUJBQUE7QUFDRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    21695:
    /*!*******************************************************************!*\
      !*** ./src/app/components/icon-button/icon-button.component.scss ***!
      \*******************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: #ebeef4;\n  height: 48px;\n  font-size: 1rem;\n  color: #123681;\n  margin-bottom: 0.7rem;\n  text-transform: none;\n  text-transform: initial;\n}\nion-button ion-icon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLHVCQUFBO0FBQUY7QUFFRTtFQUNFLG9CQUFBO0FBQUoiLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ViZWVmNDtcblxuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxMjM2ODE7XG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG5cbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    27352:
    /*!*******************************************************!*\
      !*** ./src/app/components/input/input.component.scss ***!
      \*******************************************************/

    /***/
    function _(module) {
      module.exports = ".form-field {\n  position: relative;\n  margin-bottom: 0.2rem;\n  height: 50px;\n}\n.form-field label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n}\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n.form-field input:focus {\n  border-color: #0f75bc;\n}\n.form-field .label-focused {\n  top: -0.4rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\nspan {\n  display: inline-block;\n  color: red;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRko7QUFPQTtFQUVFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBTEYiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBoZWlnaHQ6IDUwcHg7XG4gXG4gIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGNvbG9yOiAjOTM5ZmFiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3ZWJlZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6ICMxNzFjMjU7XG4gIH1cblxuICBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzBmNzViYztcbiAgfVxuXG4gIC5sYWJlbC1mb2N1c2VkIHtcbiAgICB0b3A6IC0wLjRyZW07XG4gICAgbGVmdDogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG59XG5cbnNwYW57XG4gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufSJdfQ== */";
      /***/
    },

    /***/
    59006:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(module) {
      module.exports = ":host ion-content {\n  --background: hsl(205, 85%, 15%) linear-gradient(100deg, hsl(205, 85%, 15%), hsl(195, 77%, 40%)) !important ;\n}\n\nion-card {\n  margin-left: 5%;\n  margin-right: 5%;\n  border-radius: 15px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.image {\n  margin-top: 1.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n.tdclass {\n  vertical-align: middle;\n}\n\n.card-content-md h2 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.card-content-md h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 0px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\nion-button {\n  font-size: 16px;\n  height: 40px;\n  text-transform: uppercase;\n  --border-radius: 10px;\n  margin: 50px 0 20px 0;\n}\n\n.validator-error {\n  font-size: small;\n  color: red;\n}\n\np {\n  font-size: 14px;\n  margin-left: 5px;\n  color: red;\n}\n\nion-list {\n  padding-top: 14px;\n}\n\n.itemLeft {\n  border-right: 1px solid rgba(0, 0, 0, 0.72);\n  padding-right: 8px;\n  z-index: 20;\n  height: 85%;\n  padding-top: 10px;\n}\n\n.picture {\n  display: inline;\n  display: initial;\n  width: 120px;\n  height: 120px;\n}\n\n.itemLeft .imgSpan {\n  width: 35px;\n  float: left;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.dotIcon {\n  height: 10px;\n  width: 10px;\n  display: inline;\n  display: initial;\n}\n\n.notifyError {\n  color: red;\n}\n\ntable {\n  height: 100%;\n  width: 100%;\n}\n\nh5 {\n  text-align: center;\n}\n\nh2 {\n  font-family: \"Merriweather\", serif;\n  width: 100%;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  font-size: 28px;\n  font-weight: 500;\n  text-align: center;\n  color: #0E588C;\n}\n\nh3 {\n  color: #939fab;\n  font-weight: 600;\n}\n\nion-row {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLDRHQUFBO0FBRE47O0FBS0U7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUdBLGdEQUFBO0FBSEo7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVNFO0VBQ0Usc0JBQUE7QUFOSjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBUUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFMSjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFOSjs7QUFTRTtFQUNFLGlCQUFBO0FBTko7O0FBU0U7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUFBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0FBTko7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVFFO0VBQ0Usa0JBQUE7QUFMSjs7QUFTRTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5KOztBQWtCRTtFQUNFLGdCQUFBO0FBZkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIpIHJlcGVhdCAxMDAlIDEwMCU7XG4gICAgICAtLWJhY2tncm91bmQ6IGhzbCgyMDUsIDg1JSwgMTUlKSBsaW5lYXItZ3JhZGllbnQoMTAwZGVnLCBoc2woMjA1LCA4NSUsIDE1JSksIGhzbCgxOTUsIDc3JSwgNDAlKSkgIWltcG9ydGFudCA7XG4gICAgfVxuICB9XG4gXG4gIGlvbi1jYXJkIHtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB9XG4gIFxuICBcbiAgLmltYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAgXG4gIFxuICAudGRjbGFzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuY2FyZC1jb250ZW50LW1kIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmNhcmQtY29udGVudC1tZCBoNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbiAgfVxuICBcbiAgLnZhbGlkYXRvci1lcnJvciB7XG4gICAgZm9udC1zaXplOnNtYWxsO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG5cbiAgcHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICB9XG4gIFxuICAuaXRlbUxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGhlaWdodDogODUlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIFxuICAucGljdHVyZSB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBcbiAgLml0ZW1MZWZ0IC5pbWdTcGFuIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLmxpc3QtbWQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICAuZG90SWNvbiB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbiAgXG4gIC5ub3RpZnlFcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBcbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwRTU4OEM7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBjb2xvcjogIzkzOWZhYjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiBcblxuICBcbiAgLy8gaW9uLWxhYmVse1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAvLyB9XG5cbiBcblxuICBpb24tcm93e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuXG4gICJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map