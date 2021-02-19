import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsComponent } from './academics.component';

describe('UgComponent', () => {
    let component: AcademicsComponent;
    let fixture: ComponentFixture<AcademicsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AcademicsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AcademicsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
