import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

    publications:any;
    current_year:number = (new Date()).getFullYear();
    start_year:any;
    
    constructor(private http:HttpClient) { 
        
    }
    
    getPubList(year?:any):Observable<any>{
        if(year) return this.http.get("http://localhost:3000/publications-list/"+year);
        return this.http.get("http://localhost:3000/publications-list");
    }
}
