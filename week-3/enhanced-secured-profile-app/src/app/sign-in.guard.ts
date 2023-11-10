import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Get the isLoggedIn value from query parameters
    const isLoggedIn = route.queryParams.isLoggedIn === 'true';

    if (isLoggedIn) {
      return true;
    } else {
      // If not logged in, navigate back to the sign-in page
      this.router.navigate(['/']);
      return false;
    }
  }
}
