import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private firstObsSubsctibtion: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubsctibtion = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);      //built in method to observables, gives next value
        if(count == 2) {
          observer.complete();  //completes the observable before the error, cause error kills the observable but does not complete
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 3')); //creating our own error for 
        }
        count++;
      }, 1000);
    });

    ; //for operartors

    this.firstObsSubsctibtion = customIntervalObservable.pipe(filter(data => {
      return data > 0;                //filter must be true or false value, so true when data > 0 i.e. will return starting at round: 2
    }),map((data: number) =>{         //pipe injects the map operater which allows us to change the data
      return 'Round: ' + (data + 1);  //this modifies the data before it is logged 
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);           //this is error handeling logs it and alerts instead of red thrown error
    }, () => {                        // the () is empty cause when copmpleted nothing is passed
      console.log('completed');       //here you can do any necessary clean up, similar to onDestroy
    });
  }
    ngOnDestroy(){
      this.firstObsSubsctibtion.unsubscribe();
      
    }
  }


