
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable} from '@angular/core';
import { Subject, Observable } from 'rxjs';


import { Journal } from 'src/app/journals/journal.model'

import { API_URL } from 'src/environments/environment';

//import { journals } from 'src/app/mock.journal'
import { HttpHandler } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class JournalService{
  journalsChanged = new Subject<Journal[]>();
  journalSelected = new EventEmitter<Journal>();

  private currentUserJournals: Journal[] = [];

  jwtKey: string = 'user_jwt'

  constructor( private http: HttpClient) { }



  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        'Authorization': this.jwtKey,
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
    console.log(this.jwtKey);
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
    //return this.request('DELETE', `${API_URL}/${id}`, id); 
    return this.http.delete(`${API_URL}/${id}`).toPromise();  //doing it this way instead of ^ removes the CORS error, but still has the promise error
  }


  updateJournal( id: number, newJournal: Journal): Promise<any> {
    //return this.request('PUT', `${API_URL}/${id}/edit`, newJournal);
    console.log(id, newJournal);
    return this.http.put(`${API_URL}/${id}/edit`, newJournal).toPromise();// this way provides no error, however the entry is not changed
  
  }


  logIn(logInfo){
    console.log(logInfo);
    this.http
    .post(`${API_URL}/login`, logInfo)
    .toPromise()
    .then(res => {
      this.jwtKey =  <string>res;
      localStorage.setItem(this.jwtKey, <string>res)
      console.log('jwt', res);
      console.log(this.jwtKey);
      
    });

  }


  register(body: {
    email: string; 
    password: string;}){
      console.log(body)
      return this.http
      .post(`${API_URL}/register`, body)
      .toPromise()
      .then((res: string) => {
        window.alert('You are registered.');    //not working
        // console.log('jwt', res)
        // localStorage.setItem(this.jwtKey, res)
      });

  }

 


  
}