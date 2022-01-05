import { Component, OnInit} from '@angular/core';
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
  

  constructor(private journalService: JournalService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params
     .subscribe(
       (params: Params) => {
         this.id = + params['id'];
         this.journal = this.journalService.getJournal(this.id);
         this.editMode = params['id'] != null;  
       }
     )
  }
 

}