import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemeonFoudreListComponent } from './pokemeon-foudre-list.component';

describe('PokemeonFoudreListComponent', () => {
  let component: PokemeonFoudreListComponent;
  let fixture: ComponentFixture<PokemeonFoudreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemeonFoudreListComponent]
    });
    fixture = TestBed.createComponent(PokemeonFoudreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
