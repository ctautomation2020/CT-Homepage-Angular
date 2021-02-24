import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyModelComponent } from './family-model.component';

describe('FamilyModelComponent', () => {
  let component: FamilyModelComponent;
  let fixture: ComponentFixture<FamilyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
