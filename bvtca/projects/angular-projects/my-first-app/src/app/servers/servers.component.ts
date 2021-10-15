import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // can use [] to select an attribute
  // selector: '.app-servers', //select by class.
  //select by id or sudo selectors will not work
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){         //by naming it with 'on' it helos symbolize that itis an action event
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
      
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

// All four data bindings used
// event binding to listen to the click
// string interpelation to output the data
// property binding to enable the button after 2 seconds
// 2 way binding to fetch our input data
