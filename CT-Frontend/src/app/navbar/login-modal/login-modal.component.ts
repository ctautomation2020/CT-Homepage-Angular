import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

    @Output() closeLogin = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit(): void {
    }
    closeModal(){
        this.closeLogin.emit(false);
    }
}
