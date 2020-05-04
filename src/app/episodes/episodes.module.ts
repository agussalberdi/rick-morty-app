import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material.module';
import { EpisodesRoutingModule } from './episodes-routing.module';

import { EpisodesComponent } from './episodes.component';
import { EpisodesTableComponent } from './components/episodes-table/episodes-table.component';
import { EpisodeCharactersDialogComponent } from './components/episode-characters-dialog/episode-characters-dialog.component';


@NgModule({
  declarations: [EpisodesComponent, EpisodesTableComponent, EpisodeCharactersDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule {}
