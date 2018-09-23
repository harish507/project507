import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AdminPage } from '../admin/admin';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';
import { RegPage } from '../reg/reg';
import { LoginPage } from '../login/login';
/**
 * Generated class for the Login2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {
  todos: Observable<any>;
  username:String;
  password:String;

  constructor(public http:Http,public navCtrl: NavController, public loginService:LoginProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    //this.loadTodos();
  }
 
  // //loadTodos() {
  //   this.todos = this.todoService.getTodos();
  // }
 
  get() {
 
        let data = {
            username: this.username,
            password: this.password
        };
        console.log(data);
 
        this.http.post('http://localhost:3000/users', data).pipe(
            map(res => res.json())
        ).subscribe(response => {
            //console.log('POST Response:', response);
            //this.showToast('Login Response:', JSON.stringify(response));
            if(response.success==true)
            {
              if(response.role=='admin'){
              this.showToast2(response.msg);
              this.navCtrl.push(AdminPage)}
              else{
                this.showToast2(response.msg);
                this.navCtrl.push(UserPage)
              }

            }

           /* else if(response.success==true)
            {
              this.navCtrl.push(LoginPage)
            }*/
            else{
              /*if(response.success==true)
              {
                this.navCtrl.push(AdminPage)
              }
              else
              {
                this.navCtrl.push(UserPage)
              }*/
              this.showToast2(response.msg);
              this.navCtrl.push(Login2Page);

            }

        });
      }
 
  private showToast(message: string,res:Object) {
    
    let toast = this.toastCtrl.create({
      message: message + res,
      duration: 10000
    });
    toast.present();
    }
    private showToast2(message: string) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 1000
      });
      toast.present();
    }
  private showToast3(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000
    });
    toast.present();
  }
}
