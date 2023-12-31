// Title: app-routing.module.ts
// Name: Laurel Condon
// Date: 16 Nov 2023
// Description: app routing module for in n out books

import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wishlist', component: WishlistComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
