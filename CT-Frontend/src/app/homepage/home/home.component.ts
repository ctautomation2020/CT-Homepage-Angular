import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'home-page-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    slideConfig: any;
    slides: any;
    events: any;
    announcements: any;
    count: any;

    constructor(
        private titleService: Title,
        private route: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.titleService.setTitle('Home | CT');
    }
    getResearchData() {
        let research = [
            {
                details: {
                    name: 'Big Data Analytics',
                    path: 'assets/img/big data 3.png',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
            {
                details: {
                    name: 'Internet of Things',
                    path: 'assets/img/IoT-Devices.jpg',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
            {
                details: {
                    name: 'Quantum Computing',
                    path: 'assets/img/quantum.jpg',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
            {
                details: {
                    name: 'Autonomus Vehicles',
                    path: 'assets/img/autonomous driving 3.png',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
            {
                details: {
                    name: 'Data Science',
                    path: 'assets/img/data-science.jpg',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
            {
                details: {
                    name: 'Next Gen Networks',
                    path:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWZXa3dVrjOxOTzKR2JXFV4PRMmx6nsBDqXw&usqp=CAU',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,sequi!',
                },
            },
        ];
        return research;
    }
    getCarouselConfig() {
        let config = {
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return config;
    }
    getCount() {
        let total = {
            ug: 480,
            pg: 35,
            faculty: 25,
            publications: 545,
        };
        return total;
    }
    setLatestEvents() {
        this.events = [
            {
                title: 'Prayatna',
                link: '',
                image: 'assets/img/association/assbg02.JPG',
                description:
                    'Prayatna is a national level symposium organized by ACT. This event starts in February.',
                month: 'Feb', // Provide only three letter input for month
                date: '03',
            },
            {
                title: 'ICoAC',
                link: '',
                image: 'assets/img/conference.jpg',
                description:
                    'ICoAC is an international conference focusing to address issues and developments in advanced computing.',
                month: 'Sep', // Provide only three letter input for month
                date: '18',
            },
        ];
    }
    goToAnnouncement(event: any) {
        if (!event.target.closest('.a-link')) {
            this.route.navigate(['./announcements'], {
                relativeTo: this.activatedRoute,
            });
        }
    }
    setAnnouncements() {
        this.announcements = [
            {
                title: 'COVID-19 Announcement Timeline',
                pdf_link: '#',
            },
            {
                title: 'MIT emerges as the top educational institute in India',
                pdf_link: '#',
            },
            {
                title: 'Final Year End Semester Dates Announced',
                pdf_link: '#',
            },
        ];
    }
    ngOnInit(): void {
        this.slideConfig = this.getCarouselConfig();
        this.slides = this.getResearchData();
        this.count = this.getCount();
        this.setLatestEvents();
        this.setAnnouncements();
    }
}
