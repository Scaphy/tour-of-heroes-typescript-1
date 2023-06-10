import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFoudreComponent } from './pokemon-foudre.component';

describe('PokemonFoudreComponent', () => {
  let component: PokemonFoudreComponent;
  let fixture: ComponentFixture<PokemonFoudreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFoudreComponent]
    });
    fixture = TestBed.createComponent(PokemonFoudreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
