import { Component, Input, OnInit } from '@angular/core';
import { ScholarService } from '../scholar.service';

@Component({
  selector: 'scholar-list',
  templateUrl: './scholar-list.component.html',
  styleUrls: ['../scholar.component.css','./scholar-list.component.css']
})
export class ScholarListComponent implements OnInit {

    @Input() scholar_year:number;
    scholars:any[];

    no_data:string;
    no_data_sub:string;

    constructor(private scholarService:ScholarService) { }
    
    getScholarsByYear(){
        if(this.scholar_year === 0){
            this.scholars = this.scholarService.getAllScholars();
        }
        else this.scholars = this.scholarService.getScholars(this.scholar_year);
        
        this.no_data = "Year " + this.scholar_year + " - Research scholars are not available";
        this.no_data_sub = "Please try again with different year";
    }
    ngOnInit(): void {
        this.getScholarsByYear();
    }
    ngOnChanges(){
        this.getScholarsByYear();
    }
}
