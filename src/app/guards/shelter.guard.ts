import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const shelterGuard: CanActivateChildFn = () => {
  const authService = inject(AuthService);
  return authService.hasRole('shelter');
};
