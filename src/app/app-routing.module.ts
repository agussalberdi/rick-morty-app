import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: 'chapters', loadChildren: () => import('./chapters/chapters.module').then(m => m.ChaptersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
