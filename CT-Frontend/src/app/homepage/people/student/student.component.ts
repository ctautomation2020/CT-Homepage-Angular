import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
    selector: 'home-page-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
    year: number;
    years: number[];

    student_type: any;
    batch: string;

    students: any[] = [];

    constructor(
        private titleService: Title,
        private studentService: StudentService,
        private routeActivate: ActivatedRoute,
        private router: Router
    ) {
        this.titleService.setTitle('Students | CT');

        this.routeActivate.params.subscribe((params) => {
            this.assignStudentType(params['type']);
        });

        this.routeActivate.data.subscribe((data) => {
            this.students = data['data']['result'];
            this.year = data['data']['year'];

            this.batch = this.getBatchYear(+this.year);
        });
    }
    assignStudentType(type: string) {
        this.student_type = this.studentService.getStudentType(type);
    }
    getYears(start_year: number = 2017) {
        let years: number[] = [];
        for (
            let year = this.studentService.current_year;
            year >= start_year;
            year--
        )
            years.push(year);
        return years;
    }
    getBatchYear(year: number) {
        return this.student_type.type == 'be'
            ? year + ' - ' + (year + 4)
            : year + ' - ' + (year + 2);
    }
    updateYear(year: number) {
        this.year = year;
    }
    getStudents() {
        let dir = '';

        this.routeActivate.params.forEach((elem) => {
            if (elem.year) dir = '../../';
            else dir = '../';
        });

        this.router.navigate([dir, this.student_type.type, this.year], {
            relativeTo: this.routeActivate,
        });
    }
    ngOnInit(): void {
        this.years = this.getYears();
    }
}
