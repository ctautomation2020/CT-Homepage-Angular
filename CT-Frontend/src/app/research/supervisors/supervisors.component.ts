import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from 'src/app/people/staffs/staffs.service';

@Component({
    selector: 'app-supervisors',
    templateUrl: './supervisors.component.html',
    styleUrls: ['./supervisors.component.css'],
})
export class SupervisorsComponent implements OnInit {
    supervisors: any[];
    scholars: any;
    ref_code: any = {};

    constructor(
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private staffService: StaffsService
    ) {
        this.titleService.setTitle('Supervisors | CT');
        this.activatedRoute.data.subscribe((data) => {
            this.supervisors = data['data']['supervisor'];
            this.scholars = data['data']['scholar'];

            this.ref_code = this.staffService.getObject(data['ref']);
        });
    }

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
    getSpecialization(data: any) {
        return data && data.length != 0
            ? data
                  .filter((elem) => {
                      if (elem && elem != undefined) return elem;
                  })
                  .join(', ')
            : '';
    }

    ngOnInit(): void {}
}
