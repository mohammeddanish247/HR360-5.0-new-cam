import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router'; 
import { ApiService } from '../api.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HashTable } from 'angular-hashtable';
import { Make } from './make';



@Component({
  selector: 'app-editappliance',
  templateUrl: './editappliance.page.html',
  styleUrls: ['./editappliance.page.scss'],
})
export class EditappliancePage implements OnInit {

  
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

ApplianceTypeFlag = false;
MakeFlag= true;
MakeAnswerFlag= true;
ModelFlag= true;
ModelAnswerFlag= true;
BoilerTypeFlag= true;
LocationFlag= true;
FlueFlag= true;
OwnedFlag= true;
InspectedFlag= true;
GovenorFlag= true;
OperatingFlag= true;
GasRateFlag= true;
SafetyDeviceFlag= true;
VentilationSatisfactoryFlag= true;
VisualConditionFlag= true;
ContinuitySpillageFlag= true;
AnalyserReading1Flag= true;
HighInitalRatioFlag= true;
HighInitalCO2Flag= true;
HighInitalCOppmFlag= true;
LowFinalRatioFlag= true;
LowFinalCO2Flag= true;
LowFinalCOppmFlag= true;
SafeToUseFlag= true;
DefectIdentifiedFlag= true;
GIUSPFlag= true;
WarningNoticeFlag= true;
RemedialActionFlag= true;
SaveFlag= true;

// Selects
ApplianceTypeSelect : any = '';
MakeSelect: any = '';
MakeAnswerSelect: any = '';
ModelSelect: any = '';
ModelAnswerSelect: any = '';
BoilerTypeSelect: any = '';
LocationSelect: any = '';
FlueSelect: any = '';
OwnedSelect: any = '';
InspectedSelect: any = '';
GovenorSelect: any = '';
OperatingSelect: any = '';
GasRateSelect: any = '';
SafetyDeviceSelect: any = '';
VentilationSatisfactorySelect: any = '';
VisualConditionSelect: any = '';
ContinuitySpillageSelect: any = '';
AnalyserReading1Select: any = '';
HighInitalRatioSelect: any = '';
HighInitalCO2Select: any = '';
HighInitalCOppmSelect: any = '';
LowFinalRatioSelect:any ='';
LowFinalCO2Select: any = '';
LowFinalCOppmSelect: any = '';
SafeToUseSelect: any = '';
DefectIdentifiedSelect: any = '';
GIUSPSelect: any = '';
WarningNoticeSelect: any = '';
RemedialActionSelect: any = '';
SaveSelect: any = '';


ID: any;
id: any;
data: any[];

 Appliance = [
    { name: 'Boiler' },
    { name: 'Cooker' },
    { name: 'Hob' },
    { name: 'Fire' },
    { name: 'Water Heater' },
  ];
  MakeModel: any;
  MakeModelValue: any;
  isLoading = false;
  applianceList: any;

  Fluelist:any[];
  governlist:any[]= ['Yes','No'];
  operatinglist:any[];
  continuitySpillagelist:any[];
  analyserlist:any[];
  giusplist:any[];
  advicelist:any[];
  private makes: String;
  private models: String[];
  url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';

  set = new Set();
  prg = new Set();

  has = new HashTable<String, String[]>();
  key: string;
  list: Array<String> = [];
  makeList: Array<any> = [];

  response: Array<Make>;
  


  constructor(public router: Router, public route: ActivatedRoute,
    public navCtrl: NavController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public keyboard: Keyboard,
    private httpClient: HttpClient,
    private auth:ApiService
    ) { }

  ngOnInit() {

      
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        console.log('## data createcertificate '+this.data['JOBGUID']);
        this.auth.getLocation();  
        
        this.auth.database.executeSql('select * from newappliance where JOBGUID=?',[this.data['JOBGUID']])
        .then((res)=>{

          for(let i=0; i<res.rows.length; i++){
            console.log('### NEW APP '+' '+JSON.stringify(res.rows.item(i)));   
            if(res.rows.item(i)['Make']== this.data['AppName'] || res.rows.item(i)['MakeAnswer']== this.data['AppName']){
                this.ApplianceTypeSelect = res.rows.item(i)['AppType'];
                this.MakeSelect= res.rows.item(i)['Make'];
                this.MakeAnswerSelect= res.rows.item(i)['MakeAnswer'];
                this.ModelSelect= res.rows.item(i)['Model'];
                this.ModelAnswerSelect= res.rows.item(i)['ModelAnswer'];
                this.BoilerTypeSelect= res.rows.item(i)['BType'];          
                this.LocationSelect= res.rows.item(i)['Loc'];
                this.FlueSelect= res.rows.item(i)['Flue'];
                this.OwnedSelect= res.rows.item(i)['OwnedBy'];
                this.InspectedSelect= res.rows.item(i)['Inspected'];
                this.GovenorSelect= res.rows.item(i)['ZeroGov'];
                this.OperatingSelect= res.rows.item(i)['OPU'];
                this.GasRateSelect= res.rows.item(i)['OptPrs'];
                this.SafetyDeviceSelect= res.rows.item(i)['OSD'];
                this.VentilationSatisfactorySelect= res.rows.item(i)['VS'];
                this.VisualConditionSelect= res.rows.item(i)['VCF'];
                this.ContinuitySpillageSelect= res.rows.item(i)['FOC'];
                this.AnalyserReading1Select= res.rows.item(i)['ComRead'];
                this.HighInitalRatioSelect= res.rows.item(i)['HRatio'];
                this.HighInitalCO2Select= res.rows.item(i)['HCO2Val'];
                this.HighInitalCOppmSelect= res.rows.item(i)['HCOPPM'];
                this.LowFinalRatioSelect= res.rows.item(i)['LRatio'];
                this.LowFinalCO2Select= res.rows.item(i)['LCO2Val'];
                this.LowFinalCOppmSelect= res.rows.item(i)['LCOPPM'];
                this.SafeToUseSelect= res.rows.item(i)['STU'];
                this.DefectIdentifiedSelect= res.rows.item(i)['DefId'];
                this.GIUSPSelect= res.rows.item(i)['GIUSP'];
                this.WarningNoticeSelect= res.rows.item(i)['WarAdRec'];
                this.RemedialActionSelect= res.rows.item(i)['RemAc'];
                console.log('sabr '+this.ApplianceTypeSelect+' '+this.GasRateSelect+' '+res.rows.item(i)['OSD']);
                
this.ApplianceTypeFlag = false;
this.MakeFlag= false;
this.MakeAnswerFlag= false;
this.ModelFlag= false;
this.ModelAnswerFlag= false;
this.BoilerTypeFlag= false;
this.LocationFlag= false;
this.FlueFlag= false;
this.OwnedFlag= false;
this.InspectedFlag= false;
this.GovenorFlag= false;
this.OperatingFlag= false;
this.GasRateFlag= false;
this.SafetyDeviceFlag= false;
this.VentilationSatisfactoryFlag= false;
this.VisualConditionFlag= false;
this.ContinuitySpillageFlag= false;
this.AnalyserReading1Flag= false;
this.HighInitalRatioFlag= false;
this.HighInitalCO2Flag= false;
this.HighInitalCOppmFlag= false;
this.LowFinalRatioFlag= false;
this.LowFinalCO2Flag= false;
this.LowFinalCOppmFlag= false;
this.SafeToUseFlag= false;
this.DefectIdentifiedFlag= false;
this.GIUSPFlag= false;
this.WarningNoticeFlag= false;
this.RemedialActionFlag= false;
this.SaveFlag= false;
            }
            
          }
         
        }).catch((e)=>{
          console.log('sabr error '+JSON.stringify(e));
        });
      }
    });
  }


  
  ApplianceTypeClick(appliancetype) {
     
    console.log('##### modelngggg '+this.ApplianceTypeSelect);
      this.MakeFlag = false;
     // this.firstSelect(this.ngMake);
     // this.makeList = ['hp', 'samsung', 'asus', 'dell'];
      //this.list =['model 1', 'model 2', 'model 3'];
      
  }


  

  MakeChange($event) {
    
   
    if(this.MakeSelect =='other'){
          console.log('#### if');
          this.MakeAnswerFlag = false;
          this.ModelFlag = true;
  
        }else{
          console.log('#### else'+this.list.length);
          this.firstSelect(this.MakeSelect)
          this.MakeAnswerFlag = true;
          this.ModelFlag = false
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
    } else {
      if(this.ApplianceTypeSelect=='Boiler'){
        this.ModelAnswerFlag = true;
        this.BoilerTypeFlag = false;

      }else{
        this.ModelAnswerFlag = true;
         this.LocationFlag = false; 
      }
     
    }
  }

  AnswerModelDone() {
    
     this.keyboard.hide();
     this.BoilerTypeFlag=false;
  }

  BoilerTypeClick() {
    this.LocationFlag = false;
  }

  LocationClick() {
   
    if(this.ApplianceTypeSelect=='Boiler'){
      this.Fluelist = ['Open Flued', 'Room Sealed'];
      this.FlueFlag=false;
    }else{
      this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
      this.FlueFlag=false;
    }

  }

  FlueClick() {

    this.OwnedFlag =false;
    
  }

  
  OwnedClick() {
   

    this.InspectedFlag =false;
  }

  InspectedClick() {

    if(this.ApplianceTypeSelect=='Boiler'){
      if(this.FlueSelect=='Room Sealed'){
        this.GovenorFlag = false;
        this.OperatingFlag =true;
       
      }else{
        this.GovenorFlag = true;
        this.OperatingFlag =false;
        this.operatinglist=['KWH','MBAR'];
      }

    }else{

      // non boiler

      this.GovenorFlag = true;
      this.OperatingFlag=false;

      if(this.ApplianceTypeSelect=='Boiler'){
        this.OperatingFlag = false;
        if(this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
            this.operatinglist=['KWH'];
            console.log('IF');
            
        }else{
          console.log('ELSE');
          this.operatinglist=['KWH','MBAR'];
        }
      }else{
  
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

    if(this.ApplianceTypeSelect=='Boiler'){
      this.OperatingFlag = false;
      if(this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
          this.operatinglist=['KWH'];
          console.log('IF');
          
      }else{
        console.log('ELSE');
        this.operatinglist=['KWH','MBAR'];
      }
    }else{

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

    if(this.ApplianceTypeSelect=='Boiler'){
      if(this.InspectedSelect=='WorkedOn'){

        this.GasRateFlag = false;
        this.SafetyDeviceFlag = true;

      }else{
        this.GasRateFlag = true;
        this.SafetyDeviceFlag = false;
      }

    }else{

      // same situation for both worked on and non woerked on senario
      // non boiler

      if(this.InspectedSelect=='WorkedOn'){

        this.GasRateFlag = false;
        this.SafetyDeviceFlag = true;

      }else{
        this.GasRateFlag = true;
        this.SafetyDeviceFlag = false;
      }



    }
    
  }

  gasRateClick() {


    if(this.ApplianceTypeSelect=='Boiler'){
    if(this.InspectedSelect=='WorkedOn' && this.OperatingSelect=='KWH'){
        // KWH

        if(Number.parseInt(this.GasRateSelect)>70 ||Number.parseInt(this.GasRateSelect)<0 ){
          this.presentkwh();
        }else{

            this.SafetyDeviceFlag =false;
        }


    }else if(this.InspectedSelect=='WorkedOn' && this.OperatingSelect=='MBAR'){

      //mBAR

      if(Number.parseInt(this.GasRateSelect)>17 ||Number.parseInt(this.GasRateSelect)<0 ){
        this.presentMbar('0','17');
      }else{

        this.SafetyDeviceFlag =false;

      }

    }else{

    }


    }else{

      // for non boiler

      
      if(this.InspectedSelect=='WorkedOn' &&  this.OperatingSelect=='KWH'){

         // KWH

         if(Number.parseInt(this.GasRateSelect)>70 ||Number.parseInt(this.GasRateSelect)<0 ){
          this.presentkwh();
        }else{

            this.SafetyDeviceFlag =false;
        }


      }else  if(this.InspectedSelect=='WorkedOn' &&  this.OperatingSelect=='MBAR'){
        //mBAR

        if (Number.parseInt(this.GasRateSelect) > 25 || Number.parseInt(this.GasRateSelect) < 0) {
          this.presentMbar('0','25');
        } else {

          this.SafetyDeviceFlag = false;

        }


      }

    }
  }

 

  async presentMbar(low:string, high:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Mbar should be between'+low+' & '+high,
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentkwh() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Kw/h should be between 0 & 70',
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  safetydeviceClick() {

    this.VentilationSatisfactoryFlag= false;

    
  }

  VentilationSatisfactoryClick() {

    // same condition for both boiler and non boiler
    if(this.FlueSelect=='Open Flued' || this.FlueSelect=='Room Sealed'){
      this.VisualConditionFlag=false;
    }else{
      this.VisualConditionFlag=true;
    }
 
  }

  VisualConditionClick() {
    if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Boiler' ){
      this.continuitySpillagelist=['Pass', 'Fail'];
      this.ContinuitySpillageFlag=false;
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Fire' ){
      this.continuitySpillagelist=['Pass', 'Fail'];
      this.ContinuitySpillageFlag=false;
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Water Heater' ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
      this.ContinuitySpillageFlag=false;
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Hob'  ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
       this.ContinuitySpillageFlag=false;
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Cooker'  ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
      this.ContinuitySpillageFlag=false;
    }
    else{
      this.continuitySpillagelist=['Pass', 'Fail','NA']
      this.ContinuitySpillageFlag = false;      
    }

    }
   
  

  continuitySpillageClick() {

    
    if(this.ApplianceTypeSelect=='Boiler' && this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
        this.analyserlist=['Pass', 'Fail'];
        console.log('yes');
        
    }else if(this.ApplianceTypeSelect=='Boiler' && this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='No'){
      this.analyserlist=['Pass', 'Fail', 'Stripdown'];
      console.log('No');

    }else{
      this.analyserlist=['Pass', 'Fail', 'Stripdown'];
      console.log('ELSE');

    }

    this.AnalyserReading1Flag=false;
    
  }

  analyserReadingClick() {

    if(this.ApplianceTypeSelect=='Boiler'){
      this.HighInitalRatioFlag = false;
    }else{
      this.HighInitalRatioFlag = false;
    }

  }

  
  HighInitalRatioClick() {

     
    let decRegex = /^[0](\.\d{4})$/;
    console.log(+' '+this.HighInitalRatioSelect);
    
    if(decRegex.test(this.HighInitalRatioSelect)){
    this.HighInitalCO2Flag = false;
    }else{
      this.presentValidationHighInitalRatioClick();
    }
  }

  async presentValidationHighInitalRatioClick() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'value should be of format 0.0001',
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  HighInitalCO2Click() {
    
    let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

    if(decRegex.test(this.HighInitalCO2Select)){
      this.HighInitalCOppmFlag = false;
    }else{
      this.presentValidationHighInitalCO2Click();
    }  
  }

  async presentValidationHighInitalCO2Click() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'value should be of format 100',
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  HighInitalCOppmClick() {

    
    //let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
    let decRegex = /^[0-9]*$/;

    if(decRegex.test(this.HighInitalCOppmSelect)){
      this.LowFinalRatioFlag = false;
    }else{
        this.presentValidationHighInitalCO2Click();
    }

  }


  LowFinalRatioClick() {
    let decRegex = /^[0](\.\d{4})$/;

    if(decRegex.test(this.LowFinalRatioSelect)){
      this.LowFinalCO2Flag = false;
    }else{
        this.presentValidationHighInitalRatioClick();
    }
    
   
  }

  LowFinalCO2Click() {
  //let decRegex = /^[0](\.\d{4})$/;
  let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
    if(decRegex.test(this.LowFinalCO2Select)){
    this.LowFinalCOppmFlag = false;
    }else{
      this.presentValidationHighInitalRatioClick();
   }
   
  }

 

  LowFinalCOppmClick() {
    let decRegex = /^[0-9]*$/;
    if(decRegex.test(this.LowFinalCOppmSelect)){
      this.SafeToUseFlag = false;
    }else{
      this.presentValidationHighInitalCO2Click();
    }
   
   
  }

 

  SafeToUseClick() {

    this.DefectIdentifiedFlag = false;
   
  }

  DefectIdentifiedAns() {

    this.GIUSPFlag= false;

    if(this.DefectIdentifiedSelect=='Yes'){
      this.giusplist=['Advisory', 'Not Applicable'];
    }else{
      this.giusplist=  ['At Risk', 'Immediately Dangerous'];
    }
  
  }

  GIUSPClick() {

   // this.save = false;

    if(this.GIUSPSelect=='Advisory'){
      this.RemedialActionFlag = false;
      this.advicelist=['Advised Customer', 'NA']
    }else if(this.GIUSPSelect=='Not Applicable'){
      this.RemedialActionFlag = false;
      this.advicelist=['Advised Customer', 'NA']
    }else if(this.GIUSPSelect=='At Risk'){
      this.WarningNoticeFlag= false;  
      this.advicelist=['Turned off with permission, documeted and labled', 'Customer refused permission','Capped off','Pass to ESP (customer refused to cap off)'];
    }else if(this.GIUSPSelect=='Immediately Dangerous'){
      this.WarningNoticeFlag= false;  
      this.advicelist=['Turned off with permission, documeted and labled', 'Customer refused permission','Capped off','Pass to ESP (customer refused to cap off)'];

    }
  
  }
  WarningNoticeAns() {

    
    this.RemedialActionFlag = false;
   
  }

  RemedialActionTakenClick() {

    this.SaveFlag =false;
    
  }

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      backdropDismiss: true
    }).then(a => {
      a.present().then(() => {
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    this.loadingCtrl.dismiss();
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
    this.auth.database.executeSql('update  newappliance set  AppType  =?, Make  =?, MakeAnswer =?, Model  =?, ModelAnswer =?, BType  =?, Loc  =?, Flue  =?, OwnedBy  =?, Inspected  =?, ZeroGov  =?, OPU  =?, OptPrs  =?, OSD  =?, VS  =?, VCF  =?, FOC  =?, ComRead  =?, HRatio  =?, HCO2Val  =?, HCOPPM  =?, LRatio  =?, LCO2Val  =?, LCOPPM  =?, STU  =?, DefId =?, GIUSP  =?, WarAdRec =?, RemAc =?, IsDelete =?,  GIUS=? where JOBGUID=? ',
    [AppliancesNewDetailsList.ApplianceTypeSelect,
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
      '',this.data['JOBGUID']]).then((res)=>{

      this.auth.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ",[ 'newappliance', this.data['JOBGUID']]).then((res)=>{
        console.log('#### new appliance success '+JSON.stringify(res));this.router.navigate(['details']);
        this.auth.showToast('Success! Appliance has been saved.','success');

      }).catch((e)=>{  

      });
    }).catch((e)=>{
      this.auth.showToast('Error Save Appliance in device'+JSON.stringify(e),'danger');
    });
    
  }

  makeModel() {

    this.httpClient.get<Make[]>(this.url1 + 'Service_GetMakeModel').subscribe(res => {



      for (var i = 0; i < res.length; i++) {

        this.key = res[i]['Make'];
        

        this.prg.add(this.key);

        if (this.prg.has(res[i]['Make'])) {
          if (!this.set.has(res[i]['Make'])) {
            this.list.push(res[i]['Model']);
          } else {

          }
        } else {
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

  firstSelect(make:any) {
    console.log('ion change' +make );
    this.list = this.auth.has.getArray(make);
  }
}
