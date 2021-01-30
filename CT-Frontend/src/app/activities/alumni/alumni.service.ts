import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlumniService {

    constructor(private http:HttpClient) {

    }
    getAlumniList(year?:any):Observable<any>{
        if(year) return this.http.get("http://localhost:3000/alumni-list/"+year);
        return this.http.get("http://localhost:3000/alumni-list");
    }
    checkAlumni(data:any):Observable<any>{
        return this.http.post("http://localhost:3000/check-alumni", data);
    }
    registerAlumni(data:any):Observable<any>{
        return this.http.post("http://localhost:3000/register-alumni", data);
    }
}
