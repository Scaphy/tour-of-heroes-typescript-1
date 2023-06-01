import { Component, OnInit } from "@angular/core";
import Hero from "../types/hero.type";

@Component({
  selector: "app-heroes-list",
  templateUrl: "./heroes-list.component.html",
  styleUrls: ["./heroes-list.component.css"],
})
export class HeroesListComponent implements OnInit {

  selectedHero : Hero;
  constructor() {}
  ngOnInit() {}


selectHero(hero: Hero) {
this.selectedHero = hero;
}
  heroes: Hero[] = [
    { id: 1, name: "Batman",superPower:"force10"},
    { id: 2, name: "Superman",superPower:"vole" },
    { id: 3, name: "Spiderman",superPower:"Toile" },
  ];

}

