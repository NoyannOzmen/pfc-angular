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
  refugeId : string | undefined;

  constructor() {
    const animalId = parseInt(this.route.snapshot.params['animalId'], 10);
    const shelterId = parseInt(this.route.snapshot.params['shelterId'], 10);

    if(animalId) {
      this.animalService.getAnimalById(animalId).then((animal) => {
        this.shelterService.getShelterById(Number(animal?.association_id)).then((shelter) => {
          this.animalList = shelter?.pensionnaires
        })
      })
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


  i = 0;

  getPrevious() {
    if(screen.width < 768) {
    const carouselPics = document.querySelectorAll('.carousel-img');
      if(carouselPics.length > 0 && this.i > 0) {
        carouselPics[this.i].classList.toggle('hidden');
        carouselPics[this.i-1].classList.toggle('hidden');
        this.i--
      }
    } else {
      const carouselPics = document.querySelectorAll('.carousel3-img');
      if(carouselPics.length > 0 && this.i > 0) {
        carouselPics[this.i+2].classList.toggle('hidden');
        carouselPics[this.i-1].classList.toggle('hidden');
        this.i--
      }
    }
  }

    getNext() {
    if(screen.width < 768) {
      const carouselPics = document.querySelectorAll('.carousel-img');
      if(carouselPics.length > 0 && this.i < carouselPics.length - 1) {
        carouselPics[this.i].classList.toggle('hidden');
        carouselPics[this.i+1].classList.toggle('hidden');
        this.i++
      }
    } else {
      const carouselPics = document.querySelectorAll('.carousel3-img');
      if(carouselPics.length > 0 && this.i < carouselPics.length - 3) {
        carouselPics[this.i].classList.toggle('hidden');
        carouselPics[this.i+3].classList.toggle('hidden');
        this.i++
      }
    }
  }
}
