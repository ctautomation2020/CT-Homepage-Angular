import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarListComponent } from './scholar-list.component';

describe('ScholarListComponent', () => {
  let component: ScholarListComponent;
  let fixture: ComponentFixture<ScholarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
