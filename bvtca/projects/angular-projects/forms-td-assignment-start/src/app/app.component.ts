import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultSub = "advanced";
  password = "";
  user = {
    email: "",
    subscription: "",
    password: ""

  };
  submitted = false;
 
  
onSubmit(){
  console.log(this.signupForm);
  this.submitted = true;
  this.user.email = this.signupForm.value.userData.email;
  this.user.subscription = this.signupForm.value.subscription;
  this.user.password = this.signupForm.value.password;
  console.log(this.user.email, this.user.subscription, this.user.password)
}

}
