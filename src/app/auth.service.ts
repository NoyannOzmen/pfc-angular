import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UtilisateurInfos } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//TODO Make it
  constructor() { }

  url = environment.apiUrl;

  async logIn(credentials : any): Promise<UtilisateurInfos[]> {
    const data = await fetch(`${this.url}/connexion`, {
      method: 'POST',
      headers: { "Content-type" : "application/json" },
      body: JSON.stringify(credentials)
    }).then(res => res.json());

    const user = data.user;

    if (user) {
      sessionStorage.setItem("token", data.access_token);
      this.saveUserData(user);
      if (user.accueillant) {
        sessionStorage.setItem("role", "foster")
      }
      if (user.refuge) {
       sessionStorage.setItem("role", "shelter")
      }
    }

    return (await user) ?? {};
  }

  logOut() {
    sessionStorage.clear();
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }

  hasRole(role : string) : boolean {
    if (sessionStorage.getItem("role") === role ) {
      return true;
    }
    return false;
  }

  saveUserData(userResponse: any) {
    let users = JSON.stringify(userResponse);
    let encryptedData = this.encryptData(users);
    sessionStorage.setItem('user', encryptedData);
  }

  getUserData() {
    let encryptedData = sessionStorage.getItem('user');
    if (encryptedData) {
      let decryptedData = this.decryptData(encryptedData);
      return JSON.parse(decryptedData);
    }
    return null;
  }

  encryptData(data: string): string {
    return btoa(data);
  }

  decryptData(encodedData: string): string {
    return atob(encodedData);
  }
}
