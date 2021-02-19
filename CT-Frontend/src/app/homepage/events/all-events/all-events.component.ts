import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventsService } from '../events.service';

@Component({
    selector: 'home-page-all-events',
    templateUrl: './all-events.component.html',
    styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent implements OnInit {
    year: number;
    years: number[];
    selectedYear: number;
    events: any;

    no_data: string;
    no_data_sub: string;

    constructor(
        private titleService: Title,
        private eventsService: EventsService
    ) {
        this.titleService.setTitle('All Events | CT');
        this.year = this.eventsService.current_year;
        this.no_data = 'No Events occured in the year ' + this.year;
        this.no_data_sub = 'Please try on different years';
    }

    getYears(start_year: number = 2013) {
        let years: number[] = [];
        for (let year = this.year; year >= start_year; year--) years.push(year);
        return years;
    }
    updateYearList(year: number) {
        this.selectedYear = this.year = year;
        this.no_data = 'No Events occured in the year ' + this.year;
    }
    getEventsByYear(year: number) {
        this.updateYearList(year);
        this.events = this.eventsService.getEvents(0, year);
    }
    ngOnInit(): void {
        this.years = this.getYears();
        let latest_events = this.eventsService.getLatestEvents(0);
        this.events = latest_events.data;
        this.selectedYear = +latest_events.year;
    }
}
