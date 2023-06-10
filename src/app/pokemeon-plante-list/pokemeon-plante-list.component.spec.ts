import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemeonPlanteListComponent } from './pokemeon-plante-list.component';

describe('PokemeonPlanteListComponent', () => {
  let component: PokemeonPlanteListComponent;
  let fixture: ComponentFixture<PokemeonPlanteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemeonPlanteListComponent]
    });
    fixture = TestBed.createComponent(PokemeonPlanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
