import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFeuComponent } from './pokemon-feu.component';

describe('PokemonFeuComponent', () => {
  let component: PokemonFeuComponent;
  let fixture: ComponentFixture<PokemonFeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFeuComponent]
    });
    fixture = TestBed.createComponent(PokemonFeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
