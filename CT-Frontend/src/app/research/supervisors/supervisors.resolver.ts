import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SupervisorsService } from './supervisors.service';

@Injectable({
    providedIn: 'root',
})
export class SupervisorsResolver implements Resolve<boolean> {
    constructor(private supService: SupervisorsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.supService.getSupervisors();
    }
}
