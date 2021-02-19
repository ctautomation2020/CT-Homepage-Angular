import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PublicationsService {
    publications: any;
    current_year: number = new Date().getFullYear();

    start_year: any;
    per_page: number;

    constructor(private http: HttpClient) {
        this.per_page = 10;
    }

    getPubList(year?: any): Observable<any> {
        if (year) return this.http.get(`${API}` + '/publications-list/' + year);
    }
    getAllPublications(start: number) {
        return this.http.post(`${API}` + '/publications-list', {
            start: start,
            per_page: this.per_page,
        });
    }
}
