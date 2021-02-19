import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsComponent } from './placements.component';

describe('PlacementsComponent', () => {
  let component: PlacementsComponent;
  let fixture: ComponentFixture<PlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
