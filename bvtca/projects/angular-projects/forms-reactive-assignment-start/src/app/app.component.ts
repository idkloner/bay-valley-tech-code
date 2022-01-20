import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  
  

  ngOnInit(){
    this.projectForm = new FormGroup({
  
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'name': new FormControl(null,[Validators.required], this.forbiddenNames),
        'status': new FormControl('stable', [Validators.required])
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
    this.projectForm.reset({status: "stable"});
    
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }


  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else{
          resolve(null);
        }
        }, 1500);
      });
      return promise;  
  }





}
