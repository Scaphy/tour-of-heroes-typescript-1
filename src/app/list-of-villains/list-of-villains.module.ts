import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ListOfVillainsComponent } from '../list-of-villains/list-of-villains.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfVillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
