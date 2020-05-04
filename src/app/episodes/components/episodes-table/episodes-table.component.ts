import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { EpisodeCharactersDialogComponent } from './../episode-characters-dialog/episode-characters-dialog.component';
import { Episode } from '@shared/interfaces/index';
import { FetchApiService } from '@core/services/fetch-api.service';

@Component({
  selector: 'app-episodes-table',
  templateUrl: './episodes-table.component.html',
  styleUrls: ['./episodes-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodesTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() episodes: Episode[];

  dataSource: MatTableDataSource<Episode>;
  displayedColumns: string[] = ['episode', 'name', 'air_date', 'url', 'characters'];

  constructor(private cd: ChangeDetectorRef, public dialog: MatDialog, private fetchApiService: FetchApiService) {
    this.dataSource = new MatTableDataSource(this.episodes);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.episodes.currentValue) {
      this.assignDataSource(changes.episodes.currentValue);
    }
  }

  private assignDataSource(dataSource) {
    this.dataSource = new MatTableDataSource(dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(urls: string[]): void {
    const ids = urls.map(url => Number(url.split('character/', url.length)[1]));
    this.fetchApiService.getMultipleCharactersByIds(ids).subscribe(characters => {
      const dialogRef = this.dialog.open(EpisodeCharactersDialogComponent, {
        width: '250px',
        data: characters
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    });
  }

}
