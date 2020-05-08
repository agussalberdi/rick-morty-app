import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { EndpointCharacters, EndpointEpisodes } from '@shared/interfaces/index';

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
  getCharacters() {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character`);
  }

  /**
   * @desc Method for retrieving multiple characters by ids.
   */
  getMultipleCharactersByIds(ids: number[]) {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character/${ids}`);
  }

  /**
   * @desc Method for retrieving all the episodes.
   */
  getEpisodes() {
    return this.http.get<EndpointEpisodes>(`${environment.api_url}/episode`);
  }

  /**
   * @desc Method for retrieving all the locations.
   */
  getLocations() {
    return this.http.get(`${environment.api_url}/location`);
  }
}
