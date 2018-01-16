import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { SignUpPage }from '../signup/signup';
import { MainPage }from '../main/main';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";

@Component({
  templateUrl: 'home.html'
})

export class HomePage {

  // input 의 id password 를 가져옴
  @ViewChild('idValue') idValue;
  @ViewChild('passwordValue') passwordValue;


  formgroup:FormGroup;
  id:AbstractControl;
  password:AbstractControl;

  // login Validation 파악
  constructor(public navCtrl: NavController,
              public alertCtrl:AlertController,
              public formBuilder:FormBuilder ) {

    this.formgroup= formBuilder.group({
      id:['',Validators.required],
      password:['',Validators.compose([Validators.required, Validators.maxLength(20)])]
    });

    this.id = this.formgroup.controls['id'];
    this.password = this.formgroup.controls['password'];

  }

  // Sign Up Page 이동
  goSignupPage() {

    this.navCtrl.push(SignUpPage);

  }

  // Sign In Button 선택시
  SignIn(){

   console.log(this.idValue.value,this.passwordValue.value);

    if(this.idValue.value=="admin" && this.passwordValue.value=="admin") {

      // Alert
      let alert = this.alertCtrl.create({
        title: 'Logged In!',
        message: 'This is for practicing to make hybrid application',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              this.navCtrl.push(MainPage);
            }
          }
        ]
      });
      alert.present();

    }
  }
}
