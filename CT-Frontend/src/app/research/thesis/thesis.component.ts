import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ThesisService } from './thesis.service';

@Component({
    selector: 'app-thesis',
    templateUrl: './thesis.component.html',
    styleUrls: ['../projects/projects.component.css','./thesis.component.css']
})
export class ThesisComponent implements OnInit {

    year:number;
    years:number[] = [];
    selectFlag:boolean = false;

    constructor(
        private titleService:Title,
        private thesisService:ThesisService,
        private route:Router,
        private routeActivated:ActivatedRoute) { 
        this.titleService.setTitle("Thesis | CT");
        this.routeActivated.queryParams.subscribe(params => {
            let year = +params['year'];
            if(isNaN(year)) {
                year = this.thesisService.getLatestThesisYear();
                this.selectFlag = true;
            }
            else this.selectFlag = false;
            
            this.year = year;
        });
    }
    getYears(start_year:number = 2013){
        let years:number[] = [];
        for(let year = this.thesisService.current_year; year >= start_year; year--) years.push(year);
        return years;
    }
    updateYear(year:number){
        this.year = year;
        this.route.navigate(['/research/thesis'], { queryParams : { year: this.year } });
    }
    ngOnInit(): void {
        this.years = this.getYears();
    }

}
