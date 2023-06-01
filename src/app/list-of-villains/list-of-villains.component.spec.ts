import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfVillainsComponent } from './list-of-villains.component';

describe('ListOfVillainsComponent', () => {
  let component: ListOfVillainsComponent;
  let fixture: ComponentFixture<ListOfVillainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfVillainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
