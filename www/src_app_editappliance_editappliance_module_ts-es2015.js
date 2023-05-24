"use strict";
(self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_editappliance_editappliance_module_ts"],{

/***/ 15364:
/*!***************************************************************!*\
  !*** ./src/app/editappliance/editappliance-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditappliancePageRoutingModule": function() { return /* binding */ EditappliancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _editappliance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editappliance.page */ 42650);




const routes = [
    {
        path: '',
        component: _editappliance_page__WEBPACK_IMPORTED_MODULE_0__.EditappliancePage
    }
];
let EditappliancePageRoutingModule = class EditappliancePageRoutingModule {
};
EditappliancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditappliancePageRoutingModule);



/***/ }),

/***/ 28917:
/*!*******************************************************!*\
  !*** ./src/app/editappliance/editappliance.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditappliancePageModule": function() { return /* binding */ EditappliancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _editappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editappliance-routing.module */ 15364);
/* harmony import */ var _editappliance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editappliance.page */ 42650);







let EditappliancePageModule = class EditappliancePageModule {
};
EditappliancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editappliance_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditappliancePageRoutingModule
        ],
        declarations: [_editappliance_page__WEBPACK_IMPORTED_MODULE_1__.EditappliancePage]
    })
], EditappliancePageModule);



/***/ }),

/***/ 42650:
/*!*****************************************************!*\
  !*** ./src/app/editappliance/editappliance.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditappliancePage": function() { return /* binding */ EditappliancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editappliance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editappliance.page.html */ 82137);
/* harmony import */ var _editappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editappliance.page.scss */ 50213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-hashtable */ 31405);










let EditappliancePage = class EditappliancePage {
    constructor(router, route, navCtrl, alertController, loadingCtrl, keyboard, httpClient, auth) {
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.keyboard = keyboard;
        this.httpClient = httpClient;
        this.auth = auth;
        //   data:any[];
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
        this.SaveFlag = true;
        // Selects
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
        this.Appliance = [
            { name: 'Boiler' },
            { name: 'Cooker' },
            { name: 'Hob' },
            { name: 'Fire' },
            { name: 'Water Heater' },
        ];
        this.isLoading = false;
        this.governlist = ['Yes', 'No'];
        this.url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';
        this.set = new Set();
        this.prg = new Set();
        this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_4__.HashTable();
        this.list = [];
        this.makeList = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
                console.log('## data createcertificate ' + this.data['JOBGUID']);
                this.auth.getLocation();
                this.auth.database.executeSql('select * from newappliance where JOBGUID=?', [this.data['JOBGUID']])
                    .then((res) => {
                    for (let i = 0; i < res.rows.length; i++) {
                        console.log('### NEW APP ' + ' ' + JSON.stringify(res.rows.item(i)));
                        if (res.rows.item(i)['Make'] == this.data['AppName'] || res.rows.item(i)['MakeAnswer'] == this.data['AppName']) {
                            this.ApplianceTypeSelect = res.rows.item(i)['AppType'];
                            this.MakeSelect = res.rows.item(i)['Make'];
                            this.MakeAnswerSelect = res.rows.item(i)['MakeAnswer'];
                            this.ModelSelect = res.rows.item(i)['Model'];
                            this.ModelAnswerSelect = res.rows.item(i)['ModelAnswer'];
                            this.BoilerTypeSelect = res.rows.item(i)['BType'];
                            this.LocationSelect = res.rows.item(i)['Loc'];
                            this.FlueSelect = res.rows.item(i)['Flue'];
                            this.OwnedSelect = res.rows.item(i)['OwnedBy'];
                            this.InspectedSelect = res.rows.item(i)['Inspected'];
                            this.GovenorSelect = res.rows.item(i)['ZeroGov'];
                            this.OperatingSelect = res.rows.item(i)['OPU'];
                            this.GasRateSelect = res.rows.item(i)['OptPrs'];
                            this.SafetyDeviceSelect = res.rows.item(i)['OSD'];
                            this.VentilationSatisfactorySelect = res.rows.item(i)['VS'];
                            this.VisualConditionSelect = res.rows.item(i)['VCF'];
                            this.ContinuitySpillageSelect = res.rows.item(i)['FOC'];
                            this.AnalyserReading1Select = res.rows.item(i)['ComRead'];
                            this.HighInitalRatioSelect = res.rows.item(i)['HRatio'];
                            this.HighInitalCO2Select = res.rows.item(i)['HCO2Val'];
                            this.HighInitalCOppmSelect = res.rows.item(i)['HCOPPM'];
                            this.LowFinalRatioSelect = res.rows.item(i)['LRatio'];
                            this.LowFinalCO2Select = res.rows.item(i)['LCO2Val'];
                            this.LowFinalCOppmSelect = res.rows.item(i)['LCOPPM'];
                            this.SafeToUseSelect = res.rows.item(i)['STU'];
                            this.DefectIdentifiedSelect = res.rows.item(i)['DefId'];
                            this.GIUSPSelect = res.rows.item(i)['GIUSP'];
                            this.WarningNoticeSelect = res.rows.item(i)['WarAdRec'];
                            this.RemedialActionSelect = res.rows.item(i)['RemAc'];
                            console.log('sabr ' + this.ApplianceTypeSelect + ' ' + this.GasRateSelect + ' ' + res.rows.item(i)['OSD']);
                            this.ApplianceTypeFlag = false;
                            this.MakeFlag = false;
                            this.MakeAnswerFlag = false;
                            this.ModelFlag = false;
                            this.ModelAnswerFlag = false;
                            this.BoilerTypeFlag = false;
                            this.LocationFlag = false;
                            this.FlueFlag = false;
                            this.OwnedFlag = false;
                            this.InspectedFlag = false;
                            this.GovenorFlag = false;
                            this.OperatingFlag = false;
                            this.GasRateFlag = false;
                            this.SafetyDeviceFlag = false;
                            this.VentilationSatisfactoryFlag = false;
                            this.VisualConditionFlag = false;
                            this.ContinuitySpillageFlag = false;
                            this.AnalyserReading1Flag = false;
                            this.HighInitalRatioFlag = false;
                            this.HighInitalCO2Flag = false;
                            this.HighInitalCOppmFlag = false;
                            this.LowFinalRatioFlag = false;
                            this.LowFinalCO2Flag = false;
                            this.LowFinalCOppmFlag = false;
                            this.SafeToUseFlag = false;
                            this.DefectIdentifiedFlag = false;
                            this.GIUSPFlag = false;
                            this.WarningNoticeFlag = false;
                            this.RemedialActionFlag = false;
                            this.SaveFlag = false;
                        }
                    }
                }).catch((e) => {
                    console.log('sabr error ' + JSON.stringify(e));
                });
            }
        });
    }
    ApplianceTypeClick(appliancetype) {
        console.log('##### modelngggg ' + this.ApplianceTypeSelect);
        this.MakeFlag = false;
        // this.firstSelect(this.ngMake);
        // this.makeList = ['hp', 'samsung', 'asus', 'dell'];
        //this.list =['model 1', 'model 2', 'model 3'];
    }
    MakeChange($event) {
        if (this.MakeSelect == 'other') {
            console.log('#### if');
            this.MakeAnswerFlag = false;
            this.ModelFlag = true;
        }
        else {
            console.log('#### else' + this.list.length);
            this.firstSelect(this.MakeSelect);
            this.MakeAnswerFlag = true;
            this.ModelFlag = false;
        }
        //this.ModelSelect = ''; same blunder
    }
    AnswerMakeDone() {
        console.log('MAKE  DONE');
        this.ModelAnswerFlag = false;
    }
    ModelChange() {
        if (this.ModelSelect === 'other') {
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
    }
    AnswerModelDone() {
        this.keyboard.hide();
        this.BoilerTypeFlag = false;
    }
    BoilerTypeClick() {
        this.LocationFlag = false;
    }
    LocationClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            this.Fluelist = ['Open Flued', 'Room Sealed'];
            this.FlueFlag = false;
        }
        else {
            this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
            this.FlueFlag = false;
        }
    }
    FlueClick() {
        this.OwnedFlag = false;
    }
    OwnedClick() {
        this.InspectedFlag = false;
    }
    InspectedClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            if (this.FlueSelect == 'Room Sealed') {
                this.GovenorFlag = false;
                this.OperatingFlag = true;
            }
            else {
                this.GovenorFlag = true;
                this.OperatingFlag = false;
                this.operatinglist = ['KWH', 'MBAR'];
            }
        }
        else {
            // non boiler
            this.GovenorFlag = true;
            this.OperatingFlag = false;
            if (this.ApplianceTypeSelect == 'Boiler') {
                this.OperatingFlag = false;
                if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
                    this.operatinglist = ['KWH'];
                    console.log('IF');
                }
                else {
                    console.log('ELSE');
                    this.operatinglist = ['KWH', 'MBAR'];
                }
            }
            else {
                /// non boiler situation doesnot exist
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
    GovenorClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            this.OperatingFlag = false;
            if (this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
                this.operatinglist = ['KWH'];
                console.log('IF');
            }
            else {
                console.log('ELSE');
                this.operatinglist = ['KWH', 'MBAR'];
            }
        }
        else {
            /// non boiler situation doesnot exist
            // non boiler
            // if(this.InspectedSelect=='WorkedOn'){
            // this.operatinglist=['KWH','mBar'];
            // }else{
            //   this.Operating = true;
            //   this.GasRate =false;
            // }
        }
    }
    OperatingClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            if (this.InspectedSelect == 'WorkedOn') {
                this.GasRateFlag = false;
                this.SafetyDeviceFlag = true;
            }
            else {
                this.GasRateFlag = true;
                this.SafetyDeviceFlag = false;
            }
        }
        else {
            // same situation for both worked on and non woerked on senario
            // non boiler
            if (this.InspectedSelect == 'WorkedOn') {
                this.GasRateFlag = false;
                this.SafetyDeviceFlag = true;
            }
            else {
                this.GasRateFlag = true;
                this.SafetyDeviceFlag = false;
            }
        }
    }
    gasRateClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'KWH') {
                // KWH
                if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                    this.presentkwh();
                }
                else {
                    this.SafetyDeviceFlag = false;
                }
            }
            else if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'MBAR') {
                //mBAR
                if (Number.parseInt(this.GasRateSelect) > 17 || Number.parseInt(this.GasRateSelect) < 0) {
                    this.presentMbar('0', '17');
                }
                else {
                    this.SafetyDeviceFlag = false;
                }
            }
            else {
            }
        }
        else {
            // for non boiler
            if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'KWH') {
                // KWH
                if (Number.parseInt(this.GasRateSelect) > 70 || Number.parseInt(this.GasRateSelect) < 0) {
                    this.presentkwh();
                }
                else {
                    this.SafetyDeviceFlag = false;
                }
            }
            else if (this.InspectedSelect == 'WorkedOn' && this.OperatingSelect == 'MBAR') {
                //mBAR
                if (Number.parseInt(this.GasRateSelect) > 25 || Number.parseInt(this.GasRateSelect) < 0) {
                    this.presentMbar('0', '25');
                }
                else {
                    this.SafetyDeviceFlag = false;
                }
            }
        }
    }
    presentMbar(low, high) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Kw/h should be between 0 & 70',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    safetydeviceClick() {
        this.VentilationSatisfactoryFlag = false;
    }
    VentilationSatisfactoryClick() {
        // same condition for both boiler and non boiler
        if (this.FlueSelect == 'Open Flued' || this.FlueSelect == 'Room Sealed') {
            this.VisualConditionFlag = false;
        }
        else {
            this.VisualConditionFlag = true;
        }
    }
    VisualConditionClick() {
        if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Boiler') {
            this.continuitySpillagelist = ['Pass', 'Fail'];
            this.ContinuitySpillageFlag = false;
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Fire') {
            this.continuitySpillagelist = ['Pass', 'Fail'];
            this.ContinuitySpillageFlag = false;
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Water Heater') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            this.ContinuitySpillageFlag = false;
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Hob') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            this.ContinuitySpillageFlag = false;
        }
        else if (this.FlueSelect == 'Open Flued' && this.ApplianceTypeSelect == 'Cooker') {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            this.ContinuitySpillageFlag = false;
        }
        else {
            this.continuitySpillagelist = ['Pass', 'Fail', 'NA'];
            this.ContinuitySpillageFlag = false;
        }
    }
    continuitySpillageClick() {
        if (this.ApplianceTypeSelect == 'Boiler' && this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'Yes') {
            this.analyserlist = ['Pass', 'Fail'];
            console.log('yes');
        }
        else if (this.ApplianceTypeSelect == 'Boiler' && this.InspectedSelect == 'WorkedOn' && this.GovenorSelect == 'No') {
            this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
            console.log('No');
        }
        else {
            this.analyserlist = ['Pass', 'Fail', 'Stripdown'];
            console.log('ELSE');
        }
        this.AnalyserReading1Flag = false;
    }
    analyserReadingClick() {
        if (this.ApplianceTypeSelect == 'Boiler') {
            this.HighInitalRatioFlag = false;
        }
        else {
            this.HighInitalRatioFlag = false;
        }
    }
    HighInitalRatioClick() {
        let decRegex = /^[0](\.\d{4})$/;
        console.log(+' ' + this.HighInitalRatioSelect);
        if (decRegex.test(this.HighInitalRatioSelect)) {
            this.HighInitalCO2Flag = false;
        }
        else {
            this.presentValidationHighInitalRatioClick();
        }
    }
    presentValidationHighInitalRatioClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'value should be of format 0.0001',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    HighInitalCO2Click() {
        let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
        if (decRegex.test(this.HighInitalCO2Select)) {
            this.HighInitalCOppmFlag = false;
        }
        else {
            this.presentValidationHighInitalCO2Click();
        }
    }
    presentValidationHighInitalCO2Click() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'value should be of format 100',
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    HighInitalCOppmClick() {
        //let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
        let decRegex = /^[0-9]*$/;
        if (decRegex.test(this.HighInitalCOppmSelect)) {
            this.LowFinalRatioFlag = false;
        }
        else {
            this.presentValidationHighInitalCO2Click();
        }
    }
    LowFinalRatioClick() {
        let decRegex = /^[0](\.\d{4})$/;
        if (decRegex.test(this.LowFinalRatioSelect)) {
            this.LowFinalCO2Flag = false;
        }
        else {
            this.presentValidationHighInitalRatioClick();
        }
    }
    LowFinalCO2Click() {
        //let decRegex = /^[0](\.\d{4})$/;
        let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
        if (decRegex.test(this.LowFinalCO2Select)) {
            this.LowFinalCOppmFlag = false;
        }
        else {
            this.presentValidationHighInitalRatioClick();
        }
    }
    LowFinalCOppmClick() {
        let decRegex = /^[0-9]*$/;
        if (decRegex.test(this.LowFinalCOppmSelect)) {
            this.SafeToUseFlag = false;
        }
        else {
            this.presentValidationHighInitalCO2Click();
        }
    }
    SafeToUseClick() {
        this.DefectIdentifiedFlag = false;
    }
    DefectIdentifiedAns() {
        this.GIUSPFlag = false;
        if (this.DefectIdentifiedSelect == 'Yes') {
            this.giusplist = ['Advisory', 'Not Applicable'];
        }
        else {
            this.giusplist = ['At Risk', 'Immediately Dangerous'];
        }
    }
    GIUSPClick() {
        // this.save = false;
        if (this.GIUSPSelect == 'Advisory') {
            this.RemedialActionFlag = false;
            this.advicelist = ['Advised Customer', 'NA'];
        }
        else if (this.GIUSPSelect == 'Not Applicable') {
            this.RemedialActionFlag = false;
            this.advicelist = ['Advised Customer', 'NA'];
        }
        else if (this.GIUSPSelect == 'At Risk') {
            this.WarningNoticeFlag = false;
            this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Capped off', 'Pass to ESP (customer refused to cap off)'];
        }
        else if (this.GIUSPSelect == 'Immediately Dangerous') {
            this.WarningNoticeFlag = false;
            this.advicelist = ['Turned off with permission, documeted and labled', 'Customer refused permission', 'Capped off', 'Pass to ESP (customer refused to cap off)'];
        }
    }
    WarningNoticeAns() {
        this.RemedialActionFlag = false;
    }
    RemedialActionTakenClick() {
        this.SaveFlag = false;
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            this.loadingCtrl.dismiss();
        });
    }
    InsertApplianceNew() {
        const AppliancesNewDetailsList = {
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
        this.auth.database.executeSql('update  newappliance set  AppType  =?, Make  =?, MakeAnswer =?, Model  =?, ModelAnswer =?, BType  =?, Loc  =?, Flue  =?, OwnedBy  =?, Inspected  =?, ZeroGov  =?, OPU  =?, OptPrs  =?, OSD  =?, VS  =?, VCF  =?, FOC  =?, ComRead  =?, HRatio  =?, HCO2Val  =?, HCOPPM  =?, LRatio  =?, LCO2Val  =?, LCOPPM  =?, STU  =?, DefId =?, GIUSP  =?, WarAdRec =?, RemAc =?, IsDelete =?,  GIUS=? where JOBGUID=? ', [AppliancesNewDetailsList.ApplianceTypeSelect,
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
            AppliancesNewDetailsList.OperatingSelect,
            AppliancesNewDetailsList.VentilationSatisfactorySelect,
            AppliancesNewDetailsList.VisualConditionSelect,
            AppliancesNewDetailsList.continuitySpillageSelect,
            AppliancesNewDetailsList.analyserReadingSelect,
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
            '', this.data['JOBGUID']]).then((res) => {
            this.auth.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ", ['newappliance', this.data['JOBGUID']]).then((res) => {
                console.log('#### new appliance success ' + JSON.stringify(res));
                this.router.navigate(['details']);
                this.auth.showToast('Success! Appliance has been saved.', 'success');
            }).catch((e) => {
            });
        }).catch((e) => {
            this.auth.showToast('Error Save Appliance in device' + JSON.stringify(e), 'danger');
        });
    }
    makeModel() {
        this.httpClient.get(this.url1 + 'Service_GetMakeModel').subscribe(res => {
            for (var i = 0; i < res.length; i++) {
                this.key = res[i]['Make'];
                this.prg.add(this.key);
                if (this.prg.has(res[i]['Make'])) {
                    if (!this.set.has(res[i]['Make'])) {
                        this.list.push(res[i]['Model']);
                    }
                    else {
                    }
                }
                else {
                    this.set.add(res[i - 1]['Make']);
                }
                this.has.putArray(this.key, this.list);
                this.list = [];
            }
            this.makeList = Array.from(this.prg);
            console.log('size ' + this.has.getArray(res[1]['Make']).length +
                " array =>" + this.has.getArray(res[2]['Make']));
        });
    }
    firstSelect(make) {
        console.log('ion change' + make);
        this.list = this.auth.has.getArray(make);
    }
};
EditappliancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
EditappliancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-editappliance',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editappliance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editappliance_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditappliancePage);



/***/ }),

/***/ 82137:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/editappliance/editappliance.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title > Add Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item [hidden]=\"ApplianceTypeFlag\">\n    <ion-label>Appliance Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ApplianceTypeSelect\" (ionChange)=\"ApplianceTypeClick()\">\n      <ion-select-option value={{ApplianceTypeSelect}} selected  disabled > {{ApplianceTypeSelect}} </ion-select-option>\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Appliance\">{{item.name}}</ion-select-option>\n    </ion-select>\n  </ion-item> \n\n  <ion-item [hidden]=\"MakeFlag\">\n    <ion-label>Make</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"MakeSelect\" (ionChange)=\"MakeChange($event)\">\n      <ion-select-option value={{MakeSelect}} selected  disabled > {{MakeSelect}} </ion-select-option>\n\n      <ion-select-option *ngFor=\"let user of makeList\">{{user}}</ion-select-option>\n      <ion-select-option value=\"other\">Other</ion-select-option>  \n    </ion-select>\n  </ion-item>\n  \n  <ion-item [hidden]=\"MakeAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"MakeAnswerSelect\" placeholder=\"Enter the Manufacturer Name\"\n      (keyup.enter)=\"AnswerMakeDone()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelFlag\">\n    <ion-label>Model</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ModelSelect\" (ionChange)=\"ModelChange()\">\n      <ion-select-option value={{ModelSelect}} selected  disabled > {{ModelSelect}} </ion-select-option>\n      <ion-select-option *ngFor=\"let user of list\">{{user}}</ion-select-option>\n      <ion-select-option value=\"other\">Other</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ModelAnswerFlag\">\n    <ion-input type=\"text\" [(ngModel)]=\"ModelAnswerSelect\" placeholder=\"Enter the Model Name\"\n      (keyup.enter)=\"AnswerModelDone()\"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"BoilerTypeFlag\">\n    <ion-label>Boiler Type</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"BoilerTypeSelect\" (ionChange)=\"BoilerTypeClick()\">\n      <ion-select-option value=\"HeatOnly\">Heat Only</ion-select-option>\n      <ion-select-option value=\"System\">System</ion-select-option>\n      <ion-select-option value=\"Combi\">Combi</ion-select-option>\n      <ion-select-option value=\"BackBoiler\">Back Boiler</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"LocationFlag\">\n    <ion-label>Location</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"LocationSelect\" (ionChange)=\"LocationClick()\">\n      <ion-select-option value=\"AiringCupboard/Compartment\">Airing Cupboard/Compartment</ion-select-option>\n      <ion-select-option value=\"Bathroom\">Bathroom</ion-select-option>\n      <ion-select-option value=\"Bedroom\">Bedroom</ion-select-option>\n      <ion-select-option value=\"Conservatory\">Conservatory</ion-select-option>\n      <ion-select-option value=\"DiningRoom\">Dining Room</ion-select-option>\n      <ion-select-option value=\"Garage\">Garage</ion-select-option>\n      <ion-select-option value=\"Hall\">Hall</ion-select-option>\n      <ion-select-option value=\"Kitchen\">Kitchen</ion-select-option>\n      <ion-select-option value=\"Landing\">Landing</ion-select-option>\n      <ion-select-option value=\"LivingRoom\">Living Room</ion-select-option>\n      <ion-select-option value=\"Loft\">Loft</ion-select-option>\n      <ion-select-option value=\"Lounge\">Lounge</ion-select-option>\n      <ion-select-option value=\"Utility\">Utility</ion-select-option>\n      <ion-select-option value=\"WC\">WC</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"FlueFlag\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueSelect\" (ionChange)=\"FlueClick()\">\n      <ion-select-option value={{FlueSelect}} selected  disabled > {{FlueSelect}} </ion-select-option>\n\n      <div *ngFor='let flue of Fluelist'>\n        <ion-select-option value={{flue}}>{{flue}}</ion-select-option>\n      </div>\n      \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"Flueless\">\n    <ion-label>Flue</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"FlueLessSelect\" (ionChange)=\"FlueLessClick()\">\n      <ion-select-option value=\"OpenFlued\">Open Flued</ion-select-option>\n      <ion-select-option value=\"RoomSealed\">Room Sealed</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item [hidden]=\"OwnedFlag\">\n    <ion-label>Owned by</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OwnedSelect\" (ionChange)=\"OwnedClick()\">\n      <ion-select-option value=\"Landlord\">Landlord</ion-select-option>\n      <ion-select-option value=\"Tenant\">Tenant</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"InspectedFlag\">\n    <ion-label>Inspected</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"InspectedSelect\" (ionChange)=\"InspectedClick()\">\n      <ion-select-option value=\"WorkedOn\">Worked On</ion-select-option>\n      <ion-select-option value=\"Visual\">Visual</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"GovenorNAFlag\">\n    <ion-label>Zero Govenor</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GovenorSelect\" (ionChange)=\"GovenorClick()\">\n      <ion-select-option value={{GovenorSelect}} selected  disabled > {{GovenorSelect}} </ion-select-option>\n      \n      <div *ngFor='let govrn of governlist'> \n      <ion-select-option value={{govrn}}>{{govrn}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n\n  <ion-item [hidden]=\"OperatingFlag\">\n    <ion-label>Operating pressure units</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"OperatingSelect\" (ionChange)=\"OperatingClick()\">\n      <ion-select-option value={{OperatingSelect}} selected  disabled > {{OperatingSelect}} </ion-select-option>\n\n      <div *ngFor='let operating of operatinglist'>     \n         <ion-select-option value={{operating}}>{{operating}}</ion-select-option>\n      </div>\n\n    </ion-select>\n  </ion-item>\n\n \n\n  <ion-item [hidden]=\"GasRateFlag\">\n    <ion-label>Gas Rate/Burner pressure</ion-label>\n    <ion-input placeholder=\"tap here to enter answer\" type=\"number\" [(ngModel)]=\"GasRateSelect\"\n      (keyup.enter)=\"gasRateClick()\"></ion-input>\n  </ion-item>\n\n  \n\n  <ion-item [hidden]=\"SafetyDeviceFlag\">\n    <ion-label>Operation of safety device(s)</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafetyDeviceSelect\" (ionChange)=\"safetydeviceClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VentilationSatisfactoryFlag\">\n    <ion-label>Ventilation satisfactory</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VentilationSatisfactorySelect\"\n      (ionChange)=\"VentilationSatisfactoryClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n      <ion-select-option value=\"NA\">N/A</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"VisualConditionFlag\">\n    <ion-label>Visual condition of flue and termination</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"VisualConditionSelect\" (ionChange)=\"VisualConditionClick()\">\n      <ion-select-option value=\"Pass\">Pass</ion-select-option>\n      <ion-select-option value=\"Fail\">Fail</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"ContinuitySpillageFlag\">\n    <ion-label>Flue flow continuity + Spillage</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"ContinuitySpillageSelect\" (ionChange)=\"continuitySpillageClick()\">\n      <ion-select-option value={{continuitySpillageSelect}} selected  disabled > {{continuitySpillageSelect}} </ion-select-option>\n\n     <div *ngFor='let continuityspillage of continuitySpillagelist'>\n      <ion-select-option value={{continuityspillage}}>{{continuityspillage}}</ion-select-option>\n     </div>\n      \n       \n      \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"AnalyserReading1Flag\">\n    <ion-label>Combustion analyser reading</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"AnalyserReading1Select\" (ionChange)=\"analyserReadingClick()\">\n      <ion-select-option value={{AnalyserReading1Select}} selected  disabled > {{AnalyserReading1Select}} </ion-select-option>\n     <div *ngFor='let  analyser of analyserlist'> \n\n        <ion-select-option value={{analyser}}>{{analyser}}</ion-select-option>\n      \n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalRatioFlag\">\n    <ion-label position=\"floating\">High / Inital Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.1234\" type=\"number\" [(ngModel)]=\"HighInitalRatioSelect\"\n      (keyup.enter)=\"HighInitalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCO2Flag\">\n    <ion-label position=\"floating\">High/ Inital CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCO2Select\"\n      (keyup.enter)=\"HighInitalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"HighInitalCOppmFlag\">\n    <ion-label position=\"floating\">High/ Inital CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"HighInitalCOppmSelect\"\n      (keyup.enter)=\"HighInitalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalRatioFlag\">\n    <ion-label position=\"floating\">Low/ Final Ratio</ion-label>\n    <ion-input placeholder=\"answer should be 0.1234\" type=\"number\" [(ngModel)]=\"LowFinalRatioSelect\"\n      (keyup.enter)=\"LowFinalRatioClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCO2Flag\">\n    <ion-label position=\"floating\">Low/ Final CO2 %</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCO2Select\"\n      (keyup.enter)=\"LowFinalCO2Click()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"LowFinalCOppmFlag\">\n    <ion-label position=\"floating\">Low/ Final CO ppm</ion-label>\n    <ion-input placeholder=\"Tap here to enter answer\" type=\"number\" [(ngModel)]=\"LowFinalCOppmSelect\"\n      (keyup.enter)=\"LowFinalCOppmClick()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"SafeToUseFlag\">\n    <ion-label>Safe To Use</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"SafeToUseSelect\" (ionChange)=\"SafeToUseClick()\">\n      <ion-select-option value=\"YES\">Yes</ion-select-option>\n      <ion-select-option value=\"NO\">No</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item [hidden]=\"DefectIdentifiedFlag\">\n    <ion-label position=\"floating\">Defect(s) identified</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"DefectIdentifiedSelect\" placeholder=\"Write here the answer\"\n      (keyup.enter)=\"DefectIdentifiedAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"GIUSPFlag\">\n    <ion-label>GIUSP  </ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"GIUSPSelect\" (ionChange)=\"GIUSPClick()\">\n      <ion-select-option value={{GIUSPSelect}} selected  disabled > {{GIUSPSelect}} </ion-select-option>\n\n      <div *ngFor='let giusp of giusplist'>\n        <ion-select-option value={{giusp}}> {{giusp}}</ion-select-option>\n      </div>\n      \n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item [hidden]=\"WarningNoticeFlag\">\n    <ion-label position=\"floating\">Warning Notice Reference No</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"WarningNoticeSelect\" placeholder=\"Write here the answer\"\n      (keyup.enter)=\"WarningNoticeAns()\"></ion-input>\n  </ion-item>\n\n  <ion-item [hidden]=\"RemedialActionFlag\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value={{RemedialActionSelect}} selected  disabled > {{RemedialActionSelect}} </ion-select-option>\n\n     <div *ngFor='let advise of advicelist'>\n      <ion-select-option value={{advise}}>{{advise}}</ion-select-option>\n     </div> \n      \n    </ion-select>\n  </ion-item>\n\n  <!-- <ion-item [hidden]=\"RemedialAction2\">\n    <ion-label>Remedial Action Taken</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"RemedialActionSelect\" (ionChange)=\"RemedialActionTakenClick()\">\n      <ion-select-option value=\"Turnedoffwithpermission\">Turned off with permission, documeted and labled\n      </ion-select-option>\n      <ion-select-option value=\"Customerrefusedpermission\">Customer refused permission</ion-select-option>\n      <ion-select-option value=\"Cappedoff\">Capped off</ion-select-option>\n      <ion-select-option value=\"PasstoESP\">Pass to ESP (customer refused to cap off)</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div style=\"margin-top: 5%;\">\n    <ion-button [hidden]=\"SaveFlag\" expand=\"block\" (click)=\"InsertApplianceNew()\">Update</ion-button>\n  </div>\n\n</ion-content>\n\n<!-- <form [formGroup]=\"AddApplianceForm\" (ngSubmit)=\"gotologinformsubmit()\"> </form>  -->");

/***/ }),

/***/ 50213:
/*!*******************************************************!*\
  !*** ./src/app/editappliance/editappliance.page.scss ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXBwbGlhbmNlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_editappliance_editappliance_module_ts-es2015.js.map