import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgForOf } from '@angular/common';
import { DogSelectComponent } from './dog/dog-select/dog-select.component';
import { DogPreviewComponent } from './dog/dog-preview/dog-preview.component';

@NgModule({
  declarations: [AppComponent, DogSelectComponent, DogPreviewComponent],
  imports: [BrowserModule, HttpClientModule, AsyncPipe, NgForOf],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
