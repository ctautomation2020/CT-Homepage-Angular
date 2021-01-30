import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SupervisorsService } from './supervisors.service';

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.css']
})
export class SupervisorsComponent implements OnInit {

    supervisors:any[];
    constructor(private titleService:Title, private supService:SupervisorsService) {
        this.titleService.setTitle("Supervisors | CT");
    }

    ngOnInit(): void {
        this.supervisors = this.supService.getSupervisors();    
    }
}
