import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AnimalService } from '../../Animals/animal.service';
import { ShelterService } from '../../Shelters/shelter.service';
import { AnimalInfos } from '../../models/models';

@Component({
  selector: 'app-carousel',
  imports: [RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  animalList: AnimalInfos[] | undefined = [];
  animalService: AnimalService = inject(AnimalService);
  shelterService: ShelterService = inject(ShelterService);
  isScreenWideEnough = screen.width > 768 ? signal("carousel3-img place-self-center ") : signal("carousel-img ");
  isFitting = screen.width > 768 ? signal(true) : signal(false);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    const shelterId = parseInt(this.route.snapshot.params['shelterId'], 10);

    if(animalId) {
      this.animalService
        .getAllAnimals()
        .then((animalList: AnimalInfos[]) => {
          this.animalList = animalList;
      })
      //!TODO Filter by the same shelter ID as current Animal
      /* this.animalList = this.animalList?.filter((animal) => {
        animal.refuge.id === this.refugeId;
      }) */
    }

    if(shelterId) {
      this.shelterService
        .getShelterById(shelterId)
        .then((shelter) => {
          this.animalList = shelter?.pensionnaires;
      })
    }

    if(!shelterId && !animalId) {
      this.animalService
        .getAllAnimals()
        .then((animalList: AnimalInfos[]) => {
          this.animalList = animalList;
      })
    }
  }
}
