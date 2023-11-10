// File: person.ts 
// Name: Laurel Condon 
// Date: 11/3/2023 
//Description: person typescript

export class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords: string[] = ["#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}
