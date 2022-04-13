import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from '../../journal.model';
import { JournalService } from '../../journal.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  //@Input() journal!: Journal;
  //@Input() index!: number;
  journal!: Journal;

  id!: number;
  editedItemIndex!: number;
  

  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.getRouteID();    
       }
  

  getRouteID(){
    this.route.params.subscribe((params: Params) => 
    {this.id = + params['id'];
      this.getJournal(this.id);
  }); 
  }

  getJournal(id: number){
    this.journal = this.journalService.selectJournal(this.id);
    console.log(this.journal);
  }

  onEditJournal() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }


  onDeleteJournal(){
    this.journalService.deleteJournal(this.id);
    this.router.navigate(['journal']);
    setTimeout(() =>  window.location.reload(), 10);
  }

}
