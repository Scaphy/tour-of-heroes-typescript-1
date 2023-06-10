import { Component, OnInit } from '@angular/core';
/* import Hero from '../types/hero.type'; */
import Pokemon from '../types/pokemon_feu.type';

@Component({
  selector: 'app-pokemeon-feu-list',
  templateUrl: './pokemeon-feu-list.component.html',
  styleUrls: ['./pokemeon-feu-list.component.css']
})
export class PokemeonFeuListComponent implements OnInit {


  /*heroes = [
{ id : 1, name : 'Batman' },
{ id : 2, name : 'Superman' },
{ id : 3, name : 'Spiderman' },
]; */
constructor() { }
ngOnInit() {
}
pokemonsfeu : Pokemon-feu[] = [
  { id:1,nom:'Felinferno',taille:150,evolution:10,faiblesse:'peur_de_l_eau',attaque:'fondre_glace' },
  { id:2,nom:'Salameche',taille:200,evolution:15,faiblesse:'peur_neige',attaque:'depart_feu' },
  { id:3,nom:'Repincel',taille:250,evolution:20,faiblesse:'humidite',attaque:'rapide' },
];

}
