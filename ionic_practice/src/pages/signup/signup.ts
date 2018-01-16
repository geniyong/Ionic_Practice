import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";

@Component({
  templateUrl: 'signup.html'
})

export class SignUpPage {

  formgroup:FormGroup;
  id:AbstractControl;
  password:AbstractControl;

  // input 의 id password 를 가져옴
  @ViewChild('idValue') idValue;
  @ViewChild('passwordValue') passwordValue;

  // login Validation 파악
  constructor(public navCtrl: NavController,
              public alertCtrl:AlertController,
              public formBuilder:FormBuilder ) {

    this.formgroup= formBuilder.group({
      id:['',Validators.required],
      password:['',Validators.required]
    });

    this.id = this.formgroup.controls['id'];
    this.password = this.formgroup.controls['password'];

  }

  // Home Page로
  goHomePage(){
    this.navCtrl.pop();
  }

  SignUp(){
    console.log(this.idValue.value,this.passwordValue.value);

    if(this.idValue.value=="admin" && this.passwordValue.value=="admin") {

      // Alert
      let alert = this.alertCtrl.create({
        title: 'admin',
        subTitle: 'You are signed up!',
        buttons: ['OK']
      });

      alert.present();
    }
  }
}
