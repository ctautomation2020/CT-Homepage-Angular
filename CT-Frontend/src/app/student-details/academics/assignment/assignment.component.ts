import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {Apollo, QueryRef} from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import { StudentDetailsService } from './../../student-details.service';
import { AcademicsService } from './../academics.service';
import { AcademicsModel } from './../academics.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})


export class AssignmentComponent implements OnInit {
  
  assignment;
  courseTitle: string;
  cregst_id: number;
  assign_num: number;
  session: AcademicsModel;
  course;
  marks;
  reg_no;
  tmarks;
  deadline:Date;
  queryRef: QueryRef<any>;
  constructor(private academicsService: AcademicsService, private studentDetailsService: StudentDetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reg_no=this.studentDetailsService.getRegisterNo()
    this.route.params.subscribe(params => {
      this.cregst_id = +params['cregst_id'];
      this.assign_num= +params['assign_num'];
      const query = {
        reg_no: this.reg_no,
        cregst_id: this.cregst_id
      }
      this.academicsService.getStudentCourses(query).subscribe((result: any) => {
        if(result.length == 0) {
          this.router.navigate(['/student-details', 'academics']);
        }
        else {
          this.course=result[0]    
          this.courseTitle=result[0].course_list.title
          this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
             this.session = session[0];
          });
          let new_query:any = {
            group_ref: result[0].group_ref,
            session_ref: result[0].session_ref,
            course_code: result[0].course_code,
            assign_num: this.assign_num
          }
          let total_query:any = {
            group_ref: result[0].group_ref,
            session_ref: result[0].session_ref,
            course_code: result[0].course_code,
            reg_no: this.reg_no,
            number: this.assign_num,
            type: 0
          }
          this.academicsService.getAssignment(new_query).subscribe((assignment_questions: any) => {
            
            this.assignment=assignment_questions;
            this.deadline=assignment_questions[0].deadline;
            new_query.reg_no=this.reg_no
            if(assignment_questions.length == 0)
              this.router.navigate(['/student-details','academics']);
            else{
              this.academicsService.getAssignEvaluation(new_query).subscribe((marks: any) => {
                this.marks = marks;
              });
              this.academicsService.getEvaluation(total_query).subscribe((tmarks: any) => {
                this.tmarks = tmarks;
              });
              
            }
            
          });
        }
      });
    });
  }

  filterMarks(qno): number{
    return this.marks.filter(l => l.question_num === qno)[0].mark;
  }

  submitAssignment(): void {
    
  }
}
