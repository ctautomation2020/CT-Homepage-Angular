import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModelComponent } from './event-model.component';
            
describe('EventModelComponent', () => {
  let component: EventModelComponent;
  let fixture: ComponentFixture<EventModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
