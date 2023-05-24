import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';   
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sitesurvey',
  templateUrl: './sitesurvey.page.html',
  styleUrls: ['./sitesurvey.page.scss'],
})
export class SitesurveyPage implements OnInit {

  boilers=[];

  locations=[
    "Attic",
    "Airing Cupboard",
    "BathRoom",
    "BedRoom",
    "Garage",
    "Kitchen",
    "Living Room",
    "Loft",
    "Landing",
    "Utility Room",
    "Cellar"
  ];

  descriptions=[
   
    "Combi to Combi",
    "Combi to System",
    "Gravity to Fully Pumped (SYSTEM ONLY)",
    "Gravity to Fully Pumped (HEAT ONLY)",
    "Heat Only to System (Open to sealed)",
    "Heat only to Heat only (swap)",
    "System to System (swap)",
  ];
  data=[];


  // Flags

  GasRunNewFlag=true;
  CondensateGasNewFlag=true;
  NewBoilerLocationDescFlag=false;

  // ngModels

  siteSurveyboiler='';
  siteSurveyboilerdescription='';
  locationboiler='';
  NewBoilerLocationSelect='';
  NewBoilerLocationDesc='';
  FlueSelect='';
  FlueextensionsSelect='';
  StandOffKitSelect='';
  FourtyfivedegreeelbowSelect='';
  NinetydegreeelbowSelect='';
  trvs= "";
  StandingInletPressue='';
  SiteSurveyReason='';
  SiteSurveyProductType=''; 
  GasRunSelect='';
  GasRunNewDetails='';
  CondensateGasSelect='';
  CondensateGasNewDetails='';
  WorkingInletPressue='';
  boilerFlag: boolean;
  boilerDescFlag: boolean;
  locationboilerFlag: boolean;
  NewBoilerLocationFlag: boolean;
  flueflag: boolean;
  flueExtFlag: boolean;
  standOffKitFlag: boolean;
  FourtyfivedegreeelbowFlag: boolean;
  NinetydegreeelbowFlag: boolean;
  StandingInletPressueFlag: boolean;
  SSReasonFlag: boolean;
  SSPTypeFlag: boolean;
  gasRunFlag: boolean;
  CondensateFlag: boolean;
  gasRunDescFlag: boolean;
  wipFlag: boolean;
  CondensateDescFlag: boolean;
  NewBoilerLocationDescFFlag: boolean;

  // makeList: Array<any> = [];
  // modelList: any[];

  MakeSelect: any;
  MakeAnswerFlag: boolean;
  ModelFlag: boolean;
  list: any;
  MakeAnswerSelect: any;
  ModelSelect: string;
  ApplianceTypeSelect: string;
  keyboard: any;
  BoilerTypeFlag: boolean;
  LocationFlag: boolean;
  isSiteSurveyboilerOther: boolean;
  


  constructor(private router: Router, private storage: Storage, public route: ActivatedRoute, private auth:ApiService, public modalCtrl : ModalController) { }

  ngOnInit() {
    this.getData();
    this.storage.get("boilers").then((res:any[])=>{
      this.boilers = res;      
    })

    // this.auth.database.executeSql('SELECT DISTINCT make FROM makemodel',[]).then(res=>{
    //   this.makeList = [];
    //   for (var i = 0; i < res.rows.length; i++) {
    //     this.makeList.push(res.rows.item(i)['make']);    
    //   }      
    // });  
  }

  ionViewWillLeave(){
    const siteSurvey = {

      siteSurveyboiler:this.siteSurveyboiler,
      siteSurveyboilerdescription:this.siteSurveyboilerdescription,
      locationboiler:this.locationboiler,
      NewBoilerLocationSelect:this.NewBoilerLocationSelect,
      FlueSelect:this.FlueSelect,
      FlueextensionsSelect:this.FlueextensionsSelect,
      StandOffKitSelect: this.StandOffKitSelect,
      FourtyfivedegreeelbowSelect:  this.FourtyfivedegreeelbowSelect,
      NinetydegreeelbowSelect: this.NinetydegreeelbowSelect ,
      GasRunSelect: this.GasRunSelect ,
      GasRunNewDetails: this.GasRunNewDetails ,
      CondensateGasSelect: this.CondensateGasSelect,
      CondensateGasNewDetails: this.CondensateGasNewDetails,
      StandingInletPressue:this.StandingInletPressue,
      WorkingInletPressue:this.WorkingInletPressue

    }

    this.storage.set(this.data['JOBGUID'],siteSurvey);

    
  }

  getData(){
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        console.log("jobguid"+ this.data['JOBGUID']);
        
          this.auth.database.executeSql('select * from sitesurvey where JOBGUID=?',[this.data['JOBGUID']])
          .then((res)=>{
              console.log(JSON.stringify(res.rows.item(0)));
              console.log(JSON.stringify(res.rows.item(0)['locationboiler']));
              
            
              this.MakeSelect = res.rows.item(0)['siteSurveyboiler'];
              this.ModelSelect = res.rows.item(0)['siteSurveyboiler'];
              this.siteSurveyboiler= res.rows.item(0)['siteSurveyboiler'];
              // this.boilers.push(res.rows.item(0)['siteSurveyboiler']);
              this.siteSurveyboilerdescription=res.rows.item(0)['siteSurveyboilerdescription'];
              this.locationboiler = res.rows.item(0)['locationboiler'];
              this.NewBoilerLocationSelect =res.rows.item(0)['NewBoilerLocationSelect'];
              this.NewBoilerLocationDesc = res.rows.item(0)['NewBoilerLocationDesc'];
              this.FlueSelect=res.rows.item(0)['FlueSelect'];
              this.FlueextensionsSelect=res.rows.item(0)['FlueextensionsSelect'];
              this.StandOffKitSelect=res.rows.item(0)['StandOffKitSelect'];
              this.FourtyfivedegreeelbowSelect=res.rows.item(0)['FourtyfivedegreeelbowSelect'];
              this.NinetydegreeelbowSelect=res.rows.item(0)['NinetydegreeelbowSelect'];
              this.SiteSurveyProductType=res.rows.item(0)['SiteSurveyProductType'];
              this.SiteSurveyReason=res.rows.item(0)['SiteSurveyReason'];
              this.GasRunSelect=res.rows.item(0)['GasRunSelect'];
              this.GasRunNewDetails=res.rows.item(0)['GasRunNewDetails'];
              this.CondensateGasSelect=res.rows.item(0)['CondensateGasSelect'];
              this.CondensateGasNewDetails=res.rows.item(0)['CondensateGasNewDetails'];
              this.StandingInletPressue=res.rows.item(0)['StandingInletPressue'];
              this.WorkingInletPressue=res.rows.item(0)['WorkingInletPressue'];
              this.trvs = res.rows.item(0)['trvs']

              if(this.GasRunSelect=="New"){

                this.GasRunNewFlag=false;
            
    
              }else{
    
                this.GasRunNewFlag=true;
    
              }
    
              if(this.CondensateGasSelect=="New"){
    
                this.CondensateGasNewFlag=false;
    
              }else{
                this.CondensateGasNewFlag=true; 
              }
          })
          .catch((e)=>{console.log('ERROR getting data from sitesurvey table'+JSON.stringify(e));
          });
      }
    }
    );



  
  }




  NewBoilerLocationClick(){
    this.boilerFlag=false;
    if(this.siteSurveyboiler == 'other') this.isSiteSurveyboilerOther = true ;
  }
  siteSurveyboilerdescriptionClick(){
    this.boilerDescFlag = false;
  }
  locationboilerClick(){
    this.locationboilerFlag=false;
  }
  NewBoilerLocationExistingClick(){
    this.NewBoilerLocationFlag =false;
    if(this.NewBoilerLocationSelect == "New"){
      this.NewBoilerLocationDescFlag = true ;
    }else{
      this.NewBoilerLocationDescFlag = false ;
    }
  }

  flueClick(){
    this.flueflag=false;
  }

  flueExtClick(){
    this.flueExtFlag=false;
  }

  standOffKitClick(){
    this.standOffKitFlag = false;
  }
  degree45elbowClick(){
    this.FourtyfivedegreeelbowFlag =false;
  }
  degree90elbowClick(){
    this.NinetydegreeelbowFlag =false;
  }

  standingInletPressueClick(){
    this.StandingInletPressueFlag = false;
  }

  ssReasonClick(){
    this.SSReasonFlag = false;
  }

  ssPTypeClick(){
    this.SSPTypeFlag = false;
  }

  GasRunClick(){
    this.gasRunFlag=false;
    if(this.GasRunSelect=="New"){
      this.GasRunNewFlag=false;

    }else{
      this.GasRunNewFlag=true;
    }
  }

  gasRunDescClick(){
    this.gasRunDescFlag = false;
  }


  CondensateGasClick(){
    this.CondensateFlag = false
    this.CondensateGasNewFlag=false;

    if(this.CondensateGasSelect=="New"){
      this.CondensateGasNewFlag=false;

    }else{
      this.CondensateGasNewFlag=true;
    }

  }

  condensateDescClick(){
    this.CondensateDescFlag = false;
  }


  wipClick(){
    this.wipFlag=false;
  }

  NewBoilerLocationDescClick(){
    this.NewBoilerLocationDescFFlag = false;
  }



  ValidateBInsForm(){
    if(this.FlueSelect == 'Vertical'){
      this.storage.set('fluinloft' , "false")
    }else{
      this.storage.set('fluinloft' , "true")
    }
    if(this.siteSurveyboiler==''|| this.siteSurveyboiler==undefined){
      this.auth.showToast('Please select a Boiler','danger');
      this.boilerFlag = true;
      this.auth.scrollToId("Boiler");
    }else{
      if(this.siteSurveyboilerdescription=='' ||  this.siteSurveyboilerdescription==undefined){
        this.auth.showToast('Please select Describe Boiler','danger');
        this.boilerDescFlag = true;
        this.auth.scrollToId("DBoiler");
      }else{
        if(this.locationboiler=='' ||  this.locationboiler==undefined){
          this.auth.showToast('Please choose a location','danger');
          this.locationboilerFlag = true;
          this.auth.scrollToId("LBoiler");
      }else{
          if(this.NewBoilerLocationSelect=='' ||  this.NewBoilerLocationSelect==undefined){
            this.auth.showToast('Please choose a boiler location','danger');
            this.NewBoilerLocationFlag = true;
            this.auth.scrollToId("NBoilerL");
          } else{
            if((this.NewBoilerLocationDesc==''  || this.NewBoilerLocationDesc==undefined) && this.NewBoilerLocationSelect=="New"){
              this.auth.showToast('Please Enter boiler location Desc','danger');
              this.NewBoilerLocationDescFFlag = true;
              this.auth.scrollToId("NewBoilerLocationDesc");
            }else{
            if(this.FlueSelect==''  || this.FlueSelect==undefined){
              this.auth.showToast('Please choose a Flue','danger');
              this.flueflag = true;
              this.auth.scrollToId("Flue");
            }else{
              if(this.FlueextensionsSelect=='' ||  this.FlueextensionsSelect==undefined){
                this.auth.showToast('Please choose a Flue Extension','danger');
                this.flueExtFlag = true;
                this.auth.scrollToId("FlueExt");
            }else{
                if(this.StandOffKitSelect=='' ||   this.StandOffKitSelect==undefined){
                  this.auth.showToast('Please choose a Standoffkit','danger');
                  this.standOffKitFlag = true;
                  this.auth.scrollToId("StandOffKit");
                }else{
                  if(this.FourtyfivedegreeelbowSelect==''  || this.FourtyfivedegreeelbowSelect==undefined){
                    this.auth.showToast('Please choose a 45 degree Bow','danger');
                    this.FourtyfivedegreeelbowFlag = true;
                    this.auth.scrollToId("degree45elbow");
                  }else{
                    if(this.NinetydegreeelbowSelect=='' ||  this.NinetydegreeelbowSelect==undefined){
                      this.auth.showToast('Please choose a 90 degree Bow','danger');
                      this.NinetydegreeelbowFlag = true;
                      this.auth.scrollToId("degree90elbow");

                    }else{
                      if(this.StandingInletPressue=='' || this.StandingInletPressue==undefined){
                        this.auth.showToast('Please choose a Working Pressure @ meter','danger');
                        this.StandingInletPressueFlag= true;
                        this.auth.scrollToId("StandingInletPressue");
                      }else{
                        if(this.SiteSurveyReason=='' || this.SiteSurveyReason==undefined){
                          this.auth.showToast('Please choose a Site Survey Reason','danger');
                          this.SSReasonFlag = true;
                          this.auth.scrollToId("SSReason");
                        }else{
                          if(this.SiteSurveyProductType=='' || this.SiteSurveyProductType==undefined){
                            this.auth.showToast('Please choose a Site Survey Product Type','danger');
                            this.SSPTypeFlag = true;
                            this.auth.scrollToId("SSPType");
                          }else{
                            if(this.GasRunSelect=='' || this.GasRunSelect==undefined){
                              this.auth.showToast('Please  choose a Gas Run ','danger');
                              this.gasRunFlag = true;
                              this.auth.scrollToId("gasRun");
                            }else{
                              if((this.GasRunNewDetails=='' ||  this.GasRunNewDetails==undefined) && this.GasRunSelect=="New"){
                                this.auth.showToast('Please enter  Gas run','danger');
                                this.gasRunDescFlag = true;
                                this.auth.scrollToId("gasRunDesc");
                              }else{
                                if(this.CondensateGasSelect=='' || this.CondensateGasSelect==undefined){
                                  this.auth.showToast('Please  choose Condensate Gas Run','danger');
                                  this.CondensateFlag = true;
                                  this.auth.scrollToId("Condensate");
                                  
                                }else{
                                  if((this.CondensateGasNewDetails=='' ||  this.CondensateGasNewDetails==undefined)&& this.CondensateGasSelect=="New" ){
                                    this.auth.showToast('Please enter a Condense Gas Run','danger');
                                    this.CondensateDescFlag = true;
                                    this.auth.scrollToId("CondensateDesc")
                                  }else{
                                    if(this.WorkingInletPressue=='' || this.WorkingInletPressue==undefined){
                                      this.auth.showToast('Please choose a WorkingInletPressue @ Boiler','danger');
                                      this.wipFlag = true;
                                      this.auth.scrollToId("wip");
                                    }else{                          
                                        this.auth.database.executeSql('update sitesurvey set HaveData=?, siteSurveyboiler=?, siteSurveyboilerdescription=?, locationboiler=?,  NewBoilerLocationSelect=?, NewBoilerLocationDesc=?, FlueSelect=?, FlueextensionsSelect=?,StandOffKitSelect=?, FourtyfivedegreeelbowSelect=?, NinetydegreeelbowSelect=?, StandingInletPressue=?, SiteSurveyReason=?, SiteSurveyProductType=?,  GasRunSelect=?,  GasRunNewDetails=?,  CondensateGasSelect=?,  CondensateGasNewDetails=?,   WorkingInletPressue=?, trvs=? where JOBGUID=?',
                                        ['yes',this.siteSurveyboiler, this.siteSurveyboilerdescription, this.locationboiler,  this.NewBoilerLocationSelect, this.NewBoilerLocationDesc, this.FlueSelect, this.FlueextensionsSelect,this.StandOffKitSelect, this.FourtyfivedegreeelbowSelect, this.NinetydegreeelbowSelect, this.StandingInletPressue, this.SiteSurveyReason, this.SiteSurveyProductType, this.GasRunSelect,  this.GasRunNewDetails,  this.CondensateGasSelect,  this.CondensateGasNewDetails,   this.WorkingInletPressue, this.trvs, this.data['JOBGUID']]).then((res)=>{
                                          console.log('update site survey success ');                            
                                          const navigationExtras: NavigationExtras = {
                                            state:{
                                              data:this.data,
                                            }
                                          };
                                      
                                          this.router.navigate(['sitesurveypics'], navigationExtras);
                                          
                                        }).catch((e)=>{                             
                                          console.log("error update site survey");                            
                                        });
                                      }
                                    }                        
                                  }
                                }   
                              }                         
                            }
                          }  
                        }  
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }    
    }
  }


  
  // MakeChange() {
  //   //getting model of selected make
  //   this.modelList= [];
  //   this.auth.database.executeSql('SELECT DISTINCT model FROM makemodel where make = ?',[this.MakeSelect]).then(res=>{
  //     for (var i = 0; i < res.rows.length; i++) {
  //       this.modelList.push(res.rows.item(i)['model']);    
  //     }      
  //   });   
  //   //end     

  //   this.siteSurveyboiler = this.MakeSelect;
  // }

  // AnswerMakeDone() {
  //   this.MakeSelect = this.MakeAnswerSelect;
  //     this.MakeAnswerFlag = false;
  //     this.keyboard.hide();
  // }

  // ModelChange() {
  //   this.siteSurveyboiler = this.siteSurveyboiler+" "+this.ModelSelect
  // }


  // AnswerModelDone() {
  //     this.ModelSelect = this.MakeAnswerSelect;
  //     this.keyboard.hide();
  // }

  // async openMakeModal() {

  //   const modal = await this.modalCtrl.create({
  //     component: ModalExampleComponent,
  //     componentProps : {
  //       data : this.makeList,
  //       msg : "Boiler Make"
  //     }
  //   });
  //   modal.present();
  //   const { data, role } = await modal.onWillDismiss()

  //   if (role === 'confirm') {
  //     this.MakeSelect = data;
  //     console.log("make name is "+this.MakeSelect);    
  //     this.MakeChange();  
  //   }

  // }

  // async openModalModal() {

  //   const modal = await this.modalCtrl.create({
  //     component: ModalExampleComponent,
  //     componentProps : {
  //       data : this.modelList,
  //       msg : "Boiler Model"
  //     }
  //   });
  //   modal.present();
  //   const { data, role } = await modal.onWillDismiss()

  //   if (role === 'confirm') {
  //     this.ModelSelect = data;
  //     console.log("model name is "+this.MakeSelect); 
  //     this.ModelChange();     
  //   }

  // }
}
