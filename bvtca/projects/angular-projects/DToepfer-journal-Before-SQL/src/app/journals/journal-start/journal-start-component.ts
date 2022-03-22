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

  
  constructor(private journalService: JournalService) {
  }

  ngOnInit(): void {
  this.initForm();
  }


  onLogin(){
    this.journalService.logIn(this.loginForm.value);
    this.loginBool = true;

  }

  private initForm(){
    let LogInUsername = "";
    let LogInPassword = "";

    this.loginForm = new FormGroup({
      'username': new FormControl(LogInUsername, Validators.required),
      'password': new FormControl(LogInPassword, Validators.required)
    })
  }

  

}