import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
    displayBar:boolean = true;

    constructor(private router:Router) {
        this.router.events.subscribe(route => {
            if((location.pathname).includes('/people/staffs/profile')){
                this.displayBar = false;
            }
            else this.displayBar = true;
        });
    }
}