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

  // internals = [
  //   {type:"Assessment",number:"1",total_marks:"60",obtained_marks:"50",weightage:"5",obtained_weightage:"4"},
  //   {type:"Assignment",number:"1",total_marks:"60",obtained_marks:"40",weightage:"5",obtained_weightage:"3"},
  //   {type:"Assessment",number:"2",total_marks:"60",obtained_marks:"50",weightage:"15",obtained_weightage:"12"},
  //   {type:"Assignment",number:"2",total_marks:"40",obtained_marks:"35",weightage:"5",obtained_weightage:"4.5"},
  //   {type:"Assignment",number:"3",total_marks:"60",obtained_marks:"60",weightage:"10",obtained_weightage:"10"}
  // ];
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
            console.log(result[0])
            this.courseTitle=result[0].course_list.title
            this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
              this.session = session[0];
              console.log(session[0])
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
              console.log(this.internals);
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
                weighted_marks
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
              console.log(this.caComp);
            }));           
          }
        })
      });
      //this.total = this.getTotal()
  }

  filterType(catype):String{
    return catype==0?"Assignment":"Assessment";
  }

  // isInt(inp:string):boolean{
  //   const val=(parseFloat(inp)-parseInt(inp)).toFixed(2);
  //   return parseFloat(val)==0?true:false;
  // }
  // calculateScore(ind:number): String{
  //   const caComp=this.caComp[ind];
  //   const tot=(caComp.weightage/100)*40;
  //   let obtained:any=((caComp.marks_obtained/caComp.total_mark)*tot).toFixed(1);
  //   if(this.isInt(obtained))
  //     obtained=caComp.marks_obtained/caComp.total_mark*tot;
  //   return String(obtained)+" / "+String(tot);
  // }
}
