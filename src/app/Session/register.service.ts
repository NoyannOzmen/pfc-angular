import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url = environment.apiUrl;

  async registerFoster(registerInfos: object): Promise<string> {
    const data = await fetch(`${this.url}/famille/inscription`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(registerInfos),
    }).then((res) => res.json());
    return (await data.message) ?? {};
  }

  async registerShelter(registerInfos: object): Promise<string> {
    const data = await fetch(`${this.url}/association/inscription`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(registerInfos),
    }).then((res) => res.json());
    return (await data.message) ?? {};
  }
}
