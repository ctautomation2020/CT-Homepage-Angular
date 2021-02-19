import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from './contact.service';

@Component({
    selector: 'home-page-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    user_name: string;
    email: string;
    subject: string;
    content: string;

    report: any;
    progress: boolean = false;

    constructor(
        private titleService: Title,
        private contService: ContactService
    ) {
        this.titleService.setTitle('Contact | CT');
    }

    ngOnInit(): void {}
    submitForm() {
        this.report = {};
        this.progress = true;

        this.contService
            .sendMail({
                name: this.user_name,
                email: this.email,
                subject: this.subject,
                content: this.content,
            })
            .subscribe((data) => {
                this.report = data;
                this.user_name = this.email = this.subject = this.content = '';
                this.progress = false;
            });
    }
}
