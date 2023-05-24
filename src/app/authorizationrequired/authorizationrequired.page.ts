import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { Form, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';


//////authorization

@Component({
  selector: 'app-authorizationrequired',
  templateUrl: './authorizationrequired.page.html',
  styleUrls: ['./authorizationrequired.page.scss'],
})
export class AuthorizationrequiredPage implements OnInit {

  cameraOptions: ImageOptions;
  galleryOptions: ImageOptions;
  base64:string='';
  updatePicture :any='';
  jobOutcome:string='';
  parts:string='';
  labour:string='';
  additional:string = "Did you work on the appliance: Yes/No \nVisual Inspection of appliance: Pass/Fail \nBurner Pressure/Gas Rate: \nSafety Device: Pass/Fail \nInitial FGA: \nFinal FGA: \nFlue: Pass Fail \nVentilation: Pass/Fail \nDefects: \nClassification: \nAction Taken:";
  data:any[];
  constructor(private auth:ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;  
        this.auth.getLocation();     
      }
    });
  }

  radiogroupChange(event){
    this.jobOutcome = event.detail.value;
  }
  
  
  openCamera(option : string){
    this.cameraOptions = {
      quality: 20,
      source :CameraSource.Camera,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false ,
    }
    this.galleryOptions = {
      quality: 20,
      source :CameraSource.Photos,
      height:360,
      width:360,
      resultType : CameraResultType.Base64,
      allowEditing : false ,
    }
    
    Camera.getPhoto(option == 'cam' ? this.cameraOptions : this.galleryOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData.base64String;
      this.updatePicture = 'data:image/jpeg;base64,' + imageData.base64String;
      this.base64 = imageData.base64String.replace(/\s+/g, "+");
     }, (err) => {
      // Handle error
     }); 
  }

  authoizationSubmit(form:NgForm){

    let date = this.auth.getdateformatV2().split(' ')[0];
    if(this.jobOutcome==''){
      this.auth.showToast('Job outcome cannot be empty.','danger');

    }else{

      if(String(form.value.parts).trim()==''){
        this.auth.showToast('Parts cannot be empty.','danger');
      }else{
        
        if(String(form.value.labour).trim()==''){
          this.auth.showToast('Labour field cannot be empty.','danger');
        }else{
          
          if(String(form.value.additionalNotes).trim()==''){
            this.auth.showToast('Additional Notes cannot be empty.','danger');
          }else{
            
           // if(this.updatePicture==''){
           //   this.auth.showToast('Picture cannot be empty.');
           // }else{
              console.log('Else code..........' + this.data['JOBGUID']);
              let haveData = "yes";
              this.auth.database.executeSql('update authorization set OUTCOME=?,JOBNOTE=?,parts=?,labour=?,FILEBASE=?,OnDt=?,Latitude=?,Longitude=?,HaveData=? where JOBGUID=?', [this.jobOutcome, form.value.additionalNotes,this.parts,this.labour, this.base64, date, this.auth.lat, this.auth.long,haveData, this.data['JOBGUID']])
                .then((res) => {
                  console.log('#### authorization success ' + JSON.stringify(res));
                  this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                    this.router.navigate(['details']);
                    this.auth.showToast("Success! Job Authorization has been completed.",'success');
                  }).catch((e)=>{  });
                }).catch((e) => {
                  console.log('### authorization Failure ' + JSON.stringify(e));
                });
           // }
          }
          }
        }

      }

    }



  }
