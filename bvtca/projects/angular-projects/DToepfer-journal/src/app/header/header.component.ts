import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Journal } from '../journals/journal.model';
import { JournalService } from '../journals/journal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  journal!: Journal;
  id!: number;
  

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.journal = this.journalService.getJournal(this.id);
      }
    );
  }

    onNewJournal(){
      this.router.navigate(['journal/new'], {relativeTo: this.route});
      
    }

}