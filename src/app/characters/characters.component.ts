import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '@shared/services/fetch-api.service';
import { Character } from '@shared/interfaces/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit() {
    this.characters$ = this.fetchApiService.getCharacters().pipe(
      map(characters => characters.results)
    );
  }

}
