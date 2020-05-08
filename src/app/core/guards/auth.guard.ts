import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';

/**
 * @desc This guard prevent users from accessing areas that they’re not allowed to access.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  /**
   * @desc Checks to see if a user can visit a route.
   * @returns Boolean
   */
  canActivate() {
    return this.authService.authState.pipe(
      map((user) => {
        if (!user) {
            this.router.navigate(['/auth/login']);
        }
        return !!user; // cast to a boolean. if no user returns false, if there is an user returns true.
      })
    );
  }
}
