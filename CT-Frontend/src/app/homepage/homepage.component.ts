import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
})
export class HomePageComponent {
    displayBar: boolean = true;

    constructor(private router: Router) {
        this.router.events.subscribe((route) => {
            if (location.pathname.includes('/people/staffs/profile')) {
                this.displayBar = false;
            } else this.displayBar = true;
        });
    }
}
