import { Routes } from '@angular/router';
import { HomeComponent } from './StaticPages/home/home.component';
import { AboutComponent } from './StaticPages/about/about.component';
import { ContactComponent } from './StaticPages/contact/contact.component';
import { FaqComponent } from './StaticPages/faq/faq.component';
import { LegalinfoComponent } from './StaticPages/legalinfo/legalinfo.component';
import { PrivacyComponent } from './StaticPages/privacy/privacy.component';
import { BecomeFosterComponent } from './StaticPages/become-foster/become-foster.component';
import { SitemapComponent } from './StaticPages/sitemap/sitemap.component';
import { ShelterDetailsComponent } from './Shelters/shelter-details/shelter-details.component';
import { ShelterListComponent } from './Shelters/shelter-list/shelter-list.component';
import { AnimalDetailsComponent } from './Animals/animal-details/animal-details.component';
import { AnimalListComponent } from './Animals/animal-list/animal-list.component';
import { LoginComponent } from './Session/login/login.component';
import { RegisterComponent } from './Session/register/register.component';
import { FosterRegisterComponent } from './Session/foster-register/foster-register.component';
import { FosterRequestComponent } from './Users/Foster/foster-request/foster-request.component';
import { FosterProfileComponent } from './Users/Foster/foster-profile/foster-profile.component';
import { ShelterRegisterComponent } from './Session/shelter-register/shelter-register.component';
import { ShelterResidentDetailsComponent } from './Users/Shelter/shelter-resident-details/shelter-resident-details.component';
import { ShelterResidentAddProfileComponent } from './Users/Shelter/shelter-resident-add-profile/shelter-resident-add-profile.component';
import { ShelterFosteredListComponent } from './Users/Shelter/shelter-fostered-list/shelter-fostered-list.component';
import { ShelterResidentListComponent } from './Users/Shelter/shelter-resident-list/shelter-resident-list.component';
import { ShelterRequestDetailsComponent } from './Users/Shelter/shelter-request-details/shelter-request-details.component';
import { ShelterRequestListComponent } from './Users/Shelter/shelter-request-list/shelter-request-list.component';
import { ShelterUploadComponent } from './Users/Shelter/shelter-upload/shelter-upload.component';
import { ShelterDashboardComponent } from './Users/Shelter/shelter-dashboard/shelter-dashboard.component';
import { NotFoundComponent } from './StaticPages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { fosterGuard } from './guards/foster.guard';
import { shelterGuard } from './guards/shelter.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'PetFosterConnect' },
  /* static pages */
  { path: 'a-propos', component: AboutComponent, title: 'A propos de nous' },
  { path: 'contact', component: ContactComponent, title: 'Nous contacter' },
  { path: 'faq', component: FaqComponent, title: 'Foire Aux Questions' },
  { path: 'infos-legales', component: LegalinfoComponent, title: 'Informations légales' },
  { path: 'rgpd', component: PrivacyComponent, title: 'Politique de protection des données' },
  { path: 'devenir-famille-d-accueil', component: BecomeFosterComponent, title: 'Devenir famille d\'accueil' },
  { path: 'plan', component: SitemapComponent, title: 'Plan du site' },
  /* shelter routes */
  { path: 'refuges/:shelterId', component: ShelterDetailsComponent, title: 'Informations sur notre partenaire' },
  { path: 'refuges', component: ShelterListComponent, title: 'Nos refuges et associations partenaires' },
  /* animal routes */
  { path: 'animaux/:animalId', component: AnimalDetailsComponent, title: 'Informations sur l\'animal' },
  { path: 'animaux', component: AnimalListComponent, title: 'Nos animaux' },
  /* session routes */
  { path: 'connexion', component: LoginComponent, title: 'Se connecter' },
  { path: 'inscription', component: RegisterComponent, title: 'Créer un compte' },
  /* foster routes */
  { path: 'famille/inscription', component: FosterRegisterComponent, title: 'Créer un compte famille d\'accueil' },
  { path: 'famille/profil', component: FosterProfileComponent, title: 'Votre profil', canActivate: [authGuard, fosterGuard],
    /* canActivateChild: [authGuard, fosterGuard],
    children : [
      { path: 'demandes', component: FosterRequestComponent, title: 'Vos demandes en cours' }
    ] */
  },
  { path: 'famille/profil/demandes', component: FosterRequestComponent, title: 'Vos demandes en cours', canActivate: [authGuard, fosterGuard]},
  /* logged shelter routes */
  { path: 'association/inscription', component: ShelterRegisterComponent, title: 'Créer un compte association' },
  { path: 'association/profil', component: ShelterDashboardComponent, title: 'Votre tableau de bord', canActivate: [authGuard, shelterGuard],
    /* canActivateChild: [authGuard, shelterGuard],
    children : [
      { path: 'animaux/:animalId', component: ShelterResidentDetailsComponent, title: 'Informations sur l\'animal' },
      { path: 'animaux/nouveau-profil', component: ShelterResidentAddProfileComponent, title: 'Créer un profil pour un animal' },
      { path: 'animaux/suivi', component: ShelterFosteredListComponent, title: 'Vos animaux hébergés' },
      { path: 'animaux', component: ShelterResidentListComponent, title: 'Vos animaux' },
      { path: 'demandes/:demandeId', component: ShelterRequestDetailsComponent, title: 'Informations sur la demande d\'accueil' },
      { path: 'demandes', component: ShelterRequestListComponent, title: 'Vos demandes d\'accueil' },
      { path: 'logo', component: ShelterUploadComponent, title: 'Modifier votre logo' },
    ] */
  },
  { path: 'association/profil/animaux/nouveau-profil', component: ShelterResidentAddProfileComponent, title: 'Créer un profil pour un animal', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/animaux/suivi', component: ShelterFosteredListComponent, title: 'Vos animaux hébergés', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/animaux/:animalId', component: ShelterResidentDetailsComponent, title: 'Informations sur l\'animal', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/animaux', component: ShelterResidentListComponent, title: 'Vos animaux', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/demandes/:demandeId', component: ShelterRequestDetailsComponent, title: 'Informations sur la demande d\'accueil', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/demandes', component: ShelterRequestListComponent, title: 'Vos demandes d\'accueil', canActivate: [authGuard, shelterGuard]},
  { path: 'association/profil/logo', component: ShelterUploadComponent, title: 'Modifier votre logo', canActivate: [authGuard, shelterGuard]},
  /* catch-all error route */
  { path: '**', component: NotFoundComponent, title: 'Page non trouvée' }
];
