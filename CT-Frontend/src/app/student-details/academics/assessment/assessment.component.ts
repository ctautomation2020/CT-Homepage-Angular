import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {Apollo, QueryRef} from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import { StudentDetailsService } from './../../student-details.service';
import { AcademicsService } from './../academics.service';
import { Assessment, Question, Section, AcademicsModel } from './../academics.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  courseTitle: string;
  cregst_id: number;
  assess_num: number;
  session: AcademicsModel;
  course;
  assessment;
  marks;
  tmarks;
  reg_no;
  queryRef: QueryRef<Assessment, any>;
  constructor(private academicsService: AcademicsService, private studentDetailsService: StudentDetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let assessment: Assessment = {
      course_code: '',
      group_ref: 0,
      session_ref: 0,
      assess_num: 0,
      entry_date: new Date(),
      section: []
    };
    this.reg_no=this.studentDetailsService.getRegisterNo()
    this.route.params.subscribe(params => {
      this.cregst_id = +params['cregst_id'];
      this.assess_num= +params['assess_num'];
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
            assess_num: this.assess_num
          }
          let total_query:any = {
            group_ref: result[0].group_ref,
            session_ref: result[0].session_ref,
            course_code: result[0].course_code,
            reg_no: this.reg_no,
            number: this.assess_num,
            type: 153
          }
          this.academicsService.getAssessment(new_query).subscribe((assessment_questions: any) => {
            new_query.reg_no=this.reg_no
            if(assessment_questions.length == 0)
              this.router.navigate(['/student-details','academics']);
            else{
              this.academicsService.getAssessEvaluation(new_query).subscribe((marks: any) => {
                this.marks = marks;
              });
              this.academicsService.getEvaluation(total_query).subscribe((tmarks: any) => {
                this.tmarks = tmarks;
              });
              var groupByName: any;
              const groupBy = (array: any, key: any) => {
                // Return the end result
                return array.reduce((result: any, currentValue: any) => {
                  // If an array already present for key, push it to the array. Else create an array and push the object
                  (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                  );
                  // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                  return result;
                }, {}); // empty object is the initial value for result object
              };
              const sections = groupBy(assessment_questions, 'section');
              assessment = {
                course_code: new_query.course_code,
                group_ref: new_query.group_ref,
                session_ref: new_query.session_ref,
                assess_num: this.assess_num,
                entry_date: new Date(),
                section: []
              }
              Object.keys(sections).forEach(function(key) {
                const str = sections[key][0].question_num;
                const alpha = str.charAt(str.length - 1);
                let section: Section = {
                  name: key,
                  section_mark: sections[key][0].marks,
                  type: alpha == "a" || alpha == "b" ? "E": "F",
                  q_num: sections[key].length,
                  questions: []
                }
                for(let q of sections[key]) {
                  const question: Question = {
                    question_num: q.question_num,
                    question_stmt: q.question_stmt,
                    marks: q.marks,
                    blooms_level: q.blooms_level,
                    co_num: q.co_num
                  }
                  section.questions.push(question);
                }
                assessment.section.push(section);
              });
              this.assessment=assessment;
            }
          });
        }
      });
    });
  }
  filterMarks(qno): number{
    return this.marks.filter(l => l.question_num === qno)[0].mark;
  }
  submitAssessment(): void {
    
  }
}
