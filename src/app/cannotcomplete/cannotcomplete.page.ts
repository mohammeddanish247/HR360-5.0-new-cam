import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpParams} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cannotcomplete',
  templateUrl: './cannotcomplete.page.html',
  styleUrls: ['./cannotcomplete.page.scss'],
})
export class CannotcompletePage implements OnInit {

  Reason:any="";
  data:any[];

  constructor(private auth :ApiService,private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data; 
        this.auth.getLocation();    
        this.auth.database.executeSql('select * from completeservice where ParentJobGuid=?',[this.data['JOBGUID']]).then(res=>{
          console.log(JSON.stringify(res));          
          this.Reason = res.rows.item(0)['CantCompleteReason'];
        });
      }
    });
  }



  CannotcompleteClick(){

    if(this.Reason=='' || this.Reason == null){
        this.auth.showToast('Reason cannot be empty','danger');
    }else{

      if (this.data['BackgroundColour']=='#20B2AA') { 
        this.auth.database.executeSql('update completeservice set HaveData=?, CantCompleteReason=?, IsServiceCompleted=? , BackgroundColour=? where ParentJobGuid=?', ["service not completed",this.Reason, 'No',this.data['BackgroundColour'], this.data['JOBGUID']])
        .then((res)=>{
          this.auth.showToast('Service Not Completed','warning');
          this.router.navigate(['details']);
  
        }).catch((e)=>{
            this.auth.showToast('Cannot update db '+JSON.stringify(e),'danger');
        });
        
      }

    }

  }

}
