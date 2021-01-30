import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AcademicsService } from '../academics.service';

@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.css']
})
export class PhdComponent implements OnInit {

    regulations:any[];
    currentRegulation:any;
    supervisors:any[];

    constructor(
        private titleService:Title,
        private acadService:AcademicsService) { 
        this.titleService.setTitle("Academics | CT");
    }
    updateRegulation(regu:any){
        this.currentRegulation = regu;
    }
    getSupervisors(){
        this.supervisors = this.acadService.getSupervisorList();
    }
    ngOnInit(): void {
        this.regulations = this.acadService.getRegulations('phd');
        this.currentRegulation = this.regulations[0];
        this.getSupervisors();
    }
}
