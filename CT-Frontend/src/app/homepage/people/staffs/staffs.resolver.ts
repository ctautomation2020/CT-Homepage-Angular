import { Injectable } from '@angular/core';
import { StaffsService } from './staffs.service';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StaffsResolver implements Resolve<any> {

    constructor(private staffService:StaffsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if(route.params) return this.staffService.getStaffDetails(+route.params.id);
        else return this.staffService.getStaffDetails(null);
    }
}
