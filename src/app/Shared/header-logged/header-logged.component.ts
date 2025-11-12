import { Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AuthService } from '../../auth.service';
import { UtilisateurInfos } from '../../models/models';

@Component({
  selector: 'app-header-logged',
  imports: [RouterModule],
  templateUrl: './header-logged.component.html',
  styleUrl: './header-logged.component.css'
})
export class HeaderLoggedComponent {
  authService : AuthService = inject(AuthService)
  logOut = this.authService.logOut
  user : UtilisateurInfos = this.authService.getUserData();

  isShelter = this.authService.hasRole('shelter')
  isFoster = this.authService.hasRole('foster')
}
