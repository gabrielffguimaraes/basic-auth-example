import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private route : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers.append('X-Requested-with','XMLHttpRequest');
  
    if(localStorage.getItem('X-XSRF-TOKEN')) {
      headers = request.headers.append('X-XSRF-TOKEN',localStorage.getItem('X-XSRF-TOKEN')!);
    }
    const xhr = request.clone({
      headers
    });
    return next.handle(xhr).pipe(
      catchError((response: any) => {
        if(response.status == 401) {
          this.route.navigate(['/login']);
        }
        return throwError(response);
      })
    );
  }
}
