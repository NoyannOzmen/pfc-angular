import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AssociationInfos } from '../../models/models';
import { ShelterService } from '../shelter.service';
import { CarouselComponent } from '../../Shared/carousel/carousel.component';

@Component({
  selector: 'app-shelter-details',
  imports: [RouterModule, CarouselComponent],
  templateUrl: './shelter-details.component.html',
  styleUrl: './shelter-details.component.css'
})
export class ShelterDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  shelterService = inject(ShelterService);
  shelter : AssociationInfos | undefined;

  constructor() {
    const shelterId = parseInt(this.route.snapshot.params['shelterId'], 10);
    this.shelterService.getShelterById(shelterId).then((shelter) => {
      this.shelter = shelter;
    })
  }
}
