import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimalInfos, DemandeInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';

@Component({
  selector: 'app-shelter-request-table',
  imports: [RouterModule],
  templateUrl: './shelter-request-table.component.html',
  styleUrl: './shelter-request-table.component.css'
})
export class ShelterRequestTableComponent {
  shelterService : UserShelterService = inject(UserShelterService);
  requestList : DemandeInfos[] = [];
  animal = input.required<AnimalInfos>();

  isHidden : boolean = true;
  toggle() {
    this.isHidden = !this.isHidden
  };

  findCurrentRequest(id : string) {
    if(!this.requestList.length) {
      this.shelterService.getAnimalRequests(Number(id)).then((requestList) => {
        this.requestList = requestList
      })
    }
    return this.requestList
  }
}
