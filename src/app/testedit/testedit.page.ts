import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DynamicFormLayout, DynamicFormModel, DynamicFormService, DynamicInputModel, DynamicSelectModel } from "@ng-dynamic-forms/core";
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import {FormGroup} from '@angular/forms';
import {MY_FORM_MODEL,AppType, BoilerType, Make, MakeAnswer, Model, ModelAnswer, Location,
  Flue, Owned, Inspected, Zero, OPU, GR, OSD , VS, VC , Spilage, CAR, HIRatio, HICO2, HICOPPM, LFRatio,LFCO2,LFCOPPM,SAFE2U,DefectI,
  GIUSP,WarnCert,RAT} from './model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-testedit',
  templateUrl: './testedit.page.html',
  styleUrls: ['./testedit.page.scss'],
})
export class TesteditPage implements OnInit {

  data: any[];
  jsonData:string='';
  formModel: DynamicFormModel = MY_FORM_MODEL  ;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout;
  decimalver=true;
  hunver=true;
  public AppList = [
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
        value: "Fire"}]


        SaveFlag=true;         


  constructor(private formService: DynamicFormService,  
    public alertController: AlertController, 
       private router:Router,    private route: ActivatedRoute, private apiGenerate:ApiService, private storage:Storage

) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('###params item: ', this.data['JOBGUID']);

        this.storage.get(this.data['JOBGUID']).then((data)=>{
          console.log("FOSDEM "+data);
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



  
  async alert0001Validation() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'value should be of format 0.0001',
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  };

  async alert100Validation() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'value should be of format 100',
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
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
  


  ngOnInit() {
   // this.formModel = this.formService.fromJSON(this.jsonData);
     
   console.log('sab '+this.jsonData);


   if(this.jsonData==''){
     

    console.log("### empty ");
    
    this.formGroup = this.formService.createFormGroup(this.formModel);
    
    AppType.options = this.AppList; 
   }else{
     
    this.formModel = this.formService.fromJSON(this.jsonData);

    this.formGroup = this.formService.createFormGroup(this.formModel);
    
    AppType.options = this.AppList; 
  
  }
    
    

  }

  reinit(){
    this.formModel = this.formService.fromJSON(this.jsonData);

    this.formGroup = this.formService.createFormGroup(this.formModel);
    
    AppType.options = this.AppList; 
  }

  onChange($event){

    console.log('',$event)


    //AppType
    if($event.model.name == "AppType"){
      console.log('Apptype',$event.group.value['AppType']);
      Make.hidden = false;   
    }


    //MakeModel
    if($event.model.name == "MakeModel"){
      console.log('MakeModel',Make.value);
      if(Make.value='Others'){
          MakeAnswer.hidden = false;
      }else{
        Model.hidden= false;
      }
    }

    //MakeAnswer
    if($event.model.name == "MakeAnswer"){
      console.log('MakeAnswer',Make.value);
      Model.hidden= false;
    }

    //Model
    if($event.model.name == "ModelModel"){
      console.log('Model',Model.value);
      if(Model.value='Others'){
        ModelAnswer.hidden = false;
         }else{

          AppType.valueChanges.subscribe((app)=>{
            if(app=="Boiler"){
              BoilerType.hidden = false;
            }else{
              Location.hidden = false;
            }
          },(err)=>{});
         
       }
    }

    //ModelAnswer
    if($event.model.name == "ModelAnswer"){
      console.log('ModelAnswer',ModelAnswer.value);
      Location.hidden = false;
    }

    //Location
    if($event.model.name == "Location"){

      console.log('Location '+Location.value);         
      AppType.valueChanges.subscribe((res)=>{  
        console.log('Apptype subscribed in loction '+res); 
        Flue.value='';        
        if(res=='Boiler'){
          Flue.options = [{
            label: "Room Sealed",
            value: "RoomSealed"
          },
          {
            label: "Open Flue",
            value: "OpenFlue"
          }
          ]

        }else{
          Flue.options = [{
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
          ] 
        }
        Flue.hidden = false;
      },(err)=>{ 
      });  

    }

    //Flue
    if($event.model.name == "Flue"){
      console.log('Flue '+Flue.value);
      Owned.hidden = false;
    }

    //Owned
    if($event.model.name == "Owned"){
      console.log('Owned ',Owned.value);
      Inspected.hidden = false;    
    }

    //Inspected
    if($event.model.name == "Inspected"){
                Zero.hidden = false;
                Flue.valueChanges.subscribe((flu)=>{
                  console.log("flu subscribed in Inspected has value: "+flu);
                  if(flu=="RoomSealed"){
                     Zero.options = [{label:'Yes',value:'Yes'},{label:'No',value:'No'}];                    
                }else{
                 Zero.options = [{label:'Yes',value:'Yes'},{label:'No',value:'No'},{label:'N/A',value:'NA'}];                
                }                   
                },(err)=>{
                  console.log("flu subscribed in Inspected has error: "+err);
                });
         
    }

    //Zero
    if($event.model.name == "Zero"){
      console.log('Zero ',$event.$event.detail.value);
      
                Inspected.valueChanges.subscribe((Ins)=>{
                  Zero.valueChanges.subscribe((Ze)=>{
                    AppType.valueChanges.subscribe((App)=>{
      //$event.$event.detail.value
                      if(Ins=='WorkedOn'){
                        console.log('worked '+Ins+' zero '+Ze+' App '+App);
                        
                        OPU.hidden =false;
                        OSD.hidden = true; 
                        if(App=='Boiler' && $event.$event.detail.value=='Yes'){
                            OPU.options = [{label:'KWH',value:'KWH'}];
                        }else{
                            OPU.options = [{label:'KWH',value:'KWH'},{label:'mBar',value:'mBar'}];
                        }
                               
                      }else{
                        // visual
                        OSD.hidden=false;
                        OSD.options= [{label:'Pass',value:'Pass'},{label:'Fail',value:'Fail'},{label:'N/A',value:'NA'}];
                        OPU.hidden= true;
                        GR.hidden=true;
                      }
          
                    },(err)=>{});
                  },(err)=>{});        
                },(err)=>{
                });
    }

    //OPU
    if($event.model.name == "OPU"){
        GR.hidden = false;
    }

    //GR
    if($event.model.name == "GR"){        
      OPU.valueChanges.subscribe((opu)=>{
        if(opu=='KWH'){
          if($event.control._parent.value.GR>70 || $event.control._parent.value.GR<0){
                this.presentkwh(); 
                OSD.hidden=true;
          }else{
            OSD.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
            this.formService.findModelById('OSD', this.formModel).hidden = false;
          }
        }else{ 
          if($event.control._parent.value.GR>17 || $event.control._parent.value.GR<0){
                this.presentMbar('0','17');
                OSD.hidden=true;
          }else{
            OSD.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
      this.formService.findModelById('OSD', this.formModel).hidden = false;
          } 
        } 
      },(err)=>{
      });
    }

     //OSD Operation of Safety Device 
    if ($event.model.name == 'OSD') {
      VS.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }, { label: 'N/A', value: 'NA' }];
      VS.hidden = false;
    }

    // VS Ventilation Satisfaction

    if ($event.model.name == 'VS') {


      Flue.valueChanges.subscribe((flu)=>{

        VC.value='';

        if(flu=='Flueless'){
          VC.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'N/A', value: 'NA' }];
        }else{
          VC.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }];
        }

      },(err)=>{});

     
      this.formService.findModelById('VC', this.formModel).hidden = false;
    }

    // VC Visual Condition
    if ($event.model.name == 'VC') {

      AppType.valueChanges.subscribe((App)=>{
        Flue.valueChanges.subscribe((splg)=>{
          console.log('vc '+App+' '+splg);

          if(App=='Boiler' || App=='Fire' || App=='WaterHeater'  ){      
            if(splg=='OpenFlue'){
              Spilage.value='';
              Spilage.options = [{label:'Pass', value:'Pass'},{label:'Fail', value:'Fail'},]
              Spilage.hidden =false;    
             // SAFE2U.hidden=false;
            }else{
              Spilage.value='';
              Spilage.options = [{label:'Pass', value:'Pass'},{label:'Fail', value:'Fail'}, {label:'N/A', value:'NA'}]
              Spilage.hidden =false; 
                   
            }
          }else{
            Spilage.value='';
            Spilage.options = [{label:'Pass', value:'Pass'},{label:'Fail', value:'Fail'}, {label:'N/A', value:'NA'}]
            Spilage.hidden =false; 
           
            ///SAFE2U.hidden=true;
          }        
  
        },(err)=>{  
       });
      },(err)=>{});

    }

    //Spilage

    if($event.model.name=='Spilage'){
      console.log('Spillage '+Spilage.value);

      Inspected.valueChanges.subscribe((Ins)=>{
        Zero.valueChanges.subscribe((Ze)=>{

          console.log("### listen Inspected and Zero "+Ins+' '+Ze);
          
          if(Ins=='WorkedOn'){
            CAR.hidden=false;
            if(Ze=='Yes'){
              CAR.value='';
              CAR.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }];
              this.formService.findModelById('CAR', this.formModel).hidden = false;
              console.log('zero chnged to yes CAR set');
            }else{
              CAR.value='';
              console.log('zero chnged to no CAR set');
              
              CAR.options = [{ label: 'Pass', value: 'Pass' }, { label: 'Fail', value: 'Fail' }, { label: 'Stripdown', value: 'Stripdown' }];
              CAR.hidden = false;
            }
            SAFE2U.hidden=true;
          }else{
            CAR.hidden=true;
            SAFE2U.value='';
            SAFE2U.options=[{label:'Yes', value:'Yes'},{label:'No', value:'No'}];
            SAFE2U.hidden=false;  
          }
        },(err)=>{})               
     },(err)=>{});    

      
      
    }

    //CAR Combustion Analuzr Reading

    if ($event.model.name == 'CAR') {

      Inspected.valueChanges.subscribe((Ins)=>{
        if(Ins=='WorkedOn'){
          HIRatio.hidden = false;
          SAFE2U.hidden=true;
        }else{
          SAFE2U.hidden=false;
          HIRatio.hidden=true;HIRatio.value='';
          HICO2.hidden=true; HICO2.value='';
          HICOPPM.hidden=true; HICOPPM.value='';
          LFRatio.hidden=true;LFRatio.value='';
          LFCO2.hidden=true;LFCO2.value='';
          LFCOPPM.hidden=true;LFCOPPM.value='';
         

        }

      },(err)=>{

      });

    }

//HIRatio, HICO2, HICOPPM, LFRatio,LFCO2,LFCOPPM,SAFE2U

    //HI Ratio

    if ($event.model.name == 'HIRatio') {

      let decRegex = /^[0](\.\d{4})$/;

      if(decRegex.test($event.control._parent.value.HIRatio)){
       
        HICO2.hidden=false;
        this.decimalver=true;

      }else{
       // this.alert0001Validation();
       this.decimalver=false;
        HICO2.hidden=true;
      }

    }

    
    //HICO2
    if ($event.model.name == 'HICO2') {

      let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

      if(decRegex.test($event.control._parent.value.HICO2)){
        this.hunver=true;

        HICOPPM.hidden=false;
      }else{
        //this.alert100Validation();
        this.hunver=false;

        HICOPPM.hidden=true;
      }

    }

    // HICOPPM,
    if ($event.model.name == 'HICOPPM') {
      let decRegex = /^[0-9]*$/;
      if(decRegex.test($event.control._parent.value.HICOPPM)){
         
        LFRatio.hidden=false;
        this.hunver=true;

      }else{
         // this.alert100Validation();
         this.hunver=false;

          LFRatio.hidden=true;
      }
    }


    //LFRatio
    if ($event.model.name == 'LFRatio') {
      let decRegex = /^[0](\.\d{4})$/;

      if(decRegex.test($event.control._parent.value.LFRatio)){
 
        LFCO2.hidden=false;
        this.decimalver=true;


      }else{
          //    this.alert0001Validation();
          this.decimalver=false;

          LFCO2.hidden=true;
      }

    }


    /// LFCO2,
    if ($event.model.name == 'LFCO2') {

      let decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;

      if(decRegex.test($event.control._parent.value.LFCO2)){
        
        LFCOPPM.hidden=false;
        this.hunver=false;

      }else{
         // this.alert100Validation();
         this.hunver=false;

          LFCOPPM.hidden=true;
      }
      
    }

    /// LFCOPPM,
    if ($event.model.name == 'LFCOPPM') {
      let decRegex = /^[0-9]*$/;

      if(decRegex.test($event.control._parent.value.LFCOPPM)){
        SAFE2U.options = [{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]
         SAFE2U.hidden=false;
         this.hunver=true;

      }else{
        //this.alert100Validation();
        this.hunver=false;

        SAFE2U.hidden=true;
      } 
    }
    

    // SAFE2U,
    if ($event.model.name == 'SAFE2U') {
      this.formService.findModelById('DefectI', this.formModel).hidden = false;
    }

    //DefectI
    if ($event.model.name == 'DefectI') {
     
      SAFE2U.valueChanges.subscribe((saf)=>{
        GIUSP.value='';
        if(saf=='Yes'){
          GIUSP.options =[{label:'Advisory',value:'Advisory'},{label:'Not Applicable',value:'NotApplicable'}]     
        }else{
          GIUSP.options =[{label:'At Risk',value:'AtRisk'},{label:'Immediately Dangerous',value:'ImmediatelyDangerous'}]    
        }
        GIUSP.hidden = false;
      },(err)=>{
      });    
    }

    //GIUSP
    if ($event.model.name == 'GIUSP') {

      if(GIUSP.value=='Advisory'|| GIUSP.value=='NotApplicable'){
    
          WarnCert.hidden = true;
          WarnCert.value='';
          RAT.hidden = false;
          SAFE2U.valueChanges.subscribe((saf)=>{

            RAT.value='';
            console.log('### saf 1 '+saf);
            
  
            if(saf=='No'){
  
              RAT.options = [{label:'Turned off with permission, documeted and labled', value:'Turnedoffwithpermissiondocumetedandlabled'},{label:'Customer refused permission', value:'Customerrefusedpermission'},{label:'Capped off', value:'Cappedoff'},{label:'Pass to ESP (customer refused to cap off)',value:'PasstoESPcustomerrefusedtocapoff'}]
  
            }else{
             
              RAT.options = [{label:'Advised Customer', value:'AdvisedCustomer'},{label:'Not Applicable', value:'NotApplicable'}]
  
            }
    
          },(err)=>{
    
          });
  

      }else{
          RAT.hidden = true;
          RAT.value='';
          WarnCert.hidden = false;
      }
    }
      //WarnCert

      if ($event.model.name == 'WarnCert') {

        RAT.hidden=false;
        SAFE2U.valueChanges.subscribe((saf)=>{

          RAT.value='';
          console.log('### saf '+saf);
          

          if(saf=='No'){

            RAT.options = [{label:'Turned off with permission, documeted and labled', value:'Turnedoffwithpermissiondocumetedandlabled'},{label:'Customer refused permission', value:'Customerrefusedpermission'},{label:'Capped off', value:'Cappedoff'},{label:'Pass to ESP (customer refused to cap off)',value:'PasstoESPcustomerrefusedtocapoff'}]

          }else{
           
            RAT.options = [{label:'Advised Customer', value:'AdvisedCustomer'},{label:'Not Applicable', value:'NotApplicable'}]

          }
  
        },(err)=>{
  
        });

      }
      

    

    //Remedial Action Taken (RAT)
    if ($event.model.name == 'RAT') {

      this.SaveFlag = false;
      // this.formService.findModelById('RAT',this.formModel).hidden = false;  
      // this.SaveFlag=false

    }


  }

  InsertApplianceNew(){
    this.storage.set(this.data['JOBGUID'], JSON.stringify(this.formModel));
    this.apiGenerate.showToast('Changes Saved.','danger')
  }


}
