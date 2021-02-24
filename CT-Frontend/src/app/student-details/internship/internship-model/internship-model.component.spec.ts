import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipModelComponent } from './internship-model.component';

describe('InternshipModelComponent', () => {
  let component: InternshipModelComponent;
  let fixture: ComponentFixture<InternshipModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
