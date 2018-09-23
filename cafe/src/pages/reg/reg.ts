import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { LoginPage } from '../login/login';
import { Login2Page } from '../login2/login2';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html'
})

export  class RegPage {
  
  formdata = {
  username: '',
  password:'',
  email:'',
  phone:'',
  role:''
  };
  submitAttempt: boolean = false;
  myForm: FormGroup;

  constructor(public http:Http,public navCtrl: NavController, public formBuilder: FormBuilder, public todoService: LoginProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {

    this.myForm = this.formBuilder.group({
    username: ['String', Validators.compose([Validators.minLength(6),Validators.maxLength(10),Validators.required])],
    password: ['String', Validators.compose([Validators.minLength(6),Validators.maxLength(10), Validators.required])],
    email: ['String', Validators.compose([Validators.required])],
    phone: ['String', Validators.compose([Validators.required])]
   
    });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }
  
  register() {

    this.submitAttempt = true;


    if(!this.myForm.valid){
      console.log("Not valid!");
    }

  else{
    let data = {
        username: this.formdata.username,
        password:this.formdata.password,
        email: this.formdata.email,
        phone: this.formdata.phone,
       role: this.formdata.role
    };
    console.log(data);

    this.http.post('http://localhost:3000/reg',data).pipe(
        map(res => res.json())
    ).subscribe(res => {
      console.log('POST Response:', res);
        this.navCtrl.push(Login2Page);
               
        this.showToast('',JSON.stringify(res));
    });
    /*this.http.get('http://localhost:3000/user').pipe(
        map(res => res.json())
    ).subscribe(response => {
        console.log('GET Response:', JSON.stringify(response));
        this.showToast('GET Response:', JSON.stringify(response));
    });*/

  }
}
  private showToast(message: string,res:Object) {
    let toast = this.toastCtrl.create({
      message: message + res,
      duration: 10000
    });
    toast.present();
  }
 
}
