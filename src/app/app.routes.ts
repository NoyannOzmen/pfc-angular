import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { LegalinfoComponent } from './legalinfo/legalinfo.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BecomeFosterComponent } from './become-foster/become-foster.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ShelterDetailsComponent } from './shelter-details/shelter-details.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FosterRegisterComponent } from './foster-register/foster-register.component';
import { FosterRequestComponent } from './foster-request/foster-request.component';
import { FosterProfileComponent } from './foster-profile/foster-profile.component';
import { ShelterRegisterComponent } from './shelter-register/shelter-register.component';
import { ShelterResidentDetailsComponent } from './shelter-resident-details/shelter-resident-details.component';
import { ShelterResidentAddProfileComponent } from './shelter-resident-add-profile/shelter-resident-add-profile.component';
import { ShelterFosteredListComponent } from './shelter-fostered-list/shelter-fostered-list.component';
import { ShelterResidentListComponent } from './shelter-resident-list/shelter-resident-list.component';
import { ShelterRequestDetailsComponent } from './shelter-request-details/shelter-request-details.component';
import { ShelterRequestListComponent } from './shelter-request-list/shelter-request-list.component';
import { ShelterUploadComponent } from './shelter-upload/shelter-upload.component';
import { ShelterDashboardComponent } from './shelter-dashboard/shelter-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
  { path: 'associations/:shelterId', component: ShelterDetailsComponent, title: 'Informations sur notre partenaire' },
  { path: 'associations', component: ShelterListComponent, title: 'Nos refuges et associations partenaires' },
  /* animal routes */
  { path: 'animaux/:animalId', component: AnimalDetailsComponent, title: 'Informations sur l\'animal' },
  { path: 'animaux', component: AnimalListComponent, title: 'Nos animaux' },
  /* session routes */
  { path: 'connexion', component: LoginComponent, title: 'Se connecter' },
  { path: 'inscription', component: RegisterComponent, title: 'Créer un compte' },
  /* foster routes */
  { path: 'famille/inscription', component: FosterRegisterComponent, title: 'Créer un compte famille d\'accueil' },
  //TODO Actual Route Guards
  { path: 'famille/profil',
    component: FosterProfileComponent,
    title: 'Votre profil',
    canActivate: [authGuard, fosterGuard],
    canActivateChild: [authGuard, fosterGuard],
    children : [
      { path: 'famille/profil/demandes', component: FosterRequestComponent, title: 'Vos demandes en cours' }
    ]
  },
  /* logged shelter routes */
  { path: 'associations/inscription', component: ShelterRegisterComponent, title: 'Créer un compte association' },
  //TODO Actual Route Guards
  { path: 'associations/profil',
    component: ShelterDashboardComponent,
    title: 'Votre tableau de bord',
    canActivate: [authGuard, shelterGuard],
    canActivateChild: [authGuard, shelterGuard],
    children : [
      { path: 'animaux/:animalId', component: ShelterResidentDetailsComponent, title: 'Informations sur l\'animal' },
      { path: 'animaux/nouveau-profil', component: ShelterResidentAddProfileComponent, title: 'Créer un profil pour un animal' },
      { path: 'animaux/suivi', component: ShelterFosteredListComponent, title: 'Vos animaux hébergés' },
      { path: 'animaux', component: ShelterResidentListComponent, title: 'Vos animaux' },
      { path: 'demandes/:demandeId', component: ShelterRequestDetailsComponent, title: 'Informations sur la demande d\'accueil' },
      { path: 'demandes', component: ShelterRequestListComponent, title: 'Vos demandes d\'accueil' },
      { path: 'logo', component: ShelterUploadComponent, title: 'Modifier votre logo' },
    ]
  },
  /* catch-all error route */
  { path: '**', component: NotFoundComponent, title: 'Page non trouvée' }
];
