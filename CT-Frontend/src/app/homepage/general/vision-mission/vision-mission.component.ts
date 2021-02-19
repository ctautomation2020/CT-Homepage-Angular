import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'home-page-vision-mission',
    templateUrl: './vision-mission.component.html',
    styleUrls: ['./vision-mission.component.css'],
})
export class VisionMissionComponent implements OnInit {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Vision Mission | CT');
    }

    ngOnInit(): void {}
}
