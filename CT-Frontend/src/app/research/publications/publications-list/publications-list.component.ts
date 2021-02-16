import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from 'src/app/people/staffs/staffs.service';
import { PublicationsService } from '../publications.service';

@Component({
    selector: 'publications-list',
    templateUrl: './publications-list.component.html',
    styleUrls: [
        '../publications.component.css',
        './publications-list.component.css',
    ],
})
export class PublicationsListComponent implements OnInit {
    year: number;
    resolved: boolean;

    ref_code: any;
    publications: any[] = [];

    pg_no: number = 1;
    total: number;

    no_data: string;
    no_data_sub: string;

    constructor(
        private route: ActivatedRoute,
        private pubService: PublicationsService,
        private staffService: StaffsService
    ) {
        this.route.data.subscribe((data) => {
            this.publications = data['data']['result'];
            this.total = data['data']['count'];

            this.year = !isNaN(+data['data']['year'])
                ? +data['data']['year']
                : null;

            this.pubService.start_year = this.year;

            this.ref_code = this.staffService.getObject(data['ref']);
            this.resolved = true;
        });
        this.route.queryParams.subscribe((params) => {
            this.year = +params['year'];

            if (isNaN(this.year) && !this.resolved) {
                this.pubService.getAllPublications(0).subscribe((data) => {
                    this.publications = data['result'];
                    this.total = data['count'];
                });
            } else {
                if (!this.resolved) {
                    this.pubService.getPubList(this.year).subscribe((data) => {
                        this.publications = data['result'];
                        this.total = 0;
                        this.pubService.start_year = this.year;
                    });
                }
                this.resolved = false;
            }

            this.pg_no = 1;

            this.no_data = 'Publications are not available - ' + this.year;
            this.no_data_sub = 'Recent publications will be updated soon';
        });
    }

    getDOI(url: string) {
        if (!url) return '';
        if (!url.includes('http')) return 'http://doi.org/' + url;
        else return url;
    }
    getNextPublications(page: number) {
        this.pg_no = page;
        if (!this.year || this.year == undefined) {
            this.pubService
                .getAllPublications((page - 1) * this.pubService.per_page)
                .subscribe((data) => {
                    this.publications = data['result'];
                    this.total = data['count'];
                });
        }
    }
    ngOnInit(): void {}
}
