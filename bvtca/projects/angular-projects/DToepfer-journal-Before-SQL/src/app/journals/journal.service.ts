
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable} from '@angular/core';
import { Subject, Observable } from 'rxjs';


import { Journal } from 'src/app/journals/journal.model'

import { API_URL } from 'src/environments/environment';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class JournalService{
  journalSelected = new EventEmitter<Journal>();

  private currentUserJournals: Journal[] = [];

  jwtKey: any = 'user_jwt'
  user_id: any;


  constructor( private http: HttpClient,
    private router: Router) { }



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
    this.jwtKey = localStorage.getItem("jwtKey");
    console.log(this.jwtKey);
     return this.http.get<Journal[]>(`${API_URL}/`,
     { headers: { Authorization: `Bearer ${this.jwtKey}` } });
  }


  selectJournal(id: number){
    return this.currentUserJournals[id]; 
  }


  addJournal(journal: Journal) {
    return this.request('POST', `${API_URL}/new`, journal)
   
  }


  deleteJournal(id:number): Promise<any>{
    return this.http.delete(`${API_URL}/${id}`).toPromise();  //doing it this way instead of ^ removes the CORS error, but still has the promise error
  }


  updateJournal( id: number, newJournal: Journal): Promise<any> {
    console.log(id, newJournal);
    return this.http.put(`${API_URL}/${id}/edit`, newJournal).toPromise();// this way provides no error, however the entry is not changed
    
  }

  journalUpdated(){
    this.getJournals();
    console.log('why');
  }


  logIn(logInfo){
    console.log(logInfo);
    this.http
    .post(`${API_URL}/login`, logInfo)
    .toPromise()
    .then(res => {
       this.jwtKey = JSON.stringify(res);
      this.jwtKey = this.jwtKey.split(':')[1];
      this.jwtKey = this.jwtKey.split('"')[1];
      localStorage.setItem("jwtKey", this.jwtKey);
      setTimeout(() =>  this.router.navigate(['journal']), 50);
      
      // console.log(typeof res);
       //console.log(res);
      // console.log(this.jwtKey);
      
    });

  }


  register(body: {
    email: string; 
    password: string;}){
      console.log(body)
      return this.http
      .post(`${API_URL}/register`, body)
      .toPromise()
      .then((res) => {
        window.alert('You are registered.');    //not working
        setTimeout(() =>  this.router.navigate(['journal']), 50);
      });



   }

   logout(){
    localStorage.removeItem("jwtKey");
    setTimeout(() =>  this.router.navigate(['login']), 50);
  } 

 


  
}