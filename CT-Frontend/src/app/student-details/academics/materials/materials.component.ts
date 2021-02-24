import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  constructor(private academicsService: AcademicsService,private apollo: Apollo, private studentDetailsService: StudentDetailsService, 
        private router: Router, private route: ActivatedRoute/* , private sanitizer: DomSanitizer */) { }
  
  courseTitle: string;
  cregst_id: number;
  session: AcademicsModel;
  filePath: string = "../../../../assets/pdfs/syllabus/";
  syllabus: Boolean = false;
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cregst_id = +params['cregst_id'];
      const reg_no=this.studentDetailsService.getRegisterNo();
      const query = {
        reg_no:  reg_no,
        cregst_id: this.cregst_id
      }
      this.academicsService.getStudentCourses(query).subscribe((result: any) => {
        if(result.length == 0) {
          this.router.navigate(['/student-details', 'academics']);
        }
        else {
          console.log(result[0])
          this.courseTitle=result[0].course_list.title
          this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
            this.session = session[0];
            console.log(session[0])
            
          });
          this.filePath=this.filePath+result[0].course_code+".pdf";
        }
      })
    });
  }

  openPDF(){
    this.syllabus = !this.syllabus;
  }

  /* getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
  } */

}
