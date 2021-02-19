import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from '../../people/staffs/staffs.service';
import { AcademicsService } from '../academics.service';

@Component({
    selector: 'home-page-phd',
    templateUrl: './phd.component.html',
    styleUrls: ['./phd.component.css'],
})
export class PhdComponent implements OnInit {
    regulations: any[];
    currentRegulation: any;
    supervisors: any[];
    ref_code: any;

    constructor(
        private titleService: Title,
        private acadService: AcademicsService,
        private staffService: StaffsService,
        private activatedRoute: ActivatedRoute
    ) {
        this.titleService.setTitle('Academics | CT');
        this.activatedRoute.data.subscribe((data) => {
            this.supervisors = data['data'];
            this.ref_code = this.staffService.getObject(data['ref']);
        });
    }
    getStaffName(staff: any) {
        if (staff.Prefix_Ref) {
            if (staff.Last_Name) {
                return (
                    this.ref_code[staff.Prefix_Ref] +
                    ' ' +
                    staff.Last_Name +
                    '. ' +
                    staff.First_Name
                );
            } else
                return this.ref_code[staff.Prefix_Ref] + ' ' + staff.First_Name;
        } else return '';
    }
    updateRegulation(regu: any) {
        this.currentRegulation = regu;
    }
    ngOnInit(): void {
        this.regulations = this.acadService.getRegulations('phd');
        this.currentRegulation = this.regulations[0];
    }
}
