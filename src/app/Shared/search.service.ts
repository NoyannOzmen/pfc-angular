import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EspeceInfos, TagInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = environment.apiUrl;

  async getAllSpecies(): Promise<EspeceInfos[]> {
      const species = await fetch(`${this.url}/especes`).then(res => res.json());
      return (await species) ?? [];
  }

  async getAllTags(): Promise<TagInfos[]> {
      const tags = await fetch(`${this.url}/tags`).then(res => res.json());
      console.log(tags)
      return (await tags) ?? [];
  }
}
