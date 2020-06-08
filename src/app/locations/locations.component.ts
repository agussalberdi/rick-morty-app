import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '@core/services/fetch-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@shared/interfaces/index';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.locations$ = this.fetchApiService.getLocations().pipe(
      map(locations => locations.results)
    );
  }
}
