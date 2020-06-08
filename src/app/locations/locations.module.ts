import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material.module';

import { LocationsRoutingModule } from './locations-routing.module';

import { LocationsComponent } from './locations.component';
import { LocationComponent } from './components/location/location.component';


@NgModule({
  declarations: [LocationsComponent, LocationComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule
  ]
})
export class LocationsModule {}
