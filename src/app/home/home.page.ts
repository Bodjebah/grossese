import { Component } from '@angular/core';
import { babyInfo } from './model/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Article : babyInfo[];
  public progress = 0;
  selectedArticleIndex: number | null = null;
  constructor() { 

       // Date de début du premier trimestre
       const dateDebutPremierTrimestre = new Date(2024, 0, 1);
       // Date de fin du premier trimestre
       const dateFinPremierTrimestre = new Date(2024, 2, 31);
       // Calcul des jours et des semaines entre la date de début et la date de fin du premier trimestre
       const diffTime = Math.abs(dateFinPremierTrimestre.getTime() - dateDebutPremierTrimestre.getTime());
       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
       const diffWeeks = Math.ceil(diffDays / 7);
   
   
       // Création de l'objet babyInfo pour le premier trimestre
       this.Article = [
         {
           poids: 0,
           taille: 0,
           jours: "1-7",
           semaine: "1",
           nbreSemaine: 'semaine',
           images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
           envent: "Fécondation",
           trimestre: "1er",
           dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
           dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
         
         },
   {
         poids: 0,
         taille: 0,
         jours: "8-14",
         semaine: "2",
         nbreSemaine:'semaine',
         images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
         envent: "Implantation",
         trimestre: "1er",
         dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
   },
   
   {
       poids: 0,
       taille: 0,
       jours: "15-21",
       semaine: "3",
       nbreSemaine:'semaine',
       images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
       envent: "Début du développement embryonnaire",
       trimestre: "1er",
       dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
   },
  {
      poids: 0,
      taille: 1.25,
      jours: "29-35",
      semaine: "5",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Début de la formation des organes",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
      dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 0,
      taille: 2,
      jours: "36-42",
      semaine: "6",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Formation du cœur primitif",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
      dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 0,
      taille: 4,
      jours: "43-49",
      semaine: "7",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Développement des membres",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
      dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 1,
      taille: 1.6,
      jours: "50-56",
      semaine: "8",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Formation des organes principaux",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
      dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 2,
      taille: 2.3,
      jours: "57-63",
      semaine: "9",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Développement du visage",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
      dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 4,
      taille: 3,
      jours: "64-70",
      semaine: "10",
      nbreSemaine:'semaine',
      images: ["https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg"],
      envent: "Début des mouvements fœtaux",
      trimestre: "1er",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
 
  ];
  }
  
  ngOnInit(): void {
    this.progress += 0.60;
    if (this.progress > 1) {
      setTimeout(() => {
        this.progress = 1;
      }, 3000);
    }
  
  }

  
  selectedArticle: {
    poids: number,
    taille: number,
    jours: string,
    semaine: string,
    nbreSemaine: string,
    images: string[],
    envent: string,
    trimestre: string,
    dateDebut: string,
    dateFin: string
  } | null = null;

  selectArticle(article: {
    poids: number,
    taille: number,
    jours: string,
    semaine: string,
    nbreSemaine: string,
    images: string[],
    envent: string,
    trimestre: string,
    dateDebut: string,
    dateFin: string
  }) {
    console.log(this.selectedArticle);
    this.selectedArticle = article;
  }
}




