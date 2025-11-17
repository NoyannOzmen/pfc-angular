import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AnimalInfos, DemandeInfos, FamilleInfos } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserFosterService {
  url = environment.apiUrl;

  async getCurrentRequests(id : number) : Promise<DemandeInfos[]> {
    const token = sessionStorage.getItem("token")
    const currentRequests = await fetch(`${this.url}/demandes` /* /famille/profil/demandes/${id} */, {
      headers: {
        "Content-type" : "application/json",
        "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    return (await currentRequests) ?? [];
  }

  async makeRequest(id : number) : Promise<void> {
    const token = sessionStorage.getItem("token");
    const data = await fetch(`${this.url}/animaux/${id}/faire-une-demande`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json());
    return data.message
  }

  async updateFosterInfos(updateInfos : Object) : Promise<FamilleInfos> {
    const token = sessionStorage.getItem("token");
    const updatedFoster = await fetch(`${this.url}/famille/profil`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify(updateInfos)
    }).then(res => res.json());
    return (await updatedFoster) ?? {}
  }

  async deleteFosterAccount() : Promise<void> {
    const token = sessionStorage.getItem("token");
    await fetch(`${this.url}/famille/profil/delete`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json());
  }
}
