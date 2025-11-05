import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AnimalInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url = environment.apiUrl + 'animaux';

  async getAllAnimals(): Promise<AnimalInfos[]> {
      const animals = await fetch(this.url).then(res => res.json());
      return (await animals) ?? [];
  }
}
