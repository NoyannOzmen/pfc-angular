import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AnimalInfos, AssociationInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {
  url = environment.apiUrl + '/associations'

  async getAllShelters() : Promise<AssociationInfos[]> {
    const shelters = await fetch(this.url).then(res => res.json());
    shelters.forEach((shelter : AssociationInfos) => {
      if(shelter.images_association.length) {
        shelter.images_association[0].url = environment.apiUrl + shelter.images_association[0].url;
      }
    });
    return (await shelters) ?? [];
  }

  async getShelterById(id : number) : Promise<AssociationInfos | undefined> {
    const shelter = await fetch(`${this.url}/${id}`).then(res => res.json());
    if(shelter.images_association.length > 0) {
      shelter.images_association[0].url = environment.apiUrl + shelter.images_association[0].url;
    }
    shelter.pensionnaires.forEach((animal : AnimalInfos) => {
      if(animal.images_animal.length > 0) {
        animal.images_animal[0].url = environment.apiUrl + animal.images_animal[0].url
      }
    });
    return (await shelter) ?? {};
  }
}
