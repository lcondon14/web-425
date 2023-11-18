import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781538739723',
        title: 'Verity',
        description: 'Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.',
        numOfPages: 333,
        authors: ['Colleen Hoover']
      },
      {
        isbn: '9781668021910',
        title: 'Heart Bones',
        description: 'After a childhood filled with poverty and neglect, Beyah Grim finally has her hard-earned ticket out of Kentucky with a full ride to Penn State. But two months before she’s finally free to change her life for the better, an unexpected death leaves her homeless and forced to spend the remainder of her summer in Texas with a father she barely knows.',
        numOfPages: 368,
        authors: ['Colleen Hoover']
      },
      {
        isbn: '9781668001226',
        title: 'It Starts With Us',
        description: 'Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.',
        numOfPages: 336,
        authors: ['Colleen Hoover']
      },
      {
        isbn: '9781638084365',
        title: 'Layla',
        description: 'When Leeds meets Layla, he’s convinced he’ll spend the rest of his life with her―until an unexpected attack leaves Layla fighting for her life. After weeks in the hospital, Layla recovers physically, but the emotional and mental scarring has altered the woman Leeds fell in love with. In order to put their relationship back on track, Leeds whisks Layla away to the bed-and-breakfast where they first met. Once they arrive, Layla’s behavior takes a bizarre turn. And that’s just one of many inexplicable occurrences.',
        numOfPages: 303,
        authors: ['Colleen Hoover']
      },
      {
        isbn: '9781476753188',
        title: 'Ugly Love',
        description: 'When Tate Collins meets airline pilot Miles Archer, she doesnt think its love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realize they have the perfect set-up. He doesn’t want love, she doesn’t have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her.',
        numOfPages: 336,
        authors: ['Colleen Hoover']
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }
   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }
}
