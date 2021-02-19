import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SupervisorsService {
    constructor(private http: HttpClient) {}
    getSupervisors(): Observable<any> {
        return this.http.get(`${API}` + '/supervisors');
    }
}
