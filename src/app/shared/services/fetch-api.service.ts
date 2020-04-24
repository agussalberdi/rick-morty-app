import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(`${environment.api_url}/character`);
  }

  getEpisodes() {
    return this.http.get(`${environment.api_url}/episode`);
  }

  getLocations() {
    return this.http.get(`${environment.api_url}/location`);
  }
}
