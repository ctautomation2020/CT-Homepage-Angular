import { Component, Input, OnInit } from '@angular/core';
import { ThesisService } from '../thesis.service';

@Component({
    selector: 'thesis-list',
    templateUrl: './thesis-list.component.html',
    styleUrls: ['../../projects/projects.component.css', './thesis-list.component.css']
})
export class ThesisListComponent implements OnInit {

    @Input() thesis_year:number;
    thesis:any[];
    
    no_data:string;
    no_data_sub:string;

    constructor(private thesisService:ThesisService) { }
    getThesisByYear(){
        this.thesis = this.thesisService.getThesis(this.thesis_year);        
    }
    ngOnInit(): void {
    }
    ngOnChanges(){
        this.getThesisByYear();
        this.no_data = "Thesis details are not available - " + this.thesis_year;
        this.no_data_sub = "Recent thesis details will be updated soon";
    }
}
