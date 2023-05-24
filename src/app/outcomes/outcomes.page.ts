import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.page.html',
  styleUrls: ['./outcomes.page.scss'],
})
export class OutcomesPage implements OnInit {

  data:any[];
  Outcomegasinstallation: string='';
  Outcomegassupply: string='';
  emergencycontrolvalveaccess: string='';
  gastightnesstest: string='';
  protectiveequipotentialbonding: string='';
  COalarmFitted: string='';
  COalarmtested: string='';
 

  constructor(private router:Router, private route:ActivatedRoute, private auth:ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;
      }
      });

      this.auth.database.executeSql('select * from certificate where JOBGUID=?',[this.data['JOBGUID']])
      .then(res => {
        console.log("@@"+res.rows.item(0)['OGIns']+","+res.rows.item(0)['OGSup']+","+res.rows.item(0)['ECon']+","+res.rows.item(0)['COTested']);
        this.Outcomegasinstallation = res.rows.item(0)['OGIns'];
        this.Outcomegassupply = res.rows.item(0)['OGSup'];
        this.emergencycontrolvalveaccess = res.rows.item(0)['ECon'];
        this.gastightnesstest = res.rows.item(0)['OGTight'];
        this.protectiveequipotentialbonding = res.rows.item(0)['EquiBond'];
        this.COalarmFitted = res.rows.item(0)['COFitted'];
        this.COalarmtested = res.rows.item(0)['COTested'];
        
      }).catch(e=>{console.log("error getting saved certicate outcomes :"+e);
      })
    
  }
  

  OutComesDetailsClick(){
  if(this.Outcomegasinstallation== undefined || this.Outcomegasinstallation==''){
      this.auth.showToast('Please select an answer for Question:1','danger');
    }else{
      if(this.Outcomegassupply==undefined || this.Outcomegassupply==''){
        this.auth.showToast('Please select an answer for Question:2','danger');
      }else{
        if(this.emergencycontrolvalveaccess==undefined ||this.emergencycontrolvalveaccess==''){
          this.auth.showToast('Please select an answer for Question:3','danger');
        }else{
          if(this.gastightnesstest==undefined || this.gastightnesstest==''){
            this.auth.showToast('Please select an answer for Question:4','danger');
          }else{
            if(this.protectiveequipotentialbonding==undefined || this.protectiveequipotentialbonding==''){
              this.auth.showToast('Please select an answer for Question:5','danger');
            }else{
              if(this.COalarmFitted==undefined || this.COalarmFitted==''){
                this.auth.showToast('Please select an answer for Question:6','danger');
              }else{
                if(this.COalarmtested==undefined || this.COalarmtested==''){
                  this.auth.showToast('Please select an answer for Question:7','danger');
                }else{
                  this.auth.database.executeSql('update certificate set OGIns=?, OGSup=?, ECon=?, OGTight=?,EquiBond=?, COFitted=?, COTested=? where JOBGUID=?',[this.Outcomegasinstallation, this.Outcomegassupply, this.emergencycontrolvalveaccess, this.gastightnesstest, this.protectiveequipotentialbonding, this.COalarmFitted, this.COalarmtested, this.data['JOBGUID'] ])
                  .then((res)=>{
                   
                     
                  this.data['OGIns'] =  this.Outcomegasinstallation;
                  this.data['OGSup'] =  this.Outcomegassupply;
                  this.data['ECon'] =  this.emergencycontrolvalveaccess;
                  this.data['OGTight'] =  this.gastightnesstest;
                  this.data['EquiBond'] =  this.protectiveequipotentialbonding;
                  this.data['COFitted'] =  this.COalarmFitted;
                  this.data['COTested'] =  this.COalarmtested;
                   
                  const navigationExtras: NavigationExtras = {
                    state: {
                      data: this.data,
                    }
                  }
                  this.router.navigate(['signaturecertificate'], navigationExtras);
                  }).catch((e)=>{
                      console.log('Error '+JSON.stringify(e));           
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
