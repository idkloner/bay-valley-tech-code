import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JournalService } from "./journal.service";
import { Journal } from "./journal.model";

import { API_URL } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DataService{
constructor(private http: HttpClient, private journalService: JournalService){}

private journals: Journal[] = [];


fetchjournals(){
    return this.http
     .get(`${API_URL}/`)
     .toPromise();
    }
    


}


