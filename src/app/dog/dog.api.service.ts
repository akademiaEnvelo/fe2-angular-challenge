import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DogApiResponse<T> {
  message: T;
  status: string;
}

export type DogBreedsResponse = DogApiResponse<Record<string, string[]>>;
export type DogImageResponse = DogApiResponse<string>;

@Injectable({
  providedIn: 'root',
})
export class DogApiService {
  private API_URL = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getDogBreeds() {
    return this.http.get<DogBreedsResponse>(`${this.API_URL}/breeds/list/all`);
  }

  getDogImageUrl(breed: string) {
    return this.http.get<DogImageResponse>(`${this.API_URL}/breed/${breed.replace(' ', '/').toLowerCase()}/images/random`);
  }
}
