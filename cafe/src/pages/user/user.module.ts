import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from '../user/user';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
    NgxQRCodeModule
  ],
})
export class UserPageModule {}
