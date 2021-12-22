import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})           //providedin root, is a shortcut so we dont need to delcare it in the provided in app.module
export class userService{
    // activatedEmitter = new EventEmitter<boolean>();  //old way
    activatedEmitter = new Subject<boolean>(); //holds value true //subject is special observable, 
    //a more active one, 
    //only difference coding wise is when calling, use next not emit, 
    //dont use it when using @output, butotherwise recomended
    //when you are doing cross component communication through services,
    //and manually call next/emit, and manually subscribe.


    //
}
