

// File: composer-details.component.ts
// Name: Laurel Condon
// Date: 11/9/23
// Description: TS for composer app


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from './../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composer: IComposer; // Define the composer property
  composerId: number; // Define the composerId property

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    // Use ActivatedRoute to get the composerId from the route parameters
    this.composerId = +this.route.snapshot.paramMap.get('composerId');
  }

  ngOnInit(): void {
    // Use the ComposerService to get the composer by id
    this.composer = this.composerService.getComposer(this.composerId);
  }
}


