import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { AnimalService } from '../../../Animals/animal.service';
import { AnimalInfos } from '../../../models/models';

@Component({
  selector: 'app-shelter-resident-details',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent],
  templateUrl: './shelter-resident-details.component.html',
  styleUrl: './shelter-resident-details.component.css'
})
export class ShelterResidentDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService = inject(AnimalService);
  animal : AnimalInfos | undefined;

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    this.animalService.getAnimalById(animalId).then((animal) => {
        this.animal = animal;
    });
  }
}
