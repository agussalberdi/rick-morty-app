import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@core/material.module';
import { FetchApiService } from '@core/services/fetch-api.service';
import { EpisodesTableComponent } from './episodes-table.component';

describe('EpisodesTableComponent', () => {
  let component: EpisodesTableComponent;
  let fixture: ComponentFixture<EpisodesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NoopAnimationsModule,
        MaterialModule
      ],
      declarations: [ EpisodesTableComponent ],
      providers: [ FetchApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
