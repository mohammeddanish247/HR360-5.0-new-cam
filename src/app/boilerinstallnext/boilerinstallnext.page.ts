import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute , NavigationExtras} from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
 

@Component({
  selector: 'app-boilerinstallnext',
  templateUrl: './boilerinstallnext.page.html',
  styleUrls: ['./boilerinstallnext.page.scss'],
})
export class BoilerinstallnextPage implements OnInit {


  ///////////////// boilerinstallationpics

  
  CameraOptions: ImageOptions= {
    quality: 20,
    source :CameraSource.Camera,
    height:360,
    width:360,
    resultType : CameraResultType.Base64,
    allowEditing : false ,
  }

  GalleryOptions: ImageOptions= {
    quality: 20,
    source :CameraSource.Photos,
    height:360,
    width:360,
    resultType : CameraResultType.Base64,
    allowEditing : false ,
    // allowEdit: true,
    // mediaType : this.camera.MediaType.PICTURE,
    };

  base64:string;
  updatePicture :any;
  jobOutCome : string;
  data:any[];

  BoilerImage:string='';
  Boilerpipework:string='';
  CondensateterminationImage:string='';
  FusespurImage:string='';
  InternalflueImage:string='';
  flueInLoftImage:string='';
  ExternalflueterminalImage:string='';
  AiringCupboardCylinderImage:string='';
  ThermostatImage:string='';
  BenchMarkCertificateImage:string='';
  AdditionalOne:string='';
  AdditionalTwo:string='';
  AdditionalThree:string='';
  AdditionalFour:string='';
  flueInLoft: boolean;


  



  constructor(private platfrom : Platform,private router:Router, private route:ActivatedRoute, private auth:ApiService, private storage : Storage) { }

  ngOnInit() {

    this.storage.get('fluinloft_B').then(res => {
      if (res == "true") {
        this.flueInLoft = true;
      } else {
        this.flueInLoft = false;
      }
    });
    this.route.queryParams.subscribe(params=>{
      console.log('### data '+this.router.getCurrentNavigation().extras.state);
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        console.log('### data '+this.data['JOBGUID']);
        
        this.auth.getLocation();  
        this.getData();
      }});

    // this.platfrom.ready().then(()=>{
    //   this.options = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     targetHeight:360,
    //     targetWidth:360,}
    // });
    
           
  }


  getData(){    
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
        console.log('### data '+this.data['JOBGUID']);

        this.auth.database.executeSql('select * from boilerinstallationpics where JOBGUID=?',[this.data['JOBGUID']]).then((res)=>{
          
          this.BoilerImage ='data:image/jpeg;base64,'+res.rows.item(0)['BImage'];        
          this.Boilerpipework ='data:image/jpeg;base64,'+res.rows.item(0)['BPWImage'];
          this.CondensateterminationImage ='data:image/jpeg;base64,'+res.rows.item(0)['CTImage'];
          this.FusespurImage ='data:image/jpeg;base64,'+res.rows.item(0)['FSImage'];
          this.InternalflueImage ='data:image/jpeg;base64,'+res.rows.item(0)['IFImage'];
          this.flueInLoftImage = 'data:image/jpeg;base64,'+res.rows.item(0)['FILImage'];
          this.ExternalflueterminalImage ='data:image/jpeg;base64,'+res.rows.item(0)['EFTImage'];
          this.AiringCupboardCylinderImage ='data:image/jpeg;base64,'+res.rows.item(0)['ACCImage'];
          this.ThermostatImage ='data:image/jpeg;base64,'+res.rows.item(0)['TImage'];
          this.BenchMarkCertificateImage ='data:image/jpeg;base64,'+res.rows.item(0)['BMCImage'];
          this.AdditionalOne ='data:image/jpeg;base64,'+res.rows.item(0)['A1Image'];
          this.AdditionalTwo ='data:image/jpeg;base64,'+res.rows.item(0)['A2Image'];
          this.AdditionalThree ='data:image/jpeg;base64,'+res.rows.item(0)['A3Image'];
          this.AdditionalFour ='data:image/jpeg;base64,'+res.rows.item(0)['A4Image'];
          
        }).catch((e)=>{

        });
      }
      });
  }


  uploadImg1(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.BoilerImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set BImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });

    
     }, (err) => {

      // Handle error

     }); 

  }


  uploadImg2(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.Boilerpipework = 'data:image/jpeg;base64,' + imageData.base64String;   
      this.auth.database.executeSql('update boilerinstallationpics set BPWImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg3(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.CondensateterminationImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set CTImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg4(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => { 
      this.FusespurImage = 'data:image/jpeg;base64,' + imageData.base64String;  
      this.auth.database.executeSql('update boilerinstallationpics set FSImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg5(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.InternalflueImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set IFImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  fili(option:string){
    Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
    this.flueInLoftImage = 'data:image/jpeg;base64,' + imageData.base64String;
    this.auth.database.executeSql('update boilerinstallationpics set FILImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
    .then((res)=>{console.log('success sql');})
    .catch((e)=>{console.log('error sql');
    });
   }, (err) => {
    // Handle error
   }); 
}  

  uploadImg6(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.ExternalflueterminalImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set EFTImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg7(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set ACCImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg8(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {  
      this.ThermostatImage = 'data:image/jpeg;base64,' + imageData.base64String; 
      this.auth.database.executeSql('update boilerinstallationpics set TImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  
  uploadImg9(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.BenchMarkCertificateImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set BMCImage=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg10(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {  
      this.AdditionalOne = 'data:image/jpeg;base64,' + imageData.base64String; 
      this.auth.database.executeSql('update boilerinstallationpics set A1Image=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg11(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.AdditionalTwo = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set A2Image=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }


  uploadImg12(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.AdditionalThree = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update boilerinstallationpics set A3Image=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }


  uploadImg13(option:string){
      Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
      this.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;      
      this.auth.database.executeSql('update boilerinstallationpics set A4Image=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
      .then((res)=>{console.log('success sql');})
      .catch((e)=>{console.log('error sql');
      });
     }, (err) => {
      // Handle error
     }); 
  }

  uploadImg14(option:string){
    Camera.getPhoto(option== 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {   
    this.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;      
    this.auth.database.executeSql('update boilerinstallationpics set A5Image=? where JOBGUID=?',[imageData.base64String, this.data['JOBGUID']])
    .then((res)=>{console.log('success sql');})
    .catch((e)=>{console.log('error sql');
    });
   }, (err) => {
    // Handle error
   }); 
  }

  boilerInsImage(){

    if(this.BoilerImage=='data:image/jpeg;base64,null' || this.BoilerImage== null){this.auth.showToast('Boiler Image cannot be empty','danger'); }else{
      if(this.Boilerpipework=='data:image/jpeg;base64,null'|| this.Boilerpipework== null){this.auth.showToast('Boiler Pipe work Image cannot be empty','danger');}else{
        if(this.CondensateterminationImage=='data:image/jpeg;base64,null'|| this.CondensateterminationImage== null){this.auth.showToast('Boiler Condensate termination Image  cannot be empty','danger');}else{
          if(this.FusespurImage=='data:image/jpeg;base64,null'|| this.FusespurImage== null){this.auth.showToast('Boiler Fusespur Image cannot be empty','danger');}else{
            if(this.InternalflueImage=='data:image/jpeg;base64,null'|| this.InternalflueImage== null){this.auth.showToast('Boiler Internal flue Image cannot be empty','danger');}else{
              if(this.ExternalflueterminalImage=='data:image/jpeg;base64,null'|| this.ExternalflueterminalImage== null){this.auth.showToast('Boiler External flueterminal Image cannot be empty','danger');}else{
                if(this.AiringCupboardCylinderImage=='data:image/jpeg;base64,null'|| this.AiringCupboardCylinderImage== null){this.auth.showToast('Boiler Airing Cupboard Cylinder Image cannot be empty','danger');}else{
                  if(this.ThermostatImage=='data:image/jpeg;base64,null'|| this.ThermostatImage== null){this.auth.showToast('Boiler Thermostat Image cannot be empty','danger');}else{
                    if(this.BenchMarkCertificateImage=='data:image/jpeg;base64,null'|| this.BenchMarkCertificateImage== null){this.auth.showToast('Boiler BenchMark Certificate Image cannot be empty','danger');}else{   
                      if (this.flueInLoft==true) {
                        this.updateBoilerTable();
                      } else {
                        if(this.flueInLoftImage=='data:image/jpeg;base64,null'|| this.flueInLoftImage== null){this.auth.showToast('Boiler Flue in Loft Image Image cannot be empty','danger');}else{   
                          this.updateBoilerTable();
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

  updateBoilerTable(){
    this.auth.database.executeSql("update  boilerinstallationpics set  HaveData=? where JOBGUID=? ",[ 'yes', this.data['JOBGUID']]).then((res)=>{
      const navigationExtras: NavigationExtras = {
        state: {
        data: this.data,
              }
       };
        this.router.navigate(['boilerinstallsign'],navigationExtras);
    }).catch((e)=>{
      this.auth.alert('some thing went wrong please re install the app','Table update error')
    });

  
  }
  
  }
