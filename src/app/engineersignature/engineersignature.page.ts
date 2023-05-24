import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { from } from 'rxjs';
import SignaturePad from 'signature_pad';
import { ApiService } from '../api.service';
import {Storage} from '@ionic/storage';
import {HttpParams} from '@angular/common/http';
import { HashTable } from 'angular-hashtable';

@Component({
  selector: 'app-engineersignature',
  templateUrl: './engineersignature.page.html',
  styleUrls: ['./engineersignature.page.scss'],
})
export class EngineersignaturePage implements OnInit {
 
 
  
  set = new Set();
  prg = new Set();

  has = new HashTable<String, String[]>();
  key: string;
 
  
  
  EngsignaturePad:SignaturePad;
  sigImage: string;
  constructor(private storage:Storage, private auth:ApiService,private elementRef: ElementRef ) { }

  ngOnInit() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    this.EngsignaturePad = new SignaturePad(canvas);
    this.auth.database.executeSql('select Sign from EngInfo', []).then(res=>{
      this.EngsignaturePad.fromDataURL(res.rows.item(0)['Sign'],{
        width: canvas.width,
        height: canvas.height
      });
    });
   }

   isCanvasBlank(){
    if (this.EngsignaturePad) {
      return this.EngsignaturePad.isEmpty() ? true : false;
    }
   }

   
  clear(){
    this.EngsignaturePad.clear();
  }

  async save(){
    this.sigImage = this.EngsignaturePad.toDataURL();
   
    let a = await this.auth.checkNetwork();
    if (a.connected) {
      this.auth.presentLoading('Please wait while we Uploading your Signature');
      this.storage.get('enggid').then((daa)=>{        
        let  httpParams = new HttpParams().set('SigImage',this.sigImage.split(',')[1]).set('EngId',daa);
        this.auth.httpSend('Service_EngSignatureUpload',httpParams,'post').subscribe((res)=>{
            console.log('Signature Updated');
            this.auth.dismissLoading();
            this.auth.showToast('Success! Engineer Signature has been updated','success');            
        },
        (error)=>{
          console.log('errror');
          this.auth.dismissLoading();
        });
       }).catch((e)=>{this.auth.dismissLoading();});;
    } else {
      //this.auth.showToast("Internet not connected. There was a problem with your network connection.",'danger');
    }     

    this.auth.updateEngInfo("Sign",this.sigImage);
   
  }


}
