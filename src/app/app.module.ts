import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ListOfVillainsComponent } from './list-of-villains/list-of-villains.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainEditComponent } from './villain-edit/villain-edit.component';
import { VillainDetailsComponent } from './villain-details/villain-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesComponent,
    ListOfVillainsComponent,
    HeroDetailsComponent,
    HeroEditComponent,
    VillainDetailsComponent,
    VillainEditComponent,
    VillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
