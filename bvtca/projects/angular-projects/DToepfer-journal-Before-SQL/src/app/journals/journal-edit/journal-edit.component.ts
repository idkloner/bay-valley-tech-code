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
  }); 
  }

  onSubmit(){
    if( this.editMode ){
      this.journalService.updateJournal(this.id, this.journalForm.value);
     
    } else {
      this.journalService.addJournal(this.journalForm.value);    
    }
    this.journalForm.reset();
    
    this.onCancel();

  }

  onCancel(){
    //this.router.navigate(['../'], {relativeTo: this.route});  //not liking this, cause when reloading the page on any path other than main, errors out.
    this.router.navigate(['journal']);  //goes back to main rather than just one path back
    setTimeout(() =>  window.location.reload(), 10);
   
  }


  private initForm(){
    let journalEntry = "";
 
   
    if (this.editMode){
      this.journal = this.journalService.selectJournal(this.id);
      journalEntry = this.journal.entry;
    } 
      this.journalForm = new FormGroup({
        'entry': new FormControl(journalEntry, Validators.required),
      
      });
    
  }
 

}