import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),   //need bind because in this instance we are not in the same class as forbiddenNames so must connect to it
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),  //forbiodden names and emails are not esecuted here just referenced
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });    //{}means javascript object

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    //  this.signupForm.statusChanges.subscribe(
    //  (value) => console.log(value)
    //  );

    //  this.signupForm.setValue({
    //    'userData': {
    //      'username': 'bob',
    //      'email': 'bob@bobsburgers.com'
    //    },
    //    'gender': 'male',
    //    'hobbies': []
       
    //  });

    //  this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'bob',
    //     'email': 'bob@bobsburgers.com'
    //   }, 
    // });
      
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset({gender: 'male'});
    
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);             //the(<FromArray>...) tells ts that everything in the () is a form array
  }

  getControls(){
    return(<FormArray>this.signupForm.get('hobbies')).controls;
  }

  //validator is a function
  forbiddenNames(control: FormControl): {[s: string]:boolean} {    //we are returning a key value pair, the key is s, which can be any string
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else{
          resolve(null);
        }
        }, 1500);
      });
      return promise;  
  }
}


