import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { AnimalService } from '../../../Animals/animal.service';
import { AnimalInfos, UtilisateurInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-shelter-resident-details',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent],
  templateUrl: './shelter-resident-details.component.html',
  styleUrl: './shelter-resident-details.component.css'
})
export class ShelterResidentDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  authService : AuthService = inject(AuthService);
  animalService : AnimalService = inject(AnimalService);
  userShelterService: UserShelterService = inject(UserShelterService);
  animal : AnimalInfos | undefined;
  user : UtilisateurInfos = this.authService.getUserData();
  animalId = this.route.snapshot.params['animalId'];

  upload(event : any) {
    const file : File = event.target.files[0];
    if (file) {
      this.userShelterService.updateAnimalPicture(file, this.animalId);
    }
  }

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    this.animalService.getAnimalById(animalId).then((animal) => {
        this.animal = animal;
    });
  }
}
