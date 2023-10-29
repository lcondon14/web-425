import { Component } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class Person {
  fullName: string;
  favoriteFood: string;

  constructor(fullName: string, favoriteFood: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
  }
}