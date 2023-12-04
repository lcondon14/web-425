/**
 * Title: grade-summary.component.ts
 * Author: Laurel Condon
 * Date: 2 Dec 2023
 * Description: gpa summary component
 **/
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
