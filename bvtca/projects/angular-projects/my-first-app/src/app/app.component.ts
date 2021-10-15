import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // can use [] to select an attribute 
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']  // Can use this to reference external file or styles
  styles: [`
  h3{
    color: red;
  }
  `]
})
export class AppComponent {
   
}
