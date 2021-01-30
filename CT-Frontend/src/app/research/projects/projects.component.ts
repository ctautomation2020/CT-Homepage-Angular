import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src'; 
highcharts3D(Highcharts);

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


    projects:any;

    Highcharts: typeof Highcharts = Highcharts;
    graphConfig:any;

    constructor(
        private titleService:Title, 
        private routeActivate:ActivatedRoute
    ) { 
        this.titleService.setTitle("Projects | CT");
        this.routeActivate.data.subscribe(data => {
            this.projects = data["data"];
            console.log(data);
        }); 
    }
    getCoordinators(project:any){
        let person = [];
        
        if(project.PI_Name) person.push(project.PI_Name);
        if(project.COI1_Name) person.push(project.COI1_Name);
        if(project.COI2_Name) person.push(project.COI2_Name);
        
        return person.join(" , ");
    }
    getAmount(amount:any){
        return (amount / 100000);
    }
    getGraphConfig(){
        let config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                padding: 3,
                itemMarginBottom: 7
            },
            series: [{
                name: 'Project',
                colorByPoint: true,
                data: [{
                    name: 'Networks',
                    y: 40,
                    selected: true
                }, {
                    name: 'Cloud Computing',
                    y: 14
                }, {
                    name: 'Big Data Analytics',
                    y: 10
                }, {
                    name: 'Artificial Intelligence',
                    y: 26
                }, {
                    name: 'Data Mining',
                    y: 5
                }, {
                    name: 'Other',
                    y: 5
                }]
            }]
        };
        return config;
    }
    ngOnInit(): void {
        this.graphConfig = this.getGraphConfig();
    }
}
