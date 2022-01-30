
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
      "A Long Time ago In a galaxy far far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new Journal(
      "12-18-2021", 
      "A Really Long Time ago In a galaxy really really far far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new Journal(
      "12-19-2021", 
      "A short Time ago In a galaxy pretty close to here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new Journal(
      "12-20-2021", 
      "A few minutes ago not so far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),

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