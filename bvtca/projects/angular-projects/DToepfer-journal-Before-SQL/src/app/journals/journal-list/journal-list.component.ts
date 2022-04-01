import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from '../journal.model';
import { JournalService } from 'src/app/journals/journal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/journals/data.service';


@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit { 
  allUserJournals: Journal[] = [];
  index!: number;
  
  subscription!: Subscription;
  
  constructor(private journalService: JournalService,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit() {
  //   this.subscription = this.journalService.journalsChanged
  //   .subscribe(
  //      (journals: Journal[]) => {
  //        this.journals = journals;
  //      }
  //  )

     this.getAllUserJournals();
     //this.setCurrentUserJournals();


    }


    getAllUserJournals(){
      this.journalService.getJournals()
      .subscribe(journals => {
        this.allUserJournals = journals,
      //console.log("getAllUserJournals", this.allUserJournals),
        this.setCurrentUserJournals(this.allUserJournals)})

        //console.log("get", this.allUserJournals)
        

    }

    setCurrentUserJournals(allUserJournals){
      //console.log("setCurrentUserJournals", allUserJournals);
      //this will set our array of journals inside of our service.
      this.journalService.setCurrentUserJournals(allUserJournals); 
      
    }




    
}
