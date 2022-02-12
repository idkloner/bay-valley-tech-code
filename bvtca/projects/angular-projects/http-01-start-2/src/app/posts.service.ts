import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService{
  error = new Subject<string>();

constructor(private http: HttpClient) {}
    
    createAndStorePost(title: string, content: string) {

    // post is an observable, so it must be subscribed to in order for it to actually be sent, 
    // becauyse post makes the observable buut then does nothing with it without further instruction 
    // i.e. subscribe
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
            'https://http-1-84319-default-rtdb.firebaseio.com/posts.json', 
            postData,
            {
              observe: 'response'
            }
            ).subscribe(responseData => {
              console.log(responseData);
            }, error => {
              this.error.next(error.message);
            });

    }

    fetchPosts(){
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print', 'pretty');
      searchParams = searchParams.append('custom', 'key');
    return this.http
    .get<{ [key: string]: Post }>(
      'https://http-1-84319-default-rtdb.firebaseio.com/posts.json',  //<> define type responce so ts knows structure, [] is a place holder since we do not know the randomly generated key
    {
      headers: new HttpHeaders({"Custom-Header": "Hello"}),
      params: searchParams,
      responseType: 'json'
    }
    )
    .pipe(
      map(responseData =>{
        const postArray: Post[] =[];        //post[], means it will be an array of these4 types posts
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)){    // checks for its own key, so that code does not try to access prototype
            postArray.push({ ...responseData[key], id:key});      // the .. pulls all key value pairs of java object
          }
        }
        return postArray;
      }),
      catchError(errorRes => {
        //send to analytics
        return throwError(errorRes);    //this is an observable wrapping the error, goot for error handeling
      })
    );

    }


    deletePosts(){
      return this.http
      .delete('https://http-1-84319-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      })
      .pipe(tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent){
          //....change ui to show user was sent
        }
        if(event.type  === HttpEventType.Response){
          console.log(event.body);
        }
      })
      );
    }

}