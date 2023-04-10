import {Component, OnInit} from '@angular/core';
import {User} from "src/app/model/user.model";
import {LoginService} from 'src/app/services/login/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CsrfService} from "../../services/csrf.service";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  constructor(private loginService: LoginService,
              private router: Router,
              private activatedRouter:ActivatedRoute,
              private csrfService:CsrfService,
              private cookieService: CookieService
  ) {
    
  }
  ngOnInit(): void {}
  onSubmit() {
    this.handleLogin();
  }
  handleLogout() {
    this.loginService.logout();
  }
  handleLogin() {
    this.loginService.validateLoginDetails(this.model).subscribe(
      (responseData) => {
        this.handleLoginSuccess(responseData);
      },
      (err) => {
        this.handleLoginError(err);
      }
    );
  }
  saveUserDetails(responseData : any) {
    let user = new User();
    user.email = responseData.body.email;
    user.mobileNumber = responseData.body.mobileNumber;
    user.name = responseData.body.name;
    user.id = responseData.body.id;
    user.authStatus = 'AUTH';
    window.localStorage.setItem("userdetails", JSON.stringify(user));
  }
  handleLoginSuccess(responseData : any) {
    this.csrfService.getCsrf().subscribe(csrf => localStorage.setItem('X-XSRF-TOKEN',csrf));
    this.saveUserDetails(responseData);
    this.navigateToDashboard();

    /*
    this.model = <any>responseData;
    this.model.authStatus = "AUTH";
    window.localStorage.setItem("authorization","Bearer "+responseData.headers.get('Authorization')!);
    window.localStorage.setItem("userdetails", JSON.stringify(this.model));
    this.navigateToDashboard();*/

    /*
    this.csrfService.getCsrf().subscribe(
      (csrf) => {
        this.saveCsrfToken(csrf);
        this.navigateToDashboard();
      },
      (err) => {
        this.handleLoginError(err);
      }
    );*/
  }
  saveCsrfToken(csrf :any) {
    if (csrf) {
      window.localStorage.setItem("X-XSRF-TOKEN", csrf.token);
      this.cookieService.set("XSRF-TOKEN", csrf.token);
    }
  }
  navigateToDashboard() {
    this.router.navigate(["dashboard"]);
  }
  handleLoginError(err : any) {
    let message;
    if (err.status == 401) {
      message = "Usuário ou senha incorretos";
    } else {
      message = "Erro ao tentar se comunicar com o servidor!";
    }
    alert(message);
  }
}
