import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
    selector: 'home-page-icoac',
    templateUrl: './icoac.component.html',
    styleUrls: ['./icoac.component.css'],
})
export class IcoacComponent implements OnInit {
    event: any;

    constructor(
        private titleService: Title,
        private router: Router,
        private route: ActivatedRoute,
        private eventService: EventsService
    ) {
        this.titleService.setTitle('ICoAC | CT');
        this.route.params.subscribe((params) => {
            this.event = this.eventService.getSpecificEvent(
                params['year'],
                'icoac'
            );

            if (this.event == undefined || this.event == null) {
                this.router.navigate(['/events/all-events']);
            }
        });
    }

    ngOnInit(): void {}
}
