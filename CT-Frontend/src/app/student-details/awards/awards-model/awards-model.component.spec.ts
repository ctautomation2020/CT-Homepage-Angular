import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsModelComponent } from './awards-model.component';

describe('AwardsModelComponent', () => {
  let component: AwardsModelComponent;
  let fixture: ComponentFixture<AwardsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
