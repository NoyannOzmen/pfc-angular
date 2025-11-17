import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { DashboardSubNavComponent } from "../Shared/dashboard-sub-nav/dashboard-sub-nav.component";
import { AuthService } from '../../../auth.service';
import { UtilisateurInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';
import { ShelterService } from '../../../Shelters/shelter.service';

@Component({
  selector: 'app-shelter-upload',
  imports: [RouterModule, DashboardNavComponent, DashboardSubNavComponent],
  templateUrl: './shelter-upload.component.html',
  styleUrl: './shelter-upload.component.css'
})
export class ShelterUploadComponent {
  authService : AuthService = inject(AuthService);
  userShelterService: UserShelterService = inject(UserShelterService);
  shelterService: ShelterService = inject(ShelterService);
  user : UtilisateurInfos = this.authService.getUserData();
  currentLogo : string | undefined
  file : File | undefined ;

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getShelterById(shelterId).then((shelter) => {
      if(shelter?.images_association[0]) {
        this.currentLogo = shelter?.images_association[0].url;
      }
    });
  }

  upload(event : any) {
    const file : File = event.target.files[0];
    if (file) {
      const shelterId = this.user.refuge!.id;
      this.userShelterService.updateLogo(file, shelterId).then((res) => {
        this.currentLogo = res.url
      });
    }
  }
}
