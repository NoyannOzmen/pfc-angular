export interface MediaInfos {
  id: string;
  url: string;
  ordre: string
}

export interface TagInfos {
  id: string;
  nom: string;
  description: string
}

export interface UtilisateurInfos {
  id: string;
  email: string;
  mot_de_passe: string;
  role: string;
  accueillant: FamilleInfos | null;
  refuge : AssociationInfos | null;
}

export interface FamilleInfos {
  id: string;
  prenom: string | null;
  nom: string;
  telephone: string;
  rue: string;
  commune: string;
  code_postal: string;
  pays: string;
  hebergement: string;
  terrain: string | null;
  identifiant_famille : UtilisateurInfos;
}

export interface EspeceInfos {
  id: string;
  nom: string;
}

export interface AssociationInfos {
  id: string;
  nom: string;
  responsable: string;
  rue: string;
  commune: string;
  code_postal: string;
  pays: string;
  siret: string;
  telephone: string;
  site: string | null;
  description: string | null;
  images_association: MediaInfos[];
  identifiant_association: UtilisateurInfos;
  pensionnaires : AnimalInfos[];
}

export interface AnimalInfos {
  id: string;
  association_id: string;
  nom: string;
  race: string;
  couleur: string;
  age: number;
  sexe: string;
  description: string;
  statut: string;
  espece: EspeceInfos;
  images_animal: MediaInfos[];
  refuge: AssociationInfos;
  accueillant: FamilleInfos | null;
  demandes: DemandeInfos[];
  tags: TagInfos[]
}

export interface DemandeInfos {
  id: string;
  famille: FamilleInfos;
  animal: AnimalInfos;
  statut_demande: string;
  date_debut : string;
  date_fin: string
}

export interface LoggedUserInfos {
  id: string;
  email: string;
  accueillant: FamilleInfos | null;
  refuge : AssociationInfos | null;
}

