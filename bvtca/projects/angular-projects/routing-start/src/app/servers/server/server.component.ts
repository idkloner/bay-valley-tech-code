import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
=======
import { ActivatedRoute, Params, Router } from '@angular/router';
>>>>>>> 157ac8798e0a5b5003fa441d369567751bb80711

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']  //this server must match the server name when binded to the path 
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
=======
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
>>>>>>> 157ac8798e0a5b5003fa441d369567751bb80711
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, 
      queryParamsHandling: 'preserve'});
  }

}
