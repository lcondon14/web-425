/**  Title: wishlist.component.ts
 Name: Laurel Condon
 Date: 30 Nov 2023
 Description: wishlist component
 **/

 import { Component, OnInit } from '@angular/core';
 import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
