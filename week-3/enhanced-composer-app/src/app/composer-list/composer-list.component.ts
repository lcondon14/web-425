
// File: composer-list.component.ts
// Name: Laurel Condon
// Date: 10/29/23
// Description: TS for composer app


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})


// Exports Composer list component
export class ComposerListComponent implements OnInit {
  composers: IComposer[];

  constructor() {
    this.composers = new Composer().getComposers();
  }
  ngOnInit(): void {}
}
