import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { EndpointCharacters, EndpointEpisodes, EndpointLocations } from '@shared/interfaces/index';

/**
 * @desc This service allow us to retrieve data from an external API.
 */
@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) {}

  /**
   * @desc Method for retrieving all the characters.
   */
  getCharacters(): Observable<EndpointCharacters> {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character`);
  }

  /**
   * @desc Method for retrieving multiple characters by ids.
   */
  getMultipleCharactersByIds(ids: number[]): Observable<EndpointCharacters> {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character/${ids}`);
  }

  /**
   * @desc Method for retrieving all the episodes.
   */
  getEpisodes(): Observable<EndpointEpisodes> {
    return this.http.get<EndpointEpisodes>(`${environment.api_url}/episode`);
  }

  /**
   * @desc Method for retrieving all the locations.
   */
  getLocations(): Observable<EndpointLocations> {
    return this.http.get<EndpointLocations>(`${environment.api_url}/location`);
  }
}
