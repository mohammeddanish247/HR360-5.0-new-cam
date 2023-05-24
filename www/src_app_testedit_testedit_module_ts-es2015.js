"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_testedit_testedit_module_ts"],{

/***/ 22331:
/*!***********************************!*\
  !*** ./src/app/testedit/model.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppType": function() { return /* binding */ AppType; },
/* harmony export */   "BoilerType": function() { return /* binding */ BoilerType; },
/* harmony export */   "Make": function() { return /* binding */ Make; },
/* harmony export */   "MakeAnswer": function() { return /* binding */ MakeAnswer; },
/* harmony export */   "Model": function() { return /* binding */ Model; },
/* harmony export */   "ModelAnswer": function() { return /* binding */ ModelAnswer; },
/* harmony export */   "Location": function() { return /* binding */ Location; },
/* harmony export */   "Flue": function() { return /* binding */ Flue; },
/* harmony export */   "Owned": function() { return /* binding */ Owned; },
/* harmony export */   "Inspected": function() { return /* binding */ Inspected; },
/* harmony export */   "Zero": function() { return /* binding */ Zero; },
/* harmony export */   "OPU": function() { return /* binding */ OPU; },
/* harmony export */   "GR": function() { return /* binding */ GR; },
/* harmony export */   "customForbiddenValidator": function() { return /* binding */ customForbiddenValidator; },
/* harmony export */   "OSD": function() { return /* binding */ OSD; },
/* harmony export */   "VS": function() { return /* binding */ VS; },
/* harmony export */   "VC": function() { return /* binding */ VC; },
/* harmony export */   "Spilage": function() { return /* binding */ Spilage; },
/* harmony export */   "CAR": function() { return /* binding */ CAR; },
/* harmony export */   "HIRatio": function() { return /* binding */ HIRatio; },
/* harmony export */   "HICO2": function() { return /* binding */ HICO2; },
/* harmony export */   "HICOPPM": function() { return /* binding */ HICOPPM; },
/* harmony export */   "LFRatio": function() { return /* binding */ LFRatio; },
/* harmony export */   "LFCO2": function() { return /* binding */ LFCO2; },
/* harmony export */   "LFCOPPM": function() { return /* binding */ LFCOPPM; },
/* harmony export */   "SAFE2U": function() { return /* binding */ SAFE2U; },
/* harmony export */   "DefectI": function() { return /* binding */ DefectI; },
/* harmony export */   "GIUSP": function() { return /* binding */ GIUSP; },
/* harmony export */   "WarnCert": function() { return /* binding */ WarnCert; },
/* harmony export */   "RAT": function() { return /* binding */ RAT; },
/* harmony export */   "MY_FORM_MODEL": function() { return /* binding */ MY_FORM_MODEL; }
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 57636);

const boilerList = [
    {
        label: "Combi",
        value: "Combi",
    },
    {
        label: "Heat Type",
        value: "HeatType"
    },
    {
        label: "System",
        value: "System"
    },
    {
        label: "Back Boiler",
        value: "BackBoiler"
    },
];
const location = [
    {
        label: "BathRoom",
        value: "BathRoom"
    },
    {
        label: "Garage",
        value: "Garage"
    },
    {
        label: "Hall",
        value: "Hall"
    },
    {
        label: "Join",
        value: "Join"
    },
];
// const FlueList = [
//   {
//     label: "Open Flue",
//     value: "OpenFlue"
//   },
//   {
//     label: "Room Sealed",
//     value: "RoomSealed"
//   },]
const OwnedList = [
    {
        label: "LandLord",
        value: "LandLord"
    },
    {
        label: "Tenant",
        value: "Tenant"
    },
];
const InspectedList = [
    {
        label: "Worked On",
        value: "WorkedOn"
    },
    {
        label: "Visual",
        value: "Visual"
    },
];
// const ZeroList = [
//   {
//     label: "LandLord",
//     value: "LandLord"
//   },
//   {
//     label: "Tenant",
//     value: "Tenant"
//   },]
const AppType = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "AppType",
    placeholder: "Choose Appliance",
    multiple: false,
    validators: { required: null },
});
const BoilerType = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "BoilerType",
    placeholder: "Choose A Boiler Type",
    multiple: false,
    name: 'BoilerType',
    hidden: true,
    options: boilerList,
    validators: { required: null },
    //errorMessages:{required:'Please Select a Boiler Type '}
});
const Make = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Make",
    placeholder: "Choose A Make",
    multiple: false,
    name: 'MakeModel',
    options: [
        // {
        //   label: "Select",
        //   value: "Select"
        // },
        {
            label: "Others",
            value: "Others"
        },
    ],
    hidden: true,
    validators: { required: null },
});
const MakeAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "MakeAnswer",
    label: "Make Answer",
    maxLength: 15,
    placeholder: "Enter Make",
    hidden: true,
    validators: { required: null },
});
const Model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Model",
    placeholder: "Choose A Model",
    multiple: false,
    name: 'ModelModel',
    options: [
        // {
        //   label: "Select",
        //   value: "Select"
        // },
        {
            label: "Others",
            value: "Others"
        },
    ],
    hidden: true,
    validators: { required: null },
});
const ModelAnswer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "ModelAnswer",
    label: "Model Answer",
    maxLength: 15,
    placeholder: "Enter Model",
    hidden: true,
    validators: { required: null },
});
const Location = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Location",
    placeholder: "Choose A Location",
    multiple: false,
    name: 'Location',
    options: location,
    hidden: true,
    validators: { required: null },
});
const Flue = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Flue",
    placeholder: "Flue",
    multiple: false,
    name: 'Flue',
    hidden: true,
    validators: { required: null },
});
const Owned = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Owned",
    placeholder: "Owned By",
    multiple: false,
    name: 'Owned',
    options: OwnedList,
    hidden: true,
    validators: { required: null },
});
const Inspected = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Inspected",
    placeholder: "Inspected",
    multiple: false,
    name: 'Inspected',
    options: InspectedList,
    hidden: true,
    validators: { required: null },
});
const Zero = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Zero",
    name: 'Zero',
    label: "Zero Govern",
    hidden: true,
    validators: { required: null },
});
const OPU = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "OPU",
    name: 'OPU',
    label: "Operating Pressure Unit",
    hidden: true,
    validators: { required: null },
});
const GR = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "GR",
    name: 'GR',
    label: "Gas Rate/ Burner Pressure",
    hidden: true,
    inputType: 'number',
    validators: { required: null },
});
function customForbiddenValidator(forbiddenValue) {
    return (control) => {
        if (control && control.value === forbiddenValue) {
            return { forbidden: true };
        }
        return null;
    };
}
// export function customGRValidator(input: DynamicInputModel): ValidationErrors | null {
//   const inputValue = input.value as number;
//   let hasError = false;
//   if (inputValue <0 || inputValue>70 ) {
//       hasError = true;
//   }
//   return hasError ? {customGRValidator: true} : null;
// }
const OSD = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "OSD",
    name: 'OSD',
    label: "Operation of Safety Device",
    hidden: true,
    validators: { required: null },
});
const VS = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "VS",
    name: 'VS',
    label: "Ventilation Satisfaction",
    hidden: true,
    validators: { required: null },
});
const VC = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "VC",
    name: 'VC',
    label: "Visual Condition of Flue and Termination",
    hidden: true,
    validators: { required: null },
});
const Spilage = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "Spilage",
    name: 'Spilage',
    label: "Flue FLow Continuity and Spillage",
    hidden: true,
    validators: { required: null },
});
const CAR = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "CAR",
    name: 'CAR',
    label: "Combustion Analyzer Reading",
    hidden: true,
    validators: { required: null },
});
const HIRatio = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "HIRatio",
    name: 'HIRatio',
    label: "High Initial Ratio",
    hidden: true,
    inputType: 'number',
    validators: { required: null },
});
const HICO2 = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "HICO2",
    name: 'HICO2',
    label: "High Initial CO2",
    hidden: true,
    validators: { required: null },
});
const HICOPPM = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "HICOPPM",
    name: 'HICOPPM',
    label: "High Initial CO2 PPM",
    hidden: true,
    validators: { required: null },
});
const LFRatio = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "LFRatio",
    name: 'LFRatio',
    label: "Low Final Ration",
    hidden: true,
    validators: { required: null },
});
const LFCO2 = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "LFCO2",
    name: 'LFCO2',
    label: "Low Final CO2",
    hidden: true,
    validators: { required: null },
});
const LFCOPPM = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "LFCOPPM",
    name: 'LFCOPPM',
    label: "Low Final CO PPM",
    hidden: true,
    validators: { required: null },
});
const SAFE2U = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "SAFE2U",
    name: 'SAFE2U',
    label: "SAFE TO USE",
    hidden: true,
    options: [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }],
    validators: { required: null },
});
const DefectI = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "DefectI",
    name: 'DefectI',
    label: "Defect Identified",
    hidden: true,
    validators: { required: null },
});
const GIUSP = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "GIUSP",
    name: 'GIUSP',
    label: "GIUSP Classification",
    hidden: true,
    validators: { required: null },
});
const WarnCert = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicInputModel({
    id: "WarnCert",
    name: 'WarnCert',
    label: "Warning Certificate Number",
    hidden: true,
    validators: { required: null },
});
const RAT = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.DynamicSelectModel({
    id: "RAT",
    name: 'RAT',
    label: "Remedial Actions Taken",
    hidden: true,
    validators: { required: null },
});
const MY_FORM_MODEL = [AppType, BoilerType, Make, MakeAnswer, Model, ModelAnswer, Location,
    Flue, Owned, Inspected, Zero, OPU, GR, OSD, VS, VC, Spilage, CAR, HIRatio, HICO2, HICOPPM, LFRatio, LFCO2, LFCOPPM, SAFE2U, DefectI,
    GIUSP, WarnCert, RAT];
//export const MY_FORM_MODEL: DynamicFormModel = [OSD];


/***/ }),

/***/ 86773:
/*!*****************************************************!*\
  !*** ./src/app/testedit/testedit-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TesteditPageRoutingModule": function() { return /* binding */ TesteditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _testedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testedit.page */ 63927);




const routes = [
    {
        path: '',
        component: _testedit_page__WEBPACK_IMPORTED_MODULE_0__.TesteditPage
    }
];
let TesteditPageRoutingModule = class TesteditPageRoutingModule {
};
TesteditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TesteditPageRoutingModule);



/***/ }),

/***/ 92679:
/*!*********************************************!*\
  !*** ./src/app/testedit/testedit.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TesteditPageModule": function() { return /* binding */ TesteditPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _testedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testedit-routing.module */ 86773);
/* harmony import */ var _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/ui-material */ 90462);
/* harmony import */ var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-dynamic-forms/ui-ionic */ 81029);
/* harmony import */ var _testedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testedit.page */ 63927);










let TesteditPageModule = class TesteditPageModule {
};
TesteditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _testedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.TesteditPageRoutingModule,
            _ng_dynamic_forms_ui_material__WEBPACK_IMPORTED_MODULE_7__.DynamicFormsMaterialUIModule,
            _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_8__.DynamicFormsIonicUIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_testedit_page__WEBPACK_IMPORTED_MODULE_1__.TesteditPage]
    })
], TesteditPageModule);



/***/ }),

/***/ 63927:
/*!*******************************************!*\
  !*** ./src/app/testedit/testedit.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TesteditPage": function() { return /* binding */ TesteditPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./testedit.page.html */ 60605);
/* harmony import */ var _testedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testedit.page.scss */ 79166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 57636);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ 22331);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 12314);










let TesteditPage = class TesteditPage {
    constructor(formService, alertController, router, route, apiGenerate, storage) {
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
        this.AppList = [
            {
                label: "Boiler",
                value: "Boiler"
            },
            {
                label: "Cooker",
                value: "Cooker"
            },
            {
                label: "Water Heater",
                value: "WaterHeater"
            },
            {
                label: "Hob",
                value: "Hob"
            },
            {
                label: "Fire",
                value: "Fire"
            }
        ];
        this.SaveFlag = true;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('###params item: ', this.data['JOBGUID']);
                this.storage.get(this.data['JOBGUID']).then((data) => {
                    console.log("FOSDEM " + data);
                    this.jsonData = data;
                    this.reinit();
                });
                // this.apiGenerate.database.executeSql('select json from newappliance where JOBGUID=?', [this.data['JOBGUID']])
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
    alert0001Validation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'value should be of format 0.0001',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ;
    alert100Validation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'value should be of format 100',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentMbar(low, high) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Mbar should be between' + low + ' & ' + high,
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentkwh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Kw/h should be between 0 & 70',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        // this.formModel = this.formService.fromJSON(this.jsonData);
        console.log('sab ' + this.jsonData);
        if (this.jsonData == '') {
            console.log("### empty ");
            this.formGroup = this.formService.createFormGroup(this.formModel);
            _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
        }
        else {
            this.formModel = this.formService.fromJSON(this.jsonData);
            this.formGroup = this.formService.createFormGroup(this.formModel);
            _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
        }
    }
    reinit() {
        this.formModel = this.formService.fromJSON(this.jsonData);
        this.formGroup = this.formService.createFormGroup(this.formModel);
        _model__WEBPACK_IMPORTED_MODULE_3__.AppType.options = this.AppList;
    }
    onChange($event) {
        console.log('', $event);
        //AppType
        if ($event.model.name == "AppType") {
            console.log('Apptype', $event.group.value['AppType']);
            _model__WEBPACK_IMPORTED_MODULE_3__.Make.hidden = false;
        }
        //MakeModel
        if ($event.model.name == "MakeModel") {
            console.log('MakeModel', _model__WEBPACK_IMPORTED_MODULE_3__.Make.value);
            if (_model__WEBPACK_IMPORTED_MODULE_3__.Make.value = 'Others') {
                _model__WEBPACK_IMPORTED_MODULE_3__.MakeAnswer.hidden = false;
            }
            else {
                _model__WEBPACK_IMPORTED_MODULE_3__.Model.hidden = false;
            }
        }
        //MakeAnswer
        if ($event.model.name == "MakeAnswer") {
            console.log('MakeAnswer', _model__WEBPACK_IMPORTED_MODULE_3__.Make.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Model.hidden = false;
        }
        //Model
        if ($event.model.name == "ModelModel") {
            console.log('Model', _model__WEBPACK_IMPORTED_MODULE_3__.Model.value);
            if (_model__WEBPACK_IMPORTED_MODULE_3__.Model.value = 'Others') {
                _model__WEBPACK_IMPORTED_MODULE_3__.ModelAnswer.hidden = false;
            }
            else {
                _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe((app) => {
                    if (app == "Boiler") {
                        _model__WEBPACK_IMPORTED_MODULE_3__.BoilerType.hidden = false;
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.Location.hidden = false;
                    }
                }, (err) => { });
            }
        }
        //ModelAnswer
        if ($event.model.name == "ModelAnswer") {
            console.log('ModelAnswer', _model__WEBPACK_IMPORTED_MODULE_3__.ModelAnswer.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Location.hidden = false;
        }
        //Location
        if ($event.model.name == "Location") {
            console.log('Location ' + _model__WEBPACK_IMPORTED_MODULE_3__.Location.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe((res) => {
                console.log('Apptype subscribed in loction ' + res);
                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.value = '';
                if (res == 'Boiler') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Flue.options = [{
                            label: "Room Sealed",
                            value: "RoomSealed"
                        },
                        {
                            label: "Open Flue",
                            value: "OpenFlue"
                        }
                    ];
                }
                else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Flue.options = [{
                            label: "Room Sealed",
                            value: "RoomSealed"
                        },
                        {
                            label: "Open Flue",
                            value: "OpenFlue"
                        }, {
                            label: "Flueless",
                            value: "Flueless"
                        },
                    ];
                }
                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.hidden = false;
            }, (err) => {
            });
        }
        //Flue
        if ($event.model.name == "Flue") {
            console.log('Flue ' + _model__WEBPACK_IMPORTED_MODULE_3__.Flue.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Owned.hidden = false;
        }
        //Owned
        if ($event.model.name == "Owned") {
            console.log('Owned ', _model__WEBPACK_IMPORTED_MODULE_3__.Owned.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.hidden = false;
        }
        //Inspected
        if ($event.model.name == "Inspected") {
            _model__WEBPACK_IMPORTED_MODULE_3__.Zero.hidden = false;
            _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe((flu) => {
                console.log("flu subscribed in Inspected has value: " + flu);
                if (flu == "RoomSealed") {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Zero.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }];
                }
                else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.Zero.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }, { label: 'N/A', value: 'NA' }];
                }
            }, (err) => {
                console.log("flu subscribed in Inspected has error: " + err);
            });
        }
        //Zero
        if ($event.model.name == "Zero") {
            console.log('Zero ', $event.$event.detail.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe((Ins) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.Zero.valueChanges.subscribe((Ze) => {
                    _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe((App) => {
                        //$event.$event.detail.value
                        if (Ins == 'WorkedOn') {
                            console.log('worked ' + Ins + ' zero ' + Ze + ' App ' + App);
                            _model__WEBPACK_IMPORTED_MODULE_3__.OPU.hidden = false;
                            _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;
                            if (App == 'Boiler' && $event.$event.detail.value == 'Yes') {
                                _model__WEBPACK_IMPORTED_MODULE_3__.OPU.options = [{ label: 'KWH', value: 'KWH' }];
                            }
                            else {
                                _model__WEBPACK_IMPORTED_MODULE_3__.OPU.options = [{ label: 'KWH', value: 'KWH' }, { label: 'mBar', value: 'mBar' }];
                            }
                        }
                        else {
                            // visual
                            _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = false;
                            _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                            _model__WEBPACK_IMPORTED_MODULE_3__.OPU.hidden = true;
                            _model__WEBPACK_IMPORTED_MODULE_3__.GR.hidden = true;
                        }
                    }, (err) => { });
                }, (err) => { });
            }, (err) => {
            });
        }
        //OPU
        if ($event.model.name == "OPU") {
            _model__WEBPACK_IMPORTED_MODULE_3__.GR.hidden = false;
        }
        //GR
        if ($event.model.name == "GR") {
            _model__WEBPACK_IMPORTED_MODULE_3__.OPU.valueChanges.subscribe((opu) => {
                if (opu == 'KWH') {
                    if ($event.control._parent.value.GR > 70 || $event.control._parent.value.GR < 0) {
                        this.presentkwh();
                        _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                        this.formService.findModelById('OSD', this.formModel).hidden = false;
                    }
                }
                else {
                    if ($event.control._parent.value.GR > 17 || $event.control._parent.value.GR < 0) {
                        this.presentMbar('0', '17');
                        _model__WEBPACK_IMPORTED_MODULE_3__.OSD.hidden = true;
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.OSD.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                        this.formService.findModelById('OSD', this.formModel).hidden = false;
                    }
                }
            }, (err) => {
            });
        }
        //OSD Operation of Safety Device 
        if ($event.model.name == 'OSD') {
            _model__WEBPACK_IMPORTED_MODULE_3__.VS.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }, { label: 'N/A', value: 'NA' }];
            _model__WEBPACK_IMPORTED_MODULE_3__.VS.hidden = false;
        }
        // VS Ventilation Satisfaction
        if ($event.model.name == 'VS') {
            _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe((flu) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.VC.value = '';
                if (flu == 'Flueless') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.VC.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                }
                else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.VC.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }];
                }
            }, (err) => { });
            this.formService.findModelById('VC', this.formModel).hidden = false;
        }
        // VC Visual Condition
        if ($event.model.name == 'VC') {
            _model__WEBPACK_IMPORTED_MODULE_3__.AppType.valueChanges.subscribe((App) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.Flue.valueChanges.subscribe((splg) => {
                    console.log('vc ' + App + ' ' + splg);
                    if (App == 'Boiler' || App == 'Fire' || App == 'WaterHeater') {
                        if (splg == 'OpenFlue') {
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' },];
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false;
                            // SAFE2U.hidden=false;
                        }
                        else {
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                            _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false;
                        }
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value = '';
                        _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
                        _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.hidden = false;
                        ///SAFE2U.hidden=true;
                    }
                }, (err) => {
                });
            }, (err) => { });
        }
        //Spilage
        if ($event.model.name == 'Spilage') {
            console.log('Spillage ' + _model__WEBPACK_IMPORTED_MODULE_3__.Spilage.value);
            _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe((Ins) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.Zero.valueChanges.subscribe((Ze) => {
                    console.log("### listen Inspected and Zero " + Ins + ' ' + Ze);
                    if (Ins == 'WorkedOn') {
                        _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = false;
                        if (Ze == 'Yes') {
                            _model__WEBPACK_IMPORTED_MODULE_3__.CAR.value = '';
                            _model__WEBPACK_IMPORTED_MODULE_3__.CAR.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }];
                            this.formService.findModelById('CAR', this.formModel).hidden = false;
                            console.log('zero chnged to yes CAR set');
                        }
                        else {
                            _model__WEBPACK_IMPORTED_MODULE_3__.CAR.value = '';
                            console.log('zero chnged to no CAR set');
                            _model__WEBPACK_IMPORTED_MODULE_3__.CAR.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'Stripdown', value: 'Stripdown' }];
                            _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = false;
                        }
                        _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.CAR.hidden = true;
                        _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.value = '';
                        _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }];
                        _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = false;
                    }
                }, (err) => { });
            }, (err) => { });
        }
        //CAR Combustion Analuzr Reading
        if ($event.model.name == 'CAR') {
            _model__WEBPACK_IMPORTED_MODULE_3__.Inspected.valueChanges.subscribe((Ins) => {
                if (Ins == 'WorkedOn') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.HIRatio.hidden = false;
                    _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
                }
                else {
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
            }, (err) => {
            });
        }
        //HIRatio, HICO2, HICOPPM, LFRatio,LFCO2,LFCOPPM,SAFE2U
        //HI Ratio
        if ($event.model.name == 'HIRatio') {
            let decRegex = /^[0](\.\d{4})$/;
            if (decRegex.test($event.control._parent.value.HIRatio)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.hidden = false;
                this.decimalver = true;
            }
            else {
                // this.alert0001Validation();
                this.decimalver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICO2.hidden = true;
            }
        }
        //HICO2
        if ($event.model.name == 'HICO2') {
            let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
            if (decRegex.test($event.control._parent.value.HICO2)) {
                this.hunver = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.hidden = false;
            }
            else {
                //this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.HICOPPM.hidden = true;
            }
        }
        // HICOPPM,
        if ($event.model.name == 'HICOPPM') {
            let decRegex = /^[0-9]*$/;
            if (decRegex.test($event.control._parent.value.HICOPPM)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.hidden = false;
                this.hunver = true;
            }
            else {
                // this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFRatio.hidden = true;
            }
        }
        //LFRatio
        if ($event.model.name == 'LFRatio') {
            let decRegex = /^[0](\.\d{4})$/;
            if (decRegex.test($event.control._parent.value.LFRatio)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.hidden = false;
                this.decimalver = true;
            }
            else {
                //    this.alert0001Validation();
                this.decimalver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCO2.hidden = true;
            }
        }
        /// LFCO2,
        if ($event.model.name == 'LFCO2') {
            let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
            if (decRegex.test($event.control._parent.value.LFCO2)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.hidden = false;
                this.hunver = false;
            }
            else {
                // this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.LFCOPPM.hidden = true;
            }
        }
        /// LFCOPPM,
        if ($event.model.name == 'LFCOPPM') {
            let decRegex = /^[0-9]*$/;
            if (decRegex.test($event.control._parent.value.LFCOPPM)) {
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }];
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = false;
                this.hunver = true;
            }
            else {
                //this.alert100Validation();
                this.hunver = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.hidden = true;
            }
        }
        // SAFE2U,
        if ($event.model.name == 'SAFE2U') {
            this.formService.findModelById('DefectI', this.formModel).hidden = false;
        }
        //DefectI
        if ($event.model.name == 'DefectI') {
            _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe((saf) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value = '';
                if (saf == 'Yes') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.options = [{ label: 'Advisory', value: 'Advisory' }, { label: 'Not Applicable', value: 'NotApplicable' }];
                }
                else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.options = [{ label: 'At Risk', value: 'AtRisk' }, { label: 'Immediately Dangerous', value: 'ImmediatelyDangerous' }];
                }
                _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.hidden = false;
            }, (err) => {
            });
        }
        //GIUSP
        if ($event.model.name == 'GIUSP') {
            if (_model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value == 'Advisory' || _model__WEBPACK_IMPORTED_MODULE_3__.GIUSP.value == 'NotApplicable') {
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.hidden = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.value = '';
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = false;
                _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe((saf) => {
                    _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                    console.log('### saf 1 ' + saf);
                    if (saf == 'No') {
                        _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{ label: 'Turned off with permission, documeted and labled', value: 'Turnedoffwithpermissiondocumetedandlabled' }, { label: 'Customer refused permission', value: 'Customerrefusedpermission' }, { label: 'Capped off', value: 'Cappedoff' }, { label: 'Pass to ESP (customer refused to cap off)', value: 'PasstoESPcustomerrefusedtocapoff' }];
                    }
                    else {
                        _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{ label: 'Advised Customer', value: 'AdvisedCustomer' }, { label: 'Not Applicable', value: 'NotApplicable' }];
                    }
                }, (err) => {
                });
            }
            else {
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = true;
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                _model__WEBPACK_IMPORTED_MODULE_3__.WarnCert.hidden = false;
            }
        }
        //WarnCert
        if ($event.model.name == 'WarnCert') {
            _model__WEBPACK_IMPORTED_MODULE_3__.RAT.hidden = false;
            _model__WEBPACK_IMPORTED_MODULE_3__.SAFE2U.valueChanges.subscribe((saf) => {
                _model__WEBPACK_IMPORTED_MODULE_3__.RAT.value = '';
                console.log('### saf ' + saf);
                if (saf == 'No') {
                    _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{ label: 'Turned off with permission, documeted and labled', value: 'Turnedoffwithpermissiondocumetedandlabled' }, { label: 'Customer refused permission', value: 'Customerrefusedpermission' }, { label: 'Capped off', value: 'Cappedoff' }, { label: 'Pass to ESP (customer refused to cap off)', value: 'PasstoESPcustomerrefusedtocapoff' }];
                }
                else {
                    _model__WEBPACK_IMPORTED_MODULE_3__.RAT.options = [{ label: 'Advised Customer', value: 'AdvisedCustomer' }, { label: 'Not Applicable', value: 'NotApplicable' }];
                }
            }, (err) => {
            });
        }
        //Remedial Action Taken (RAT)
        if ($event.model.name == 'RAT') {
            this.SaveFlag = false;
            // this.formService.findModelById('RAT',this.formModel).hidden = false;  
            // this.SaveFlag=false
        }
    }
    InsertApplianceNew() {
        this.storage.set(this.data['JOBGUID'], JSON.stringify(this.formModel));
        this.apiGenerate.showToast('Changes Saved.', 'danger');
    }
};
TesteditPage.ctorParameters = () => [
    { type: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__.DynamicFormService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage }
];
TesteditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-testedit',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testedit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_testedit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TesteditPage);



/***/ }),

/***/ 60605:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/testedit/testedit.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title > Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=true>\n \n\n  <form  [formGroup]=\"formGroup\"  >\n\n    <dynamic-ionic-form    [group]=\"formGroup\"           \n                           [model]=\"formModel\"                         \n                           (change)=\"onChange($event)\">\n    </dynamic-ionic-form>\n\n</form>\n\n<p [hidden]=\"decimalver\" > value should be of format 0.0001</p>\n    <p [hidden]=\"hunver\" > value should be of format 100 </p>\n\n<ion-button color=\"secondary\" expand=\"block\" [hidden]=false (click)=\"InsertApplianceNew()\"> save </ion-button>\n\n\n</ion-content>\n");

/***/ }),

/***/ 79166:
/*!*********************************************!*\
  !*** ./src/app/testedit/testedit.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = "p {\n  color: red;\n  align-content: center;\n  width: -moz-max-content;\n  width: max-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0oiLCJmaWxlIjoidGVzdGVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_testedit_testedit_module_ts-es2015.js.map