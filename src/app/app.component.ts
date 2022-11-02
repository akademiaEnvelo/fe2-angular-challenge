import { Component } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { DogService } from './dog/dog.service';

@Component({
  selector: 'app-root',
  styles: [
    `
      :host {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }

      main {
        display: flex;
      }
    `,
  ],
  template: `
    <h1>Psintagram</h1>
    <main style="display: flex">
      <app-dog-select [breeds]="breeds$ | async" (breedSelected)="onBreedSelected($event)"></app-dog-select>
      <br />
      <br />
      <app-dog-preview *ngIf="dogImage$" [image]="dogImage$ | async" [url]="'https://en.wikipedia.org/wiki/' + name" [linkName]="name">
      </app-dog-preview>
    </main>
  `,
})
export class AppComponent {
  breeds$ = this.dogService.getDogBreeds();
  dogImage$: Observable<string> | null = null;
  name = '';

  constructor(private dogService: DogService) {}

  onBreedSelected(breed: string) {
    this.dogImage$ = breed
      ? this.dogService.getDogImageUrl(breed).pipe(
          tap(() => {
            this.name = breed;
          })
        )
      : null;
  }
}
