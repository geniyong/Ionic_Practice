import { NgModule } from '@angular/core';
import { SignUpPage } from './signup';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
  ],
  entryComponents: [
    SignUpPage,
  ]
})

export class SignupModule {}
