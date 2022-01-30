import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly loginForm: FormGroup;

  public errorMessage: string = '';

  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8), Validators.pattern(/[.]/gmi)]],
      retypePassword: [null, [Validators.minLength(8)]],
    });

    this.loginForm.valueChanges.subscribe((val)  => {
      const { name, email,  password, retypePassword} = val;

      if( !name || !email || !password || !retypePassword){
        this.errorMessage = 'missing fields';
        return
      }

      if (!this.loginForm.controls['email'].valid){
        this.errorMessage = "invalid Email"
        return;
      }

      if (!this.loginForm.controls['password'].valid ||
          !this.loginForm.controls['password'].valid){
            this.errorMessage = 'Password must be at least 8 characters long';
            return;
          }

      if (password !== retypePassword) {
        this.errorMessage = 'passwords much match';
        return;
      }


      this.errorMessage = "";
    });
  }

  register(): void {
    console.log(this.loginForm.value);
    
    console.log(this.loginForm.controls);
    console.log(this.loginForm.controls['name'].valid);
    console.log(this.loginForm.controls['email'].valid);
    console.log(this.loginForm.controls['password'].valid);
    console.log(this.loginForm.controls['retypePassword'].valid);
  }

}
