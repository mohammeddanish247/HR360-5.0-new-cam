(function () {
  "use strict";

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_test_test_module_ts"], {
    /***/
    89705:
    /*!***************************************************************************************!*\
      !*** ./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core-select.js ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormlySelectModule": function FormlySelectModule() {
          return (
            /* binding */
            _FormlySelectModule
          );
        },

        /* harmony export */
        "FormlySelectOptionsPipe": function FormlySelectOptionsPipe() {
          return (
            /* binding */
            _FormlySelectOptionsPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      25160);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlySelectOptionsPipe = /*#__PURE__*/function () {
        function _FormlySelectOptionsPipe() {
          _classCallCheck(this, _FormlySelectOptionsPipe);
        }

        _createClass(_FormlySelectOptionsPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} options
           * @param {?=} field
           * @return {?}
           */
          function transform(options, field) {
            var _this = this;

            if (!(options instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable)) {
              options = this.observableOf(options, field);
            } else {
              this.dispose();
            }

            return (
              /** @type {?} */
              options.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return _this.toOptions(value, field || {});
              }))
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dispose();
          }
          /**
           * @private
           * @param {?} options
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "toOptions",
          value: function toOptions(options, field) {
            var _this2 = this;

            /** @type {?} */
            var gOptions = [];
            /** @type {?} */

            var groups = {};
            /** @type {?} */

            var to = field.templateOptions || {};
            to._flatOptions = true;
            options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (!_this2.getGroupProp(option, to)) {
                gOptions.push(_this2.toOption(option, to));
              } else {
                to._flatOptions = false;

                if (!groups[_this2.getGroupProp(option, to)]) {
                  groups[_this2.getGroupProp(option, to)] = [];
                  gOptions.push({
                    label: _this2.getGroupProp(option, to),
                    group: groups[_this2.getGroupProp(option, to)]
                  });
                }

                groups[_this2.getGroupProp(option, to)].push(_this2.toOption(option, to));
              }
            });
            return gOptions;
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "toOption",
          value: function toOption(item, to) {
            return {
              label: this.getLabelProp(item, to),
              value: this.getValueProp(item, to),
              disabled: this.getDisabledProp(item, to) || false
            };
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "getLabelProp",
          value: function getLabelProp(item, to) {
            if (typeof to.labelProp === 'function') {
              return to.labelProp(item);
            }

            if (this.shouldUseLegacyOption(item, to)) {
              console.warn("NgxFormly: legacy select option '{key, value}' is deprecated since v5.5, use '{value, label}' instead.");
              return item.value;
            }

            return item[to.labelProp || 'label'];
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "getValueProp",
          value: function getValueProp(item, to) {
            if (typeof to.valueProp === 'function') {
              return to.valueProp(item);
            }

            if (this.shouldUseLegacyOption(item, to)) {
              return item.key;
            }

            return item[to.valueProp || 'value'];
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "getDisabledProp",
          value: function getDisabledProp(item, to) {
            if (typeof to.disabledProp === 'function') {
              return to.disabledProp(item);
            }

            return item[to.disabledProp || 'disabled'];
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "getGroupProp",
          value: function getGroupProp(item, to) {
            if (typeof to.groupProp === 'function') {
              return to.groupProp(item);
            }

            return item[to.groupProp || 'group'];
          }
          /**
           * @private
           * @param {?} item
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "shouldUseLegacyOption",
          value: function shouldUseLegacyOption(item, to) {
            return !to.valueProp && !to.labelProp && item != null && typeof item === 'object' && 'key' in item && 'value' in item;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._options) {
              this._options.complete();

              this._options = null;
            }

            if (this._subscription) {
              this._subscription.unsubscribe();

              this._subscription = null;
            }
          }
          /**
           * @private
           * @param {?} options
           * @param {?=} f
           * @return {?}
           */

        }, {
          key: "observableOf",
          value: function observableOf(options, f) {
            var _this3 = this;

            this.dispose();

            if (f && f.options && f.options.fieldChanges) {
              this._subscription = f.options.fieldChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref) {
                var property = _ref.property,
                    type = _ref.type,
                    field = _ref.field;
                return type === 'expressionChanges' && property.indexOf('templateOptions.options') === 0 && field === f && Array.isArray(field.templateOptions.options) && !!_this3._options;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(
              /**
              * @return {?}
              */
              function () {
                return _this3._options.next(
                /** @type {?} */
                f.templateOptions.options);
              })).subscribe();
            }

            this._options = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(options);
            return this._options.asObservable();
          }
        }]);

        return _FormlySelectOptionsPipe;
      }();

      _FormlySelectOptionsPipe.ɵfac = function FormlySelectOptionsPipe_Factory(t) {
        return new (t || _FormlySelectOptionsPipe)();
      };

      _FormlySelectOptionsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefinePipe"]({
        name: "formlySelectOptions",
        type: _FormlySelectOptionsPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](_FormlySelectOptionsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Pipe,
          args: [{
            name: 'formlySelectOptions'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlySelectModule = /*#__PURE__*/_createClass(function _FormlySelectModule() {
        _classCallCheck(this, _FormlySelectModule);
      });

      _FormlySelectModule.ɵfac = function FormlySelectModule_Factory(t) {
        return new (t || _FormlySelectModule)();
      };

      _FormlySelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _FormlySelectModule
      });
      _FormlySelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](_FormlySelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
          args: [{
            declarations: [_FormlySelectOptionsPipe],
            exports: [_FormlySelectOptionsPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FormlySelectModule, {
          declarations: [_FormlySelectOptionsPipe],
          exports: [_FormlySelectOptionsPipe]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    75741:
    /*!********************************************************************************!*\
      !*** ./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormlyForm": function FormlyForm() {
          return (
            /* binding */
            _FormlyForm
          );
        },

        /* harmony export */
        "FormlyField": function FormlyField() {
          return (
            /* binding */
            _FormlyField
          );
        },

        /* harmony export */
        "FormlyAttributes": function FormlyAttributes() {
          return (
            /* binding */
            _FormlyAttributes
          );
        },

        /* harmony export */
        "FORMLY_CONFIG": function FORMLY_CONFIG() {
          return (
            /* binding */
            _FORMLY_CONFIG
          );
        },

        /* harmony export */
        "FormlyConfig": function FormlyConfig() {
          return (
            /* binding */
            _FormlyConfig
          );
        },

        /* harmony export */
        "FormlyFormBuilder": function FormlyFormBuilder() {
          return (
            /* binding */
            _FormlyFormBuilder
          );
        },

        /* harmony export */
        "FieldType": function FieldType() {
          return (
            /* binding */
            _FieldType
          );
        },

        /* harmony export */
        "Field": function Field() {
          return (
            /* binding */
            _Field
          );
        },

        /* harmony export */
        "FieldArrayType": function FieldArrayType() {
          return (
            /* binding */
            _FieldArrayType
          );
        },

        /* harmony export */
        "FieldWrapper": function FieldWrapper() {
          return (
            /* binding */
            _FieldWrapper
          );
        },

        /* harmony export */
        "FormlyModule": function FormlyModule() {
          return (
            /* binding */
            _FormlyModule
          );
        },

        /* harmony export */
        "ɵdefineHiddenProp": function ɵdefineHiddenProp() {
          return (
            /* binding */
            defineHiddenProp
          );
        },

        /* harmony export */
        "ɵreverseDeepMerge": function ɵreverseDeepMerge() {
          return (
            /* binding */
            reverseDeepMerge
          );
        },

        /* harmony export */
        "ɵgetFieldValue": function ɵgetFieldValue() {
          return (
            /* binding */
            getFieldValue
          );
        },

        /* harmony export */
        "ɵclone": function ɵclone() {
          return (
            /* binding */
            clone
          );
        },

        /* harmony export */
        "ɵwrapProperty": function ɵwrapProperty() {
          return (
            /* binding */
            wrapProperty
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            defaultFormlyConfig
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            CoreExtension
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            FieldExpressionExtension
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            FieldFormExtension
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            FieldValidationExtension
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            FormlyTemplateType
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            FormlyGroup
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            FormlyValidationMessage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      50760);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      64674);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      89919);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      25160);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} form
       * @param {?} callback
       * @return {?}
       */


      var _c0 = ["content"];

      function FormlyForm_formly_field_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 2);
        }

        if (rf & 2) {
          var field_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", field_r2.form)("options", field_r2.options)("model", field_r2.model)("field", field_r2);
        }
      }

      var _c1 = ["*"];
      var _c2 = ["container"];

      function FormlyField_ng_template_0_Template(rf, ctx) {}

      var _c3 = ["fieldComponent"];

      function FormlyGroup_formly_field_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 1);
        }

        if (rf & 2) {
          var f_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", f_r1);
        }
      }

      function disableTreeValidityCall(form, callback) {
        /** @type {?} */
        var _updateTreeValidity = form._updateTreeValidity.bind(form);

        form._updateTreeValidity =
        /**
        * @return {?}
        */
        function () {};

        callback();
        form._updateTreeValidity = _updateTreeValidity;
      }
      /**
       * @param {?} formId
       * @param {?} field
       * @param {?} index
       * @return {?}
       */


      function getFieldId(formId, field, index) {
        if (field.id) return field.id;
        /** @type {?} */

        var type = field.type;

        if (!type && field.template) {
          type = 'template';
        }

        if (isFunction(type)) {
          type =
          /** @type {?} */
          type.prototype.constructor.name;
        }

        return [formId, type, field.key, index].join('_');
      }
      /**
       * @param {?} field
       * @return {?}
       */


      function getKeyPath(field) {
        if (!field.key) {
          return [];
        }
        /* We store the keyPath in the field for performance reasons. This function will be called frequently. */


        if (!field._keyPath || field._keyPath.key !== field.key) {
          /** @type {?} */
          var path = [];

          if (typeof field.key === 'string') {
            /** @type {?} */
            var key = field.key.indexOf('[') === -1 ? field.key : field.key.replace(/\[(\w+)\]/g, '.$1');
            path = key.indexOf('.') !== -1 ? key.split('.') : [key];
          } else if (Array.isArray(field.key)) {
            path = field.key.slice(0);
          } else {
            path = ["".concat(field.key)];
          }

          field._keyPath = {
            key: field.key,
            path: path
          };
        }

        return field._keyPath.path.slice(0);
      }
      /** @type {?} */


      var FORMLY_VALIDATORS = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];
      /**
       * @param {?} field
       * @param {?} value
       * @return {?}
       */

      function assignFieldValue(field, value) {
        /** @type {?} */
        var paths = getKeyPath(field);

        if (paths.length === 0) {
          return;
        }
        /** @type {?} */


        var root = field;

        while (root.parent) {
          root = root.parent;
          paths = [].concat(_toConsumableArray(getKeyPath(root)), _toConsumableArray(paths));
        }

        if (value === undefined && field.resetOnHide) {
          /** @type {?} */
          var k = paths.pop();
          /** @type {?} */

          var m = paths.reduce(
          /**
          * @param {?} model
          * @param {?} path
          * @return {?}
          */
          function (model, path) {
            return model[path] || {};
          }, root.model);
          delete m[k];
          return;
        }

        assignModelValue(root.model, paths, value);
      }
      /**
       * @param {?} model
       * @param {?} paths
       * @param {?} value
       * @return {?}
       */


      function assignModelValue(model, paths, value) {
        for (var i = 0; i < paths.length - 1; i++) {
          /** @type {?} */
          var path = paths[i];

          if (!model[path] || !isObject(model[path])) {
            model[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
          }

          model = model[path];
        }

        model[paths[paths.length - 1]] = clone(value);
      }
      /**
       * @param {?} field
       * @return {?}
       */


      function getFieldValue(field) {
        /** @type {?} */
        var model = field.parent.model;

        var _iterator = _createForOfIteratorHelper(getKeyPath(field)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var path = _step.value;

            if (!model) {
              return model;
            }

            model = model[path];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return model;
      }
      /**
       * @param {?} dest
       * @param {...?} args
       * @return {?}
       */


      function reverseDeepMerge(dest) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        args.forEach(
        /**
        * @param {?} src
        * @return {?}
        */
        function (src) {
          for (var srcArg in src) {
            if (isNullOrUndefined(dest[srcArg]) || isBlankString(dest[srcArg])) {
              dest[srcArg] = clone(src[srcArg]);
            } else if (objAndSameType(dest[srcArg], src[srcArg])) {
              reverseDeepMerge(dest[srcArg], src[srcArg]);
            }
          }
        });
        return dest;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isNullOrUndefined(value) {
        return value === undefined || value === null;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isUndefined(value) {
        return value === undefined;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isBlankString(value) {
        return value === '';
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isFunction(value) {
        return typeof value === 'function';
      }
      /**
       * @param {?} obj1
       * @param {?} obj2
       * @return {?}
       */


      function objAndSameType(obj1, obj2) {
        return isObject(obj1) && isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) && !(Array.isArray(obj1) || Array.isArray(obj2));
      }
      /**
       * @param {?} x
       * @return {?}
       */


      function isObject(x) {
        return x != null && typeof x === 'object';
      }
      /**
       * @param {?} obj
       * @return {?}
       */


      function isPromise(obj) {
        return !!obj && typeof obj.then === 'function';
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function clone(value) {
        if (!isObject(value) || (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(value) || value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef ||
        /* instanceof SafeHtmlImpl */
        value.changingThisBreaksApplicationSecurity || ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1) {
          return value;
        }

        if (value instanceof Set) {
          return new Set(value);
        }

        if (value instanceof Map) {
          return new Map(value);
        } // https://github.com/moment/moment/blob/master/moment.js#L252


        if (value._isAMomentObject && isFunction(value.clone)) {
          return value.clone();
        }

        if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.AbstractControl) {
          return null;
        }

        if (value instanceof Date) {
          return new Date(value.getTime());
        }

        if (Array.isArray(value)) {
          return value.slice(0).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return clone(v);
          });
        } // best way to clone a js object maybe
        // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance

        /** @type {?} */


        var proto = Object.getPrototypeOf(value);
        /** @type {?} */

        var c = Object.create(proto);
        c = Object.setPrototypeOf(c, proto); // need to make a deep copy so we dont use Object.assign
        // also Object.assign wont copy property descriptor exactly

        return Object.keys(value).reduce(
        /**
        * @param {?} newVal
        * @param {?} prop
        * @return {?}
        */
        function (newVal, prop) {
          /** @type {?} */
          var propDesc = Object.getOwnPropertyDescriptor(value, prop);

          if (propDesc.get) {
            Object.defineProperty(newVal, prop, propDesc);
          } else {
            newVal[prop] = clone(value[prop]);
          }

          return newVal;
        }, c);
      }
      /**
       * @param {?} field
       * @param {?} prop
       * @param {?} defaultValue
       * @return {?}
       */


      function defineHiddenProp(field, prop, defaultValue) {
        Object.defineProperty(field, prop, {
          enumerable: false,
          writable: true,
          configurable: true
        });
        field[prop] = defaultValue;
      }
      /**
       * @template T
       * @param {?} o
       * @param {?} prop
       * @param {?} setFn
       * @return {?}
       */


      function wrapProperty(o, prop, setFn) {
        if (!o._observers) {
          defineHiddenProp(o, '_observers', {});
        }

        if (!o._observers[prop]) {
          o._observers[prop] = [];
        }
        /** @type {?} */


        var fns = o._observers[prop];

        if (fns.indexOf(setFn) === -1) {
          fns.push(setFn);
          setFn({
            currentValue: o[prop],
            firstChange: true
          });

          if (fns.length === 1) {
            defineHiddenProp(o, "___$".concat(prop), o[prop]);
            Object.defineProperty(o, prop, {
              configurable: true,
              get:
              /**
              * @return {?}
              */
              function get() {
                return o["___$".concat(prop)];
              },
              set:
              /**
              * @param {?} currentValue
              * @return {?}
              */
              function set(currentValue) {
                if (currentValue !== o["___$".concat(prop)]) {
                  /** @type {?} */
                  var previousValue = o["___$".concat(prop)];
                  o["___$".concat(prop)] = currentValue;
                  fns.forEach(
                  /**
                  * @param {?} changeFn
                  * @return {?}
                  */
                  function (changeFn) {
                    return changeFn({
                      previousValue: previousValue,
                      currentValue: currentValue,
                      firstChange: false
                    });
                  });
                }
              }
            });
          }
        }

        return (
          /**
          * @return {?}
          */
          function () {
            return fns.splice(fns.indexOf(setFn), 1);
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _FORMLY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FORMLY_CONFIG');
      /**
       * Maintains list of formly field directive types. This can be used to register new field templates.
       */


      var _FormlyConfig = /*#__PURE__*/function () {
        function _FormlyConfig() {
          _classCallCheck(this, _FormlyConfig);

          this.types = {};
          this.validators = {};
          this.wrappers = {};
          this.messages = {};
          this.templateManipulators = {
            preWrapper: [],
            postWrapper: []
          };
          this.extras = {
            checkExpressionOn: 'changeDetectionCheck',
            lazyRender: false,
            showError:
            /**
            * @param {?} field
            * @return {?}
            */
            function showError(field) {
              return field.formControl && field.formControl.invalid && (field.formControl.touched || field.options.parentForm && field.options.parentForm.submitted || !!(field.field.validation && field.field.validation.show));
            }
          };
          this.extensions = {};
        }
        /**
         * @param {?} config
         * @return {?}
         */


        _createClass(_FormlyConfig, [{
          key: "addConfig",
          value: function addConfig(config) {
            var _this4 = this;

            if (config.types) {
              config.types.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                return _this4.setType(type);
              });
            }

            if (config.validators) {
              config.validators.forEach(
              /**
              * @param {?} validator
              * @return {?}
              */
              function (validator) {
                return _this4.setValidator(validator);
              });
            }

            if (config.wrappers) {
              config.wrappers.forEach(
              /**
              * @param {?} wrapper
              * @return {?}
              */
              function (wrapper) {
                return _this4.setWrapper(wrapper);
              });
            }

            if (config.manipulators) {
              console.warn("NgxFormly: passing 'manipulators' config is deprecated, use custom extension instead.");
              config.manipulators.forEach(
              /**
              * @param {?} manipulator
              * @return {?}
              */
              function (manipulator) {
                return _this4.setManipulator(manipulator);
              });
            }

            if (config.validationMessages) {
              config.validationMessages.forEach(
              /**
              * @param {?} validation
              * @return {?}
              */
              function (validation) {
                return _this4.addValidatorMessage(validation.name, validation.message);
              });
            }

            if (config.extensions) {
              config.extensions.forEach(
              /**
              * @param {?} c
              * @return {?}
              */
              function (c) {
                return _this4.extensions[c.name] = c.extension;
              });
            }

            if (config.extras) {
              this.extras = Object.assign({}, this.extras, config.extras);
            }
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "setType",
          value: function setType(options) {
            var _this5 = this;

            if (Array.isArray(options)) {
              options.forEach(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return _this5.setType(option);
              });
            } else {
              if (!this.types[options.name]) {
                this.types[options.name] =
                /** @type {?} */
                {
                  name: options.name
                };
              }

              ['component', 'extends', 'defaultOptions', 'wrappers'].forEach(
              /**
              * @param {?} prop
              * @return {?}
              */
              function (prop) {
                if (options.hasOwnProperty(prop)) {
                  _this5.types[options.name][prop] = options[prop];
                }
              });
            }
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "getType",
          value: function getType(name) {
            if (!this.types[name]) {
              throw new Error("[Formly Error] The type \"".concat(name, "\" could not be found. Please make sure that is registered through the FormlyModule declaration."));
            }

            this.mergeExtendedType(name);
            return this.types[name];
          }
          /**
           * @param {?=} field
           * @return {?}
           */

        }, {
          key: "getMergedField",
          value: function getMergedField() {
            var _this6 = this;

            var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            /** @type {?} */
            var type = this.getType(field.type);

            if (type.defaultOptions) {
              reverseDeepMerge(field, type.defaultOptions);
            }
            /** @type {?} */


            var extendDefaults = type["extends"] && this.getType(type["extends"]).defaultOptions;

            if (extendDefaults) {
              reverseDeepMerge(field, extendDefaults);
            }

            if (field && field.optionsTypes) {
              field.optionsTypes.forEach(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                /** @type {?} */
                var defaultOptions = _this6.getType(option).defaultOptions;

                if (defaultOptions) {
                  reverseDeepMerge(field, defaultOptions);
                }
              });
            }
            /** @type {?} */


            var componentRef = this.resolveFieldTypeRef(field);

            if (componentRef && componentRef.instance && componentRef.instance.defaultOptions) {
              reverseDeepMerge(field, componentRef.instance.defaultOptions);
            }

            if (!field.wrappers && type.wrappers) {
              field.wrappers = _toConsumableArray(type.wrappers);
            }
          }
          /**
           * \@internal
           * @param {?=} field
           * @return {?}
           */

        }, {
          key: "resolveFieldTypeRef",
          value: function resolveFieldTypeRef() {
            var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!field.type) {
              return null;
            }
            /** @type {?} */


            var type = this.getType(field.type);

            if (!type.component || type['_componentRef']) {
              return type['_componentRef'];
            }

            var _field$parent$options = field.parent.options,
                _resolver = _field$parent$options._resolver,
                _injector = _field$parent$options._injector;
            /** @type {?} */

            var componentRef = _resolver.resolveComponentFactory(type.component).create(_injector);

            defineHiddenProp(type, '_componentRef', componentRef);
            componentRef.destroy();
            return type['_componentRef'];
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "setWrapper",
          value: function setWrapper(options) {
            var _this7 = this;

            this.wrappers[options.name] = options;

            if (options.types) {
              options.types.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                _this7.setTypeWrapper(type, options.name);
              });
            }
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "getWrapper",
          value: function getWrapper(name) {
            if (!this.wrappers[name]) {
              throw new Error("[Formly Error] The wrapper \"".concat(name, "\" could not be found. Please make sure that is registered through the FormlyModule declaration."));
            }

            return this.wrappers[name];
          }
          /**
           * @param {?} type
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "setTypeWrapper",
          value: function setTypeWrapper(type, name) {
            if (!this.types[type]) {
              this.types[type] =
              /** @type {?} */
              {};
            }

            if (!this.types[type].wrappers) {
              this.types[type].wrappers = [];
            }

            if (this.types[type].wrappers.indexOf(name) === -1) {
              this.types[type].wrappers.push(name);
            }
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "setValidator",
          value: function setValidator(options) {
            this.validators[options.name] = options;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "getValidator",
          value: function getValidator(name) {
            if (!this.validators[name]) {
              throw new Error("[Formly Error] The validator \"".concat(name, "\" could not be found. Please make sure that is registered through the FormlyModule declaration."));
            }

            return this.validators[name];
          }
          /**
           * @param {?} name
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "addValidatorMessage",
          value: function addValidatorMessage(name, message) {
            this.messages[name] = message;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "getValidatorMessage",
          value: function getValidatorMessage(name) {
            return this.messages[name];
          }
          /**
           * @param {?} manipulator
           * @return {?}
           */

        }, {
          key: "setManipulator",
          value: function setManipulator(manipulator) {
            new manipulator["class"]()[manipulator.method](this);
          }
          /**
           * @private
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "mergeExtendedType",
          value: function mergeExtendedType(name) {
            if (!this.types[name]["extends"]) {
              return;
            }
            /** @type {?} */


            var extendedType = this.getType(this.types[name]["extends"]);

            if (!this.types[name].component) {
              this.types[name].component = extendedType.component;
            }

            if (!this.types[name].wrappers) {
              this.types[name].wrappers = extendedType.wrappers;
            }
          }
        }]);

        return _FormlyConfig;
      }();

      _FormlyConfig.ɵfac = function FormlyConfig_Factory(t) {
        return new (t || _FormlyConfig)();
      };

      _FormlyConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _FormlyConfig,
        factory: _FormlyConfig.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      _FormlyConfig.ngInjectableDef = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({
        factory: function FormlyConfig_Factory() {
          return new _FormlyConfig();
        },
        token: _FormlyConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFormBuilder = /*#__PURE__*/function () {
        /**
         * @param {?} formlyConfig
         * @param {?} componentFactoryResolver
         * @param {?} injector
         */
        function _FormlyFormBuilder(formlyConfig, componentFactoryResolver, injector) {
          _classCallCheck(this, _FormlyFormBuilder);

          this.formlyConfig = formlyConfig;
          this.componentFactoryResolver = componentFactoryResolver;
          this.injector = injector;
        }
        /**
         * @param {?} formControl
         * @param {?=} fieldGroup
         * @param {?=} model
         * @param {?=} options
         * @return {?}
         */


        _createClass(_FormlyFormBuilder, [{
          key: "buildForm",
          value: function buildForm(formControl) {
            var _this8 = this;

            var fieldGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var model = arguments.length > 2 ? arguments[2] : undefined;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (!this.formlyConfig.extensions.core) {
              throw new Error('NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.');
            }
            /** @type {?} */


            var field = {
              fieldGroup: fieldGroup,
              model: model,
              formControl: formControl,
              options: this._setOptions(options)
            };
            disableTreeValidityCall(formControl,
            /**
            * @return {?}
            */
            function () {
              _this8._buildForm(field);

              field.options._checkField(field, true);
            });
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "_buildForm",
          value: function _buildForm(field) {
            var _this9 = this;

            this.getExtensions().forEach(
            /**
            * @param {?} extension
            * @return {?}
            */
            function (extension) {
              return extension.prePopulate && extension.prePopulate(field);
            });
            this.getExtensions().forEach(
            /**
            * @param {?} extension
            * @return {?}
            */
            function (extension) {
              return extension.onPopulate && extension.onPopulate(field);
            });

            if (field.fieldGroup) {
              field.fieldGroup.forEach(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return _this9._buildForm(f);
              });
            }

            this.getExtensions().forEach(
            /**
            * @param {?} extension
            * @return {?}
            */
            function (extension) {
              return extension.postPopulate && extension.postPopulate(field);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getExtensions",
          value: function getExtensions() {
            var _this10 = this;

            return Object.keys(this.formlyConfig.extensions).map(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              return _this10.formlyConfig.extensions[name];
            });
          }
          /**
           * @private
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_setOptions",
          value: function _setOptions(options) {
            var _this11 = this;

            options = options || {};
            options.formState = options.formState || {};

            if (!options.showError) {
              options.showError = this.formlyConfig.extras.showError;
            }

            if (!options.fieldChanges) {
              defineHiddenProp(options, 'fieldChanges', new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject());
            }

            if (!options._resolver) {
              defineHiddenProp(options, '_resolver', this.componentFactoryResolver);
            }

            if (!options._injector) {
              defineHiddenProp(options, '_injector', this.injector);
            }

            if (!options._hiddenFieldsForCheck) {
              options._hiddenFieldsForCheck = [];
            }

            if (!options._markForCheck) {
              options._markForCheck =
              /**
              * @param {?} field
              * @return {?}
              */
              function (field) {
                if (field._componentRefs) {
                  field._componentRefs.forEach(
                  /**
                  * @param {?} ref
                  * @return {?}
                  */
                  function (ref) {
                    // NOTE: we cannot use ref.changeDetectorRef, see https://github.com/ngx-formly/ngx-formly/issues/2191

                    /** @type {?} */
                    var changeDetectorRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
                    changeDetectorRef.markForCheck();
                  });
                }

                if (field.fieldGroup) {
                  field.fieldGroup.forEach(
                  /**
                  * @param {?} f
                  * @return {?}
                  */
                  function (f) {
                    return options._markForCheck(f);
                  });
                }
              };
            }

            if (!options._buildField) {
              options._buildField =
              /**
              * @param {?} field
              * @return {?}
              */
              function (field) {
                _this11._setOptions(field.options);

                _this11._buildForm(field);

                /** @type {?} */
                field.options._checkField(field, true);

                return field;
              };
            }

            return options;
          }
        }]);

        return _FormlyFormBuilder;
      }();

      _FormlyFormBuilder.ɵfac = function FormlyFormBuilder_Factory(t) {
        return new (t || _FormlyFormBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _FormlyFormBuilder.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _FormlyFormBuilder,
        factory: _FormlyFormBuilder.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      _FormlyFormBuilder.ctorParameters = function () {
        return [{
          type: _FormlyConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
        }];
      };
      /** @nocollapse */


      _FormlyFormBuilder.ngInjectableDef = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({
        factory: function FormlyFormBuilder_Factory() {
          return new _FormlyFormBuilder((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_FormlyConfig), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.INJECTOR));
        },
        token: _FormlyFormBuilder,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _FormlyConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} field
       * @param {?=} emitEvent
       * @return {?}
       */


      function unregisterControl(field) {
        var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        /** @type {?} */
        var control = field.formControl;
        /** @type {?} */

        var fieldIndex = control['_fields'] ? control['_fields'].indexOf(field) : -1;

        if (fieldIndex !== -1) {
          control['_fields'].splice(fieldIndex, 1);
        }
        /** @type {?} */


        var form =
        /** @type {?} */
        control.parent;

        if (!form) {
          return;
        }
        /** @type {?} */


        var opts = {
          emitEvent: emitEvent
        };

        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
          /** @type {?} */
          var key = form.controls.findIndex(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c === control;
          });

          if (key !== -1) {
            updateControl(form, opts,
            /**
            * @return {?}
            */
            function () {
              return form.removeAt(key);
            });
          }
        } else if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup) {
          /** @type {?} */
          var paths = getKeyPath(field);
          /** @type {?} */

          var _key2 = paths[paths.length - 1];

          if (form.get([_key2]) === control) {
            updateControl(form, opts,
            /**
            * @return {?}
            */
            function () {
              return form.removeControl(_key2);
            });
          }
        }

        control.setParent(null);
      }
      /**
       * @param {?} field
       * @return {?}
       */


      function findControl(field) {
        if (field.formControl) {
          return field.formControl;
        }

        if (field['shareFormControl'] === false) {
          return null;
        }
        /** @type {?} */


        var form =
        /** @type {?} */
        field.parent.formControl;
        return form ? form.get(getKeyPath(field)) : null;
      }
      /**
       * @param {?} field
       * @param {?=} control
       * @param {?=} emitEvent
       * @return {?}
       */


      function registerControl(field, control) {
        var emitEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        control = control || field.formControl;

        if (!control['_fields']) {
          defineHiddenProp(control, '_fields', []);
        }

        if (control['_fields'].indexOf(field) === -1) {
          control['_fields'].push(field);
        }

        if (!field.formControl && control) {
          defineHiddenProp(field, 'formControl', control);
          control.setValidators(null);
          control.setAsyncValidators(null);
          field.templateOptions.disabled = !!field.templateOptions.disabled;
          wrapProperty(field.templateOptions, 'disabled',
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref2) {
            var firstChange = _ref2.firstChange,
                currentValue = _ref2.currentValue;

            if (!firstChange) {
              currentValue ? field.formControl.disable() : field.formControl.enable();
            }
          });

          if (control.registerOnDisabledChange) {
            control.registerOnDisabledChange(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              field.templateOptions['___$disabled'] = value; // TODO remove in V6

              field.options && field.options._markForCheck(field);
            });
          }
        }
        /** @type {?} */


        var parent =
        /** @type {?} */
        field.parent.formControl;

        if (!parent || !field.key) {
          return;
        }
        /** @type {?} */


        var paths = getKeyPath(field);
        /** @type {?} */

        var value = getFieldValue(field);

        if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value)) && control.value !== value && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
          control.patchValue(value);
        }

        var _loop = function _loop(i) {
          /** @type {?} */
          var path = paths[i];

          if (!parent.get([path])) {
            updateControl(parent, {
              emitEvent: emitEvent
            },
            /**
            * @return {?}
            */
            function () {
              return parent.setControl(path, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}));
            });
          }

          parent =
          /** @type {?} */
          parent.get([path]);
        };

        for (var i = 0; i < paths.length - 1; i++) {
          _loop(i);
        }
        /** @type {?} */


        var key = paths[paths.length - 1];

        if (!field._hide && parent.get([key]) !== control) {
          updateControl(parent, {
            emitEvent: emitEvent
          },
          /**
          * @return {?}
          */
          function () {
            return parent.setControl(key, control);
          });
        }
      }
      /**
       * @param {?} c
       * @param {?=} onlySelf
       * @return {?}
       */


      function updateValidity(c) {
        var onlySelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        /** @type {?} */
        var status = c.status;
        /** @type {?} */

        var value = c.value;
        c.updateValueAndValidity({
          emitEvent: false,
          onlySelf: onlySelf
        });

        if (status !== c.status) {
          /** @type {?} */
          c.statusChanges.emit(c.status);
        }

        if (value !== c.value) {
          /** @type {?} */
          c.valueChanges.emit(c.value);
        }
      }
      /**
       * @param {?} form
       * @param {?} opts
       * @param {?} action
       * @return {?}
       */


      function updateControl(form, opts, action) {
        /**
         *  workaround for https://github.com/angular/angular/issues/27679
         */
        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup && !form['__patchForEachChild']) {
          defineHiddenProp(form, '__patchForEachChild', true);

          /** @type {?} */
          form._forEachChild =
          /**
          * @param {?} cb
          * @return {?}
          */
          function (cb) {
            Object.keys(form.controls).forEach(
            /**
            * @param {?} k
            * @return {?}
            */
            function (k) {
              return form.controls[k] && cb(form.controls[k], k);
            });
          };
        }
        /**
         * workaround for https://github.com/angular/angular/issues/20439
         * @type {?}
         */


        var updateValueAndValidity = form.updateValueAndValidity.bind(form);

        if (opts.emitEvent === false) {
          form.updateValueAndValidity =
          /**
          * @param {?} opts
          * @return {?}
          */
          function (opts) {
            updateValueAndValidity(Object.assign({}, opts || {}, {
              emitEvent: false
            }));
          };
        }

        action();

        if (opts.emitEvent === false) {
          form.updateValueAndValidity = updateValueAndValidity;
        }
      }
      /**
       * @param {?} form
       * @return {?}
       */


      function clearControl(form) {
        form['_fields'] && delete form['_fields'];
        form.setValidators(null);
        form.setAsyncValidators(null);

        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup || form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
          Object.keys(form.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            return clearControl(form.controls[k]);
          });
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyForm = /*#__PURE__*/function () {
        /**
         * @param {?} formlyBuilder
         * @param {?} formlyConfig
         * @param {?} ngZone
         * @param {?} immutable
         * @param {?} parentFormGroup
         */
        function _FormlyForm(formlyBuilder, formlyConfig, ngZone, // tslint:disable-next-line
        immutable, parentFormGroup) {
          var _this12 = this;

          _classCallCheck(this, _FormlyForm);

          this.formlyBuilder = formlyBuilder;
          this.formlyConfig = formlyConfig;
          this.ngZone = ngZone;
          this.parentFormGroup = parentFormGroup;
          this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.immutable = false;
          this._modelChangeValue = {};
          this.modelChangeSubs = [];
          this.modelChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.modelChangeSub = this.modelChange$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(
          /**
          * @return {?}
          */
          function () {
            return _this12.ngZone.onStable.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1));
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this12.ngZone.runGuarded(
            /**
            * @return {?}
            */
            function () {
              // runGuarded is used to keep the expression changes in-sync
              // https://github.com/ngx-formly/ngx-formly/issues/2095
              _this12.checkExpressionChange();

              _this12.modelChange.emit(_this12._modelChangeValue = clone(_this12.model));
            });
          });

          if (immutable !== null) {
            console.warn("NgxFormly: passing 'immutable' attribute to 'formly-form' component is deprecated since v5.5, enable immutable mode through NgModule declaration instead.");
          }

          this.immutable = immutable !== null || !!formlyConfig.extras.immutable;
        }
        /**
         * @param {?} model
         * @return {?}
         */


        _createClass(_FormlyForm, [{
          key: "model",
          get:
          /**
           * @return {?}
           */
          function get() {
            if (!this._model) {
              this._model = {};
            }

            return this._model;
          }
          /**
           * @param {?} fields
           * @return {?}
           */
          ,
          set: function set(model) {
            this._model = this.immutable ? clone(model) : model;
          }
        }, {
          key: "fields",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._fields || [];
          }
          /**
           * @param {?} options
           * @return {?}
           */
          ,
          set: function set(fields) {
            this._fields = this.immutable ? clone(fields) : fields;
          }
        }, {
          key: "options",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._options;
          }
          /**
           * @param {?} content
           * @return {?}
           */
          ,
          set: function set(options) {
            this._options = this.immutable ? clone(options) : options;
          }
        }, {
          key: "content",
          set: function set(content) {
            if (content) {
              /** @type {?} */
              var hasContent = false;
              /** @type {?} */

              var node = content.nativeElement.nextSibling;

              while (node && !hasContent) {
                if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim() !== '') {
                  hasContent = true;
                }

                node = node.nextSibling;
              }

              if (hasContent) {
                console.warn("NgxFormly: content projection for 'formly-form' component is deprecated since v5.5, you should avoid passing content inside the 'formly-form' tag.");
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.formlyConfig.extras.checkExpressionOn === 'changeDetectionCheck') {
              this.checkExpressionChange();
            }
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // https://github.com/ngx-formly/ngx-formly/issues/2294
            if (changes.model && this.field) {
              this.field.model = this.model;
            }

            if (changes.fields && this.form) {
              clearControl(this.form);
            }

            if (changes.fields || changes.form || changes.model && this._modelChangeValue !== changes.model.currentValue) {
              this.form = this.form || new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
              this.setOptions();
              this.options.updateInitialValue();
              this.clearModelSubscriptions();
              this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
              this.trackModelChanges(this.fields);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.modelChangeSub.unsubscribe();
            this.clearModelSubscriptions();
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "changeModel",
          value: function changeModel(_ref3) {
            var key = _ref3.key,
                value = _ref3.value,
                field = _ref3.field;
            assignFieldValue(field, value);
            this.modelChange$.next();
          }
          /**
           * @return {?}
           */

        }, {
          key: "setOptions",
          value: function setOptions() {
            var _this13 = this;

            if (!this.options) {
              this.options = {};
            }

            if (!this.options.resetModel) {
              this.options.resetModel =
              /**
              * @param {?=} model
              * @return {?}
              */
              function (model) {
                model = clone(isNullOrUndefined(model) ?
                /** @type {?} */
                _this13.options._initialModel : model);

                if (_this13.model) {
                  Object.keys(_this13.model).forEach(
                  /**
                  * @param {?} k
                  * @return {?}
                  */
                  function (k) {
                    return delete _this13.model[k];
                  });
                  Object.assign(_this13.model, model || {});
                }

                /** @type {?} */
                _this13.options._buildForm(); // we should call `NgForm::resetForm` to ensure changing `submitted` state after resetting form
                // but only when the current component is a root one.


                if (_this13.options.parentForm && _this13.options.parentForm.control === _this13.form) {
                  _this13.options.parentForm.resetForm(_this13.model);
                } else {
                  _this13.form.reset(_this13.model);
                }
              };
            }

            if (!this.options.parentForm && this.parentFormGroup) {
              defineHiddenProp(this.options, 'parentForm', this.parentFormGroup);
              wrapProperty(this.options.parentForm, 'submitted',
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref4) {
                var firstChange = _ref4.firstChange;

                if (!firstChange) {
                  _this13.checkExpressionChange();

                  /** @type {?} */
                  _this13.options._markForCheck({
                    fieldGroup: _this13.fields,
                    model: _this13.model,
                    formControl: _this13.form,
                    options: _this13.options
                  });
                }
              });
            }

            if (!this.options.updateInitialValue) {
              this.options.updateInitialValue =
              /**
              * @return {?}
              */
              function () {
                return (
                  /** @type {?} */
                  _this13.options._initialModel = clone(_this13.model)
                );
              };
            }

            if (!
            /** @type {?} */
            this.options._buildForm) {
              /** @type {?} */
              this.options._buildForm =
              /**
              * @param {?=} emitModelChange
              * @return {?}
              */
              function () {
                var emitModelChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                _this13.clearModelSubscriptions();

                _this13.formlyBuilder.buildForm(_this13.form, _this13.fields, _this13.model, _this13.options);

                _this13.trackModelChanges(_this13.fields);

                if (emitModelChange) {
                  _this13.modelChange.emit(_this13._modelChangeValue = clone(_this13.model));
                }
              };
            }

            if (!
            /** @type {?} */
            this.options._trackModelChanges) {
              /** @type {?} */
              this.options._trackModelChanges =
              /**
              * @param {?=} emitModelChange
              * @return {?}
              */
              function () {
                var emitModelChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                _this13.clearModelSubscriptions();

                _this13.trackModelChanges(_this13.fields);

                if (emitModelChange) {
                  _this13.modelChange.emit(_this13._modelChangeValue = clone(_this13.model));
                }
              };
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkExpressionChange",
          value: function checkExpressionChange() {
            if (this.options &&
            /** @type {?} */
            this.options._checkField) {
              /** @type {?} */
              this.options._checkField({
                fieldGroup: this.fields,
                model: this.model,
                formControl: this.form,
                options: this.options
              });
            }
          }
          /**
           * @private
           * @param {?} fields
           * @param {?=} rootKey
           * @return {?}
           */

        }, {
          key: "trackModelChanges",
          value: function trackModelChanges(fields) {
            var _this14 = this;

            var rootKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            fields.forEach(
            /**
            * @param {?} field
            * @return {?}
            */
            function (field) {
              if (field.key && !field.fieldGroup && field.formControl) {
                /** @type {?} */
                var control = field.formControl;
                /** @type {?} */

                var valueChanges = control.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(
                /**
                * @param {?} x
                * @param {?} y
                * @return {?}
                */
                function (x, y) {
                  if (x !== y || Array.isArray(x) || isObject(x)) {
                    return false;
                  }

                  return true;
                }));
                var _field$modelOptions = field.modelOptions,
                    updateOn = _field$modelOptions.updateOn,
                    debounce = _field$modelOptions.debounce;

                if ((!updateOn || updateOn === 'change') && debounce && debounce["default"] > 0) {
                  valueChanges = control.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(debounce["default"]));
                }

                _this14.modelChangeSubs.push(valueChanges.subscribe(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  // workaround for https://github.com/angular/angular/issues/13792
                  if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl && control['_fields'] && control['_fields'].length > 1) {
                    control.patchValue(value, {
                      emitEvent: false,
                      onlySelf: true
                    });
                  }

                  if (field.parsers && field.parsers.length > 0) {
                    field.parsers.forEach(
                    /**
                    * @param {?} parserFn
                    * @return {?}
                    */
                    function (parserFn) {
                      return value = parserFn(value);
                    });
                  }

                  _this14.changeModel({
                    key: [].concat(_toConsumableArray(rootKey), _toConsumableArray(getKeyPath(field))).join('.'),
                    value: value,
                    field: field
                  });
                })); // workaround for v5 (https://github.com/ngx-formly/ngx-formly/issues/2061)

                /** @type {?} */


                var observers = control.valueChanges['observers'];

                if (observers && observers.length > 1) {
                  observers.unshift(observers.pop());
                }
              }

              if (field.fieldGroup && field.fieldGroup.length > 0) {
                _this14.trackModelChanges(field.fieldGroup, field.key ? [].concat(_toConsumableArray(rootKey), _toConsumableArray(getKeyPath(field))) : rootKey);
              }
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "clearModelSubscriptions",
          value: function clearModelSubscriptions() {
            this.modelChangeSubs.forEach(
            /**
            * @param {?} sub
            * @return {?}
            */
            function (sub) {
              return sub.unsubscribe();
            });
            this.modelChangeSubs = [];
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "field",
          get: function get() {
            return this.fields && this.fields[0] && this.fields[0].parent;
          }
        }]);

        return _FormlyForm;
      }();

      _FormlyForm.ɵfac = function FormlyForm_Factory(t) {
        return new (t || _FormlyForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FormlyFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('immutable'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, 8));
      };

      _FormlyForm.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyForm,
        selectors: [["formly-form"]],
        viewQuery: function FormlyForm_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          model: "model",
          fields: "fields",
          options: "options",
          form: "form"
        },
        outputs: {
          modelChange: "modelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_FormlyFormBuilder]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 1,
        consts: [["hide-deprecation", "", 3, "form", "options", "model", "field", 4, "ngFor", "ngForOf"], ["content", ""], ["hide-deprecation", "", 3, "form", "options", "model", "field"]],
        template: function FormlyForm_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyForm_formly_field_0_Template, 1, 4, "formly-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _FormlyField];
        },
        encapsulation: 2
      });
      /** @nocollapse */

      _FormlyForm.ctorParameters = function () {
        return [{
          type: _FormlyFormBuilder
        }, {
          type: _FormlyConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['immutable']
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _FormlyForm.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fields: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        modelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['content']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-form',
            template: "\n    <formly-field *ngFor=\"let field of fields\"\n      hide-deprecation\n      [form]=\"field.form\"\n      [options]=\"field.options\"\n      [model]=\"field.model\"\n      [field]=\"field\">\n    </formly-field>\n    <ng-container #content>\n      <ng-content></ng-content>\n    </ng-container>\n  ",
            providers: [_FormlyFormBuilder]
          }]
        }], function () {
          return [{
            type: _FormlyFormBuilder
          }, {
            type: _FormlyConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['immutable']
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          modelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyField = /*#__PURE__*/function () {
        /**
         * @param {?} formlyConfig
         * @param {?} renderer
         * @param {?} resolver
         * @param {?} elementRef
         * @param {?} hideDeprecation
         */
        function _FormlyField(formlyConfig, renderer, resolver, elementRef, // tslint:disable-next-line
        hideDeprecation) {
          _classCallCheck(this, _FormlyField);

          this.formlyConfig = formlyConfig;
          this.renderer = renderer;
          this.resolver = resolver;
          this.elementRef = elementRef;
          this.warnDeprecation = false;
          this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.hostObservers = [];
          this.componentRefs = [];
          this.hooksObservers = [];
          this.detectFieldBuild = false;
          this.warnDeprecation = hideDeprecation === null;
        }
        /**
         * @param {?} m
         * @return {?}
         */


        _createClass(_FormlyField, [{
          key: "model",
          set: function set(m) {
            this.warnDeprecation && console.warn("NgxFormly: passing 'model' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "form",
          set: function set(form) {
            this.warnDeprecation && console.warn("NgxFormly: passing 'form' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "options",
          set: function set(options) {
            this.warnDeprecation && console.warn("NgxFormly: passing 'options' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.triggerHook('afterContentInit');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.triggerHook('afterContentChecked');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.triggerHook('afterViewInit');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.triggerHook('afterViewChecked');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.triggerHook('doCheck');

            if (this.detectFieldBuild && this.field && this.field.options) {
              this.render();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.triggerHook('onInit');
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.triggerHook('onChanges', changes);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resetRefs(this.field);
            this.hostObservers.forEach(
            /**
            * @param {?} unsubscribe
            * @return {?}
            */
            function (unsubscribe) {
              return unsubscribe();
            });
            this.hooksObservers.forEach(
            /**
            * @param {?} unsubscribe
            * @return {?}
            */
            function (unsubscribe) {
              return unsubscribe();
            });
            this.triggerHook('onDestroy');
          }
          /**
           * @private
           * @param {?} containerRef
           * @param {?} f
           * @param {?=} wrappers
           * @return {?}
           */

        }, {
          key: "renderField",
          value: function renderField(containerRef, f) {
            var _this15 = this;

            var wrappers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            if (this.containerRef === containerRef) {
              this.resetRefs(this.field);
              this.containerRef.clear();
              wrappers = this.field ? this.field.wrappers : [];
            }

            if (wrappers && wrappers.length > 0) {
              var _wrappers = wrappers,
                  _wrappers2 = _toArray(_wrappers),
                  wrapper = _wrappers2[0],
                  wps = _wrappers2.slice(1);

              var _this$formlyConfig$ge = this.formlyConfig.getWrapper(wrapper),
                  component = _this$formlyConfig$ge.component;
              /** @type {?} */


              var ref = containerRef.createComponent(this.resolver.resolveComponentFactory(component));
              this.attachComponentRef(ref, f);
              wrapProperty(ref.instance, 'fieldComponent',
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref5) {
                var firstChange = _ref5.firstChange,
                    previousValue = _ref5.previousValue,
                    currentValue = _ref5.currentValue;

                if (currentValue) {
                  if (previousValue && previousValue['_lContainer'] === currentValue['_lContainer']) {
                    return;
                  }
                  /** @type {?} */


                  var viewRef = previousValue ? previousValue.detach() : null;

                  if (viewRef && !viewRef.destroyed) {
                    currentValue.insert(viewRef);
                  } else {
                    _this15.renderField(currentValue, f, wps);
                  }

                  !firstChange && ref.changeDetectorRef.detectChanges();
                }
              });
            } else if (f && f.type) {
              var _this$formlyConfig$ge2 = this.formlyConfig.getType(f.type),
                  _component = _this$formlyConfig$ge2.component;
              /** @type {?} */


              var _ref6 = containerRef.createComponent(this.resolver.resolveComponentFactory(_component));

              this.attachComponentRef(_ref6, f);
            }
          }
          /**
           * @private
           * @param {?} name
           * @param {?=} changes
           * @return {?}
           */

        }, {
          key: "triggerHook",
          value: function triggerHook(name, changes) {
            if (this.field && this.field.hooks && this.field.hooks[name]) {
              if (!changes || changes.field) {
                /** @type {?} */
                var r = this.field.hooks[name](this.field);

                if ((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(r) && ['onInit', 'afterContentInit', 'afterViewInit'].indexOf(name) !== -1) {
                  /** @type {?} */
                  var sub = r.subscribe();
                  this.hooksObservers.push(
                  /**
                  * @return {?}
                  */
                  function () {
                    return sub.unsubscribe();
                  });
                }
              }
            }

            if (this.field && this.field.lifecycle && this.field.lifecycle[name]) {
              this.field.lifecycle[name](this.field.form, this.field, this.field.model, this.field.options);
            }

            if (name === 'onChanges' && changes.field) {
              this.resetRefs(changes.field.previousValue);
              this.render();
            }
          }
          /**
           * @private
           * @template T
           * @param {?} ref
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "attachComponentRef",
          value: function attachComponentRef(ref, field) {
            this.componentRefs.push(ref);

            field._componentRefs.push(ref);

            Object.assign(ref.instance, {
              field: field
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "render",
          value: function render() {
            var _this16 = this;

            if (!this.field) {
              return;
            } // require Formly build


            if (!this.field.options) {
              this.detectFieldBuild = true;
              return;
            }

            this.detectFieldBuild = false;
            this.hostObservers.forEach(
            /**
            * @param {?} unsubscribe
            * @return {?}
            */
            function (unsubscribe) {
              return unsubscribe();
            });
            this.hostObservers = [wrapProperty(this.field, 'hide',
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref7) {
              var firstChange = _ref7.firstChange,
                  currentValue = _ref7.currentValue;

              if (!firstChange || firstChange && currentValue) {
                _this16.renderer.setStyle(_this16.elementRef.nativeElement, 'display', currentValue ? 'none' : '');
              }

              if (!_this16.formlyConfig.extras.lazyRender) {
                firstChange && _this16.renderField(_this16.containerRef, _this16.field);
              } else {
                if (currentValue) {
                  _this16.containerRef.clear();

                  if (_this16.field.className) {
                    _this16.renderer.removeAttribute(_this16.elementRef.nativeElement, 'class');
                  }
                } else {
                  _this16.renderField(_this16.containerRef, _this16.field);

                  if (_this16.field.className) {
                    _this16.renderer.setAttribute(_this16.elementRef.nativeElement, 'class', _this16.field.className);
                  }
                }
              }
            }), wrapProperty(this.field, 'className',
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref8) {
              var firstChange = _ref8.firstChange,
                  currentValue = _ref8.currentValue;

              if ((!firstChange || firstChange && currentValue) && (!_this16.formlyConfig.extras.lazyRender || _this16.field.hide !== true)) {
                _this16.renderer.setAttribute(_this16.elementRef.nativeElement, 'class', currentValue);
              }
            })];
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "resetRefs",
          value: function resetRefs(field) {
            var _this17 = this;

            if (field) {
              if (field._componentRefs) {
                field._componentRefs = field._componentRefs.filter(
                /**
                * @param {?} ref
                * @return {?}
                */
                function (ref) {
                  return _this17.componentRefs.indexOf(ref) === -1;
                });
              } else {
                defineHiddenProp(this.field, '_componentRefs', []);
              }
            }

            this.componentRefs = [];
          }
        }]);

        return _FormlyField;
      }();

      _FormlyField.ɵfac = function FormlyField_Factory(t) {
        return new (t || _FormlyField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('hide-deprecation'));
      };

      _FormlyField.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyField,
        selectors: [["formly-field"]],
        viewQuery: function FormlyField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
          }
        },
        inputs: {
          model: "model",
          form: "form",
          options: "options",
          field: "field"
        },
        outputs: {
          modelChange: "modelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["container", ""]],
        template: function FormlyField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyField_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      _FormlyField.ctorParameters = function () {
        return [{
          type: _FormlyConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['hide-deprecation']
          }]
        }];
      };

      _FormlyField.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        modelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        containerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['container',
          /** @type {?} */
          {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field',
            template: "<ng-template #container></ng-template>"
          }]
        }], function () {
          return [{
            type: _FormlyConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['hide-deprecation']
            }]
          }];
        }, {
          modelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          containerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container',
            /** @type {?} */
            {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
              "static": true
            }]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyAttributes = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} elementRef
         * @param {?} _document
         */
        function _FormlyAttributes(renderer, elementRef, _document) {
          var _this18 = this;

          _classCallCheck(this, _FormlyAttributes);

          this.renderer = renderer;
          this.elementRef = elementRef;
          this.uiAttributesCache = {};
          this.uiAttributes = null;
          /**
           * HostBinding doesn't register listeners conditionally which may produce some perf issues.
           *
           * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1991
           */

          this.uiEvents = {
            listeners: [],
            events: ['click', 'keyup', 'keydown', 'keypress', 'focus', 'blur', 'change'],
            callback:
            /**
            * @param {?} eventName
            * @param {?} $event
            * @return {?}
            */
            function callback(eventName, $event) {
              switch (eventName) {
                case 'focus':
                  return _this18.onFocus($event);

                case 'blur':
                  return _this18.onBlur($event);

                case 'change':
                  return _this18.onChange($event);

                default:
                  return _this18.to[eventName](_this18.field, $event);
              }
            }
          };
          this.document = _document;
        }
        /**
         * @return {?}
         */


        _createClass(_FormlyAttributes, [{
          key: "to",
          get: function get() {
            return this.field.templateOptions || {};
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "fieldAttrElements",
          get: function get() {
            return this.field && this.field['_elementRefs'] || [];
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this19 = this;

            if (changes.field) {
              this.field.name && this.setAttribute('name', this.field.name);
              this.uiEvents.listeners.forEach(
              /**
              * @param {?} listener
              * @return {?}
              */
              function (listener) {
                return listener();
              });
              this.uiEvents.events.forEach(
              /**
              * @param {?} eventName
              * @return {?}
              */
              function (eventName) {
                if (_this19.to && _this19.to[eventName] || ['focus', 'blur', 'change'].indexOf(eventName) !== -1) {
                  _this19.uiEvents.listeners.push(_this19.renderer.listen(_this19.elementRef.nativeElement, eventName,
                  /**
                  * @param {?} e
                  * @return {?}
                  */
                  function (e) {
                    return _this19.uiEvents.callback(eventName, e);
                  }));
                }
              });

              if (this.to && this.to.attributes) {
                wrapProperty(this.to, 'attributes',
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref9) {
                  var currentValue = _ref9.currentValue,
                      previousValue = _ref9.previousValue;

                  if (previousValue) {
                    Object.keys(previousValue).forEach(
                    /**
                    * @param {?} attr
                    * @return {?}
                    */
                    function (attr) {
                      return _this19.removeAttribute(attr);
                    });
                  }

                  if (currentValue) {
                    Object.keys(currentValue).forEach(
                    /**
                    * @param {?} attr
                    * @return {?}
                    */
                    function (attr) {
                      if (currentValue[attr] != null) {
                        _this19.setAttribute(attr, currentValue[attr]);
                      }
                    });
                  }
                });
              }

              this.detachElementRef(changes.field.previousValue);
              this.attachElementRef(changes.field.currentValue);

              if (this.fieldAttrElements.length === 1) {
                !this.id && this.field.id && this.setAttribute('id', this.field.id);
                wrapProperty(this.field, 'focus',
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref10) {
                  var currentValue = _ref10.currentValue;

                  _this19.toggleFocus(currentValue);
                });
              }
            }

            if (changes.id) {
              this.setAttribute('id', this.id);
            }
          }
          /**
           * We need to re-evaluate all the attributes on every change detection cycle, because
           * by using a HostBinding we run into certain edge cases. This means that whatever logic
           * is in here has to be super lean or we risk seriously damaging or destroying the performance.
           *
           * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1317
           * Material issue: https://github.com/angular/components/issues/14024
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var _this20 = this;

            if (!this.uiAttributes) {
              /** @type {?} */
              var element =
              /** @type {?} */
              this.elementRef.nativeElement;
              this.uiAttributes = [].concat(FORMLY_VALIDATORS, ['tabindex', 'placeholder', 'readonly', 'disabled', 'step']).filter(
              /**
              * @param {?} attr
              * @return {?}
              */
              function (attr) {
                return !element.hasAttribute || !element.hasAttribute(attr);
              });
            }

            this.uiAttributes.forEach(
            /**
            * @param {?} attr
            * @return {?}
            */
            function (attr) {
              /** @type {?} */
              var value = _this20.to[attr];

              if (_this20.uiAttributesCache[attr] !== value && (!_this20.to.attributes || !_this20.to.attributes.hasOwnProperty(attr.toLowerCase()))) {
                _this20.uiAttributesCache[attr] = value;

                if (value || value === 0) {
                  _this20.setAttribute(attr, value === true ? attr : "".concat(value));
                } else {
                  _this20.removeAttribute(attr);
                }
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.uiEvents.listeners.forEach(
            /**
            * @param {?} listener
            * @return {?}
            */
            function (listener) {
              return listener();
            });
            this.detachElementRef(this.field);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "toggleFocus",
          value: function toggleFocus(value) {
            var _this21 = this;

            /** @type {?} */
            var element = this.fieldAttrElements ? this.fieldAttrElements[0] : null;

            if (!element || !element.nativeElement.focus) {
              return;
            }
            /** @type {?} */


            var isFocused = !!this.document.activeElement && this.fieldAttrElements.some(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref11) {
              var nativeElement = _ref11.nativeElement;
              return _this21.document.activeElement === nativeElement || nativeElement.contains(_this21.document.activeElement);
            });

            if (value && !isFocused) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return element.nativeElement.focus();
              });
            } else if (!value && isFocused) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return element.nativeElement.blur();
              });
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onFocus",
          value: function onFocus($event) {
            this.field['___$focus'] = true;

            if (this.to.focus) {
              this.to.focus(this.field, $event);
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onBlur",
          value: function onBlur($event) {
            this.field['___$focus'] = false;

            if (this.to.blur) {
              this.to.blur(this.field, $event);
            }
          } // handle custom `change` event, for regular ones rely on DOM listener

          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onHostChange",
          value: function onHostChange($event) {
            if ($event instanceof Event) {
              return;
            }

            this.onChange($event);
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange($event) {
            if (this.to.change) {
              this.to.change(this.field, $event);
            }

            if (this.field.formControl) {
              this.field.formControl.markAsDirty();
            }
          }
          /**
           * @private
           * @param {?} f
           * @return {?}
           */

        }, {
          key: "attachElementRef",
          value: function attachElementRef(f) {
            if (!f) {
              return;
            }

            if (f['_elementRefs'] && f['_elementRefs'].indexOf(this.elementRef) === -1) {
              f['_elementRefs'].push(this.elementRef);
            } else {
              defineHiddenProp(f, '_elementRefs', [this.elementRef]);
            }
          }
          /**
           * @private
           * @param {?} f
           * @return {?}
           */

        }, {
          key: "detachElementRef",
          value: function detachElementRef(f) {
            /** @type {?} */
            var index = f && f['_elementRefs'] ? this.fieldAttrElements.indexOf(this.elementRef) : -1;

            if (index !== -1) {
              this.field['_elementRefs'].splice(index, 1);
            }
          }
          /**
           * @private
           * @param {?} attr
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setAttribute",
          value: function setAttribute(attr, value) {
            this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
          }
          /**
           * @private
           * @param {?} attr
           * @return {?}
           */

        }, {
          key: "removeAttribute",
          value: function removeAttribute(attr) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
          }
        }]);

        return _FormlyAttributes;
      }();

      _FormlyAttributes.ɵfac = function FormlyAttributes_Factory(t) {
        return new (t || _FormlyAttributes)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
      };

      _FormlyAttributes.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormlyAttributes,
        selectors: [["", "formlyAttributes", ""]],
        hostBindings: function FormlyAttributes_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormlyAttributes_change_HostBindingHandler($event) {
              return ctx.onHostChange($event);
            });
          }
        },
        inputs: {
          field: ["formlyAttributes", "field"],
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      _FormlyAttributes.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
          }]
        }];
      };

      _FormlyAttributes.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formlyAttributes']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyAttributes, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formlyAttributes]',
            host: {
              '(change)': 'onHostChange($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }]
          }];
        }, {
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formlyAttributes']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       * @template F
       */


      var _FieldType = /*#__PURE__*/function () {
        function _FieldType() {
          _classCallCheck(this, _FieldType);
        }

        _createClass(_FieldType, [{
          key: "model",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this.field.model;
          }
          /**
           * @param {?} m
           * @return {?}
           */
          ,
          set: function set(m) {
            console.warn("NgxFormly: passing 'model' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @return {?}
           */

        }, {
          key: "form",
          get: function get() {
            return (
              /** @type {?} */
              this.field.parent.formControl
            );
          }
          /**
           * @param {?} form
           * @return {?}
           */
          ,
          set: function set(form) {
            console.warn("NgxFormly: passing 'form' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @return {?}
           */

        }, {
          key: "options",
          get: function get() {
            return this.field.options;
          }
          /**
           * @param {?} options
           * @return {?}
           */
          ,
          set: function set(options) {
            console.warn("NgxFormly: passing 'options' input to '".concat(this.constructor.name, "' component is not required anymore, you may remove it!"));
          }
          /**
           * @return {?}
           */

        }, {
          key: "key",
          get: function get() {
            return this.field.key;
          }
          /**
           * @return {?}
           */

        }, {
          key: "formControl",
          get: function get() {
            return (
              /** @type {?} */
              this.field.formControl
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "to",
          get: function get() {
            return this.field.templateOptions || {};
          }
          /**
           * @return {?}
           */

        }, {
          key: "showError",
          get: function get() {
            return this.options.showError(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "id",
          get: function get() {
            return this.field.id;
          }
          /**
           * @return {?}
           */

        }, {
          key: "formState",
          get: function get() {
            return this.options.formState || {};
          }
        }]);

        return _FieldType;
      }();

      _FieldType.ɵfac = function FieldType_Factory(t) {
        return new (t || _FieldType)();
      };

      _FieldType.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FieldType,
        inputs: {
          model: "model",
          form: "form",
          options: "options",
          field: "field"
        }
      });
      _FieldType.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };
      /**
       * @deprecated use `FieldType` instead
       * @abstract
       */

      var _Field = /*#__PURE__*/function (_FieldType2) {
        _inherits(_Field, _FieldType2);

        var _super = _createSuper(_Field);

        function _Field() {
          var _this22;

          _classCallCheck(this, _Field);

          _this22 = _super.call(this);
          console.warn("NgxFormly: 'Field' has been renamed to 'FieldType', extend 'FieldType' instead.");
          return _this22;
        }

        return _createClass(_Field);
      }(_FieldType);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO remove `selector` in V6
      // tslint:disable-next-line

      /**
       * @abstract
       * @template F
       */


      var _FieldArrayType = /*#__PURE__*/function (_FieldType3) {
        _inherits(_FieldArrayType, _FieldType3);

        var _super2 = _createSuper(_FieldArrayType);

        /**
         * @param {?=} builder
         */
        function _FieldArrayType(builder) {
          var _this23;

          _classCallCheck(this, _FieldArrayType);

          _this23 = _super2.call(this);
          _this23.defaultOptions = {
            defaultValue: []
          };

          if (builder instanceof _FormlyFormBuilder) {
            console.warn("NgxFormly: passing 'FormlyFormBuilder' to '".concat(_this23.constructor.name, "' type is not required anymore, you may remove it!"));
          }

          return _this23;
        }
        /**
         * @return {?}
         */


        _createClass(_FieldArrayType, [{
          key: "formControl",
          get: function get() {
            return (
              /** @type {?} */
              this.field.formControl
            );
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "onPopulate",
          value: function onPopulate(field) {
            if (!field.formControl && field.key) {
              /** @type {?} */
              var control = findControl(field);
              registerControl(field, control ? control : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([], {
                updateOn: field.modelOptions.updateOn
              }));
            }

            field.fieldGroup = field.fieldGroup || [];
            /** @type {?} */

            var length = field.model ? field.model.length : 0;

            if (field.fieldGroup.length > length) {
              for (var i = field.fieldGroup.length - 1; i >= length; --i) {
                unregisterControl(field.fieldGroup[i], true);
                field.fieldGroup.splice(i, 1);
              }
            }

            for (var _i = field.fieldGroup.length; _i < length; _i++) {
              /** @type {?} */
              var f = Object.assign({}, clone(field.fieldArray), {
                key: "".concat(_i)
              });
              field.fieldGroup.push(f);
            }
          }
          /**
           * @param {?=} i
           * @param {?=} initialModel
           * @param {?=} __2
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(i, initialModel) {
            var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
              markAsDirty: true
            },
                markAsDirty = _ref12.markAsDirty;

            i = isNullOrUndefined(i) ? this.field.fieldGroup.length : i;

            if (!this.model) {
              assignFieldValue(this.field, []);
            }

            this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);

            this._build();

            markAsDirty && this.formControl.markAsDirty();
          }
          /**
           * @param {?} i
           * @param {?=} __1
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove(i) {
            var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              markAsDirty: true
            },
                markAsDirty = _ref13.markAsDirty;

            this.model.splice(i, 1);
            unregisterControl(this.field.fieldGroup[i], true);
            this.field.fieldGroup.splice(i, 1);
            this.field.fieldGroup.forEach(
            /**
            * @param {?} f
            * @param {?} key
            * @return {?}
            */
            function (f, key) {
              return f.key = "".concat(key);
            });

            this._build();

            markAsDirty && this.formControl.markAsDirty();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_build",
          value: function _build() {
            /** @type {?} */
            this.options._buildField(this.field);

            /** @type {?} */
            this.options._trackModelChanges(true);
          }
        }]);

        return _FieldArrayType;
      }(_FieldType);

      _FieldArrayType.ɵfac = function FieldArrayType_Factory(t) {
        return new (t || _FieldArrayType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FORMLY_CONFIG, 8));
      };

      _FieldArrayType.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FieldArrayType,
        selectors: [["fieldArray"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      _FieldArrayType.ctorParameters = function () {
        return [{
          type: _FormlyFormBuilder,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_FORMLY_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FieldArrayType, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ɵfieldArray]'
          }]
        }], function () {
          return [{
            type: _FormlyFormBuilder,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_FORMLY_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       * @template F
       */


      var _FieldWrapper = /*#__PURE__*/function (_FieldType4) {
        _inherits(_FieldWrapper, _FieldType4);

        var _super3 = _createSuper(_FieldWrapper);

        function _FieldWrapper() {
          _classCallCheck(this, _FieldWrapper);

          return _super3.apply(this, arguments);
        }

        return _createClass(_FieldWrapper);
      }(_FieldType);

      _FieldWrapper.ɵfac = /*@__PURE__*/function () {
        var ɵFieldWrapper_BaseFactory;
        return function FieldWrapper_Factory(t) {
          return (ɵFieldWrapper_BaseFactory || (ɵFieldWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FieldWrapper)))(t || _FieldWrapper);
        };
      }();

      _FieldWrapper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FieldWrapper,
        viewQuery: function FieldWrapper_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fieldComponent = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _FieldWrapper.propDecorators = {
        fieldComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['fieldComponent',
          /** @type {?} */
          {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            "static": false
          }]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FormlyGroup = /*#__PURE__*/function (_FieldType5) {
        _inherits(FormlyGroup, _FieldType5);

        var _super4 = _createSuper(FormlyGroup);

        function FormlyGroup() {
          var _this24;

          _classCallCheck(this, FormlyGroup);

          _this24 = _super4.apply(this, arguments);
          _this24.defaultOptions = {
            defaultValue: {}
          };
          return _this24;
        }

        return _createClass(FormlyGroup);
      }(_FieldType);

      FormlyGroup.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyGroup_BaseFactory;
        return function FormlyGroup_Factory(t) {
          return (ɵFormlyGroup_BaseFactory || (ɵFormlyGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyGroup)))(t || FormlyGroup);
        };
      }();

      FormlyGroup.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormlyGroup,
        selectors: [["formly-group"]],
        hostVars: 2,
        hostBindings: function FormlyGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.field.fieldGroupClassName || "");
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 1,
        consts: [[3, "field", 4, "ngFor", "ngForOf"], [3, "field"]],
        template: function FormlyGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyGroup_formly_field_0_Template, 1, 1, "formly-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.fieldGroup);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _FormlyField],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-group',
            template: "\n    <formly-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></formly-field>\n    <ng-content></ng-content>\n  ",
            host: {
              '[class]': 'field.fieldGroupClassName || ""'
            }
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FormlyValidationMessage = /*#__PURE__*/function () {
        /**
         * @param {?} formlyConfig
         */
        function FormlyValidationMessage(formlyConfig) {
          _classCallCheck(this, FormlyValidationMessage);

          this.formlyConfig = formlyConfig;
        }
        /**
         * @return {?}
         */


        _createClass(FormlyValidationMessage, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this25 = this;

            /** @type {?} */
            var EXPR_VALIDATORS = FORMLY_VALIDATORS.map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return "templateOptions.".concat(v);
            });
            this.errorMessage$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.field.formControl.statusChanges, !this.field.options ? (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null) : this.field.options.fieldChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref14) {
              var field = _ref14.field,
                  type = _ref14.type,
                  property = _ref14.property;
              return field === _this25.field && type === 'expressionChanges' && (property.indexOf('validation') !== -1 || EXPR_VALIDATORS.indexOf(property) !== -1);
            }))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(
            /**
            * @return {?}
            */
            function () {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(_this25.errorMessage) ? _this25.errorMessage : (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_this25.errorMessage);
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "errorMessage",
          get: function get() {
            /** @type {?} */
            var fieldForm = this.field.formControl;

            for (var error in fieldForm.errors) {
              if (fieldForm.errors.hasOwnProperty(error)) {
                /** @type {?} */
                var message = this.formlyConfig.getValidatorMessage(error);

                if (isObject(fieldForm.errors[error])) {
                  if (fieldForm.errors[error].errorPath) {
                    return;
                  }

                  if (fieldForm.errors[error].message) {
                    message = fieldForm.errors[error].message;
                  }
                }

                if (this.field.validation && this.field.validation.messages && this.field.validation.messages[error]) {
                  message = this.field.validation.messages[error];
                }

                if (this.field.validators && this.field.validators[error] && this.field.validators[error].message) {
                  message = this.field.validators[error].message;
                }

                if (this.field.asyncValidators && this.field.asyncValidators[error] && this.field.asyncValidators[error].message) {
                  message = this.field.asyncValidators[error].message;
                }

                if (typeof message === 'function') {
                  return message(fieldForm.errors[error], this.field);
                }

                return message;
              }
            }
          }
        }]);

        return FormlyValidationMessage;
      }();

      FormlyValidationMessage.ɵfac = function FormlyValidationMessage_Factory(t) {
        return new (t || FormlyValidationMessage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FormlyConfig));
      };

      FormlyValidationMessage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormlyValidationMessage,
        selectors: [["formly-validation-message"]],
        inputs: {
          field: "field"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 3,
        template: function FormlyValidationMessage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.errorMessage$));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      FormlyValidationMessage.ctorParameters = function () {
        return [{
          type: _FormlyConfig
        }];
      };

      FormlyValidationMessage.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyValidationMessage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-validation-message',
            template: "{{ errorMessage$ | async }}",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _FormlyConfig
          }];
        }, {
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FormlyTemplateType = /*#__PURE__*/function (_FieldType6) {
        _inherits(FormlyTemplateType, _FieldType6);

        var _super5 = _createSuper(FormlyTemplateType);

        /**
         * @param {?} sanitizer
         */
        function FormlyTemplateType(sanitizer) {
          var _this26;

          _classCallCheck(this, FormlyTemplateType);

          _this26 = _super5.call(this);
          _this26.sanitizer = sanitizer;
          _this26.innerHtml = {
            content: null,
            template: null
          };
          return _this26;
        }
        /**
         * @return {?}
         */


        _createClass(FormlyTemplateType, [{
          key: "template",
          get: function get() {
            if (this.field && this.field.template !== this.innerHtml.template) {
              this.innerHtml = {
                template: this.field.template,
                content: this.to.safeHtml ? this.sanitizer.bypassSecurityTrustHtml(this.field.template) : this.field.template
              };
            }

            return this.innerHtml.content;
          }
        }]);

        return FormlyTemplateType;
      }(_FieldType);

      FormlyTemplateType.ɵfac = function FormlyTemplateType_Factory(t) {
        return new (t || FormlyTemplateType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer));
      };

      FormlyTemplateType.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormlyTemplateType,
        selectors: [["formly-template"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "innerHtml"]],
        template: function FormlyTemplateType_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.template, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      FormlyTemplateType.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyTemplateType, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-template',
            template: "<div [innerHtml]=\"template\"></div>"
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} expression
       * @param {?} argNames
       * @return {?}
       */


      function evalStringExpression(expression, argNames) {
        try {
          if (expression.indexOf('this.field') !== -1) {
            console.warn("NgxFormly: using 'this.field' in expressionProperties is deprecated since v5.1, use 'field' instead.");
          }

          return (
            /** @type {?} */
            Function.apply(void 0, _toConsumableArray(argNames).concat(["return ".concat(expression, ";")]))
          );
        } catch (error) {
          console.error(error);
        }
      }
      /**
       * @param {?} expression
       * @param {?} thisArg
       * @param {?} argVal
       * @return {?}
       */


      function evalExpression(expression, thisArg, argVal) {
        if (expression instanceof Function) {
          return expression.apply(thisArg, argVal);
        } else {
          return expression ? true : false;
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@experimental
       */


      var FieldExpressionExtension = /*#__PURE__*/function () {
        function FieldExpressionExtension() {
          _classCallCheck(this, FieldExpressionExtension);
        }

        _createClass(FieldExpressionExtension, [{
          key: "prePopulate",
          value:
          /**
           * @param {?} field
           * @return {?}
           */
          function prePopulate(field) {
            var _this27 = this;

            if (field.parent || field.options._checkField) {
              return;
            }
            /** @type {?} */


            var checkLocked = false;

            field.options._checkField =
            /**
            * @param {?} f
            * @param {?} ignoreCache
            * @return {?}
            */
            function (f, ignoreCache) {
              if (!checkLocked) {
                checkLocked = true;

                _this27.checkField(f, ignoreCache);

                checkLocked = false;
              }
            };
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "postPopulate",
          value: function postPopulate(field) {
            var _this28 = this;

            if (!field.parent || field._expressionProperties) {
              return;
            } // cache built expression


            defineHiddenProp(field, '_expressionProperties', {});

            if (field.expressionProperties) {
              var _loop2 = function _loop2(key) {
                /** @type {?} */
                var expressionProperty = field.expressionProperties[key];

                if (typeof expressionProperty === 'string' || isFunction(expressionProperty)) {
                  field._expressionProperties[key] = {
                    expression: _this28._evalExpression(key, expressionProperty, key === 'templateOptions.disabled' && field.parent.expressionProperties && field.parent.expressionProperties.hasOwnProperty('templateOptions.disabled') ?
                    /**
                    * @return {?}
                    */
                    function () {
                      return field.parent.templateOptions.disabled;
                    } : undefined)
                  };

                  if (key === 'templateOptions.disabled') {
                    Object.defineProperty(field._expressionProperties[key], 'expressionValue', {
                      get:
                      /**
                      * @return {?}
                      */
                      function get() {
                        return field.templateOptions.disabled;
                      },
                      set:
                      /**
                      * @return {?}
                      */
                      function set() {},
                      enumerable: true,
                      configurable: true
                    });
                  }
                } else if (expressionProperty instanceof rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable) {
                  /** @type {?} */
                  var subscribe =
                  /**
                  * @return {?}
                  */
                  function subscribe() {
                    return (
                      /** @type {?} */
                      expressionProperty.subscribe(
                      /**
                      * @param {?} v
                      * @return {?}
                      */
                      function (v) {
                        _this28.setExprValue(field, key, v);

                        if (field.options && field.options._markForCheck) {
                          field.options._markForCheck(field);
                        }
                      })
                    );
                  };
                  /** @type {?} */


                  var subscription = subscribe();
                  /** @type {?} */

                  var onInit = field.hooks.onInit;

                  field.hooks.onInit =
                  /**
                  * @return {?}
                  */
                  function () {
                    if (subscription === null) {
                      subscription = subscribe();
                    }

                    return onInit && onInit(field);
                  };
                  /** @type {?} */


                  var onDestroy = field.hooks.onDestroy;

                  field.hooks.onDestroy =
                  /**
                  * @return {?}
                  */
                  function () {
                    onDestroy && onDestroy(field);
                    subscription.unsubscribe();
                    subscription = null;
                  };
                }
              };

              for (var key in field.expressionProperties) {
                _loop2(key);
              }
            }

            if (field.hideExpression) {
              // delete hide value in order to force re-evaluate it in FormlyFormExpression.
              delete field.hide;
              field.hideExpression = this._evalExpression('hide', field.hideExpression,
              /**
              * @return {?}
              */
              function () {
                /** @type {?} */
                var root = field.parent;

                while (root.parent && !root.hide) {
                  root = root.parent;
                }

                return root.hide;
              });
            } else {
              wrapProperty(field, 'hide',
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref15) {
                var currentValue = _ref15.currentValue,
                    firstChange = _ref15.firstChange;
                field._hide = currentValue;

                if (!firstChange || firstChange && currentValue === true) {
                  field.options._hiddenFieldsForCheck.push(field);
                }
              });
            }
          }
          /**
           * @private
           * @param {?} prop
           * @param {?} expression
           * @param {?=} parentExpression
           * @return {?}
           */

        }, {
          key: "_evalExpression",
          value: function _evalExpression(prop, _expression, parentExpression) {
            return (
              /**
              * @param {...?} args
              * @return {?}
              */
              function () {
                try {
                  if (typeof _expression === 'string') {
                    _expression = evalStringExpression(_expression, ['model', 'formState', 'field']);
                  }

                  if (typeof _expression !== 'function') {
                    _expression =
                    /**
                    * @return {?}
                    */
                    function expression() {
                      return !!_expression;
                    };
                  }

                  return parentExpression && parentExpression() || _expression.apply(void 0, arguments);
                } catch (error) {
                  error.message = "[Formly Error] [Expression \"".concat(prop, "\"] ").concat(error.message);
                  throw error;
                }
              }
            );
          }
          /**
           * @private
           * @param {?} field
           * @param {?} prop
           * @return {?}
           */

        }, {
          key: "_evalExpressionPath",
          value: function _evalExpressionPath(field, prop) {
            if (field._expressionProperties[prop] && field._expressionProperties[prop].expressionPaths) {
              return field._expressionProperties[prop].expressionPaths;
            }
            /** @type {?} */


            var paths = [];

            if (prop.indexOf('[') === -1) {
              paths = prop.split('.');
            } else {
              prop.split(/[[\]]{1,2}/) // https://stackoverflow.com/a/20198206
              .filter(
              /**
              * @param {?} p
              * @return {?}
              */
              function (p) {
                return p;
              }).forEach(
              /**
              * @param {?} path
              * @return {?}
              */
              function (path) {
                /** @type {?} */
                var arrayPath = path.match(/['|"](.*?)['|"]/);

                if (arrayPath) {
                  paths.push(arrayPath[1]);
                } else {
                  var _paths;

                  (_paths = paths).push.apply(_paths, _toConsumableArray(path.split('.').filter(
                  /**
                  * @param {?} p
                  * @return {?}
                  */
                  function (p) {
                    return p;
                  })));
                }
              });
            }

            if (field._expressionProperties[prop]) {
              field._expressionProperties[prop].expressionPaths = paths;
            }

            return paths;
          }
          /**
           * @private
           * @param {?} field
           * @param {?=} ignoreCache
           * @return {?}
           */

        }, {
          key: "checkField",
          value: function checkField(field) {
            var _this29 = this;

            var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var fieldChanged = this._checkField(field, ignoreCache);

            field.options._hiddenFieldsForCheck.sort(
            /**
            * @param {?} f
            * @return {?}
            */
            function (f) {
              return f.hide ? -1 : 1;
            }).forEach(
            /**
            * @param {?} f
            * @return {?}
            */
            function (f) {
              return _this29.toggleFormControl(f, !!f.hide, !ignoreCache);
            });

            field.options._hiddenFieldsForCheck = [];

            if (fieldChanged) {
              this.checkField(field);

              if (field.options && field.options._markForCheck) {
                field.options._markForCheck(field);
              }
            }
          }
          /**
           * @private
           * @param {?} field
           * @param {?=} ignoreCache
           * @return {?}
           */

        }, {
          key: "_checkField",
          value: function _checkField(field) {
            var _this30 = this;

            var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var fieldChanged = false;
            field.fieldGroup.forEach(
            /**
            * @param {?} f
            * @return {?}
            */
            function (f) {
              if (!f.options) {
                return;
              }

              _this30.checkFieldExpressionChange(f, ignoreCache) && (fieldChanged = true);

              if (_this30.checkFieldVisibilityChange(f, ignoreCache)) {
                field.options._hiddenFieldsForCheck.push(f);

                fieldChanged = true;
              }

              if (f.fieldGroup && f.fieldGroup.length > 0) {
                _this30._checkField(f, ignoreCache) && (fieldChanged = true);
              }
            });
            return fieldChanged;
          }
          /**
           * @private
           * @param {?} field
           * @param {?} ignoreCache
           * @return {?}
           */

        }, {
          key: "checkFieldExpressionChange",
          value: function checkFieldExpressionChange(field, ignoreCache) {
            if (!field || !field._expressionProperties) {
              return false;
            }
            /** @type {?} */


            var markForCheck = false;
            /** @type {?} */

            var expressionProperties = field._expressionProperties;

            for (var key in expressionProperties) {
              /** @type {?} */
              var expressionValue = evalExpression(expressionProperties[key].expression, {
                field: field
              }, [field.model, field.options.formState, field, ignoreCache]);

              if (key === 'templateOptions.disabled') {
                expressionValue = !!expressionValue;
              }

              if (ignoreCache || expressionProperties[key].expressionValue !== expressionValue && (!(isObject(expressionValue) || isFunction(expressionValue)) || isFunction(expressionValue) && '' + expressionProperties[key].expressionValue !== '' + expressionValue || (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(expressionValue) || JSON.stringify(expressionValue) !== JSON.stringify(expressionProperties[key].expressionValue))) {
                markForCheck = true;
                expressionProperties[key].expressionValue = expressionValue;
                this.setExprValue(field, key, expressionValue);
              }
            }

            return markForCheck;
          }
          /**
           * @private
           * @param {?} field
           * @param {?} ignoreCache
           * @return {?}
           */

        }, {
          key: "checkFieldVisibilityChange",
          value: function checkFieldVisibilityChange(field, ignoreCache) {
            if (!field || isNullOrUndefined(field.hideExpression)) {
              return false;
            }
            /** @type {?} */


            var hideExpressionResult = !!evalExpression(field.hideExpression, {
              field: field
            }, [field.model, field.options.formState, field, ignoreCache]);
            /** @type {?} */

            var markForCheck = false;

            if (hideExpressionResult !== field.hide || ignoreCache) {
              markForCheck = true; // toggle hide

              field.hide = hideExpressionResult;
              field.templateOptions.hidden = hideExpressionResult;
            }

            return markForCheck;
          }
          /**
           * @private
           * @param {?} field
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(field, value) {
            var _this31 = this;

            if (field.fieldGroup) {
              field.fieldGroup.filter(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return !f.expressionProperties || !f.expressionProperties.hasOwnProperty('templateOptions.disabled');
              }).forEach(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return _this31.setDisabledState(f, value);
              });
            }

            if (field.key && field.templateOptions.disabled !== value) {
              field.templateOptions.disabled = value;
            }
          }
          /**
           * @private
           * @param {?} field
           * @param {?} hide
           * @param {?} resetOnHide
           * @return {?}
           */

        }, {
          key: "toggleFormControl",
          value: function toggleFormControl(field, hide, resetOnHide) {
            var _this32 = this;

            if (field.fieldGroup) {
              field.fieldGroup.filter(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return !f.hideExpression;
              }).forEach(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return _this32.toggleFormControl(f, hide, resetOnHide);
              });
            }

            if (field.formControl && field.key) {
              defineHiddenProp(field, '_hide', !!(hide || field.hide));
              /** @type {?} */

              var c = field.formControl;

              if (c['_fields'] && c['_fields'].length > 1) {
                updateValidity(c);
              }

              if (hide === true && (!c['_fields'] || c['_fields'].every(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return !!f._hide;
              }))) {
                unregisterControl(field, true);

                if (resetOnHide && field.resetOnHide) {
                  field.formControl.reset({
                    value: undefined,
                    disabled: field.formControl.disabled
                  });

                  if (field.fieldGroup) {
                    assignFieldValue(field, undefined);

                    if (field.formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
                      field.fieldGroup.length = 0;
                    }
                  }
                }
              } else if (hide === false) {
                if (field.resetOnHide && field.parent && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
                  assignFieldValue(field, field.defaultValue);
                }

                registerControl(field, undefined, true);

                if (field.resetOnHide && field.fieldArray && (field.fieldGroup || []).length !== (field.model || []).length) {
                  /** @type {?} */
                  field.options._buildForm(true);
                }
              }
            }

            if (field.options.fieldChanges) {
              field.options.fieldChanges.next(
              /** @type {?} */
              {
                field: field,
                type: 'hidden',
                value: hide
              });
            }
          }
          /**
           * @private
           * @param {?} field
           * @param {?} prop
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setExprValue",
          value: function setExprValue(field, prop, value) {
            try {
              /** @type {?} */
              var target = field;
              /** @type {?} */

              var paths = this._evalExpressionPath(field, prop);
              /** @type {?} */


              var lastIndex = paths.length - 1;

              for (var i = 0; i < lastIndex; i++) {
                target = target[paths[i]];
              }

              target[paths[lastIndex]] = value;
            } catch (error) {
              error.message = "[Formly Error] [Expression \"".concat(prop, "\"] ").concat(error.message);
              throw error;
            }

            if (prop === 'templateOptions.disabled' && field.key) {
              this.setDisabledState(field, value);
            }

            if (prop.indexOf('model.') === 0) {
              /** @type {?} */
              var path = prop.replace(/^model\./, '');
              /** @type {?} */

              var control = field.key && prop === path ? field.formControl : field.parent.formControl.get(path);

              if (control && !(isNullOrUndefined(control.value) && isNullOrUndefined(value)) && control.value !== value) {
                control.patchValue(value);
              }
            }

            this.emitExpressionChanges(field, prop, value);
          }
          /**
           * @private
           * @param {?} field
           * @param {?} property
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "emitExpressionChanges",
          value: function emitExpressionChanges(field, property, value) {
            if (!field.options.fieldChanges) {
              return;
            }

            field.options.fieldChanges.next({
              field: field,
              type: 'expressionChanges',
              property: property,
              value: value
            });
          }
        }]);

        return FieldExpressionExtension;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@experimental
       */


      var FieldValidationExtension = /*#__PURE__*/function () {
        /**
         * @param {?} formlyConfig
         */
        function FieldValidationExtension(formlyConfig) {
          _classCallCheck(this, FieldValidationExtension);

          this.formlyConfig = formlyConfig;
        }
        /**
         * @param {?} field
         * @return {?}
         */


        _createClass(FieldValidationExtension, [{
          key: "onPopulate",
          value: function onPopulate(field) {
            this.initFieldValidation(field, 'validators');
            this.initFieldValidation(field, 'asyncValidators');
          }
          /**
           * @private
           * @param {?} field
           * @param {?} type
           * @return {?}
           */

        }, {
          key: "initFieldValidation",
          value: function initFieldValidation(field, type) {
            var _this33 = this;

            /** @type {?} */
            var validators = [];

            if (type === 'validators' && !(field.hasOwnProperty('fieldGroup') && !field.key)) {
              validators.push(this.getPredefinedFieldValidation(field));
            }

            if (field[type]) {
              for (var validatorName in field[type]) {
                if (validatorName === 'validation' && !Array.isArray(field[type].validation)) {
                  field[type].validation = [field[type].validation];
                  console.warn("NgxFormly(".concat(field.key, "): passing a non array value to the 'validation' is deprecated, pass an array instead"));
                }

                validatorName === 'validation' ? validators.push.apply(validators, _toConsumableArray(field[type].validation.map(
                /**
                * @param {?} v
                * @return {?}
                */
                function (v) {
                  return _this33.wrapNgValidatorFn(field, v);
                }))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
              }
            }

            defineHiddenProp(field, '_' + type, validators);
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "getPredefinedFieldValidation",
          value: function getPredefinedFieldValidation(field) {
            /** @type {?} */
            var VALIDATORS = [];
            FORMLY_VALIDATORS.forEach(
            /**
            * @param {?} opt
            * @return {?}
            */
            function (opt) {
              return wrapProperty(field.templateOptions, opt,
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref16) {
                var currentValue = _ref16.currentValue,
                    firstChange = _ref16.firstChange;
                VALIDATORS = VALIDATORS.filter(
                /**
                * @param {?} o
                * @return {?}
                */
                function (o) {
                  return o !== opt;
                });

                if (currentValue != null && currentValue !== false) {
                  VALIDATORS.push(opt);
                }

                if (!firstChange && field.formControl) {
                  updateValidity(field.formControl);
                }
              });
            });
            return (
              /**
              * @param {?} control
              * @return {?}
              */
              function (control) {
                if (VALIDATORS.length === 0) {
                  return null;
                }

                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(VALIDATORS.map(
                /**
                * @param {?} opt
                * @return {?}
                */
                function (opt) {
                  return (
                    /**
                    * @return {?}
                    */
                    function () {
                      /** @type {?} */
                      var value = field.templateOptions[opt];

                      switch (opt) {
                        case 'required':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required(control);

                        case 'pattern':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(value)(control);

                        case 'minLength':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(value)(control);

                        case 'maxLength':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(value)(control);

                        case 'min':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(value)(control);

                        case 'max':
                          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(value)(control);
                      }
                    }
                  );
                }))(control);
              }
            );
          }
          /**
           * @private
           * @param {?} field
           * @param {?} validator
           * @param {?=} validatorName
           * @return {?}
           */

        }, {
          key: "wrapNgValidatorFn",
          value: function wrapNgValidatorFn(field, validator, validatorName) {
            var _this34 = this;

            /** @type {?} */
            var validatorOption = null;

            if (typeof validator === 'string') {
              validatorOption = clone(this.formlyConfig.getValidator(validator));
            }

            if (typeof validator === 'object' && validator.name) {
              validatorOption = clone(this.formlyConfig.getValidator(validator.name));

              if (validator.options) {
                validatorOption.options = validator.options;
              }
            }

            if (typeof validator === 'object' && validator.expression) {
              var expression = validator.expression,
                  options = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(validator, ["expression"]);
              validatorOption = {
                name: validatorName,
                validation: expression,
                options: Object.keys(options).length > 0 ? options : null
              };
            }

            if (typeof validator === 'function') {
              validatorOption = {
                name: validatorName,
                validation: validator
              };
            }

            return (
              /**
              * @param {?} control
              * @return {?}
              */
              function (control) {
                /** @type {?} */
                var errors = validatorOption.validation(control, field, validatorOption.options);

                if (isPromise(errors)) {
                  return errors.then(
                  /**
                  * @param {?} v
                  * @return {?}
                  */
                  function (v) {
                    return _this34.handleAsyncResult(field, validatorName ? !!v : v, validatorOption);
                  });
                }

                if ((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(errors)) {
                  return errors.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(
                  /**
                  * @param {?} v
                  * @return {?}
                  */
                  function (v) {
                    return _this34.handleAsyncResult(field, validatorName ? !!v : v, validatorOption);
                  }));
                }

                return _this34.handleResult(field, validatorName ? !!errors : errors, validatorOption);
              }
            );
          }
          /**
           * @private
           * @param {?} field
           * @param {?} errors
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "handleAsyncResult",
          value: function handleAsyncResult(field, errors, options) {
            // workaround for https://github.com/angular/angular/issues/13200
            if (field.options && field.options._markForCheck) {
              field.options._markForCheck(field);
            }

            return this.handleResult(field, errors, options);
          }
          /**
           * @private
           * @param {?} field
           * @param {?} errors
           * @param {?} __2
           * @return {?}
           */

        }, {
          key: "handleResult",
          value: function handleResult(field, errors, _ref17) {
            var name = _ref17.name,
                options = _ref17.options;

            if (typeof errors === 'boolean') {
              errors = errors ? null : _defineProperty({}, name, options ? options : true);
            }
            /** @type {?} */


            var ctrl = field.formControl;
            ctrl['_childrenErrors'] && ctrl['_childrenErrors'][name] && ctrl['_childrenErrors'][name]();

            if (isObject(errors)) {
              Object.keys(errors).forEach(
              /**
              * @param {?} name
              * @return {?}
              */
              function (name) {
                /** @type {?} */
                var errorPath = errors[name].errorPath ? errors[name].errorPath : (options || {}).errorPath;
                /** @type {?} */

                var childCtrl = errorPath ? field.formControl.get(errorPath) : null;

                if (childCtrl) {
                  var _a = errors[name],
                      opts = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(_a, ["errorPath"]);
                  childCtrl.setErrors(Object.assign({}, childCtrl.errors || {}, _defineProperty({}, name, opts)));
                  !ctrl['_childrenErrors'] && defineHiddenProp(ctrl, '_childrenErrors', {});

                  ctrl['_childrenErrors'][name] =
                  /**
                  * @return {?}
                  */
                  function () {
                    var _a = childCtrl.errors || {},
                        _b = name,
                        toDelete = _a[_b],
                        childErrors = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(_a, [typeof _b === "symbol" ? _b : _b + ""]);

                    childCtrl.setErrors(Object.keys(childErrors).length === 0 ? null : childErrors);
                  };
                }
              });
            }

            return errors;
          }
        }]);

        return FieldValidationExtension;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@experimental
       */


      var FieldFormExtension = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function FieldFormExtension(config) {
          _classCallCheck(this, FieldFormExtension);

          this.config = config;
        }
        /**
         * @param {?} field
         * @return {?}
         */


        _createClass(FieldFormExtension, [{
          key: "prePopulate",
          value: function prePopulate(field) {
            if (!this.root) {
              this.root = field;
            }
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "onPopulate",
          value: function onPopulate(field) {
            if (!field.parent) {
              return;
            }

            if (field.fieldGroup && !field.key) {
              defineHiddenProp(field, 'formControl', field.parent.formControl);
            } else {
              this.addFormControl(field);
            }
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "postPopulate",
          value: function postPopulate(field) {
            if (this.root !== field) {
              return;
            }

            this.root = null;
            this.setValidators(field);
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "addFormControl",
          value: function addFormControl(field) {
            /** @type {?} */
            var control = findControl(field);

            if (!control) {
              /** @type {?} */
              var controlOptions = {
                updateOn: field.modelOptions.updateOn
              };
              /** @type {?} */

              var value = field.key ? getFieldValue(field) : field.defaultValue;
              /** @type {?} */

              var ref = this.config ? this.config.resolveFieldTypeRef(field) : null;

              if (ref && ref.componentType && ref.componentType['createControl']) {
                /** @type {?} */
                var component = ref.componentType;
                console.warn("NgxFormly: '".concat(component.name, "::createControl' is deprecated since v5.0, use 'prePopulate' hook instead."));
                control = component['createControl'](value, field);
              } else if (field.fieldGroup) {
                // TODO: move to postPopulate
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}, controlOptions);
              } else {
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(value, controlOptions);
              }
            }

            registerControl(field, control);
          }
          /**
           * @private
           * @param {?} field
           * @param {?=} disabled
           * @return {?}
           */

        }, {
          key: "setValidators",
          value: function setValidators(field) {
            var _this35 = this;

            var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var markForCheck = false;

            if (disabled === false && field.key && field.templateOptions && field.templateOptions.disabled) {
              disabled = true;
            }

            (field.fieldGroup || []).forEach(
            /**
            * @param {?} f
            * @return {?}
            */
            function (f) {
              return _this35.setValidators(f, disabled) && (markForCheck = true);
            });

            if (field.key || !field.parent || !field.key && !field.fieldGroup) {
              var c = field.formControl;
              field.templateOptions = field.templateOptions || {};

              if (field.key && c && c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
                if (disabled && c.enabled) {
                  c.disable({
                    emitEvent: false,
                    onlySelf: true
                  });
                  markForCheck = true;
                }

                if (!disabled && c.disabled) {
                  c.enable({
                    emitEvent: false,
                    onlySelf: true
                  });
                  markForCheck = true;
                }
              }

              if (c && (null === c.validator || null === c.asyncValidator)) {
                c.setValidators(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(_this35.mergeValidators(field, '_validators'));

                  return v ? v(c) : null;
                });
                c.setAsyncValidators(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.composeAsync(_this35.mergeValidators(field, '_asyncValidators'));

                  return v ? v(c) : (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
                });
                markForCheck = true;
              }

              if (markForCheck) {
                updateValidity(c, true); // update validity of `FormGroup` instance created by field with nested key.

                /** @type {?} */

                var parent = c.parent;

                for (var i = 1; i < getKeyPath(field).length; i++) {
                  if (parent) {
                    updateValidity(parent, true);
                    parent = parent.parent;
                  }
                }
              }
            }

            return markForCheck;
          }
          /**
           * @private
           * @template T
           * @param {?} field
           * @param {?} type
           * @return {?}
           */

        }, {
          key: "mergeValidators",
          value: function mergeValidators(field, type) {
            var _this36 = this;

            /** @type {?} */
            var validators = [];
            /** @type {?} */

            var c = field.formControl;

            if (c && c['_fields'] && c['_fields'].length > 1) {
              c['_fields'].filter(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return !f._hide;
              }).forEach(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return validators.push.apply(validators, _toConsumableArray(f[type]));
              });
            } else if (field[type]) {
              validators.push.apply(validators, _toConsumableArray(field[type]));
            }

            if (field.fieldGroup) {
              field.fieldGroup.filter(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return !f.key && f.fieldGroup;
              }).forEach(
              /**
              * @param {?} f
              * @return {?}
              */
              function (f) {
                return validators.push.apply(validators, _toConsumableArray(_this36.mergeValidators(f, type)));
              });
            }

            return validators;
          }
        }]);

        return FieldFormExtension;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@experimental
       */


      var CoreExtension = /*#__PURE__*/function () {
        /**
         * @param {?} formlyConfig
         */
        function CoreExtension(formlyConfig) {
          _classCallCheck(this, CoreExtension);

          this.formlyConfig = formlyConfig;
          this.formId = 0;
        }
        /**
         * @param {?} field
         * @return {?}
         */


        _createClass(CoreExtension, [{
          key: "prePopulate",
          value: function prePopulate(field) {
            this.getFieldComponentInstance(field).prePopulate();

            if (field.parent) {
              return;
            }
            /** @type {?} */


            var fieldTransforms = field.options && field.options.fieldTransform || this.formlyConfig.extras.fieldTransform;
            (Array.isArray(fieldTransforms) ? fieldTransforms : [fieldTransforms]).forEach(
            /**
            * @param {?} fieldTransform
            * @return {?}
            */
            function (fieldTransform) {
              if (fieldTransform) {
                console.warn("NgxFormly: fieldTransform is deprecated since v5.0, use custom extension instead.");
                /** @type {?} */

                var fieldGroup = fieldTransform(field.fieldGroup, field.model,
                /** @type {?} */
                field.formControl, field.options);

                if (!fieldGroup) {
                  throw new Error('fieldTransform must return an array of fields');
                }
              }
            });
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "onPopulate",
          value: function onPopulate(field) {
            var _this37 = this;

            this.initFieldOptions(field);
            this.getFieldComponentInstance(field).onPopulate();

            if (field.fieldGroup) {
              field.fieldGroup.forEach(
              /**
              * @param {?} f
              * @param {?} index
              * @return {?}
              */
              function (f, index) {
                Object.defineProperty(f, 'parent', {
                  get:
                  /**
                  * @return {?}
                  */
                  function get() {
                    return field;
                  },
                  configurable: true
                });
                Object.defineProperty(f, 'index', {
                  get:
                  /**
                  * @return {?}
                  */
                  function get() {
                    return index;
                  },
                  configurable: true
                });
                _this37.formId++;
              });
            }
          }
          /**
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "postPopulate",
          value: function postPopulate(field) {
            this.getFieldComponentInstance(field).postPopulate();
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "initFieldOptions",
          value: function initFieldOptions(field) {
            /** @type {?} */
            var root =
            /** @type {?} */
            field.parent;

            if (!root) {
              return;
            }

            Object.defineProperty(field, 'form', {
              get:
              /**
              * @return {?}
              */
              function get() {
                return root.formControl;
              },
              configurable: true
            });
            Object.defineProperty(field, 'options', {
              get:
              /**
              * @return {?}
              */
              function get() {
                return root.options;
              },
              configurable: true
            });
            Object.defineProperty(field, 'model', {
              get:
              /**
              * @return {?}
              */
              function get() {
                return field.key && field.fieldGroup ? getFieldValue(field) : root.model;
              },
              configurable: true
            });
            reverseDeepMerge(field, {
              id: getFieldId("formly_".concat(this.formId), field, field['index']),
              hooks: {},
              modelOptions: {},
              validation: {
                messages: {}
              },
              templateOptions: !field.type || !field.key ? {} : {
                label: '',
                placeholder: '',
                focus: false,
                disabled: false
              }
            });

            if (this.formlyConfig.extras.resetFieldOnHide && field.resetOnHide !== false) {
              field.resetOnHide = true;
            }

            if (field.lifecycle) {
              console.warn("NgxFormly: 'lifecycle' is deprecated since v5.0, use 'hooks' instead.");
            }

            if (field.type !== 'formly-template' && (field.template || field.expressionProperties && field.expressionProperties.template)) {
              if (field.type) {
                console.warn("NgxFormly: passing 'type' property is not allowed when 'template' is set.");
              }

              field.type = 'formly-template';
            }

            if (!field.type && field.fieldGroup) {
              field.type = 'formly-group';
            }

            if (field.type) {
              this.formlyConfig.getMergedField(field);
            }

            if (field.parent) {
              /** @type {?} */
              var setDefaultValue = !isUndefined(field.key) && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field)) && (!field.resetOnHide || !(field.hide || field.hideExpression));

              if (setDefaultValue && field.resetOnHide) {
                /** @type {?} */
                var parent = field.parent;

                while (parent && !parent.hideExpression && !parent.hide) {
                  parent = parent.parent;
                }

                setDefaultValue = !parent || !(parent.hideExpression || parent.hide);
              }

              if (setDefaultValue) {
                assignFieldValue(field, field.defaultValue);
              }
            }

            this.initFieldWrappers(field);
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "initFieldWrappers",
          value: function initFieldWrappers(field) {
            field.wrappers = field.wrappers || [];
            /** @type {?} */

            var fieldTemplateManipulators = Object.assign({
              preWrapper: [],
              postWrapper: []
            }, field.templateOptions.templateManipulators || {});
            field.wrappers = [].concat(_toConsumableArray(this.formlyConfig.templateManipulators.preWrapper.map(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m(field);
            })), _toConsumableArray(fieldTemplateManipulators.preWrapper.map(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m(field);
            })), _toConsumableArray(field.wrappers), _toConsumableArray(this.formlyConfig.templateManipulators.postWrapper.map(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m(field);
            })), _toConsumableArray(fieldTemplateManipulators.postWrapper.map(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m(field);
            }))).filter(
            /**
            * @param {?} el
            * @param {?} i
            * @param {?} a
            * @return {?}
            */
            function (el, i, a) {
              return el && i === a.indexOf(el);
            });
          }
          /**
           * @private
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "getFieldComponentInstance",
          value: function getFieldComponentInstance(field) {
            /** @type {?} */
            var componentRef = this.formlyConfig.resolveFieldTypeRef(field);
            /** @type {?} */

            var instance = componentRef ?
            /** @type {?} */
            componentRef.instance : {};
            return {
              prePopulate:
              /**
              * @return {?}
              */
              function prePopulate() {
                return instance.prePopulate && instance.prePopulate(field);
              },
              onPopulate:
              /**
              * @return {?}
              */
              function onPopulate() {
                return instance.onPopulate && instance.onPopulate(field);
              },
              postPopulate:
              /**
              * @return {?}
              */
              function postPopulate() {
                return instance.postPopulate && instance.postPopulate(field);
              }
            };
          }
        }]);

        return CoreExtension;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} formlyConfig
       * @return {?}
       */


      function defaultFormlyConfig(formlyConfig) {
        return {
          types: [{
            name: 'formly-group',
            component: FormlyGroup
          }, {
            name: 'formly-template',
            component: FormlyTemplateType
          }],
          extensions: [{
            name: 'core',
            extension: new CoreExtension(formlyConfig)
          }, {
            name: 'field-validation',
            extension: new FieldValidationExtension(formlyConfig)
          }, {
            name: 'field-form',
            extension: new FieldFormExtension(formlyConfig)
          }, {
            name: 'field-expression',
            extension: new FieldExpressionExtension()
          }]
        };
      }

      var _FormlyModule = /*#__PURE__*/function () {
        /**
         * @param {?} configService
         * @param {?=} configs
         */
        function _FormlyModule(configService) {
          var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          _classCallCheck(this, _FormlyModule);

          if (!configs) {
            return;
          }

          configs.forEach(
          /**
          * @param {?} config
          * @return {?}
          */
          function (config) {
            return configService.addConfig(config);
          });
        }
        /**
         * @param {?=} config
         * @return {?}
         */


        _createClass(_FormlyModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _FormlyModule,
              providers: [{
                provide: _FORMLY_CONFIG,
                multi: true,
                useFactory: defaultFormlyConfig,
                deps: [_FormlyConfig]
              }, {
                provide: _FORMLY_CONFIG,
                useValue: config,
                multi: true
              }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANALYZE_FOR_ENTRY_COMPONENTS,
                useValue: config,
                multi: true
              }, _FormlyConfig, _FormlyFormBuilder]
            };
          }
          /**
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "forChild",
          value: function forChild() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _FormlyModule,
              providers: [{
                provide: _FORMLY_CONFIG,
                multi: true,
                useFactory: defaultFormlyConfig,
                deps: [_FormlyConfig]
              }, {
                provide: _FORMLY_CONFIG,
                useValue: config,
                multi: true
              }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANALYZE_FOR_ENTRY_COMPONENTS,
                useValue: config,
                multi: true
              }, _FormlyFormBuilder]
            };
          }
        }]);

        return _FormlyModule;
      }();

      _FormlyModule.ɵfac = function FormlyModule_Factory(t) {
        return new (t || _FormlyModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FORMLY_CONFIG, 8));
      };

      _FormlyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _FormlyModule
      });
      _FormlyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
      });
      /** @nocollapse */

      _FormlyModule.ctorParameters = function () {
        return [{
          type: _FormlyConfig
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_FORMLY_CONFIG]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_FormlyForm, _FormlyField, _FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType,
            /** @type {?} */
            _FieldArrayType],
            entryComponents: [FormlyGroup, FormlyTemplateType],
            exports: [_FormlyForm, _FormlyField, _FormlyAttributes, FormlyGroup, FormlyValidationMessage],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
          }]
        }], function () {
          return [{
            type: _FormlyConfig
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_FORMLY_CONFIG]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_FormlyModule, {
          declarations: function declarations() {
            return [_FormlyForm, _FormlyField, _FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType, _FieldArrayType];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
          },
          exports: function exports() {
            return [_FormlyForm, _FormlyField, _FormlyAttributes, FormlyGroup, FormlyValidationMessage];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    5279:
    /*!**********************************************************************************!*\
      !*** ./node_modules/@ngx-formly/ionic/__ivy_ngcc__/fesm2015/ngx-formly-ionic.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormlyIonicModule": function FormlyIonicModule() {
          return (
            /* binding */
            _FormlyIonicModule
          );
        },

        /* harmony export */
        "FormlyFieldInput": function FormlyFieldInput() {
          return (
            /* binding */
            _FormlyFieldInput
          );
        },

        /* harmony export */
        "FormlyFieldCheckbox": function FormlyFieldCheckbox() {
          return (
            /* binding */
            _FormlyFieldCheckbox
          );
        },

        /* harmony export */
        "FormlyFieldDatetime": function FormlyFieldDatetime() {
          return (
            /* binding */
            _FormlyFieldDatetime
          );
        },

        /* harmony export */
        "FormlyFieldRadio": function FormlyFieldRadio() {
          return (
            /* binding */
            _FormlyFieldRadio
          );
        },

        /* harmony export */
        "FormlyFieldToggle": function FormlyFieldToggle() {
          return (
            /* binding */
            _FormlyFieldToggle
          );
        },

        /* harmony export */
        "FormlyFieldSelect": function FormlyFieldSelect() {
          return (
            /* binding */
            _FormlyFieldSelect
          );
        },

        /* harmony export */
        "FormlyFieldRange": function FormlyFieldRange() {
          return (
            /* binding */
            _FormlyFieldRange
          );
        },

        /* harmony export */
        "FormlyFieldTextArea": function FormlyFieldTextArea() {
          return (
            /* binding */
            _FormlyFieldTextArea
          );
        },

        /* harmony export */
        "FormlyWrapperFormField": function FormlyWrapperFormField() {
          return (
            /* binding */
            _FormlyWrapperFormField
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            IonFormlyAttributes
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            FIELD_TYPE_COMPONENTS
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            IONIC_FORMLY_CONFIG
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-formly/core/select */
      89705);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-formly/core */
      75741);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function FormlyFieldInput_ion_input_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-input", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.to.type || "text")("formControl", ctx_r0.formControl)("ionFormlyAttributes", ctx_r0.field);
        }
      }

      function FormlyFieldInput_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-input", 3);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.formControl)("ionFormlyAttributes", ctx_r2.field);
        }
      }

      function FormlyFieldRadio_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-radio", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", option_r2.disabled || ctx_r0.formControl.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.value);
        }
      }

      function FormlyFieldRadio_ion_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "formly-validation-message", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r1.field);
        }
      }

      function FormlyFieldSelect_ng_container_0_ion_select_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.value)("disabled", option_r3.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
        }
      }

      function FormlyFieldSelect_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormlyFieldSelect_ng_container_0_ion_select_option_2_Template, 2, 3, "ion-select-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var selectOptions_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-self", ctx_r0.to.labelPosition === "floating" ? "stretch" : "")("max-width", ctx_r0.to.labelPosition === "floating" ? 100 : "", "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.formControl)("compareWith", ctx_r0.to.compareWith)("ionFormlyAttributes", ctx_r0.field)("multiple", ctx_r0.to.multiple)("interface", ctx_r0.to["interface"])("okText", ctx_r0.to.okText)("cancelText", ctx_r0.to.cancelText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", selectOptions_r1);
        }
      }

      function FormlyWrapperFormField_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormlyWrapperFormField_ng_template_4_Template(rf, ctx) {}

      function FormlyWrapperFormField_ion_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "formly-validation-message", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r3.field);
        }
      }

      var _FormlyFieldInput = /*#__PURE__*/function (_ngx_formly_core__WEB) {
        _inherits(_FormlyFieldInput, _ngx_formly_core__WEB);

        var _super6 = _createSuper(_FormlyFieldInput);

        function _FormlyFieldInput() {
          _classCallCheck(this, _FormlyFieldInput);

          return _super6.apply(this, arguments);
        }

        return _createClass(_FormlyFieldInput);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldInput.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldInput_BaseFactory;
        return function FormlyFieldInput_Factory(t) {
          return (ɵFormlyFieldInput_BaseFactory || (ɵFormlyFieldInput_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldInput)))(t || _FormlyFieldInput);
        };
      }();

      _FormlyFieldInput.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldInput,
        selectors: [["formly-field-ion-input"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 2,
        consts: [[3, "type", "formControl", "ionFormlyAttributes", 4, "ngIf", "ngIfElse"], ["numberTmp", ""], [3, "type", "formControl", "ionFormlyAttributes"], ["type", "number", 3, "formControl", "ionFormlyAttributes"]],
        template: function FormlyFieldInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldInput_ion_input_0_Template, 1, 3, "ion-input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldInput_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.to.type !== "number")("ngIfElse", _r1);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NumericValueAccessor];
        },
        styles: ["[_nghost-%COMP%] { display: inherit; }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-input',
            template: "\n    <ion-input *ngIf=\"to.type !== 'number' else numberTmp\" [type]=\"to.type || 'text'\" [formControl]=\"formControl\" [ionFormlyAttributes]=\"field\"></ion-input>\n    <ng-template #numberTmp>\n      <ion-input type=\"number\" [formControl]=\"formControl\" [ionFormlyAttributes]=\"field\"></ion-input>\n    </ng-template>\n  ",
            styles: [':host { display: inherit; }']
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldCheckbox = /*#__PURE__*/function (_ngx_formly_core__WEB2) {
        _inherits(_FormlyFieldCheckbox, _ngx_formly_core__WEB2);

        var _super7 = _createSuper(_FormlyFieldCheckbox);

        function _FormlyFieldCheckbox() {
          _classCallCheck(this, _FormlyFieldCheckbox);

          return _super7.apply(this, arguments);
        }

        return _createClass(_FormlyFieldCheckbox);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldCheckbox.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldCheckbox_BaseFactory;
        return function FormlyFieldCheckbox_Factory(t) {
          return (ɵFormlyFieldCheckbox_BaseFactory || (ɵFormlyFieldCheckbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldCheckbox)))(t || _FormlyFieldCheckbox);
        };
      }();

      _FormlyFieldCheckbox.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldCheckbox,
        selectors: [["formly-field-ion-checkbox"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 2,
        consts: [[3, "formControl", "ionFormlyAttributes"]],
        template: function FormlyFieldCheckbox_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-checkbox", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes];
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-checkbox',
            template: "\n    <ion-checkbox\n      [formControl]=\"formControl\"\n      [ionFormlyAttributes]=\"field\">\n    </ion-checkbox>\n  "
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldDatetime = /*#__PURE__*/function (_ngx_formly_core__WEB3) {
        _inherits(_FormlyFieldDatetime, _ngx_formly_core__WEB3);

        var _super8 = _createSuper(_FormlyFieldDatetime);

        function _FormlyFieldDatetime() {
          _classCallCheck(this, _FormlyFieldDatetime);

          return _super8.apply(this, arguments);
        }

        return _createClass(_FormlyFieldDatetime);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldDatetime.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldDatetime_BaseFactory;
        return function FormlyFieldDatetime_Factory(t) {
          return (ɵFormlyFieldDatetime_BaseFactory || (ɵFormlyFieldDatetime_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldDatetime)))(t || _FormlyFieldDatetime);
        };
      }();

      _FormlyFieldDatetime.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldDatetime,
        selectors: [["formly-field-ion-datetime"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 18,
        consts: [[3, "cancelText", "dayNames", "dayShortNames", "dayValues", "displayFormat", "doneText", "hourValues", "minuteValues", "monthNames", "monthShortNames", "monthValues", "pickerFormat", "pickerOptions", "yearValues", "min", "max", "formControl", "ionFormlyAttributes"]],
        template: function FormlyFieldDatetime_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-datetime", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelText", ctx.to.cancelText)("dayNames", ctx.to.dayNames)("dayShortNames", ctx.to.dayShortNames)("dayValues", ctx.to.dayValues)("displayFormat", ctx.to.displayFormat)("doneText", ctx.to.doneText)("hourValues", ctx.to.hourValues)("minuteValues", ctx.to.minuteValues)("monthNames", ctx.to.monthNames)("monthShortNames", ctx.to.monthShortNames)("monthValues", ctx.to.monthValues)("pickerFormat", ctx.to.pickerFormat)("pickerOptions", ctx.to.pickerOptions)("yearValues", ctx.to.yearValues)("min", ctx.to.minDate ? ctx.to.minDate : ctx.to.min)("max", ctx.to.maxDate ? ctx.to.maxDate : ctx.to.max)("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes];
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldDatetime, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-datetime',
            template: "\n    <ion-datetime\n      [cancelText]=\"to.cancelText\"\n      [dayNames]=\"to.dayNames\"\n      [dayShortNames]=\"to.dayShortNames\"\n      [dayValues]=\"to.dayValues\"\n      [displayFormat]=\"to.displayFormat\"\n      [doneText]=\"to.doneText\"\n      [hourValues]=\"to.hourValues\"\n      [minuteValues]=\"to.minuteValues\"\n      [monthNames]=\"to.monthNames\"\n      [monthShortNames]=\"to.monthShortNames\"\n      [monthValues]=\"to.monthValues\"\n      [pickerFormat]=\"to.pickerFormat\"\n      [pickerOptions]=\"to.pickerOptions\"\n      [yearValues]=\"to.yearValues\"\n      [min]=\"to.minDate ? to.minDate : to.min\"\n      [max]=\"to.maxDate ? to.maxDate : to.max\"\n      [formControl]=\"formControl\"\n      [ionFormlyAttributes]=\"field\">\n    </ion-datetime>\n  "
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldRadio = /*#__PURE__*/function (_ngx_formly_core__WEB4) {
        _inherits(_FormlyFieldRadio, _ngx_formly_core__WEB4);

        var _super9 = _createSuper(_FormlyFieldRadio);

        function _FormlyFieldRadio() {
          var _this38;

          _classCallCheck(this, _FormlyFieldRadio);

          _this38 = _super9.apply(this, arguments);
          _this38.defaultOptions = {
            templateOptions: {
              options: []
            }
          };
          return _this38;
        }

        return _createClass(_FormlyFieldRadio);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldRadio.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldRadio_BaseFactory;
        return function FormlyFieldRadio_Factory(t) {
          return (ɵFormlyFieldRadio_BaseFactory || (ɵFormlyFieldRadio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldRadio)))(t || _FormlyFieldRadio);
        };
      }();

      _FormlyFieldRadio.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldRadio,
        selectors: [["formly-field-ion-radio"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 8,
        vars: 10,
        consts: [[3, "formControl", "ionFormlyAttributes"], [3, "disabled", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], [3, "disabled"], [3, "value"], ["lines", "none"], ["color", "danger"], [3, "field"]],
        template: function FormlyFieldRadio_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-radio-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormlyFieldRadio_ion_item_4_Template, 4, 3, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "formlySelectOptions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormlyFieldRadio_ion_item_7_Template, 5, 1, "ion-item", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.to.options, ctx.field)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonListHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["ɵc"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectOptionsPipe];
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldRadio, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-radio',
            template: "\n    <ion-list>\n      <ion-radio-group\n        [formControl]=\"formControl\"\n        [ionFormlyAttributes]=\"field\">\n        <ion-list-header>{{ to.label }}</ion-list-header>\n        <ion-item *ngFor=\"let option of to.options | formlySelectOptions:field | async\" [disabled]=\"option.disabled || formControl.disabled\">\n          <ion-label>{{ option.label }}</ion-label>\n          <ion-radio [value]=\"option.value\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-item lines=\"none\" *ngIf=\"showError\">\n      <ion-label>\n        <ion-text color=\"danger\">\n          <p>\n            <formly-validation-message [field]=\"field\"></formly-validation-message>\n          </p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  "
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldToggle = /*#__PURE__*/function (_ngx_formly_core__WEB5) {
        _inherits(_FormlyFieldToggle, _ngx_formly_core__WEB5);

        var _super10 = _createSuper(_FormlyFieldToggle);

        function _FormlyFieldToggle() {
          _classCallCheck(this, _FormlyFieldToggle);

          return _super10.apply(this, arguments);
        }

        return _createClass(_FormlyFieldToggle);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldToggle.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldToggle_BaseFactory;
        return function FormlyFieldToggle_Factory(t) {
          return (ɵFormlyFieldToggle_BaseFactory || (ɵFormlyFieldToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldToggle)))(t || _FormlyFieldToggle);
        };
      }();

      _FormlyFieldToggle.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldToggle,
        selectors: [["formly-field-ion-toggle"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 2,
        consts: [[3, "formControl", "ionFormlyAttributes"]],
        template: function FormlyFieldToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-toggle", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes];
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-toggle',
            template: "\n    <ion-toggle\n      [formControl]=\"formControl\"\n      [ionFormlyAttributes]=\"field\">\n    </ion-toggle>\n  "
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldSelect = /*#__PURE__*/function (_ngx_formly_core__WEB6) {
        _inherits(_FormlyFieldSelect, _ngx_formly_core__WEB6);

        var _super11 = _createSuper(_FormlyFieldSelect);

        function _FormlyFieldSelect() {
          var _this39;

          _classCallCheck(this, _FormlyFieldSelect);

          _this39 = _super11.apply(this, arguments);
          _this39.defaultOptions = {
            templateOptions: {
              options: [],

              /**
               * @param {?} o1
               * @param {?} o2
               * @return {?}
               */
              compareWith: function compareWith(o1, o2) {
                return o1 === o2;
              }
            }
          };
          return _this39;
        }

        return _createClass(_FormlyFieldSelect);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldSelect.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldSelect_BaseFactory;
        return function FormlyFieldSelect_Factory(t) {
          return (ɵFormlyFieldSelect_BaseFactory || (ɵFormlyFieldSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldSelect)))(t || _FormlyFieldSelect);
        };
      }();

      _FormlyFieldSelect.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldSelect,
        selectors: [["formly-field-ion-select"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 6,
        consts: [[4, "ngIf"], [3, "formControl", "compareWith", "ionFormlyAttributes", "multiple", "interface", "okText", "cancelText"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]],
        template: function FormlyFieldSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldSelect_ng_container_0_Template, 3, 12, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formlySelectOptions");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx.to.options, ctx.field)));
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectOptionsPipe];
        },
        styles: ["[_nghost-%COMP%] { display: inherit; }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-select',
            template: "\n    <!-- ng-container used as a workaround for https://github.com/ionic-team/ionic/issues/19324 -->\n    <ng-container *ngIf=\"to.options | formlySelectOptions:field | async; let selectOptions\">\n      <ion-select\n        [style.align-self]=\"to.labelPosition === 'floating' ? 'stretch':''\"\n        [style.max-width.%]=\"to.labelPosition === 'floating' ? 100 : ''\"\n\n        [formControl]=\"formControl\"\n        [compareWith]=\"to.compareWith\"\n        [ionFormlyAttributes]=\"field\"\n        [multiple]=\"to.multiple\"\n        [interface]=\"to.interface\"\n        [okText]=\"to.okText\"\n        [cancelText]=\"to.cancelText\">\n        <ion-select-option *ngFor=\"let option of selectOptions\" [value]=\"option.value\" [disabled]=\"option.disabled\">\n            {{ option.label }}\n        </ion-select-option>\n      </ion-select>\n    </ng-container>\n  ",
            styles: [':host { display: inherit; }']
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldRange = /*#__PURE__*/function (_ngx_formly_core__WEB7) {
        _inherits(_FormlyFieldRange, _ngx_formly_core__WEB7);

        var _super12 = _createSuper(_FormlyFieldRange);

        function _FormlyFieldRange() {
          _classCallCheck(this, _FormlyFieldRange);

          return _super12.apply(this, arguments);
        }

        return _createClass(_FormlyFieldRange);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldRange.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldRange_BaseFactory;
        return function FormlyFieldRange_Factory(t) {
          return (ɵFormlyFieldRange_BaseFactory || (ɵFormlyFieldRange_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldRange)))(t || _FormlyFieldRange);
        };
      }();

      _FormlyFieldRange.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldRange,
        selectors: [["formly-field-ion-range"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 6,
        consts: [[3, "min", "max", "formControl", "ionFormlyAttributes"], ["slot", "start"], ["slot", "end"]],
        template: function FormlyFieldRange_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-range", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.to.min)("max", ctx.to.max)("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.max);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel];
        },
        styles: ["[_nghost-%COMP%] { display: inherit; }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldRange, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-range',
            template: "\n    <ion-range\n      [min]=\"to.min\"\n      [max]=\"to.max\"\n      [formControl]=\"formControl\"\n      [ionFormlyAttributes]=\"field\">\n      <ion-label slot=\"start\">{{ to.min }}</ion-label>\n      <ion-label slot=\"end\">{{ to.max }}</ion-label>\n    </ion-range>\n  ",
            styles: [':host { display: inherit; }']
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyFieldTextArea = /*#__PURE__*/function (_ngx_formly_core__WEB8) {
        _inherits(_FormlyFieldTextArea, _ngx_formly_core__WEB8);

        var _super13 = _createSuper(_FormlyFieldTextArea);

        function _FormlyFieldTextArea() {
          _classCallCheck(this, _FormlyFieldTextArea);

          return _super13.apply(this, arguments);
        }

        return _createClass(_FormlyFieldTextArea);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType);

      _FormlyFieldTextArea.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyFieldTextArea_BaseFactory;
        return function FormlyFieldTextArea_Factory(t) {
          return (ɵFormlyFieldTextArea_BaseFactory || (ɵFormlyFieldTextArea_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyFieldTextArea)))(t || _FormlyFieldTextArea);
        };
      }();

      _FormlyFieldTextArea.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyFieldTextArea,
        selectors: [["formly-field-ion-textarea"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 4,
        consts: [[3, "formControl", "ionFormlyAttributes", "cols", "rows"]],
        template: function FormlyFieldTextArea_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-textarea", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field)("cols", ctx.to.cols)("rows", ctx.to.rows);
          }
        },
        directives: function directives() {
          return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes];
        },
        styles: ["[_nghost-%COMP%] { display: inherit; }"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyFieldTextArea, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-field-ion-textarea',
            template: "\n    <ion-textarea\n      [formControl]=\"formControl\"\n      [ionFormlyAttributes]=\"field\"\n      [cols]=\"to.cols\"\n      [rows]=\"to.rows\">\n    </ion-textarea>\n  ",
            styles: [':host { display: inherit; }']
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyWrapperFormField = /*#__PURE__*/function (_ngx_formly_core__WEB9) {
        _inherits(_FormlyWrapperFormField, _ngx_formly_core__WEB9);

        var _super14 = _createSuper(_FormlyWrapperFormField);

        function _FormlyWrapperFormField() {
          _classCallCheck(this, _FormlyWrapperFormField);

          return _super14.apply(this, arguments);
        }

        return _createClass(_FormlyWrapperFormField);
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper);

      _FormlyWrapperFormField.ɵfac = /*@__PURE__*/function () {
        var ɵFormlyWrapperFormField_BaseFactory;
        return function FormlyWrapperFormField_Factory(t) {
          return (ɵFormlyWrapperFormField_BaseFactory || (ɵFormlyWrapperFormField_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_FormlyWrapperFormField)))(t || _FormlyWrapperFormField);
        };
      }();

      _FormlyWrapperFormField.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormlyWrapperFormField,
        selectors: [["formly-wrapper-ion-form-field"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 5,
        consts: [[3, "lines"], [3, "position"], ["aria-hidden", "true", 4, "ngIf"], ["fieldComponent", ""], ["lines", "none", 4, "ngIf"], ["aria-hidden", "true"], ["lines", "none"], ["color", "danger"], [3, "field"]],
        template: function FormlyWrapperFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormlyWrapperFormField_span_3_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormlyWrapperFormField_ng_template_4_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormlyWrapperFormField_ion_item_6_Template, 5, 1, "ion-item", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lines", ctx.to.itemLines);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.to.labelPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.to.label, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.to.required && ctx.to.hideRequiredMarker !== true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["ɵc"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyWrapperFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'formly-wrapper-ion-form-field',
            template: "\n    <ion-item [lines]=\"to.itemLines\">\n      <ion-label [position]=\"to.labelPosition\">\n        {{ to.label }}\n        <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" aria-hidden=\"true\">*</span>\n      </ion-label>\n      <ng-template #fieldComponent></ng-template>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"showError\">\n      <ion-label>\n        <ion-text color=\"danger\">\n          <p>\n            <formly-validation-message [field]=\"field\"></formly-validation-message>\n          </p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  "
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var FIELD_TYPE_COMPONENTS = [// types
      _FormlyFieldInput, _FormlyFieldCheckbox, _FormlyFieldDatetime, _FormlyFieldRadio, _FormlyFieldToggle, _FormlyFieldSelect, _FormlyFieldRange, _FormlyFieldTextArea, // wrappers
      _FormlyWrapperFormField];
      /** @type {?} */

      var IONIC_FORMLY_CONFIG = {
        types: [{
          name: 'input',
          component: _FormlyFieldInput,
          wrappers: ['form-field']
        }, {
          name: 'checkbox',
          component: _FormlyFieldCheckbox,
          wrappers: ['form-field']
        }, {
          name: 'datetime',
          component: _FormlyFieldDatetime,
          wrappers: ['form-field']
        }, {
          name: 'radio',
          component: _FormlyFieldRadio,
          wrappers: []
        }, {
          name: 'toggle',
          component: _FormlyFieldToggle,
          wrappers: ['form-field']
        }, {
          name: 'select',
          component: _FormlyFieldSelect,
          wrappers: ['form-field']
        }, {
          name: 'range',
          component: _FormlyFieldRange,
          wrappers: ['form-field']
        }, {
          name: 'textarea',
          component: _FormlyFieldTextArea,
          wrappers: ['form-field']
        }],
        wrappers: [{
          name: 'form-field',
          component: _FormlyWrapperFormField
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var IonFormlyAttributes = /*#__PURE__*/function (_ngx_formly_core__WEB10) {
        _inherits(IonFormlyAttributes, _ngx_formly_core__WEB10);

        var _super15 = _createSuper(IonFormlyAttributes);

        function IonFormlyAttributes() {
          _classCallCheck(this, IonFormlyAttributes);

          return _super15.apply(this, arguments);
        }

        _createClass(IonFormlyAttributes, [{
          key: "focusElement",
          value:
          /**
           * @param {?} element
           * @param {?} value
           * @return {?}
           */
          function focusElement(element, value) {
            if (!element.setFocus || !value) {
              return;
            }

            if (!element.getInputElement()) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return element.setFocus();
              }, 300);
            } else {
              element.setFocus();
            }
          }
        }]);

        return IonFormlyAttributes;
      }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyAttributes);

      IonFormlyAttributes.ɵfac = /*@__PURE__*/function () {
        var ɵIonFormlyAttributes_BaseFactory;
        return function IonFormlyAttributes_Factory(t) {
          return (ɵIonFormlyAttributes_BaseFactory || (ɵIonFormlyAttributes_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonFormlyAttributes)))(t || IonFormlyAttributes);
        };
      }();

      IonFormlyAttributes.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: IonFormlyAttributes,
        selectors: [["", "ionFormlyAttributes", ""]],
        hostBindings: function IonFormlyAttributes_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function IonFormlyAttributes_ionFocus_HostBindingHandler($event) {
              return ctx.onFocus($event);
            })("ionBlur", function IonFormlyAttributes_ionBlur_HostBindingHandler($event) {
              return ctx.onBlur($event);
            })("ionChange", function IonFormlyAttributes_ionChange_HostBindingHandler($event) {
              return ctx.onChange($event);
            });
          }
        },
        inputs: {
          field: ["ionFormlyAttributes", "field"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      IonFormlyAttributes.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ionFormlyAttributes']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonFormlyAttributes, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            // tslint:disable-next-line
            selector: '[ionFormlyAttributes]',
            host: {
              '(ionFocus)': 'onFocus($event)',
              '(ionBlur)': 'onBlur($event)',
              '(ionChange)': 'onChange($event)'
            }
          }]
        }], null, {
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ionFormlyAttributes']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _FormlyIonicModule = /*#__PURE__*/_createClass(function _FormlyIonicModule() {
        _classCallCheck(this, _FormlyIonicModule);
      });

      _FormlyIonicModule.ɵfac = function FormlyIonicModule_Factory(t) {
        return new (t || _FormlyIonicModule)();
      };

      _FormlyIonicModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _FormlyIonicModule
      });
      _FormlyIonicModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild(IONIC_FORMLY_CONFIG)]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormlyIonicModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [FIELD_TYPE_COMPONENTS, IonFormlyAttributes],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild(IONIC_FORMLY_CONFIG)],
            exports: [IonFormlyAttributes]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_FormlyIonicModule, {
          declarations: function declarations() {
            return [_FormlyFieldInput, _FormlyFieldCheckbox, _FormlyFieldDatetime, _FormlyFieldRadio, _FormlyFieldToggle, _FormlyFieldSelect, _FormlyFieldRange, _FormlyFieldTextArea, _FormlyWrapperFormField, IonFormlyAttributes];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule];
          },
          exports: function exports() {
            return [IonFormlyAttributes];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    31764:
    /*!*********************************************!*\
      !*** ./src/app/test/test-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestPageRoutingModule": function TestPageRoutingModule() {
          return (
            /* binding */
            _TestPageRoutingModule
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


      var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test.page */
      36103);

      var routes = [{
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
      }];

      var _TestPageRoutingModule = /*#__PURE__*/_createClass(function TestPageRoutingModule() {
        _classCallCheck(this, TestPageRoutingModule);
      });

      _TestPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TestPageRoutingModule);
      /***/
    },

    /***/
    16615:
    /*!*************************************!*\
      !*** ./src/app/test/test.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestPageModule": function TestPageModule() {
          return (
            /* binding */
            _TestPageModule
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


      var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-routing.module */
      31764);
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test.page */
      36103);
      /* harmony import */


      var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-formly/core */
      75741);
      /* harmony import */


      var _ngx_formly_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-formly/ionic */
      5279);
      /* harmony import */


      var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-dynamic-forms/ui-material */
      90462);
      /* harmony import */


      var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-dynamic-forms/ui-ionic */
      81029); //import { myCustomValidator } from './model';


      var _TestPageModule = /*#__PURE__*/_createClass(function TestPageModule() {
        _classCallCheck(this, TestPageModule);
      });

      _TestPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.FormlyModule.forRoot(), _ngx_formly_ionic__WEBPACK_IMPORTED_MODULE_8__.FormlyIonicModule, _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_9__.DynamicFormsMaterialUIModule, _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_10__.DynamicFormsIonicUIModule],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage]
      })], _TestPageModule);
      /***/
    },

    /***/
    36103:
    /*!***********************************!*\
      !*** ./src/app/test/test.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestPage": function TestPage() {
          return (
            /* binding */
            _TestPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./test.page.html */
      60774);
      /* harmony import */


      var _test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test.page.scss */
      47626);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      51491);

      var _TestPage = /*#__PURE__*/function () {
        function TestPage(auth) {
          _classCallCheck(this, TestPage);

          this.auth = auth;
          this.model = [];
          this.selectedFileBLOB = "./assets/files/cert1.pdf";
        }

        _createClass(TestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.auth.database.executeSql("select * from SyncLog", []).then(function (res) {
              for (var i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
                _this40.model.push(res.rows.item(i));
              }
            })["catch"](function (e) {
              _this40.auth.showToast("err" + JSON.stringify(e));
            });
          }
        }, {
          key: "Clear",
          value: function Clear() {
            var _this41 = this;

            this.auth.database.executeSql("delete from SyncLog", []).then(function (res) {
              _this41.model = [];
            });
          }
        }]);

        return TestPage;
      }();

      _TestPage.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _TestPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-test',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TestPage);
      /***/
    },

    /***/
    50760:
    /*!*************!*\
      !*** tslib ***!
      \*************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "__extends": function __extends() {
          return (
            /* binding */
            _extends
          );
        },

        /* harmony export */
        "__assign": function __assign() {
          return (
            /* binding */
            _assign2
          );
        },

        /* harmony export */
        "__rest": function __rest() {
          return (
            /* binding */
            _rest
          );
        },

        /* harmony export */
        "__decorate": function __decorate() {
          return (
            /* binding */
            _decorate
          );
        },

        /* harmony export */
        "__param": function __param() {
          return (
            /* binding */
            _param
          );
        },

        /* harmony export */
        "__metadata": function __metadata() {
          return (
            /* binding */
            _metadata
          );
        },

        /* harmony export */
        "__awaiter": function __awaiter() {
          return (
            /* binding */
            _awaiter
          );
        },

        /* harmony export */
        "__generator": function __generator() {
          return (
            /* binding */
            _generator
          );
        },

        /* harmony export */
        "__createBinding": function __createBinding() {
          return (
            /* binding */
            _createBinding
          );
        },

        /* harmony export */
        "__exportStar": function __exportStar() {
          return (
            /* binding */
            _exportStar
          );
        },

        /* harmony export */
        "__values": function __values() {
          return (
            /* binding */
            _values
          );
        },

        /* harmony export */
        "__read": function __read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "__spread": function __spread() {
          return (
            /* binding */
            _spread
          );
        },

        /* harmony export */
        "__spreadArrays": function __spreadArrays() {
          return (
            /* binding */
            _spreadArrays
          );
        },

        /* harmony export */
        "__await": function __await() {
          return (
            /* binding */
            _await
          );
        },

        /* harmony export */
        "__asyncGenerator": function __asyncGenerator() {
          return (
            /* binding */
            _asyncGenerator
          );
        },

        /* harmony export */
        "__asyncDelegator": function __asyncDelegator() {
          return (
            /* binding */
            _asyncDelegator
          );
        },

        /* harmony export */
        "__asyncValues": function __asyncValues() {
          return (
            /* binding */
            _asyncValues
          );
        },

        /* harmony export */
        "__makeTemplateObject": function __makeTemplateObject() {
          return (
            /* binding */
            _makeTemplateObject
          );
        },

        /* harmony export */
        "__importStar": function __importStar() {
          return (
            /* binding */
            _importStar
          );
        },

        /* harmony export */
        "__importDefault": function __importDefault() {
          return (
            /* binding */
            _importDefault
          );
        },

        /* harmony export */
        "__classPrivateFieldGet": function __classPrivateFieldGet() {
          return (
            /* binding */
            _classPrivateFieldGet
          );
        },

        /* harmony export */
        "__classPrivateFieldSet": function __classPrivateFieldSet() {
          return (
            /* binding */
            _classPrivateFieldSet
          );
        }
        /* harmony export */

      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function _extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function _assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };

      function _rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function _decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function _param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function _metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function _awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function _generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function _createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function _exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function _values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function _read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function _spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(_read(arguments[i]));
        }

        return ar;
      }

      function _spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function _await(v) {
        return this instanceof _await ? (this.v = v, this) : new _await(v);
      }

      function _asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function _asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: _await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function _asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof _values === "function" ? _values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function _makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function _importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function _importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function _classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function _classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    60774:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/test/test.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n\n<ion-header>\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n        <ion-title style=\"font-size: 16px;\">Sync Log</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-item>\n        <ion-grid>\n            <ion-row>\n                <ion-col> JOBGUID </ion-col>\n                <ion-col> Action Name </ion-col>\n                <ion-col> Success/Error Message </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n    <ion-item *ngFor='let list of model;'>\n        <ion-grid>\n            <ion-row>\n                <ion-col>  {{list.JOBGUID}}  </ion-col>\n                <ion-col>  {{list.ActionName}}   </ion-col>\n                <ion-col>  {{list.Msg}}  </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\" Clear()\">Clear</ion-button>\n  </ion-footer>";
      /***/
    },

    /***/
    47626:
    /*!*************************************!*\
      !*** ./src/app/test/test.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      module.exports = "p {\n  color: red;\n  align-content: center;\n  width: -moz-max-content;\n  width: max-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n#canvas_container {\n  width: 800px;\n  height: 450px;\n  overflow: auto;\n}\n\n#canvas_container {\n  background: #333;\n  text-align: center;\n  border: solid 3px;\n}\n\n.fixed-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.outerdiv {\n  width: 100%;\n  height: 100%;\n}\n\nmat-select {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFHSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBTUU7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUpOOztBQU9FO0VBQ0ksV0FBQTtBQUpOIiwiZmlsZSI6InRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5we1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuIFxuI2NhbnZhc19jb250YWluZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jY2FudmFzX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHg7XG59XG5cbi5maXhlZC1pbWcge1xuIFxuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgXG4gIH1cblxuICAub3V0ZXJkaXZ7XG4gICAgICAgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogIDEwMCU7XG4gIH1cblxuICBtYXQtc2VsZWN0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLy8gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyB3aWR0aDogMjUwcHg7XG4gICAgLy8gaGVpZ2h0OiAyNTBweDtcbiAgICAvLyBvYmplY3QtZml0OiBjb3ZlciJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_test_test_module_ts-es5.js.map