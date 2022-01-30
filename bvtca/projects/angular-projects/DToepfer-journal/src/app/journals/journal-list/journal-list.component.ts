import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from '../journal.model';
import { JournalService } from 'src/app/journals/journal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit { 
  journals!: Journal[];
  subscription!: Subscription;
  
  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit() {
    this.subscription = this.journalService.journalsChanged
    .subscribe(
      (journals: Journal[]) => {
        this.journals = journals;
      }
    )
     this.journals = this.journalService.getJournals();
     }

    
}