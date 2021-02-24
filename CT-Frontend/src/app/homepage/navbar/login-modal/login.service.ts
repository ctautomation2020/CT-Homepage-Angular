import { Injectable } from '@angular/core';
import {Apollo, QueryRef} from 'apollo-angular';
import { Router } from '@angular/router';
import gql from 'graphql-tag';


@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private apollo: Apollo, public route: Router) {}
    authenticateUser(data: any) {
        // Perform Authentication
        //console.log(data);
        const req = gql`
        query student_auth_login($data: user_infoQueryInput!){
          student_auth_login(data:$data){
            token
            Register_No
            user_role
          }
        }`;
        this.apollo.watchQuery({
          query: req,
          variables: {
            data: data
          }
        }).valueChanges.subscribe((result: any) => {
          //console.log(result);
          
          localStorage.setItem('token', result.data.student_auth_login.token );
          localStorage.setItem('regno', result.data.student_auth_login.Register_No);
          localStorage.setItem('urole', result.data.student_auth_login.user_role);
          this.route.navigateByUrl('student-details');
      });
    }
}
