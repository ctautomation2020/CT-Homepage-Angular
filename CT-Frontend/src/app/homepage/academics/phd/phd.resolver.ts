import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AcademicsService } from '../academics.service';

@Injectable({
    providedIn: 'root',
})
export class PhdResolver implements Resolve<boolean> {
    constructor(private acadService: AcademicsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.acadService.getSupervisorList();
    }
}
