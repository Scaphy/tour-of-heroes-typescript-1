import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPlanteComponent } from './pokemon-plante.component';

describe('PokemonPlanteComponent', () => {
  let component: PokemonPlanteComponent;
  let fixture: ComponentFixture<PokemonPlanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonPlanteComponent]
    });
    fixture = TestBed.createComponent(PokemonPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
