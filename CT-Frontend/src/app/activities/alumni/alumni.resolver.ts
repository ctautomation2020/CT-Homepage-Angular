import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlumniService } from './alumni.service';

@Injectable({
    providedIn: 'root'
})
export class AlumniResolver implements Resolve<any> {
    constructor(private alumniService:AlumniService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.alumniService.getAlumniList();
    }
}
