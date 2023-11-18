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
    this.assignment =   'Exercise 5.4 - Dialogs'
  }

}
