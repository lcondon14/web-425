/**  Title: wishlist-create.component.spec.ts
 Name: Laurel Condon
 Date: 30 Nov 2023
 Description: wishlist create component
 **/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem
  constructor() {
    this.item = {} as IWishlistItem
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
     })

     this.item = {} as IWishlistItem;
  }
}
