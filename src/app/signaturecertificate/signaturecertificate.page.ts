import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import SignaturePad from 'signature_pad';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';
import { PDFDocument } from 'pdf-lib';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signaturecertificate',
  templateUrl: './signaturecertificate.page.html',
  styleUrls: ['./signaturecertificate.page.scss'],
})
export class SignaturecertificatePage implements OnInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  @ViewChild(IonContent, {static:true})
  content:IonContent

  EngsignaturePad: SignaturePad;
  data: any[];
  receiving: '';
  fluecheckedDate : string;
  Complete = true;
  Generate = true;
  openCerti = true;
  savecerti = false;
  DownloadCertificate = true;
  pdfLink: string;
  downloadProgress = 0; 
  myFiles = [];
  downloadUrl = "";
  currentyear: any;
  lastyear: any;
  sigImage: any;
  certificate = {
    DetailsWork : "", 
    NoOfAppTested : "",  
    NextDueDt : "",  
    OGIns : "",  
    OGSup : "",  
    ECon : "",  
    OGTight : "",  
    COFitted : "",  
    COTested : "",  
    EquiBond : "",  
    SigImage : "",  
    SigRec : "",  
    FlueChkDt : "", 
    IsCompleted : "", 
    ClaimJobId : "",
  };

  enggInfo = { 
    GasSafeNumber : "",
    EngCertName : "",
    GasSafeLicenseNumber : "", 
    CompanyAddress : "", 
    SubContractor : "", 
    TypeName : "",
    EngineerSign : ""
  };

  appliances = [];
  appLength: string;
  sigImageSurveyor: string ;



  constructor(public alertCtrl: AlertController,
    private datePipe : DatePipe, private elementRef: ElementRef, private auth: ApiService, private route: ActivatedRoute, private router: Router) { 
  
    }

  ngOnInit() {
    this.currentyear = this.auth.getdateformatV2();
    this.currentyear = this.currentyear.split("/")[2];
    this.currentyear = parseInt(this.currentyear.split(" ")[0]);
    this.lastyear = this.currentyear+10;

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log("Danish "+this.data["CLAIMGUID"]+ " "+this.data["CLAIMJOBID"]);
        this.auth.database.executeSql('select CertificateLocalURI from jobsstatus where JOBGUID=?', [this.data['JOBGUID']])
          .then((res) => {
            if (res.rows.length > 0) {
              this.DownloadCertificate = false;
            } else {
              this.DownloadCertificate = true;
            }

          }).catch((e) => {

          });


      }
    });
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    this.EngsignaturePad = new SignaturePad(canvas);
    this.auth.database.executeSql('select * from certificate where JOBGUID=?', [this.data['JOBGUID']])
      .then(res => {
        const inputDate = res.rows.item(0)['FlueChkDt'];
        const [dd, MM, yyyy, HH, mm, ss] = inputDate.split(/[\s/:]+/); // split the date string into components
        const isoDate = new Date(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`).toISOString(); //converting to ISO date formate
        this.receiving = res.rows.item(0)['SigRec'];
        this.fluecheckedDate = isoDate;   
        this.EngsignaturePad.fromDataURL('data:image/jpeg;base64,'+res.rows.item(0)['SigImage'],{
          width: canvas.width,
          height: canvas.height
        });
    
      }).catch(e => {
        console.log("error getting saved certicate signature :" + e);
      })

  }


  gotoBottom(){
    this.content.scrollToBottom(1000);
  }

  save() {
    return new Promise((resolve)=>{
      this.sigImage = this.EngsignaturePad.toDataURL();
      console.log('#### signature image ' + this.EngsignaturePad);
      this.data['SigRec'] = this.sigImage.split(',')[1];
      this.auth.database.executeSql('update certificate set SigImage=? where JOBGUID=?', [this.sigImage.split(',')[1], this.data['JOBGUID']]);
    });   
  }

  clear() {
    this.EngsignaturePad.clear();
  }


  signatureformSAVEClick() {
    this.save();
    if(this.sigImage == "" || this.sigImage == null || this.sigImage == undefined){
      this.auth.showToast('Siganture Field Cannot be Empty','danger');
     }else{
        if (this.fluecheckedDate == undefined || this.fluecheckedDate == null) {
          this.auth.showToast('Flue Check Cannot be Empty','danger');
         } else {
          if (this.receiving == undefined || this.receiving == '' || this.receiving == null) {
            this.auth.showToast('Recieving person field Cannot be Empty','danger');
  
          } else {
            this.auth.database.executeSql('select * from EngInfo', []).then(res=>{
              let engsign : string = res.rows.item(0)['Sign'];
              if( engsign == "" || engsign == " " || engsign == null || engsign == undefined){               
                this.auth.customAlertBox("Alert Message!","Database doesn't have Engineer Signature please do sign first.","Sign","","engineersignature");               
              }else{
                let date = new Date(this.fluecheckedDate);
                let formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
                this.auth.database.executeSql('update certificate set SigRec=?, FlueChkDt=?, HaveData=? where JOBGUID=?', [this.receiving, formattedDate, 'yes', this.data['JOBGUID']])
                .then((res) => {
                  this.getpdfdata().then(res=>{
                    this.openCerti=false
                    this.auth.dismissLoading();
                  });
                }).catch((e) => {
                  this.auth.dismissLoading();
                  this.auth.showToast('Certificate Not Saved. ERROR!'+JSON.stringify(e),'danger');
                });
              }
            });
         }
       }
      
    }
  }

  getpdfdata() {
    return new Promise((resolve,reject)=>{
      //get data to fill the pdf fields
    this.auth.database.executeSql('select * from certificate where JOBGUID=?',[this.data['JOBGUID']]).then(resCert=>{
      this.auth.database.executeSql('select * from newappliance where JOBGUID=?',[this.data['JOBGUID']]).then(resApp=>{

        console.log("Danish "+resCert.rows.item(0)['COFitted']);
        console.log("Danish "+resCert.rows.item(0)['COTested']);
        
        this.certificate = {
          DetailsWork : resCert.rows.item(0)['DetailsWork'], 
          NoOfAppTested : resCert.rows.item(0)['NoOfAppTested'],  
          NextDueDt : resCert.rows.item(0)['NextDueDt'],  
          OGIns : resCert.rows.item(0)['OGIns'],  
          OGSup : resCert.rows.item(0)['OGSup'],  
          ECon : resCert.rows.item(0)['ECon'],  
          OGTight : resCert.rows.item(0)['OGTight'],  
          COFitted : resCert.rows.item(0)['COFitted'],  
          COTested : resCert.rows.item(0)['COTested'],  
          EquiBond : resCert.rows.item(0)['EquiBond'],  
          SigImage : resCert.rows.item(0)['SigImage'],  
          SigRec : resCert.rows.item(0)['SigRec'],  
          FlueChkDt : resCert.rows.item(0)['FlueChkDt'], 
          IsCompleted : resCert.rows.item(0)['IsCompleted'], 
          ClaimJobId : this.data['CLAIMJOBID'],  
        }
        this.appLength = resApp.rows.length.toString();
        for (let i = 0; i < resApp.rows.length; i++) {
          this.appliances[i] = {
            JOBGUID : resApp.rows.item(i)['JOBGUID'].toString(), 
            AppType: resApp.rows.item(i)['AppType'], 
            Make: resApp.rows.item(i)['Make'], 
            MakeAnswer : resApp.rows.item(i)['MakeAnswer'], 
            Model: resApp.rows.item(i)['Model'],
            ModelAnswer: resApp.rows.item(i)['ModelAnswer'], 
            BType: resApp.rows.item(i)['BType'], 
            Loc: resApp.rows.item(i)['Loc'], 
            Flue: resApp.rows.item(i)['Flue'], 
            OwnedBy: resApp.rows.item(i)['OwnedBy'], 
            Inspected: resApp.rows.item(i)['Inspected'], 
            ZeroGov: resApp.rows.item(i)['ZeroGov'], 
            OPU: resApp.rows.item(i)['OPU'], 
            OptPrs: resApp.rows.item(i)['OptPrs'], 
            OSD: resApp.rows.item(i)['OSD'], 
            VS: resApp.rows.item(i)['VS'], 
            VCF: resApp.rows.item(i)['VCF'], 
            FOC: resApp.rows.item(i)['FOC'], 
            ComRead: resApp.rows.item(i)['ComRead'], 
            HRatio: resApp.rows.item(i)['HRatio'], 
            HCO2Val: resApp.rows.item(i)['HCO2Val'], 
            HCOPPM: resApp.rows.item(i)['HCOPPM'], 
            LRatio: resApp.rows.item(i)['LRatio'], 
            LCO2Val: resApp.rows.item(i)['LCO2Val'], 
            LCOPPM: resApp.rows.item(i)['LCOPPM'], 
            STU: resApp.rows.item(i)['STU'],
            DefId: resApp.rows.item(i)['DefId'], 
            GIUSP: resApp.rows.item(i)['GIUSP'], 
            WarAdRec: resApp.rows.item(i)['WarAdRec'], 
            RemAc: resApp.rows.item(i)['RemAc'], 
            IsDelete : resApp.rows.item(i)['IsDelete'], 
            //GIUS: resApp.rows.item(i)['GIUS'],
            SyncStatus: resApp.rows.item(i)['SyncStatus']
          }
        }
       
        this.auth.database.executeSql('select * from EngInfo',[]).then(res=>{

          console.log("Danish "+res.rows.item(0)['CompanyAddress'], res.rows.item(0)['EngCertName'],res.rows.item(0)['GasSafeLicenseNumber'], res.rows.item(0)['GasSafeNumber'], res.rows.item(0)['SubContractor'], res.rows.item(0)['TypeName']);      

          this.sigImageSurveyor = res.rows.item(0)['Sign'];
    
          if (res.rows.item(0)['CompanyAddress'] == null || res.rows.item(0)['CompanyAddress'] == undefined) {
            this.enggInfo.CompanyAddress = "NA";
          } else {
            this.enggInfo.CompanyAddress =  res.rows.item(0)['CompanyAddress'];
          }
    
          if (res.rows.item(0)['EngCertName'] == null || res.rows.item(0)['EngCertName'] == undefined) {
            this.enggInfo.EngCertName = "NA";
          } else {
            this.enggInfo.EngCertName =  res.rows.item(0)['EngCertName'];
          }
    
          if (res.rows.item(0)['GasSafeLicenseNumber'] == null || res.rows.item(0)['GasSafeLicenseNumber'] == undefined) {
            this.enggInfo.GasSafeLicenseNumber = "NA";
          } else {
            this.enggInfo.GasSafeLicenseNumber =  res.rows.item(0)['GasSafeLicenseNumber'];
          }
    
          if (res.rows.item(0)['GasSafeNumber'] == null || res.rows.item(0)['GasSafeNumber'] == undefined) {
            this.enggInfo.GasSafeNumber = "NA";
          } else {
            this.enggInfo.GasSafeNumber =  res.rows.item(0)['GasSafeNumber'];
          }
    
          if (res.rows.item(0)['SubContractor'] == null || res.rows.item(0)['SubContractor'] == undefined) {
            this.enggInfo.SubContractor = "false";
          } else {
            this.enggInfo.SubContractor =  res.rows.item(0)['SubContractor'];
          }
    
          if (res.rows.item(0)['TypeName'] == null || res.rows.item(0)['TypeName'] == undefined) {
            this.enggInfo.TypeName = "NA";
          } else {
            this.enggInfo.TypeName =  res.rows.item(0)['TypeName'];
          }
          
          resolve(" ");
    
          
          
          // this.sigImageSurveyor = res.rows.item(0)['Sign'];
          // this.enggInfo.CompanyAddress =  res.rows.item(0)['CompanyAddress'];
          // this.enggInfo.EngCertName =  res.rows.item(0)['EngCertName'];
          // this.enggInfo.GasSafeLicenseNumber =  res.rows.item(0)['GasSafeLicenseNumber'];
          // this.enggInfo.GasSafeNumber =  res.rows.item(0)['GasSafeNumber'];
          // this.enggInfo.SubContractor =  res.rows.item(0)['SubContractor'];
          // this.enggInfo.TypeName =  res.rows.item(0)['TypeName'];    
          
        });
      });
    });
  });
 }

  // syncCertificates(){
  //   let syncApp = new Promise((resolve, reject)=>{
  //     let array =[];
  //     this.auth.database.executeSql('select * from newappliance where HaveData=? and JOBGUID=?',['yes',this.data['JOBGUID']]).then(res=>{        
  //       if (res.rows.length>0) {
  //         for(let i=0; i< res.rows.length; i++ ){          
  //           let params = new HttpParams()
  //           .set('JOBGUID',res.rows.item(i)['JOBGUID'])
  //           .set('AppType',res.rows.item(i)['AppType'])
  //           .set('Make',res.rows.item(i)['Make'])
  //           .set('Model',res.rows.item(i)['Model'])
  //           .set('BType',res.rows.item(i)['BType'])
  //           .set('Loc',res.rows.item(i)['Loc'])
  //           .set('Flue',res.rows.item(i)['Flue'])
  //           .set('OwnedBy',res.rows.item(i)['OwnedBy'])
  //           .set('Inspected',res.rows.item(i)['Inspected'])
  //           .set('ZeroGov',res.rows.item(i)['ZeroGov'])
  //           .set('OPU',res.rows.item(i)['OPU'])
  //           .set('OptPrs',res.rows.item(i)['OptPrs'])
  //           .set('OSD',res.rows.item(i)['OSD'])
  //           .set('VS',res.rows.item(i)['VS'])
  //           .set('VCF',res.rows.item(i)['VCF'])
  //           .set('FOC',res.rows.item(i)['FOC'])
  //           .set('ComRead',res.rows.item(i)['ComRead'])
  //           .set('HRatio',res.rows.item(i)['HRatio'])
  //           .set('HCO2Val',res.rows.item(i)['HCO2Val'])
  //           .set('HCOPPM',res.rows.item(i)['HCOPPM'])
  //           .set('LRatio',res.rows.item(i)['LRatio'])
  //           .set('LCO2Val',res.rows.item(i)['LCO2Val'])
  //           .set('LCOPPM',res.rows.item(i)['LCOPPM'])
  //           .set('STU',res.rows.item(i)['STU'])
  //           .set('DefId',res.rows.item(i)['DefId'])
  //           .set('GIUSP',res.rows.item(i)['GIUSP'])
  //           .set('WarAdRec',res.rows.item(i)['WarAdRec'])
  //           .set('RemAc',res.rows.item(i)['RemAc'])
  //           .set('IsDelete',res.rows.item(i)['IsDelete']);
  //           this.auth.httpSend('Service_ApplianceNew',params,'post').subscribe(
  //             (msg)=>{
  //                 console.log('##SUCCESS newappliance SYNC'+JSON.stringify(msg));    
  //                 array.push(msg['Msg']);
  //                 if (array.length==res.rows.length) {
  //                   resolve('newappliance complete');
  //                 } 
  //           },
  //           (err)=>{
  //             console.log('##ERROR newAplaince SYNC' + JSON.stringify(err));  
  //             array.push(err['header']);
  //             if (array.length==res.rows.length) {
  //               resolve('newappliance incomplete');
  //             }       
  //           }
  //           );//end subscribe
  //           }//end for loop 
  //       } else {
  //         resolve("there is no data in newappliance")
  //       }    
  //     }).catch(e=>{
  //       console.log("Error geting newAplaince "+JSON.stringify(e));      
  //     });
     
  //   });
  //   let syncCert = new Promise((resolve, reject)=>{
  //     this.auth.database.executeSql('select * from certificate where HaveData=? and JOBGUID=?',['yes',this.data['JOBGUID']]).then(res=>{  
  //       let params = new HttpParams()
  //            .set('JOBGUID',res.rows.item(0)['JOBGUID'])
  //            .set('DetailsWork',res.rows.item(0)['DetailsWork'])
  //            .set('NoOfAppTested',res.rows.item(0)['NoOfAppTested'])
  //            .set('NextDueDt',res.rows.item(0)['NextDueDt'])
  //            .set('OGIns',res.rows.item(0)['OGIns'])
  //            .set('OGSup',res.rows.item(0)['OGSup'])
  //            .set('ECon',res.rows.item(0)['ECon'])
  //            .set('OGTight',res.rows.item(0)['OGTight'])
  //            .set('COFitted',res.rows.item(0)['COFitted'])
  //            .set('COTested',res.rows.item(0)['COTested'])
  //            .set('EquiBond',res.rows.item(0)['EquiBond'])
  //            .set('SigImage',res.rows.item(0)['SigImage'])
  //            .set('SigRec',res.rows.item(0)['SigRec'])
  //            .set('FlueChkDt',res.rows.item(0)['FlueChkDt'])
  //            .set('ClaimJobId',res.rows.item(0)['ClaimJobId'])
  //            .set('ParentJobGuid','');
  //            this.auth.httpSend('Service_Certificate',params,'post').subscribe(
  //              (msg)=>{             
  //               console.log('##SUCCESS certificate SYNC' + JSON.stringify(msg));
  //               resolve("certificate Complete");
  //            },
  //            (err)=>{
  //              console.log('##ERROR certificate SYNC' + JSON.stringify(err));
  //              resolve("certificate incomplete");
  //            }
  //            );
        
  //     }).catch(e=>{
  //       console.log("Error geting certificate "+JSON.stringify(e));      
  //     });
  //   });

  //   Promise.all([syncApp,syncCert]).then(res=>{
  //     this.generateCert().then(res=>{
  //       this.auth.dismissLoading();
  //       this.Complete = false;
  //       this.savecerti = true;
  //       this.openCerti = false;
  //       this.gotoBottom();
  //     })
  //   }).catch(e=>{
  //     this.auth.dismissLoading();
  //     this.auth.alert(JSON.stringify(e));
  //   })
  // }
// 
  // saveCertificate() {

  //   if (this.fluecheckedDate === undefined || this.fluecheckedDate == null) {

  //     this.auth.showToast('Flue Check Cannot be Empty','danger');
  //   } else {
  //     if (this.receiving === undefined || this.receiving == '') {
  //       this.auth.showToast('Recieving person field Cannot be Empty','danger');

  //     } else {
  //       let date = this.datePipe.transform(this.fluecheckedDate, 'dd/MM/yyyy HH:mm:ss');
  //       this.auth.database.executeSql('update certificate set SigRec=?, FlueChkDt=?, HaveData=? where JOBGUID=?', [this.receiving, date, 'yes', this.data['JOBGUID']])
  //         .then((res) => {
  //           this.auth.database.executeSql("update  jobsstatus set  certificate=? where JOBGUID=?", ['createcertificate', this.data['JOBGUID']]).then((res) => {
  //             console.log('#### jobsstatus success ' + JSON.stringify(res));
  //             console.log('#### sign save  data ' + JSON.stringify(this.data));

  //             //this.router.navigate(['details']);
  //             this.auth.showToast('Success! Certificate has been saved successfully','success');
  //             this.Complete = false;



  //           }).catch((e) => { });

  //         }).catch((e) => {
  //           this.auth.showToast('Certificate Not Saved. ERROR!','danger');
  //         });
  //     }
  //   }

  // }

  // generateCert() {
  //   return new Promise((resolve,rejects)=>{
  //   let params = new HttpParams()
  //     .set('Jobid', this.data['JOBGUID']);
  //   this.auth.httpSend('Service_CreateCertificate', params, 'post').subscribe(
  //     (res) => {
  //       console.log('##success download certificate  ' + JSON.stringify(res['Msg']));       
  //       console.log(this.pdfLink);
  //       window.open(this.pdfLink,' ');
  //       if (res['Msg'] == 'Failed') {
  //         this.auth.showToast("Error from Backend getting Msg : " + res['Msg'],'danger');
  //         resolve('');
  //       } else {
  //         console.log('else here');
          
  //         //this.loadFiles();
  //         // window.open(this.pdfLink, '_blank');
  //         // this.downloadFile(res['Msg']);
  //         this.pdfLink = res['Msg'];
  //         resolve('');
  //       }
  //       this.auth.database.executeSql('update jobsstatus set CertificateLocalURI=? where JOBGUID=?', [this.file.externalRootDirectory + 'download/' + this.data['JOBGUID'] + 'certificate.pdf', this.data['JOBGUID']])
  //         .then(res => console.log("pdf inserted in database" + res)).catch(e => console.log("error inserting pdf" + e));

  //     },
  //     (err) => {
  //       this.auth.showToast("Error downloading the ceertificate. " + JSON.stringify(err),'danger');
  //       console.log('download certificate error ' + JSON.stringify(err));
  //       resolve('');
  //     }
  //   );


  //   });
  // }

  // signatureformGenerateClick() {
  //   this.auth.presentLoading('Please wait while we Generate your Certificate.');
  //   let params = new HttpParams()
  //     .set('Jobid', this.data['JOBGUID']);

  //   this.auth.httpSend('Service_CreateCertificate', params, 'post').subscribe(
  //     (res) => {
  //       console.log('##success download certificate  ' + JSON.stringify(res['Msg']));       
  //       console.log(this.pdfLink);
  //       window.open(this.pdfLink,'_system')
  //       if (res['Msg'] == 'Failed') {
  //         this.auth.showToast("Error from Backend getting Msg : " + res['Msg'],'danger')
  //       } else {
  //         console.log('else here');
          
  //         //this.loadFiles();
  //         // window.open(this.pdfLink, '_blank');
  //         // this.downloadFile(res['Msg']);
  //         this.pdfLink = res['Msg'];
  //       }
  //       this.auth.database.executeSql('update jobsstatus set CertificateLocalURI=? where JOBGUID=?', [this.file.externalRootDirectory + 'download/' + this.data['JOBGUID'] + 'certificate.pdf', this.data['JOBGUID']])
  //         .then(res => console.log("pdf inserted in database" + res)).catch(e => console.log("error inserting pdf" + e));
  //       this.auth.dismissLoading();

  //     },
  //     (err) => {
  //       this.auth.dismissLoading();
  //       this.auth.showToast("Error downloading the ceertificate. " + JSON.stringify(err),'danger');
  //       console.log('download certificate error ' + JSON.stringify(err));
  //     }
  //   );
  // }

  async openCertificate(){
    this.auth.presentCustomLoader("Please wait ....")
    console.log("Danish"+this.enggInfo.CompanyAddress+" "+this.enggInfo.EngCertName+" "+this.enggInfo.GasSafeLicenseNumber+" "+this.enggInfo.GasSafeNumber+" "+this.enggInfo.SubContractor+" "+this.enggInfo.TypeName);
    
      // Fetch the PDF with form fields
      const formUrl = './assets/files/certificate.pdf'
      this.auth.setLoadingText("Please wait .... line 483")
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      this.auth.setLoadingText("Please wait .... line 485")
      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      this.auth.setLoadingText("Please wait .... line 488")
      //Embed signature to pdf
      const signatureCustomer = await pdfDoc.embedPng(this.sigImage)
      const signatureSurveyor = await pdfDoc.embedPng(this.sigImageSurveyor)
      this.auth.setLoadingText("Please wait .... line 492")
      // Get the form containing all the fields
      const form = pdfDoc.getForm()
      this.auth.setLoadingText("Please wait .... line 495")
      // Get all fields in the PDF by their names and set value
       form.getTextField('Text1').setText(this.certificate.ClaimJobId)
       form.getTextField('Text2').setText("Home Response 360 Ltd.")
       this.auth.setLoadingText("Please wait .... line 499")
       if (this.enggInfo.SubContractor == "true" || this.enggInfo.TypeName == "E5 - HR360") {
        this.auth.setLoadingText("Please wait .... line 501")
        form.getTextField('Text3').setText(this.enggInfo.GasSafeNumber)
        this.auth.setLoadingText("Please wait .... line 503")
        form.getTextField('Text4').setText(this.data['EngName'])
        form.getTextField('Text5').setText(this.enggInfo.GasSafeLicenseNumber)
        form.getTextField('Text6').setText(this.enggInfo.CompanyAddress.split(" ").slice(0, 4).join(" "))
        form.getTextField('Text7').setText(this.enggInfo.CompanyAddress.split(" ").slice(4, 8).join(" "))
        form.getTextField('Text8').setText(" ")
        form.getTextField('Text9').setText(" ")
        form.getTextField('Text10').setText("BB12 6TG")
        form.getTextField('Text11').setText("0345 3192 247")
        form.getTextField('Text12').setText("services@247homerescue.co.uk")
       } else {
        this.auth.setLoadingText("Please wait .... line 514")
        form.getTextField('Text3').setText("572199")
        form.getTextField('Text4').setText(this.data['EngName'])
        form.getTextField('Text5').setText(this.enggInfo.GasSafeLicenseNumber)
        form.getTextField('Text6').setText("Parkhill Business Centre")
        form.getTextField('Text7').setText("Padiham Road")
        form.getTextField('Text8').setText("Burnley")
        form.getTextField('Text9').setText(" ")
        form.getTextField('Text10').setText("BB12 6TG")
        form.getTextField('Text11').setText("0345 3192 247")
        form.getTextField('Text12').setText("services@247homerescue.co.uk")
       }

      //  form.getTextField('Text3').setText("572199")
      //  form.getTextField('Text4').setText(this.data['EngName'])
      //  form.getTextField('Text5').setText("Gas Safe Lisence no")
      //  form.getTextField('Text6').setText("Parkhill Business Centre")
      //  form.getTextField('Text7').setText("Padiham Road")
      //  form.getTextField('Text8').setText("Burnley")
      //  form.getTextField('Text9').setText(" ")
      //  form.getTextField('Text10').setText("BB12 6TG")
      //  form.getTextField('Text11').setText("0345 3192 247")
      //  form.getTextField('Text12').setText("services@247homerescue.co.uk")
      this.auth.setLoadingText("Please wait .... line 537")
       form.getTextField('Text13').setText(this.data['RiskAddress'].split(" ").slice(0, 4).join(" "))
       form.getTextField('Text14').setText(this.data['RiskAddress'].split(" ").slice(4, 8).join(" "))
       form.getTextField('Text15').setText(this.data['RiskAddress'].split(" ").slice(8, 12).join(" "))
       form.getTextField('Text16').setText(this.data['RiskAddress'].split(" ").slice(12, 16).join(" "))
       this.auth.setLoadingText("Please wait .... line 542")
       form.getTextField('Text17').setText(this.data['RiskPostCode'])
       form.getTextField('Text18').setText(this.data['CLIENTNAME'])
       form.getTextField('Text19').setText(this.data['phone'])
       this.auth.setLoadingText("Please wait .... line 546")
       form.getTextField('Text20').setText(" ")
       form.getTextField('Text21').setText(this.data['CLIENTNAME'])
       form.getTextField('Text22').setText(" ")
       this.auth.setLoadingText("Please wait .... line 550")
       form.getTextField('Text23').setText(this.data['RiskAddress'].split(" ").slice(0, 4).join(" "))
       form.getTextField('Text24').setText(this.data['RiskAddress'].split(" ").slice(4, 8).join(" "))
       form.getTextField('Text25').setText(this.data['RiskAddress'].split(" ").slice(8, 12).join(" "))
       form.getTextField('Text26').setText(this.data['RiskAddress'].split(" ").slice(12, 16).join(" "))
       form.getTextField('Text27').setText(this.data['RiskPostCode'].toString())
       form.getTextField('Text28').setText(this.data['phone'])
       this.auth.setLoadingText("Please wait .... line 557")
       form.getTextField('Text29').setText(" ")
       form.getTextField('Text30').setText(""+this.appLength)
       form.getTextField('Text31').setText(this.certificate.OGIns)
       form.getTextField('Text32').setText(this.certificate.OGSup)
       form.getTextField('Text33').setText(this.certificate.ECon)
       form.getTextField('Text34').setText(this.certificate.OGTight)
       form.getTextField('Text35').setText(this.certificate.EquiBond)
       form.getTextField('Text120').setText(this.certificate.DetailsWork)
       this.auth.setLoadingText("Please wait .... line 566")
       form.getTextField('Text121').setImage(signatureSurveyor)
       form.getTextField('Text122').setImage(signatureCustomer)
       this.auth.setLoadingText("Please wait .... line 569")
       form.getTextField('Text123').setText(this.certificate.FlueChkDt.split(" ")[0])
       form.getTextField('Text124').setText(this.certificate.NextDueDt.split(" ")[0])
       this.auth.setLoadingText("Please wait .... line 572")
       for (let i = 0; i < this.appliances.length; i++) {
        this.auth.setLoadingText("Please wait .... line 574 "+i)
        form.getTextField(`Text${36+i}`).setText(this.appliances[i]['Loc']);
        this.auth.setLoadingText("Please wait .... line 576 "+i)
        form.getTextField(`Text${40+i}`).setText(this.appliances[i]['AppType']);
        this.auth.setLoadingText("Please wait .... line 578 "+i)
        form.getTextField(`Text${44+i}`).setText(this.appliances[i]['Make']);
        this.auth.setLoadingText("Please wait .... line 580 "+i)
        form.getTextField(`Text${48+i}`).setText(this.appliances[i]['Model']);
        this.auth.setLoadingText("Please wait .... line 582 "+i)
        form.getTextField(`Text${52+i}`).setText(this.appliances[i]['OwnedBy']);
        this.auth.setLoadingText("Please wait .... line 584 "+i)
        form.getTextField(`Text${56+i}`).setText(this.appliances[i]['Inspected']);
        this.auth.setLoadingText("Please wait .... line 586 "+i)
        form.getTextField(`Text${60+i}`).setText(this.appliances[i]['Flue']);
        this.auth.setLoadingText("Please wait .... line 588 "+i)
        form.getTextField(`Text${64+(i*10)}`).setText(this.appliances[i]['OptPrs']+" "+this.appliances[i]['OPU']);
        this.auth.setLoadingText("Please wait .... line 590 "+i)
        form.getTextField(`Text${65+(i*10)}`).setText(this.appliances[i]['OSD']);
        this.auth.setLoadingText("Please wait .... line 592 "+i)
        form.getTextField(`Text${66+(i*10)}`).setText(this.appliances[i]['VS']);
        this.auth.setLoadingText("Please wait .... line 594 "+i)
        form.getTextField(`Text${67+(i*10)}`).setText(this.appliances[i]['VCF']);
        this.auth.setLoadingText("Please wait .... line 596 "+i)
        form.getTextField(`Text${68+(i*10)}`).setText(this.appliances[i]['FOC']);
        this.auth.setLoadingText("Please wait .... line 598 "+i)
        form.getTextField(`Text${69+(i*10)}`).setText(this.appliances[i]['ComRead']);
        this.auth.setLoadingText("Please wait .... line 599 "+i)
        if (this.appliances[i]['OwnedBy'] == "Landlord"  && this.appliances[i]["AppType"] != "Boiler") {
          form.getTextField(`Text${70+(i*10)}`).setText("No");  
        } else {
          form.getTextField(`Text${70+(i*10)}`).setText("Yes");  
        }        
        this.auth.setLoadingText("Please wait .... line 600 "+i)
        form.getTextField(`Text${71+(i*10)}`).setText(this.certificate.COFitted); 
        this.auth.setLoadingText("Please wait .... line 601 "+i)
        form.getTextField(`Text${72+(i*10)}`).setText(this.certificate.COTested); 
        this.auth.setLoadingText("Please wait .... line 602 "+i)
        form.getTextField(`Text${73+(i*10)}`).setText(this.appliances[i]['STU']); 
        this.auth.setLoadingText("Please wait .... line 603 "+i)
  
  
  
        form.getTextField(`Text${104+(i*3)}`).setText(this.appliances[i]['DefId']);
        this.auth.setLoadingText("Please wait .... line 6004 "+i)
        form.getTextField(`Text${105+(i*3)}`).setText(this.appliances[i]['GIUSP']);
        this.auth.setLoadingText("Please wait .... line 605 "+i)
        form.getTextField(`Text${106+(i*3)}`).setText(this.appliances[i]['WarAdRec']);
        this.auth.setLoadingText("Please wait .... line 606 "+i)
  
        form.getTextField(`Text${116+i}`).setText(this.appliances[i]['RemAc']);
        this.auth.setLoadingText("Please wait .... line 607 "+i)
        form.getTextField(`Text${125+i}`).setText(this.appliances[i]['HRatio']); 
        form.getTextField(`Text${129+i}`).setText(this.appliances[i]['HCO2Val']);
        form.getTextField(`Text${133+i}`).setText(this.appliances[i]['HCOPPM']);
        form.getTextField(`Text${137+i}`).setText(this.appliances[i]['LRatio']);
        form.getTextField(`Text${141+i}`).setText(this.appliances[i]['LCO2Val']);
        form.getTextField(`Text${145+i}`).setText(this.appliances[i]['LCOPPM']);
       }
  
  
  
      // Serialize the PDFDocument to bytes (a Uint8Array)
      this.auth.setLoadingText("Please wait .... line 613")
      const pdfBytes = await pdfDoc.save();
      this.auth.setLoadingText("Please wait .... line 615")
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      
      console.log(pdfBytes);
      
      console.log(pdfDataUri);
      this.auth.setLoadingText("Please wait .... line 621")
      // Trigger the browser to download the PDF document
      this.saveAndOpenPdf(pdfDataUri,"certificate.pdf");
  }

    
  saveAndOpenPdf(pdf: string, filename: string) {
    this.auth.setLoadingText("Please wait .... line 628")
    // const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
    var blob = new Blob([pdf], {type: 'application/pdf'});
    var blobURL = URL.createObjectURL(blob);
    window.open(blobURL,"_system");

    // this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(pdf, 'data:application/pdf;base64'), {replace: true})
    //   .then(() => {
    //     this.auth.setLoadingText("Please wait .... line 632")
    //     window.open()
    //       // this.windows.open(writeDirectory + filename, 'application/pdf').then(res=>{
    //       //   this.auth.dismissLoading();
    //       //   this.Complete = false;
    //       // }).catch(() => {
    //       //   this.auth.setLoadingText("Please wait .... line 621")
    //       //   this.auth.dismissLoading()
    //       //   this.auth.showToast('Error opening pdf file');
    //       //     });
    //   })
    //   .catch(() => {
    //       this.auth.dismissLoading()
    //       this.auth.showToast('Error writing pdf file');
    //   });
  }

  convertBase64ToBlob(b64Data, contentType): Blob {
    this.auth.setLoadingText("Please wait .... line 649")
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);
         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
    }
   return new Blob(byteArrays, {type: contentType});
  }

  
  // async loadFiles(){
  //   const videoList = await Storage.get({key:FILE_KEY});
  //   this.myFiles = JSON.parse(videoList.value) || [];
  // }

  private convertBlobToBase64 = (blob:Blob) => new Promise((resolve, reject)=>{
    console.log("RRRRRRRRR");
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = ()=>{
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  private getMimetype(name){
    if(name.indexOf('pdf') >= 0){
      return 'application/pdf'
    }else if(name.indexOf('jpeg') >= 0){
      return 'images/jpeg'
    }
  }


  // downloadFile(url){
  //   console.log("RRRRRRRRR");
    
  //  url = "https://ticket.home360.org.uk//Content/assets/documents/claims/claim-500916/Job-2-580ad877-b68e-4147-8b1e-0d91cbf01819.pdf" ;
  //  this.http.get(url,{
  //    responseType : 'blob',
  //    reportProgress: true,
  //    observe: 'events'
  //  }).subscribe(async event =>{
  //   console.log("RRRRRRRRR");
  //    if(event.type === HttpEventType.DownloadProgress){
  //      this.downloadProgress = Math.round((100*event.loaded)/event.total);       
  //    }else if(event.type === HttpEventType.Response){
  //     this.downloadProgress =0;
  //     const name = url.substr(url.lastIndexOf('/') + 1);
  //     console.log("RRRRRRRRR");
  //     const base64 = await this.convertBlobToBase64(event.body) as string;

  //     const savedFile = await Filesystem.writeFile({
  //       path: name,
  //       data : base64,
  //       directory: FilesystemDirectory.Documents,
  //     });
  //     const path = savedFile.uri;
  //     const mimeType = this.getMimetype(name);

  //     this.fileOpener.open(path, mimeType)
  //     .then(()=> console.log('File opened'))
  //     .catch(error=> console.log('Error opening File',error))

  //     this.myFiles.unshift(path);
  //     Storage.set({
  //       key: FILE_KEY,
  //       value: JSON.stringify(this.myFiles)
  //     })
  //    }
  //  })
  // }



  CompleteClick() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: this.data,
      }
    };
    this.router.navigate(['complete-service'], navigationExtras);
  }

  // generateCertificate(){
  //   this.popup();
  // }

  // sendCertificate() {
  //   this.auth.presentLoading("Please Wait");
  //   this.syncApp().then(res=>{
  //     console.log(res);
  //     this.syncCert().then(res=>{
  //       console.log(res);
  //       this.auth.dismissLoading();
  //       this.auth.showToast("Success! Certificate has been sent successfully",'success')
  //     }).catch(e=>{});
  //   }).catch(e=>{});
    
  // }

  // syncCert(){
  //   return new Promise((resolve, reject)=>{
  //     this.auth.database.executeSql('select * from certificate where HaveData=? and JOBGUID=?',['yes',this.data['JOBGUID']]).then(res=>{  
  //       let params = new HttpParams()
  //            .set('JOBGUID',res.rows.item(0)['JOBGUID'])
  //            .set('DetailsWork',res.rows.item(0)['DetailsWork'])
  //            .set('NoOfAppTested',res.rows.item(0)['NoOfAppTested'])
  //            .set('NextDueDt',res.rows.item(0)['NextDueDt'])
  //            .set('OGIns',res.rows.item(0)['OGIns'])
  //            .set('OGSup',res.rows.item(0)['OGSup'])
  //            .set('ECon',res.rows.item(0)['ECon'])
  //            .set('OGTight',res.rows.item(0)['OGTight'])
  //            .set('COFitted',res.rows.item(0)['COFitted'])
  //            .set('COTested',res.rows.item(0)['COTested'])
  //            .set('EquiBond',res.rows.item(0)['EquiBond'])
  //            .set('SigImage',res.rows.item(0)['SigImage'])
  //            .set('SigRec',res.rows.item(0)['SigRec'])
  //            .set('FlueChkDt',res.rows.item(0)['FlueChkDt'])
  //            .set('ClaimJobId',res.rows.item(0)['ClaimJobId'])
  //            .set('ParentJobGuid','');
  //            this.auth.httpSend('Service_Certificate',params,'post').subscribe(
  //              (msg)=>{             
  //               console.log('##SUCCESS certificate SYNC' + JSON.stringify(msg));
  //               resolve("certificate Complete");
  //            },
  //            (err)=>{
  //              console.log('##ERROR certificate SYNC' + JSON.stringify(err));
  //              resolve("certificate incomplete");
  //            }
  //            );
        
  //     }).catch(e=>{
  //       console.log("Error geting certificate "+JSON.stringify(e));      
  //     });
  //   });
  // }

  // syncApp(){
  //   return new Promise((resolve, reject)=>{
  //     let array =[];
  //     this.auth.database.executeSql('select * from newappliance where HaveData=? and JOBGUID=?',['yes',this.data['JOBGUID']]).then(res=>{        
  //       if (res.rows.length>0) {
  //         for(let i=0; i< res.rows.length; i++ ){          
  //           let params = new HttpParams()
  //           .set('JOBGUID',res.rows.item(i)['JOBGUID'])
  //           .set('AppType',res.rows.item(i)['AppType'])
  //           .set('Make',res.rows.item(i)['Make'])
  //           .set('Model',res.rows.item(i)['Model'])
  //           .set('BType',res.rows.item(i)['BType'])
  //           .set('Loc',res.rows.item(i)['Loc'])
  //           .set('Flue',res.rows.item(i)['Flue'])
  //           .set('OwnedBy',res.rows.item(i)['OwnedBy'])
  //           .set('Inspected',res.rows.item(i)['Inspected'])
  //           .set('ZeroGov',res.rows.item(i)['ZeroGov'])
  //           .set('OPU',res.rows.item(i)['OPU'])
  //           .set('OptPrs',res.rows.item(i)['OptPrs'])
  //           .set('OSD',res.rows.item(i)['OSD'])
  //           .set('VS',res.rows.item(i)['VS'])
  //           .set('VCF',res.rows.item(i)['VCF'])
  //           .set('FOC',res.rows.item(i)['FOC'])
  //           .set('ComRead',res.rows.item(i)['ComRead'])
  //           .set('HRatio',res.rows.item(i)['HRatio'])
  //           .set('HCO2Val',res.rows.item(i)['HCO2Val'])
  //           .set('HCOPPM',res.rows.item(i)['HCOPPM'])
  //           .set('LRatio',res.rows.item(i)['LRatio'])
  //           .set('LCO2Val',res.rows.item(i)['LCO2Val'])
  //           .set('LCOPPM',res.rows.item(i)['LCOPPM'])
  //           .set('STU',res.rows.item(i)['STU'])
  //           .set('DefId',res.rows.item(i)['DefId'])
  //           .set('GIUSP',res.rows.item(i)['GIUSP'])
  //           .set('WarAdRec',res.rows.item(i)['WarAdRec'])
  //           .set('RemAc',res.rows.item(i)['RemAc'])
  //           .set('IsDelete',res.rows.item(i)['IsDelete']);
  //           this.auth.httpSend('Service_ApplianceNew',params,'post').subscribe(
  //             (msg)=>{
  //                 console.log('##SUCCESS newappliance SYNC'+JSON.stringify(msg));    
  //                 array.push(msg['Msg']);
  //                 if (array.length==res.rows.length) {
  //                   resolve('newappliance complete');
  //                 } 
  //           },
  //           (err)=>{
  //             console.log('##ERROR newAplaince SYNC' + JSON.stringify(err));  
  //             array.push(err['header']);
  //             if (array.length==res.rows.length) {
  //               resolve('newappliance incomplete');
  //             }       
  //           }
  //           );//end subscribe
  //           }//end for loop 
  //       } else {
  //         resolve("there is no data in newappliance")
  //       }    
  //     }).catch(e=>{
  //       console.log("Error geting newAplaince "+JSON.stringify(e));      
  //     });
     
  //   });
  // }


  //Popup

  
  // async popup() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Are You Sure?',
  //     subHeader: 'Have you save and send the certificate first?',
  //     backdropDismiss: false,
  //     buttons: [
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.signatureformGenerateClick();
  //         }
  //       },
  //       {
  //         text: 'No',
  //         handler: () => {
           
  //         }
  //       }]
  //   });
  //   await alert.present();
  // }

  


}
