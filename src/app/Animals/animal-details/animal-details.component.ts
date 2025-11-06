import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalInfos } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  imports: [RouterModule],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.css'
})
export class AnimalDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService = inject(AnimalService);
  animal : AnimalInfos | undefined;
  animalTags : AnimalInfos[] | undefined;

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    this.animalService.getAnimalById(animalId).then((animal) => {
        this.animal = animal;
    });
  }
}
