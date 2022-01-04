import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { JournalService } from '../journals/journal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

    onNewJournal(){
      this.router.navigate(['journal/new']);
      
    }

}