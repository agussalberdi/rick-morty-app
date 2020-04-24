import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaptersComponent } from './chapters.component';


const routes: Routes = [
  { path: '', component: ChaptersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule {}
