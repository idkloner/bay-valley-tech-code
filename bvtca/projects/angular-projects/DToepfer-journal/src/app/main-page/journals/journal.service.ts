import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journal } from './main-page/journals/journal-list/journal.model';
import { journals } from 'src/app/mock.journal'

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournals(): Journal[]{
    return journals;
  }

  
}
