import { Component, OnInit, ViewChild } from '@angular/core';

import { IonInfiniteScroll, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent implements OnInit {
  name: string;
  msg;
  data;

  private dataList : any = [];
  private topLimit : number = 30;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private modalCtrl: ModalController) {
   
  }
  ngOnInit(): void {
    this.dataList = this.data.slice(0, this.topLimit);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(name:string) {
    return this.modalCtrl.dismiss(name, 'confirm');
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');

      this.topLimit += 30;
      this.dataList = this.data.slice(0, this.topLimit);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == this.dataList.length) {
        event.target.disabled = true;
      }
    }, 100);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}