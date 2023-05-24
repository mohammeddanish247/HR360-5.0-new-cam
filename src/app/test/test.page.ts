import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public model = [];
  content: string;

  selectedFileBLOB = "./assets/files/cert1.pdf";
  pdfData: string | ArrayBuffer;
  constructor(
    public auth : ApiService,
  ) {

  }

  ngOnInit() {
    this.auth.database.executeSql("select * from SyncLog",[]).then(res=>{
      for (let i = 0; i < parseInt(JSON.stringify(res.rows.length)); i++) {
        this.model.push(res.rows.item(i));
      }
    }).catch(e=>{
      this.auth.showToast("err"+JSON.stringify(e));
    })
      
  }

  Clear(){
    this.auth.database.executeSql("delete from SyncLog",[]).then(res=>{
      this.model= [];
    })
  }


}