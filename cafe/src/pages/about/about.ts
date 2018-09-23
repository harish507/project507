import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items:string="Breakfast";
  isAndroid: boolean=false;

  constructor(public navCtrl: NavController) {

  }

}
