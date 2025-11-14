import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AnimalInfos, DemandeInfos, UtilisateurInfos } from '../../../models/models';
import { AnimalService } from '../../../Animals/animal.service';
import { UserFosterService } from '../user-foster.service';

@Component({
  selector: 'app-foster-request',
  imports: [RouterModule],
  templateUrl: './foster-request.component.html',
  styleUrl: './foster-request.component.css'
})
export class FosterRequestComponent {
  authService : AuthService = inject(AuthService);
  animalService : AnimalService = inject(AnimalService);
  fosterService : UserFosterService = inject(UserFosterService)
  user : UtilisateurInfos = this.authService.getUserData();
  currentRequests : DemandeInfos[] = []

  isHidden = true;
  toggle() {
    this.isHidden = !this.isHidden
    //!TODO : Scope
  };

  constructor() {
    const fosterId = Number(this.user.accueillant?.id)

    this.fosterService
    .getCurrentRequests(fosterId)
    .then((currentRequests : DemandeInfos[]) => {
      this.currentRequests =  currentRequests
    })
  }
}
