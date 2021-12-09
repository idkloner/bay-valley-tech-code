import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JournalModel } from '/Volumes/Grimoire/bay-valley-tech-code/bvtca/projects/angular-projects/DToepfer-journal/src/app/main-page/journal-list/journal.model';
import { journals } from 'src/app/mock.journal'

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournals(): JournalModel[]{
    return journals;
  }
}
