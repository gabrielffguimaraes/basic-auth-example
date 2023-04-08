import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class AuthActivateRouteGuard implements CanActivate {
    user = new User();

    constructor(private router: Router,private loginService:LoginService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(this.loginService.isLogged()) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
