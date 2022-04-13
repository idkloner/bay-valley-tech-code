import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../journals/journal.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./journal-start.component.css']    //for some reason breaks when using this, so had to use in-line style
 })
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
 

  
  constructor(private journalService: JournalService) {
  }

  ngOnInit(): void {
  this.initForm();
  }


  onLogin(){
    this.journalService.logIn(this.loginForm.value);
    this.loginForm.reset();
    

    

  }

  onRegister(){
    console.log("onRegister")
    this.journalService.register(this.loginForm.value);
    this.loginForm.reset();
    console.log("registered");
  }


  private initForm(){
    let LogInEmail = "";
    let LogInPassword = "";

    this.loginForm = new FormGroup({
      'email': new FormControl(LogInEmail, [Validators.required, Validators.email]),
      'password': new FormControl(LogInPassword, Validators.required)
    })
  }

  

}