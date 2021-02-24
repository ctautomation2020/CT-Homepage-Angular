import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsModelComponent } from './placements-model.component';

describe('PlacementsModelComponent', () => {
  let component: PlacementsModelComponent;
  let fixture: ComponentFixture<PlacementsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
