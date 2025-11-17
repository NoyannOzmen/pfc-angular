import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { DemandeInfos, UtilisateurInfos } from '../../../models/models';
import { UserFosterService } from '../user-foster.service';
import { FosterRequestTableComponent } from "../foster-request-table/foster-request-table.component";

@Component({
  selector: 'app-foster-request',
  imports: [RouterModule, FosterRequestTableComponent],
  templateUrl: './foster-request.component.html',
  styleUrl: './foster-request.component.css'
})
export class FosterRequestComponent {
  authService : AuthService = inject(AuthService);
  fosterService : UserFosterService = inject(UserFosterService)
  user : UtilisateurInfos = this.authService.getUserData();
  currentRequests : DemandeInfos[] = []

  constructor() {
    const fosterId = Number(this.user.accueillant?.id)

    this.fosterService
    .getCurrentRequests(fosterId)
    .then((currentRequests : DemandeInfos[]) => {
      this.currentRequests =  currentRequests
    })
  }
}
