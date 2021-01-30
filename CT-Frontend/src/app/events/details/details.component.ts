import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { EventsService } from '../events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    event:any;
    event_id:string = "";
    event_year:number = 0;

    constructor(
        private titleService:Title, 
        private eventsService:EventsService, 
        private route: ActivatedRoute
    ){ 
        this.route.params.subscribe(params=>{
            this.event_id = params['event-id'];
            this.event_year = +params['year'];
        });
    }

    ngOnInit(): void {
        this.event = this.eventsService.getSpecificEvent(this.event_year,this.event_id);
        this.titleService.setTitle("Events | " + this.event.title + " | CT");
    }

}
