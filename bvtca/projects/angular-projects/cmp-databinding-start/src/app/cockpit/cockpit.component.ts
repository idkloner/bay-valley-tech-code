import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  //@Output lets us pass out of the component
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();  //<> indicated event emmitter is a generic type, 
  // Both these eventemitters ^ are objects                                                  //then defint they type of data emitted. i.e. data expected from app component
  // newServerName = '';
  // newServerContent = '';
  @ViewChild ('serverContentInput', {static:true}) serverContentInput: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit
    ({serverName: serverNameInput.value,
    // serverName: this.newServerName, 
    // serverContent: this.newServerContent
    serverContent: this.serverContentInput.nativeElement.value})
    
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit
    ({serverName: serverNameInput.value,
      // serverName: this.newServerName, 
    // serverContent: this.newServerContent
    serverContent: this.serverContentInput.nativeElement.value})
  
 
  }

}
