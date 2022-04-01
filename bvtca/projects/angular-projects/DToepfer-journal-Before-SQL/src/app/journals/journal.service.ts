
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { Journal } from 'src/app/journals/journal.model'

import { API_URL } from 'src/environments/environment';

//import { journals } from 'src/app/mock.journal'
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class JournalService{
  journalsChanged = new Subject<Journal[]>();
  journalSelected = new EventEmitter<Journal>();

  private currentUserJournals: Journal[] = [];

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


 setCurrentUserJournals(journals: Journal[]){
     this.currentUserJournals = journals;
     //console.log('service', this.currentUserJournals)
   }


  getJournals(): Observable<Journal[]>{
     return this.http
     .get<Journal[]>(`${API_URL}/`)
  }


  selectJournal(id: number){
    return this.currentUserJournals[id]; 
  }


  addJournal(journal: Journal) {
    return this.request('POST', `${API_URL}/new`, journal);
  }


  deleteJournal(id:number): Promise<any>{
    return this.request('DELETE', `${API_URL}/${id}`, id); 
    //return this.http.delete(`${API_URL}/${id}`, id);
  }


  updateJournal( id: number, newJournal: Journal) {
    return this.request('PUT', `${API_URL}/${id}/edit`, newJournal);
  }


  logIn(logInfo: string){
  }

 


  
}