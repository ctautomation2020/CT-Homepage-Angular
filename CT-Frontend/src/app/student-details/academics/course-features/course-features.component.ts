import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';

@Component({
  selector: 'app-course-features',
  templateUrl: './course-features.component.html',
  styleUrls: ['./course-features.component.scss']
})
export class CourseFeaturesComponent implements OnInit {

  constructor(private academicsService: AcademicsService, private studentDetailsService: StudentDetailsService, private router: Router, private route: ActivatedRoute) { }
  
  courseTitle: string = "Course Title";
  cregst_id: number = 0;
  session: AcademicsModel;
  course;
  faculty;
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
				this.course=result[0]
				console.log(result[0]);
				this.courseTitle=result[0].course_list.title
				this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
				 	this.session = session[0];
				});
				const query2 = {
					group_ref: result[0].group_ref,
					session_ref: result[0].session_ref,
					course_code: result[0].course_code
				}
				this.academicsService.getStaffDetails(query2).subscribe((res: any) => {
					this.faculty=res.person
				});
			}
    	})
    })
  }

}
/*
head: {
		    alignment: 'center',
			bold: true
		},
		subhead: {
			margin: [0, 6, 0, 0]
		},
		center: {
		    alignment: 'center'
		},
{
			style: 'tableExample',
			table: {
				widths: [20, '*', 35, 20,20],
				body: [
					[{text: 'Sl.No', style: 'head'}, {text: 'Question', style: ['head', 'subhead']}, {text: 'Marks',style: ['head', 'subhead']}, {text: 'CO', style: ['head', 'subhead']}, {text: 'BL', style: ['head','subhead']}],
					[{text: 'PART A (5 x 2 = 10 Marks)', alignment: 'center',
		  colSpan: 5, bold: true}, {}, {}, {}, {}],
					['1.', 'What are the different types of languages that are available in the DBMS?' ,{text: '2', style: ['center']},
					{text: '3', style: ['center']},
					{text: 'L.2', style: ['center']}],
					['2.', 'What are the different types of languages that are available in the DBMS?' ,{text: '2', style: ['center']},
					{text: '3', style: ['center']},
					{text: 'L.2', style: ['center']}],
					['3.', 'What are the different types of languages that are available in the DBMS?' ,{text: '2', style: ['center']},
					{text: '3', style: ['center']},
					{text: 'L.2', style: ['center']}],
					['4.', 'What are the different types of languages that are available in the DBMS?' ,{text: '2', style: ['center']},
					{text: '3', style: ['center']},
					{text: 'L.2', style: ['center']}],
					['5.', 'What are the different types of languages that are available in the DBMS?' ,{text: '2', style: ['center']},
					{text: '3', style: ['center']},
					{text: 'L.2', style: ['center']}]
				]
			}
		}


*/
