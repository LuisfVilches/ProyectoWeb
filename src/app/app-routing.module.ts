import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { BannerinicioComponent } from './bannerinicio/bannerinicio.component';

const routes: Routes = [
  {path:"", component:TeamworkComponent},
  {path:"InicioBanner", component:BannerinicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
