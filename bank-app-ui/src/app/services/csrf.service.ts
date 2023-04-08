import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private http: HttpClient) { }

  public getCsrf() : Observable<any> {
    let jwtToken = localStorage.getItem('authorization');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization' , 'Bearer ' + jwtToken);
    return this.http.get("http://localhost:8080/csrf",{withCredentials:true, headers});
  }
}
