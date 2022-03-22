import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JournalService } from "../journals/journal.service";
import { Journal } from "../journals/journal.model";

import { API_URL } from 'src/environments/environment';
import { map, tap } from "rxjs/operators";

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


