import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgComponent } from './ug.component';

describe('UgComponent', () => {
  let component: UgComponent;
  let fixture: ComponentFixture<UgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
