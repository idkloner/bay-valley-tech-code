import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted= false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male"

    // });
    this.signupForm.form.patchValue({    //patchvalue to only override a part of the form
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {   //this way requires passing f on html
  //   console.log(form);
  // }

  onSubmit(){
  console.log(this.signupForm);     //this way does not require passing f
  this.submitted = true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;


  this.signupForm.reset();

  }
}
