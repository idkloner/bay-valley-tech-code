import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css']
})
export class JournalEditComponent implements OnInit {
  // id: number;
  // editMode = false;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = + params['id'];
    //     this.editMode = params['id'] != null;  
    //   }
    // )
  }
 

}
