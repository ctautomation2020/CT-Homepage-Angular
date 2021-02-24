import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModelComponent } from './student-model.component';

describe('StudentModelComponent', () => {
  let component: StudentModelComponent;
  let fixture: ComponentFixture<StudentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
