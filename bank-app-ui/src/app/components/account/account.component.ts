import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { User } from 'src/app/model/user.model';
import { Account } from 'src/app/model/account.model';
import { LoginService } from 'src/app/services/login/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();
  constructor(private dashboardService: DashboardService,
              private loginService:LoginService,
              private http:HttpClient) {}

  ngOnInit(): void {
    if(localStorage.getItem('userdetails') != null) {
      this.user = JSON.parse(localStorage.getItem('userdetails')!);
      if(this.user){
        this.dashboardService.getAccountDetails(this.user.id).subscribe(
          responseData => {
            if(responseData)
                this.account = <any> responseData;
          });
      }
    }
  }
  save() {
    this.account.customerId = this.user.id;
    console.log(this.account);
    this.http.post('http://localhost:8080/accounts',this.account,{withCredentials: true}).subscribe(() => {
       alert("Dados alterados com sucesso !");
    });
  }
}
