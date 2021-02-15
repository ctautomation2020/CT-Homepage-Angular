import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from './staffs.service';

@Component({
    selector: 'app-staffs',
    templateUrl: './staffs.component.html',
    styleUrls: ['./staffs.component.css'],
})
export class StaffsComponent implements OnInit {
    hod: any;
    staffList: any;
    ref_code: any;

    getStaffName(profile: any) {
        if (profile.Prefix_Ref) {
            if (profile.Last_Name) {
                return (
                    this.ref_code[profile.Prefix_Ref] +
                    ' ' +
                    profile.Last_Name +
                    '. ' +
                    profile.First_Name
                );
            } else
                return (
                    this.ref_code[profile.Prefix_Ref] + ' ' + profile.First_Name
                );
        } else return '';
    }
    getHOD(id: number) {
        this.staffList.some((staff: any, i: number) => {
            if (staff.Person_ID == id) {
                this.hod = staff;
                this.staffList.splice(i, 1);
            }
        });
    }
    constructor(
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private staffService: StaffsService
    ) {
        this.titleService.setTitle('Faculty | CT');
        this.activatedRoute.data.subscribe((data) => {
            this.staffList = data['data'];
            this.getHOD(66392); // Provide the HOD Register number as an input to this function
            this.ref_code = this.staffService.getObject(data['ref']);
        });
    }

    ngOnInit(): void {}
}
