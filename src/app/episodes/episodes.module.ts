import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';


@NgModule({
  declarations: [EpisodesComponent, EpisodeComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule {}
