import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { ListOfVillainsComponent } from './list-of-villains/list-of-villains.component';
import { VillainEditComponent } from './villain-edit/villain-edit.component';

const routes: Routes = [
{
path: '',
component: HeroesListComponent
},
{

  path: 'edit/:id',
  component: HeroEditComponent
},
{
  path: '',
component: ListOfVillainsComponent
},
{

  path: 'edit/:id',
  component: VillainEditComponent
}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
