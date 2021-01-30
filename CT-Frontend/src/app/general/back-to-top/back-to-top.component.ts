import { Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'back-to-top',
    templateUrl: './back-to-top.component.html',
    styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

    backToTop:boolean;

    constructor() {
        this.backToTop = false;
    }
    gotoTop(){
        window.scrollTo(0,0);
    }
    @HostListener('window:scroll',['$event'])
    checkScroll(){
        if(document.documentElement.scrollTop > 20) {
            this.backToTop = true;
        }
        else this.backToTop = false;
    }
    ngOnInit(): void {
    }

}
