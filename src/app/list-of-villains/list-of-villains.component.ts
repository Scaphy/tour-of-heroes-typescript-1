import { Component, OnInit } from '@angular/core';
import Villain from '../types/vilain.type';

@Component({
  selector: 'app-list-of-villains',
  templateUrl: './list-of-villains.component.html',
  styleUrls: ['./list-of-villains.component.css'],
})
export class ListOfVillainsComponent implements OnInit {
  selectedVillain: Villain;
  constructor() {}
  /*title!:string;*/
  /*nom!:string;
  photo!:string;*/
  /*superPower!:string;
  /*imageUrl!: string;*/
  ngOnInit() {}
    /*this.title="Les villains la liste 2"
    this.nom="nomDuVilain";
    this.photo="photoDuVilain";
    this.superPower="superPowerDuVilain";
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';*/
  
  selectVillain(villain: Villain) {
      this.selectedVillain = villain;
      }

  villain: Villain[] = [
    { id: 1, name: "BadBatman",superPower:"force10"},
    { id: 2, name: "BadSuperman",superPower:"agresse" },
    { id: 3, name: "BadSpiderman",superPower:"piege" },
  ];
}
