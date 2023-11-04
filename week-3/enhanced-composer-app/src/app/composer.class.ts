// File: composer.class.ts
// Name: Laurel Condon
// Date: 11/4/23
// Description: class for composer app


import { IComposer } from './composer.interface';

export class Composer {
  composers: IComposer[];

  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Johann Sebastian Bach', genre: 'Classical' },
      { composerId: 101, fullName: 'Igor Stravinsky', genre: 'Classical' },
      { composerId: 102, fullName: 'Ludwig van Beethoven', genre: 'Classical' },
      { composerId: 103, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical' },
      { composerId: 104, fullName: 'Claude Debussy', genre: 'Classical' }
    ];
  }

  getComposers(): IComposer[] {
    return this.composers;
  }

  getComposer(composerId: number): IComposer | undefined {
    return this.composers.find(composer => composer.composerId === composerId);
  }
}
