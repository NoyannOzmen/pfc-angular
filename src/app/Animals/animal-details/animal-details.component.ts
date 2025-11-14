import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalInfos } from '../../models/models';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../../Shared/carousel/carousel.component';
import { ShelterService } from '../../Shelters/shelter.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-animal-details',
  imports: [RouterModule, CarouselComponent],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.css'
})
export class AnimalDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService = inject(AnimalService);
  shelterService = inject(ShelterService);
  authService = inject(AuthService)
  animal : AnimalInfos | undefined;
  animalTags : AnimalInfos[] | undefined;
  isFoster = this.authService.hasRole('foster')

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    this.animalService.getAnimalById(animalId).then((animal) => {
        this.animal = animal;
    });
  }

  makeRequest() {
    console.warn("Sent foster request")
  }
}
