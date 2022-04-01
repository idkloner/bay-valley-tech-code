import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shortendate"
})
export class ShortenDatePipe implements PipeTransform{
    transform(value: any, limit: number, ) {
        if(value.length > limit){
            return value.substr(0, limit);
        }
        return value;
    }
}

//This custom pipe is from Max's Udemy course
//https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656578#content