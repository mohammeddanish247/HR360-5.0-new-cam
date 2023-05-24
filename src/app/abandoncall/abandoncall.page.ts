import { Component, OnInit } from '@angular/core';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ApiService } from '../api.service';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera'


///// abandoned

 @Component({
  selector: 'app-abandoncall',
  templateUrl: './abandoncall.page.html',
  styleUrls: ['./abandoncall.page.scss'],
})
export class AbandoncallPage implements OnInit {

  cameraOptions: ImageOptions;
  galleryOption : ImageOptions
  base64:string='';
  updatePicture :any='';
  jobOutCome : string='';
  data:any[];
  additionalNotes:any='';
   jobOutComeFlag: boolean ;
   imageFlage: boolean ;
   additionalNotesFlage: boolean ;

  constructor( private router:Router, private route:ActivatedRoute ,private auth:ApiService) { }

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
        this.jobOutCome = res.rows.item(0)['OUTCOME'];
        this.additionalNotes = res.rows.item(0)['JOBNOTE'];
        this.base64 = res.rows.item(0)['FILEBASE'];
   });
  }
  radiogroupChange(event){
      this.jobOutCome = event.detail.value;
      this.jobOutComeFlag = false;
  }

  textarea(event){
    this.additionalNotes = event.detail.value;
    this.additionalNotesFlage = false;
  }

  openCamera(option : string){
    this.imageFlage = false;
    this.cameraOptions = {
      quality: 20,
      source :CameraSource.Camera,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false
    }
    this.galleryOption = {
      quality: 20,
      source :CameraSource.Photos,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false
    }
    Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOption).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
      this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
      this.base64 =   imageData.base64String.replace(/\s+/g, "+");
      
      // let base64Image = imageData.base64String;
      // this.updatePicture = imageData.base64String;
      // this.base64 =   imageData.base64String;
     }, (err) => {
      this.auth.showToast(JSON.stringify(err));
     }); 
  }

  submitAbandon(form:NgForm){
    let date = String(this.auth.getdateformatV2()).split(' ')[0];
    if (this.jobOutCome == '') {
        this.auth.scrollToId("joboutcome");
        this.jobOutComeFlag = true;
    } else {
      if (String(form.value.additionalNotes).trim() == '') {
        this.additionalNotesFlage = true;
        this.auth.scrollToId("textarea");
      } else {
          if(this.base64==''){
            this.imageFlage = true;
            this.auth.scrollToId("uploadImage")
          }else{   
            let haveData = "yes";
            this.auth.database.executeSql('update abandon set  OUTCOME=?,JOBNOTE=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,HaveData=? where JOBGUID=? ',[this.jobOutCome,this.additionalNotes,this.base64,date,this.auth.lat,this.auth.long,haveData, this.data['JOBGUID']])
            .then((res)=>{
              this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                this.router.navigate(['details']);
                this.auth.showToast("Success! Your Job has been abandoned.",'success');
              }).catch((e)=>{  });
            }).catch((e)=>{
              this.auth.showToast('### Abandon Failure '+JSON.stringify(e),'danger');
            });
          }
      }
    }   
  }
}
