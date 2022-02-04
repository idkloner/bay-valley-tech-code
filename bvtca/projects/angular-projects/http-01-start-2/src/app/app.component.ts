import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);

    // post is an observable, so it must be subscribed to in order for it to actually be sent, 
    // becauyse post makes the observable buut then does nothing with it without further instruction 
    // i.e. subscribe
    this.http.post(
      'https://http-1-84319-default-rtdb.firebaseio.com/posts.json', 
      postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
