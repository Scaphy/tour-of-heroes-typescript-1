import { Component, OnInit, Input } from '@angular/core';
import Villain from '../types/vilain.type';
@Component({
  selector: 'app-villain-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.css']
})
export class VillainDetailsComponent implements OnInit {
@Input () villain: Villain;
  constructor() { }

  ngOnInit() {
  }

}
