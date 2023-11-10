// Import statements
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Get the isLoggedIn value from query parameters
    const isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn === 'true') {
      return true;
    } else {
      // If not logged in, navigate back to the sign-in page
      this.router.navigate(['/']);
      return false;
    }
  }
}
