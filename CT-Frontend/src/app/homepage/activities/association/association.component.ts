import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
    selector: 'home-page-association',
    templateUrl: './association.component.html',
    styleUrls: [
        '../../home/home.component.css',
        '../../infrastructure/infrastructure.component.css',
        './association.component.css',
    ],
})
export class AssociationComponent implements OnInit {
    slideConfig: any;
    swiperConfig: any;
    slideSwipe: any;
    slides: any;
    years: any[];
    events: any;

    constructor(private titleService: Title) {
        this.titleService.setTitle('Association | CT');
    }

    getCarouselConfig() {
        let config = {
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            prevArrow: false,
            nextArrow: false,
        };
        return config;
    }
    getSlideSwipeConfig() {
        let config = {
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return config;
    }
    getSwiperConfig(years: any[]) {
        let config = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        years[index] +
                        '</span>'
                    );
                },
            },
            slidesPerView: 1,
            direction: 'vertical',
            navigation: true,
        };
        return config;
    }
    getSlides() {
        let slides = {
            prayatna: [
                { path: 'assets/img/association/prayatnaslide01.jpg' },
                { path: 'assets/img/association/prayatnaslide02.jpg' },
                { path: 'assets/img/association/prayatnaslide03.jpg' },
            ],
            trigger: [
                { path: 'assets/img/association/triggerslide1.jpg' },
                { path: 'assets/img/association/triggerslide2.jpg' },
                { path: 'assets/img/association/triggerslide3.jpg' },
            ],
        };
        return slides;
    }
    getEvents() {
        let events = [
            {
                year: 2020,
                year_name: '2K20',
                class: 'pr-20',
                event_name: 'Prayatna',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis, numquam corrupti dicta facere dolorem tempore laudantium aperiam iste architecto.Error omnis, numquam corrupti dicta facere dolorem tempore laudantium aperiam iste architecto.',
                images: [
                    'assets/img/association/prayatna2020-01.jpg',
                    'assets/img/association/prayatna2020-02.jpg',
                    'assets/img/association/prayatna2020-03.jpg',
                    'assets/img/association/prayatna2020-04.jpg',
                ],
            },
            {
                year: 2020,
                year_name: '2K19',
                class: 'pr-19',
                event_name: 'Prayatna',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis, numquam corrupti dicta facere dolorem tempore laudantium aperiam iste architecto.',
                images: [
                    'assets/img/association/prayatna2019-01.jpg',
                    'assets/img/association/prayatna2019-02.jpg',
                    'assets/img/association/prayatna2019-03.jpg',
                    'assets/img/association/prayatna2019-04.jpeg',
                ],
            },
            {
                year: 2020,
                year_name: '2K18',
                class: 'pr-18',
                event_name: 'Prayatna',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis, numquam corrupti dicta facere dolorem tempore laudantium aperiam iste architecto.',
                images: [
                    'assets/img/association/prayatna2018-01.jpg',
                    'assets/img/association/prayatna2018-02.jpg',
                    'assets/img/association/prayatna2018-03.jpg',
                    'assets/img/association/prayatna2018-04.jpg',
                ],
            },
        ];
        return events;
    }
    ngOnInit(): void {
        this.years = [2020, 2019, 2018, 2017];
        this.slideConfig = this.getCarouselConfig();
        this.slideSwipe = this.getSlideSwipeConfig();
        this.swiperConfig = this.getSwiperConfig(this.years);
        this.slides = this.getSlides();
        this.events = this.getEvents();
    }
}
