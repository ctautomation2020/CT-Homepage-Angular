import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

    announcements:any;
    constructor(private titleService:Title) {
        this.titleService.setTitle("Announcements | CT");
    }
    getAnnouncements(){
        this.announcements = {
            latest:[
                {
                    title:"Odd Semester Exams to be conducted via online mode",
                    date_time:{
                        date:'15',
                        day:'Friday',
                        month:'December',
                        year:2020,
                        time:'11:30 AM'
                    },
                    link:""
                },
                {
                    title:"Final Year [ P.G ] classes to be reopened on 2nd December 2020",
                    date_time:{
                        date:'03',
                        day:'Friday',
                        month:'June',
                        year:2020,
                        time:'09:30 PM'
                    },
                    link:""
                }
            ],
            past:[
                {
                    title:"Final Year [ U.G ] classes to be reopened on 7th December 2020",
                    date_time:{
                        date:'03',
                        day:'Friday',
                        month:'June',
                        year:2020,
                        time:'09:30 PM'
                    },
                    link:""
                },
                {
                    title:"Semester exams postponed due to COVID-19",
                    date_time:{
                        date:'03',
                        day:'Wednesday',
                        month:'September',
                        year:2020,
                        time:'09:30 PM'
                    },
                    link:""
                }
            ]
        }
    }
    ngOnInit(): void {
        this.getAnnouncements();
    }

}
