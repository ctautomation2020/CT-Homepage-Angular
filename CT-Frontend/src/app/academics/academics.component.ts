import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicsService } from './academics.service';

@Component({
    selector: 'app-academics',
    templateUrl: './academics.component.html',
    styleUrls: ['./academics.component.css'],
})
export class AcademicsComponent implements OnInit {
    academicType: string;
    acadTitle: string;
    acadSems: number;

    currentTab: string;
    semDisplay: boolean = true;
    eleDisplay: boolean = false;
    subDisplay: boolean = false;
    pdfDisplay: boolean = false;
    curDisplay: boolean = false;

    regulations: any;
    currentRegulation: any;

    sems: any[];
    currentSem: any;

    subjects: any[];
    currentSub: string;

    electives: any[];
    electiveSubs: any[];
    currentElective: string;
    currentTrack: string;

    subPDF: string;
    curriculum: string;
    reguPDF: any;

    constructor(
        private titleService: Title,
        private acadService: AcademicsService,
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {
        this.titleService.setTitle('Academics | CT');
        this.currentTab = 'regu';
        this.route.params.subscribe((params) => {
            this.academicType = params['type'];
            this.changeAcademicType();
        });
    }
    changeAcademicType() {
        if (this.academicType == 'ug') {
            this.acadTitle = 'B.E';
            this.acadSems = 8;

            this.getRegulations(this.academicType);
            this.updateRegulation(this.regulations[0]);
        } else if (this.academicType == 'pg') {
            this.acadTitle = 'M.E';
            this.acadSems = 4;

            this.getRegulations(this.academicType);
            this.updateRegulation(this.regulations[0]);
        } else this.router.navigate(['error']);
    }
    getRegulations(type: string) {
        this.regulations = this.acadService.getRegulations(type);
    }
    updateRegulation(type: any) {
        this.currentRegulation = type;

        this.reguPDF =
            "<object style='width:100%; height:100%;' data='" +
            this.currentRegulation.link +
            "' type='application/pdf'></object>";
        this.reguPDF = this.sanitizer.bypassSecurityTrustHtml(this.reguPDF);

        this.toggleContent('regu');
        this.getSemester(this.acadSems);
    }
    getSemester(count: number) {
        this.sems = this.acadService.getSemesters(
            this.academicType,
            this.currentRegulation.regu_type,
            count
        );
        if (this.sems.length == 0) this.setCurriculum();
        else {
            this.curDisplay = false;
            this.curriculum = '';
        }
    }
    updateSemester(sem: string, title: string) {
        this.subDisplay = true;
        this.semDisplay = false;

        this.currentSem = { sem_code: sem, sem_title: title };
        if (sem != 'pe')
            this.subjects = this.acadService.getSubjects(
                this.academicType,
                sem,
                this.currentRegulation.regu_type
            );
        this.getElectives(sem, this.currentRegulation.regu_type);
    }
    setSubjectPDF(
        subcode: string,
        title: string,
        type?: string,
        track?: string
    ) {
        let pdfLink: string;

        if (type)
            pdfLink = this.acadService.getPath(
                this.academicType,
                this.currentRegulation.regu_type,
                this.currentElective
            );
        else
            pdfLink = this.acadService.getPath(
                this.academicType,
                this.currentRegulation.regu_type,
                this.currentSem.sem_code
            );

        if (track) pdfLink += track + '/';

        this.subPDF = pdfLink + subcode + '.pdf';
        this.currentSub = title;

        this.subDisplay = false;
        this.eleDisplay = false;

        this.pdfDisplay = true;
        console.log(this.subPDF);
    }
    toggleContent(type: string) {
        if (type == 'regu') {
            this.pdfDisplay = this.subDisplay = this.eleDisplay = false;
            this.currentSem = this.currentElective = this.currentSub = this.currentTrack =
                '';
            this.semDisplay = true;
            this.electives = this.subjects = [];
        } else if (type == 'sem') {
            this.pdfDisplay = this.eleDisplay = false;
            this.subDisplay = true;
            this.currentElective = this.currentSub = this.currentTrack = '';
        } else {
            this.pdfDisplay = false;
            this.eleDisplay = true;
            this.currentSub = '';
        }
    }
    getElectives(sem: string, regu: string) {
        if (
            this.acadService.isElectiveAvailable(this.academicType, sem, regu)
        ) {
            this.electives = this.acadService.getElectiveSubjectsList(
                this.academicType,
                regu,
                sem
            );
        } else this.electives = [];
    }
    showElectives(type: string, track: string) {
        this.currentElective = type;
        this.currentTrack = track;

        this.electiveSubs = this.acadService.getElectives(
            this.academicType,
            this.currentRegulation.regu_type,
            type,
            track
        );

        this.pdfDisplay = false;
        this.subDisplay = false;

        this.eleDisplay = true;
    }
    setCurriculum() {
        this.curriculum =
            this.acadService.getCurrPath(
                this.academicType,
                this.currentRegulation.regu_type
            ) + 'file.pdf';
        this.curDisplay = true;
    }
    ngOnInit(): void {}
}
