import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '@shared/interfaces/index';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
