import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkingSpacesComponent } from './coworking-spaces/coworking-spaces.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coworking-spaces', component: CoworkingSpacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
