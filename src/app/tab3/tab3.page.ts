import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import {
  AlertController,
  IonContent,
  IonSlides,
  NavController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { ActivatedRoute, Router } from "@angular/router";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpParams, JsonpClientBackend } from "@angular/common/http";
declare var require: any;
// const FileSaver = require("file-saver");
@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  namee: string;
  constructor(
    private api: ApiService,
    private storage: Storage,
    public router: Router,
    private route: ActivatedRoute,
    public statusbar: StatusBar,
    public alertCtrl: AlertController,
    private navCtrl: NavController,
    public auth : ApiService
  ) {
    route.params.subscribe((val) => {
      this.LogoutAction();
    });
  }
  ngOnInit() {}
  async LogoutAction() {
    const alert = await this.alertCtrl.create({
      header: "Are you Sure?",
      subHeader: "You will be logged out",
      backdropDismiss: false,
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            this.logoutcancel();
          },
        },
        {
          text: "Logout",
          handler: () => {
            this.auth.logout();
          },
        },
      ],
    });
    await alert.present();
  }

  logoutcancel() {
    this.navCtrl.navigateRoot("tabs");
  }

}
