import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "src/app/model/user.model";
import {AppConstants} from 'src/app/constants/app.constants';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,private router: Router) {}
  validateLoginDetails(user: User) {
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL+"?email="+user.email, { observe: 'response',withCredentials: true });
  }
  logout() {
    window.localStorage.clear();
    this.router.navigate(['login'])
  }
  getTokenDetails() {
    let token = jwt_decode<any>(localStorage.getItem('authorization')!);
    return token;
  }
  isLogged() : any {
    const token = localStorage.getItem('authorization');
    if(!token) {
      return false;
    }
    try {
      const decodedToken = jwt_decode<Token>(token);
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate.valueOf() > new Date().valueOf();
    } catch (err) {
      return false;
    }
  }
  deleteLoan() : Observable<any> {
    return this.http.delete(environment.rooturl + `/loans/1` , {withCredentials: true});
  }
}

interface Token {
  name: string;
  exp: number;
  // whatever else is in the JWT.
}