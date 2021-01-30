import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    current_year:number = (new Date()).getFullYear();
    constructor(private http:HttpClient) { }
    getProjects(){
        return this.http.get("http://localhost:3000/projects");    
    }
}
