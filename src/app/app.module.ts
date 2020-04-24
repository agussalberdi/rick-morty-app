import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CharactersModule } from './characters/characters.module';
import { ChaptersModule } from './chapters/chapters.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    CharactersModule,
    ChaptersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
