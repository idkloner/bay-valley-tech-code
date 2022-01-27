import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
              private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params
     .subscribe(
       (params: Params) => {
        this.id = + params['id'];
        this.editedItemIndex = this.id;
        this.journal = this.journalService.getJournal(this.id);
        if(this.id != null){  
          this.editMode = true;  
         }
         this.initForm();
         
       }
     );
  }

  onSubmit(){
    console.log(this.editMode);
    console.log(this.journalForm);
    // const value = form.value;
    // const newJournal = new Journal(value.name, value.amount);
    // if (this.editMode){
    //   this.journalService.updateJournal(this.editedItemIndex, newJournal)
    // } else {
    //   this.journalService.addJournal(newJournal);
    // }
    // this.editMode = false;
    // form.reset();
    

  }

  private initForm(){
    let journalEntry = "";
    let journalDate = "";

    if (this.editMode){
      const journal = this.journalService.getJournal(this.id);
      journalEntry = journal.entry;
      journalDate = this.getCurrentDate();
    }

    this.journalForm = new FormGroup({
      'entry': new FormControl(journalEntry),
      'date': new FormControl(journalDate)
    })
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