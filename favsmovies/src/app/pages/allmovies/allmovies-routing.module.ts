import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllmoviesPage } from './allmovies.page';

const routes: Routes = [
  {
    path: '',
    component: AllmoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllmoviesPageRoutingModule {}
