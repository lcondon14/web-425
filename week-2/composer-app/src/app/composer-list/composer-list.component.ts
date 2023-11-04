
// File: composer-list.component.ts
// Name: Laurel Condon
// Date: 10/29/23
// Description: TS for composer app


import { Component, OnInit } from '@angular/core';

// Exports Composer
export default class Composer {

	fullName: string;
	genre: string;


  constructor(fullName: string, genre: string) {
	this.fullName = fullName;
	this.genre = genre;
  }

}


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})


// Exports Composer list component

export class ComposerListComponent  {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Johann Sebastian Bach', 'Classical'),
      new Composer('Igor Stravinsky', 'Classical'),
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Claude Debussy', 'Classical')
    ];
  }
}
