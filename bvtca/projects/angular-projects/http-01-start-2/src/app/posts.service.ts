import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostsService{

constructor(private http: HttpClient) {}
    
    createAndStorePost(title: string, content: string) {

    // post is an observable, so it must be subscribed to in order for it to actually be sent, 
    // becauyse post makes the observable buut then does nothing with it without further instruction 
    // i.e. subscribe
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
            'https://http-1-84319-default-rtdb.firebaseio.com/posts.json', 
            postData
            ).subscribe(responseData => {
              console.log(responseData);
            });

    }

    fetchPosts(){
    return this.http
    .get<{ [key: string]: Post }>('https://http-1-84319-default-rtdb.firebaseio.com/posts.json')  //<> define type responce so ts knows structure, [] is a place holder since we do not know the randomly generated key
    .pipe(
      map(responseData =>{
        const postArray: Post[] =[];        //post[], means it will be an array of these4 types posts
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)){    // checks for its own key, so that code does not try to access prototype
            postArray.push({ ...responseData[key], id:key});      // the .. pulls all key value pairs of java object
          }
        }
        return postArray;
      })
    );

    }


    deletePosts(){
      return this.http.delete('https://http-1-84319-default-rtdb.firebaseio.com/posts.json');
    }

}