import { Component } from '@angular/core';
import { JournalService } from './journals/journal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private journalService: JournalService){}
  title = 'DToepfer-journal'; 
  loginBool = false;
}
