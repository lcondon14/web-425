/**
 * Title: gpa.component.ts
 * Author: Laurel Condon
 * Date: 2 Dec 2023
 * Description: gpa component
 **/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
