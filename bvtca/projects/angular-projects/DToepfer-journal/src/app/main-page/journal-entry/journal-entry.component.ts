import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {
  @Output() journalBool = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.journalBool.emit(feature);

  }

}
