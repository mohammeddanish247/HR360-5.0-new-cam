import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ApiService } from '../api.service';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

///////////////////completed

@Component({
  selector: 'app-complete-claim',
  templateUrl: './complete-claim.page.html',
  styleUrls: ['./complete-claim.page.scss'],
})
export class CompleteClaimPage implements OnInit {

  options: ImageOptions;
  base64:string='';
  image1 :any='';
  image2 :any='';
  image3 :any='';
  jobOutCome : string='';
  data:any[];
  image2flag : boolean = true ;
  image3flag : boolean = true ;
  additionalNotes : 
  string = "Did you work on the appliance: Yes/No \nVisual Inspection of appliance: Pass/Fail \nBurner Pressure/Gas Rate: \nSafety Device: Pass/Fail \nInitial FGA: \nFinal FGA: \nFlue: Pass Fail \nVentilation: Pass/Fail \nDefects: \nClassification: \nAction Taken:";
  jobOutComeFlag: boolean;
  partsFlag: boolean;
  labourFlag: boolean;
  additionalFlag: boolean;
  imageflag: boolean;
  cameraOptions: ImageOptions;
  galleryOptions: ImageOptions;

  constructor(private router:Router, private route:ActivatedRoute , private auth:ApiService) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data; 
        this.auth.getLocation();      

        console.log('## # combo jobid '+this.data['CLAIMJOBID']+""+this.data['BackgroundColour']);
        
      }
    });
  }

  radiogroupChange(event){
    this.jobOutComeFlag = false;
    console.log(' rg change '+event.detail.value);
    this.jobOutCome = event.detail.value;   
    if(this.jobOutCome == 'AtRisk' || this.jobOutCome == 'CappedOff'){
      this.image2flag = false;
      this.image3flag = false;
    }
    else{
      this.image2flag = true;
      this.image3flag = true;
    }
}


openCamera(opt, option){
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
        this.auth.showToast(JSON.stringify(err));
       }); 
      break;
    case 2:
      Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
        this.image2 = 'data:image/jpeg;base64,' + imageData.base64String;
        this.base64 = imageData.base64String;
       }, (err) => {
        this.auth.showToast(JSON.stringify(err));
       }); 
      break;
    case 3:
      Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
        this.image3 = 'data:image/jpeg;base64,' + imageData.base64String;
        this.base64 = imageData.base64String;
       }, (err) => {
        this.auth.showToast(JSON.stringify(err));
       }); 
      break;
  
    default:
      break;
  }
  

}

partsIonChange(event){
  this.partsFlag = false;
}

labourIonChange(event){
  this.labourFlag = false;
}

additionalIonChange(event){
  this.additionalFlag = false;
}
  complete(f:NgForm)
  {
  //  if(this.base64==null || this.base64 == ''){
   //   this.auth.showToast('Image in mandatory');
     
   // }else
    //{

      if(this.jobOutCome==''){
        this.jobOutComeFlag =true;
        this.auth.scrollToId("joboutcome");
        //this.auth.showToast('Job Outcome in mandatory','danger');
      }else{
        if(f.value.parts==''){
          this.partsFlag = true;
          this.auth.scrollToId("partsandlabour");
          //this.auth.showToast('Parts in mandatory','danger');
        }else{
          if(f.value.labour==''){
            this.labourFlag = true;
            this.auth.scrollToId("partsandlabour");
            //this.auth.showToast('Labour in mandatory','danger');            
          }else{
            if(f.value.additional==''){
              this.additionalFlag = true;
              this.auth.scrollToId("additional");
              //this.auth.showToast('Additional notes in mandatory','danger');
            }else{
              if((this.jobOutCome == 'AtRisk' || this.jobOutCome == 'CappedOff') && (this.image1=='')){
                this.imageflag = true;
                this.auth.scrollToId("uploadImage");
                //this.auth.showToast('Images are  mandatory','danger');
              }
             else{
              if (this.data['BackgroundColour']=='#20B2AA') {
                //IN COMBO CLAIM
                this.auth.database.executeSql('update completeclaim set OUTCOME=?,JOBNOTE=?,PARTS=?,LABOUR=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,IsClaimCompleted=?,BackgroundColour=?,HaveData=?,ComboIsCompleted=? where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,f.value.labour,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['CLAIMJOBID'],'yes',this.data['BackgroundColour'],'yes','yes', this.data['JOBGUID']])
                .then((res) => {
                  this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                    console.log('#### jobsstatus success '+JSON.stringify(res));
                    this.auth.showToast('Success! Claim has been Completed','success'); 
                    this.router.navigate(['details']);
                
                  }).catch((e)=>{  });
                  
                }).catch((e) => {
                  console.log('### complete Failure ' + JSON.stringify(e));
                });
                
              } else {
               // IN NORMAL CLAIM
                console.log('Else code..........' + this.data['JOBGUID']+' '+this.data['CLAIMJOBID']);
                this.auth.database.executeSql('update  completeclaim set OUTCOME=?,JOBNOTE=?,PARTS=?,LABOUR=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,ComboClaimJobId=?,IsClaimCompleted=?,BackgroundColour=?,HaveData=? where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,f.value.labour,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long, this.data['CLAIMJOBID'],'yes',this.data['BackgroundColour'],'yes', this.data['JOBGUID']])
                  .then((res) => {
                    this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                      console.log('#### jobsstatus success '+JSON.stringify(res));
                      this.auth.showToast('Success! Claim has been Completed','success'); 
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
     
    //}

  }

}