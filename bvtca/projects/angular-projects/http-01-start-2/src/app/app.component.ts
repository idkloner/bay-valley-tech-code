import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;     //this block needs to stay in the main app because it is directly related to the template, and if in the service will lose connection to the database.
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {     //sub casue it returns an observable which we want to interact with
    this.loadedPosts = [];
    });

  }   


 
}
