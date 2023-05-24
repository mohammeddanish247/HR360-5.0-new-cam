(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_testedit_testedit_module_ts"], {
    /***/
    22331:
    /*!***********************************!*\
      !*** ./src/app/testedit/model.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppType": function AppType() {
          return (
            /* binding */
            _AppType
          );
        },

        /* harmony export */
        "BoilerType": function BoilerType() {
          return (
            /* binding */
            _BoilerType
          );
        },

        /* harmony export */
        "Make": function Make() {
          return (
            /* binding */
            _Make
          );
        },

        /* harmony export */
        "MakeAnswer": function MakeAnswer() {
          return (
            /* binding */
            _MakeAnswer
          );
        },

        /* harmony export */
        "Model": function Model() {
          return (
            /* binding */
            _Model
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
        "Location": function Location() {
          return (
            /* binding */
            _Location
          );
        },

        /* harmony export */
        "Flue": function Flue() {
          return (
            /* binding */
            _Flue
          );
        },

        /* harmony export */
        "Owned": function Owned() {
          return (
            /* binding */
            _Owned
          );
        },

        /* harmony export */
        "Inspected": function Inspected() {
          return (
            /* binding */
            _Inspected
          );
        },

        /* harmony export */
        "Zero": function Zero() {
          return (
            /* binding */
            _Zero
          );
        },

        /* harmony export */
        "OPU": function OPU() {
          return (
            /* binding */
            _OPU
          );
        },

        /* harmony export */
        "GR": function GR() {
          return (
            /* binding */
            _GR
          );
        },

        /* harmony export */
        "customForbiddenValidator": function customForbiddenValidator() {
          return (
            /* binding */
            _customForbiddenValidator
          );
        },

        /* harmony export */
        "OSD": function OSD() {
          return (
            /* binding */
            _OSD
          );
        },

        /* harmony export */
        "VS": function VS() {
          return (
            /* binding */
            _VS
          );
        },

        /* harmony export */
        "VC": function VC() {
          return (
            /* binding */
            _VC
          );
        },

        /* harmony export */
        "Spilage": function Spilage() {
          return (
            /* binding */
            _Spilage
          );
        },

        /* harmony export */
        "CAR": function CAR() {
          return (
            /* binding */
            _CAR
          );
        },

        /* harmony export */
        "HIRatio": function HIRatio() {
          return (
            /* binding */
            _HIRatio
          );
        },

        /* harmony export */
        "HICO2": function HICO2() {
          return (
            /* binding */
            _HICO
          );
        },

        /* harmony export */
        "HICOPPM": function HICOPPM() {
          return (
            /* binding */
            _HICOPPM
          );
        },

        /* harmony export */
        "LFRatio": function LFRatio() {
          return (
            /* binding */
            _LFRatio
          );
        },

        /* harmony export */
        "LFCO2": function LFCO2() {
          return (
            /* binding */
            _LFCO
          );
        },

        /* harmony export */
        "LFCOPPM": function LFCOPPM() {
          return (
            /* binding */
            _LFCOPPM
          );
        },

        /* harmony export */
        "SAFE2U": function SAFE2U() {
          return (
            /* binding */
            _SAFE2U
          );
        },

        /* harmony export */
        "DefectI": function DefectI() {
          return (
            /* binding */
            _DefectI
          );
        },

        /* harmony export */
        "GIUSP": function GIUSP() {
          return (
            /* binding */
            _GIUSP
          );
        },

        /* harmony export */
        "WarnCert": function WarnCert() {
          return (
            /* binding */
            _WarnCert
          );
        },

        /* harmony export */
        "RAT": function RAT() {
          return (
            /* binding */
            _RAT
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

      var boilerList = [{
        label: "Combi",
        value: "Combi"
      }, {
        label: "Heat Type",
        value: "HeatType"
      }, {
        label: "System",
        value: "System"
      }, {
        label: "Back Boiler",
        value: "BackBoiler"
      }];
      var location = [{
        label: "BathRoom",
        value: "BathRoom"
      }, {
        label: "Garage",
        value: "Garage"
      }, {
        label: "Hall",
        value: "Hall"
      }, {
        label: "Join",
        value: "Join"
      }]; // const FlueList = [
      //   {
      //     label: "Open Flue",
      //     value: "OpenFlue"
      //   },
      //   {
      //     label: "Room Sealed",
      //     value: "RoomSealed"
      //   },]

      var OwnedList = [{
        label: "LandLord",
        value: "LandLord"
      }, {
        label: "Tenant",
        value: "Tenant"
      }];
      var InspectedList = [{
        label: "Worked On",
        value: "WorkedOn"
      }, {
        label: "Visual",
        value: "Visual"
      }]; // const ZeroList = [
      //   {
      //     label: "LandLord",
      //     value: "LandLord"
      //   },
      //   {
      //     label: "Tenant",
      //     value: "Tenant"
      //   },]

      var _AppType = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "AppType",
        placeholder: "Choose Appliance",
        multiple: false,
        validators: {
          required: null
        }
      });

      var _BoilerType = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "BoilerType",
        placeholder: "Choose A Boiler Type",
        multiple: false,
        name: 'BoilerType',
        hidden: true,
        options: boilerList,
        validators: {
          required: null
        } //errorMessages:{required:'Please Select a Boiler Type '}

      });

      var _Make = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Make",
        placeholder: "Choose A Make",
        multiple: false,
        name: 'MakeModel',
        options: [// {
        //   label: "Select",
        //   value: "Select"
        // },
        {
          label: "Others",
          value: "Others"
        }],
        hidden: true,
        validators: {
          required: null
        }
      });

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

      var _Model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Model",
        placeholder: "Choose A Model",
        multiple: false,
        name: 'ModelModel',
        options: [// {
        //   label: "Select",
        //   value: "Select"
        // },
        {
          label: "Others",
          value: "Others"
        }],
        hidden: true,
        validators: {
          required: null
        }
      });

      var _ModelAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "ModelAnswer",
        label: "Model Answer",
        maxLength: 15,
        placeholder: "Enter Model",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Location = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Location",
        placeholder: "Choose A Location",
        multiple: false,
        name: 'Location',
        options: location,
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Flue = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Flue",
        placeholder: "Flue",
        multiple: false,
        name: 'Flue',
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Owned = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Owned",
        placeholder: "Owned By",
        multiple: false,
        name: 'Owned',
        options: OwnedList,
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Inspected = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Inspected",
        placeholder: "Inspected",
        multiple: false,
        name: 'Inspected',
        options: InspectedList,
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Zero = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Zero",
        name: 'Zero',
        label: "Zero Govern",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _OPU = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "OPU",
        name: 'OPU',
        label: "Operating Pressure Unit",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _GR = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "GR",
        name: 'GR',
        label: "Gas Rate/ Burner Pressure",
        hidden: true,
        inputType: 'number',
        validators: {
          required: null
        }
      });

      function _customForbiddenValidator(forbiddenValue) {
        return function (control) {
          if (control && control.value === forbiddenValue) {
            return {
              forbidden: true
            };
          }

          return null;
        };
      } // export function customGRValidator(input: DynamicInputModel): ValidationErrors | null {
      //   const inputValue = input.value as number;
      //   let hasError = false;
      //   if (inputValue <0 || inputValue>70 ) {
      //       hasError = true;
      //   }
      //   return hasError ? {customGRValidator: true} : null;
      // }


      var _OSD = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "OSD",
        name: 'OSD',
        label: "Operation of Safety Device",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _VS = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "VS",
        name: 'VS',
        label: "Ventilation Satisfaction",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _VC = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "VC",
        name: 'VC',
        label: "Visual Condition of Flue and Termination",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _Spilage = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "Spilage",
        name: 'Spilage',
        label: "Flue FLow Continuity and Spillage",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _CAR = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "CAR",
        name: 'CAR',
        label: "Combustion Analyzer Reading",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _HIRatio = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "HIRatio",
        name: 'HIRatio',
        label: "High Initial Ratio",
        hidden: true,
        inputType: 'number',
        validators: {
          required: null
        }
      });

      var _HICO = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "HICO2",
        name: 'HICO2',
        label: "High Initial CO2",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _HICOPPM = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "HICOPPM",
        name: 'HICOPPM',
        label: "High Initial CO2 PPM",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _LFRatio = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "LFRatio",
        name: 'LFRatio',
        label: "Low Final Ration",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _LFCO = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "LFCO2",
        name: 'LFCO2',
        label: "Low Final CO2",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _LFCOPPM = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "LFCOPPM",
        name: 'LFCOPPM',
        label: "Low Final CO PPM",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _SAFE2U = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "SAFE2U",
        name: 'SAFE2U',
        label: "SAFE TO USE",
        hidden: true,
        options: [{
          label: 'Yes',
          value: 'Yes'
        }, {
          label: 'No',
          value: 'No'
        }],
        validators: {
          required: null
        }
      });

      var _DefectI = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "DefectI",
        name: 'DefectI',
        label: "Defect Identified",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _GIUSP = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "GIUSP",
        name: 'GIUSP',
        label: "GIUSP Classification",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _WarnCert = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
        id: "WarnCert",
        name: 'WarnCert',
        label: "Warning Certificate Number",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _RAT = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
        id: "RAT",
        name: 'RAT',
        label: "Remedial Actions Taken",
        hidden: true,
        validators: {
          required: null
        }
      });

      var _MY_FORM_MODEL = [_AppType, _BoilerType, _Make, _MakeAnswer, _Model, _ModelAnswer, _Location, _Flue, _Owned, _Inspected, _Zero, _OPU, _GR, _OSD, _VS, _VC, _Spilage, _CAR, _HIRatio, _HICO, _HICOPPM, _LFRatio, _LFCO, _LFCOPPM, _SAFE2U, _DefectI, _GIUSP, _WarnCert, _RAT]; //export const MY_FORM_MODEL: DynamicFormModel = [OSD];

      /***/
    },

    /***/
    86773:
    /*!*****************************************************!*\
      !*** ./src/app/testedit/testedit-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TesteditPageRoutingModule": function TesteditPageRoutingModule() {
          return (
            /* binding */
            _TesteditPageRoutingModule
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


      var _testedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./testedit.page */
      63927);

      var routes = [{
        path: '',
        component: _testedit_page__WEBPACK_IMPORTED_MODULE_0__.TesteditPage
      }];

      var _TesteditPageRoutingModule = /*#__PURE__*/_createClass(function TesteditPageRoutingModule() {
        _classCallCheck(this, TesteditPageRoutingModule);
      });

      _TesteditPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TesteditPageRoutingModule);
      /***/
    },

    /***/
    92679:
    /*!*********************************************!*\
      !*** ./src/app/testedit/testedit.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TesteditPageModule": function TesteditPageModule() {
          return (
            /* binding */
            _TesteditPageModule
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


      var _testedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./testedit-routing.module */
      86773);
      /* harmony import */


      var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-dynamic-forms/ui-material */
      90462);
      /* harmony import */


      var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-dynamic-forms/ui-ionic */
      81029);
      /* harmony import */


      var _testedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./testedit.page */
      63927);

      var _TesteditPageModule = /*#__PURE__*/_createClass(function TesteditPageModule() {
        _classCallCheck(this, TesteditPageModule);
      });

      _TesteditPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _testedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.TesteditPageRoutingModule, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__.DynamicFormsMaterialUIModule, _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_8__.DynamicFormsIonicUIModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_testedit_page__WEBPACK_IMPORTED_MODULE_1__.TesteditPage]
      })], _TesteditPageModule);
      /***/
    },

    /***/
    63927:
    /*!*******************************************!*\
      !*** ./src/app/testedit/testedit.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TesteditPage": function TesteditPage() {
          return (
            /* binding */
            _TesteditPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./testedit.page.html */
      60605);
      /* harmony import */


      var _testedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./testedit.page.scss */
      79166);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-dynamic-forms/core */
      57636);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./model */
      22331);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      12314);

      var _TesteditPage = /*#__PURE__*/function () {
        function TesteditPage(formService, alertController, router, route, apiGenerate, storage) {
          var _this = this;

          _classCallCheck(this, TesteditPage);

          this.formService = formService;
          this.alertController = alertController;
          this.router = router;
          this.route = route;
          this.apiGenerate = apiGenerate;
          this.storage = storage;
          this.jsonData = '';
          this.formModel = _model__WEBPACK_IMPORTED_MODULE_3__.MY_FORM_MODEL;
          this.decimalver = true;
          this.hunver = true;
          this.AppList = [{
            label: "Boiler",
            value: "Boiler"
          }, {
            label: "Cooker",
            value: "Cooker"
          }, {
            label: "Water Heater",
            value: "WaterHeater"
          }, {
            label: "Hob",
            value: "Hob"
          }, {
            label: "Fire",
            value: "Fire"
          }];
          this.SaveFlag = true;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.data = _this.router.getCurrentNavigation().extras.state.data;
              console.log('###params item: ', _this.data['JOBGUID']);

              _this.storage.get(_this.data['JOBGUID']).then(function (data) {
                console.log("FOSDEM " + data);
                _this.jsonData = data;

                _this.reinit();
              }); // this.apiGenerate.database.executeSql('select json from newappliance where JOBGUID=?', [this.data['JOBGUID']])
              //   .then((res) => {
              //     console.log('### select success ' + JSON.stringify(res.rows.item(0)));
              //     this.jsonData = res.rows.item(res.rows.length-1);
              //     this.reinit(); 
              //   })
              //   .catch((e) => {
              //     console.log('#### ERRRROR' + JSON.stringify(e));
              //   });

            }
          });
        }

        _createClass(TesteditPage, [{
          key: "alert0001Validation",
          value: function alert0001Validation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be of format 0.0001',
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
          key: "alert100Validation",
          value: function alert100Validation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'value should be of format 100',
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
          key: "presentMbar",
          value: function presentMbar(low, high) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Mbar should be between' + low + ' & ' + high,
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
          key: "presentkwh",
          value: function presentkwh() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Kw/h should be between 0 & 70',
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
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.formModel = this.formService.fromJSON(this.jsonData);
            console.log('sab ' + this.jsonData);

            if (this.jsonData == '') {
              console.log("### empty ");
              this.formGroup = this.formService.createFormGroup(this.formModel);
              _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
            } else {
              this.formModel = this.formService.fromJSON(this.jsonData);
              this.formGroup = this.formService.createFormGroup(this.formModel);
              _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
            }
          }
        }, {
          key: "reinit",
          value: function reinit() {
            this.formModel = this.formService.fromJSON(this.jsonData);
            this.formGroup = this.formService.createFormGroup(this.formModel);
            _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            var _this2 = this;

            console.log('', $event); //AppType

            if ($event.model.name == "AppType") {
              console.log('Apptype', $event.group.value['AppType']);
              _model__WEBPACK_IMPORTED_MODULE_3__.Make.hidden = false;
            } //MakeModel


            if ($event.model.name == "MakeModel") {
              console.log('MakeModel', _model__WEBPACK_IMPORTED_MODULE_3__.Make.value);

              if (_model__WEBPACK_IMPORTED_MODULE_3__.Make.value = 'Others') {
                _model__WEBPACK_IMPORTED_MODULE_3__.MakeAnswer.hidden = false;
              } else {
                _model__WEBPACK_IMPORTED_MODULE_3__.Model.hidden = false;
              }
            } //MakeAnswer


            if ($event.model.name == "MakeAnswer") {
              console.log('MakeAnswer', _model__WEBPACK_IMPORTED_MODULE_3__.Make.value);
              _model__WEBPACK_IMPORTED_MODULE_3__.Model.hidden = false;
            } //Model


            if ($event.model.name == "ModelModel") {
              console.log('Model', _model__WEBPACK_IMPORTED_MODULE_3__.Model.value);

              if (_model__WEBPACK_IMPORTED_MODULE_3__.Model.value = 'Others') {
                _model__WEBPACK_IMPORTED_MODULE_3__.ModelAnswer.hidden = false;
              } else {
                _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe(function (app) {
                  if (app == "Boiler") {
                    _model__WEBPACK_IMPORTED_MODULE_3__.BoilerType.hidden = false;
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Location.hidden = false;
                  }
                }, function (err) {});
              }
            } //ModelAnswer


            if ($event.model.name == "ModelAnswer") {
              console.log('ModelAnswer', _model__WEBPACK_IMPORTED_MODULE_3__.ModelAnswer.value);
              _model__WEBPACK_IMPORTED_MODULE_3__.Location.hidden = false;
            } //Location


            if ($event.model.name == "Location") {
              console.log('Location ' + _model__WEBPACK_IMPORTED_MODULE_3__.Location.value);

              _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe(function (res) {
                console.log('Apptype subscribed in loction ' + res);
                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.value = '';

                if (res == 'Boiler') {
                  _model__WEBPACK_IMPORTED_MODULE_3__.Flue.options = [{
                    label: "Room Sealed",
                    value: "RoomSealed"
                  }, {
                    label: "Open Flue",
                    value: "OpenFlue"
                  }];
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.Flue.options = [{
                    label: "Room Sealed",
                    value: "RoomSealed"
                  }, {
                    label: "Open Flue",
                    value: "OpenFlue"
                  }, {
                    label: "Flueless",
                    value: "Flueless"
                  }];
                }

                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.hidden = false;
              }, function (err) {});
            } //Flue


            if ($event.model.name == "Flue") {
              console.log('Flue ' + _model__WEBPACK_IMPORTED_MODULE_3__.Flue.value);
              _model__WEBPACK_IMPORTED_MODULE_3__.Owned.hidden = false;
            } //Owned


            if ($event.model.name == "Owned") {
              console.log('Owned ', _model__WEBPACK_IMPORTED_MODULE_3__.Owned.value);
              _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.hidden = false;
            } //Inspected


            if ($event.model.name == "Inspected") {
              _model__WEBPACK_IMPORTED_MODULE_3__.Zero.hidden = false;

              _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe(function (flu) {
                console.log("flu subscribed in Inspected has value: " + flu);

                if (flu == "RoomSealed") {
                  _model__WEBPACK_IMPORTED_MODULE_3__.Zero.options = [{
                    label: 'Yes',
                    value: 'Yes'
                  }, {
                    label: 'No',
                    value: 'No'
                  }];
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.Zero.options = [{
                    label: 'Yes',
                    value: 'Yes'
                  }, {
                    label: 'No',
                    value: 'No'
                  }, {
                    label: 'N/A',
                    value: 'NA'
                  }];
                }
              }, function (err) {
                console.log("flu subscribed in Inspected has error: " + err);
              });
            } //Zero


            if ($event.model.name == "Zero") {
              console.log('Zero ', $event.$event.detail.value);

              _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe(function (Ins) {
                _model__WEBPACK_IMPORTED_MODULE_3__.Zero.valueChanges.subscribe(function (Ze) {
                  _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe(function (App) {
                    //$event.$event.detail.value
                    if (Ins == 'WorkedOn') {
                      console.log('worked ' + Ins + ' zero ' + Ze + ' App ' + App);
                      _model__WEBPACK_IMPORTED_MODULE_3__.OPU.hidden = false;
                      _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;

                      if (App == 'Boiler' && $event.$event.detail.value == 'Yes') {
                        _model__WEBPACK_IMPORTED_MODULE_3__.OPU.options = [{
                          label: 'KWH',
                          value: 'KWH'
                        }];
                      } else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.OPU.options = [{
                          label: 'KWH',
                          value: 'KWH'
                        }, {
                          label: 'mBar',
                          value: 'mBar'
                        }];
                      }
                    } else {
                      // visual
                      _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = false;
                      _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{
                        label: 'Pass',
                        value: 'Pass'
                      }, {
                        label: 'Fail',
                        value: 'Fail'
                      }, {
                        label: 'N/A',
                        value: 'NA'
                      }];
                      _model__WEBPACK_IMPORTED_MODULE_3__.OPU.hidden = true;
                      _model__WEBPACK_IMPORTED_MODULE_3__.GR.hidden = true;
                    }
                  }, function (err) {});
                }, function (err) {});
              }, function (err) {});
            } //OPU


            if ($event.model.name == "OPU") {
              _model__WEBPACK_IMPORTED_MODULE_3__.GR.hidden = false;
            } //GR


            if ($event.model.name == "GR") {
              _model__WEBPACK_IMPORTED_MODULE_3__.OPU.valueChanges.subscribe(function (opu) {
                if (opu == 'KWH') {
                  if ($event.control._parent.value.GR > 70 || $event.control._parent.value.GR < 0) {
                    _this2.presentkwh();

                    _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{
                      label: 'Pass',
                      value: 'Pass'
                    }, {
                      label: 'Fail',
                      value: 'Fail'
                    }, {
                      label: 'N/A',
                      value: 'NA'
                    }];
                    _this2.formService.findModelById('OSD', _this2.formModel).hidden = false;
                  }
                } else {
                  if ($event.control._parent.value.GR > 17 || $event.control._parent.value.GR < 0) {
                    _this2.presentMbar('0', '17');

                    _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{
                      label: 'Pass',
                      value: 'Pass'
                    }, {
                      label: 'Fail',
                      value: 'Fail'
                    }, {
                      label: 'N/A',
                      value: 'NA'
                    }];
                    _this2.formService.findModelById('OSD', _this2.formModel).hidden = false;
                  }
                }
              }, function (err) {});
            } //OSD Operation of Safety Device 


            if ($event.model.name == 'OSD') {
              _model__WEBPACK_IMPORTED_MODULE_3__.VS.options = [{
                label: 'Yes',
                value: 'Yes'
              }, {
                label: 'No',
                value: 'No'
              }, {
                label: 'N/A',
                value: 'NA'
              }];
              _model__WEBPACK_IMPORTED_MODULE_3__.VS.hidden = false;
            } // VS Ventilation Satisfaction


            if ($event.model.name == 'VS') {
              _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe(function (flu) {
                _model__WEBPACK_IMPORTED_MODULE_3__.VC.value = '';

                if (flu == 'Flueless') {
                  _model__WEBPACK_IMPORTED_MODULE_3__.VC.options = [{
                    label: 'Pass',
                    value: 'Pass'
                  }, {
                    label: 'Fail',
                    value: 'Fail'
                  }, {
                    label: 'N/A',
                    value: 'NA'
                  }];
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.VC.options = [{
                    label: 'Pass',
                    value: 'Pass'
                  }, {
                    label: 'Fail',
                    value: 'Fail'
                  }];
                }
              }, function (err) {});

              this.formService.findModelById('VC', this.formModel).hidden = false;
            } // VC Visual Condition


            if ($event.model.name == 'VC') {
              _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe(function (App) {
                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe(function (splg) {
                  console.log('vc ' + App + ' ' + splg);

                  if (App == 'Boiler' || App == 'Fire' || App == 'WaterHeater') {
                    if (splg == 'OpenFlue') {
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{
                        label: 'Pass',
                        value: 'Pass'
                      }, {
                        label: 'Fail',
                        value: 'Fail'
                      }];
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false; // SAFE2U.hidden=false;
                    } else {
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{
                        label: 'Pass',
                        value: 'Pass'
                      }, {
                        label: 'Fail',
                        value: 'Fail'
                      }, {
                        label: 'N/A',
                        value: 'NA'
                      }];
                      _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false;
                    }
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                    _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{
                      label: 'Pass',
                      value: 'Pass'
                    }, {
                      label: 'Fail',
                      value: 'Fail'
                    }, {
                      label: 'N/A',
                      value: 'NA'
                    }];
                    _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false; ///SAFE2U.hidden=true;
                  }
                }, function (err) {});
              }, function (err) {});
            } //Spilage


            if ($event.model.name == 'Spilage') {
              console.log('Spillage ' + _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value);

              _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe(function (Ins) {
                _model__WEBPACK_IMPORTED_MODULE_3__.Zero.valueChanges.subscribe(function (Ze) {
                  console.log("### listen Inspected and Zero " + Ins + ' ' + Ze);

                  if (Ins == 'WorkedOn') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = false;

                    if (Ze == 'Yes') {
                      _model__WEBPACK_IMPORTED_MODULE_3__.CAR.value = '';
                      _model__WEBPACK_IMPORTED_MODULE_3__.CAR.options = [{
                        label: 'Pass',
                        value: 'Pass'
                      }, {
                        label: 'Fail',
                        value: 'Fail'
                      }];
                      _this2.formService.findModelById('CAR', _this2.formModel).hidden = false;
                      console.log('zero chnged to yes CAR set');
                    } else {
                      _model__WEBPACK_IMPORTED_MODULE_3__.CAR.value = '';
                      console.log('zero chnged to no CAR set');
                      _model__WEBPACK_IMPORTED_MODULE_3__.CAR.options = [{
                        label: 'Pass',
                        value: 'Pass'
                      }, {
                        label: 'Fail',
                        value: 'Fail'
                      }, {
                        label: 'Stripdown',
                        value: 'Stripdown'
                      }];
                      _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = false;
                    }

                    _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = true;
                    _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.value = '';
                    _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.options = [{
                      label: 'Yes',
                      value: 'Yes'
                    }, {
                      label: 'No',
                      value: 'No'
                    }];
                    _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = false;
                  }
                }, function (err) {});
              }, function (err) {});
            } //CAR Combustion Analuzr Reading


            if ($event.model.name == 'CAR') {
              _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe(function (Ins) {
                if (Ins == 'WorkedOn') {
                  _model__WEBPACK_IMPORTED_MODULE_3__.HIRatio.hidden = false;
                  _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = false;
                  _model__WEBPACK_IMPORTED_MODULE_3__.HIRatio.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.HIRatio.value = '';
                  _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.value = '';
                  _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.value = '';
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.value = '';
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.value = '';
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.hidden = true;
                  _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.value = '';
                }
              }, function (err) {});
            } //HIRatio, HICO2, HICOPPM, LFRatio,LFCO2,LFCOPPM,SAFE2U
            //HI Ratio


            if ($event.model.name == 'HIRatio') {
              var decRegex = /^[0](\.\d{4})$/;

              if (decRegex.test($event.control._parent.value.HIRatio)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.hidden = false;
                this.decimalver = true;
              } else {
                // this.alert0001Validation();
                this.decimalver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.hidden = true;
              }
            } //HICO2


            if ($event.model.name == 'HICO2') {
              var _decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

              if (_decRegex.test($event.control._parent.value.HICO2)) {
                this.hunver = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.hidden = false;
              } else {
                //this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.hidden = true;
              }
            } // HICOPPM,


            if ($event.model.name == 'HICOPPM') {
              var _decRegex2 = /^[0-9]*$/;

              if (_decRegex2.test($event.control._parent.value.HICOPPM)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.hidden = false;
                this.hunver = true;
              } else {
                // this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.hidden = true;
              }
            } //LFRatio


            if ($event.model.name == 'LFRatio') {
              var _decRegex3 = /^[0](\.\d{4})$/;

              if (_decRegex3.test($event.control._parent.value.LFRatio)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.hidden = false;
                this.decimalver = true;
              } else {
                //    this.alert0001Validation();
                this.decimalver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.hidden = true;
              }
            } /// LFCO2,


            if ($event.model.name == 'LFCO2') {
              var _decRegex4 = /^(\d{1,2}(\.\d{1,2})?|100)$/;

              if (_decRegex4.test($event.control._parent.value.LFCO2)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.hidden = false;
                this.hunver = false;
              } else {
                // this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.hidden = true;
              }
            } /// LFCOPPM,


            if ($event.model.name == 'LFCOPPM') {
              var _decRegex5 = /^[0-9]*$/;

              if (_decRegex5.test($event.control._parent.value.LFCOPPM)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.options = [{
                  label: 'Yes',
                  value: 'Yes'
                }, {
                  label: 'No',
                  value: 'No'
                }];
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = false;
                this.hunver = true;
              } else {
                //this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
              }
            } // SAFE2U,


            if ($event.model.name == 'SAFE2U') {
              this.formService.findModelById('DefectI', this.formModel).hidden = false;
            } //DefectI


            if ($event.model.name == 'DefectI') {
              _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe(function (saf) {
                _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value = '';

                if (saf == 'Yes') {
                  _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.options = [{
                    label: 'Advisory',
                    value: 'Advisory'
                  }, {
                    label: 'Not Applicable',
                    value: 'NotApplicable'
                  }];
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.options = [{
                    label: 'At Risk',
                    value: 'AtRisk'
                  }, {
                    label: 'Immediately Dangerous',
                    value: 'ImmediatelyDangerous'
                  }];
                }

                _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.hidden = false;
              }, function (err) {});
            } //GIUSP


            if ($event.model.name == 'GIUSP') {
              if (_model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value == 'Advisory' || _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value == 'NotApplicable') {
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.hidden = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.value = '';
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = false;

                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe(function (saf) {
                  _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                  console.log('### saf 1 ' + saf);

                  if (saf == 'No') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{
                      label: 'Turned off with permission, documeted and labled',
                      value: 'Turnedoffwithpermissiondocumetedandlabled'
                    }, {
                      label: 'Customer refused permission',
                      value: 'Customerrefusedpermission'
                    }, {
                      label: 'Capped off',
                      value: 'Cappedoff'
                    }, {
                      label: 'Pass to ESP (customer refused to cap off)',
                      value: 'PasstoESPcustomerrefusedtocapoff'
                    }];
                  } else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{
                      label: 'Advised Customer',
                      value: 'AdvisedCustomer'
                    }, {
                      label: 'Not Applicable',
                      value: 'NotApplicable'
                    }];
                  }
                }, function (err) {});
              } else {
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.hidden = false;
              }
            } //WarnCert


            if ($event.model.name == 'WarnCert') {
              _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = false;

              _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe(function (saf) {
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                console.log('### saf ' + saf);

                if (saf == 'No') {
                  _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{
                    label: 'Turned off with permission, documeted and labled',
                    value: 'Turnedoffwithpermissiondocumetedandlabled'
                  }, {
                    label: 'Customer refused permission',
                    value: 'Customerrefusedpermission'
                  }, {
                    label: 'Capped off',
                    value: 'Cappedoff'
                  }, {
                    label: 'Pass to ESP (customer refused to cap off)',
                    value: 'PasstoESPcustomerrefusedtocapoff'
                  }];
                } else {
                  _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{
                    label: 'Advised Customer',
                    value: 'AdvisedCustomer'
                  }, {
                    label: 'Not Applicable',
                    value: 'NotApplicable'
                  }];
                }
              }, function (err) {});
            } //Remedial Action Taken (RAT)


            if ($event.model.name == 'RAT') {
              this.SaveFlag = false; // this.formService.findModelById('RAT',this.formModel).hidden = false;  
              // this.SaveFlag=false
            }
          }
        }, {
          key: "InsertApplianceNew",
          value: function InsertApplianceNew() {
            this.storage.set(this.data['JOBGUID'], JSON.stringify(this.formModel));
            this.apiGenerate.showToast('Changes Saved.', 'danger');
          }
        }]);

        return TesteditPage;
      }();

      _TesteditPage.ctorParameters = function () {
        return [{
          type: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__.DynamicFormService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage
        }];
      };

      _TesteditPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-testedit',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testedit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_testedit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TesteditPage);
      /***/
    },

    /***/
    60605:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/testedit/testedit.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title > Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=true>\n \n\n  <form  [formGroup]=\"formGroup\"  >\n\n    <dynamic-ionic-form    [group]=\"formGroup\"           \n                           [model]=\"formModel\"                         \n                           (change)=\"onChange($event)\">\n    </dynamic-ionic-form>\n\n</form>\n\n<p [hidden]=\"decimalver\" > value should be of format 0.0001</p>\n    <p [hidden]=\"hunver\" > value should be of format 100 </p>\n\n<ion-button color=\"secondary\" expand=\"block\" [hidden]=false (click)=\"InsertApplianceNew()\"> save </ion-button>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    79166:
    /*!*********************************************!*\
      !*** ./src/app/testedit/testedit.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = "p {\n  color: red;\n  align-content: center;\n  width: -moz-max-content;\n  width: max-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0oiLCJmaWxlIjoidGVzdGVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_testedit_testedit_module_ts-es5.js.map