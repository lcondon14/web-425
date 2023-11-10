import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 assignment: string = 'Exercise 3.4 - Guarding Routes';

  ngOnInit(): void {
  }
}

