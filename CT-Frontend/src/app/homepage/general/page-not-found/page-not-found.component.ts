import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Page Not Found | CT');
    }

    ngOnInit(): void {}
}
