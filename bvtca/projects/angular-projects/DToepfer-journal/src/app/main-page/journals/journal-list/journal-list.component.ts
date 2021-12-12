import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { JournalService } from 'src/app/journal.service';
import { journals } from 'src/app/mock.journal';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {

  //id: number;
  

  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) {

              }



  ngOnInit(): void{
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.recipe = this.recipeService.getRecipe(this.id);
    //   }
    // );
  }

//   onEditEntry() {
//     this.router.navigate(['edit'], {relativeTo: this.route});

// }

}
