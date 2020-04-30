import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesTableComponent } from './episodes-table.component';

describe('EpisodesTableComponent', () => {
  let component: EpisodesTableComponent;
  let fixture: ComponentFixture<EpisodesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesTableComponent ]
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
