import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Journal } from '../../journal.model';
import { JournalService } from '../../journal.service';

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css']
})
export class JournalItemComponent implements OnInit {
  @Input() journal!: Journal;
  @Input() index!: number;

 

  constructor(private journalService: JournalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    
  }


}

