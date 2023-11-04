import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Composer } from '../composer.class';
import { IComposer } from '../composer.interface'; // Make sure the path to the interface is correct


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composer: IComposer; // Define the composer property

  constructor(private route: ActivatedRoute) {
    const composerIdParam = this.route.snapshot.paramMap.get('composerId');
    const composerId = parseInt(composerIdParam, 10);

    if (composerId) {
      const composer = new Composer().getComposer(composerId);

      // Assign the composer object to the composer property for further use in your component
      this.composer = composer;
    }
  }

  ngOnInit(): void {
    // Add any initialization code you may need in the ngOnInit method
  }
}
