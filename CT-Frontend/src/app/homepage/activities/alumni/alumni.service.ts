import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AlumniService {
    constructor(private http: HttpClient) {}
    getAlumniList(year?: any): Observable<any> {
        if (year) return this.http.get(`${API}` + '/alumni-list/' + year);
        return this.http.get(`${API}` + '/alumni-list');
    }
    checkAlumni(data: any): Observable<any> {
        return this.http.post(`${API}` + '/check-alumni', data);
    }
    registerAlumni(data: any): Observable<any> {
        return this.http.post(`${API}` + '/register-alumni', data);
    }
}
