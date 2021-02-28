import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})

export class AssignmentListComponent implements OnInit {
  constructor(private academicsService: AcademicsService,private apollo: Apollo, private studentDetailsService: StudentDetailsService, private router: Router, private route: ActivatedRoute) { }
  courseTitle: string;
  assignList: any;
  cregst_id: number;
  session: AcademicsModel;
  evaluated: any={};
  queryRef: QueryRef<any>;
  evaluatedQuery:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cregst_id = +params['cregst_id'];
      const query = {
        reg_no:  this.studentDetailsService.getRegisterNo(),
        cregst_id: this.cregst_id
      }
      this.academicsService.getStudentCourses(query).subscribe((result: any) => {
        if(result.length == 0) {
          this.router.navigate(['/student-details', 'academics']);
        }
        else {
          
          this.courseTitle=result[0].course_list.title
          this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
            this.session = session[0];
            
          });
          const query2 = {
            group_ref: result[0].group_ref,
            session_ref: result[0].session_ref,
            course_code: result[0].course_code
          }
          this.evaluatedQuery=query2
          this.academicsService.getAssignmentList(query2).subscribe((assignList: any) => {
            this.assignList = assignList;
            
            assignList.forEach(no => {
              this.checkAssign(no);
            });
          });
        }
      })
    });
  }
  checkAssign(assign_num:number){
    let res:boolean;
    const req=gql`query assignIsEval($data: assignIsEvalQueryInput!){
      assignIsEval(data:$data)
    }`;
    this.queryRef = this.apollo.watchQuery({
      query: req,
      variables: {
      data: {
        course_code: this.evaluatedQuery.course_code,
        group_ref: this.evaluatedQuery.group_ref,
        session_ref: this.evaluatedQuery.session_ref,
        assign_num: assign_num,
        reg_no: this.studentDetailsService.getRegisterNo()
      }
    }
    });
    this.queryRef.valueChanges.subscribe(((result: any) => {
      this.evaluated[assign_num]=result.data.assignIsEval;
      
    }));
  }
}
