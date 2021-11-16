import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { BannerinicioComponent } from './bannerinicio/bannerinicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamworkComponent,
    BannerinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
