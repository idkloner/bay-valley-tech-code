import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from '../journal.model';
import { JournalService } from '../journal.service';


@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css']
})
export class JournalEditComponent implements OnInit {
  journal!: Journal; 
  id!: number;
  editMode = false;
  editedItemIndex!: number;
  journalForm!: FormGroup;
  
 
  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
     this.route.params
     .subscribe(
       (params: Params) => {
        this.id = + params['id'];
         this.editMode = params['id'] != null;
         this.initForm();
       }
     );
  }

  onSubmit(){

    if( this.editMode){
      this.journalService.updateJournal(this.id, this.journalForm.value);
    } else {
      this.journalService.addJournal(this.journalForm.value);    
    }
    console.log(this.journalForm);
    this.journalForm.reset();
    this.onCancel();
    

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let journalEntry = "";
    let journalDate = "";
   
    if (this.editMode){
      //const journal = this.journalService.getJournal(this.id);


      this.journalService.getJournal(this.id).then(res => {
        this.journal = res;
        console.log(res);
      });
      console.log(this.journal);
      journalEntry = this.journal.entry;



      console.log(journalDate);
    }
    journalDate = this.getCurrentDate();
    this.journalForm = new FormGroup({
      'entry': new FormControl(journalEntry, Validators.required),
      'date': new FormControl(journalDate, Validators.required)
    });
  }
 


  getCurrentDate(){
    let dateObj = new Date();
            let month = String(dateObj.getMonth() + 1).padStart(2, '0');
            let day = String(dateObj.getDate()).padStart(2, '0');
            let year = dateObj.getFullYear();
            let output = month + '/' + day + '/' + year;
            return output;
  }  //this code is from geeks for geeks https://www.geeksforgeeks.org/how-to-get-the-current-date-in-javascript/


  

  

}