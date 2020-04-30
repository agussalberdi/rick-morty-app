import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material.module';
import { EpisodesRoutingModule } from './episodes-routing.module';

import { EpisodesComponent } from './episodes.component';
import { EpisodesTableComponent } from './components/episodes-table/episodes-table.component';


@NgModule({
  declarations: [EpisodesComponent, EpisodesTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule {}
