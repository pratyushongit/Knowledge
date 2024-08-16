import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn : "root"
})
export class HTTPConfigInterceptor implements HttpInterceptor{

    constructor(private httpToken : HttpXsrfTokenExtractor){}

    intercept(req : HttpRequest<any> , next : HttpHandler){
        let token = this.httpToken.getToken() as string;
        req = req.clone({headers : req.headers.set('Content-Type', 'application/json')});
        return next.handle(req).pipe(catchError(this.handleErrors));
    }

    handleErrors(error : HttpErrorResponse){       
        let errorMsg = "";
        if(error.status == 404){
            errorMsg = "Not Found -> Interceptor";
        }
        else if(error.status == 400){
            errorMsg = "Bad Request -> Interceptor";
        }
        else if(error.status == 500){
            errorMsg = "Internal Server Error -> Interceptor";
        }
        else{
            errorMsg = "Something Bad Happened!"
        }
        return throwError(errorMsg);
    }
}