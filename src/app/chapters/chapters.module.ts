import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';


@NgModule({
  declarations: [ChaptersComponent],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ]
})
export class ChaptersModule {}
