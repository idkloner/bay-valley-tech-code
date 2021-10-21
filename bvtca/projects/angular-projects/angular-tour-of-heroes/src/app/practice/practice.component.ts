import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Places } from '../place';
import { PLACES } from '../practice-array';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  places = PLACES;

  selectedPlace?: Places;
  onSelect(place: Places): void {
  this.selectedPlace = place;
   }
  

  constructor() { }

  ngOnInit(): void {
  }



}
