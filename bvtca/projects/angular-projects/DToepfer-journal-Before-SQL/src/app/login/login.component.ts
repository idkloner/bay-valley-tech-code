import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../journals/journal.service';
import { ActivatedRoute, Params, Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./journal-start.component.css']
 })
export class LoginComponent implements OnInit{
  @Output() loginBoolChanged: EventEmitter<boolean> = new EventEmitter();
  @Input() loginBool: boolean = false;
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
 

  
  constructor(private journalService: JournalService,
    private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  this.initForm();
  }


  onLogin(){
    this.journalService.logIn(this.loginForm.value);
    this.loginForm.reset();
    setTimeout(() =>  this.router.navigate(['journal']), 50);
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