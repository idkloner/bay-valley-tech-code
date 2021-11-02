import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};   
  // @ Input allows parent hosting server-element to bind to element                                                                
  //srvElement is alias and must be referenced as such
  constructor() { }

  ngOnInit(): void {
  }

}
