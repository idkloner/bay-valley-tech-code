
import { HttpClient, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Journal } from 'src/app/journals/journal.model'
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

import { API_URL } from 'src/environments/environment';

//import { journals } from 'src/app/mock.journal'
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class JournalService {
  journalsChanged = new Subject<Journal[]>();
  journalSelected = new EventEmitter<Journal>();

  private journals: Journal[] = [];

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

  getJournals(): Promise<any>{
    //const data = this.request('GET', `${API_URL}/`);
    return this.http
    .get(`${API_URL}/`)
    .toPromise()
   
    
  
  
    //return this.http.get(`${API_URL}`).toPromise();
    //console.log('journal:' + this.journals);
  }

  getJournal(id: number): Promise<any>{
    return this.http
    .get(`${API_URL}/${id}`)
    .toPromise()
  
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