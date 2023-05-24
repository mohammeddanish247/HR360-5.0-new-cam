"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_newappliance_newappliance_module_ts"],{

/***/ 10700:
/*!*************************************************************!*\
  !*** ./src/app/newappliance/newappliance-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewappliancePageRoutingModule": function() { return /* binding */ NewappliancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _newappliance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newappliance.page */ 64338);




const routes = [
    {
        path: '',
        component: _newappliance_page__WEBPACK_IMPORTED_MODULE_0__.NewappliancePage
    }
];
let NewappliancePageRoutingModule = class NewappliancePageRoutingModule {
};
NewappliancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewappliancePageRoutingModule);



/***/ }),

/***/ 40835:
/*!*****************************************************!*\
  !*** ./src/app/newappliance/newappliance.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewappliancePageModule": function() { return /* binding */ NewappliancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _newappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newappliance-routing.module */ 10700);
/* harmony import */ var _newappliance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newappliance.page */ 64338);







let NewappliancePageModule = class NewappliancePageModule {
};
NewappliancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewappliancePageRoutingModule
        ],
        declarations: [_newappliance_page__WEBPACK_IMPORTED_MODULE_1__.NewappliancePage]
    })
], NewappliancePageModule);



/***/ }),

/***/ 64338:
/*!***************************************************!*\
  !*** ./src/app/newappliance/newappliance.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewappliancePage": function() { return /* binding */ NewappliancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newappliance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newappliance.page.html */ 70350);
/* harmony import */ var _newappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newappliance.page.scss */ 30155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 12314);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-hashtable */ 31405);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modalpopup/modal-example.component */ 91025);














let NewappliancePage = class NewappliancePage {
    constructor(storage, router, route, apiGenerate, navCtrl, alertController, loadingCtrl, keyboard, httpClient, modalCtrl, platform) {
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
        this.platform = platform;
        //Flag 
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
        this.Appliance = [
            { name: 'Boiler' },
            { name: 'Cooker' },
            { name: 'Hob' },
            { name: 'Fire' },
            { name: 'Water Heater' },
        ];
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
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('###params item: ', this.data['JOBGUID']);
                this.apiGenerate.database.executeSql('select * from newappliance where JOBGUID=?', [this.data['JOBGUID']])
                    .then((res) => {
                    console.log('### select success ' + JSON.stringify(res));
                })
                    .catch((e) => {
                    console.log('#### ERRRROR' + JSON.stringify(e));
                });
            }
        });
    }
    ngOnInit() {
        this.apiGenerate.database.executeSql('SELECT DISTINCT make FROM makemodel', []).then(res => {
            this.makeList = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.makeList.push(res.rows.item(i)['make']);
            }
        });
        if (this.data['AppName'] && this.data['id'] != undefined) {
            this.editmode = false;
            this.apiGenerate.database.executeSql('select * from newappliance where SerialNo=?', [this.data['id']]).then(res => {
                console.log(res.rows.item(0)['LRatio']);
                console.log(res.rows.item(0)['HCOPPM']);
                console.log(res.rows.item(0)['HCO2Val']);
                console.log(res.rows.item(0)['LCOPPM']);
                console.log(res.rows.item(0)['LCO2Val']);
                this.ApplianceTypeSelect = res.rows.item(0)['AppType']; //done
                this.MakeSelect = res.rows.item(0)['Make'];
                if (this.MakeSelect == "Other") {
                    this.MakeAnswerSelect = res.rows.item(0)['MakeAnswer'];
                }
                this.ModelSelect = res.rows.item(0)['Model']; //done
                if (this.MakeSelect == "Other") {
                    this.ModelAnswerSelect = res.rows.item(0)['ModelAnswer'];
                }
                this.BoilerTypeSelect = res.rows.item(0)['BType']; //done
                this.LocationSelect = res.rows.item(0)['Loc']; //done
                this.FlueSelect = res.rows.item(0)['Flue']; //done
                this.OwnedSelect = res.rows.item(0)['OwnedBy']; //done
                this.InspectedSelect = res.rows.item(0)['Inspected']; //done
                this.GovenorSelect = res.rows.item(0)['ZeroGov'];
                this.OperatingSelect = res.rows.item(0)['OPU']; //done
                this.GasRateSelect = res.rows.item(0)['OptPrs'];
                this.SafetyDeviceSelect = res.rows.item(0)['OSD'];
                this.VentilationSatisfactorySelect = res.rows.item(0)['VS']; //done
                this.VisualConditionSelect = res.rows.item(0)['VCF']; //done
                this.ContinuitySpillageSelect = res.rows.item(0)['FOC'];
                this.AnalyserReading1Select = res.rows.item(0)['ComRead'];
                this.HighInitalRatioSelect = res.rows.item(0)['HRatio'];
                this.HighInitalCO2Select = res.rows.item(0)['HCO2Val'];
                this.HighInitalCOppmSelect = res.rows.item(0)['HCOPPM'];
                this.LowFinalRatioSelect = res.rows.item(0)['LRatio'];
                this.LowFinalCO2Select = res.rows.item(0)['LCO2Val'];
                this.LowFinalCOppmSelect = res.rows.item(0)['LCOPPM'];
                this.SafeToUseSelect = res.rows.item(0)['STU'];
                this.DefectIdentifiedSelect = res.rows.item(0)['DefId'];
                this.GIUSPSelect = res.rows.item(0)['GUISP'];
                this.WarningNoticeSelect = res.rows.item(0)['WarAdRec'];
                this.RemedialActionSelect = res.rows.item(0)['RemAc'];
                //this.SaveSelect=res.rows.item(0)['HaveData'];
            }).catch();
        }
        if (this.data["ProductName"] == "BOILER SERVICE+GAS CERTIFICATE(GSI)" || this.data["ProductName"] == "GAS CERTIFICATE ") {
            this.OwnedSelectList = ["Landlord", "Tenant",];
            console.log("pname" + this.data["ProductName"]);
        }
        else {
            if (this.data['IsClaim'] == 'False') {
                console.log("pname" + this.data["ProductName"]);
                this.OwnedSelectList = ["Homeowner"];
            }
            else {
                this.OwnedSelectList = ["Landlord", "Tenant", "Homeowner"];
            }
        }
    }
    gotoBottom() {
        setTimeout(() => {
            this.content.scrollToBottom(1000);
        }, 100);
    }
    getData() {
        /// this.data['JOBGUID']
        this.storage.get(this.data['JOBGUID']).then((res) => {
            //console.log('get dats   '+JSON.stringify(res)+'  '+res['AnalyserReading1Select']);
            if (res['ApplianceTypeSelect'] == '' || res['ApplianceTypeSelect'] == null || res['ApplianceTypeSelect'] == undefined) {
            }
            else {
                this.ApplianceTypeFlag = false;
                this.ApplianceTypeSelect = res['ApplianceTypeSelect'];
            }
            if (res['MakeSelect'] == '' || res['MakeSelect'] == null || res['MakeSelect'] == undefined) {
            }
            else {
                this.MakeSelect = res['MakeSelect'];
                this.MakeFlag = false;
            }
            if (res['MakeAnswerSelect'] == '' || res['MakeAnswerSelect'] == null || res['MakeAnswerSelect'] == undefined) {
            }
            else {
                console.log('## Make answer select ' + res['MakeAnswerSelect']);
                this.MakeAnswerSelect = res['MakeAnswerSelect'];
                this.MakeAnswerFlag = false;
            }
            if (res['ModelSelect'] == '' || res['ModelSelect'] == null || res['ModelSelect'] == undefined) {
            }
            else {
                this.ModelSelect = res['ModelSelect'];
                this.ModelFlag = false;
            }
            if (res['ModelAnswerSelect'] == '' || res['ModelAnswerSelect'] == null || res['ModelAnswerSelect'] == undefined) {
            }
            else {
                console.log('## Model answer select ' + res['MakeAnswerSelect']);
                this.ModelAnswerSelect = res['ModelAnswerSelect'];
                this.ModelAnswerFlag = false;
            }
            if (res['BoilerTypeSelect'] == '' || res['BoilerTypeSelect'] == null || res['BoilerTypeSelect'] == undefined) {
            }
            else {
                this.BoilerTypeSelect = res['BoilerTypeSelect'];
                this.BoilerTypeFlag = false;
            }
            if (res['LocationSelect'] == '' || res['LocationSelect'] == null || res['LocationSelect'] == undefined) {
            }
            else {
                console.log('## Location select ' + res['LocationSelect']);
                this.LocationSelect = res['LocationSelect'];
                this.LocationFlag = false;
            }
            if (res['FlueSelect'] == '' || res['FlueSelect'] == null || res['FlueSelect'] == undefined) {
            }
            else {
                this.FlueSelect = res['FlueSelect'];
                this.FlueFlag = false;
            }
            if (res['OwnedSelect'] == '' || res['OwnedSelect'] == null || res['OwnedSelect'] == undefined) {
            }
            else {
                this.OwnedSelect = res['OwnedSelect'];
                this.OwnedFlag = false;
            }
            if (res['InspectedSelect'] == '' || res['InspectedSelect'] == null || res['InspectedSelect'] == undefined) {
                console.log('Outside Inspected ' + this.InspectedSelect + ' ' + res['InspectedSelect']);
            }
            else {
                this.InspectedSelect = res['InspectedSelect'];
                console.log('Inside Inspected ' + this.InspectedSelect);
                // this.InspectedFlag = false;
            }
            if (res['GovenorSelect'] == '' || res['GovenorSelect'] == null || res['GovenorSelect'] == undefined) {
            }
            else {
                this.GovenorSelect = res['GovenorSelect'];
                this.GovenorFlag = false;
            }
            if (res['OperatingSelect'] == '' || res['OperatingSelect'] == null || res['OperatingSelect'] == undefined) {
            }
            else {
                this.OperatingSelect = res['OperatingSelect'];
                this.OperatingFlag = false;
            }
            if (res['GasRateSelect'] == '' || res['GasRateSelect'] == null || res['GasRateSelect'] == undefined) {
            }
            else {
                this.GasRateSelect = res['GasRateSelect'];
                this.GasRateFlag = false;
            }
            if (res['SafetyDeviceSelect'] == '' || res['SafetyDeviceSelect'] == null || res['SafetyDeviceSelect'] == undefined) {
            }
            else {
                this.SafetyDeviceSelect = res['SafetyDeviceSelect'];
                this.SafetyDeviceFlag = false;
            }
            if (res['VentilationSatisfactorySelect'] == '' || res['VentilationSatisfactorySelect'] == null || res['VentilationSatisfactorySelect'] == undefined) {
            }
            else {
                this.VentilationSatisfactorySelect = res['VentilationSatisfactorySelect'];
                this.VentilationSatisfactoryFlag = false;
            }
            if (res['VisualConditionSelect'] == '' || res['VisualConditionSelect'] == null || res['VisualConditionSelect'] == undefined) {
            }
            else {
                this.VisualConditionSelect = res['VisualConditionSelect'];
                this.VisualConditionFlag = false;
            }
            if (res['ContinuitySpillageSelect'] == '' || res['ContinuitySpillageSelect'] == null || res['ContinuitySpillageSelect'] == undefined) {
            }
            else {
                this.ContinuitySpillageSelect = res['ContinuitySpillageSelect'];
                this.ContinuitySpillageFlag = false;
            }
            if (res['AnalyserReading1Select'] == '' || res['AnalyserReading1Select'] == null || res['AnalyserReading1Select'] == undefined) {
            }
            else {
                this.AnalyserReading1Select = res['AnalyserReading1Select'];
                this.AnalyserReading1Flag = false;
            }
            if (res['HighInitalRatioSelect'] == '' || res['HighInitalRatioSelect'] == null || res['HighInitalRatioSelect'] == undefined) {
            }
            else {
                this.HighInitalRatioSelect = res['HighInitalRatioSelect'];
                this.HighInitalRatioFlag = false;
            }
            if (res['HighInitalCO2Select'] == '' || res['HighInitalCO2Select'] == null || res['HighInitalCO2Select'] == undefined) {
            }
            else {
                this.HighInitalCO2Select = res['HighInitalCO2Select'];
                this.HighInitalCO2Flag = false;
            }
            if (res['HighInitalCOppmSelect'] == '' || res['HighInitalCOppmSelect'] == null || res['HighInitalCOppmSelect'] == undefined) {
            }
            else {
                this.HighInitalCOppmSelect = res['HighInitalCOppmSelect'];
                this.HighInitalCOppmFlag = false;
            }
            if (res['LowFinalRatioSelect'] == '' || res['LowFinalRatioSelect'] == null || res['LowFinalRatioSelect'] == undefined) {
            }
            else {
                this.LowFinalRatioSelect = res['LowFinalRatioSelect'];
                this.LowFinalRatioFlag = false;
            }
            if (res['LowFinalCO2Select'] == '' || res['LowFinalCO2Select'] == null || res['LowFinalCO2Select'] == undefined) {
            }
            else {
                this.LowFinalCO2Select = res['LowFinalCO2Select'];
                this.LowFinalCO2Flag = false;
            }
            if (res['LowFinalCOppmSelect'] == '' || res['LowFinalCOppmSelect'] == null || res['LowFinalCOppmSelect'] == undefined) {
            }
            else {
                this.LowFinalCOppmSelect = res['LowFinalCOppmSelect'];
                this.LowFinalCOppmFlag = false;
            }
            if (res['SafeToUseSelect'] == '' || res['SafeToUseSelect'] == null || res['SafeToUseSelect'] == undefined) {
            }
            else {
                this.SafeToUseSelect = res['SafeToUseSelect'];
                this.SafeToUseFlag = false;
            }
            if (res['DefectIdentifiedSelect'] == '' || res['DefectIdentifiedSelect'] == null || res['DefectIdentifiedSelect'] == undefined) {
            }
            else {
                this.DefectIdentifiedSelect = res['DefectIdentifiedSelect'];
                this.DefectIdentifiedFlag = false;
            }
            if (res['GIUSPSelect'] == '' || res['GIUSPSelect'] == null || res['GIUSPSelect'] == undefined) {
            }
            else {
                this.GIUSPSelect = res['GIUSPSelect'];
                this.GIUSPFlag = false;
            }
            if (res['WarningNoticeSelect'] == '' || res['WarningNoticeSelect'] == null || res['WarningNoticeSelect'] == undefined) {
            }
            else {
                this.WarningNoticeSelect = res['WarningNoticeSelect'];
                this.WarningNoticeFlag = false;
            }
            if (res['RemedialActionSelect'] == '' || res['RemedialActionSelect'] == null || res['RemedialActionSelect'] == undefined) {
            }
            else {
                this.RemedialActionSelect = res['RemedialActionSelect'];
                this.RemedialActionFlag = false;
            }
        }, (err) => {
            console.log('ERR get' + JSON.stringify(err));
        });
    }
    ionViewWillLeave() {
        console.log('ion view leave' + this.InspectedSelect);
        const AppliancesNewDetailsList = {
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
    clearFilledDependency(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29) {
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
    ApplianceTypeClick() {
        console.log('##### modelngggg ' + this.ApplianceTypeSelect);
        this.MakeFlag = false;
        if (this.ApplianceTypeSelect != 'Boiler') {
            this.BoilerTypeFlag = true;
        }
        if (this.ApplianceTypeSelect == 'Boiler') {
            this.Fluelist = ['Open Flued', 'Room Sealed'];
        }
        else {
            this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
        }
    }
    MakeChange() {
        this.modelList = [];
        this.apiGenerate.database.executeSql('SELECT DISTINCT model FROM makemodel where make = ?', [this.MakeSelect]).then(res => {
            for (var i = 0; i < res.rows.length; i++) {
                this.modelList.push(res.rows.item(i)['model']);
            }
        });
        if (this.MakeSelect == 'other') {
            this.MakeAnswerFlag = false;
            this.ModelFlag = true;
        }
        else {
            // this.firstSelect(this.MakeSelect) //makeselect is name of selected brand
            this.MakeAnswerFlag = true;
            this.ModelAnswerFlag = true;
            this.ModelFlag = false;
            //this.modelList.length=0;
            this.list = this.apiGenerate.makeModelMap.get(this.MakeSelect);
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    AnswerMakeDone() {
        this.MakeSelect = this.MakeAnswerSelect;
        this.ModelAnswerFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    ModelChange() {
        if (this.ModelSelect == 'other') {
            this.ModelAnswerFlag = false;
        }
        else {
            if (this.ApplianceTypeSelect == 'Boiler') {
                this.ModelAnswerFlag = true;
                this.BoilerTypeFlag = false;
            }
            else {
                this.ModelAnswerFlag = true;
                this.LocationFlag = false;
            }
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    AnswerModelDone() {
        this.ModelSelect = this.ModelAnswerSelect;
        this.keyboard.hide();
        if (this.ApplianceTypeSelect == 'Boiler') {
            this.BoilerTypeFlag = false;
        }
        else {
            this.BoilerTypeFlag = true;
            this.LocationFlag = false;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    BoilerTypeClick() {
        this.BoilerTypeFlag = false;
        this.LocationFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    LocationClick() {
        this.FlueFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    FlueClick() {
        this.OwnedFlag = false;
        this.gotoBottom();
        if (this.FlueSelect == 'Room Sealed') {
            this.governlist = ['Yes', 'No'];
        }
        else {
            this.governlist = ['Yes', 'No', 'N/A'];
        }
        if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Boiler') {
            this.continuitySpillagelist = ['Pass', 'Fail'];
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Fire') {
            this.continuitySpillagelist = ['Pass', 'Fail'];
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Water Heater') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Hob') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Cooker') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
        }
        else {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
        }
    }
    OwnedClick() {
        this.InspectedFlag = false;
        this.gotoBottom();
    }
    InspectedClick() {
        this.clickcounter = this.clickcounter + 1;
        if (this.InspectedSelect == 'WorkedOn') {
            this.GovenorFlag = false;
            this.VentilationSatisfactoryFlag = true;
        }
        else {
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
            setTimeout(() => {
                this.OperatingFlag = true;
                this.GasRateFlag = true;
                this.SafetyDeviceFlag = true;
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
                this.SaveFlag = true;
            }, 300);
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    GovenorClick() {
        if (this.InspectedSelect == 'Visual') {
            this.VentilationSatisfactoryFlag = false;
        }
        else {
            this.OperatingFlag = false;
        }
        if (this.GovenorSelect == 'Yes') {
            this.operatinglist = ['KWH'];
        }
        else {
            this.operatinglist = ['KWH', 'MBAR'];
        }
        // }
        this.gotoBottom();
        // will scroll to bottom
    }
    OperatingClick() {
        this.GasRateFlag = false;
        // }
        this.gotoBottom();
        // will scroll to bottom
    }
    gasRateClick() {
        if (this.OperatingSelect == 'KWH') {
            if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                this.presentkwh();
                this.SafetyDeviceFlag = true;
            }
            else {
                this.SafetyDeviceFlag = false;
            }
        }
        else {
            if (Number.parseInt(this.GasRateSelect) > 17 || Number.parseInt(this.GasRateSelect) < 0) {
                this.presentMbar('0', '17');
                this.SafetyDeviceFlag = true;
            }
            else {
                this.SafetyDeviceFlag = false;
            }
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    presentMbar(low, high) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alertFlag == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'Mbar should be between' + low + ' & ' + high,
                    backdropDismiss: false,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    presentkwh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alertFlag == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'Kw/h should be between 0 & 70',
                    backdropDismiss: false,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    safetydeviceClick() {
        this.VentilationSatisfactoryFlag = false;
        this.gotoBottom();
        // will scroll to bottom 
    }
    VentilationSatisfactoryClick() {
        this.VisualConditionFlag = false;
        this.gotoBottom();
        // will scroll to bottom 
        if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
            this.analyserlist = ['Pass', 'Fail'];
        }
        else {
            this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
        }
    }
    VisualConditionClick() {
        if (this.FlueSelect == 'Open Flued') {
            this.ContinuitySpillageFlag = false;
        }
        else {
            if (this.InspectedSelect == 'Visual') {
                this.AnalyserReading1Flag = true;
                this.SafeToUseFlag = false;
            }
            else {
                this.AnalyserReading1Flag = false;
            }
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    continuitySpillageClick() {
        this.gotoBottom();
        // will scroll to bottom
        if (this.InspectedSelect == 'Visual') {
            this.AnalyserReading1Flag = true;
            this.SafeToUseFlag = false;
        }
        else {
            this.AnalyserReading1Flag = false;
        }
    }
    analyserReadingClick() {
        if (this.InspectedSelect == 'WorkedOn' && this.AnalyserReading1Select != 'Stripdown') {
            this.HighInitalRatioFlag = false;
        }
        else {
            this.SafeToUseFlag = false;
            this.HighInitalRatioFlag = true;
            this.HighInitalCO2Flag = true;
            this.HighInitalCOppmFlag = true;
            this.LowFinalRatioFlag = true;
            this.LowFinalCO2Flag = true;
            this.LowFinalCOppmFlag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    HighInitalRatioClick() {
        let decRegex = /^(0)+(.[0-9]{1,4})?$/; ///^(0)+0\.[0-9]{3}$/ ;
        console.log(decRegex.test(this.HighInitalRatioSelect));
        console.log(this.HighInitalRatioSelect);
        if (decRegex.test(this.HighInitalRatioSelect)) {
            this.HighInitalCO2Flag = false;
            this.gotoBottom();
            // will scroll to bottom
        }
        else {
            this.presentValidationHighInitalRatioClick();
            this.HighInitalCO2Flag = true;
            this.gotoBottom();
            // will scroll to bottom
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    presentValidationHighInitalRatioClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alertFlag == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'value should be in range from 0.0000 to 0.9999 and must be fixed to four decimal points ',
                    backdropDismiss: false,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    HighInitalCO2Click() {
        let decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;
        if (decRegex.test(this.HighInitalCO2Select)) {
            this.HighInitalCOppmFlag = false;
        }
        else {
            this.presentValidationHighInitalCO2Click();
            this.HighInitalCOppmFlag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    presentValidationHighInitalCO2Click() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alertFlag == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'value should be of format 0 to 100 with one decimal point',
                    backdropDismiss: false,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    HighInitalCOppmClick() {
        // let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
        let decRegex = /^[0-9]*$/;
        if (decRegex.test(this.HighInitalCOppmSelect)) {
            this.LowFinalRatioFlag = false;
        }
        else {
            this.presentValidationCOppm();
            this.LowFinalRatioFlag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    LowFinalRatioClick() {
        let decRegex = /^(0)+(.[0-9]{1,4})?$/;
        if (decRegex.test(this.LowFinalRatioSelect)) {
            this.LowFinalCO2Flag = false;
        }
        else {
            this.presentValidationHighInitalRatioClick();
            this.LowFinalCO2Flag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    LowFinalCO2Click() {
        //let decRegex = /^[0](\.\d{4})$/;
        let decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;
        if (decRegex.test(this.LowFinalCO2Select)) {
            this.LowFinalCOppmFlag = false;
        }
        else {
            this.presentValidationHighInitalCO2Click();
            this.LowFinalCOppmFlag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    LowFinalCOppmClick() {
        let decRegex = /^[0-9]*$/;
        if (decRegex.test(this.LowFinalCOppmSelect)) {
            this.SafeToUseFlag = false;
        }
        else {
            this.presentValidationCOppm();
            this.SafeToUseFlag = true;
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    presentValidationCOppm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alertFlag == true) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'value should be a whole number.',
                    backdropDismiss: false,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    SafeToUseClick() {
        this.DefectIdentifiedFlag = false;
        if (this.SafeToUseSelect == 'Yes') {
            this.giusplist = ['Advisory', 'Not Applicable'];
        }
        else {
            this.giusplist = ['At Risk', 'Immediately Dangerous'];
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    DefectIdentifiedAns() {
        this.GIUSPFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    GIUSPClick() {
        // this.save = false;
        if (this.GIUSPSelect == 'Advisory') {
            this.RemedialActionFlag = false;
            this.WarningNoticeFlag = true;
            this.advicelist = ['Advised Customer', 'NA'];
        }
        else if (this.GIUSPSelect == 'Not Applicable') {
            this.RemedialActionFlag = false;
            this.WarningNoticeFlag = true;
            this.advicelist = ['Advised Customer', 'NA'];
        }
        else if (this.GIUSPSelect == 'At Risk') {
            this.WarningNoticeFlag = false;
            this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Pass to ESP (customer refused to cap off)'];
        }
        else if (this.GIUSPSelect == 'Immediately Dangerous') {
            this.WarningNoticeFlag = false;
            this.advicelist = ['Capped off', 'Pass to ESP (customer refused to cap off)'];
        }
        this.gotoBottom();
        // will scroll to bottom
    }
    WarningNoticeAns() {
        this.RemedialActionFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    RemedialActionTakenClick() {
        this.SaveFlag = false;
        this.gotoBottom();
        // will scroll to bottom
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                backdropDismiss: true
            }).then(a => {
                a.present().then(() => {
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            this.loadingCtrl.dismiss();
        });
    }
    // EditApplianceNew(){
    //   this.apiGenerate.database.executeSql('update newappliance set AppType=?  , Make=?  , MakeAnswer=? , Model=?  , ModelAnswer=? , BType=?  , Loc=?  , Flue=?  , OwnedBy=?  , Inspected=?  , ZeroGov=?  , OPU=?  , OptPrs=?  , OSD=?  , VS=?  , VCF=?  , FOC=?  , ComRead=?  , HRatio=?  , HCO2Val=?  , HCOPPM=?  , LRatio=?  , LCO2Val=?  , LCOPPM=?  , STU=?  , DefId=? , GIUSP=?  , WarAdRec=? , RemAc=? where SerialNo = ?',
    //   [this.ApplianceTypeSelect,this.MakeSelect,this.MakeAnswerSelect,this.ModelSelect,this.ModelAnswerSelect,this.BoilerTypeSelect,this.LocationSelect,this.FlueSelect,this.OwnedSelect,this.InspectedSelect,this.GovenorSelect,this.OperatingSelect,this.GasRateSelect,this.SafetyDeviceSelect,this.VentilationSatisfactorySelect,
    //                                                  this.VisualConditionSelect,this.ContinuitySpillageSelect,this.AnalyserReading1Select,this.HighInitalRatioSelect,this.HighInitalCO2Select,this.HighInitalCOppmSelect,this.LowFinalRatioSelect,this.LowFinalCO2Select,this.LowFinalCOppmSelect,this.SafeToUseSelect,this.DefectIdentifiedSelect,this.GIUSPSelect,this.WarningNoticeSelect,this.RemedialActionSelect,this.data['id']]).then(succ=>{
    //    this.router.navigate(['details']);
    //    this.apiGenerate.showToast('Success! Appliance has been updated successfully','success');
    //   });
    // }
    InsertApplianceNew() {
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
        const AppliancesNewDetailsList = {
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
        }
        //this.storage.set(this.data['JOBGUID'],AppliancesNewDetailsList);
        console.log(AppliancesNewDetailsList);
        this.apiGenerate.database.executeSql('insert into newappliance  (HaveData,AppType,Make,MakeAnswer,Model,ModelAnswer,BType,Loc,Flue,OwnedBy,Inspected,ZeroGov,OPU,OptPrs,OSD,VS,VCF,FOC,ComRead,HRatio,HCO2Val,HCOPPM,LRatio,LCO2Val,LCOPPM,STU, DefId,GIUSP,WarAdRec,RemAc,IsDelete,JOBGUID )  values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [AppliancesNewDetailsList.havedata,
            AppliancesNewDetailsList.ApplianceTypeSelect,
            AppliancesNewDetailsList.Make,
            AppliancesNewDetailsList.MakeAnswer,
            AppliancesNewDetailsList.Model,
            AppliancesNewDetailsList.ModelAnswer,
            AppliancesNewDetailsList.BoilerTypeSelect,
            AppliancesNewDetailsList.Location,
            AppliancesNewDetailsList.FlueSelect,
            AppliancesNewDetailsList.OwnedSelect,
            AppliancesNewDetailsList.InspectedSelect,
            AppliancesNewDetailsList.GovenorSelect,
            AppliancesNewDetailsList.OperatingSelect,
            AppliancesNewDetailsList.GasRate,
            AppliancesNewDetailsList.safetydeviceSelect,
            AppliancesNewDetailsList.VentilationSatisfactorySelect,
            AppliancesNewDetailsList.VisualConditionSelect,
            AppliancesNewDetailsList.ContinuitySpillageSelect,
            AppliancesNewDetailsList.AnalyserReading1Select,
            AppliancesNewDetailsList.HighInitalRatioAns,
            AppliancesNewDetailsList.HighInitalCO2Ans,
            AppliancesNewDetailsList.HighInitalCOppmAns,
            AppliancesNewDetailsList.LowFinalRatioAns,
            AppliancesNewDetailsList.LowFinalCO2Ans,
            AppliancesNewDetailsList.LowFinalCOppmAns,
            AppliancesNewDetailsList.SafeToUseSelect,
            AppliancesNewDetailsList.DefectIdentifiedAnswer,
            AppliancesNewDetailsList.GIUSPSelect,
            AppliancesNewDetailsList.WarningNoticeReferenceAnswer,
            AppliancesNewDetailsList.RemedialActionSelect,
            '',
            this.data['JOBGUID'],
        ]).then((res) => {
            console.log('Insert newappliance success' + JSON.stringify(res));
            this.apiGenerate.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ", ['newappliance', this.data['JOBGUID']]).then((res) => {
                console.log('#### new appliance success ' + JSON.stringify(res));
                this.router.navigate(['createcertificate']);
                this.storage.set(this.data['JOBGUID'], { '': '' }); // clean local 
            }).catch((e) => {
            });
        }).catch((e) => {
            this.apiGenerate.showToast('Error Save Appliance in device' + JSON.stringify(e), 'danger');
        });
    }
    // makeModel() {
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
    openMakeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__.ModalExampleComponent,
                componentProps: {
                    data: this.makeList,
                    msg: "Make"
                }
            });
            modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                this.MakeSelect = data;
                console.log("make name is " + this.MakeSelect);
                this.MakeChange();
            }
        });
    }
    openModalModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_4__.ModalExampleComponent,
                componentProps: {
                    data: this.modelList,
                    msg: "Model"
                }
            });
            modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                this.ModelSelect = data;
                console.log("model name is " + this.MakeSelect);
                this.ModelChange();
            }
        });
    }
};
NewappliancePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
NewappliancePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { static: true },] }],
    myContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent },] }],
    targetx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['theTarget',] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll,] }]
};
NewappliancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-newappliance',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newappliance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewappliancePage);



/***/ }),

/***/ 70350:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/newappliance/newappliance.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <ion-item [hidden]=\"ApplianceTypeFlag\">\n    <ion-label>Appliance Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ApplianceTypeSelect\" (ionChange)=\"ApplianceTypeClick()\">\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Appliance\">{{item.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"MakeFlag\" (click)=\"openMakeModal()\">\n    <ion-label>Make</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\">{{MakeSelect}}</ion-text>\n  </ion-item>\n\n  \n  <ion-item [hidden]=\"MakeAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"MakeAnswerSelect\" placeholder=\"Enter the Manufacturer Name\"\n      (keyup.enter)=\"AnswerMakeDone()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelFlag\" (click)=\"openModalModal()\">\n    <ion-label>Model</ion-label>\n    <ion-text class=\"ion-text-right\" slot=\"end\">{{ModelSelect}}</ion-text>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"ModelAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"ModelAnswerSelect\" placeholder=\"Enter the Model Name\"\n      (keyup.enter)=\"AnswerModelDone()\"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"BoilerTypeFlag\">\n    <ion-label>Boiler Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"BoilerTypeSelect\" (ionChange)=\"BoilerTypeClick()\">\n      <ion-select-option value=\"HeatOnly\">Heat Only</ion-select-option>\n      <ion-select-option value=\"System\">System</ion-select-option>\n      <ion-select-option value=\"Combi\">Combi</ion-select-option>\n      <ion-select-option value=\"BackBoiler\">Back Boiler</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"LocationFlag\">\n    <ion-label>Location</ion-label>\n    <ion-select\n     [(ngModel)]=\"LocationSelect\" (ionChange)=\"LocationClick()\">\n      <ion-select-option value=\"AiringCupboard/Compartment\">Airing Cupboard/Compartment</ion-select-option>\n      <ion-select-option value=\"Bathroom\">Bathroom</ion-select-option>\n      <ion-select-option value=\"Bedroom\">Bedroom</ion-select-option>\n      <ion-select-option value=\"Conservatory\">Conservatory</ion-select-option>\n      <ion-select-option value=\"DiningRoom\">Dining Room</ion-select-option>\n      <ion-select-option value=\"Garage\">Garage</ion-select-option>\n      <ion-select-option value=\"Hall\">Hall</ion-select-option>\n      <ion-select-option value=\"Kitchen\">Kitchen</ion-select-option>\n      <ion-select-option value=\"Landing\">Landing</ion-select-option>\n      <ion-select-option value=\"LivingRoom\">Living Room</ion-select-option>\n      <ion-select-option value=\"Loft\">Loft</ion-select-option>\n      <ion-select-option value=\"Lounge\">Lounge</ion-select-option>\n      <ion-select-option value=\"Utility\">Utility</ion-select-option>\n      <ion-select-option value=\"Cellar\">Cellar</ion-select-option>\n      <ion-select-option value=\"WC\">WC</ion-select-option>\n    </ion-select> \n  </ion-item>\n\n  <ion-item [hidden]=\"FlueFlag\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueSelect\" (ionChange)=\"FlueClick()\">\n      <div *ngFor='let flue of Fluelist'>\n        <ion-select-option value={{flue}}>{{flue}}</ion-select-option>\n      </div>\n      \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"Flueless\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueLessSelect\" (ionChange)=\"FlueLessClick()\">\n      <ion-select-option value=\"OpenFlued\">Open Flued</ion-select-option>\n      <ion-select-option value=\"RoomSealed\">Room Sealed</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item [hidden]=\"OwnedFlag\">\n    <ion-label>Owned by</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OwnedSelect\" (ionChange)=\"OwnedClick()\">\n      <ion-select-option *ngFor=\"let list of OwnedSelectList\">{{list}}</ion-select-option>\n      <!-- <ion-select-option value=\"Landlord\">Landlord</ion-select-option>\n      <ion-select-option value=\"Tenant\">Tenant</ion-select-option>\n      <ion-select-option value=\"Homeowner\">Homeowner</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"InspectedFlag\">\n    <ion-label>Inspected</ion-label>\n\n    <!-- <select name=\"Inspected\" id=\"Inspected\" [(ngModel)]=\"InspectedSelect\">\n      <option value=\"WorkedOn\">Worked On</option>\n      <option value=\"Visual\">Visual</option>\n    </select> -->\n\n    <ion-select interface=\"popover\" [(ngModel)]=\"InspectedSelect\" (ionChange)=\"InspectedClick()\">\n      <ion-select-option value={{InspectedSelect}} selected  disabled > {{InspectedSelect}} </ion-select-option>\n      <ion-select-option value=\"WorkedOn\">Worked On</ion-select-option>\n      <ion-select-option value=\"Visual\">Visual</ion-select-option>\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item [hidden]=\"GovenorFlag\">\n    <ion-label>Zero Govenor</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GovenorSelect\" (ionChange)=\"GovenorClick()\">\n      <ion-select-option value={{GovenorSelect}} selected  disabled > {{GovenorSelect}} </ion-select-option>\n      <div *ngFor='let govrn of governlist'> \n      <ion-select-option value={{govrn}}>{{govrn}}</ion-select-option>\n      </div>     \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"OperatingFlag\">\n    <!-- <ion-label>Operating pressure units</ion-label>Operating pressure/ Gas Rate -->\n    <ion-label>Operating pressure/ Gas Rate</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OperatingSelect\" (ionChange)=\"OperatingClick()\">\n      <div *ngFor='let operating of operatinglist'>     \n         <ion-select-option value={{operating}}>{{operating}}</ion-select-option>\n      </div>\n\n    </ion-select>\n  </ion-item>\n\n \n\n  <ion-item [hidden]=\"GasRateFlag\">\n    <ion-label>Gas Rate/Burner pressure</ion-label>\n    <ion-input placeholder=\"tap here to enter answer\" type=\"number\" [(ngModel)]=\"GasRateSelect\"\n      (ionChange)=\"gasRateClick()\"></ion-input>\n  </ion-item>\n\n  \n\n  <ion-item [hidden]=\"SafetyDeviceFlag\">\n    <ion-label>Operation of safety device(s)</ion-label>\n\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafetyDeviceSelect\" (ionChange)=\"safetydeviceClick()\">\n      <ion-select-option value={{SafetyDeviceSelect}} selected  disabled > {{SafetyDeviceSelect}} </ion-select-option>\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VentilationSatisfactoryFlag\">\n    <ion-label>Ventilation satisfactory</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VentilationSatisfactorySelect\"\n      (ionChange)=\"VentilationSatisfactoryClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"VisualConditionFlag\">\n    <ion-label>Visual condition of flue and termination</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VisualConditionSelect\" (ionChange)=\"VisualConditionClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ContinuitySpillageFlag\">\n    <ion-label>Flue flow continuity + Spillage</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ContinuitySpillageSelect\" (ionChange)=\"continuitySpillageClick()\">\n      <ion-select-option value={{continuitySpillageSelect}} selected  disabled > {{continuitySpillageSelect}} </ion-select-option>\n     <div *ngFor='let continuityspillage of continuitySpillagelist'>\n      <ion-select-option value={{continuityspillage}}>{{continuityspillage}}</ion-select-option>\n     </div>              \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"AnalyserReading1Flag\">\n    <ion-label>Combustion analyser reading</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"AnalyserReading1Select\" (ionChange)=\"analyserReadingClick()\">\n      <ion-select-option value={{AnalyserReading1Select}} selected  disabled > {{AnalyserReading1Select}} </ion-select-option>\n      <div *ngFor='let  analyser of analyserlist'> \n        <ion-select-option value={{analyser}}>{{analyser}}</ion-select-option>    \n      </div>   \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalRatioFlag\">\n    <ion-label position=\"floating\">High / Inital Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.0000 to 0.9999\" type=\"number\" [(ngModel)]=\"HighInitalRatioSelect\"\n      (ionChange)=\"HighInitalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCO2Flag\">\n    <ion-label position=\"floating\">High/ Inital CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCO2Select\"\n      (ionChange)=\"HighInitalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCOppmFlag\">\n    <ion-label position=\"floating\">High/ Inital CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCOppmSelect\"\n      (ionChange)=\"HighInitalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalRatioFlag\">\n    <ion-label position=\"floating\">Low/ Final Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.0000 to 0.9999\" type=\"number\" [(ngModel)]=\"LowFinalRatioSelect\"\n      (ionChange)=\"LowFinalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCO2Flag\">\n    <ion-label position=\"floating\">Low/ Final CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCO2Select\"\n      (ionChange)=\"LowFinalCO2Click()\"></ion-input>\n  </ion-item>\n  \n\n  <ion-item [hidden]=\"LowFinalCOppmFlag\">\n    <ion-label position=\"floating\">Low/ Final CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCOppmSelect\"\n      (ionChange)=\"LowFinalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"SafeToUseFlag\">\n    <ion-label>Safe To Use</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafeToUseSelect\" (ionChange)=\"SafeToUseClick()\">\n      <ion-select-option value=\"Yes\">Yes</ion-select-option>\n      <ion-select-option value=\"No\">No</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"DefectIdentifiedFlag\">\n    <ion-label position=\"floating\">Defect(s) identified</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"DefectIdentifiedSelect\" placeholder=\"Write here the answer\"\n      (ionChange)=\"DefectIdentifiedAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"GIUSPFlag\">\n    <ion-label>GIUSP  </ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GIUSPSelect\" (ionChange)=\"GIUSPClick()\">\n      <div *ngFor='let giusp of giusplist'>\n        <ion-select-option value={{giusp}}> {{giusp}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n \n\n  \n\n  <ion-item [hidden]=\"WarningNoticeFlag\">\n    <ion-label position=\"floating\">Warning Notice Reference No</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"WarningNoticeSelect\" placeholder=\"Write here the answer\"\n      (ionChange)=\"WarningNoticeAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"RemedialActionFlag\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n     <div *ngFor='let advise of advicelist'>\n      <ion-select-option value={{advise}}>{{advise}}</ion-select-option>\n     </div> \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"RemedialAction2\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value=\"Turnedoffwithpermission\">Turned off with permission, documeted and labled\n      </ion-select-option>\n      <ion-select-option value=\"Customerrefusedpermission\">Customer refused permission</ion-select-option>\n      <ion-select-option value=\"Cappedoff\">Capped off</ion-select-option>\n      <ion-select-option value=\"PasstoESP\">Pass to ESP (customer refused to cap off)</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div style=\"margin-top: 5%;\">\n    \n  </div>\n\n  <!-- <div style=\"margin-top: 5%;\">\n    <ion-button [hidden]=\"editmode\" color=\"secondary\" expand=\"full\" (click)=\"EditApplianceNew()\">UPDATE</ion-button>\n  </div> -->\n  \n</ion-content>\n\n<ion-footer>\n  <ion-button [disabled]=\"SaveFlag\" color=\"secondary\" expand=\"full\" (click)=\"InsertApplianceNew()\">SAVE</ion-button>\n  <!-- <ion-button [hidden]=\"true\" color=\"secondary\" expand=\"block\" (click)=\"getData()\">GET</ion-button> -->\n</ion-footer>\n<!-- <form [formGroup]=\"AddApplianceForm\" (ngSubmit)=\"gotologinformsubmit()\"> </form>  -->");

/***/ }),

/***/ 30155:
/*!*****************************************************!*\
  !*** ./src/app/newappliance/newappliance.page.scss ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  padding-bottom: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2FwcGxpYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoibmV3YXBwbGlhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_newappliance_newappliance_module_ts-es2015.js.map