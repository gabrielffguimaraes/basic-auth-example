import {Injectable} from '@angular/core';
import {HttpErrorResponse,HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {User} from 'src/app/model/user.model';
import {Observable, of,map, throwError,switchMap} from "rxjs";
import { CsrfService } from '../services/csrf.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  user = new User();
  constructor(private router: Router,private csrfService: CsrfService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let httpHeaders = new HttpHeaders();
    if(localStorage.getItem('userdetails')){
      this.user = JSON.parse(localStorage.getItem('userdetails')!);
    }
    if(!this.user) {
      this.router.navigate(['login']);
    }
    // ENVIADO APENAS UMA VEZ PARA REALIZAR A AUTHENTICAÇÃO QUE FICA SALVA NA SESSÃO
    if(this.user && this.user.password && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
    } else {
      let jwtToken = localStorage.getItem("authorization")!;
      httpHeaders = httpHeaders.append('Authorization', jwtToken);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.router.navigate(['dashboard']);
            alert("Acesso negado .");
          }
          if (err.status === 401) {
            localStorage.clear();
            this.router.navigate(['login']);
          }
        }
        return throwError(err);
    }));
  }
}

