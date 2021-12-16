import { Component, OnInit } from '@angular/core';
import { Journal } from './journal.model';
import { JournalService } from './journal.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css'],
  providers: []
})
export class JournalsComponent implements OnInit{ 
  selectedJournal!: Journal;

  constructor(private journalService: JournalService) { }

  ngOnInit(){
    this.journalService.journalSelected
      .subscribe(
        (journal: Journal) => {
          this.selectedJournal = journal;
          }
      );
  } 

}
