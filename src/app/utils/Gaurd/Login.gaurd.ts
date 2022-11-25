import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginGaurd implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.checkLoginData()) {
    this.router.navigate(['']);

      return false;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['']);
    return true;
  }
  public checkLoginData(): boolean {
    if (localStorage.getItem('isLoggedIn')) {
      return true;
    } else {
      return false;
    }
  }
}
