import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {defaultIfEmpty, EMPTY, Observable, of} from 'rxjs';
import {LoginService} from "../services/login/login.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedResolver implements Resolve<boolean> {
  constructor(private loginService: LoginService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.isLogged().pipe(catchError(() => {
        return of(false);
      }),
        defaultIfEmpty(false)
    );
  }
}
