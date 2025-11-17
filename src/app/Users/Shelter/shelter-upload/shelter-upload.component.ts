import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { DashboardSubNavComponent } from "../Shared/dashboard-sub-nav/dashboard-sub-nav.component";
import { AuthService } from '../../../auth.service';
import { UtilisateurInfos } from '../../../models/models';
import { ShelterService } from '../../../Shelters/shelter.service';

@Component({
  selector: 'app-shelter-upload',
  imports: [RouterModule, DashboardNavComponent, DashboardSubNavComponent],
  templateUrl: './shelter-upload.component.html',
  styleUrl: './shelter-upload.component.css'
})
export class ShelterUploadComponent {
  authService : AuthService = inject(AuthService);
  shelterService: ShelterService = inject(ShelterService);
  user : UtilisateurInfos = this.authService.getUserData();
  currentLogo : string | undefined

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getShelterById(shelterId).then((shelter) => {
      this.currentLogo = shelter?.images_association[0].url;
    });
  }

  sendFile() {
    //!TODO Add Logic
    console.warn("file has been sent")
  }
}
