import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
=======
import { ActivatedRoute, Params } from '@angular/router';
>>>>>>> 157ac8798e0a5b5003fa441d369567751bb80711

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
<<<<<<< HEAD
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }
=======

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }
>>>>>>> 157ac8798e0a5b5003fa441d369567751bb80711

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
    .subscribe(
      (querryParams: Params) => {
        this.allowEdit = querryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
<<<<<<< HEAD
    const id = +this.route.snapshot.params['id'];
    //this.route.snapshot.params.subscribe();
    this.server = this.serversService.getServer(id);
=======
    this.server = this.serversService.getServer(1);
>>>>>>> 157ac8798e0a5b5003fa441d369567751bb80711
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, 
      {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if (!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || 
      this.serverStatus !== this.server.status) 
      && !this.changesSaved) {
        return confirm('do you want to discard the changes?');
    } else {
      return true;
    }

  }

}
