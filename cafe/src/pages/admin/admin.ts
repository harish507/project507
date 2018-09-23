import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import {  RemuserPage } from '../remuser/remuser';
import {  ScanPage } from '../scan/scan';



@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  adduser() {
    this.navCtrl.push(RegPage);
     }
   remuser() {
      this.navCtrl.push(RemuserPage);
       }
       scan() {
        this.navCtrl.push(ScanPage);
         }

  

}
