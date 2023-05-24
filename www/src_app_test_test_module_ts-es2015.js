"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_test_test_module_ts"],{

/***/ 89705:
/*!***************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core-select.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlySelectModule": function() { return /* binding */ FormlySelectModule; },
/* harmony export */   "FormlySelectOptionsPipe": function() { return /* binding */ FormlySelectOptionsPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98636);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class FormlySelectOptionsPipe {
    /**
     * @param {?} options
     * @param {?=} field
     * @return {?}
     */
    transform(options, field) {
        if (!(options instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable)) {
            options = this.observableOf(options, field);
        }
        else {
            this.dispose();
        }
        return ((/** @type {?} */ (options))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((/**
         * @param {?} value
         * @return {?}
         */
        value => this.toOptions(value, field || {}))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dispose();
    }
    /**
     * @private
     * @param {?} options
     * @param {?} field
     * @return {?}
     */
    toOptions(options, field) {
        /** @type {?} */
        const gOptions = [];
        /** @type {?} */
        const groups = {};
        /** @type {?} */
        const to = field.templateOptions || {};
        to._flatOptions = true;
        options.map((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (!this.getGroupProp(option, to)) {
                gOptions.push(this.toOption(option, to));
            }
            else {
                to._flatOptions = false;
                if (!groups[this.getGroupProp(option, to)]) {
                    groups[this.getGroupProp(option, to)] = [];
                    gOptions.push({
                        label: this.getGroupProp(option, to),
                        group: groups[this.getGroupProp(option, to)],
                    });
                }
                groups[this.getGroupProp(option, to)].push(this.toOption(option, to));
            }
        }));
        return gOptions;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    toOption(item, to) {
        return {
            label: this.getLabelProp(item, to),
            value: this.getValueProp(item, to),
            disabled: this.getDisabledProp(item, to) || false,
        };
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    getLabelProp(item, to) {
        if (typeof to.labelProp === 'function') {
            return to.labelProp(item);
        }
        if (this.shouldUseLegacyOption(item, to)) {
            console.warn(`NgxFormly: legacy select option '{key, value}' is deprecated since v5.5, use '{value, label}' instead.`);
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
    getValueProp(item, to) {
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
    getDisabledProp(item, to) {
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
    getGroupProp(item, to) {
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
    shouldUseLegacyOption(item, to) {
        return !to.valueProp
            && !to.labelProp
            && item != null
            && typeof item === 'object'
            && 'key' in item
            && 'value' in item;
    }
    /**
     * @private
     * @return {?}
     */
    dispose() {
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
    observableOf(options, f) {
        this.dispose();
        if (f && f.options && f.options.fieldChanges) {
            this._subscription = f.options.fieldChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((/**
             * @param {?} __0
             * @return {?}
             */
            ({ property, type, field }) => {
                return type === 'expressionChanges'
                    && property.indexOf('templateOptions.options') === 0
                    && field === f
                    && Array.isArray(field.templateOptions.options)
                    && !!this._options;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((/**
             * @return {?}
             */
            () => this._options.next((/** @type {?} */ (f.templateOptions.options)))))).subscribe();
        }
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(options);
        return this._options.asObservable();
    }
}
FormlySelectOptionsPipe.ɵfac = function FormlySelectOptionsPipe_Factory(t) { return new (t || FormlySelectOptionsPipe)(); };
FormlySelectOptionsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefinePipe"]({ name: "formlySelectOptions", type: FormlySelectOptionsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FormlySelectOptionsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Pipe,
        args: [{ name: 'formlySelectOptions' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlySelectModule {
}
FormlySelectModule.ɵfac = function FormlySelectModule_Factory(t) { return new (t || FormlySelectModule)(); };
FormlySelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FormlySelectModule });
FormlySelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FormlySelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
        args: [{
                declarations: [FormlySelectOptionsPipe],
                exports: [FormlySelectOptionsPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormlySelectModule, { declarations: [FormlySelectOptionsPipe], exports: [FormlySelectOptionsPipe] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 75741:
/*!********************************************************************************!*\
  !*** ./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyForm": function() { return /* binding */ FormlyForm; },
/* harmony export */   "FormlyField": function() { return /* binding */ FormlyField; },
/* harmony export */   "FormlyAttributes": function() { return /* binding */ FormlyAttributes; },
/* harmony export */   "FORMLY_CONFIG": function() { return /* binding */ FORMLY_CONFIG; },
/* harmony export */   "FormlyConfig": function() { return /* binding */ FormlyConfig; },
/* harmony export */   "FormlyFormBuilder": function() { return /* binding */ FormlyFormBuilder; },
/* harmony export */   "FieldType": function() { return /* binding */ FieldType; },
/* harmony export */   "Field": function() { return /* binding */ Field; },
/* harmony export */   "FieldArrayType": function() { return /* binding */ FieldArrayType; },
/* harmony export */   "FieldWrapper": function() { return /* binding */ FieldWrapper; },
/* harmony export */   "FormlyModule": function() { return /* binding */ FormlyModule; },
/* harmony export */   "ɵdefineHiddenProp": function() { return /* binding */ defineHiddenProp; },
/* harmony export */   "ɵreverseDeepMerge": function() { return /* binding */ reverseDeepMerge; },
/* harmony export */   "ɵgetFieldValue": function() { return /* binding */ getFieldValue; },
/* harmony export */   "ɵclone": function() { return /* binding */ clone; },
/* harmony export */   "ɵwrapProperty": function() { return /* binding */ wrapProperty; },
/* harmony export */   "ɵa": function() { return /* binding */ defaultFormlyConfig; },
/* harmony export */   "ɵe": function() { return /* binding */ CoreExtension; },
/* harmony export */   "ɵh": function() { return /* binding */ FieldExpressionExtension; },
/* harmony export */   "ɵg": function() { return /* binding */ FieldFormExtension; },
/* harmony export */   "ɵf": function() { return /* binding */ FieldValidationExtension; },
/* harmony export */   "ɵd": function() { return /* binding */ FormlyTemplateType; },
/* harmony export */   "ɵb": function() { return /* binding */ FormlyGroup; },
/* harmony export */   "ɵc": function() { return /* binding */ FormlyValidationMessage; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 50760);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 25160);








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} form
 * @param {?} callback
 * @return {?}
 */





const _c0 = ["content"];
function FormlyForm_formly_field_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 2);
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", field_r2.form)("options", field_r2.options)("model", field_r2.model)("field", field_r2);
} }
const _c1 = ["*"];
const _c2 = ["container"];
function FormlyField_ng_template_0_Template(rf, ctx) { }
const _c3 = ["fieldComponent"];
function FormlyGroup_formly_field_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 1);
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", f_r1);
} }
function disableTreeValidityCall(form, callback) {
    /** @type {?} */
    const _updateTreeValidity = form._updateTreeValidity.bind(form);
    form._updateTreeValidity = (/**
     * @return {?}
     */
    () => { });
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
    if (field.id)
        return field.id;
    /** @type {?} */
    let type = field.type;
    if (!type && field.template) {
        type = 'template';
    }
    if (isFunction(type)) {
        type = ((/** @type {?} */ (type))).prototype.constructor.name;
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
        let path = [];
        if (typeof field.key === 'string') {
            /** @type {?} */
            const key = field.key.indexOf('[') === -1
                ? field.key
                : field.key.replace(/\[(\w+)\]/g, '.$1');
            path = key.indexOf('.') !== -1 ? key.split('.') : [key];
        }
        else if (Array.isArray(field.key)) {
            path = field.key.slice(0);
        }
        else {
            path = [`${field.key}`];
        }
        field._keyPath = { key: field.key, path };
    }
    return field._keyPath.path.slice(0);
}
/** @type {?} */
const FORMLY_VALIDATORS = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];
/**
 * @param {?} field
 * @param {?} value
 * @return {?}
 */
function assignFieldValue(field, value) {
    /** @type {?} */
    let paths = getKeyPath(field);
    if (paths.length === 0) {
        return;
    }
    /** @type {?} */
    let root = field;
    while (root.parent) {
        root = root.parent;
        paths = [...getKeyPath(root), ...paths];
    }
    if (value === undefined && field.resetOnHide) {
        /** @type {?} */
        const k = paths.pop();
        /** @type {?} */
        const m = paths.reduce((/**
         * @param {?} model
         * @param {?} path
         * @return {?}
         */
        (model, path) => model[path] || {}), root.model);
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
    for (let i = 0; i < (paths.length - 1); i++) {
        /** @type {?} */
        const path = paths[i];
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
    let model = field.parent.model;
    for (const path of getKeyPath(field)) {
        if (!model) {
            return model;
        }
        model = model[path];
    }
    return model;
}
/**
 * @param {?} dest
 * @param {...?} args
 * @return {?}
 */
function reverseDeepMerge(dest, ...args) {
    args.forEach((/**
     * @param {?} src
     * @return {?}
     */
    src => {
        for (let srcArg in src) {
            if (isNullOrUndefined(dest[srcArg]) || isBlankString(dest[srcArg])) {
                dest[srcArg] = clone(src[srcArg]);
            }
            else if (objAndSameType(dest[srcArg], src[srcArg])) {
                reverseDeepMerge(dest[srcArg], src[srcArg]);
            }
        }
    }));
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
    return typeof (value) === 'function';
}
/**
 * @param {?} obj1
 * @param {?} obj2
 * @return {?}
 */
function objAndSameType(obj1, obj2) {
    return isObject(obj1) && isObject(obj2)
        && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
        && !(Array.isArray(obj1) || Array.isArray(obj2));
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
    if (!isObject(value)
        || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(value)
        || (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)
        || /* instanceof SafeHtmlImpl */ value.changingThisBreaksApplicationSecurity
        || ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1) {
        return value;
    }
    if (value instanceof Set) {
        return new Set(value);
    }
    if (value instanceof Map) {
        return new Map(value);
    }
    // https://github.com/moment/moment/blob/master/moment.js#L252
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
        return value.slice(0).map((/**
         * @param {?} v
         * @return {?}
         */
        v => clone(v)));
    }
    // best way to clone a js object maybe
    // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    /** @type {?} */
    const proto = Object.getPrototypeOf(value);
    /** @type {?} */
    let c = Object.create(proto);
    c = Object.setPrototypeOf(c, proto);
    // need to make a deep copy so we dont use Object.assign
    // also Object.assign wont copy property descriptor exactly
    return Object.keys(value).reduce((/**
     * @param {?} newVal
     * @param {?} prop
     * @return {?}
     */
    (newVal, prop) => {
        /** @type {?} */
        const propDesc = Object.getOwnPropertyDescriptor(value, prop);
        if (propDesc.get) {
            Object.defineProperty(newVal, prop, propDesc);
        }
        else {
            newVal[prop] = clone(value[prop]);
        }
        return newVal;
    }), c);
}
/**
 * @param {?} field
 * @param {?} prop
 * @param {?} defaultValue
 * @return {?}
 */
function defineHiddenProp(field, prop, defaultValue) {
    Object.defineProperty(field, prop, { enumerable: false, writable: true, configurable: true });
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
    let fns = o._observers[prop];
    if (fns.indexOf(setFn) === -1) {
        fns.push(setFn);
        setFn({ currentValue: o[prop], firstChange: true });
        if (fns.length === 1) {
            defineHiddenProp(o, `___$${prop}`, o[prop]);
            Object.defineProperty(o, prop, {
                configurable: true,
                get: (/**
                 * @return {?}
                 */
                () => o[`___$${prop}`]),
                set: (/**
                 * @param {?} currentValue
                 * @return {?}
                 */
                currentValue => {
                    if (currentValue !== o[`___$${prop}`]) {
                        /** @type {?} */
                        const previousValue = o[`___$${prop}`];
                        o[`___$${prop}`] = currentValue;
                        fns.forEach((/**
                         * @param {?} changeFn
                         * @return {?}
                         */
                        changeFn => changeFn({ previousValue, currentValue, firstChange: false })));
                    }
                }),
            });
        }
    }
    return (/**
     * @return {?}
     */
    () => fns.splice(fns.indexOf(setFn), 1));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FORMLY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FORMLY_CONFIG');
/**
 * Maintains list of formly field directive types. This can be used to register new field templates.
 */
class FormlyConfig {
    constructor() {
        this.types = {};
        this.validators = {};
        this.wrappers = {};
        this.messages = {};
        this.templateManipulators = {
            preWrapper: [],
            postWrapper: [],
        };
        this.extras = {
            checkExpressionOn: 'changeDetectionCheck',
            lazyRender: false,
            showError: (/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                return field.formControl && field.formControl.invalid && (field.formControl.touched || (field.options.parentForm && field.options.parentForm.submitted) || !!(field.field.validation && field.field.validation.show));
            }),
        };
        this.extensions = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    addConfig(config) {
        if (config.types) {
            config.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            type => this.setType(type)));
        }
        if (config.validators) {
            config.validators.forEach((/**
             * @param {?} validator
             * @return {?}
             */
            validator => this.setValidator(validator)));
        }
        if (config.wrappers) {
            config.wrappers.forEach((/**
             * @param {?} wrapper
             * @return {?}
             */
            wrapper => this.setWrapper(wrapper)));
        }
        if (config.manipulators) {
            console.warn(`NgxFormly: passing 'manipulators' config is deprecated, use custom extension instead.`);
            config.manipulators.forEach((/**
             * @param {?} manipulator
             * @return {?}
             */
            manipulator => this.setManipulator(manipulator)));
        }
        if (config.validationMessages) {
            config.validationMessages.forEach((/**
             * @param {?} validation
             * @return {?}
             */
            validation => this.addValidatorMessage(validation.name, validation.message)));
        }
        if (config.extensions) {
            config.extensions.forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => this.extensions[c.name] = c.extension));
        }
        if (config.extras) {
            this.extras = Object.assign({}, this.extras, config.extras);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setType(options) {
        if (Array.isArray(options)) {
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => this.setType(option)));
        }
        else {
            if (!this.types[options.name]) {
                this.types[options.name] = (/** @type {?} */ ({ name: options.name }));
            }
            ['component', 'extends', 'defaultOptions', 'wrappers'].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (options.hasOwnProperty(prop)) {
                    this.types[options.name][prop] = options[prop];
                }
            }));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getType(name) {
        if (!this.types[name]) {
            throw new Error(`[Formly Error] The type "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
        }
        this.mergeExtendedType(name);
        return this.types[name];
    }
    /**
     * @param {?=} field
     * @return {?}
     */
    getMergedField(field = {}) {
        /** @type {?} */
        const type = this.getType(field.type);
        if (type.defaultOptions) {
            reverseDeepMerge(field, type.defaultOptions);
        }
        /** @type {?} */
        const extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
        if (extendDefaults) {
            reverseDeepMerge(field, extendDefaults);
        }
        if (field && field.optionsTypes) {
            field.optionsTypes.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const defaultOptions = this.getType(option).defaultOptions;
                if (defaultOptions) {
                    reverseDeepMerge(field, defaultOptions);
                }
            }));
        }
        /** @type {?} */
        const componentRef = this.resolveFieldTypeRef(field);
        if (componentRef && componentRef.instance && componentRef.instance.defaultOptions) {
            reverseDeepMerge(field, componentRef.instance.defaultOptions);
        }
        if (!field.wrappers && type.wrappers) {
            field.wrappers = [...type.wrappers];
        }
    }
    /**
     * \@internal
     * @param {?=} field
     * @return {?}
     */
    resolveFieldTypeRef(field = {}) {
        if (!field.type) {
            return null;
        }
        /** @type {?} */
        const type = this.getType(field.type);
        if (!type.component || type['_componentRef']) {
            return type['_componentRef'];
        }
        const { _resolver, _injector } = field.parent.options;
        /** @type {?} */
        const componentRef = _resolver
            .resolveComponentFactory(type.component)
            .create(_injector);
        defineHiddenProp(type, '_componentRef', componentRef);
        componentRef.destroy();
        return type['_componentRef'];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setWrapper(options) {
        this.wrappers[options.name] = options;
        if (options.types) {
            options.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                this.setTypeWrapper(type, options.name);
            }));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getWrapper(name) {
        if (!this.wrappers[name]) {
            throw new Error(`[Formly Error] The wrapper "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
        }
        return this.wrappers[name];
    }
    /**
     * @param {?} type
     * @param {?} name
     * @return {?}
     */
    setTypeWrapper(type, name) {
        if (!this.types[type]) {
            this.types[type] = (/** @type {?} */ ({}));
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
    setValidator(options) {
        this.validators[options.name] = options;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getValidator(name) {
        if (!this.validators[name]) {
            throw new Error(`[Formly Error] The validator "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
        }
        return this.validators[name];
    }
    /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    addValidatorMessage(name, message) {
        this.messages[name] = message;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getValidatorMessage(name) {
        return this.messages[name];
    }
    /**
     * @param {?} manipulator
     * @return {?}
     */
    setManipulator(manipulator) {
        new manipulator.class()[manipulator.method](this);
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    mergeExtendedType(name) {
        if (!this.types[name].extends) {
            return;
        }
        /** @type {?} */
        const extendedType = this.getType(this.types[name].extends);
        if (!this.types[name].component) {
            this.types[name].component = extendedType.component;
        }
        if (!this.types[name].wrappers) {
            this.types[name].wrappers = extendedType.wrappers;
        }
    }
}
FormlyConfig.ɵfac = function FormlyConfig_Factory(t) { return new (t || FormlyConfig)(); };
FormlyConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormlyConfig, factory: FormlyConfig.ɵfac, providedIn: 'root' });
/** @nocollapse */ FormlyConfig.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({ factory: function FormlyConfig_Factory() { return new FormlyConfig(); }, token: FormlyConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFormBuilder {
    /**
     * @param {?} formlyConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    constructor(formlyConfig, componentFactoryResolver, injector) {
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
    buildForm(formControl, fieldGroup = [], model, options) {
        if (!this.formlyConfig.extensions.core) {
            throw new Error('NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.');
        }
        /** @type {?} */
        const field = { fieldGroup, model, formControl, options: this._setOptions(options) };
        disableTreeValidityCall(formControl, (/**
         * @return {?}
         */
        () => {
            this._buildForm(field);
            field.options._checkField(field, true);
        }));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    _buildForm(field) {
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.prePopulate && extension.prePopulate(field)));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.onPopulate && extension.onPopulate(field)));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            (f) => this._buildForm(f)));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.postPopulate && extension.postPopulate(field)));
    }
    /**
     * @private
     * @return {?}
     */
    getExtensions() {
        return Object.keys(this.formlyConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        name => this.formlyConfig.extensions[name]));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _setOptions(options) {
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
            options._markForCheck = (/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    ref => {
                        // NOTE: we cannot use ref.changeDetectorRef, see https://github.com/ngx-formly/ngx-formly/issues/2191
                        /** @type {?} */
                        const changeDetectorRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
                        changeDetectorRef.markForCheck();
                    }));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => options._markForCheck(f)));
                }
            });
        }
        if (!options._buildField) {
            options._buildField = (/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                this._setOptions(field.options);
                this._buildForm(field);
                ((/** @type {?} */ (field.options)))._checkField(field, true);
                return field;
            });
        }
        return options;
    }
}
FormlyFormBuilder.ɵfac = function FormlyFormBuilder_Factory(t) { return new (t || FormlyFormBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector)); };
FormlyFormBuilder.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormlyFormBuilder, factory: FormlyFormBuilder.ɵfac, providedIn: 'root' });
/** @nocollapse */
FormlyFormBuilder.ctorParameters = () => [
    { type: FormlyConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }
];
/** @nocollapse */ FormlyFormBuilder.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({ factory: function FormlyFormBuilder_Factory() { return new FormlyFormBuilder((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FormlyConfig), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.INJECTOR)); }, token: FormlyFormBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFormBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: FormlyConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} field
 * @param {?=} emitEvent
 * @return {?}
 */
function unregisterControl(field, emitEvent = false) {
    /** @type {?} */
    const control = field.formControl;
    /** @type {?} */
    const fieldIndex = control['_fields'] ? control['_fields'].indexOf(field) : -1;
    if (fieldIndex !== -1) {
        control['_fields'].splice(fieldIndex, 1);
    }
    /** @type {?} */
    const form = (/** @type {?} */ (control.parent));
    if (!form) {
        return;
    }
    /** @type {?} */
    const opts = { emitEvent };
    if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
        /** @type {?} */
        const key = form.controls.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c === control));
        if (key !== -1) {
            updateControl(form, opts, (/**
             * @return {?}
             */
            () => form.removeAt(key)));
        }
    }
    else if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup) {
        /** @type {?} */
        const paths = getKeyPath(field);
        /** @type {?} */
        const key = paths[paths.length - 1];
        if (form.get([key]) === control) {
            updateControl(form, opts, (/**
             * @return {?}
             */
            () => form.removeControl(key)));
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
    const form = (/** @type {?} */ (field.parent.formControl));
    return form ? form.get(getKeyPath(field)) : null;
}
/**
 * @param {?} field
 * @param {?=} control
 * @param {?=} emitEvent
 * @return {?}
 */
function registerControl(field, control, emitEvent = false) {
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
        wrapProperty(field.templateOptions, 'disabled', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ firstChange, currentValue }) => {
            if (!firstChange) {
                currentValue ? field.formControl.disable() : field.formControl.enable();
            }
        }));
        if (control.registerOnDisabledChange) {
            control.registerOnDisabledChange((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                field.templateOptions['___$disabled'] = value;
                // TODO remove in V6
                field.options && field.options._markForCheck(field);
            }));
        }
    }
    /** @type {?} */
    let parent = (/** @type {?} */ (field.parent.formControl));
    if (!parent || !field.key) {
        return;
    }
    /** @type {?} */
    const paths = getKeyPath(field);
    /** @type {?} */
    const value = getFieldValue(field);
    if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value))
        && control.value !== value
        && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
        control.patchValue(value);
    }
    for (let i = 0; i < (paths.length - 1); i++) {
        /** @type {?} */
        const path = paths[i];
        if (!parent.get([path])) {
            updateControl(parent, { emitEvent }, (/**
             * @return {?}
             */
            () => parent.setControl(path, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}))));
        }
        parent = (/** @type {?} */ (parent.get([path])));
    }
    /** @type {?} */
    const key = paths[paths.length - 1];
    if (!field._hide && parent.get([key]) !== control) {
        updateControl(parent, { emitEvent }, (/**
         * @return {?}
         */
        () => parent.setControl(key, control)));
    }
}
/**
 * @param {?} c
 * @param {?=} onlySelf
 * @return {?}
 */
function updateValidity(c, onlySelf = false) {
    /** @type {?} */
    const status = c.status;
    /** @type {?} */
    const value = c.value;
    c.updateValueAndValidity({ emitEvent: false, onlySelf });
    if (status !== c.status) {
        ((/** @type {?} */ (c.statusChanges))).emit(c.status);
    }
    if (value !== c.value) {
        ((/** @type {?} */ (c.valueChanges))).emit(c.value);
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
        ((/** @type {?} */ (form)))._forEachChild = (/**
         * @param {?} cb
         * @return {?}
         */
        (cb) => {
            Object
                .keys(form.controls)
                .forEach((/**
             * @param {?} k
             * @return {?}
             */
            k => form.controls[k] && cb(form.controls[k], k)));
        });
    }
    /**
     * workaround for https://github.com/angular/angular/issues/20439
     * @type {?}
     */
    const updateValueAndValidity = form.updateValueAndValidity.bind(form);
    if (opts.emitEvent === false) {
        form.updateValueAndValidity = (/**
         * @param {?} opts
         * @return {?}
         */
        (opts) => {
            updateValueAndValidity(Object.assign({}, (opts || {}), { emitEvent: false }));
        });
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
        Object.keys(form.controls)
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => clearControl(form.controls[k])));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyForm {
    /**
     * @param {?} formlyBuilder
     * @param {?} formlyConfig
     * @param {?} ngZone
     * @param {?} immutable
     * @param {?} parentFormGroup
     */
    constructor(formlyBuilder, formlyConfig, ngZone, 
    // tslint:disable-next-line
    immutable, parentFormGroup) {
        this.formlyBuilder = formlyBuilder;
        this.formlyConfig = formlyConfig;
        this.ngZone = ngZone;
        this.parentFormGroup = parentFormGroup;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.immutable = false;
        this._modelChangeValue = {};
        this.modelChangeSubs = [];
        this.modelChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.modelChangeSub = this.modelChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((/**
         * @return {?}
         */
        () => this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))))).subscribe((/**
         * @return {?}
         */
        () => this.ngZone.runGuarded((/**
         * @return {?}
         */
        () => {
            // runGuarded is used to keep the expression changes in-sync
            // https://github.com/ngx-formly/ngx-formly/issues/2095
            this.checkExpressionChange();
            this.modelChange.emit(this._modelChangeValue = clone(this.model));
        }))));
        if (immutable !== null) {
            console.warn(`NgxFormly: passing 'immutable' attribute to 'formly-form' component is deprecated since v5.5, enable immutable mode through NgModule declaration instead.`);
        }
        this.immutable = (immutable !== null) || !!formlyConfig.extras.immutable;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    set model(model) { this._model = this.immutable ? clone(model) : model; }
    /**
     * @return {?}
     */
    get model() {
        if (!this._model) {
            this._model = {};
        }
        return this._model;
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    set fields(fields) { this._fields = this.immutable ? clone(fields) : fields; }
    /**
     * @return {?}
     */
    get fields() { return this._fields || []; }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) { this._options = this.immutable ? clone(options) : options; }
    /**
     * @return {?}
     */
    get options() { return this._options; }
    /**
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        if (content) {
            /** @type {?} */
            let hasContent = false;
            /** @type {?} */
            let node = content.nativeElement.nextSibling;
            while (node && !hasContent) {
                if (node.nodeType === Node.ELEMENT_NODE
                    || node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim() !== '') {
                    hasContent = true;
                }
                node = node.nextSibling;
            }
            if (hasContent) {
                console.warn(`NgxFormly: content projection for 'formly-form' component is deprecated since v5.5, you should avoid passing content inside the 'formly-form' tag.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.formlyConfig.extras.checkExpressionOn === 'changeDetectionCheck') {
            this.checkExpressionChange();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // https://github.com/ngx-formly/ngx-formly/issues/2294
        if (changes.model && this.field) {
            this.field.model = this.model;
        }
        if (changes.fields && this.form) {
            clearControl(this.form);
        }
        if (changes.fields || changes.form || (changes.model && this._modelChangeValue !== changes.model.currentValue)) {
            this.form = this.form || (new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}));
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
    ngOnDestroy() {
        this.modelChangeSub.unsubscribe();
        this.clearModelSubscriptions();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    changeModel({ key, value, field }) {
        assignFieldValue(field, value);
        this.modelChange$.next();
    }
    /**
     * @return {?}
     */
    setOptions() {
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.resetModel) {
            this.options.resetModel = (/**
             * @param {?=} model
             * @return {?}
             */
            (model) => {
                model = clone(isNullOrUndefined(model) ? ((/** @type {?} */ (this.options)))._initialModel : model);
                if (this.model) {
                    Object.keys(this.model).forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    k => delete this.model[k]));
                    Object.assign(this.model, model || {});
                }
                ((/** @type {?} */ (this.options)))._buildForm();
                // we should call `NgForm::resetForm` to ensure changing `submitted` state after resetting form
                // but only when the current component is a root one.
                if (this.options.parentForm && this.options.parentForm.control === this.form) {
                    this.options.parentForm.resetForm(this.model);
                }
                else {
                    this.form.reset(this.model);
                }
            });
        }
        if (!this.options.parentForm && this.parentFormGroup) {
            defineHiddenProp(this.options, 'parentForm', this.parentFormGroup);
            wrapProperty(this.options.parentForm, 'submitted', (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange }) => {
                if (!firstChange) {
                    this.checkExpressionChange();
                    ((/** @type {?} */ (this.options)))._markForCheck({
                        fieldGroup: this.fields,
                        model: this.model,
                        formControl: this.form,
                        options: this.options,
                    });
                }
            }));
        }
        if (!this.options.updateInitialValue) {
            this.options.updateInitialValue = (/**
             * @return {?}
             */
            () => ((/** @type {?} */ (this.options)))._initialModel = clone(this.model));
        }
        if (!((/** @type {?} */ (this.options)))._buildForm) {
            ((/** @type {?} */ (this.options)))._buildForm = (/**
             * @param {?=} emitModelChange
             * @return {?}
             */
            (emitModelChange = false) => {
                this.clearModelSubscriptions();
                this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
                this.trackModelChanges(this.fields);
                if (emitModelChange) {
                    this.modelChange.emit(this._modelChangeValue = clone(this.model));
                }
            });
        }
        if (!((/** @type {?} */ (this.options)))._trackModelChanges) {
            ((/** @type {?} */ (this.options)))._trackModelChanges = (/**
             * @param {?=} emitModelChange
             * @return {?}
             */
            (emitModelChange = false) => {
                this.clearModelSubscriptions();
                this.trackModelChanges(this.fields);
                if (emitModelChange) {
                    this.modelChange.emit(this._modelChangeValue = clone(this.model));
                }
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkExpressionChange() {
        if (this.options && ((/** @type {?} */ (this.options)))._checkField) {
            ((/** @type {?} */ (this.options)))._checkField({
                fieldGroup: this.fields,
                model: this.model,
                formControl: this.form,
                options: this.options,
            });
        }
    }
    /**
     * @private
     * @param {?} fields
     * @param {?=} rootKey
     * @return {?}
     */
    trackModelChanges(fields, rootKey = []) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            if (field.key && !field.fieldGroup && field.formControl) {
                /** @type {?} */
                const control = field.formControl;
                /** @type {?} */
                let valueChanges = control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)((/**
                 * @param {?} x
                 * @param {?} y
                 * @return {?}
                 */
                (x, y) => {
                    if (x !== y || Array.isArray(x) || isObject(x)) {
                        return false;
                    }
                    return true;
                })));
                const { updateOn, debounce } = field.modelOptions;
                if ((!updateOn || updateOn === 'change') && debounce && debounce.default > 0) {
                    valueChanges = control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(debounce.default));
                }
                this.modelChangeSubs.push(valueChanges.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    // workaround for https://github.com/angular/angular/issues/13792
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl && control['_fields'] && control['_fields'].length > 1) {
                        control.patchValue(value, { emitEvent: false, onlySelf: true });
                    }
                    if (field.parsers && field.parsers.length > 0) {
                        field.parsers.forEach((/**
                         * @param {?} parserFn
                         * @return {?}
                         */
                        parserFn => value = parserFn(value)));
                    }
                    this.changeModel({ key: [...rootKey, ...getKeyPath(field)].join('.'), value, field });
                })));
                // workaround for v5 (https://github.com/ngx-formly/ngx-formly/issues/2061)
                /** @type {?} */
                const observers = control.valueChanges['observers'];
                if (observers && observers.length > 1) {
                    observers.unshift(observers.pop());
                }
            }
            if (field.fieldGroup && field.fieldGroup.length > 0) {
                this.trackModelChanges(field.fieldGroup, field.key ? [...rootKey, ...getKeyPath(field)] : rootKey);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearModelSubscriptions() {
        this.modelChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
        this.modelChangeSubs = [];
    }
    /**
     * @private
     * @return {?}
     */
    get field() {
        return this.fields && this.fields[0] && this.fields[0].parent;
    }
}
FormlyForm.ɵfac = function FormlyForm_Factory(t) { return new (t || FormlyForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('immutable'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, 8)); };
FormlyForm.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyForm, selectors: [["formly-form"]], viewQuery: function FormlyForm_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { model: "model", fields: "fields", options: "options", form: "form" }, outputs: { modelChange: "modelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([FormlyFormBuilder]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [["hide-deprecation", "", 3, "form", "options", "model", "field", 4, "ngFor", "ngForOf"], ["content", ""], ["hide-deprecation", "", 3, "form", "options", "model", "field"]], template: function FormlyForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyForm_formly_field_0_Template, 1, 4, "formly-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, FormlyField]; }, encapsulation: 2 });
/** @nocollapse */
FormlyForm.ctorParameters = () => [
    { type: FormlyFormBuilder },
    { type: FormlyConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['immutable',] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
FormlyForm.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['content',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-form',
                template: `
    <formly-field *ngFor="let field of fields"
      hide-deprecation
      [form]="field.form"
      [options]="field.options"
      [model]="field.model"
      [field]="field">
    </formly-field>
    <ng-container #content>
      <ng-content></ng-content>
    </ng-container>
  `,
                providers: [FormlyFormBuilder]
            }]
    }], function () { return [{ type: FormlyFormBuilder }, { type: FormlyConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['immutable']
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { modelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content']
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyField {
    /**
     * @param {?} formlyConfig
     * @param {?} renderer
     * @param {?} resolver
     * @param {?} elementRef
     * @param {?} hideDeprecation
     */
    constructor(formlyConfig, renderer, resolver, elementRef, 
    // tslint:disable-next-line
    hideDeprecation) {
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
    set model(m) {
        this.warnDeprecation && console.warn(`NgxFormly: passing 'model' input to '${this.constructor.name}' component is not required anymore, you may remove it!`);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this.warnDeprecation && console.warn(`NgxFormly: passing 'form' input to '${this.constructor.name}' component is not required anymore, you may remove it!`);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this.warnDeprecation && console.warn(`NgxFormly: passing 'options' input to '${this.constructor.name}' component is not required anymore, you may remove it!`);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.triggerHook('afterContentInit');
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.triggerHook('afterContentChecked');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.triggerHook('afterViewInit');
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.triggerHook('afterViewChecked');
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.triggerHook('doCheck');
        if (this.detectFieldBuild && (this.field && this.field.options)) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.triggerHook('onInit');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.triggerHook('onChanges', changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.resetRefs(this.field);
        this.hostObservers.forEach((/**
         * @param {?} unsubscribe
         * @return {?}
         */
        unsubscribe => unsubscribe()));
        this.hooksObservers.forEach((/**
         * @param {?} unsubscribe
         * @return {?}
         */
        unsubscribe => unsubscribe()));
        this.triggerHook('onDestroy');
    }
    /**
     * @private
     * @param {?} containerRef
     * @param {?} f
     * @param {?=} wrappers
     * @return {?}
     */
    renderField(containerRef, f, wrappers = []) {
        if (this.containerRef === containerRef) {
            this.resetRefs(this.field);
            this.containerRef.clear();
            wrappers = this.field ? this.field.wrappers : [];
        }
        if (wrappers && wrappers.length > 0) {
            const [wrapper, ...wps] = wrappers;
            const { component } = this.formlyConfig.getWrapper(wrapper);
            /** @type {?} */
            const ref = containerRef.createComponent(this.resolver.resolveComponentFactory(component));
            this.attachComponentRef(ref, f);
            wrapProperty(ref.instance, 'fieldComponent', (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange, previousValue, currentValue }) => {
                if (currentValue) {
                    if (previousValue && previousValue['_lContainer'] === currentValue['_lContainer']) {
                        return;
                    }
                    /** @type {?} */
                    const viewRef = previousValue ? previousValue.detach() : null;
                    if (viewRef && !viewRef.destroyed) {
                        currentValue.insert(viewRef);
                    }
                    else {
                        this.renderField(currentValue, f, wps);
                    }
                    !firstChange && ref.changeDetectorRef.detectChanges();
                }
            }));
        }
        else if (f && f.type) {
            const { component } = this.formlyConfig.getType(f.type);
            /** @type {?} */
            const ref = containerRef.createComponent(this.resolver.resolveComponentFactory(component));
            this.attachComponentRef(ref, f);
        }
    }
    /**
     * @private
     * @param {?} name
     * @param {?=} changes
     * @return {?}
     */
    triggerHook(name, changes) {
        if (this.field && this.field.hooks && this.field.hooks[name]) {
            if (!changes || changes.field) {
                /** @type {?} */
                const r = this.field.hooks[name](this.field);
                if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(r) && ['onInit', 'afterContentInit', 'afterViewInit'].indexOf(name) !== -1) {
                    /** @type {?} */
                    const sub = r.subscribe();
                    this.hooksObservers.push((/**
                     * @return {?}
                     */
                    () => sub.unsubscribe()));
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
    attachComponentRef(ref, field) {
        this.componentRefs.push(ref);
        field._componentRefs.push(ref);
        Object.assign(ref.instance, { field });
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (!this.field) {
            return;
        }
        // require Formly build
        if (!this.field.options) {
            this.detectFieldBuild = true;
            return;
        }
        this.detectFieldBuild = false;
        this.hostObservers.forEach((/**
         * @param {?} unsubscribe
         * @return {?}
         */
        unsubscribe => unsubscribe()));
        this.hostObservers = [
            wrapProperty(this.field, 'hide', (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange, currentValue }) => {
                if (!firstChange || (firstChange && currentValue)) {
                    this.renderer.setStyle(this.elementRef.nativeElement, 'display', currentValue ? 'none' : '');
                }
                if (!this.formlyConfig.extras.lazyRender) {
                    firstChange && this.renderField(this.containerRef, this.field);
                }
                else {
                    if (currentValue) {
                        this.containerRef.clear();
                        if (this.field.className) {
                            this.renderer.removeAttribute(this.elementRef.nativeElement, 'class');
                        }
                    }
                    else {
                        this.renderField(this.containerRef, this.field);
                        if (this.field.className) {
                            this.renderer.setAttribute(this.elementRef.nativeElement, 'class', this.field.className);
                        }
                    }
                }
            })),
            wrapProperty(this.field, 'className', (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange, currentValue }) => {
                if ((!firstChange || (firstChange && currentValue))
                    && (!this.formlyConfig.extras.lazyRender || (this.field.hide !== true))) {
                    this.renderer.setAttribute(this.elementRef.nativeElement, 'class', currentValue);
                }
            })),
        ];
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    resetRefs(field) {
        if (field) {
            if (field._componentRefs) {
                field._componentRefs = field._componentRefs.filter((/**
                 * @param {?} ref
                 * @return {?}
                 */
                ref => this.componentRefs.indexOf(ref) === -1));
            }
            else {
                defineHiddenProp(this.field, '_componentRefs', []);
            }
        }
        this.componentRefs = [];
    }
}
FormlyField.ɵfac = function FormlyField_Factory(t) { return new (t || FormlyField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('hide-deprecation')); };
FormlyField.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyField, selectors: [["formly-field"]], viewQuery: function FormlyField_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    } }, inputs: { model: "model", form: "form", options: "options", field: "field" }, outputs: { modelChange: "modelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["container", ""]], template: function FormlyField_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyField_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, encapsulation: 2 });
/** @nocollapse */
FormlyField.ctorParameters = () => [
    { type: FormlyConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['hide-deprecation',] }] }
];
FormlyField.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['container', (/** @type {?} */ ({ read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, static: true })),] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field',
                template: `<ng-template #container></ng-template>`
            }]
    }], function () { return [{ type: FormlyConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['hide-deprecation']
            }] }]; }, { modelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], containerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container', ( /** @type {?} */({ read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, static: true }))]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyAttributes {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _document
     */
    constructor(renderer, elementRef, _document) {
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
            callback: (/**
             * @param {?} eventName
             * @param {?} $event
             * @return {?}
             */
            (eventName, $event) => {
                switch (eventName) {
                    case 'focus':
                        return this.onFocus($event);
                    case 'blur':
                        return this.onBlur($event);
                    case 'change':
                        return this.onChange($event);
                    default:
                        return this.to[eventName](this.field, $event);
                }
            }),
        };
        this.document = _document;
    }
    /**
     * @return {?}
     */
    get to() { return this.field.templateOptions || {}; }
    /**
     * @private
     * @return {?}
     */
    get fieldAttrElements() { return (this.field && this.field['_elementRefs']) || []; }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.field) {
            this.field.name && this.setAttribute('name', this.field.name);
            this.uiEvents.listeners.forEach((/**
             * @param {?} listener
             * @return {?}
             */
            (listener) => listener()));
            this.uiEvents.events.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            (eventName) => {
                if ((this.to && this.to[eventName]) || ['focus', 'blur', 'change'].indexOf(eventName) !== -1) {
                    this.uiEvents.listeners.push(this.renderer.listen(this.elementRef.nativeElement, eventName, (/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => this.uiEvents.callback(eventName, e))));
                }
            }));
            if (this.to && this.to.attributes) {
                wrapProperty(this.to, 'attributes', (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue, previousValue }) => {
                    if (previousValue) {
                        Object.keys(previousValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => this.removeAttribute(attr)));
                    }
                    if (currentValue) {
                        Object.keys(currentValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => {
                            if (currentValue[attr] != null) {
                                this.setAttribute(attr, currentValue[attr]);
                            }
                        }));
                    }
                }));
            }
            this.detachElementRef(changes.field.previousValue);
            this.attachElementRef(changes.field.currentValue);
            if (this.fieldAttrElements.length === 1) {
                !this.id && this.field.id && this.setAttribute('id', this.field.id);
                wrapProperty(this.field, 'focus', (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue }) => {
                    this.toggleFocus(currentValue);
                }));
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
    ngDoCheck() {
        if (!this.uiAttributes) {
            /** @type {?} */
            const element = (/** @type {?} */ (this.elementRef.nativeElement));
            this.uiAttributes = [...FORMLY_VALIDATORS, 'tabindex', 'placeholder', 'readonly', 'disabled', 'step'].filter((/**
             * @param {?} attr
             * @return {?}
             */
            (attr) => !element.hasAttribute || !element.hasAttribute(attr)));
        }
        this.uiAttributes.forEach((/**
         * @param {?} attr
         * @return {?}
         */
        attr => {
            /** @type {?} */
            const value = this.to[attr];
            if (this.uiAttributesCache[attr] !== value
                && (!this.to.attributes || !this.to.attributes.hasOwnProperty(attr.toLowerCase()))) {
                this.uiAttributesCache[attr] = value;
                if (value || value === 0) {
                    this.setAttribute(attr, value === true ? attr : `${value}`);
                }
                else {
                    this.removeAttribute(attr);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uiEvents.listeners.forEach((/**
         * @param {?} listener
         * @return {?}
         */
        listener => listener()));
        this.detachElementRef(this.field);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toggleFocus(value) {
        /** @type {?} */
        const element = this.fieldAttrElements ? this.fieldAttrElements[0] : null;
        if (!element || !element.nativeElement.focus) {
            return;
        }
        /** @type {?} */
        const isFocused = !!this.document.activeElement
            && this.fieldAttrElements
                .some((/**
             * @param {?} __0
             * @return {?}
             */
            ({ nativeElement }) => this.document.activeElement === nativeElement || nativeElement.contains(this.document.activeElement)));
        if (value && !isFocused) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => element.nativeElement.focus()));
        }
        else if (!value && isFocused) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => element.nativeElement.blur()));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        this.field['___$focus'] = true;
        if (this.to.focus) {
            this.to.focus(this.field, $event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        this.field['___$focus'] = false;
        if (this.to.blur) {
            this.to.blur(this.field, $event);
        }
    }
    // handle custom `change` event, for regular ones rely on DOM listener
    /**
     * @param {?} $event
     * @return {?}
     */
    onHostChange($event) {
        if ($event instanceof Event) {
            return;
        }
        this.onChange($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChange($event) {
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
    attachElementRef(f) {
        if (!f) {
            return;
        }
        if (f['_elementRefs'] && f['_elementRefs'].indexOf(this.elementRef) === -1) {
            f['_elementRefs'].push(this.elementRef);
        }
        else {
            defineHiddenProp(f, '_elementRefs', [this.elementRef]);
        }
    }
    /**
     * @private
     * @param {?} f
     * @return {?}
     */
    detachElementRef(f) {
        /** @type {?} */
        const index = f && f['_elementRefs'] ? this.fieldAttrElements.indexOf(this.elementRef) : -1;
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
    setAttribute(attr, value) {
        this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
    }
    /**
     * @private
     * @param {?} attr
     * @return {?}
     */
    removeAttribute(attr) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
    }
}
FormlyAttributes.ɵfac = function FormlyAttributes_Factory(t) { return new (t || FormlyAttributes)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT)); };
FormlyAttributes.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FormlyAttributes, selectors: [["", "formlyAttributes", ""]], hostBindings: function FormlyAttributes_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormlyAttributes_change_HostBindingHandler($event) { return ctx.onHostChange($event); });
    } }, inputs: { field: ["formlyAttributes", "field"], id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
FormlyAttributes.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
FormlyAttributes.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['formlyAttributes',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyAttributes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[formlyAttributes]',
                host: {
                    '(change)': 'onHostChange($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }] }]; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formlyAttributes']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template F
 */
class FieldType {
    /**
     * @return {?}
     */
    get model() { return this.field.model; }
    /**
     * @param {?} m
     * @return {?}
     */
    set model(m) { console.warn(`NgxFormly: passing 'model' input to '${this.constructor.name}' component is not required anymore, you may remove it!`); }
    /**
     * @return {?}
     */
    get form() { return (/** @type {?} */ (this.field.parent.formControl)); }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) { console.warn(`NgxFormly: passing 'form' input to '${this.constructor.name}' component is not required anymore, you may remove it!`); }
    /**
     * @return {?}
     */
    get options() { return this.field.options; }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) { console.warn(`NgxFormly: passing 'options' input to '${this.constructor.name}' component is not required anymore, you may remove it!`); }
    /**
     * @return {?}
     */
    get key() { return this.field.key; }
    /**
     * @return {?}
     */
    get formControl() { return (/** @type {?} */ (this.field.formControl)); }
    /**
     * @return {?}
     */
    get to() { return this.field.templateOptions || {}; }
    /**
     * @return {?}
     */
    get showError() { return this.options.showError(this); }
    /**
     * @return {?}
     */
    get id() { return this.field.id; }
    /**
     * @return {?}
     */
    get formState() { return this.options.formState || {}; }
}
FieldType.ɵfac = function FieldType_Factory(t) { return new (t || FieldType)(); };
FieldType.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FieldType, inputs: { model: "model", form: "form", options: "options", field: "field" } });
FieldType.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};

/**
 * @deprecated use `FieldType` instead
 * @abstract
 */
class Field extends FieldType {
    constructor() {
        super();
        console.warn(`NgxFormly: 'Field' has been renamed to 'FieldType', extend 'FieldType' instead.`);
    }
}

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
class FieldArrayType extends FieldType {
    /**
     * @param {?=} builder
     */
    constructor(builder) {
        super();
        this.defaultOptions = {
            defaultValue: [],
        };
        if (builder instanceof FormlyFormBuilder) {
            console.warn(`NgxFormly: passing 'FormlyFormBuilder' to '${this.constructor.name}' type is not required anymore, you may remove it!`);
        }
    }
    /**
     * @return {?}
     */
    get formControl() {
        return (/** @type {?} */ (this.field.formControl));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.formControl && field.key) {
            /** @type {?} */
            const control = findControl(field);
            registerControl(field, control ? control : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([], { updateOn: field.modelOptions.updateOn }));
        }
        field.fieldGroup = field.fieldGroup || [];
        /** @type {?} */
        const length = field.model ? field.model.length : 0;
        if (field.fieldGroup.length > length) {
            for (let i = field.fieldGroup.length - 1; i >= length; --i) {
                unregisterControl(field.fieldGroup[i], true);
                field.fieldGroup.splice(i, 1);
            }
        }
        for (let i = field.fieldGroup.length; i < length; i++) {
            /** @type {?} */
            const f = Object.assign({}, clone(field.fieldArray), { key: `${i}` });
            field.fieldGroup.push(f);
        }
    }
    /**
     * @param {?=} i
     * @param {?=} initialModel
     * @param {?=} __2
     * @return {?}
     */
    add(i, initialModel, { markAsDirty } = { markAsDirty: true }) {
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
    remove(i, { markAsDirty } = { markAsDirty: true }) {
        this.model.splice(i, 1);
        unregisterControl(this.field.fieldGroup[i], true);
        this.field.fieldGroup.splice(i, 1);
        this.field.fieldGroup.forEach((/**
         * @param {?} f
         * @param {?} key
         * @return {?}
         */
        (f, key) => f.key = `${key}`));
        this._build();
        markAsDirty && this.formControl.markAsDirty();
    }
    /**
     * @private
     * @return {?}
     */
    _build() {
        ((/** @type {?} */ (this.options)))._buildField(this.field);
        ((/** @type {?} */ (this.options)))._trackModelChanges(true);
    }
}
FieldArrayType.ɵfac = function FieldArrayType_Factory(t) { return new (t || FieldArrayType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FORMLY_CONFIG, 8)); };
FieldArrayType.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FieldArrayType, selectors: [["fieldArray"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FieldArrayType.ctorParameters = () => [
    { type: FormlyFormBuilder, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [FORMLY_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldArrayType, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ɵfieldArray]' }]
    }], function () { return [{ type: FormlyFormBuilder, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [FORMLY_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template F
 */
class FieldWrapper extends FieldType {
}
FieldWrapper.ɵfac = /*@__PURE__*/ function () { let ɵFieldWrapper_BaseFactory; return function FieldWrapper_Factory(t) { return (ɵFieldWrapper_BaseFactory || (ɵFieldWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FieldWrapper)))(t || FieldWrapper); }; }();
FieldWrapper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FieldWrapper, viewQuery: function FieldWrapper_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fieldComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
FieldWrapper.propDecorators = {
    fieldComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['fieldComponent', (/** @type {?} */ ({ read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, static: false })),] }]
};


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyGroup extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
}
FormlyGroup.ɵfac = /*@__PURE__*/ function () { let ɵFormlyGroup_BaseFactory; return function FormlyGroup_Factory(t) { return (ɵFormlyGroup_BaseFactory || (ɵFormlyGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyGroup)))(t || FormlyGroup); }; }();
FormlyGroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyGroup, selectors: [["formly-group"]], hostVars: 2, hostBindings: function FormlyGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.field.fieldGroupClassName || "");
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "field", 4, "ngFor", "ngForOf"], [3, "field"]], template: function FormlyGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyGroup_formly_field_0_Template, 1, 1, "formly-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.fieldGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, FormlyField], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-group',
                template: `
    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    <ng-content></ng-content>
  `,
                host: {
                    '[class]': 'field.fieldGroupClassName || ""'
                }
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyValidationMessage {
    /**
     * @param {?} formlyConfig
     */
    constructor(formlyConfig) {
        this.formlyConfig = formlyConfig;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const EXPR_VALIDATORS = FORMLY_VALIDATORS.map((/**
         * @param {?} v
         * @return {?}
         */
        v => `templateOptions.${v}`));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.field.formControl.statusChanges, (!this.field.options
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null)
            : this.field.options.fieldChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((/**
             * @param {?} __0
             * @return {?}
             */
            ({ field, type, property }) => {
                return (field === this.field)
                    && (type === 'expressionChanges')
                    && ((property.indexOf('validation') !== -1)
                        || (EXPR_VALIDATORS.indexOf(property) !== -1));
            }))))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((/**
         * @return {?}
         */
        () => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this.errorMessage)
            ? this.errorMessage
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.errorMessage))));
    }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldForm = this.field.formControl;
        for (let error in fieldForm.errors) {
            if (fieldForm.errors.hasOwnProperty(error)) {
                /** @type {?} */
                let message = this.formlyConfig.getValidatorMessage(error);
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
}
FormlyValidationMessage.ɵfac = function FormlyValidationMessage_Factory(t) { return new (t || FormlyValidationMessage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig)); };
FormlyValidationMessage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyValidationMessage, selectors: [["formly-validation-message"]], inputs: { field: "field" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, template: function FormlyValidationMessage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.errorMessage$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
FormlyValidationMessage.ctorParameters = () => [
    { type: FormlyConfig }
];
FormlyValidationMessage.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyValidationMessage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-validation-message',
                template: `{{ errorMessage$ | async }}`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FormlyConfig }]; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyTemplateType extends FieldType {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super();
        this.sanitizer = sanitizer;
        this.innerHtml = { content: null, template: null };
    }
    /**
     * @return {?}
     */
    get template() {
        if (this.field && (this.field.template !== this.innerHtml.template)) {
            this.innerHtml = {
                template: this.field.template,
                content: this.to.safeHtml
                    ? this.sanitizer.bypassSecurityTrustHtml(this.field.template)
                    : this.field.template,
            };
        }
        return this.innerHtml.content;
    }
}
FormlyTemplateType.ɵfac = function FormlyTemplateType_Factory(t) { return new (t || FormlyTemplateType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer)); };
FormlyTemplateType.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyTemplateType, selectors: [["formly-template"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "innerHtml"]], template: function FormlyTemplateType_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.template, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, encapsulation: 2 });
/** @nocollapse */
FormlyTemplateType.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyTemplateType, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-template',
                template: `<div [innerHtml]="template"></div>`
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer }]; }, null); })();

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
            console.warn(`NgxFormly: using 'this.field' in expressionProperties is deprecated since v5.1, use 'field' instead.`);
        }
        return (/** @type {?} */ (Function(...argNames, `return ${expression};`)));
    }
    catch (error) {
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
    }
    else {
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
class FieldExpressionExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        if (field.parent || field.options._checkField) {
            return;
        }
        /** @type {?} */
        let checkLocked = false;
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        (f, ignoreCache) => {
            if (!checkLocked) {
                checkLocked = true;
                this.checkField(f, ignoreCache);
                checkLocked = false;
            }
        });
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        // cache built expression
        defineHiddenProp(field, '_expressionProperties', {});
        if (field.expressionProperties) {
            for (const key in field.expressionProperties) {
                /** @type {?} */
                const expressionProperty = field.expressionProperties[key];
                if (typeof expressionProperty === 'string' || isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this._evalExpression(key, expressionProperty, key === 'templateOptions.disabled' && field.parent.expressionProperties && field.parent.expressionProperties.hasOwnProperty('templateOptions.disabled')
                            ? (/**
                             * @return {?}
                             */
                            () => field.parent.templateOptions.disabled)
                            : undefined),
                    };
                    if (key === 'templateOptions.disabled') {
                        Object.defineProperty(field._expressionProperties[key], 'expressionValue', {
                            get: (/**
                             * @return {?}
                             */
                            () => field.templateOptions.disabled),
                            set: (/**
                             * @return {?}
                             */
                            () => { }),
                            enumerable: true,
                            configurable: true,
                        });
                    }
                }
                else if (expressionProperty instanceof rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable) {
                    /** @type {?} */
                    const subscribe = (/**
                     * @return {?}
                     */
                    () => ((/** @type {?} */ (expressionProperty)))
                        .subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => {
                        this.setExprValue(field, key, v);
                        if (field.options && field.options._markForCheck) {
                            field.options._markForCheck(field);
                        }
                    })));
                    /** @type {?} */
                    let subscription = subscribe();
                    /** @type {?} */
                    const onInit = field.hooks.onInit;
                    field.hooks.onInit = (/**
                     * @return {?}
                     */
                    () => {
                        if (subscription === null) {
                            subscription = subscribe();
                        }
                        return onInit && onInit(field);
                    });
                    /** @type {?} */
                    const onDestroy = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @return {?}
                     */
                    () => {
                        onDestroy && onDestroy(field);
                        subscription.unsubscribe();
                        subscription = null;
                    });
                }
            }
        }
        if (field.hideExpression) {
            // delete hide value in order to force re-evaluate it in FormlyFormExpression.
            delete field.hide;
            field.hideExpression = this._evalExpression('hide', field.hideExpression, (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let root = field.parent;
                while (root.parent && !root.hide) {
                    root = root.parent;
                }
                return root.hide;
            }));
        }
        else {
            wrapProperty(field, 'hide', (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, firstChange }) => {
                field._hide = currentValue;
                if (!firstChange || (firstChange && currentValue === true)) {
                    field.options._hiddenFieldsForCheck.push(field);
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    _evalExpression(prop, expression, parentExpression) {
        return (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            try {
                if (typeof expression === 'string') {
                    expression = evalStringExpression(expression, ['model', 'formState', 'field']);
                }
                if (typeof expression !== 'function') {
                    expression = (/**
                     * @return {?}
                     */
                    () => !!expression);
                }
                return (parentExpression && parentExpression()) || expression(...args);
            }
            catch (error) {
                error.message = `[Formly Error] [Expression "${prop}"] ${error.message}`;
                throw error;
            }
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} prop
     * @return {?}
     */
    _evalExpressionPath(field, prop) {
        if (field._expressionProperties[prop] && field._expressionProperties[prop].expressionPaths) {
            return field._expressionProperties[prop].expressionPaths;
        }
        /** @type {?} */
        let paths = [];
        if (prop.indexOf('[') === -1) {
            paths = prop.split('.');
        }
        else {
            prop
                .split(/[[\]]{1,2}/) // https://stackoverflow.com/a/20198206
                .filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p))
                .forEach(((/**
             * @param {?} path
             * @return {?}
             */
            path => {
                /** @type {?} */
                const arrayPath = path.match(/['|"](.*?)['|"]/);
                if (arrayPath) {
                    paths.push(arrayPath[1]);
                }
                else {
                    paths.push(...path.split('.').filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => p)));
                }
            })));
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
    checkField(field, ignoreCache = false) {
        /** @type {?} */
        const fieldChanged = this._checkField(field, ignoreCache);
        field.options._hiddenFieldsForCheck
            .sort((/**
         * @param {?} f
         * @return {?}
         */
        f => f.hide ? -1 : 1))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => this.toggleFormControl(f, !!f.hide, !ignoreCache)));
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
    _checkField(field, ignoreCache = false) {
        /** @type {?} */
        let fieldChanged = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            if (!f.options) {
                return;
            }
            this.checkFieldExpressionChange(f, ignoreCache) && (fieldChanged = true);
            if (this.checkFieldVisibilityChange(f, ignoreCache)) {
                field.options._hiddenFieldsForCheck.push(f);
                fieldChanged = true;
            }
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                this._checkField(f, ignoreCache) && (fieldChanged = true);
            }
        }));
        return fieldChanged;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldExpressionChange(field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        let markForCheck = false;
        /** @type {?} */
        const expressionProperties = field._expressionProperties;
        for (const key in expressionProperties) {
            /** @type {?} */
            let expressionValue = evalExpression(expressionProperties[key].expression, { field }, [field.model, field.options.formState, field, ignoreCache]);
            if (key === 'templateOptions.disabled') {
                expressionValue = !!expressionValue;
            }
            if (ignoreCache || (expressionProperties[key].expressionValue !== expressionValue
                && (!(isObject(expressionValue) || isFunction(expressionValue))
                    || (isFunction(expressionValue)
                        && ('' + expressionProperties[key].expressionValue !== '' + expressionValue))
                    || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(expressionValue)
                    || JSON.stringify(expressionValue) !== JSON.stringify(expressionProperties[key].expressionValue)))) {
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
    checkFieldVisibilityChange(field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        const hideExpressionResult = !!evalExpression(field.hideExpression, { field }, [field.model, field.options.formState, field, ignoreCache]);
        /** @type {?} */
        let markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            // toggle hide
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
    setDisabledState(field, value) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.expressionProperties || !f.expressionProperties.hasOwnProperty('templateOptions.disabled')))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.setDisabledState(f, value)));
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
    toggleFormControl(field, hide, resetOnHide) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.hideExpression))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, hide, resetOnHide)));
        }
        if (field.formControl && field.key) {
            defineHiddenProp(field, '_hide', !!(hide || field.hide));
            /** @type {?} */
            const c = field.formControl;
            if (c['_fields'] && c['_fields'].length > 1) {
                updateValidity(c);
            }
            if (hide === true && (!c['_fields'] || c['_fields'].every((/**
             * @param {?} f
             * @return {?}
             */
            f => !!f._hide)))) {
                unregisterControl(field, true);
                if (resetOnHide && field.resetOnHide) {
                    field.formControl.reset({ value: undefined, disabled: field.formControl.disabled });
                    if (field.fieldGroup) {
                        assignFieldValue(field, undefined);
                        if (field.formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
                            field.fieldGroup.length = 0;
                        }
                    }
                }
            }
            else if (hide === false) {
                if (field.resetOnHide && field.parent && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
                    assignFieldValue(field, field.defaultValue);
                }
                registerControl(field, undefined, true);
                if (field.resetOnHide && field.fieldArray && (field.fieldGroup || []).length !== (field.model || []).length) {
                    ((/** @type {?} */ (field.options)))._buildForm(true);
                }
            }
        }
        if (field.options.fieldChanges) {
            field.options.fieldChanges.next((/** @type {?} */ ({ field, type: 'hidden', value: hide })));
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    setExprValue(field, prop, value) {
        try {
            /** @type {?} */
            let target = field;
            /** @type {?} */
            const paths = this._evalExpressionPath(field, prop);
            /** @type {?} */
            const lastIndex = paths.length - 1;
            for (let i = 0; i < lastIndex; i++) {
                target = target[paths[i]];
            }
            target[paths[lastIndex]] = value;
        }
        catch (error) {
            error.message = `[Formly Error] [Expression "${prop}"] ${error.message}`;
            throw error;
        }
        if (prop === 'templateOptions.disabled' && field.key) {
            this.setDisabledState(field, value);
        }
        if (prop.indexOf('model.') === 0) {
            /** @type {?} */
            const path = prop.replace(/^model\./, '');
            /** @type {?} */
            const control = field.key && prop === path ? field.formControl : field.parent.formControl.get(path);
            if (control
                && !(isNullOrUndefined(control.value) && isNullOrUndefined(value))
                && control.value !== value) {
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
    emitExpressionChanges(field, property, value) {
        if (!field.options.fieldChanges) {
            return;
        }
        field.options.fieldChanges.next({
            field: field,
            type: 'expressionChanges',
            property,
            value,
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@experimental
 */
class FieldValidationExtension {
    /**
     * @param {?} formlyConfig
     */
    constructor(formlyConfig) {
        this.formlyConfig = formlyConfig;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        this.initFieldValidation(field, 'validators');
        this.initFieldValidation(field, 'asyncValidators');
    }
    /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    initFieldValidation(field, type) {
        /** @type {?} */
        const validators = [];
        if (type === 'validators' && !(field.hasOwnProperty('fieldGroup') && !field.key)) {
            validators.push(this.getPredefinedFieldValidation(field));
        }
        if (field[type]) {
            for (const validatorName in field[type]) {
                if (validatorName === 'validation' && !Array.isArray(field[type].validation)) {
                    field[type].validation = [field[type].validation];
                    console.warn(`NgxFormly(${field.key}): passing a non array value to the 'validation' is deprecated, pass an array instead`);
                }
                validatorName === 'validation'
                    ? validators.push(...field[type].validation.map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.wrapNgValidatorFn(field, v))))
                    : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
            }
        }
        defineHiddenProp(field, '_' + type, validators);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getPredefinedFieldValidation(field) {
        /** @type {?} */
        let VALIDATORS = [];
        FORMLY_VALIDATORS.forEach((/**
         * @param {?} opt
         * @return {?}
         */
        opt => wrapProperty(field.templateOptions, opt, (/**
         * @param {?} __0
         * @return {?}
         */
        ({ currentValue, firstChange }) => {
            VALIDATORS = VALIDATORS.filter((/**
             * @param {?} o
             * @return {?}
             */
            o => o !== opt));
            if (currentValue != null && currentValue !== false) {
                VALIDATORS.push(opt);
            }
            if (!firstChange && field.formControl) {
                updateValidity(field.formControl);
            }
        }))));
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (VALIDATORS.length === 0) {
                return null;
            }
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(VALIDATORS.map((/**
             * @param {?} opt
             * @return {?}
             */
            opt => (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const value = field.templateOptions[opt];
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
            }))))(control);
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    wrapNgValidatorFn(field, validator, validatorName) {
        /** @type {?} */
        let validatorOption = null;
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
            const { expression } = validator, options = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(validator, ["expression"]);
            validatorOption = {
                name: validatorName,
                validation: expression,
                options: Object.keys(options).length > 0 ? options : null,
            };
        }
        if (typeof validator === 'function') {
            validatorOption = {
                name: validatorName,
                validation: validator,
            };
        }
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const errors = validatorOption.validation(control, field, validatorOption.options);
            if (isPromise(errors)) {
                return errors.then((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.handleAsyncResult(field, validatorName ? !!v : v, validatorOption)));
            }
            if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(errors)) {
                return errors.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.handleAsyncResult(field, validatorName ? !!v : v, validatorOption))));
            }
            return this.handleResult(field, validatorName ? !!errors : errors, validatorOption);
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} errors
     * @param {?} options
     * @return {?}
     */
    handleAsyncResult(field, errors, options) {
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
    handleResult(field, errors, { name, options }) {
        if (typeof errors === 'boolean') {
            errors = errors ? null : { [name]: options ? options : true };
        }
        /** @type {?} */
        const ctrl = field.formControl;
        ctrl['_childrenErrors'] && ctrl['_childrenErrors'][name] && ctrl['_childrenErrors'][name]();
        if (isObject(errors)) {
            Object.keys(errors).forEach((/**
             * @param {?} name
             * @return {?}
             */
            name => {
                /** @type {?} */
                const errorPath = errors[name].errorPath
                    ? errors[name].errorPath
                    : (options || {}).errorPath;
                /** @type {?} */
                const childCtrl = errorPath ? field.formControl.get(errorPath) : null;
                if (childCtrl) {
                    const _a = errors[name], opts = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(_a, ["errorPath"]);
                    childCtrl.setErrors(Object.assign({}, (childCtrl.errors || {}), { [name]: opts }));
                    !ctrl['_childrenErrors'] && defineHiddenProp(ctrl, '_childrenErrors', {});
                    ctrl['_childrenErrors'][name] = (/**
                     * @return {?}
                     */
                    () => {
                        const _a = childCtrl.errors || {}, _b = name, toDelete = _a[_b], childErrors = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__rest)(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                        childCtrl.setErrors(Object.keys(childErrors).length === 0 ? null : childErrors);
                    });
                }
            }));
        }
        return errors;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@experimental
 */
class FieldFormExtension {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        if (!this.root) {
            this.root = field;
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent) {
            return;
        }
        if (field.fieldGroup && !field.key) {
            defineHiddenProp(field, 'formControl', field.parent.formControl);
        }
        else {
            this.addFormControl(field);
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
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
    addFormControl(field) {
        /** @type {?} */
        let control = findControl(field);
        if (!control) {
            /** @type {?} */
            const controlOptions = { updateOn: field.modelOptions.updateOn };
            /** @type {?} */
            const value = field.key ? getFieldValue(field) : field.defaultValue;
            /** @type {?} */
            const ref = this.config ? this.config.resolveFieldTypeRef(field) : null;
            if (ref && ref.componentType && ref.componentType['createControl']) {
                /** @type {?} */
                const component = ref.componentType;
                console.warn(`NgxFormly: '${component.name}::createControl' is deprecated since v5.0, use 'prePopulate' hook instead.`);
                control = component['createControl'](value, field);
            }
            else if (field.fieldGroup) {
                // TODO: move to postPopulate
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}, controlOptions);
            }
            else {
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
    setValidators(field, disabled = false) {
        /** @type {?} */
        let markForCheck = false;
        if (disabled === false && field.key && field.templateOptions && field.templateOptions.disabled) {
            disabled = true;
        }
        (field.fieldGroup || []).forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => this.setValidators(f, disabled) && (markForCheck = true)));
        if (field.key || !field.parent || (!field.key && !field.fieldGroup)) {
            const { formControl: c } = field;
            field.templateOptions = field.templateOptions || {};
            if (field.key && c && c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
                if (disabled && c.enabled) {
                    c.disable({ emitEvent: false, onlySelf: true });
                    markForCheck = true;
                }
                if (!disabled && c.disabled) {
                    c.enable({ emitEvent: false, onlySelf: true });
                    markForCheck = true;
                }
            }
            if (c && (null === c.validator || null === c.asyncValidator)) {
                c.setValidators((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(this.mergeValidators(field, '_validators'));
                    return v ? v(c) : null;
                }));
                c.setAsyncValidators((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.composeAsync(this.mergeValidators(field, '_asyncValidators'));
                    return v ? v(c) : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
                }));
                markForCheck = true;
            }
            if (markForCheck) {
                updateValidity(c, true);
                // update validity of `FormGroup` instance created by field with nested key.
                /** @type {?} */
                let parent = c.parent;
                for (let i = 1; i < getKeyPath(field).length; i++) {
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
    mergeValidators(field, type) {
        /** @type {?} */
        const validators = [];
        /** @type {?} */
        const c = field.formControl;
        if (c && c['_fields'] && c['_fields'].length > 1) {
            c['_fields']
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            (f) => !f._hide))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            (f) => validators.push(...f[type])));
        }
        else if (field[type]) {
            validators.push(...field[type]);
        }
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.key && f.fieldGroup))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => validators.push(...this.mergeValidators(f, type))));
        }
        return validators;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@experimental
 */
class CoreExtension {
    /**
     * @param {?} formlyConfig
     */
    constructor(formlyConfig) {
        this.formlyConfig = formlyConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        const fieldTransforms = (field.options && field.options.fieldTransform) || this.formlyConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms) ? fieldTransforms : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        fieldTransform => {
            if (fieldTransform) {
                console.warn(`NgxFormly: fieldTransform is deprecated since v5.0, use custom extension instead.`);
                /** @type {?} */
                const fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
                if (!fieldGroup) {
                    throw new Error('fieldTransform must return an array of fields');
                }
            }
        }));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            (f, index) => {
                Object.defineProperty(f, 'parent', { get: (/**
                     * @return {?}
                     */
                    () => field), configurable: true });
                Object.defineProperty(f, 'index', { get: (/**
                     * @return {?}
                     */
                    () => index), configurable: true });
                this.formId++;
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        this.getFieldComponentInstance(field).postPopulate();
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldOptions(field) {
        /** @type {?} */
        const root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, 'form', { get: (/**
             * @return {?}
             */
            () => root.formControl), configurable: true });
        Object.defineProperty(field, 'options', { get: (/**
             * @return {?}
             */
            () => root.options), configurable: true });
        Object.defineProperty(field, 'model', {
            get: (/**
             * @return {?}
             */
            () => field.key && field.fieldGroup ? getFieldValue(field) : root.model),
            configurable: true,
        });
        reverseDeepMerge(field, {
            id: getFieldId(`formly_${this.formId}`, field, field['index']),
            hooks: {},
            modelOptions: {},
            validation: { messages: {} },
            templateOptions: !field.type || !field.key ? {} : {
                label: '',
                placeholder: '',
                focus: false,
                disabled: false,
            },
        });
        if (this.formlyConfig.extras.resetFieldOnHide && field.resetOnHide !== false) {
            field.resetOnHide = true;
        }
        if (field.lifecycle) {
            console.warn(`NgxFormly: 'lifecycle' is deprecated since v5.0, use 'hooks' instead.`);
        }
        if (field.type !== 'formly-template'
            && (field.template
                || (field.expressionProperties && field.expressionProperties.template))) {
            if (field.type) {
                console.warn(`NgxFormly: passing 'type' property is not allowed when 'template' is set.`);
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
            let setDefaultValue = !isUndefined(field.key)
                && !isUndefined(field.defaultValue)
                && isUndefined(getFieldValue(field))
                && (!field.resetOnHide || !(field.hide || field.hideExpression));
            if (setDefaultValue && field.resetOnHide) {
                /** @type {?} */
                let parent = field.parent;
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
    initFieldWrappers(field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        const fieldTemplateManipulators = Object.assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = [
            ...this.formlyConfig.templateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...field.wrappers,
            ...this.formlyConfig.templateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
        ].filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        (el, i, a) => el && i === a.indexOf(el)));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getFieldComponentInstance(field) {
        /** @type {?} */
        const componentRef = this.formlyConfig.resolveFieldTypeRef(field);
        /** @type {?} */
        const instance = componentRef ? (/** @type {?} */ (componentRef.instance)) : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            () => instance.prePopulate && instance.prePopulate(field)),
            onPopulate: (/**
             * @return {?}
             */
            () => instance.onPopulate && instance.onPopulate(field)),
            postPopulate: (/**
             * @return {?}
             */
            () => instance.postPopulate && instance.postPopulate(field)),
        };
    }
}

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
        types: [
            { name: 'formly-group', component: FormlyGroup },
            { name: 'formly-template', component: FormlyTemplateType },
        ],
        extensions: [
            { name: 'core', extension: new CoreExtension(formlyConfig) },
            { name: 'field-validation', extension: new FieldValidationExtension(formlyConfig) },
            { name: 'field-form', extension: new FieldFormExtension(formlyConfig) },
            { name: 'field-expression', extension: new FieldExpressionExtension() },
        ],
    };
}
class FormlyModule {
    /**
     * @param {?} configService
     * @param {?=} configs
     */
    constructor(configService, configs = []) {
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => configService.addConfig(config)));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: FormlyModule,
            providers: [
                { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
                { provide: FORMLY_CONFIG, useValue: config, multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
                FormlyConfig,
                FormlyFormBuilder,
            ],
        };
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: FormlyModule,
            providers: [
                { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
                { provide: FORMLY_CONFIG, useValue: config, multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
                FormlyFormBuilder,
            ],
        };
    }
}
FormlyModule.ɵfac = function FormlyModule_Factory(t) { return new (t || FormlyModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FORMLY_CONFIG, 8)); };
FormlyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormlyModule });
FormlyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]] });
/** @nocollapse */
FormlyModule.ctorParameters = () => [
    { type: FormlyConfig },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [FORMLY_CONFIG,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    FormlyForm,
                    FormlyField,
                    FormlyAttributes,
                    FormlyGroup,
                    FormlyValidationMessage,
                    FormlyTemplateType,
                    ( /** @type {?} */(FieldArrayType)),
                ],
                entryComponents: [FormlyGroup, FormlyTemplateType],
                exports: [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
            }]
    }], function () { return [{ type: FormlyConfig }, { type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [FORMLY_CONFIG]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormlyModule, { declarations: function () { return [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType, FieldArrayType]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]; }, exports: function () { return [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage]; } }); })();

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





/***/ }),

/***/ 5279:
/*!**********************************************************************************!*\
  !*** ./node_modules/@ngx-formly/ionic/__ivy_ngcc__/fesm2015/ngx-formly-ionic.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyIonicModule": function() { return /* binding */ FormlyIonicModule; },
/* harmony export */   "FormlyFieldInput": function() { return /* binding */ FormlyFieldInput; },
/* harmony export */   "FormlyFieldCheckbox": function() { return /* binding */ FormlyFieldCheckbox; },
/* harmony export */   "FormlyFieldDatetime": function() { return /* binding */ FormlyFieldDatetime; },
/* harmony export */   "FormlyFieldRadio": function() { return /* binding */ FormlyFieldRadio; },
/* harmony export */   "FormlyFieldToggle": function() { return /* binding */ FormlyFieldToggle; },
/* harmony export */   "FormlyFieldSelect": function() { return /* binding */ FormlyFieldSelect; },
/* harmony export */   "FormlyFieldRange": function() { return /* binding */ FormlyFieldRange; },
/* harmony export */   "FormlyFieldTextArea": function() { return /* binding */ FormlyFieldTextArea; },
/* harmony export */   "FormlyWrapperFormField": function() { return /* binding */ FormlyWrapperFormField; },
/* harmony export */   "ɵc": function() { return /* binding */ IonFormlyAttributes; },
/* harmony export */   "ɵa": function() { return /* binding */ FIELD_TYPE_COMPONENTS; },
/* harmony export */   "ɵb": function() { return /* binding */ IONIC_FORMLY_CONFIG; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core/select */ 89705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ 75741);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







function FormlyFieldInput_ion_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-input", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.to.type || "text")("formControl", ctx_r0.formControl)("ionFormlyAttributes", ctx_r0.field);
} }
function FormlyFieldInput_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-input", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.formControl)("ionFormlyAttributes", ctx_r2.field);
} }
function FormlyFieldRadio_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-radio", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", option_r2.disabled || ctx_r0.formControl.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.value);
} }
function FormlyFieldRadio_ion_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "formly-validation-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r1.field);
} }
function FormlyFieldSelect_ng_container_0_ion_select_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.value)("disabled", option_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
} }
function FormlyFieldSelect_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-select", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormlyFieldSelect_ng_container_0_ion_select_option_2_Template, 2, 3, "ion-select-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const selectOptions_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-self", ctx_r0.to.labelPosition === "floating" ? "stretch" : "")("max-width", ctx_r0.to.labelPosition === "floating" ? 100 : "", "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.formControl)("compareWith", ctx_r0.to.compareWith)("ionFormlyAttributes", ctx_r0.field)("multiple", ctx_r0.to.multiple)("interface", ctx_r0.to.interface)("okText", ctx_r0.to.okText)("cancelText", ctx_r0.to.cancelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", selectOptions_r1);
} }
function FormlyWrapperFormField_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormlyWrapperFormField_ng_template_4_Template(rf, ctx) { }
function FormlyWrapperFormField_ion_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "formly-validation-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r3.field);
} }
class FormlyFieldInput extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldInput.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldInput_BaseFactory; return function FormlyFieldInput_Factory(t) { return (ɵFormlyFieldInput_BaseFactory || (ɵFormlyFieldInput_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldInput)))(t || FormlyFieldInput); }; }();
FormlyFieldInput.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldInput, selectors: [["formly-field-ion-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[3, "type", "formControl", "ionFormlyAttributes", 4, "ngIf", "ngIfElse"], ["numberTmp", ""], [3, "type", "formControl", "ionFormlyAttributes"], ["type", "number", 3, "formControl", "ionFormlyAttributes"]], template: function FormlyFieldInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldInput_ion_input_0_Template, 1, 3, "ion-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldInput_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.to.type !== "number")("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NumericValueAccessor]; }, styles: ["[_nghost-%COMP%] { display: inherit; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-input',
                template: `
    <ion-input *ngIf="to.type !== 'number' else numberTmp" [type]="to.type || 'text'" [formControl]="formControl" [ionFormlyAttributes]="field"></ion-input>
    <ng-template #numberTmp>
      <ion-input type="number" [formControl]="formControl" [ionFormlyAttributes]="field"></ion-input>
    </ng-template>
  `,
                styles: [':host { display: inherit; }']
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldCheckbox extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldCheckbox.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldCheckbox_BaseFactory; return function FormlyFieldCheckbox_Factory(t) { return (ɵFormlyFieldCheckbox_BaseFactory || (ɵFormlyFieldCheckbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldCheckbox)))(t || FormlyFieldCheckbox); }; }();
FormlyFieldCheckbox.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldCheckbox, selectors: [["formly-field-ion-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [[3, "formControl", "ionFormlyAttributes"]], template: function FormlyFieldCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-checkbox", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes]; }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-checkbox',
                template: `
    <ion-checkbox
      [formControl]="formControl"
      [ionFormlyAttributes]="field">
    </ion-checkbox>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldDatetime extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldDatetime.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldDatetime_BaseFactory; return function FormlyFieldDatetime_Factory(t) { return (ɵFormlyFieldDatetime_BaseFactory || (ɵFormlyFieldDatetime_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldDatetime)))(t || FormlyFieldDatetime); }; }();
FormlyFieldDatetime.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldDatetime, selectors: [["formly-field-ion-datetime"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 18, consts: [[3, "cancelText", "dayNames", "dayShortNames", "dayValues", "displayFormat", "doneText", "hourValues", "minuteValues", "monthNames", "monthShortNames", "monthValues", "pickerFormat", "pickerOptions", "yearValues", "min", "max", "formControl", "ionFormlyAttributes"]], template: function FormlyFieldDatetime_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-datetime", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelText", ctx.to.cancelText)("dayNames", ctx.to.dayNames)("dayShortNames", ctx.to.dayShortNames)("dayValues", ctx.to.dayValues)("displayFormat", ctx.to.displayFormat)("doneText", ctx.to.doneText)("hourValues", ctx.to.hourValues)("minuteValues", ctx.to.minuteValues)("monthNames", ctx.to.monthNames)("monthShortNames", ctx.to.monthShortNames)("monthValues", ctx.to.monthValues)("pickerFormat", ctx.to.pickerFormat)("pickerOptions", ctx.to.pickerOptions)("yearValues", ctx.to.yearValues)("min", ctx.to.minDate ? ctx.to.minDate : ctx.to.min)("max", ctx.to.maxDate ? ctx.to.maxDate : ctx.to.max)("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes]; }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldDatetime, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-datetime',
                template: `
    <ion-datetime
      [cancelText]="to.cancelText"
      [dayNames]="to.dayNames"
      [dayShortNames]="to.dayShortNames"
      [dayValues]="to.dayValues"
      [displayFormat]="to.displayFormat"
      [doneText]="to.doneText"
      [hourValues]="to.hourValues"
      [minuteValues]="to.minuteValues"
      [monthNames]="to.monthNames"
      [monthShortNames]="to.monthShortNames"
      [monthValues]="to.monthValues"
      [pickerFormat]="to.pickerFormat"
      [pickerOptions]="to.pickerOptions"
      [yearValues]="to.yearValues"
      [min]="to.minDate ? to.minDate : to.min"
      [max]="to.maxDate ? to.maxDate : to.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field">
    </ion-datetime>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldRadio extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: { options: [] },
        };
    }
}
FormlyFieldRadio.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldRadio_BaseFactory; return function FormlyFieldRadio_Factory(t) { return (ɵFormlyFieldRadio_BaseFactory || (ɵFormlyFieldRadio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldRadio)))(t || FormlyFieldRadio); }; }();
FormlyFieldRadio.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldRadio, selectors: [["formly-field-ion-radio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 10, consts: [[3, "formControl", "ionFormlyAttributes"], [3, "disabled", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], [3, "disabled"], [3, "value"], ["lines", "none"], ["color", "danger"], [3, "field"]], template: function FormlyFieldRadio_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.to.options, ctx.field)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonListHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["ɵc"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectOptionsPipe]; }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldRadio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-radio',
                template: `
    <ion-list>
      <ion-radio-group
        [formControl]="formControl"
        [ionFormlyAttributes]="field">
        <ion-list-header>{{ to.label }}</ion-list-header>
        <ion-item *ngFor="let option of to.options | formlySelectOptions:field | async" [disabled]="option.disabled || formControl.disabled">
          <ion-label>{{ option.label }}</ion-label>
          <ion-radio [value]="option.value"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldToggle extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldToggle.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldToggle_BaseFactory; return function FormlyFieldToggle_Factory(t) { return (ɵFormlyFieldToggle_BaseFactory || (ɵFormlyFieldToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldToggle)))(t || FormlyFieldToggle); }; }();
FormlyFieldToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldToggle, selectors: [["formly-field-ion-toggle"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [[3, "formControl", "ionFormlyAttributes"]], template: function FormlyFieldToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-toggle", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes]; }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-toggle',
                template: `
    <ion-toggle
      [formControl]="formControl"
      [ionFormlyAttributes]="field">
    </ion-toggle>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldSelect extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                options: [],
                /**
                 * @param {?} o1
                 * @param {?} o2
                 * @return {?}
                 */
                compareWith(o1, o2) {
                    return o1 === o2;
                },
            },
        };
    }
}
FormlyFieldSelect.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldSelect_BaseFactory; return function FormlyFieldSelect_Factory(t) { return (ɵFormlyFieldSelect_BaseFactory || (ɵFormlyFieldSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldSelect)))(t || FormlyFieldSelect); }; }();
FormlyFieldSelect.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldSelect, selectors: [["formly-field-ion-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [[4, "ngIf"], [3, "formControl", "compareWith", "ionFormlyAttributes", "multiple", "interface", "okText", "cancelText"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]], template: function FormlyFieldSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldSelect_ng_container_0_Template, 3, 12, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formlySelectOptions");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx.to.options, ctx.field)));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectOptionsPipe]; }, styles: ["[_nghost-%COMP%] { display: inherit; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-select',
                template: `
    <!-- ng-container used as a workaround for https://github.com/ionic-team/ionic/issues/19324 -->
    <ng-container *ngIf="to.options | formlySelectOptions:field | async; let selectOptions">
      <ion-select
        [style.align-self]="to.labelPosition === 'floating' ? 'stretch':''"
        [style.max-width.%]="to.labelPosition === 'floating' ? 100 : ''"

        [formControl]="formControl"
        [compareWith]="to.compareWith"
        [ionFormlyAttributes]="field"
        [multiple]="to.multiple"
        [interface]="to.interface"
        [okText]="to.okText"
        [cancelText]="to.cancelText">
        <ion-select-option *ngFor="let option of selectOptions" [value]="option.value" [disabled]="option.disabled">
            {{ option.label }}
        </ion-select-option>
      </ion-select>
    </ng-container>
  `,
                styles: [':host { display: inherit; }']
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldRange extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldRange.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldRange_BaseFactory; return function FormlyFieldRange_Factory(t) { return (ɵFormlyFieldRange_BaseFactory || (ɵFormlyFieldRange_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldRange)))(t || FormlyFieldRange); }; }();
FormlyFieldRange.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldRange, selectors: [["formly-field-ion-range"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [[3, "min", "max", "formControl", "ionFormlyAttributes"], ["slot", "start"], ["slot", "end"]], template: function FormlyFieldRange_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.to.min)("max", ctx.to.max)("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.to.max);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel]; }, styles: ["[_nghost-%COMP%] { display: inherit; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldRange, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-range',
                template: `
    <ion-range
      [min]="to.min"
      [max]="to.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field">
      <ion-label slot="start">{{ to.min }}</ion-label>
      <ion-label slot="end">{{ to.max }}</ion-label>
    </ion-range>
  `,
                styles: [':host { display: inherit; }']
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyFieldTextArea extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
}
FormlyFieldTextArea.ɵfac = /*@__PURE__*/ function () { let ɵFormlyFieldTextArea_BaseFactory; return function FormlyFieldTextArea_Factory(t) { return (ɵFormlyFieldTextArea_BaseFactory || (ɵFormlyFieldTextArea_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldTextArea)))(t || FormlyFieldTextArea); }; }();
FormlyFieldTextArea.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyFieldTextArea, selectors: [["formly-field-ion-textarea"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 4, consts: [[3, "formControl", "ionFormlyAttributes", "cols", "rows"]], template: function FormlyFieldTextArea_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-textarea", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ionFormlyAttributes", ctx.field)("cols", ctx.to.cols)("rows", ctx.to.rows);
    } }, directives: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, IonFormlyAttributes]; }, styles: ["[_nghost-%COMP%] { display: inherit; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldTextArea, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-field-ion-textarea',
                template: `
    <ion-textarea
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [cols]="to.cols"
      [rows]="to.rows">
    </ion-textarea>
  `,
                styles: [':host { display: inherit; }']
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyWrapperFormField extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper {
}
FormlyWrapperFormField.ɵfac = /*@__PURE__*/ function () { let ɵFormlyWrapperFormField_BaseFactory; return function FormlyWrapperFormField_Factory(t) { return (ɵFormlyWrapperFormField_BaseFactory || (ɵFormlyWrapperFormField_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyWrapperFormField)))(t || FormlyWrapperFormField); }; }();
FormlyWrapperFormField.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormlyWrapperFormField, selectors: [["formly-wrapper-ion-form-field"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [[3, "lines"], [3, "position"], ["aria-hidden", "true", 4, "ngIf"], ["fieldComponent", ""], ["lines", "none", 4, "ngIf"], ["aria-hidden", "true"], ["lines", "none"], ["color", "danger"], [3, "field"]], template: function FormlyWrapperFormField_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormlyWrapperFormField_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormlyWrapperFormField_ng_template_4_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormlyWrapperFormField_ion_item_6_Template, 5, 1, "ion-item", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lines", ctx.to.itemLines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.to.labelPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.to.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.to.required && ctx.to.hideRequiredMarker !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyWrapperFormField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'formly-wrapper-ion-form-field',
                template: `
    <ion-item [lines]="to.itemLines">
      <ion-label [position]="to.labelPosition">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </ion-label>
      <ng-template #fieldComponent></ng-template>
    </ion-item>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FIELD_TYPE_COMPONENTS = [
    // types
    FormlyFieldInput,
    FormlyFieldCheckbox,
    FormlyFieldDatetime,
    FormlyFieldRadio,
    FormlyFieldToggle,
    FormlyFieldSelect,
    FormlyFieldRange,
    FormlyFieldTextArea,
    // wrappers
    FormlyWrapperFormField,
];
/** @type {?} */
const IONIC_FORMLY_CONFIG = {
    types: [
        {
            name: 'input',
            component: FormlyFieldInput,
            wrappers: ['form-field'],
        },
        {
            name: 'checkbox',
            component: FormlyFieldCheckbox,
            wrappers: ['form-field'],
        },
        {
            name: 'datetime',
            component: FormlyFieldDatetime,
            wrappers: ['form-field'],
        },
        {
            name: 'radio',
            component: FormlyFieldRadio,
            wrappers: [],
        },
        {
            name: 'toggle',
            component: FormlyFieldToggle,
            wrappers: ['form-field'],
        },
        {
            name: 'select',
            component: FormlyFieldSelect,
            wrappers: ['form-field'],
        },
        {
            name: 'range',
            component: FormlyFieldRange,
            wrappers: ['form-field'],
        },
        {
            name: 'textarea',
            component: FormlyFieldTextArea,
            wrappers: ['form-field'],
        },
    ],
    wrappers: [
        { name: 'form-field', component: FormlyWrapperFormField },
    ],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonFormlyAttributes extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyAttributes {
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    focusElement(element, value) {
        if (!element.setFocus || !value) {
            return;
        }
        if (!element.getInputElement()) {
            setTimeout((/**
             * @return {?}
             */
            () => element.setFocus()), 300);
        }
        else {
            element.setFocus();
        }
    }
}
IonFormlyAttributes.ɵfac = /*@__PURE__*/ function () { let ɵIonFormlyAttributes_BaseFactory; return function IonFormlyAttributes_Factory(t) { return (ɵIonFormlyAttributes_BaseFactory || (ɵIonFormlyAttributes_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonFormlyAttributes)))(t || IonFormlyAttributes); }; }();
IonFormlyAttributes.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IonFormlyAttributes, selectors: [["", "ionFormlyAttributes", ""]], hostBindings: function IonFormlyAttributes_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function IonFormlyAttributes_ionFocus_HostBindingHandler($event) { return ctx.onFocus($event); })("ionBlur", function IonFormlyAttributes_ionBlur_HostBindingHandler($event) { return ctx.onBlur($event); })("ionChange", function IonFormlyAttributes_ionChange_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, inputs: { field: ["ionFormlyAttributes", "field"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
IonFormlyAttributes.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['ionFormlyAttributes',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonFormlyAttributes, [{
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
    }], null, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ionFormlyAttributes']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyIonicModule {
}
FormlyIonicModule.ɵfac = function FormlyIonicModule_Factory(t) { return new (t || FormlyIonicModule)(); };
FormlyIonicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormlyIonicModule });
FormlyIonicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule,
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild(IONIC_FORMLY_CONFIG),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyIonicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [FIELD_TYPE_COMPONENTS, IonFormlyAttributes],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
                    _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule,
                    _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild(IONIC_FORMLY_CONFIG),
                ],
                exports: [IonFormlyAttributes]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormlyIonicModule, { declarations: function () { return [FormlyFieldInput, FormlyFieldCheckbox, FormlyFieldDatetime, FormlyFieldRadio, FormlyFieldToggle, FormlyFieldSelect, FormlyFieldRange, FormlyFieldTextArea, FormlyWrapperFormField, IonFormlyAttributes]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule]; }, exports: function () { return [IonFormlyAttributes]; } }); })();

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





/***/ }),

/***/ 31764:
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": function() { return /* binding */ TestPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 36103);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 16615:
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": function() { return /* binding */ TestPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 31764);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 36103);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-formly/core */ 75741);
/* harmony import */ var _ngx_formly_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-formly/ionic */ 5279);
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ 90462);
/* harmony import */ var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-dynamic-forms/ui-ionic */ 81029);












//import { myCustomValidator } from './model';
let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.FormlyModule.forRoot(),
            _ngx_formly_ionic__WEBPACK_IMPORTED_MODULE_8__.FormlyIonicModule,
            _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_9__.DynamicFormsMaterialUIModule,
            _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_10__.DynamicFormsIonicUIModule
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage],
    })
], TestPageModule);



/***/ }),

/***/ 36103:
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": function() { return /* binding */ TestPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./test.page.html */ 60774);
/* harmony import */ var _test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.scss */ 47626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);





let TestPage = class TestPage {
    constructor(auth) {
        this.auth = auth;
        this.model = [];
        this.selectedFileBLOB = "./assets/files/cert1.pdf";
    }
    ngOnInit() {
        this.auth.database.executeSql("select * from SyncLog", []).then(res => {
            for (let i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
                this.model.push(res.rows.item(i));
            }
        }).catch(e => {
            this.auth.showToast("err" + JSON.stringify(e));
        });
    }
    Clear() {
        this.auth.database.executeSql("delete from SyncLog", []).then(res => {
            this.model = [];
        });
    }
};
TestPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-test',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestPage);



/***/ }),

/***/ 50760:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 60774:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/test/test.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<ion-header>\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n        <ion-title style=\"font-size: 16px;\">Sync Log</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-item>\n        <ion-grid>\n            <ion-row>\n                <ion-col> JOBGUID </ion-col>\n                <ion-col> Action Name </ion-col>\n                <ion-col> Success/Error Message </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n    <ion-item *ngFor='let list of model;'>\n        <ion-grid>\n            <ion-row>\n                <ion-col>  {{list.JOBGUID}}  </ion-col>\n                <ion-col>  {{list.ActionName}}   </ion-col>\n                <ion-col>  {{list.Msg}}  </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-button color=\"secondary\" expand=\"full\" (click)=\" Clear()\">Clear</ion-button>\n  </ion-footer>");

/***/ }),

/***/ 47626:
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = "p {\n  color: red;\n  align-content: center;\n  width: -moz-max-content;\n  width: max-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n#canvas_container {\n  width: 800px;\n  height: 450px;\n  overflow: auto;\n}\n\n#canvas_container {\n  background: #333;\n  text-align: center;\n  border: solid 3px;\n}\n\n.fixed-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.outerdiv {\n  width: 100%;\n  height: 100%;\n}\n\nmat-select {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFHSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBTUU7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUpOOztBQU9FO0VBQ0ksV0FBQTtBQUpOIiwiZmlsZSI6InRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5we1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuIFxuI2NhbnZhc19jb250YWluZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jY2FudmFzX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHg7XG59XG5cbi5maXhlZC1pbWcge1xuIFxuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgXG4gIH1cblxuICAub3V0ZXJkaXZ7XG4gICAgICAgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogIDEwMCU7XG4gIH1cblxuICBtYXQtc2VsZWN0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLy8gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyB3aWR0aDogMjUwcHg7XG4gICAgLy8gaGVpZ2h0OiAyNTBweDtcbiAgICAvLyBvYmplY3QtZml0OiBjb3ZlciJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_test_test_module_ts-es2015.js.map