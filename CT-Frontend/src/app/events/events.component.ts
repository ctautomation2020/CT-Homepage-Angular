import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    slideConfig:any;
    slides:any;
    events:any;

    constructor(private titleBar:Title, private eventsService: EventsService) {
        this.titleBar.setTitle("Events | CT");
    }
    getCarouselConfig(){
        let config = {
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            prevArrow:false,
            nextArrow:false
        }
        return config;
    }
    getImages(){
        let images = {
            events:[
                { path: "assets/img/events/ev-back5.jpg" },
                { path: "assets/img/events/ev-back6.jpg" },
                { path: "assets/img/events/ev-back7.jpg" }
            ],
            workshops:[
                { path: "assets/img/events/ev-back1.jpg" },
                { path: "assets/img/events/ev-back3.jpg" },
                { path: "assets/img/events/034.JPG" }
            ]    
        };
        return images;    
    }
    ngOnInit(): void {
        this.slideConfig = this.getCarouselConfig();
        this.slides = this.getImages();
        this.events = this.eventsService.getLatestEvents(3).data;
    }
    
    
}
