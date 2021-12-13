import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { journals } from 'src/app/mock.journal';
import { Journal } from '../journal.model';
import { JournalService } from 'src/app/journals/journal.service';


@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent  { //implements OnInit
  // journals: Journal[];
  
  

  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  // ngOnInit(): {
  //   this.journals = this.journalService.getJournals();

  //   }

    
}