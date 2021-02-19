import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    current_year: number = new Date().getFullYear();
    constructor(private http: HttpClient) {}
    getProjects() {
        return this.http.get(`${API}` + '/projects');
    }
}
