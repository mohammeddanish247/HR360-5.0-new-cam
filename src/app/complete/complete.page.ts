import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ApiService } from '../api.service';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

///////////////////completed

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
})
export class CompletePage implements OnInit {

  options: ImageOptions;
  base64:string='';
  updatePicture :any='';
  jobOutCome : string='';
  data:any[];

  constructor(private router:Router, private route:ActivatedRoute, private auth:ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data; 
        this.auth.getLocation();  
        // this.getdata();  
      }
    });
  }

  getdata() {
    this.auth.database.executeSql('select * from abandon where JOBGUID=?',[this.data['JOBGUID']])
    .then((res)=>{
        let f : NgForm;
        this.jobOutCome = res.rows.item(0)['OUTCOME'];
        f.value.additional = res.rows.item(0)['JOBNOTE'];
        this.base64 = res.rows.item(0)['FILEBASE'];
   });
  }

  radiogroupChange(event){
    console.log(' rg change '+event.detail.value);
    this.jobOutCome = event.detail.value;
}

  openCamera(){
    this.options = {
      quality: 20,
      source: CameraSource.Camera,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false ,
    }
    
    Camera.getPhoto(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
      this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
      this.base64 = imageData.base64String;
      console.log('camera'+this.base64);
     }, (err) => {
      // Handle error
     }); 
  }

  complete(f:NgForm)
  {
    if(this.base64==null || this.base64 == ''){
      this.auth.showToast('Image in mandatory','danger');
     
    }else
    {

      if(this.jobOutCome==''){
        this.auth.showToast('Job Outcome in mandatory','danger');
      }else{


        if(f.value.additional==''){
          this.auth.showToast('Additional notes in mandatory','danger');
        }else{
          if(f.value.parts==''){
            this.auth.showToast('Parts in mandatory','danger');
          }else{

            if(f.value.labour==''){
              this.auth.showToast('Labour in mandatory','danger');
            }else{
    
              console.log('Else code..........' + this.data['JOBGUID']);
              this.auth.database.executeSql('update  complete set OUTCOME=?,JOBNOTE=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?, HaveData=? where JOBGUID=?', [this.jobOutCome,f.value.additional, this.base64, this.auth.getdateformatV2(), 'lat', 'long', 'yes', this.data['JOBGUID']])
                .then((res) => {
                  this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                    console.log('#### jobsstatus success '+JSON.stringify(res));
                    this.auth.showToast('Success! Job has been Completed.','success'); 
                    console.log('#### complete success ' + JSON.stringify(res));
                    this.router.navigate(['details']);
                
                  }).catch((e)=>{  });
                  
                }).catch((e) => {
                  console.log('### complete Failure ' + JSON.stringify(e));
                });

            }
  
          }

        }


      }
     
    }

  }

}

