import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dog-select',
  styles: [
    `
      select {
        height: max-content;
        margin-right: 25px;
      }
    `,
  ],
  template: `
    <select *ngIf="breeds" (change)="getDogBreed($event)">
      <option selected value="">--- wybierz rasę ---</option>
      <option *ngFor="let breed of breeds" [value]="breed">
        {{ breed }}
      </option>
    </select>
  `,
})
export class DogSelectComponent {
  @Input() breeds: string[] | null = null;
  @Output() breedSelected = new EventEmitter<string>();

  getDogBreed(event: Event) {
    const input = event.target as HTMLInputElement;

    this.breedSelected.emit(input.value);
  }
}
