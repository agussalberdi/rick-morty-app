import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Episode } from '@shared/interfaces/index';

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
  displayedColumns: string[] = ['episode', 'name', 'air_date', 'url'];

  constructor(private cd: ChangeDetectorRef) {
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

}
