
// File: composer.service.ts
// Name: Laurel Condon
// Date: 11/9/23
// Description: TS for composer service


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Johann Sebastian Bach', genre: 'Classical' },
      { composerId: 101, fullName: 'Igor Stravinsky', genre: 'Classical' },
      { composerId: 102, fullName: 'Ludwig van Beethoven', genre: 'Classical' },
      { composerId: 103, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical' },
      { composerId: 104, fullName: 'Claude Debussy', genre: 'Classical' }
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number){
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1))
    );
  }
}
