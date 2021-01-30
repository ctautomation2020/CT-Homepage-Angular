import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src'; 
highcharts3D(Highcharts);

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['../../home/home.component.css','./placements.component.css']
})
export class PlacementsComponent implements OnInit {

    testimonials:any;
    slideConfig:any; 
    Highcharts: typeof Highcharts = Highcharts;
    chartConfig:any;
    placementStats:any;
    companyImages:any;

    constructor(private titleService:Title) { 
        this.titleService.setTitle("Placements | CT");
    }
    getTestimonials(){
        let test = [
            {
                name:"Navin G V",
                sayings:"Professors  guided and supported me well in my college days and also now. To add more,they helped us a lot in our ACM ICPC preparations. We are very much grateful to MIT and Computer science department.",
                present_role:"SDE at Amazon",
                image:"assets/img/testimonial/navin.png"
            },
            {
                name:"Tamil Selvan",
                sayings:"Exposure and opportunity we get through the 4 years of our course is tremendous and helps choosing your specialization much ahead of our career's start. And now I'm in a team which does R&D in Web Technology.",
                present_role:"SDE at R&D Directi",
                image:"assets/img/testimonial/tamilselvan.png"
            },
            {
                name:"Raguram Krishnan",
                sayings:"MIT Computer science Department has given me a great future ahead. The basics of whatever I use here in Amazon, has been taught by my teachers at MIT CT department. Thanks to them . Without them I would have not got placed in Amazon.",
                present_role:"SDE at Amazon",
                image:"assets/img/testimonial/raguram.png"
            },
            {
                name:"Janani S",
                sayings:"Department of Computer Technology have excellent infrastructures and many lab facilities. This is very helpful for students who were doing their projects and want to explore more. Staffs are also very helpful in guiding us.",
                present_role:"SDE at Microsoft, India",
                image:"assets/img/testimonial/janani.png"
            },
            {
                name:"Arun Kumar",
                sayings:"The staffs had given us a gist of almost every new pondering areas of computer science . Hence I had a smooth start. We had labs where we worked on logic. It helped me impart logical thinking and practical knowledge.",
                present_role:"SDE at Amazon",
                image:"assets/img/testimonial/arunkumar.png"
            }
        ];
        return test;
    }
    getSlideConfig(){
        let config = {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            prevArrow:false,
            nextArrow:false,
            dots:true,
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        };
        return config;
    }
    getChartConfig(){
        let options = {
            chart:{
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    viewDistance: 25,
                    depth: 40
                },
            },   
            title: {
                text: ''   
            },
            xAxis:{
                categories: ['Microsoft', 'Samsung', 'TCS', 'CTS','Zoho', 'Accenture'  ,'Infosys',]
            },   
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                   text: 'Number of students placed'
                }
            },  
            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<span style = "color:{series.color}">\u25CF</span> {series.name}:{point.y} / {point.stackTotal}'
            },
            plotOptions: {
                column: {
                   stacking: 'normal',
                   depth: 40
                }
            },     
            series: [
                {
                   name: '2011-15',
                   data: [2,5,0,8,7,15,11],
                   stack: 'male'
                },{
                   name: '2012-16',
                   data: [4,0,4,6,4,7,10],
                   stack: 'male'
                },{
                   name: '2013-17',
                   data: [2,3,3,6,6,0,10],
                   stack: 'male'
                },{
                   name: '2014-18',
                   data: [1,1,5,1,1,4,1],
                   stack: 'male'
                },{
                   name: '2015-19',
                   data: [0,2,5,1,7,3,1],
                   stack: 'male'
                }
            ]
        };
        return options;
    }
    getCompanyImages(){
        let companies = [
            "assets/img/companies/amazon.png",
            "assets/img/companies/samsung.png",
            "assets/img/companies/microsoft.png",
            "assets/img/companies/adobe.png",
            "assets/img/companies/citi.png",
            "assets/img/companies/hcl.png",
            "assets/img/companies/tcs.png",
            "assets/img/companies/trimble.png",
            "assets/img/companies/l&t.png",
            "assets/img/companies/zoho.png",
            "assets/img/companies/dell.png",
            "assets/img/companies/wipro.png",
            "assets/img/companies/paypal.png",
            "assets/img/companies/ibm.png"
        ];
        return companies;
    }
    getPlacementStats(){
        let stats = {
            recruiters:45,
            recruited:"75%",
            medium_package:"64%",
            high_package:"36%"
        };  
        return stats;
    }
    ngOnInit(): void {
        this.slideConfig = this.getSlideConfig();
        this.testimonials = this.getTestimonials();
        this.chartConfig = this.getChartConfig();
        this.placementStats = this.getPlacementStats();
        this.companyImages = this.getCompanyImages();
    }

}
