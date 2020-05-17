import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { FetchApiService } from '@core/services/fetch-api.service';
import { Character } from '@shared/interfaces/index';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  filteredCharacters: Character[];

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  private fetchCharacters() {
    this.fetchApiService.getCharacters().pipe(
      map(data => data.results)
    ).subscribe(characters => {
      this.characters = characters;
      this.filteredCharacters = characters;
    });
  }

  handleFilter(event: Character[]) {
    this.filteredCharacters = event;
  }

}
