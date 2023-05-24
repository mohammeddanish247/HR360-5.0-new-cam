import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SQLite } from '@ionic-native/sqlite/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { SpeedTestModule } from 'ng-speed-test';
import {  FormsModule, NG_VALIDATORS, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import {IonicStorageModule} from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {   customValidator } from './app.validator';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
import { ModalExampleComponent } from './modalpopup/modal-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DatePipe } from '@angular/common';


   @NgModule({
  declarations: [AppComponent, ScrollToBottomDirective, ModalExampleComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot() ,AppRoutingModule,HttpClientModule, NoopAnimationsModule,SpeedTestModule, FormsModule, ScrollingModule ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    Keyboard,
    InAppBrowser,
    NativeGeocoder,
    AndroidPermissions,
    LocationAccuracy,
    DatePipe,
    FingerprintAIO,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     {
      provide: NG_VALIDATORS,
      useValue: customValidator,
      multi: true
  },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
