import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appliancedetails',
  templateUrl: './appliancedetails.page.html',
  styleUrls: ['./appliancedetails.page.scss'],
})
export class AppliancedetailsPage implements OnInit {

  data: any[];
  Detailsworkcarriedout:string=' ';
  appliancestestedNumber:string=' ';
  safetycheckDate: string;
  currentyear: any;
  lastyear: any;
  constructor(private router:Router, private route:ActivatedRoute, private auth:ApiService,
    private datePipe : DatePipe) { }

  ngOnInit() {
    this.currentyear = this.auth.getdateformatV2();
    this.currentyear = this.currentyear.split("/")[2];
    this.currentyear = parseInt(this.currentyear.split(" ")[0]);
    this.lastyear = this.currentyear+10;
    
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data   = this.router.getCurrentNavigation().extras.state.data;}
        this.auth.getLocation();  
      });

      this.auth.database.executeSql('select * from certificate where JOBGUID=?',[this.data['JOBGUID']])
      .then(res => {
        console.log("@@"+res.rows.item(0)['JOBGUID']+","+res.rows.item(0)['DetailsWork']+","+res.rows.item(0)['NoOfAppTested']+","+res.rows.item(0)['NextDueDt']);
        const inputDate = res.rows.item(0)['NextDueDt'];
        const [dd, MM, yyyy, HH, mm, ss] = inputDate.split(/[\s/:]+/); // split the date string into components
        const isoDate = new Date(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`).toISOString(); //converting to ISO date formate
        this.Detailsworkcarriedout = res.rows.item(0)['DetailsWork'];
        this.appliancestestedNumber = res.rows.item(0)['NoOfAppTested'];
        this.safetycheckDate = isoDate;
      }).catch(e=>{console.log("error getting saved certicate appliance Details :"+e);
    })
  }
  saveNext(){
      if(this.Detailsworkcarriedout==' ' || this.Detailsworkcarriedout== undefined){
        this.auth.showToast('Details of work carried out cannot be empty','danger');

      }else{

      if(this.appliancestestedNumber==' ' || this.appliancestestedNumber == undefined){

        this.auth.showToast('Number of appliances tested cannot be empty','danger');

      }else{

        if( parseInt(this.appliancestestedNumber)>4){

        this.auth.showToast('Number of tested devices cannot be more than 4','danger');

        }else{

          if(this.safetycheckDate==null){
            this.auth.showToast('Safety check date can not be empty.','danger');

          }else{
            console.log("before " +this.safetycheckDate);
            let date = new Date(this.safetycheckDate);
            let formattedDate= this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
            console.log("after " +this.safetycheckDate);
            // this.auth.showToast(a);
            this.auth.database.executeSql('update certificate set DetailsWork=?, NoOfAppTested=?, NextDueDt=? where JOBGUID=?',[this.Detailsworkcarriedout,this.appliancestestedNumber, formattedDate,this.data['JOBGUID']])
           .then((res)=>{
            this.data['DetailsWork']=this.Detailsworkcarriedout;
            this.data['NoOfAppTested']=this.appliancestestedNumber;
            this.data['NextDueDt']=this.safetycheckDate;
            
            console.log(JSON.stringify(res));
            const navigationExtras: NavigationExtras = {
              state: {
              data: this.data,
                    }
             };
              this.router.navigate(['outcomes'], navigationExtras);
            }).catch((e)=>{
              this.auth.showToast('Error Saving Data '+e,'danger');    
            });
          }
         
        }
        
        }
      }
  }

  isDateFormatValid(dateString: string): boolean {
    const pattern = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
    return pattern.test(dateString);
  }
}
