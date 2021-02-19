import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PublicationsService } from './publications.service';

@Injectable({
    providedIn: 'root',
})
export class PublicationsResolver implements Resolve<boolean> {
    constructor(private pubService: PublicationsService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        let year = route.queryParams['year'];
        if (year) return this.pubService.getPubList(year);
        return this.pubService.getAllPublications(0);
    }
}
