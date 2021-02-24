import { Component, HostListener, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent implements OnInit {
    @Output() closeLogin = new EventEmitter<boolean>();

    user_name: string;
    password: string;

    constructor(private loginService: LoginService) {}

    ngOnInit(): void {}
    closeModal() {
        this.closeLogin.emit(false);
    }
    loginPortal() {
        // Authenticate User
        this.loginService.authenticateUser({
            username: parseInt(this.user_name),
            password: this.password
        });
    }
}
