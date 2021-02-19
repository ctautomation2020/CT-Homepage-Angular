import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ReferenceResolver implements Resolve<any> {
    constructor(private http: HttpClient) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.http.get(`${API}` + '/reference');
    }
}
