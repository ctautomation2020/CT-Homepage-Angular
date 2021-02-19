import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts/highcharts.src';
import { PublicationsService } from './publications.service';

@Component({
    selector: 'home-page-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
    year: number;
    selectedYear: number;
    years: number[] = [];
    Highcharts: typeof Highcharts = Highcharts;
    graphConfig: any;

    @ViewChild('scroller') scroller: ElementRef;

    constructor(
        private titleService: Title,
        private pubService: PublicationsService,
        private route: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.titleService.setTitle('Publications | CT');
        this.activatedRoute.queryParams.subscribe((params) => {
            let year = +params['year'];
            if (isNaN(year)) {
            }
            this.selectedYear = year;
        });
    }
    getYears(start_year: number = 2013) {
        let years: number[] = [];
        for (let year = this.year; year >= start_year; year--) years.push(year);
        return years;
    }
    updateYear(year: number) {
        this.selectedYear = year;
        this.route.navigate(['./'], {
            relativeTo: this.activatedRoute,
            queryParams: { year: this.selectedYear },
        });
    }
    slideScrollBar(value: number) {
        this.scroller.nativeElement.scrollTo({
            left: this.scroller.nativeElement.scrollLeft + value,
            behavior: 'smooth',
        });
    }
    getGraphConfig() {
        let config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
            },
            title: {
                text: 'Publications<br>2020',
                align: 'center',
                verticalAlign: 'middle',
                y: 60,
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            },
            accessibility: {
                point: {
                    valueSuffix: '%',
                },
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                        },
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%',
                },
            },
            series: [
                {
                    type: 'pie',
                    name: 'Publications',
                    innerSize: '50%',
                    data: [
                        ['IEEE', 45],
                        ['Springer', 30],
                        ['Elsiever', 13],
                        ['Science Direct', 7],
                        {
                            name: 'Others',
                            y: 5,
                            dataLabels: {
                                enabled: false,
                            },
                        },
                    ],
                },
            ],
        };
        return config;
    }
    ngOnInit(): void {
        this.year = this.pubService.current_year;
        this.selectedYear = this.pubService.start_year;

        this.years = this.getYears(2000);
        this.graphConfig = this.getGraphConfig();
    }
}
