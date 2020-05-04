import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCharactersDialogComponent } from './episode-characters-dialog.component';

describe('EpisodeCharactersDialogComponent', () => {
  let component: EpisodeCharactersDialogComponent;
  let fixture: ComponentFixture<EpisodeCharactersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeCharactersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeCharactersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
