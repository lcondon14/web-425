/**  Title: app.component.ts
 Name: Laurel Condon
 Date: 30 Nov 2023
 Description: app component
 **/

import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// app.component.ts
export class AppComponent {
  assignment: string;

  constructor () {
    this.assignment =  'Welcome To In-N-Out Books'
  }

}
