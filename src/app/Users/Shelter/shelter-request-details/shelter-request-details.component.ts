import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { UserShelterService } from '../user-shelter.service';
import { DemandeInfos } from '../../../models/models';

@Component({
  selector: 'app-shelter-request-details',
  imports: [RouterModule, DashboardNavComponent],
  templateUrl: './shelter-request-details.component.html',
  styleUrl: './shelter-request-details.component.css'
})
export class ShelterRequestDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  requestId = parseInt(this.route.snapshot.params['demandeId'], 10)
  shelterService : UserShelterService = inject(UserShelterService)
  demande : DemandeInfos | undefined;
  router : Router = inject(Router);

  constructor() {
    this.shelterService.getRequestById(this.requestId).then((demande) => {
      this.demande = demande;
    });
  }

  denyRequest() {
    this.shelterService.denyRequest(this.requestId);
    this.demande!.statut_demande = 'Refusée';
    /* this.router.navigateByUrl("/association/profil/demandes") */
  }

  acceptRequest() {
    this.shelterService.acceptRequest(this.requestId);
    this.demande!.statut_demande = 'Validée';
    /* this.router.navigateByUrl("/association/profil/demandes") */
  }
}
