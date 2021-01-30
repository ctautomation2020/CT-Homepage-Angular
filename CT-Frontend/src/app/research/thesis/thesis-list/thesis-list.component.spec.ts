import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisListComponent } from './thesis-list.component';

describe('ThesisListComponent', () => {
  let component: ThesisListComponent;
  let fixture: ComponentFixture<ThesisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
