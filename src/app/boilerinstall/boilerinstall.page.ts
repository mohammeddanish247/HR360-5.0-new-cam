import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import {ApiService} from '../api.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-boilerinstall',
  templateUrl: './boilerinstall.page.html',
  styleUrls: ['./boilerinstall.page.scss'],
})
export class BoilerinstallPage implements OnInit {

///// boilerinstallation
  NewBoilerLocationSelect:string='';
  BoilerNewDetails:string='';
  FlueSelect:string='';
  FlueextensionsSelect:string='';
  StandOffKitSelect:string='';
  FourtyfivedegreeelbowSelect:string='';
  NinetydegreeelbowSelect:string='';
  GasRunSelect:string='';
  GasRunNewDetails:string='';
  CondensateGasSelect:string='';
  CondensateGasNewDetails:string='';

  BoilerNew:boolean;
  GasRunNew:boolean;
  CondensateGasNew:boolean;

  data: any[];

  constructor(private router: Router,private route:ActivatedRoute, private auth:ApiService, private storage:Storage) { }

  ngOnInit() {
    this.BoilerNew = true;
    this.GasRunNew = true;
    this.CondensateGasNew = true;
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.auth.getLocation();  
        this.auth.database.executeSql('select * from boilerinstallation where JOBGUID=?',[this.data['JOBGUID']])
        .then((res)=>{
          console.log('RESPONSE'+JSON.stringify(res.rows.item(0)['BLocation'])+" All Data"+JSON.stringify(res));
           this.NewBoilerLocationSelect =res.rows.item(0)['BLocation'];
          // this.NewBoilerLocationClick();
           this.BoilerNewDetails =res.rows.item(0)['BLocation_Desc'];
           this.FlueSelect =res.rows.item(0)['BFlue'];
           this.FlueextensionsSelect = res.rows.item(0)['FlueExtension'];
           this.StandOffKitSelect = res.rows.item(0)['StandOffKit'];
           this.FourtyfivedegreeelbowSelect = res.rows.item(0)['D45Elbow'];
           this.NinetydegreeelbowSelect = res.rows.item(0)['D90Elbow'];
           this.GasRunSelect = res.rows.item(0)['GasRun'];
           this.GasRunNewDetails = res.rows.item(0)['GasRun_Desc'];
           this.CondensateGasSelect = res.rows.item(0)['CGasRun'];
           this.CondensateGasNewDetails = res.rows.item(0)['CGasRun_Desc'];
        })
        .catch((e)=>{console.log('ERROR getting data from boilerinstallation table'+JSON.stringify(e));
        });

      }
    });

  }

  NewBoilerLocationClick(){
    if(this.NewBoilerLocationSelect == 'New'){

      this.BoilerNew = false;


    }else{
    this.BoilerNew = true;
    }
    
  }

  GasRunClick(){
    if(this.GasRunSelect == 'New'){

      this.GasRunNew = false;


    }else{
    this.GasRunNew = true;
    }

  }

  CondensateGasClick(){
    if(this.CondensateGasSelect == 'New'){

      this.CondensateGasNew = false;


    }else{
    this.CondensateGasNew = true;
    }
  }




  ValidateBInsForm(){

    if(this.FlueSelect == 'Vertical'){
      this.storage.set('fluinloft_B' , "false")
    }else{
      this.storage.set('fluinloft_B' , "true")
    }
    if(this.NewBoilerLocationSelect=='' || this.NewBoilerLocationSelect==null){

        this.auth.showToast('New Boiler Location can not be empty.','danger')
      
    }else{
      if(this.FlueSelect==''|| this.FlueSelect==null){
        this.auth.showToast('FlueSelect Location can not be empty.','danger')

      }else{

          if(this.FlueextensionsSelect==''|| this.FlueextensionsSelect==null){
            this.auth.showToast('FlueextensionsSelect Location can not be empty.','danger')

          }else{

              if(this.StandOffKitSelect==''|| this.StandOffKitSelect==null){

                this.auth.showToast('StandOffKitSelect Location can not be empty.','danger');

              }else{

                if(this.FourtyfivedegreeelbowSelect==''|| this.FourtyfivedegreeelbowSelect==null){

                  this.auth.showToast('Fourtyfivedegreeelbow  can not be empty.','danger');

                }else{

                  if(this.NinetydegreeelbowSelect==''|| this.NinetydegreeelbowSelect==null){
                    this.auth.showToast('NinetydegreeelbowSelect  can not be empty.','danger');
                  }else{

                    if(this.GasRunSelect==''|| this.GasRunSelect==null){
                      this.auth.showToast('GasRunSelect  can not be empty.','danger');
                    }else{
                        if(this.CondensateGasSelect==''|| this.CondensateGasSelect==null){
                          this.auth.showToast('CondensateGasSelect  can not be empty.','danger');
                        }else{                                                    
                            this.auth.database.executeSql('update boilerinstallation set BLocation=?, BLocation_Desc=?,BFlue=?,FlueExtension=?,StandOffKit=?,D45Elbow=?,D90Elbow=?,GasRun=?,GasRun_Desc=?,CGasRun=?,CGasRun_Desc=?,ActionDt=?,Latitude=?,Longitude=? where JOBGUID=?',
                            [this.NewBoilerLocationSelect,this.BoilerNewDetails, this.FlueSelect, this.FlueextensionsSelect, this.StandOffKitSelect, this.FourtyfivedegreeelbowSelect, this.NinetydegreeelbowSelect,this.GasRunSelect, this.GasRunNewDetails, this.CondensateGasSelect,this.CondensateGasNewDetails,this.auth.getdateformatV2(),this.auth.lat,this.auth.long,this.data['JOBGUID']])
                            .then(
                              (res)=>{
                               this.auth.database.executeSql("update  boilerinstallation set  HaveData=? where JOBGUID=? ",[ 'yes', this.data['JOBGUID']]).then((res)=>{
                                const navigationExtras: NavigationExtras = {
                                  state: {
                                  data: this.data,
                                        }
                                 };
                                this.router.navigate(['boilerinstallnext'],navigationExtras);
                              }).catch((e)=>{
                                  console.log('cathc status boiler install '+JSON.stringify(e));                                
                              });                                               
                              }
                            )
                            .catch((e)=>{console.log('ERROR update boilerinstall table');this.auth.dismissLoading();
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
