import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  defaultStatus = "stable";

  ngOnInit(){
    this.projectForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'name': new FormControl(null,[Validators.required, , this.forbiddenNames.bind(this)])
      }),
      'status': new FormControl('stable', [Validators.required])
    });
  }

  onSubmit(){
    this.projectForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== 1){
      return({'nameisForbidden': true});
    }
    return null;
  }


}
