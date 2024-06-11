import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { babyInfo } from './model/interface';

import * as moment from 'moment'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
      dateSelectionnee: boolean = false;
      Article! : babyInfo[];
      endDate: string;

     public progress = 0;

     selectedArticleIndex: number | null = null;

     selectedArticle: {
      poids: number,
      taille: number,
      jours: string,
      semaine: string,
      nbreSemaine: string,
      images: string,
      envent: string,
      trimestre: string,
      dateDebut: string,
      dateFin: string
    } | null = null
    startDate: string;
    weeks: number[] = [];
    selectedWeek: number;
    currentWeek: number;
  
    @ViewChildren('weekButton') weekButtons: QueryList<ElementRef>;
  
  
    onDateSelected() {
      this.dateSelectionnee = true;
      this.calculateWeeks();
    }
    
    calculateWeeks() {
      if (this.startDate) {
        const start = new Date(this.startDate);
        const now = new Date();
        const diffInMs = now.getTime() - start.getTime();
        const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    
        this.currentWeek = diffInWeeks + 1;
        const totalWeeks = 40; // Toujours afficher 40 semaines
    
        // Formatage de la date de début en "jj mm aaaa"
        const formattedStartDate = start.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
    
        // Calculer la date de fin
        const end = new Date(start.getTime() + totalWeeks * 7 * 24 * 60 * 60 * 1000);
        const formattedEndDate = end.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
    
        this.endDate = formattedEndDate;
        this.weeks = Array.from({ length: totalWeeks }, (_, i) => i + 1);
        
        // Mise à jour des informations de chaque semaine en fonction de la date sélectionnée
        this.Article.forEach((article, index) => {
          const semaineDebut = parseInt(article.semaine);
          const semaineFin = semaineDebut + parseInt(article.nbreSemaine) - 1;
          if (this.currentWeek >= semaineDebut && this.currentWeek <= semaineFin) {
            this.selectedArticle = article;
            this.selectedArticleIndex = index;
          }
          
          // Mettre à jour les dates de début et de fin sélectionnées
          this.selectedArticle.dateDebut = formattedStartDate;
          this.selectedArticle.dateFin = formattedEndDate;
        });
    
        // Mettre à jour la barre de progression
        this.progress = this.currentWeek / totalWeeks;
      }
    }
    
    selectWeek(week: number) {
      this.selectedWeek = week;
    }
    
  
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
             images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
           images: "../../assets/images/1.jpg",
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
         images: "../../assets/images/3.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
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
        images: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/4/5/c45d062180_121325_foetus-bebe.jpg",
        envent: "Début des mouvements fœtaux",
        trimestre: "1er",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 7,
        taille: 4.1,
        jours: "71-77",
        semaine: "11",
        nbreSemaine:'semaine',
        images: "image1_semaine11.jpg",
        envent: "Développement des organes génitaux",
        trimestre: "1er",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 14,
        taille: 5.4,
        jours: "78-84",
        semaine: "12",
        nbreSemaine:'semaine',
        images: "image1_semaine12.jpg",
        envent: "Formation complète des organes",
        trimestre: "1er",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    // Deuxième Trimestre
    {
        poids: 23,
        taille: 7.4,
        jours: "85-91",
        semaine: "13",
        nbreSemaine:'semaine',
        images: "image1_semaine13.jpg",
        envent: "Début de la succion du pouce",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 43,
        taille: 8.7,
        jours: "92-98",
        semaine: "14",
        nbreSemaine:'semaine',
        images: "image1_semaine14.jpg",
        envent: "Développement des muscles et des os",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 70,
        taille: 10.1,
        jours: "99-105",
        semaine: "15",
        nbreSemaine:'semaine',
        images: "image1_semaine15.jpg",
        envent: "Apparition des cheveux fins",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 100,
        taille: 11.6,
        jours: "106-112",
        semaine: "16",
        nbreSemaine:'semaine',
        images: "image1_semaine16.jpg",
        envent: "Début des mouvements oculaires",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 140,
        taille: 13,
        jours: "113-119",
        semaine: "17",
        nbreSemaine:'semaine',
        images: "image1_semaine17.jpg",
        envent: "Formation du tissu adipeux",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 190,
        taille: 14.2,
        jours: "120-126",
        semaine: "18",
        nbreSemaine:'semaine',
        images: "image1_semaine18.jpg",
        envent: "Développement des empreintes digitales",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 240,
        taille: 15.3,
        jours: "127-133",
        semaine: "19",
        nbreSemaine:'semaine',
        images: "image1_semaine19.jpg",
        envent: "Développement des organes sensoriels",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 300,
        taille: 16.4,
        jours: "134-140",
        semaine: "20",
        nbreSemaine:'semaine',
        images: "image1_semaine20.jpg",
        envent: "Développement du système nerveux",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 360,
        taille: 25.6,
        jours: "141-147",
        semaine: "21",
        nbreSemaine:'semaine',
        images: "image1_semaine21.jpg",
        envent: "Développement des papilles gustatives",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 430,
        taille: 26.7,
        jours: "148-154",
        semaine: "22",
        nbreSemaine:'semaine',
        images: "image1_semaine22.jpg",
        envent: "Réaction aux sons extérieurs",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 501,
        taille: 27.8,
        jours: "155-161",
        semaine: "23",
        nbreSemaine:'semaine',
        images: "image1_semaine23.jpg",
        envent: "Développement des poumons",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 600,
        taille: 28.9,
        jours: "162-168",
        semaine: "24",
        nbreSemaine:'semaine',
        images: "image1_semaine24.jpg",
        envent: "Formation des bourgeons dentaires",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 660,
        taille: 30,
        jours: "169-175",
        semaine: "25",
        nbreSemaine:'semaine',
        images: "image1_semaine25.jpg",
        envent: "Développement des réflexes",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
        poids: 760,
        taille: 35.6,
        jours: "176-182",
        semaine: "26",
        nbreSemaine:'semaine',
        images: "image1_semaine26.jpg",
        envent: "Ouverture des yeux",
        trimestre: "2ème",
        dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
         dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
    },
    {
      poids: 2135,
      taille: 45.1,
      jours: "232-238",
      semaine: "33",
      nbreSemaine:'semaine',
      images: "image1_semaine33.jpg",
      envent: "Développement du système immunitaire",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 2360,
      taille: 46.2,
      jours: "239-245",
      semaine: "34",
      nbreSemaine:'semaine',
      images: "image1_semaine34.jpg",
      envent: "Maturation des poumons",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 2590,
      taille: 47.4,
      jours: "246-252",
      semaine: "35",
      nbreSemaine:'semaine',
      images: "image1_semaine35.jpg",
      envent: "Renforcement des os",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 2820,
      taille: 48.6,
      jours: "253-259",
      semaine: "36",
      nbreSemaine:'semaine',
      images: "image1_semaine36.jpg",
      envent: "Développement des réflexes de succion",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 3050,
      taille: 49.8,
      jours: "260-266",
      semaine: "37",
      nbreSemaine:'semaine',
      images: "image1_semaine37.jpg",
      envent: "Gestion de la température corporelle",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 3280,
      taille: 51.1,
      jours: "267-273",
      semaine: "38",
      nbreSemaine:'semaine',
      images: "image1_semaine38.jpg",
      envent: "Préparation à la naissance",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 3515,
      taille: 52.5,
      jours: "274-280",
      semaine: "39",
      nbreSemaine:'semaine',
      images: "image1_semaine39.jpg",
      envent: "Maturation du cerveau",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
  {
      poids: 3750,
      taille: 53.7,
      jours: "281-287",
      semaine: "40",
      nbreSemaine:'semaine',
      images: "image1_semaine40.jpg",
      envent: "Prêt pour la naissance",
      trimestre: "3ème",
      dateDebut: dateDebutPremierTrimestre.toLocaleDateString(), // Date de début du premier trimestre
       dateFin: dateFinPremierTrimestre.toLocaleDateString(), // Date de fin du premier trimestre
  },
    ];
  
    this.selectedArticle = this.Article[0];
  
    this.progress += 0.60;
    if (this.progress > 1) {
      setTimeout(() => {
        this.progress = 1;
      }, 3000);
    }
     }
  
    selectArticle(article: {
      poids: number,
      taille: number,
      jours: string,
      semaine: string,
      nbreSemaine: string,
      images: string,
      envent: string,
      trimestre: string,
      dateDebut: string,
      dateFin: string
    }) {
      
      this.selectedArticle = article;
      console.log(this.selectedArticle);
  }
  }
  
  
  
  