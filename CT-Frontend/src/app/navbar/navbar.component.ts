import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login_open:boolean;
    menu_open:boolean;

    constructor() { }
    toggleLoginModal(){
        this.login_open = !this.login_open;
    }
    closeLoginModal(){
        this.login_open = false;
    }
    openMenu(){
        this.menu_open = true;
    }
    closeMenu(value:boolean){
        this.menu_open = value;
    }
    ngOnInit(): void {
        this.login_open = this.menu_open = false;
    }
    ngOnChanges(){
        this.closeMenu(false);
    }
}
