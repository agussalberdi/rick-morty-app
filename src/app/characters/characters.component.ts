import { Component, OnInit } from '@angular/core';
import { FetchApiService } from './../shared/services/fetch-api.service';
import { EndpointCharacters } from './../shared/interfaces/endpoint-characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: EndpointCharacters;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit() {
    this.fetchApiService.getCharacters()
      .subscribe((characters) => {
        this.characters = characters;
      }
    );
  }

}
