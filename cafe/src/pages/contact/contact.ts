import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items:string="contact";
  isAndroid: boolean=false;

  constructor(public navCtrl: NavController) {

  }

}
