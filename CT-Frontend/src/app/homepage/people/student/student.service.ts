import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    current_year: number = new Date().getFullYear();
    constructor(private http: HttpClient) {}
    private student = {
        be: { type: 'be', title: 'B.E', gtype: 'U.G.' },
        me: { type: 'me', title: 'M.E', gtype: 'P.G.' },
        mept: { type: 'mept', title: 'M.E Part Time', gtype: 'P.G.' },
    };

    getStudentType(type: string) {
        return this.student[type];
    }
    getStudentList(type: any, year: any) {
        if (year == undefined || year == null)
            return this.http.get(`${API}` + '/students/' + type);
        return this.http.get(`${API}` + '/students/' + type + '/' + year);
    }
}
