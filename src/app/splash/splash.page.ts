import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, ViewDidEnter {

  constructor(public router : Router) { 

  }


  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
  }

}
