import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../journal.service';


@Component({
  selector: 'app-journal-start',
  templateUrl: './journal-start-component.html',
  //styleUrls: ['./journal-start.component.css']
 })
export class JournalStartComponent implements OnInit{
  @Output() loginBoolChanged: EventEmitter<boolean> = new EventEmitter();
  @Input() loginBool: boolean = false;
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
    console.log('should be logged in but idk')
    // this.loginBool = true;
    // this.loginBoolChanged.emit(this.loginBool);
    

  }

  onRegister(){
    console.log("onRegister")
    this.journalService.register(this.loginForm.value);
    this.loginForm.reset();
    console.log("registered");

    // this.loginBool = true;
    // this.loginBoolChanged.emit(this.loginBool);
  }


  private initForm(){
    let LogInEmail = "";
    let LogInPassword = "";

    this.loginForm = new FormGroup({
      'email': new FormControl(LogInEmail, Validators.required),//[Validators.required, Validators.email]),
      'password': new FormControl(LogInPassword, Validators.required)
    })
  }

  

}