import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProjectsService } from './projects.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsResolver implements Resolve<any> {
    constructor(private projectService:ProjectsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.projectService.getProjects();
    }
}
