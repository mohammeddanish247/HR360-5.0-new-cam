import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HashTable } from 'angular-hashtable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModalExampleComponent } from '../modalpopup/modal-example.component';

@Component({
  selector: 'app-nwapp',
  templateUrl: './nwapp.page.html',
  styleUrls: ['./nwapp.page.scss'],
})
export class NwappPage implements OnInit {

  @ViewChild(IonContent, {static:true})
  content:IonContent

  ID: any;
  id: any;
  data: any[];

  //Flag 

b1:boolean=false;
b2:boolean=false;
b3:boolean=true;
b4:boolean=false;
b5:boolean=true;
b6:boolean=false;
b7:boolean=false;
b8:boolean=false;
b9:boolean=false;
b10:boolean=false;
b11:boolean=false;
b12:boolean=false;
b13:boolean=false;
b14:boolean=false;
b15:boolean=false;
b16:boolean=false;
b17:boolean=false;
b18:boolean=false;
b19:boolean=false;
b20:boolean=false;
b21:boolean=false;
b22:boolean=false;
b23:boolean=false;
b24:boolean=false;
b25:boolean=false;
b26:boolean=false;
b27:boolean=false;
b28:boolean=false;
b29:boolean=false;
b30:boolean=false;

ApplianceTypeFlag = this.b1;
MakeFlag= this.b2;
MakeAnswerFlag= this.b3;
ModelFlag= this.b4;
ModelAnswerFlag= this.b5;
BoilerTypeFlag= this.b6;
LocationFlag= this.b7;
FlueFlag= this.b8;
OwnedFlag= this.b9;
InspectedFlag= this.b10;
GovenorFlag= this.b11;
OperatingFlag= this.b12;
GasRateFlag= this.b13;
SafetyDeviceFlag= this.b14;
VentilationSatisfactoryFlag= this.b15;
VisualConditionFlag= this.b16;
ContinuitySpillageFlag= this.b17;
AnalyserReading1Flag= this.b18;
HighInitalRatioFlag= this.b19;
HighInitalCO2Flag= this.b20;
HighInitalCOppmFlag= this.b21;
LowFinalRatioFlag= this.b22;
LowFinalCO2Flag= this.b23;
LowFinalCOppmFlag= this.b24;
SafeToUseFlag= this.b25;
DefectIdentifiedFlag= this.b26;
GIUSPFlag= this.b27;
WarningNoticeFlag= this.b28;
RemedialActionFlag= this.b29;
SaveFlag= this.b30;


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
LowFinalRatioSelect: any = '';
LowFinalCO2Select: any = '';
LowFinalCOppmSelect: any = '';
SafeToUseSelect: any = '';
DefectIdentifiedSelect: any = '';
GIUSPSelect: any = '';
WarningNoticeSelect: any = '';
RemedialActionSelect: any = '';
SaveSelect: any = '';
editmode : boolean = false;
alertFlag: boolean = true;

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
  governlist:any[]= [];
  operatinglist:any[];
  continuitySpillagelist:any[];
  analyserlist:any[];
  giusplist:any[];
  advicelist:any[];
  OwnedSelectList = ["Landlord","Tenant","Homeowner"];
  private makes: String;
  private models: String[];
  url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';

  set = new Set();
  prg = new Set();

  has = new HashTable<String, String[]>();
  key: string;
  list: Array<String> = [];
  makeList: Array<any> = [];
  modelList: any[];
  //modelList: Array<any> = [];

 // response: Array<Make>;

  a={

    'name':'Danish',
    'job':'developer',
    'age':'27',
    'qual':'Grad'

  }



  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public apiGenerate: ApiService,
    public navCtrl: NavController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public keyboard: Keyboard,
    private httpClient: HttpClient,
    private modalCtrl: ModalController,
  ) {

    
    this.makeList = this.apiGenerate.makeArray;
    this.list = this.apiGenerate.list;

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('###params item: ', this.data['JOBGUID']);

        this.apiGenerate.database.executeSql('select * from newappliance where JOBGUID=?',[this.data['JOBGUID']])
  
      .then((res)=>{
      console.log('### select success '+JSON.stringify(res));
      
    })
    .catch((e)=>{console.log('#### ERRRROR'+JSON.stringify(e));
    });

        
      }
    });   
  }

  ngOnInit() {
    this.apiGenerate.database.executeSql('SELECT DISTINCT make FROM makemodel',[]).then(res=>{
      for (var i = 0; i < res.rows.length; i++) {
        this.makeList.push(res.rows.item(i)['make']);    
      }      
    }); 
   
   if( this.data['AppName'] && this.data['id'] != undefined){
     this.editmode = false ;
     this.apiGenerate.database.executeSql('select * from newappliance where SerialNo=?',[this.data['id']]).then(res=>{
      console.log(res.rows.item(0)['Flu']);
      console.log(res.rows.item(0)['WarAdRec']);
      console.log(res.rows.item(0)['RemAc']);
      
      this.ApplianceTypeSelect = res.rows.item(0)['AppType']; 
      this.MakeSelect= res.rows.item(0)['Make'];
      //this.MakeAnswerSelect= res.rows.item(0)['MakeAnswer'];
      this.ModelSelect= res.rows.item(0)['Model']; 
      //this.ModelAnswerSelect= res.rows.item(0)['ModelAnswer'];
      this.BoilerTypeSelect= res.rows.item(0)['BType']; 
      this.LocationSelect= res.rows.item(0)['Loc']; 
      this.FlueSelect= res.rows.item(0)['Flue']; 
      this.OwnedSelect= res.rows.item(0)['OwnedBy']; 
      this.InspectedSelect= res.rows.item(0)['Inspected']; 
      this.GovenorSelect= res.rows.item(0)['ZeroGov'];
      this.OperatingSelect= res.rows.item(0)['OPU']; 
      this.GasRateSelect= res.rows.item(0)['OptPrs'];
      this.SafetyDeviceSelect= res.rows.item(0)['OSD'];
      this.VentilationSatisfactorySelect= res.rows.item(0)['VS']; 
      this.VisualConditionSelect= res.rows.item(0)['VCF']; 
      this.ContinuitySpillageSelect= res.rows.item(0)['FOC'];
      this.AnalyserReading1Select= res.rows.item(0)['ComRead'];
      this.HighInitalRatioSelect= res.rows.item(0)['HRatio'];
      this.HighInitalCO2Select= res.rows.item(0)['HCO2Val'];
      this.HighInitalCOppmSelect= res.rows.item(0)['HCOPPM'];
      this.LowFinalRatioSelect= res.rows.item(0)['LRatio'];
      this.LowFinalCO2Select= res.rows.item(0)['LCO2Val'];
      this.LowFinalCOppmSelect= res.rows.item(0)['LCOPPM'];
      this.SafeToUseSelect= res.rows.item(0)['STU'];
      this.DefectIdentifiedSelect= res.rows.item(0)['DefId'];
      this.GIUSPSelect= res.rows.item(0)['GIUSP'];
      this.WarningNoticeSelect= res.rows.item(0)['WarAdRec'];
      this.RemedialActionSelect= res.rows.item(0)['RemAc'];
      //this.SaveSelect=res.rows.item(0)['HaveData'];
      if(this.InspectedSelect == 'Visual'){
        // this.HighInitalRatioSelect = undefined;
        // this.HighInitalCO2Select = undefined;
        // this.HighInitalCOppmSelect = undefined;
        // this.LowFinalRatioSelect = undefined;
        // this.LowFinalCO2Select = undefined;
        // this.LowFinalCOppmSelect = undefined;
        // this.HighInitalRatioFlag = true;
        this.HighInitalCO2Flag = true;
        this.HighInitalCOppmFlag = true;
        this.LowFinalRatioFlag = true;
        this.LowFinalCO2Flag = true;
        this.LowFinalCOppmFlag = true;
      }
     }).catch();
   }
  }


  ionViewWillLeave(){
      console.log('ion view leave'+this.InspectedSelect);
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


  clearFilledDependency(b1:boolean,b2:boolean,b3:boolean,b4:boolean,b5:boolean,b6:boolean,
    b7:boolean,b8:boolean,b9:boolean,b10:boolean,b11:boolean,b12:boolean,b13:boolean,b14:boolean,
    b15:boolean,b16:boolean,b17:boolean,b18:boolean,b19:boolean,b20:boolean,b21:boolean,b22:boolean,b23:boolean,b24:boolean,b25:boolean,b26:boolean,b27:boolean,b28:boolean,b29:boolean){


    
    this.MakeFlag= b1;
    this.MakeAnswerFlag= b2;
    this.ModelFlag= b3;
    this.ModelAnswerFlag=b4 ;
    this.BoilerTypeFlag=b5 ;
    this.LocationFlag= b6;
    this.FlueFlag=b7 ;
    this.OwnedFlag= b8;
    this.InspectedFlag= b9;
    this.GovenorFlag=b10 ;
    this.OperatingFlag=b11 ;
    this.GasRateFlag=b12 ;
    this.SafetyDeviceFlag=b13 ;
    this.VentilationSatisfactoryFlag= b14;
    this.VisualConditionFlag=b15 ;
    this.ContinuitySpillageFlag= b16;
    this.AnalyserReading1Flag= b17;
    this.HighInitalRatioFlag=b18 ;
    this.HighInitalCO2Flag=b19 ;
    this.HighInitalCOppmFlag=b20 ;
    this.LowFinalRatioFlag= b21;
    this.LowFinalCO2Flag= b22 ;
    this.LowFinalCOppmFlag= b23;
    this.SafeToUseFlag=b24 ;
    this.DefectIdentifiedFlag= b25;
    this.GIUSPFlag= b26;
    this.WarningNoticeFlag= b27;
    this.RemedialActionFlag=b28 ;
    this.SaveFlag= b29 ;


  }
  
  ApplianceTypeClick() {                           
    console.log('##### modelngggg '+this.ApplianceTypeSelect);
      this.MakeFlag = false;
      if(this.ApplianceTypeSelect != 'Boiler'){
        this.BoilerTypeFlag = true; 
      }
      if(this.ApplianceTypeSelect=='Boiler'){
        this.Fluelist = ['Open Flued', 'Room Sealed'];
      }else{
        this.Fluelist = ['Open Flued', 'Room Sealed', 'Flueless'];
      }
      // this.firstSelect(this.MakeSelect);
     // this.makeList = ['hp', 'samsung', 'asus', 'dell'];
      //this.list =['model 1', 'model 2', 'model 3'];
      
  }

 

  MakeChange() {
    this.modelList= [];
    this.apiGenerate.database.executeSql('SELECT DISTINCT model FROM makemodel where make = ?',[this.MakeSelect]).then(res=>{
      for (var i = 0; i < res.rows.length; i++) {
        this.modelList.push(res.rows.item(i)['model']);    
      }      
    });       
    if(this.MakeSelect =='other'){
          this.MakeAnswerFlag = false;
          this.ModelFlag =true;
        }else{
         // this.firstSelect(this.MakeSelect) //makeselect is name of selected brand
          this.MakeAnswerFlag = true;
          this.ModelAnswerFlag = true;
          this.ModelFlag = false
          //this.modelList.length=0;
          this.list = this.apiGenerate.makeModelMap.get(this.MakeSelect);

        }

  }

  AnswerMakeDone() {
    this.MakeSelect = this.MakeAnswerSelect;
      this.ModelAnswerFlag = false;
      this.keyboard.hide();
  }

  ModelChange() {
    if (this.ModelSelect == 'other') {
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
      this.ModelSelect = this.ModelAnswerSelect;
      this.keyboard.hide();
      if(this.ApplianceTypeSelect == 'Boiler'){
      this.BoilerTypeFlag=false;
      }else{
        this.BoilerTypeFlag=true;
       this.LocationFlag = false;
      }
      
  }

  BoilerTypeClick() {
    this.BoilerTypeFlag=false;
    this.LocationFlag=false;
    
  }

  LocationClick() {

    this.FlueFlag=false;
   
    
  }

  FlueClick() {
    this.OwnedFlag =false;
    

    if(this.FlueSelect == 'Room Sealed'){
      this.governlist= ['Yes','No'];
    }else{
      this.governlist=['Yes','No','N/A'];
    }

    if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Boiler' ){
      this.continuitySpillagelist=['Pass', 'Fail'];
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Fire' ){
      this.continuitySpillagelist=['Pass', 'Fail'];
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Water Heater' ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Hob'  ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
    }else if(this.FlueSelect=='Open Flued' && this.ApplianceTypeSelect== 'Cooker'  ){
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
    }else{
      this.continuitySpillagelist=['Pass', 'Fail','NA'];
    }
  }

  
  OwnedClick() {
    this.InspectedFlag =false;
  }

  InspectedClick() {
    if(this.InspectedSelect=='WorkedOn'){
      this.GovenorFlag = false;
      }else{
        this.VentilationSatisfactoryFlag = false;
      }
     
      
    }


  GovenorClick() {
    if(this.InspectedSelect == 'Visual'){
      this.VentilationSatisfactoryFlag = false;
    }else{
      this.OperatingFlag=false;
    }
    if(this.GovenorSelect == 'Yes'){
      this.operatinglist=['KWH']
    }else{
      this.operatinglist=['KWH', 'MBAR']
    }

    if(this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
      this.analyserlist=['Pass', 'Fail'];
    }else{
        this.analyserlist=['Pass', 'Fail', 'Stripdown'];
    }
    
  }

  OperatingClick() {
      this.GasRateFlag = false;
    
  }

  gasRateClick() {
    if(this.OperatingSelect == 'KWH'){
      if(Number.parseInt(this.GasRateSelect)>70 ||Number.parseInt(this.GasRateSelect)<0 ){
        this.presentkwh();
        this.SafetyDeviceFlag =true;
      }else{
          this.SafetyDeviceFlag =false;
      }
    }else{
      if(Number.parseInt(this.GasRateSelect)>17 ||Number.parseInt(this.GasRateSelect)<0 ){
        this.presentMbar('0','17');
        this.SafetyDeviceFlag =true;
      }else{

        this.SafetyDeviceFlag =false;

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
      this.VisualConditionFlag=false;
     
  }

  VisualConditionClick() {
     this.ContinuitySpillageFlag = false;
    
    }
   
  continuitySpillageClick() {   
    
    if(this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
        this.analyserlist=['Pass', 'Fail'];
    }else{
      this.analyserlist=['Pass', 'Fail', 'Stripdown'];
      console.log('ELSE');
    }
    this.AnalyserReading1Flag=false;
    
  }

  analyserReadingClick() {
    if(this.InspectedSelect== 'WorkedOn' && this.AnalyserReading1Select != 'Stripdown'){
      this.HighInitalRatioFlag = false;
    }else{
      this.SafeToUseFlag =false;
      this.HighInitalRatioFlag= true;
      this.HighInitalCO2Flag= true;
      this.HighInitalCOppmFlag= true;
      this.LowFinalRatioFlag= true;
      this.LowFinalCO2Flag= true;
      this.LowFinalCOppmFlag= true;
    }
  }

  HighInitalRatioClick() {

    let decRegex =  /^(0)+(.[0-9]{1,4})?$/; ///^(0)+0\.[0-9]{3}$/ ;
    console.log(decRegex.test(this.HighInitalRatioSelect));
    console.log(this.HighInitalRatioSelect);
    
    if(decRegex.test(this.HighInitalRatioSelect)){
    this.HighInitalCO2Flag = false;
    }else{
      this.presentValidationHighInitalRatioClick()
      this.HighInitalCO2Flag = true;
    }

  }

  async presentValidationHighInitalRatioClick() {
    if (this.alertFlag == true) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'value should be in range from 0.0000 to 0.9999 and must be fixed to four decimal points ',
        backdropDismiss: false,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  HighInitalCO2Click() {
    
    let decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;

    if(decRegex.test(this.HighInitalCO2Select)){
      this.HighInitalCOppmFlag = false;
    }else{
      this.presentValidationHighInitalCO2Click();
      this.HighInitalCOppmFlag = true;
    }  
  }

  async presentValidationHighInitalCO2Click() {
    if (this.alertFlag == true) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'value should be of format 0 to 100 with one decimal point',
        backdropDismiss: false,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  HighInitalCOppmClick() {

    
  // let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
  let decRegex = /^[0-9]*$/;

    if(decRegex.test(this.HighInitalCOppmSelect)){
      this.LowFinalRatioFlag = false;
    }else{
        this.presentValidationCOppm();
        this.LowFinalRatioFlag = true;
    }
  }


  LowFinalRatioClick() {
    let decRegex = /^(0)+(.[0-9]{1,4})?$/;
    
    if(decRegex.test(this.LowFinalRatioSelect)){
      this.LowFinalCO2Flag = false;
    }else{
        this.presentValidationHighInitalRatioClick();
        this.LowFinalCO2Flag = true;
    }
   
  }

  LowFinalCO2Click() {
  //let decRegex = /^[0](\.\d{4})$/;
  let decRegex = /^(\d{1,2}(\.\d{0,1})?|100)$/;
    if(decRegex.test(this.LowFinalCO2Select)){
    this.LowFinalCOppmFlag = false;
    }else{
      this.presentValidationHighInitalCO2Click();
      this.LowFinalCOppmFlag = true;
   }

  }

 

  LowFinalCOppmClick() {
    let decRegex = /^[0-9]*$/;
    if(decRegex.test(this.LowFinalCOppmSelect)){
      this.SafeToUseFlag = false;
    }else{
      this.presentValidationCOppm();
      this.SafeToUseFlag = true;
    }
  
   
  }

  async presentValidationCOppm(){
    if (this.alertFlag == true) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'value should be a whole number.',
        backdropDismiss: false,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

 
 

  SafeToUseClick() {
    this.DefectIdentifiedFlag = false;
    if(this.SafeToUseSelect=='Yes'){
      this.giusplist=['Advisory', 'Not Applicable'];
    }else{
      this.giusplist=  ['At Risk', 'Immediately Dangerous'];
    }
    
  }

  DefectIdentifiedAns() {
    this.GIUSPFlag= false;
      
  }

  GIUSPClick() {
   // this.save = false;
    if(this.GIUSPSelect=='Advisory'){
      this.RemedialActionFlag = false;
      this.WarningNoticeFlag= true;
      this.advicelist=['Advised Customer', 'NA']
    }else if(this.GIUSPSelect=='Not Applicable'){
      this.RemedialActionFlag = false;
      this.WarningNoticeFlag= true;
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
  EditApplianceNew(){
    this.apiGenerate.database.executeSql('update newappliance set AppType=?  , Make=?  , MakeAnswer=? , Model=?  , ModelAnswer=? , BType=?  , Loc=?  , Flue=?  , OwnedBy=?  , Inspected=?  , ZeroGov=?  , OPU=?  , OptPrs=?  , OSD=?  , VS=?  , VCF=?  , FOC=?  , ComRead=?  , HRatio=?  , HCO2Val=?  , HCOPPM=?  , LRatio=?  , LCO2Val=?  , LCOPPM=?  , STU=?  , DefId=? , GIUSP=?  , WarAdRec=? , RemAc=? where SerialNo = ?',
    [this.ApplianceTypeSelect,this.MakeSelect,this.MakeAnswerSelect,this.ModelSelect,this.ModelAnswerSelect,this.BoilerTypeSelect,this.LocationSelect,this.FlueSelect,this.OwnedSelect,this.InspectedSelect,this.GovenorSelect,this.OperatingSelect,this.GasRateSelect,this.SafetyDeviceSelect,this.VentilationSatisfactorySelect,
                                                   this.VisualConditionSelect,this.ContinuitySpillageSelect,this.AnalyserReading1Select,this.HighInitalRatioSelect,this.HighInitalCO2Select,this.HighInitalCOppmSelect,this.LowFinalRatioSelect,this.LowFinalCO2Select,this.LowFinalCOppmSelect,this.SafeToUseSelect,this.DefectIdentifiedSelect,this.GIUSPSelect,this.WarningNoticeSelect,this.RemedialActionSelect,this.data['id']]).then(succ=>{
     this.router.navigate(['createcertificate']);
     this.apiGenerate.showToast('Success! Appliance has been updated successfully','success');
      
    });
  }

  InsertApplianceNew() {
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
      havedata : "yes"
    };
    if(AppliancesNewDetailsList.Make == 'other'){
      AppliancesNewDetailsList.Make =  AppliancesNewDetailsList.MakeAnswer ;
      AppliancesNewDetailsList.Model = AppliancesNewDetailsList.ModelAnswer ;
    }
    //this.storage.set(this.data['JOBGUID'],AppliancesNewDetailsList);
    console.log(AppliancesNewDetailsList);
    this.apiGenerate.database.executeSql('insert into newappliance  (HaveData, AppType  , Make  , MakeAnswer , Model  , ModelAnswer , BType  , Loc  , Flue  , OwnedBy  , Inspected  , ZeroGov  , OPU  , OptPrs  , OSD  , VS  , VCF  , FOC  , ComRead  , HRatio  , HCO2Val  , HCOPPM  , LRatio  , LCO2Val  , LCOPPM  , STU  , DefId , GIUSP  , WarAdRec , RemAc , IsDelete, JOBGUID )  values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [ AppliancesNewDetailsList.havedata,
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
      ]).then((res)=>{

        console.log('Insert newappliance success'+JSON.stringify(res));
        
      this.apiGenerate.database.executeSql("update  jobsstatus set  newapp=?  where JOBGUID=?  ",[ 'newappliance', this.data['JOBGUID']]).then((res)=>{
        console.log('#### new appliance success '+JSON.stringify(res));this.router.navigate(['details']);
        this.apiGenerate.showToast('Saved.','dark');

      }).catch((e)=>{  

      });
    }).catch((e)=>{
      this.apiGenerate.showToast('Error Save Appliance in device'+JSON.stringify(e),'danger');
    });
    
  }

  // deleteAppliance(){
  //   this.apiGenerate.database.executeSql('delete from newappliance where SerialNo=?',[this.data['id']]).then(res=>{
  //     this.router.navigate(['createcertificate']);
  //     this.apiGenerate.showToast('Deleted! Appliance has been deleted successfully','success');
  //   })
  // }

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

  
  async openModal() {

    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
      componentProps : {
        data : this.makeList,
        msg : "Make"
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss()

    if (role === 'confirm') {
      this.MakeSelect = data;
      console.log("make name is "+this.MakeSelect);
    }

  }

  async openModalModal() {

    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
      componentProps : {
        data : this.modelList,
        msg : "Model"
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss()

    if (role === 'confirm') {
      this.ModelSelect = data;
      console.log("model name is "+this.MakeSelect);      
    }

  }


}
