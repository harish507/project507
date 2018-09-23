import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AdduserPage } from '../pages/adduser/adduser';

import { Login2Page } from '../pages/login2/login2';
import { RegPage } from '../pages/reg/reg';
import { UserPage } from '../pages/user/user';
import { AdminPage } from '../pages/admin/admin';
import { RemuserPage } from '../pages/remuser/remuser';
import {  ScanPage } from '../pages/scan/scan';
import {HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { Pipe, PipeTransform } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    Login2Page,
    RegPage,
    UserPage,
    AdminPage,
    AdduserPage,
    RemuserPage,
    ScanPage
    
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),HttpClientModule,HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    Login2Page,
    RegPage,
    TabsPage,
    UserPage,
    AdminPage,
    AdduserPage,
    RemuserPage,
    ScanPage
  ],
  providers: [
    LoginProvider,
    AppSettingsProvider,
    StatusBar,
    SplashScreen,BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  
    
  
  ]
})
export class AppModule {}