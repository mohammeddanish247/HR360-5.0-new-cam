import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
import { interval, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-createcertificate',
  templateUrl: './createcertificate.page.html',
  styleUrls: ['./createcertificate.page.scss'],
})
export class CreatecertificatePage implements OnInit, OnDestroy {
  private updateSubscription: Subscription;
  data:any[];
  public addedApplainces=  [];
  hideNewApplianceBtn=false;
  NextButton = true;

  constructor(public auth:ApiService,public router: Router, 
    public route: ActivatedRoute,
    public alertCtrl : AlertController) { 
      
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getdata();
    this.updateSubscription = interval(2000).subscribe(
      (val) => {this.getapplianceList()});
  }

  getdata(){
    this.route.params.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        console.log('## data createcertificate '+this.data['JOBGUID']);
        this.getapplianceList();
      }
    });
  }

  getapplianceList() {
    // this.addedApplainces = [];
    this.auth.database.executeSql('select * from newappliance where JOBGUID=?',[this.data['JOBGUID']])
    .then((res)=>{
      console.log('### NEW APPp '+' '+' '+JSON.stringify(res.rows.length));    
        res.rows.length >= 1 ? this.NextButton = false : this.NextButton = true;
        for(let i=0; i<parseInt(JSON.stringify(res.rows.length)); i++)
        {
          if(parseInt(JSON.stringify(res.rows.length))>=4){
            this.hideNewApplianceBtn=true;
          }
          if( res.rows.item(i)['MakeAnswer']=='' || 
          res.rows.item(i)['MakeAnswer']==null || 
          res.rows.item(i)['MakeAnswer']==undefined ){
            this.addedApplainces[i] = {
              name : res.rows.item(i)['Make'],
              no : i+1,
              sno : res.rows.item(i)['SerialNo']
            };
          }else{
            this.addedApplainces[i] = {
              name : res.rows.item(i)['MakeAnswer'],
              no : i+1,
              sno : res.rows.item(i)['SerialNo']
            };
          }
        } 

    }).catch((e)=>{
      console.log('### NEW APP ERROR '+JSON.stringify(e));          
    });
  }


  applianceDetailsClick(){
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    this.router.navigate(['appliancedetails'], navigationExtras);  
    this.updateSubscription.unsubscribe();
  }

  applianceNewClick(){
    const navigationExtras: NavigationExtras = {
      state: {
      data: this.data,
            }
     };
    //this.router.navigate(['newappliance'],navigationExtras);
    this.router.navigate(['newappliance'],navigationExtras);
  }

  appliancedataUpdate(name:any, sno:any){

    const navigationExtras: NavigationExtras = {
      state: {
      data: {'JOBGUID':this.data['JOBGUID'],'AppName':name, 'id':sno},
            }
     };
    //this.router.navigate(['editappliance'],navigationExtras);
    this.router.navigate(['nwapp'],navigationExtras);        
  }

  deleteAppliance(sno:any, no){
    this.auth.database.executeSql('delete from newappliance where SerialNo=?',[sno]).then(res=>{
      // this.getapplianceList();
      this.addedApplainces = this.addedApplainces.filter((item=> item.no !== no));
      this.addedApplainces.length<1 ? this.NextButton = true : this.NextButton = false;
    })
  }

}


 