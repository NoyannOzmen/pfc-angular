import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AssociationInfos, FamilleInfos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = environment.apiUrl;

  async registerFoster(registerInfos : Object ) : Promise<string> {
    const data = await fetch(`${this.url}/famille/inscription`, {
      method : "POST",
      headers: { "Content-type" : "application/json" },
      body : JSON.stringify(registerInfos)
    }).then(res => res.json());
    return (await data.message) ?? {};
  }

  async registerShelter(registerInfos : Object ) : Promise<string> {
    const data = await fetch(`${this.url}/association/inscription`, {
      method : "POST",
      headers: { "Content-type" : "application/json" },
      body : JSON.stringify(registerInfos)
    }).then(res => res.json());
    return (await data.message) ?? {};
  }
}
