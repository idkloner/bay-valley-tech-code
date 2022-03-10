
import { HttpClient, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Journal } from 'src/app/journals/journal.model'

import { API_URL } from 'src/environments/environment';

import { journals } from 'src/app/mock.journal'
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class JournalService {
  journalsChanged = new Subject<Journal[]>();
  journalSelected = new EventEmitter<Journal>();

  private journals: Journal[] = [
    // new Journal(
    //   "12-17-2021", 
    //   "A Long Time ago In a galaxy far far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    // new Journal(
    //   "12-18-2021", 
    //   "A Really Long Time ago In a galaxy really really far far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    // new Journal(
    //   "12-19-2021", 
    //   "A short Time ago In a galaxy pretty close to here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    // new Journal(
    //   "12-20-2021", 
    //   "A few minutes ago not so far away Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),

  ];

  constructor( private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
 
      }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getJournals(){
    return this.request('GET', `${API_URL}/journal`);
    const journalCopy = this.request('GET', `${API_URL}/journal`);
    console.log(journalCopy);
    return journalCopy;
    
    
    //return this.http.get(`${API_URL}`).toPromise();
    //return  this.journals.slice();
  }

  getJournal(id: number){
    return this.journals[id];
  }

  addJournal(journal: Journal) {
    
    return this.request('POST', `${API_URL}/new`, journal);
    //this.http.post(`${API_URL}/new`, journal).toPromise();
    //console.log(Promise);

    //this.journals.push(journal);
    //this.journalsChanged.next(this.journals.slice());
  }


  deleteJournal(index:number){
    return this.request('DELETE', `${API_URL}/new`, index);
    //this.journals.splice(index, 1);
    //this.journalsChanged.next(this.journals.slice());
    
  }


  updateJournal( index: number, newJournal: Journal) {
    return this.request('PUT', `${API_URL}/edit`, newJournal);
   // this.journals[index] = newJournal;
    //this.journalsChanged.next(this.journals.slice());
  }

 


  
}