import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ScholarService } from './scholar.service';

@Component({
  selector: 'app-scholar',
  templateUrl: './scholar.component.html',
  styleUrls: ['./scholar.component.css']
})
export class ScholarComponent implements OnInit {

    year:number;
    years:number[];

    constructor(
        private titleService:Title, 
        private scholarService:ScholarService,
        private route:Router,
        private routeActivate:ActivatedRoute) 
    { 
        this.titleService.setTitle("Research Scholars | CT");
        this.routeActivate.queryParams.subscribe(params => {
            let year = +params['year'];
            
            if(isNaN(year)) this.year = 0;
            else this.year = year; 
        });
        
    }
    getYears(start_year:number = 2013){
        let years:number[] = [];
        for(let year = this.scholarService.current_year; year >= start_year; year--) years.push(year);
        return years;
    }
    getParams(year:number){
        if(year != 0) {
            return { year: this.year };
        }
        else return {};
    }
    updateYear(year:number){
        this.year = year;
        this.route.navigate(['/people/scholar'], { queryParams: this.getParams(year) });
    }
    ngOnInit(): void {
        this.years = this.getYears(2015);
    }
}
