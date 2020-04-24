import { Component, OnInit } from '@angular/core';
import { FetchApiService } from './../shared/services/fetch-api.service';
import { Character } from './interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit() {
    this.fetchApiService.getCharacters().subscribe(characters => {
      console.log(characters);
      this.characters = characters.results;
      // this.info = characters.info;
    });
  }

}
