import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  ngOnInit() {
    this.myProfile = new Person("Your Full Name", "Your Favorite Food", "Your Favorite Color");
  }
}
