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
  journalForm!: FormGroup;
  //editedItemIndex!: number;
  
  //journalToEdit!: Journal;
  
 
  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
     this.getRouteId();
  }


  getRouteId(){
    this.route.params.subscribe((params: Params) => 
    {
      this.id = + params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      //this.getJournal(this.id);
  }); 

  }

  onSubmit(){
    if( this.editMode ){
      this.journalService.updateJournal(this.id, this.journalForm.value);
      //console.log(this.id, this.journalForm.value)
    } else {
      this.journalService.addJournal(this.journalForm.value);    
    }
    //console.log(this.journalForm.value);
    this.journalForm.reset();
    
    this.onCancel()

    
    

  }

  onCancel(){
    //this.router.navigate(['../'], {relativeTo: this.route});  //not liking this, cause when reloading the page on any path other than main, errors out.
    this.router.navigate(['journal']);  //goes back to main rather than just one path back
    setTimeout(() =>  window.location.reload(), 10);
   
  }




  private initForm(){
    let journalEntry = "";
    //let journalDate = "";
   
    if (this.editMode){
      //const journal = this.journalService.setCurrentUserJournals();
      this.journal = this.journalService.selectJournal(this.id);
      journalEntry = this.journal.entry;
    } 
      //journalDate = this.getCurrentDate();
      this.journalForm = new FormGroup({
        'entry': new FormControl(journalEntry, Validators.required),
        //'date': new FormControl(journalDate, Validators.required)     
      
      });
    
  }
 


  

  getCurrentDate(){
    let dateObj = new Date();
            let month = String(dateObj.getMonth() + 1).padStart(2, '0');
            let day = String(dateObj.getDate()).padStart(2, '0');
            let year = dateObj.getFullYear();
            let output = month + '/' + day + '/' + year;
            return output;
  }  //this code getCurrentDate() is from geeks for geeks https://www.geeksforgeeks.org/how-to-get-the-current-date-in-javascript/


  

  

}