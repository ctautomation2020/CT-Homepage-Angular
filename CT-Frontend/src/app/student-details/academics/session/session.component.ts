import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessions: AcademicsModel[];
  queryRef: QueryRef<AcademicsModel[], any>;
  category = 'Session';
  reg_no:number;

  constructor(private apollo: Apollo, private router: Router, private studentDetailsService: StudentDetailsService, private academicsService: AcademicsService) { }

  ngOnInit(): void {
    this.reg_no=this.studentDetailsService.getRegisterNo();
    const req = gql`
    query studentSessions($data: studentSessions) {
      studentSessions(data: $data) {
        Reference_ID
        Category
        Ref_Name
        Description
      }
    }`;
    this.queryRef = this.apollo.watchQuery({
      query: req,
      variables: {
        data: {
          reg_no: this.reg_no
        }
      }
    });
    this.queryRef.valueChanges.subscribe(((result: any) => {
      this.sessions = JSON.parse(JSON.stringify(result.data.studentSessions));
    }));
  }
  onSessionSelect(s: AcademicsModel): void{
    this.router.navigate(['/student-details', 'academics', 'course-list', s.Reference_ID]);

  }

}
