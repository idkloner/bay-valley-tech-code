import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() journalBool = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.journalBool.emit(feature);
    console.log(feature);

  }

}