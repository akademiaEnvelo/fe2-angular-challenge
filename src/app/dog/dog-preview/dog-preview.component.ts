import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dog-preview[url][linkName]',
  template: `
    <img *ngIf="image" [src]="image" width="200" (load)="onImageLoad()" />
    <p>
      Poczytaj więcej o tej rasie na wikipedii:
      <a target="_blank" [href]="url">{{ linkName }}</a>
    </p>
  `,
})
export class DogPreviewComponent implements OnChanges {
  @Input() url!: string;
  @Input() image: string | null = null;
  @Input() linkName!: string;

  imageReady = false;

  onImageLoad() {
    this.imageReady = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['image'].currentValue) {
      this.imageReady = false;
    }
  }
}
