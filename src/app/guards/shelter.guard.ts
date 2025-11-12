import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

export const shelterGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  return authService.hasRole('shelter');
};
