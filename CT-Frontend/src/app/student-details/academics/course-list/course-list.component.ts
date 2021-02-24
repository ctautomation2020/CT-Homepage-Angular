import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';
import { Apollo, QueryRef } from 'apollo-angular';
import { CourseListModel } from './course-list.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['../academics.component.scss']
})

export class CourseListComponent implements OnInit {
  courseList: CourseListModel[];
  session: AcademicsModel;
  courseCodes: any;
  subjAllotId: number;
  queryRef: QueryRef<any, any>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private academicsService: AcademicsService, private title: Title,private studentDetailsService: StudentDetailsService) {
    this.title.setTitle('Course Features');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const reference_id = +params['reference_id'];
      this.academicsService.getSession(reference_id).subscribe((result: any) => {
        if (result.length == 0) {
          this.router.navigate(['/student-details', 'academics']);
        }
        else {
          this.session = result[0];
          const query = {
            reg_no: this.studentDetailsService.getRegisterNo(),
            session_ref: reference_id
          }
          this.academicsService.getStudentCourses(query).subscribe(result => {
            this.courseList=result
            console.log(this.courseList)
          });
        }
      });
   });
  }
  
  findKeyWord(str: string): string {
    const strArray = str.trim().split(' ');
    const key = strArray[0][0] + strArray[strArray.length - 1][0];
    return key;
  }

  onCourseSelect(c: CourseListModel): void{
    this.router.navigate(['/student-details', 'academics', 'course-features', c.cregst_id ]);
  }

}
