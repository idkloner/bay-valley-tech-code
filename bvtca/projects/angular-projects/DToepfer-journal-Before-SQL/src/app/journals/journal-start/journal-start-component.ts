import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../journal.service';


@Component({
  selector: 'app-journal-start',
  templateUrl: './journal-start-component.html',
//   styleUrls: ['./journal-start.component.css']
 })
export class JournalStartComponent implements OnInit{
  loginBool = false;
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
    this.loginBool = true;

  }

  onRegister(){
    this.journalService.register({
      email: this.email,
      password: this.password
    });
  }


  private initForm(){
    let LogInEmail = "";
    let LogInPassword = "";

    this.loginForm = new FormGroup({
      'email': new FormControl(LogInEmail, Validators.required),
      'password': new FormControl(LogInPassword, Validators.required)
    })
  }

  

}