import { Component, Input, OnInit, Output } from '@angular/core';
import { JournalService } from './journals/journal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // didLogin: boolean;
  

  constructor(private journalService: JournalService){}
  title = 'DToepfer-journal'; 



  // loginHandler(login){
  //   this.didLogin = login;
  //   console.log(this.didLogin);
 // }


  
}
