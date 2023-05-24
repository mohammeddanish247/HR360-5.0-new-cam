import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import SignaturePad from 'signature_pad';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-boilerinstallsign',
  templateUrl: './boilerinstallsign.page.html',
  styleUrls: ['./boilerinstallsign.page.scss'],
})
export class BoilerinstallsignPage implements OnInit {

  data: any[];

  completed: any = '';
  installationNOT: any = '';
  defects: any = '';
  installationnotsuccess: any = '';
  damage: any = '';
  damageNOT: any = '';
  AdditionalNotes: any = '';
  InstallerName: any = '';
  CustomerName: any = '';

  installationFlag: boolean = true;
  installationnotdoneFlag: boolean = true;
  NOdamageFlag:boolean= true;

  EngsignaturePad1: SignaturePad;
  EngsignaturePad2: SignaturePad;
  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage, private auth: ApiService, private elementRef: ElementRef) { }

  ngOnInit() {
    
    this.auth.getLocation();  
    const canvas1: any = this.elementRef.nativeElement.querySelector('#Engsigcanvas1');
    const canvas2: any = this.elementRef.nativeElement.querySelector('#Engsigcanvas2');
    this.EngsignaturePad1 = new SignaturePad(canvas1);
    this.EngsignaturePad2 = new SignaturePad(canvas2);

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });

    this.auth.database.executeSql('select * from boilerinstallationsign where JOBGUID=?',[this.data['JOBGUID']]).then((res)=>{
      this.EngsignaturePad1.fromDataURL('data:image/jpeg;base64,'+res.rows.item(0)['InstallerSig'],{
        width: canvas1.width,
        height: canvas1.height
      }); 
      console.log("Danish :"+this.EngsignaturePad1);
          
      this.EngsignaturePad2.fromDataURL('data:image/jpeg;base64,'+res.rows.item(0)['CustomerSig'],{
        width: canvas2.width,
        height: canvas2.height
      });
      this.completed = res.rows.item(0)['BInsComplete'];
      this.installationNOT = res.rows.item(0)['BInsComplete_Reason'];
      this.defects = res.rows.item(0)['BInsDefects'];
      this.installationnotsuccess = res.rows.item(0)['BInsDefects_Reason'];
      this.damage = res.rows.item(0)['BInsDamage'];
      this.damageNOT = res.rows.item(0)['BInsDamage_Reason'];
      this.AdditionalNotes = res.rows.item(0)['BInsAddNotes'];
      this.InstallerName = res.rows.item(0)['InstallerName'];
      this.CustomerName = res.rows.item(0)['CustomerName'];
    }).catch((e)=>{
    });

  }

  
  



  completedClick() {
    // this.auth.database.executeSql('update boilerinstallationsign set BInsComplete=? where JOBGUID=?',[this.completed, this.data['JOBGUID']]).then((res)=>{       
    // }).catch((e)=>{
    // });

    if (this.completed == 'YES') {
      this.installationFlag = true;
    } else {
      this.installationFlag = false;
    }

  }

  installationClick() {

    // this.auth.database.executeSql('update boilerinstallationsign set BInsDefects=? where JOBGUID=?',[this.defects, this.data['JOBGUID']]).then((res)=>{      
    // }).catch((e)=>{
    // });

    if (this.defects == 'YES') {
      this.installationnotdoneFlag = true;
    } else {
      this.installationnotdoneFlag = false;
    }

  }

  
  damageClick() {
    // this.auth.database.executeSql('update boilerinstallationsign set BInsDamage=? where JOBGUID=?', [this.damage, this.data['JOBGUID']]).then((res) => {
    // }).catch((e) => {
    // });
    if (this.damage == 'YES') {
      this.NOdamageFlag = true;
    } else {
      this.NOdamageFlag = false;
    }

  }



  save1() {
    let image = this.EngsignaturePad1.toDataURL();
    this.auth.database.executeSql('update boilerinstallationsign set InstallerSig=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
    this.auth.showToast('Success! Installer Signature has been Saved.','success');
    }).catch((e) => {
      this.auth.showToast('Signature not saved Error.'+JSON.stringify(e),'danger');
    });
  }

  save2() {
    let image = this.EngsignaturePad2.toDataURL();
    this.auth.database.executeSql('update boilerinstallationsign set CustomerSig=? where JOBGUID=?', [image.split(',')[1], this.data['JOBGUID']]).then((res) => {
      this.auth.showToast('Success! Customer Signature has been Saved.','success');
    }).catch((e) => {
      this.auth.showToast('Signature not saved Error.'+JSON.stringify(e),'danger');
    });
  }

  isCanvasBlank1() {
    return this.EngsignaturePad1.isEmpty();
  }

  isCanvasBlank2() {
    return this.EngsignaturePad2.isEmpty();
  }

  clear1() {
    this.EngsignaturePad1.clear();
  }

  clear2() {
    this.EngsignaturePad2.clear();
  }

  boilerInsSignature() {
      if (this.completed== undefined || this.completed=='') {
        this.auth.showToast("Confirmation of Installation complete can not be empty",'danger');
      } else {
        if (this.defects== undefined || this.defects=='') {
          this.auth.showToast("Confirmation of Installation Defects can not be empty",'danger');
        } else {
          if (this.damage== undefined || this.damage=='') {
            this.auth.showToast("Confirmation of Installation Damage can not be empty",'danger');
          } else {
            if (this.AdditionalNotes== undefined || this.AdditionalNotes=='') {
              this.auth.showToast("Additional Notes can not be empty",'danger');
            } else {
              if (this.EngsignaturePad1.isEmpty()) {
                this.auth.showToast("Installer Signature can not be empty",'danger');
              } else {
                if (this.EngsignaturePad2.isEmpty()) {
                  this.auth.showToast("Customer Signature can not be empty",'danger');
                } else {
                  if (this.InstallerName== undefined || this.InstallerName=='') {
                    this.auth.showToast("Installer Name can not be empty",'danger');
                  } else {
                    if (this.CustomerName== undefined || this.CustomerName=='') {
                      this.auth.showToast("Customer Name can not be empty",'danger');
                    } else {

                      this.auth.database.executeSql("update  boilerinstallationsign set HaveData=?, BInsComplete=?, BInsComplete_Reason=?, BInsDefects=?, BInsDefects_Reason=?, BInsDamage=?, BInsDamage_Reason=?, BInsAddNotes=?, InstallerName=?, CustomerName=?  where JOBGUID=? ",[ 'yes',this.completed,this.installationNOT,this.defects,this.installationnotsuccess,this.damage,this.damageNOT,this.AdditionalNotes,this.InstallerName,this.CustomerName,this.data['JOBGUID']]).then((res)=>{
                        
                        this.auth.database.executeSql("update  jobsstatus set  status=? where JOBGUID=? ",[ 'completed', this.data['JOBGUID']]).then((res)=>{
                          this.auth.showToast('Sucess! Boiler Installaion has been Completed.','success'); 
                          this.router.navigate(['details']);
                        }).catch((e)=>{
                 
                        });
                       }).catch((e)=>{
                 
                       });
                      
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
