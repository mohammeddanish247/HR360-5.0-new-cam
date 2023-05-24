 
import { Component, OnInit } from '@angular/core';
import { Camera, ImageOptions, CameraSource, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../api.service';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

///////////////////completed

@Component({
  selector: 'app-complete-service',
  templateUrl: './complete-service.page.html',
  styleUrls: ['./complete-service.page.scss'],
})
export class CompleteServicePage implements OnInit {

  cameraOptions: ImageOptions;
  galleryOptions: ImageOptions;
  base64:string='';
  image1 :any='';
  image2 :any='';
  image3 :any='';
  jobOutCome : string='';
  data:any[];
  additional: any="";
  parts: any="";
  image2flag : boolean = true ;
  image3flag : boolean = true ;
  jobOutComeFlag: boolean;
  partsFlag: boolean;
  additionalFlag: boolean;
  imageflag: boolean;

  constructor(private router:Router, private route:ActivatedRoute , private auth:ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data; 
        this.auth.getLocation();      
        console.log(JSON.stringify(this.data));
       // this.auth.showToast(this.data['JOBGUID'],"warning")
      }
    });
  }

  radiogroupChange(event){
    this.jobOutComeFlag = false;
    this.jobOutCome = event.detail.value;    
    if(this.jobOutCome == 'At Risk' || this.jobOutCome == 'Capped Off (Not Safe)'){
      this.image2flag = false;
      this.image3flag = false;
    }
    else{
      this.image2flag = true;
      this.image3flag = true;
    }
}

partsIonChange(event){
  this.parts = event.detail.value;    
  this.partsFlag = false;
  
}

additionalIonChange(event){
  this.additional = event.detail.value;    
  this.additionalFlag = false;
 
}

  openCamera(opt, option : string){
    this.imageflag = false;
    this.cameraOptions = {
      quality: 20,
      source :CameraSource.Camera,
      height:360,
      width:360,
      resultType : CameraResultType.Base64
    }
    this.galleryOptions = {
      quality: 20,
      source :CameraSource.Photos,
      height:360,
      width:360,
      resultType : CameraResultType.Base64
    }
    switch (opt) {
      case 1:
        Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
          this.image1 = 'data:image/jpeg;base64,' + imageData.base64String;
          this.base64 = imageData.base64String;
         }, (err) => {
         }); 
        break;
      case 2:
        Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
          this.image2 = 'data:image/jpeg;base64,' + imageData.base64String;
          this.base64 = imageData.base64String;
         }, (err) => {
         }); 
        break;
      case 3:
        Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
          this.image3 = 'data:image/jpeg;base64,' + imageData.base64String;
          this.base64 = imageData.base64String;
         }, (err) => {
         }); 
        break;
    
      default:
        break;
    }
    

  }

  complete(f:NgForm)
  {
      if(this.jobOutCome==''){
        this.jobOutComeFlag = true;
        this.auth.scrollToId("joboutcome");
      }else{
            if((this.jobOutCome == 'At Risk' || this.jobOutCome == 'Capped Off (Not Safe)') && (this.image1=='')){
              //this.auth.showToast('Upload Image is  mandatory','danger');
              this.imageflag = true;
              this.auth.scrollToId("uploadImage");
            }
           else{
            console.log(JSON.stringify(this.data));
            if (this.data['BackgroundColour']=='#20B2AA') {
              //In COMBO SERVICE
              this.auth.database.executeSql('update  completeservice set HaveData=?, OUTCOME=?, JOBNOTE=?, PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', ['combo',this.jobOutCome,this.additional,this.parts,this.base64,this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['ComboClaimJobId'], "NA - Service Completed","Yes",this.data['BackgroundColour'] , this.data["JOBGUID"]])
             .then((res) => {
              this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                this.auth.showToast('Success! Job has been Completed.','success'); 
                this.router.navigate(['details']);
            
              }).catch((e)=>{  });
             }).catch(e=>{});
            } else {
              //In NOrmal Service
              console.log('Else code..........' + this.data['JOBGUID']+' '+this.data['BackgroundColour']);
              this.auth.database.executeSql('update  completeservice set HaveData=?, OUTCOME=?, JOBNOTE=?, PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', [ 'yes',this.jobOutCome,this.additional,this.parts,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['ComboClaimJobId'], " ","yes",this.data['BackgroundColour'] , this.data["JOBGUID"]])
             .then((res) => {
              console.log('Upated service in Normal JOB'+JSON.stringify(res));
              // this.auth.database.executeSql('update  completeservice set OUTCOME=?,JOBNOTE=?,PARTS=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,  CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long,this.data['CLAIMJOBID'], 'yes',this.data['BackgroundColour'], this.data['JOBGUID']])
              //   .then((res) => {
                  this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                    console.log('#### devdx jobsstatus success '+JSON.stringify(res));
                    this.auth.showToast('Success! Job has been Completed.','success'); 
                    console.log('#### complete success ' + JSON.stringify(res));
                    this.router.navigate(['details']);
                
                  }).catch((e)=>{  });
                  
                }).catch((e) => {
                  console.log('### devdx complete Failure ' + JSON.stringify(e));
                });
              
            // }              

            // }
  
          }
          }

        }
     
    }


  }

