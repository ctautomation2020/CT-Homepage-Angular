import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkModelComponent } from './mark-model.component';

describe('MarkModelComponent', () => {
  let component: MarkModelComponent;
  let fixture: ComponentFixture<MarkModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
