import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { EspeceInfos, TagInfos, UtilisateurInfos } from '../../../models/models';
import { SearchService } from '../../../Shared/search.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserShelterService } from '../user-shelter.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-shelter-resident-add-profile',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent, ReactiveFormsModule],
  templateUrl: './shelter-resident-add-profile.component.html',
  styleUrl: './shelter-resident-add-profile.component.css'
})
export class ShelterResidentAddProfileComponent {
  speciesList: EspeceInfos[] = [];
  tagList: TagInfos[] = [];
  searchService: SearchService = inject(SearchService);
  shelterService: UserShelterService = inject(UserShelterService);
  authService : AuthService = inject(AuthService)
  animalTagList : Array<number> = []
  user : UtilisateurInfos = this.authService.getUserData();
  router : Router = inject(Router)

  isHidden : boolean = true;
  displayModal() {
    this.isHidden = !this.isHidden
  }

  constructor() {
    this.searchService
      .getAllSpecies()
      .then((speciesList: EspeceInfos[]) => {
        this.speciesList = speciesList;
      });

    this.updateTagList()
  }

  updateTagList() {
    this.searchService
      .getAllTags()
      .then((tagList: TagInfos[]) => {
        this.tagList = tagList;
      });
  }

  tagCreationForm = new FormGroup({
    nom: new FormControl('', [Validators.minLength(3), Validators.required]),
    description: new FormControl('', [Validators.minLength(3), Validators.required]),
  })

  handleCreateTag() {
    const tagInfos = this.tagCreationForm.value;
    this.shelterService.createTag(tagInfos);
    this.tagCreationForm.reset();
    this.displayModal();
  }

  addtoTagList(event : any, id : string) {
    if(event.target.checked) {
      this.animalTagList.push(Number(id))
    } else {
      this.animalTagList = this.animalTagList.filter((element) => element !== Number(id))
    }
  }

  animalCreationForm = new FormGroup({
    nom_animal: new FormControl('', [Validators.minLength(3), Validators.required]),
    sexe_animal: new FormControl('', [Validators.minLength(3), Validators.required]),
    age_animal: new FormControl('', Validators.required),
    espece_animal: new FormControl('', [Validators.minLength(3), Validators.required]),
    race_animal: new FormControl('', Validators.minLength(3)),
    couleur_animal: new FormControl('', [Validators.minLength(3), Validators.required]),
    description_animal: new FormControl('', [Validators.minLength(3), Validators.required]),
    tags: new FormControl(),
    association_id: new FormControl('')
  })

  handleCreateAnimal() {
    const animalInfos = this.animalCreationForm.value;
    if(this.animalTagList.length > 0) {
      animalInfos.tags = this.animalTagList;
    } else {
      animalInfos.tags = []
    }
    animalInfos.association_id = this.user.refuge?.id;
    this.shelterService.createAnimal(animalInfos);
    this.animalCreationForm.reset();
    this.router.navigateByUrl('/association/profil/animaux')
  }
}
