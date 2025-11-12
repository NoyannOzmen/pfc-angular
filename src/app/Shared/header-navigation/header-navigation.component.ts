import { Component, inject } from '@angular/core';
import { HeaderLoggedComponent } from '../header-logged/header-logged.component';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header-navigation',
  imports: [HeaderLoggedComponent, HeaderLoginComponent],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.css'
})
export class HeaderNavigationComponent {
  authService: AuthService = inject(AuthService)
  isAuthenticated = this.authService.isAuthenticated
}
