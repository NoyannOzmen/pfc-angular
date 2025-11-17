import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AnimalInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url = environment.apiUrl + '/animaux';

  async getAllAnimals(): Promise<AnimalInfos[]> {
      const animals = await fetch(this.url).then(res => res.json());
      animals.forEach((animal : AnimalInfos) => {
        animal.images_animal[0].url = environment.apiUrl + animal.images_animal[0].url;
      });
      return (await animals) ?? [];
  }

  async getAnimalById(id: number): Promise<AnimalInfos | undefined> {
    const animal = await fetch(`${this.url}/${id}`).then(res=>res.json());
    if(animal.images_animal.length > 0) {
      animal.images_animal[0].url = environment.apiUrl + animal.images_animal[0].url;
    }
    if(animal.refuge.images_association.length > 0) {
      animal.refuge.images_association[0].url = environment.apiUrl + animal.refuge.images_association[0].url;
    }
    return (await animal) ?? {};
  }
}
