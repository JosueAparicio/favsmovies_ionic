import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmoviesPageRoutingModule } from './allmovies-routing.module';

import { AllmoviesPage } from './allmovies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmoviesPageRoutingModule
  ],
  declarations: [AllmoviesPage]
})
export class AllmoviesPageModule {}
