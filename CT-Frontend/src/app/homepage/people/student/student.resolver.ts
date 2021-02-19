import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StudentService } from './student.service';

@Injectable({
    providedIn: 'root'
})
export class StudentResolver implements Resolve<any> {
    constructor(private studService:StudentService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let type = route.params['type'];
        let year = route.params['year'];
        
        return this.studService.getStudentList(type, year);
    }
}
