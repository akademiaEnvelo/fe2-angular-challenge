import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DogApiService } from './dog.api.service';
import { upperCaseFirstLetter } from './uppercase-first-letter';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private dogApiService: DogApiService) {}

  getDogBreeds() {
    return this.dogApiService.getDogBreeds().pipe(
      map(({ message }) =>
        Object.entries(message)
          .map(([breedName, subBreeds]) => {
            const formattedName = upperCaseFirstLetter(breedName);

            if (subBreeds.length) {
              return subBreeds.map((subbreed) => `${formattedName} ${upperCaseFirstLetter(subbreed)}`);
            } else {
              return formattedName;
            }
          })
          .flat()
      )
    );
  }

  getDogImageUrl(breed: string) {
    return this.dogApiService.getDogImageUrl(breed).pipe(map(({ message }) => message));
  }
}
