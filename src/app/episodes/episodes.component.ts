import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '@shared/services/fetch-api.service';
import { EndpointEpisodes } from '@shared/interfaces/index';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: EndpointEpisodes;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.fetchApiService.getEpisodes()
      .subscribe(episodes => {
        console.log(episodes);
        this.episodes = episodes;
      });
  }

}
