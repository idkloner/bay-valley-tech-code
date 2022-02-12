import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz')      // here we modify the request
        });
        //return next.handle(req);            //lets request continue while returnong the request.
        return next.handle(modifiedRequest);    
    }
}