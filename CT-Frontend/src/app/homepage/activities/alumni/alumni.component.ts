import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlumniService } from './alumni.service';

@Component({
    selector: 'home-page-alumni',
    templateUrl: './alumni.component.html',
    styleUrls: ['./alumni.component.css', '../../general/input-field.css'],
    animations: [
        trigger('slideDownUp', [
            transition(':enter', [style({ height: 0 }), animate(200)]),
            transition(':leave', [animate(200, style({ height: 0 }))]),
        ]),
    ],
})
export class AlumniComponent implements OnInit {
    year: any;
    years: any[] = [];
    alumni: any[] = [];

    dob: string;
    reg_no: string;
    role: string;
    work: string;

    error_message: string;
    register_message: string;
    valid: boolean;
    success: boolean;

    no_data: string;
    no_data_sub: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private alumniService: AlumniService,
        private titleService: Title
    ) {
        this.titleService.setTitle('Alumni | CT');
        this.activatedRoute.data.subscribe((data) => {
            this.alumni = data['data']['result'];
            this.year = data['data']['year'];
        });

        this.dob = this.reg_no = this.role = this.work = '';
        this.error_message = this.register_message = '';
        this.valid = this.success = false;

        this.no_data = 'Alumni List Not Available';
        this.no_data_sub = 'Please try again later!';
    }

    getYears(year: number = 2010) {
        let current = new Date().getFullYear();
        for (let y = current; y >= year; y--) {
            this.years.push(y);
        }
    }
    getAlumniList() {
        this.alumniService.getAlumniList(this.year).subscribe((data) => {
            this.alumni = data['result'];
        });
    }
    validateAlumni() {
        this.error_message = '';
        this.valid = false;

        if (this.reg_no != '' && this.dob != '') {
            this.alumniService
                .checkAlumni({ reg_no: this.reg_no, dob: this.dob })
                .subscribe((data) => {
                    let result: any = data;
                    if (result.length) {
                        if (result[0].status == 1) {
                            this.valid = true;
                            this.error_message = 'Valid Student Details!';
                        } else
                            this.error_message =
                                'Only Passed-out stduents can register!';
                    } else this.error_message = 'Student details Mismatch';
                });
        } else this.error_message = 'Please Fill-in all the fields';
    }
    registerAlumni() {
        this.register_message = this.error_message = '';
        this.success = false;

        if (this.work != '' && this.role != '') {
            this.alumniService
                .registerAlumni({
                    reg_no: this.reg_no,
                    work: this.work,
                    role: this.role,
                })
                .subscribe((data) => {
                    if (data && !data.status) {
                        this.success = true;
                        this.register_message = 'Successfully Registered!';
                    } else this.register_message = 'Alumni Already Registered';
                });
        } else this.register_message = 'Please Fill-in all the fields';
    }
    resetForm() {
        this.dob = this.reg_no = this.role = this.work = '';
        this.error_message = this.register_message = '';
        this.valid = this.success = false;
    }
    ngOnInit(): void {
        this.getYears();
    }
}
