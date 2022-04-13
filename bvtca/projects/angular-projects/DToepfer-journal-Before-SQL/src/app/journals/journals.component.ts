import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  journals!: Journal[];
  id!: number;


  constructor(private journalService: JournalService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.getRoute();
    this.getJournal();
  } 



getRoute(){
  this.route.params
  .subscribe(
    (params: Params) => {
      this.id = +params['id'];
    });
}

getJournal(){
  this.journalService.journalSelected
  .subscribe(
    (journal: Journal) => {
      this.selectedJournal = journal;
      });

}

onNewJournal(){
  this.router.navigate(['journal/new']);
  
}

onLogout(){
  this.journalService.logout();
}




}




