import { Component, OnInit } from '@angular/core';
import { Journal } from './journal.model';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Journal[] = [
    new Journal("12-17-2021", 'A Long Time ago In a galaxy far far away...'),
    new Journal("12-16-2021", 'A Really Long Time ago In a galaxy really really far far away...'),
    new Journal("12-15-2021", 'A short Time ago In a galaxy pretty close to here...'),
    new Journal("12-24-2021", 'A few minutes ago not so far away...'),
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
