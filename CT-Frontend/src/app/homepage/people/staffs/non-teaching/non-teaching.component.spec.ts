import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingComponent } from './non-teaching.component';

describe('NonTeachingComponent', () => {
  let component: NonTeachingComponent;
  let fixture: ComponentFixture<NonTeachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTeachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
