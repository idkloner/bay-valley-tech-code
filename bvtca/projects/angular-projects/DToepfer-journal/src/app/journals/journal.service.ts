
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Journal } from 'src/app/journals/journal.model'
import { journals } from 'src/app/mock.journal'

@Injectable()
export class JournalService {
  journalsChanged = new Subject<Journal[]>();
  journalSelected = new EventEmitter<Journal>();

  private journals: Journal[] = [
    new Journal(
      "12-17-2021", 
      "A Long Time ago In a galaxy far far away..."),
    new Journal(
      "12-18-2021", 
      "A Really Long Time ago In a galaxy really really far far away..."),
    new Journal(
      "12-19-2021", 
      "A short Time ago In a galaxy pretty close to here..."),
    new Journal(
      "12-20-2021", 
      "A few minutes ago not so far away..."),

  ];

  constructor() { }

  getJournals(): Journal[]{
    return  this.journals.slice();
  }

  getJournal(id: number){
    return this.journals[id];
  }

  deleteJournal(index:number){
    this.journals.splice(index, 1);
    this.journalsChanged.next(this.journals.slice());
    console.log(this.journalsChanged);
  }

  addJournal(journal: Journal) {
    this.journals.push(journal);
    this.journalsChanged.next(this.journals.slice());
  }

  updateJournal( index: number, newJournal: Journal) {
    this.journals[index] = newJournal;
    this.journalsChanged.next(this.journals.slice());
  }


  
}