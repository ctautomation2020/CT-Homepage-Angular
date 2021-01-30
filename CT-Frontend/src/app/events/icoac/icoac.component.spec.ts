import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoacComponent } from './icoac.component';

describe('IcoacComponent', () => {
  let component: IcoacComponent;
  let fixture: ComponentFixture<IcoacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
