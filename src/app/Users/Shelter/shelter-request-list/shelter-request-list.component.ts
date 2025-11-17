import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { AuthService } from '../../../auth.service';
import { AnimalInfos, UtilisateurInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';
import { ShelterRequestTableComponent } from '../shelter-request-table/shelter-request-table.component';

@Component({
  selector: 'app-shelter-request-list',
  imports: [RouterModule, DashboardNavComponent, ShelterRequestTableComponent],
  templateUrl: './shelter-request-list.component.html',
  styleUrl: './shelter-request-list.component.css'
})
export class ShelterRequestListComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();
  shelterService : UserShelterService = inject(UserShelterService);
  requested : AnimalInfos[] | undefined = [];

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getRequested(shelterId).then((requested) => {
      this.requested = requested
    })
  }
}
