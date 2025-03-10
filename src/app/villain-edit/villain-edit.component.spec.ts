import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainEditComponent } from './villain-edit.component';

describe('VillainEditComponent', () => {
  let component: VillainEditComponent;
  let fixture: ComponentFixture<VillainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
