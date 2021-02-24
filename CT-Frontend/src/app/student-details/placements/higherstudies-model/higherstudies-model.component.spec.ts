import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherstudiesModelComponent } from './higherstudies-model.component';

describe('HigherstudiesModelComponent', () => {
  let component: HigherstudiesModelComponent;
  let fixture: ComponentFixture<HigherstudiesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherstudiesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherstudiesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
