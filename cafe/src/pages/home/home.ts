import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Login2Page } from '../login2/login2';
import { RegPage } from '../reg/reg';
import { AdduserPage } from '../adduser/adduser';
import { RemuserPage } from '../remuser/remuser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  login2(){
    this.navCtrl.push(Login2Page);
  }
  reg(){
    this.navCtrl.push(RegPage);
  }
  remuser(){
    this.navCtrl.push(RemuserPage);
  }

  adduser(){
    this.navCtrl.push(AdduserPage);
  }

}



