import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sitesurveypics',
  templateUrl: './sitesurveypics.page.html',
  styleUrls: ['./sitesurveypics.page.scss'],
})
export class SitesurveypicsPage implements OnInit {


  // flags

  boiler = false;
  Boiler_pipe_work = false;
  Condensate_termination = false;
  Fuse_spur = false;
  Internal_flue = false;
  flueInLoft = false;
  External_flue_terminal = false;
  Airing_Cupboard_Cylinder = false;
  StopTapFlag = false;
  Bench_Mark_Certificate_Flag = false;
  STLI_Flag = false;
  Drain_off_location_flag = false;
  GasMeterFlag = false;
  Additional = false;



  ///

  BoilerImage: string = '';
  Boilerpipework: string = '';
  CondensateterminationImage: string = '';
  FusespurImage: string = '';
  InternalflueImage: string = '';
  ExternalflueterminalImage: string = '';
  AiringCupboardCylinderImage: string = '';
  StopTapImage: string = '';
  Bench_Mark_Certificate: string = '';
  STLI: string = '';
  DrainOffLocationFlagImage: string = '';
  GasMeterImage: string = '';
  AdditionalOne: string = '';
  AdditionalTwo: string = '';
  AdditionalThree: string = '';
  AdditionalFour: string = '';

  // camera

  CameraOptions: ImageOptions = {
    quality: 20,
    source :CameraSource.Camera,
    height:360,
    width:360,
    resultType : CameraResultType.Base64,
    allowEditing : false ,
  }

  GalleryOptions: ImageOptions = {
    quality: 20,
    source :CameraSource.Photos,
    height:360,
    width:360,
    resultType : CameraResultType.Base64,
    allowEditing : false ,
    // quality: 20,
    // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    // destinationType: this.camera.DestinationType.DATA_URL,
    // allowEdit: true,
    // encodingType: this.camera.EncodingType.JPEG,
    // mediaType: this.camera.MediaType.PICTURE,
  };

  base64: string;
  data = [];


  constructor(private storage: Storage, private platform: Platform, private router: Router, private route: ActivatedRoute, private auth: ApiService) { }

  ngOnInit() {
    this.storage.get('fluinloft').then(res => {
      if (res == "true") {
        this.flueInLoft = true;
      } else {
        this.flueInLoft = false;
      }
    });
    this.getData();
  }


  getData() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('### data ' + this.data['JOBGUID']);

        this.auth.database.executeSql('select * from sitesurveypics where JOBGUID=?', [this.data['JOBGUID']]).then((res) => {

          console.log('boiler image ' + JSON.stringify(res.rows.item(0)['BoilerImage']));

          this.BoilerImage = 'data:image/jpeg;base64,' + res.rows.item(0)['BoilerImage'];
          this.Boilerpipework = 'data:image/jpeg;base64,' + res.rows.item(0)['Boilerpipework'];
          this.CondensateterminationImage = 'data:image/jpeg;base64,' + res.rows.item(0)['CondensateterminationImage'];
          this.FusespurImage = 'data:image/jpeg;base64,' + res.rows.item(0)['FusespurImage'];
          this.InternalflueImage = 'data:image/jpeg;base64,' + res.rows.item(0)['InternalflueImage'];
          this.ExternalflueterminalImage = 'data:image/jpeg;base64,' + res.rows.item(0)['ExternalflueterminalImage'];
          this.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + res.rows.item(0)['AiringCupboardCylinderImage'];
          this.StopTapImage = 'data:image/jpeg;base64,' + res.rows.item(0)['StopTapImage'];
          this.Bench_Mark_Certificate = 'data:image/jpeg;base64,' + res.rows.item(0)['BMCImage'];
          this.STLI = 'data:image/jpeg;base64,' + res.rows.item(0)['STLImage'];
          this.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + res.rows.item(0)['DrainOffLocationFlagImage'];
          this.GasMeterImage = 'data:image/jpeg;base64,' + res.rows.item(0)['GasMeterImage'];
          this.AdditionalOne = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalOne'];
          this.AdditionalTwo = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalTwo'];
          this.AdditionalThree = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalThree'];
          this.AdditionalFour = 'data:image/jpeg;base64,' + res.rows.item(0)['AdditionalFour'];

        }).catch((e) => {

        });
      }
    });
  }


  uploadImg1(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      // var decoded = atob(imageData.base64String);
      // console.log("FileSize: " + decoded.length);
      this.BoilerImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set BoilerImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      console.log(err);
    })

  }


  uploadImg2(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.Boilerpipework = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set Boilerpipework=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  uploadImg3(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.CondensateterminationImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set CondensateterminationImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }



  uploadImg4(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.FusespurImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set FusespurImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }



  uploadImg5(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.InternalflueImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set InternalflueImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }



  uploadImg7(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.ExternalflueterminalImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set ExternalflueterminalImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }




  uploadImg8(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.AiringCupboardCylinderImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set AiringCupboardCylinderImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  uploadImg6(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.StopTapImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set FlueInLoftImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }



  uploadImg9(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.STLI = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set STLImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }

  uploadImg10(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.DrainOffLocationFlagImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set DrainOffLocationFlagImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }




  uploadImg11(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.GasMeterImage = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set GasMeterImage=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  uploadImg12(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.AdditionalOne = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set AdditionalOne=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  uploadImg13(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.AdditionalTwo = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set AdditionalTwo=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }

  uploadImg14(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.AdditionalThree = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set AdditionalThree=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  uploadImg15(option: string) {
    Camera.getPhoto(option == 'cam' ? this.CameraOptions : this.GalleryOptions).then((imageData) => {
      this.AdditionalFour = 'data:image/jpeg;base64,' + imageData.base64String;
      this.auth.database.executeSql('update sitesurveypics set AdditionalFour=? where JOBGUID=?', [imageData.base64String, this.data['JOBGUID']])
        .then((res) => { console.log('success sql BoilerImagge'); })
        .catch((e) => {
          console.log('error sql BoilerImagge');
        });
    }, (err) => {
      // Handle error
    });
  }


  SiteSurveyImage() {

    if (this.BoilerImage == 'data:image/jpeg;base64,null' || this.BoilerImage == undefined) { this.auth.showToast('Boiler Image cannot be empty','danger') } else {
      if (this.Boilerpipework == 'data:image/jpeg;base64,null' || this.Boilerpipework == undefined) { this.auth.showToast('Boilerpipework Image cannot be empty','danger') } else {
        if (this.CondensateterminationImage == 'data:image/jpeg;base64,null' || this.CondensateterminationImage == undefined) { this.auth.showToast('Condensatetermination Image cannot be empty','danger') } else {
          if (this.FusespurImage == 'data:image/jpeg;base64,null' || this.FusespurImage == undefined) { this.auth.showToast('Fusespur Image   cannot be empty','danger') } else {
            if (this.InternalflueImage == 'data:image/jpeg;base64,null' || this.InternalflueImage == undefined) { this.auth.showToast('Internalflue Image cannot be empty','danger') } else {
              if (this.ExternalflueterminalImage == 'data:image/jpeg;base64,null' || this.ExternalflueterminalImage == undefined) { this.auth.showToast('Externalflueterminal Image cannot be empty','danger') } else {              
                  if (this.STLI == 'data:image/jpeg;base64,null' || this.STLI == undefined) { this.auth.showToast('Stop Tap Image cannot be empty','danger') } else {
                    if (this.DrainOffLocationFlagImage == 'data:image/jpeg;base64,null' || this.DrainOffLocationFlagImage == undefined) { this.auth.showToast('DrainOffLocationFlag Image cannot be empty','danger') } else {
                      if (this.GasMeterImage == 'data:image/jpeg;base64,null' || this.GasMeterImage == undefined) { this.auth.showToast('GasMeter Image cannot be empty','danger') } else {
                        if (this.flueInLoft==true) {
                          this.updateTable();
                        } else {
                          if(this.StopTapImage=='data:image/jpeg;base64,null'|| this.StopTapImage== null){this.auth.showToast('Flue in Loft Image Image cannot be empty','danger');}else{   
                            this.updateTable();
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

  updateTable() {
    this.auth.database.executeSql('update sitesurveypics set HaveData=? where JOBGUID=?', ['yes', this.data['JOBGUID']])
    .then((res) => { console.log('success sql BoilerImagge'); })
    .catch((e) => {
      console.log('error sql BoilerImagge');
    });
  const extras: NavigationExtras = {
    state: {
      data: this.data
    }
  }
  this.router.navigate(['sitesurveysign'], extras);
  }
}

