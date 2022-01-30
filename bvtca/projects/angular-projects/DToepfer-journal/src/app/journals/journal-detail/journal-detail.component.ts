import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from '../journal.model';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  journal!: Journal;
  id!: number;
  editedItemIndex!: number;

  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = + params['id'];
            this.editedItemIndex = this.id;
            
            this.journal = this.journalService.getJournal(this.id);
        }
      );
  }

  onEditJournal() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});   //This could work as well, just more complicated.
    
  }
  onDeleteJournal(){
    this.journalService.deleteJournal(this.editedItemIndex);
    this.router.navigate(['journal']);
   

    
  }

}
