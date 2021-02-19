import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    constructor(private http: HttpClient) {}
    sendMail(data: any): Observable<any> {
        return this.http.post(`${API}` + '/send-mail', data);
    }
}
