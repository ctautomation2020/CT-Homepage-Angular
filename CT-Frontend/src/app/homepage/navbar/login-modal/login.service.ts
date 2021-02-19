import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor() {}
    authenticateUser(data: any) {
        // Perform Authentication
        console.log(data);
    }
}
