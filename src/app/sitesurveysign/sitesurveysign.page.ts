import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { ApiService } from '../api.service';
import {Storage} from '@ionic/storage';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-sitesurveysign',
  templateUrl: './sitesurveysign.page.html',
  styleUrls: ['./sitesurveysign.page.scss'],
})
export class SitesurveysignPage implements OnInit {

  EngsignaturePad1: SignaturePad;
  EngsignaturePad2: SignaturePad;
  data = [];

  // ngmodels
  describeIssue:string='';
  SurveyorName:string='';
  CustomerName:string='';
  hideflag : boolean = true ;

  constructor(private storage:Storage,private elementRef: ElementRef, private route: ActivatedRoute, private router: Router, private auth:ApiService) { }

  ngOnInit() {
    const canvas1: any = this.elementRef.nativeElement.querySelector('#Engsigcanvas1');
    const canvas2: any = this.elementRef.nativeElement.querySelector('#Engsigcanvas2');
    this.EngsignaturePad1 = new SignaturePad(canvas1);
    this.EngsignaturePad2 = new SignaturePad(canvas2);
    this.EngsignaturePad1.clear();
    this.EngsignaturePad2.clear();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.storage.get(this.data['JOBGUID']).then((res)=>{
          this.CustomerName = res['CustomerName'];
          this.SurveyorName = res['SurveyorName'];
          this.describeIssue = res['describeIssue']; 
          this.auth.database.executeSql('select * from sitesurveysign where JOBGUID=?',[this.data['JOBGUID']]).then((res)=>{
            this.describeIssue= res.rows.item(0)['describeIssue'];
            this.SurveyorName= res.rows.item(0)['surveyorname'];
            this.CustomerName= res.rows.item(0)['customername'];
            if(JSON.stringify(res.rows.item(0)['surveyorsign']) != "null"){
              this.EngsignaturePad1.fromDataURL('data:image/jpeg;base64,'+res.rows.item(0)['surveyorsign'],{
                width: canvas1.width,
                height: canvas1.height
              });
              this.EngsignaturePad2.fromDataURL('data:image/jpeg;base64,'+res.rows.item(0)['customersign'],{
                width: canvas2.width,
                height: canvas2.height
              });             
            }
          }).catch((e)=>{
          });                      
        }).catch((e)=>{
        });
      }
    });
    
  }

  ionViewWillLeave(){
    const signdata={
      CustomerName: this.CustomerName,
      SurveyorName: this.SurveyorName,
      describeIssue: this.describeIssue
    }
    this.storage.set(this.data['JOBGUID'],signdata);
  }

  save1() {
    let image = this.EngsignaturePad1.toDataURL();
    this.auth.database.executeSql('update sitesurveysign set surveyorsign=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
      // this.auth.showToast('Surveyor Signature has been Saved successfully.','success');  
    }).catch((e) => {
      this.auth.showToast('Signature Saved Error.'+JSON.stringify(e),'danger');

    });
  }

  save2() {
    let image = this.EngsignaturePad2.toDataURL();
    this.auth.database.executeSql('update sitesurveysign set customersign=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
  
      // this.auth.showToast('Customer Signature has been saved successfully.','success');
    }).catch((e) => {
    
      this.auth.showToast('Signature Saved Error.'+JSON.stringify(e),'danger');
    });
  }
  
  clear1() {
    this.EngsignaturePad1.clear();
  }

  clear2() {
    this.EngsignaturePad2.clear();
  }

  isCanvasBlank1() {
    return this.EngsignaturePad1.isEmpty();
  }

  isCanvasBlank2() {
    return this.EngsignaturePad2.isEmpty();
  }

  SiteSurveySignature(){
    if(this.describeIssue=='' || this.describeIssue==undefined){ this.auth.showToast('Describe Issue cannot be empty','danger')}else{
      if(this.EngsignaturePad1.isEmpty()){this.auth.showToast('Surveyor signature cannot be empty','danger')}else{
        if(this.EngsignaturePad2.isEmpty()){this.auth.showToast('Customer signature cannot be empty','danger')}else{
          if(this.SurveyorName=='' || this.SurveyorName==undefined){this.auth.showToast('Surveyor name cannot be empty','danger')}else{
            if(this.CustomerName=='' || this.CustomerName==undefined){this.auth.showToast('Customer name cannot be empty','danger')}else{         
                this.save1();
                this.save2();
                this.auth.database.executeSql('update sitesurveysign set describeIssue=?, customername=? , surveyorname=?, HaveData=?  where JOBGUID=?',[this.describeIssue, this.CustomerName, this.SurveyorName, 'yes', this.data['JOBGUID']]).then((res)=>{
                this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                 this.hideflag = false ;               
              }).catch((e)=>{  this.auth.showToast("Error."+e,'danger') });
            }).catch((e)=>{
              this.auth.showToast("Error."+e,'danger')
            });
            }
          }
        }
      }
    }
  }


  notSpokenToCustomer(){
    this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?',[this.data['CLAIMRef'], 'NotSpokenToCustomer', this.data['JOBGUID']]).then((res)=>{
      this.router.navigate(['details']);
      this.auth.showToast("Success! Job have been completed successfully.",'success');
  }).catch((e)=>{
    this.auth.showToast("Error. inserting data ",'danger');
  });

  }

  customerNotInterested(){
    this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?',[this.data['CLAIMRef'], 'CustomerNotInterested', this.data['JOBGUID']]).then((res)=>{
      this.router.navigate(['details']);
      this.auth.showToast("Success! Job have been completed successfully.",'success');
  }).catch((e)=>{
    this.auth.showToast("Error. inserting data ",'danger');
  });

  }

  customerInterestedCallBack(){
    this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?',[this.data['CLAIMRef'], 'CustomerInterestedCallBack', this.data['JOBGUID']]).then((res)=>{
      this.router.navigate(['details']);
      this.auth.showToast("Success! Job have been completed successfully.",'success');
  }).catch((e)=>{
    this.auth.showToast("Error. inserting data ",'danger');
  });
  }

  customerInterestedHotKeyLive(){
    this.auth.database.executeSql('update sitesurveysign set CLAIMRef=?, ButtonClicked=?  where JOBGUID=?',[this.data['CLAIMRef'], 'CustomerInterestedHotKeyLive', this.data['JOBGUID']]).then((res)=>{
      this.router.navigate(['details']);
      this.auth.showToast("Success! Job have been completed successfully.",'success');
  }).catch((e)=>{
    this.auth.showToast("Error. inserting data ",'danger');
  });
  }

}
