import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StaffsService } from '../staffs.service';

@Component({
    selector: 'home-page-non-teaching',
    templateUrl: './non-teaching.component.html',
    styleUrls: ['../staffs.component.css', './non-teaching.component.css'],
})
export class NonTeachingComponent implements OnInit {
    staffs: any;

    constructor(
        private titleService: Title,
        private staffService: StaffsService
    ) {
        this.titleService.setTitle('Non-Teaching Staffs | CT');
    }

    ngOnInit(): void {
        this.staffs = this.staffService.getNonTeachingStaffs();
    }
}
