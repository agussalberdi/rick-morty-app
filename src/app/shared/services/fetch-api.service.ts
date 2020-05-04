import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { EndpointCharacters, EndpointEpisodes } from '@shared/interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character`);
  }

  getMultipleCharactersByIds(ids: number[]) {
    return this.http.get<EndpointCharacters>(`${environment.api_url}/character/${ids}`);
  }

  getEpisodes() {
    return this.http.get<EndpointEpisodes>(`${environment.api_url}/episode`);
  }

  getLocations() {
    return this.http.get(`${environment.api_url}/location`);
  }
}
