import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemeonFeuListComponent } from './pokemeon-feu-list.component';

describe('PokemeonFeuListComponent', () => {
  let component: PokemeonFeuListComponent;
  let fixture: ComponentFixture<PokemeonFeuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemeonFeuListComponent]
    });
    fixture = TestBed.createComponent(PokemeonFeuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
