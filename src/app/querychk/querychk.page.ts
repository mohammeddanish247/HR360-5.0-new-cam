import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-querychk',
  templateUrl: './querychk.page.html',
  styleUrls: ['./querychk.page.scss'],
})
export class QuerychkPage implements OnInit {
  data=[];

  constructor(private auth:ApiService,private router:Router ,    private route: ActivatedRoute ,) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('#devdx JOBGUID: ', this.data['JOBGUID']);
         
    }
  });
  }

  show(){//this.data["JOBGUID"]
    this.auth.database.executeSql('select * from completeservice where JOBGUID=? ',[this.data["JOBGUID"]]).then((completeServiceRes)=>{
      console.log("#devdx success gett "+JSON.stringify(completeServiceRes.rows.length));

      for(let i=0; i< completeServiceRes.rows.length; i++){
        console.log("#devdx success gett "+JSON.stringify(completeServiceRes.rows.item(i)));
      }

    }).catch((e)=>{
      console.log("#devdx error gett "+JSON.stringify(e));
      
    });
  }

  //    where JOBGUID=?', [this.jobOutCome,f.value.additional,f.value.parts ,this.base64, this.auth.getdateformatV2(), this.auth.lat, this.auth.long,this.data['CLAIMJOBID'], 'yes',this.data['BackgroundColour'], this.data['JOBGUID']])

  store(){
    this.auth.database.executeSql('update  completeservice set OUTCOME=?,JOBNOTE=?,PARTS=?, FILEBASE=?,OnDt=?, Latitude=?,Longitude=?,ComboClaimJobId=?, CantCompleteReason=?, IsServiceCompleted=?, BackgroundColour=? where JOBGUID=?', ["jboutcome","additional","parts","file", "date", "lat", "long", "claimguid", "canntcpltresn","isservicecompltd","bgclr" , this.data["JOBGUID"]])
    .then((res) => {
     
      console.log("#devdx stored "+JSON.stringify(res));
      
    }).catch((e)=>{
      
      console.log("#devdx stored error "+JSON.stringify(e));
    });
    

    


    // this.auth.database.executeSql("update arrived set Lattitude=?,Longitude=?,OnRouteDT=? where JOBGUID=?",["latti","longitude","OnRouteDT",this.data['JOBGUID']]).then(
    //   (res)=>{
    //     this.auth.dismissLoading();
    //       console.log('### arrived '+JSON.stringify(res));         
    //   }
    // ).catch((e)=>{console.log('error'+JSON.stringify(e));
    // });

  }


  insert(){

    this.auth.database.executeSql("insert into  completeservice (JOBGUID) values(?)",["sabir"])
    .then((res)=>{console.log('# complete Service Table inserted ');        
     }).catch((e)=>{console.log('# complete  Service Table inseet ERROR '+JSON.stringify(e));});

  }

  
  public createCompleteServiceTable(){
    return new Promise((resolve, reject)=>{
    this.auth.database.executeSql("create table IF NOT EXISTS completeservice (JOBGUID  VARCHAR(32)  , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), ComboIsCompleted VARCHAR(32), CantCompleteReason VARCHAR(32),  IsServiceCompleted VARCHAR(32), BackgroundColour VARCHAR(32))",[])
    .then((res)=>{console.log('# complete Service Table created ');         resolve('complete Service table created success');
     }).catch((e)=>{console.log('# complete  Service Table Create ERROR '+JSON.stringify(e));});
    });
  }

}
