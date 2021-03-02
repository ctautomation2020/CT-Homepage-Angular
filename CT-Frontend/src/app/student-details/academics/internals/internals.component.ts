import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-internals',
  templateUrl: './internals.component.html',
  styleUrls: ['./internals.component.scss']
})
export class InternalsComponent implements OnInit {
  total;
  ca = 30;
  midsem = 17;
  internals;
  caComp;
  queryRef1: QueryRef<any>;
  queryRef2: QueryRef<any>;

  constructor(private academicsService: AcademicsService,private apollo: Apollo, private studentDetailsService: StudentDetailsService, 
        private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  courseTitle: string;
  cregst_id: number;
  session: AcademicsModel;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.cregst_id = +params['cregst_id'];
        const reg_no=this.studentDetailsService.getRegisterNo();
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
            const query = {
              group_ref: result[0].group_ref,
              session_ref: result[0].session_ref,
              course_code: result[0].course_code,
              reg_no: reg_no
            }
            const req1=gql`
            query studentCourseInternalcalc($data: studentCourseInternalcalcQueryInput!){
              studentCourseInternalcalc(data:$data){
                cintcalc_id
                course_code
                group_ref
                session_ref
                reg_no
                ca
                midterm
                total_marks
              }
            }`;
            this.queryRef1 = this.apollo.watchQuery({
              query: req1,
              variables: {
              data: query
            }
            });
            this.queryRef1.valueChanges.subscribe(((result: any) => {
              this.internals = JSON.parse(JSON.stringify(result.data.studentCourseInternalcalc));
            }));
            const req2=gql`
            query studentCourseCAComp($data: studentCourseCACompQueryInput!) {
              studentCourseCAComp(data: $data) {
                ccacomp_id
                course_code
                group_ref
                session_ref
                type
                number
                weightage
                marks_obtained
                total_mark
                weighted_mark
              }
            }`;
            this.queryRef2 = this.apollo.watchQuery({
              query: req2,
              variables: {
              data: query
            }
            });
            this.queryRef2.valueChanges.subscribe(((result: any) => {
              this.caComp = JSON.parse(JSON.stringify(result.data.studentCourseCAComp));
            }));           
          }
        })
      });
  }

  filterType(catype):String{
    return catype==0?"Assignment":"Assessment";
  }
}
