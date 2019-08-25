import { AccountPage } from './account';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
  ],
  exports: [
    AccountPage
  ]
})

export class AccountPageModule { }
