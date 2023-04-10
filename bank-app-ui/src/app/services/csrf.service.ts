import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private http: HttpClient) { }

  public getCsrf() : Observable<any> {
    return this.http.get("http://localhost:8080/auth/csrf",{withCredentials:true , responseType: 'text'});
  }
}
