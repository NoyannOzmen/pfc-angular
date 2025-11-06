import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AssociationInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {
  url = environment.apiUrl + '/associations'

  async getAllShelters() : Promise<AssociationInfos[]> {
    const shelters = await fetch(this.url).then(res => res.json());
    shelters.forEach((shelter : AssociationInfos) => {
      shelter.images_association[0].url = environment.apiUrl + shelter.images_association[0].url;
    });
    return (await shelters) ?? [];
  }

  async getShelterById(id : number) : Promise<AssociationInfos | undefined> {
    const shelter = await fetch(`${this.url}/${id}`).then(res => res.json());
    shelter.images_association[0].url = environment.apiUrl + shelter.images_association[0].url;
    return (await shelter) ?? {};
  }

}
