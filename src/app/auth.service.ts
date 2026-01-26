import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl;

  async logIn(credentials: object): Promise<string> {
    const data = await fetch(`${this.url}/connexion`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    const user = data.user;

    if (user) {
      sessionStorage.setItem('token', data.access_token);
      this.saveUserData(user);
      if (user.accueillant) {
        sessionStorage.setItem('role', 'foster');
      }
      if (user.refuge) {
        sessionStorage.setItem('role', 'shelter');
      }
    }
    return (await data.message) ?? {};
  }

  logOut() {
    sessionStorage.clear();
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

  hasRole(role: string): boolean {
    if (sessionStorage.getItem('role') === role) {
      return true;
    }
    return false;
  }

  saveUserData(userResponse: object) {
    const users = JSON.stringify(userResponse);
    const encryptedData = this.encryptData(users);
    sessionStorage.setItem('user', encryptedData);
  }

  getUserData() {
    const encryptedData = sessionStorage.getItem('user');
    if (encryptedData) {
      const decryptedData = this.decryptData(encryptedData);
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
