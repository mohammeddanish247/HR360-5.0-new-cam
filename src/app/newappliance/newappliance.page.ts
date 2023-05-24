import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll, Platform } from '@ionic/angular';
import { Make } from './make';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HashTable } from 'angular-hashtable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from '../modalpopup/modal-example.component';


@Component({
  selector: 'app-newappliance',
  templateUrl: './newappliance.page.html',
  styleUrls: ['./newappliance.page.scss'],
})
export class NewappliancePage implements OnInit {

  @ViewChild(IonContent, {static:true})
  content:IonContent

  @ViewChild(IonContent, { read: IonContent }) myContent: IonContent;

  @ViewChild('theTarget') targetx: any;
  

  ID: any;
  id: any;
  data: any[];

  //Flag 

b1:boolean=false;
b2:boolean=true;
b3:boolean=true;
b4:boolean=true;
b5:boolean=true;
b6:boolean=true;
b7:boolean=true;
b8:boolean=true;
b9:boolean=true;
b10:boolean=true;
b11:boolean=true;
b12:boolean=true;
b13:boolean=true;
b14:boolean=true;
b15:boolean=true;
b16:boolean=true;
b17:boolean=true;
b18:boolean=true;
b19:boolean=true;
b20:boolean=true;
b21:boolean=true;
b22:boolean=true;
b23:boolean=true;
b24:boolean=true;
b25:boolean=true;
b26:boolean=true;
b27:boolean=true;
b28:boolean=true;
b29:boolean=true;
b30:boolean=true;

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



ApplianceTypeSelect : string = '';
MakeSelect: string = '';
MakeAnswerSelect: string = '';
ModelSelect: string = '';
ModelAnswerSelect: string = '';
BoilerTypeSelect: string = '';
LocationSelect: string = '';
FlueSelect: string = '';
OwnedSelect: string = '';
InspectedSelect: string = '';
GovenorSelect: string = '';
OperatingSelect: string = '';
GasRateSelect: string = '';
SafetyDeviceSelect: string = '';
VentilationSatisfactorySelect: string = '';
VisualConditionSelect: string = '';
ContinuitySpillageSelect: string = '';
AnalyserReading1Select: string = '';
HighInitalRatioSelect: string = '';
HighInitalCO2Select: string = '';
HighInitalCOppmSelect: string = '';
LowFinalRatioSelect: string = '';
LowFinalCO2Select: string = '';
LowFinalCOppmSelect: string = '';
SafeToUseSelect: string = '';
DefectIdentifiedSelect: string = '';
GIUSPSelect: string = '';
WarningNoticeSelect: string = '';
RemedialActionSelect: string = '';
SaveSelect: string = '';
editmode : boolean = true;

  Appliance = [
    { name: 'Boiler' },
    { name: 'Cooker' },
    { name: 'Hob' },
    { name: 'Fire' },
    { name: 'Water Heater' },
  ];
  OwnedSelectList = []

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
  private makes: String;
  private models: String[];
  url1 = 'https://mobileappws.home360.org.uk/Service1.asmx/';

  set = new Set();
  prg = new Set();

  has = new HashTable<String, String[]>();
  key: string;
  list: Array<String> = [];
  makeList: Array<any> = [];
  modelList: Array<any> = [];

  response: Array<Make>;




  a={
    'name':'Danish',
    'job':'developer',
    'age':'27',
    'qual':'Grad'
  }
  clickcounter: number = 0;
  alertFlag: boolean = true;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private storage: Storage,
    public router: Router,
    private route: ActivatedRoute,
    public apiGenerate: ApiService,
    public navCtrl: NavController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public keyboard: Keyboard,
    private httpClient: HttpClient,
    private modalCtrl: ModalController,
    private platform : Platform,
  ) {


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
      this.makeList = [];
      for (var i = 0; i < res.rows.length; i++) {
        this.makeList.push(res.rows.item(i)['make']);    
      }      
    });  
   
   if( this.data['AppName'] && this.data['id'] != undefined){
     this.editmode = false ;
     this.apiGenerate.database.executeSql('select * from newappliance where SerialNo=?',[this.data['id']]).then(res=>{
      console.log(res.rows.item(0)['LRatio']);
      console.log(res.rows.item(0)['HCOPPM']);
      console.log(res.rows.item(0)['HCO2Val']);
      console.log(res.rows.item(0)['LCOPPM']);
      console.log(res.rows.item(0)['LCO2Val']);
      
      this.ApplianceTypeSelect = res.rows.item(0)['AppType']; //done
      this.MakeSelect= res.rows.item(0)['Make'];
      if(this.MakeSelect == "Other"){
        this.MakeAnswerSelect= res.rows.item(0)['MakeAnswer'];
      }     
      this.ModelSelect= res.rows.item(0)['Model']; //done
      if(this.MakeSelect == "Other"){
        this.ModelAnswerSelect= res.rows.item(0)['ModelAnswer'];
      }  
      this.BoilerTypeSelect= res.rows.item(0)['BType']; //done
      this.LocationSelect= res.rows.item(0)['Loc']; //done
      this.FlueSelect= res.rows.item(0)['Flue']; //done
      this.OwnedSelect= res.rows.item(0)['OwnedBy']; //done
      this.InspectedSelect= res.rows.item(0)['Inspected']; //done
      this.GovenorSelect= res.rows.item(0)['ZeroGov'];
      this.OperatingSelect= res.rows.item(0)['OPU']; //done
      this.GasRateSelect= res.rows.item(0)['OptPrs'];
      this.SafetyDeviceSelect= res.rows.item(0)['OSD'];
      this.VentilationSatisfactorySelect= res.rows.item(0)['VS']; //done
      this.VisualConditionSelect= res.rows.item(0)['VCF']; //done
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
      this.GIUSPSelect= res.rows.item(0)['GUISP'];
      this.WarningNoticeSelect= res.rows.item(0)['WarAdRec'];
      this.RemedialActionSelect= res.rows.item(0)['RemAc'];
      //this.SaveSelect=res.rows.item(0)['HaveData'];

     }).catch();
   }

   if (this.data["ProductName"] == "BOILER SERVICE+GAS CERTIFICATE(GSI)" || this.data["ProductName"] == "GAS CERTIFICATE ") {
    this.OwnedSelectList = ["Landlord","Tenant",];
    console.log("pname"+this.data["ProductName"]);    
   }else{
    if(this.data['IsClaim'] == 'False'){
      console.log("pname"+this.data["ProductName"]);
    this.OwnedSelectList = ["Homeowner"];
    }else{
      this.OwnedSelectList = ["Landlord","Tenant","Homeowner"];
    }
    
   }

  }


  gotoBottom(){
    setTimeout(() => {
      this.content.scrollToBottom(1000);
    }, 100);
  }


  getData(){
/// this.data['JOBGUID']
    this.storage.get(this.data['JOBGUID']).then((res)=>{
      //console.log('get dats   '+JSON.stringify(res)+'  '+res['AnalyserReading1Select']);
  if(res['ApplianceTypeSelect']=='' || res['ApplianceTypeSelect']==null || res['ApplianceTypeSelect']==undefined ){
       
      }else{
        this.ApplianceTypeFlag = false;
        this.ApplianceTypeSelect = res['ApplianceTypeSelect'];
      }

      if(res['MakeSelect']=='' || res['MakeSelect']==null || res['MakeSelect']==undefined ){
       
      }else{
        this.MakeSelect = res['MakeSelect'];
        this.MakeFlag = false;
      }
      if(res['MakeAnswerSelect']=='' || res['MakeAnswerSelect']==null || res['MakeAnswerSelect']==undefined){

      }else{
        console.log('## Make answer select '+res['MakeAnswerSelect']);
        

        this.MakeAnswerSelect = res['MakeAnswerSelect'];
        this.MakeAnswerFlag = false;
      }

      if(res['ModelSelect']=='' || res['ModelSelect']==null|| res['ModelSelect']==undefined){
  

      }else{  

        this.ModelSelect = res['ModelSelect'];
        this.ModelFlag = false;}

      if(res['ModelAnswerSelect']=='' || res['ModelAnswerSelect']==null || res['ModelAnswerSelect']==undefined){
    

      }else{
        console.log('## Model answer select '+res['MakeAnswerSelect']);
        this.ModelAnswerSelect = res['ModelAnswerSelect'];
        this.ModelAnswerFlag = false;
      }

      if(res['BoilerTypeSelect']=='' || res['BoilerTypeSelect']==null || res['BoilerTypeSelect']==undefined){
      

      }else{  this.BoilerTypeSelect = res['BoilerTypeSelect'];
      this.BoilerTypeFlag= false;}

      if(res['LocationSelect']=='' || res['LocationSelect']==null || res['LocationSelect']==undefined){
      

      }else{  
        console.log('## Location select '+res['LocationSelect']);
        this.LocationSelect = res['LocationSelect'];
        this.LocationFlag = false;
    
    }

      if(res['FlueSelect']=='' || res['FlueSelect']==null || res['FlueSelect']==undefined){
     
        

      }else{   
        this.FlueSelect = res['FlueSelect'];
        this.FlueFlag = false;
    }

      if(res['OwnedSelect']=='' || res['OwnedSelect']==null || res['OwnedSelect']==undefined){
      


      }else{

        this.OwnedSelect = res['OwnedSelect'];
        this.OwnedFlag = false;
      }

      if(res['InspectedSelect']=='' || res['InspectedSelect']==null || res['InspectedSelect']==undefined){
        
        console.log('Outside Inspected '+this.InspectedSelect+' '+res['InspectedSelect']);

      }else{                
        this.InspectedSelect = res['InspectedSelect'];
        console.log('Inside Inspected '+this.InspectedSelect);
       // this.InspectedFlag = false;
      }

      if(res['GovenorSelect']=='' || res['GovenorSelect']==null || res['GovenorSelect']==undefined){
     

      }else{   this.GovenorSelect = res['GovenorSelect'];
      this.GovenorFlag = false;}

      if(res['OperatingSelect']=='' || res['OperatingSelect']==null || res['OperatingSelect']==undefined){     
     

    }else{
      this.OperatingSelect = res['OperatingSelect'];
      this.OperatingFlag = false;
    }

      if(res['GasRateSelect']=='' || res['GasRateSelect']==null || res['GasRateSelect']==undefined){    
        

    }else{
      this.GasRateSelect = res['GasRateSelect'];
      this.GasRateFlag = false;
    }

      if(res['SafetyDeviceSelect']=='' || res['SafetyDeviceSelect']==null || res['SafetyDeviceSelect']==undefined){   
           

    }else{this.SafetyDeviceSelect = res['SafetyDeviceSelect'];
    this.SafetyDeviceFlag = false;}

      if(res['VentilationSatisfactorySelect']=='' || res['VentilationSatisfactorySelect']==null || res['VentilationSatisfactorySelect']==undefined){   
         
    }else{  this.VentilationSatisfactorySelect = res['VentilationSatisfactorySelect'];


    this.VentilationSatisfactoryFlag = false;
}

      if(res['VisualConditionSelect']=='' || res['VisualConditionSelect']==null || res['VisualConditionSelect']==undefined){     
        
    }else{ this.VisualConditionSelect = res['VisualConditionSelect'];
    this.VisualConditionFlag = false;
}

if(res['ContinuitySpillageSelect']=='' || res['ContinuitySpillageSelect']==null || res['ContinuitySpillageSelect']==undefined){     
        
}else{ this.ContinuitySpillageSelect = res['ContinuitySpillageSelect'];
this.ContinuitySpillageFlag = false;
}

      if(res['AnalyserReading1Select']=='' || res['AnalyserReading1Select']==null || res['AnalyserReading1Select']==undefined){ 
            
    }else{ 
      this.AnalyserReading1Select = res['AnalyserReading1Select'];
    this.AnalyserReading1Flag = false;
}

      if(res['HighInitalRatioSelect']=='' || res['HighInitalRatioSelect']==null || res['HighInitalRatioSelect']==undefined){ 
            

    }else{ 
      this.HighInitalRatioSelect = res['HighInitalRatioSelect'];
    this.HighInitalRatioFlag = false;
  }

      if(res['HighInitalCO2Select']=='' || res['HighInitalCO2Select']==null || res['HighInitalCO2Select']==undefined){    
        

    }else{  this.HighInitalCO2Select = res['HighInitalCO2Select'];
    this.HighInitalCO2Flag = false;}

      if(res['HighInitalCOppmSelect']=='' || res['HighInitalCOppmSelect']==null || res['HighInitalCOppmSelect']==undefined){   
         

    }else{  this.HighInitalCOppmSelect = res['HighInitalCOppmSelect'];
    this.HighInitalCOppmFlag = false;}

      if(res['LowFinalRatioSelect']=='' || res['LowFinalRatioSelect']==null || res['LowFinalRatioSelect']==undefined){    
         

    }else{ this.LowFinalRatioSelect =res['LowFinalRatioSelect'];
    this.LowFinalRatioFlag = false;}

      if(res['LowFinalCO2Select']=='' || res['LowFinalCO2Select']==null || res['LowFinalCO2Select']==undefined){    
        

    }else{  this.LowFinalCO2Select = res['LowFinalCO2Select'];
    this.LowFinalCO2Flag = false;}

      if(res['LowFinalCOppmSelect']=='' || res['LowFinalCOppmSelect']==null || res['LowFinalCOppmSelect']==undefined){     
      

    }else{   this.LowFinalCOppmSelect =res['LowFinalCOppmSelect'];
    this.LowFinalCOppmFlag = false;}

      if(res['SafeToUseSelect']=='' || res['SafeToUseSelect']==null || res['SafeToUseSelect']==undefined){     
        

    }else{
       this.SafeToUseSelect = res['SafeToUseSelect'];
       this.SafeToUseFlag = false;
      }


      if(res['DefectIdentifiedSelect']=='' || res['DefectIdentifiedSelect']==null || res['DefectIdentifiedSelect']==undefined){    
         
    }else{ 

      this.DefectIdentifiedSelect =res['DefectIdentifiedSelect'];
      this.DefectIdentifiedFlag = false;

    }

      if(res['GIUSPSelect']=='' || res['GIUSPSelect']==null || res['GIUSPSelect']==undefined){    
     

    }else{     
      this.GIUSPSelect = res['GIUSPSelect'];
      this.GIUSPFlag = false;
  }

      if(res['WarningNoticeSelect']=='' || res['WarningNoticeSelect']==null || res['WarningNoticeSelect']==undefined){      
       

    }else{ 
      this.WarningNoticeSelect = res['WarningNoticeSelect'];
     this.WarningNoticeFlag = false;
  }

      if(res['RemedialActionSelect']=='' || res['RemedialActionSelect']==null || res['RemedialActionSelect']==undefined){      
        

    }else{
      this.RemedialActionSelect = res['RemedialActionSelect'];
      this.RemedialActionFlag = false;
    }
      
    },(err)=>{
      console.log('ERR get'+JSON.stringify(err));

    });

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
    } else {
      if(this.ApplianceTypeSelect=='Boiler'){
        this.ModelAnswerFlag = true;
        this.BoilerTypeFlag = false;
      }else{
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
      if(this.ApplianceTypeSelect == 'Boiler'){
      this.BoilerTypeFlag=false;
      }else{
        this.BoilerTypeFlag=true;
       this.LocationFlag = false;
      }
      this.gotoBottom();
       // will scroll to bottom
  }

  BoilerTypeClick() {
    this.BoilerTypeFlag=false;
    this.LocationFlag=false;
    this.gotoBottom();
       // will scroll to bottom
  }

  LocationClick() {

    this.FlueFlag=false;
   
    this.gotoBottom();
       // will scroll to bottom
  }

  FlueClick() {
    this.OwnedFlag =false;
    this.gotoBottom();
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
    this.gotoBottom();
      
  }

  InspectedClick() {
    this.clickcounter = this.clickcounter + 1 ;
    if(this.InspectedSelect=='WorkedOn'){
      this.GovenorFlag = false;
      this.VentilationSatisfactoryFlag = true;
      }else {
        this.GovenorFlag = true;
        this.VentilationSatisfactoryFlag = false;
    }
      
      if(this.clickcounter>1){
        
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

    this.gotoBottom();
       // will scroll to bottom
  }

 

  async presentMbar(low:string, high:string) {
    if (this.alertFlag == true) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Mbar should be between'+low+' & '+high,
        backdropDismiss: false,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async presentkwh() {
    if (this.alertFlag == true) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Kw/h should be between 0 & 70',
        backdropDismiss: false,
        buttons: ['OK']
      });
      await alert.present();
    } 
  }

  safetydeviceClick() {
    this.VentilationSatisfactoryFlag= false;  
    this.gotoBottom();
       // will scroll to bottom 
  }

  VentilationSatisfactoryClick() {
      this.VisualConditionFlag=false;
    this.gotoBottom();
       // will scroll to bottom 

       if(this.InspectedSelect=='WorkedOn' && this.GovenorSelect=='Yes'){
        this.analyserlist=['Pass', 'Fail'];
      }else{
          this.analyserlist=['Pass', 'Fail', 'Stripdown'];
      }
  }

  VisualConditionClick() {
    if(this.FlueSelect=='Open Flued'){
      this.ContinuitySpillageFlag = false;
    }else{
      if (this.InspectedSelect == 'Visual') {
        this.AnalyserReading1Flag=true;
        this.SafeToUseFlag =  false;
      }else{
        this.AnalyserReading1Flag=false;
      }
    }
    this.gotoBottom();
       // will scroll to bottom
    }
   
  continuitySpillageClick() {   
    this.gotoBottom();
       // will scroll to bottom
    if (this.InspectedSelect == 'Visual') {
      this.AnalyserReading1Flag=true;
      this.SafeToUseFlag =  false;
    } else {
      this.AnalyserReading1Flag=false;
    }
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
    this.gotoBottom();
       // will scroll to bottom
  }

  
  HighInitalRatioClick() {

    let decRegex =  /^(0)+(.[0-9]{1,4})?$/; ///^(0)+0\.[0-9]{3}$/ ;
    console.log(decRegex.test(this.HighInitalRatioSelect));
    console.log(this.HighInitalRatioSelect);
    
    if(decRegex.test(this.HighInitalRatioSelect)){
    this.HighInitalCO2Flag = false;
    this.gotoBottom();
       // will scroll to bottom
    }else{
      this.presentValidationHighInitalRatioClick()
      this.HighInitalCO2Flag = true;
     
      this.gotoBottom();
       // will scroll to bottom
    }
    this.gotoBottom();
       // will scroll to bottom
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
    this.gotoBottom();
       // will scroll to bottom
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
    this.gotoBottom();
       // will scroll to bottom
  }


  LowFinalRatioClick() {
    let decRegex = /^(0)+(.[0-9]{1,4})?$/;
    
    if(decRegex.test(this.LowFinalRatioSelect)){
      this.LowFinalCO2Flag = false;
    }else{
        this.presentValidationHighInitalRatioClick();
        this.LowFinalCO2Flag = true;
    }
    this.gotoBottom();
       // will scroll to bottom
   
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
   this.gotoBottom();
       // will scroll to bottom
  }

 

  LowFinalCOppmClick() {
    let decRegex = /^[0-9]*$/;
    if(decRegex.test(this.LowFinalCOppmSelect)){
      this.SafeToUseFlag = false;
    }else{
      this.presentValidationCOppm();
      this.SafeToUseFlag = true;
    }
    this.gotoBottom();
       // will scroll to bottom
   
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
    this.gotoBottom();
       // will scroll to bottom
  }

  DefectIdentifiedAns() {
    this.GIUSPFlag= false;
      this.gotoBottom();
       // will scroll to bottom
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
      this.advicelist=['Turned off with permission, documeted and labled', 'Customer refused permission','Pass to ESP (customer refused to cap off)'];
    }else if(this.GIUSPSelect=='Immediately Dangerous'){
      this.WarningNoticeFlag= false;  
      this.advicelist=['Capped off','Pass to ESP (customer refused to cap off)'];
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
    this.SaveFlag =false;
    this.gotoBottom();
       // will scroll to bottom
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
    if(this.HighInitalCO2Flag == true || this.AnalyserReading1Select == "Stripdown" || this.InspectedSelect== "Visual"){
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
      havedata : "yes"
    };
    if(AppliancesNewDetailsList.Make == 'other'){
      AppliancesNewDetailsList.Make =  AppliancesNewDetailsList.MakeAnswer ;
      AppliancesNewDetailsList.Model = AppliancesNewDetailsList.ModelAnswer ;
    }
    //this.storage.set(this.data['JOBGUID'],AppliancesNewDetailsList);
    console.log(AppliancesNewDetailsList);
    this.apiGenerate.database.executeSql('insert into newappliance  (HaveData,AppType,Make,MakeAnswer,Model,ModelAnswer,BType,Loc,Flue,OwnedBy,Inspected,ZeroGov,OPU,OptPrs,OSD,VS,VCF,FOC,ComRead,HRatio,HCO2Val,HCOPPM,LRatio,LCO2Val,LCOPPM,STU, DefId,GIUSP,WarAdRec,RemAc,IsDelete,JOBGUID )  values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
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
        console.log('#### new appliance success '+JSON.stringify(res));this.router.navigate(['createcertificate']);
        this.storage.set(this.data['JOBGUID'],{'':''});   // clean local 

      }).catch((e)=>{  

      });
    }).catch((e)=>{
      this.apiGenerate.showToast('Error Save Appliance in device'+JSON.stringify(e),'danger');
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

  async openMakeModal() {

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
      this.MakeChange();  
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
      this.ModelChange();  
    }

  }


}
