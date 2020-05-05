import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '@shared/shared.module';

import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule {}
