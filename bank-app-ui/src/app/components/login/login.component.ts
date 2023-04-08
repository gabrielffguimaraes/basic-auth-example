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
  isLogged: boolean = false;
  constructor(private loginService: LoginService,
              private router: Router,
              private activatedRouter:ActivatedRoute,
              private csrfService:CsrfService,
              private cookieService: CookieService
  ) {
    this.isLogged = this.loginService.isLogged();
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.isLogged) {
      this.handleLogout();
    } else {
      this.handleLogin();
    }
  }
  handleLogout() {
    this.loginService.logout();
  }
  handleLogin() {
    this.saveUserDetails();
    this.loginService.validateLoginDetails(this.model).subscribe(
      (responseData) => {
        this.handleLoginSuccess(responseData);
      },
      (err) => {
        this.handleLoginError(err);
      }
    );
  }
  saveUserDetails() {
    window.localStorage.setItem("userdetails", JSON.stringify(this.model));
  }
  handleLoginSuccess(responseData : any) {
    this.model = <any>responseData.body;
    this.model.authStatus = "AUTH";
    window.localStorage.setItem("authorization","Bearer "+responseData.headers.get('Authorization')!);
    window.localStorage.setItem("userdetails", JSON.stringify(this.model));
    this.navigateToDashboard();
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
