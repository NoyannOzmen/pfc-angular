import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AssociationInfos, FamilleInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = environment.apiUrl;

  async registerFoster(registerInfos : Object ) : Promise<FamilleInfos> {
    const newFoster = await fetch(`${this.url}/famille/inscription`, {
      method : "POST",
      headers: { "Content-type" : "application/json" },
      body : JSON.stringify(registerInfos)
    }).then(res => res.json());
    return (await newFoster) ?? {};
  }

  async registerShelter(registerInfos : Object ) : Promise<AssociationInfos> {
    const newShelter = await fetch(`${this.url}/association/inscription`, {
      method : "POST",
      headers: { "Content-type" : "application/json" },
      body : JSON.stringify(registerInfos)
    }).then(res => res.json());
    return (await newShelter) ?? {};
  }
}
