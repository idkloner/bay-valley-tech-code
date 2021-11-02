import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  //@Output lets us pass out of the component
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();  //<> indicated event emmitter is a generic type, 
  // Both these eventemitters ^ are objects                                                  //then defint they type of data emitted. i.e. data expected from app component
  newServerName = '';
  newServerContent = '';

  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit
    ({serverName: this.newServerName, 
    serverContent: this.newServerContent})
    
  }

  onAddBlueprint() {
    this.blueprintCreated.emit
    ({serverName: this.newServerName, 
    serverContent: this.newServerContent})
 
  }

}
