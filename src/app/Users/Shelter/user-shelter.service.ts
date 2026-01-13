import { Injectable } from '@angular/core';
import { AnimalInfos, AssociationInfos, DemandeInfos, MediaInfos } from '../../models/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserShelterService {
  url = environment.apiUrl + '/associations'

  async getDashboardInfos(id: number) : Promise<AssociationInfos> {
    const token = sessionStorage.getItem("token")
    const shelter = await fetch(`${this.url}/profil/${id}`, {
      headers: {
        "Content-type" : "application/json",
        "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    return shelter;
  }

  async getRequested(id : number) : Promise<AnimalInfos[]> {
    const token = sessionStorage.getItem("token")
    const requested = await fetch(`${this.url}/${id}/requested`, {
      headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    return (await requested) ?? [];
  }

  async getAnimalRequests(id : number) : Promise<DemandeInfos[]> {
    const token = sessionStorage.getItem("token")
    const requests = await fetch(`${environment.apiUrl}/animaux/${id}/requests`, {
      headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    return (await requests) ?? [];
  }

  async getRequestById(id: number) : Promise<DemandeInfos> {
    const token = sessionStorage.getItem("token")
    const request = await fetch(`${environment.apiUrl}/demandes/${id}`, {
      headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    if(request.animal.images_animal.length > 0) {
       request.animal.images_animal[0].url = environment.apiUrl + request.animal.images_animal[0].url;
    }
    return (await request) ?? {};
  }

  async getFostered(id : number) : Promise<AnimalInfos[]> {
    const token = sessionStorage.getItem("token")
    const fostered = await fetch(`${this.url}/${id}/fostered`, {
      headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
      },
    }).then(res => res.json());
    fostered.forEach((animal : AnimalInfos) => {
      if(animal.images_animal.length > 0) {
        animal.images_animal[0].url = environment.apiUrl + animal.images_animal[0].url;
      }
      });
    return (await fostered) ?? [];
  }

  async updateShelterInfos(updateInfos : Object) : Promise<AssociationInfos> {
    const token = sessionStorage.getItem("token");
    const updatedShelter = await fetch(`${this.url}/profil`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify(updateInfos)
    }).then(res => res.json());
    return (await updatedShelter) ?? {}
  }

  async updateLogo(file: File, id : string) : Promise<MediaInfos> {
    const token = sessionStorage.getItem("token");
    const formData = new FormData;
    formData.append("assoId", id)
    formData.append("file", file, file.name)
    const logo = await fetch(environment.apiUrl + "/upload/logo", {
      method : "POST",
      headers : {
        "Authorization" : `Bearer ${token}`
      },
      body: formData
    }).then(res => res.json());
    logo.url = environment.apiUrl + logo.url;
    return (await logo) ?? {}
  }

    async updateAnimalPicture(file: File, id : string) : Promise<MediaInfos> {
    const token = sessionStorage.getItem("token");
    const formData = new FormData;
    formData.append("animalId", id)
    formData.append("file", file, file.name)
    const photo = await fetch(environment.apiUrl + "/upload/photo", {
      method : "POST",
      headers : {
        "Authorization" : `Bearer ${token}`
      },
      body: formData
    }).then(res => res.json());
    photo.url = environment.apiUrl + photo.url;
    return (await photo) ?? {}
  }

  async denyRequest(id: number) : Promise<void> {
    const token = sessionStorage.getItem("token");
    await fetch(`${this.url}/profil/demandes/${id}/deny`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json());
  }

  async acceptRequest(id: number) : Promise<void> {
    const token = sessionStorage.getItem("token");
    await fetch(`${this.url}/profil/demandes/${id}/accept`, {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json());
  }

  async createTag(tagInfos : Object) : Promise<void> {
    const token = sessionStorage.getItem("token");
    await fetch(environment.apiUrl + "/tags/create", {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify(tagInfos)
    }).then((res => res.json))
  }

  async createAnimal(animalInfos : Object) : Promise<void> {
    const token = sessionStorage.getItem("token");
    await fetch(environment.apiUrl + "/animaux/nouveau-profil", {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify(animalInfos)
    }).then((res => res.json))
  }

  async deleteShelterAccount() : Promise<string> {
    const token = sessionStorage.getItem("token");
    const data = await fetch(environment.apiUrl + '/association/profil/delete', {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json());
    return (await data.message) ?? {}
  }
}
