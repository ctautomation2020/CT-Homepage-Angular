import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReferenceResolver implements Resolve<any> {
    constructor(private http:HttpClient) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.http.get("http://localhost:3000/reference");
    }
}
