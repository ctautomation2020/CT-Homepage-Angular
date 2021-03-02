import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { StudentDetailsService } from './../student-details.service';
import { PersonReferenceModel } from './../person-reference.model';
import { MarkModelComponent } from './mark-model/mark-model.component';
import { MarkModel } from './mark.model';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  sems: Array<number>;
  currentSem: number;
  sessions: PersonReferenceModel[];
  queryRef1: QueryRef<any>;
  queryRef2: QueryRef<any>;
  marks;
  semMarks;
  gpas;
  constructor(public dialog: MatDialog,private apollo: Apollo,public studentDetailsService: StudentDetailsService) { }

  ngOnInit(): void {
    const regNo: number = this.studentDetailsService.getRegisterNo();
	  const req1=gql`
	  query studentEndsemsMarks($data: studentEndsemsMarksQueryInput!){
      studentEndsemsMarks(data:$data){
        Mark_ID
        Register_No
        Semester
        Course_Code
        Session_Ref
        Grade
        Credits
        Entry_Date
        course_list{
          course_code
          title
          credit
          objectives
        }
      }
    }`;
    this.queryRef1 = this.apollo.watchQuery({
      query: req1,
      variables: {
      data: {
        Register_No: regNo
      }
    }
    });
  	this.queryRef1.valueChanges.subscribe(((result: any) => {
      this.marks = JSON.parse(JSON.stringify(result.data.studentEndsemsMarks));
      
      this.sems= new Array;
      for(let subj of this.marks){
        if(!this.sems.includes(subj.Semester))
          this.sems.push(subj.Semester);
      }
    }));

    const req2=gql`
	  query studentGpas($data:studentGpasQueryInput!){
      studentGpas(data:$data){
        Gpa_ID
        Register_No
        Semester
        GPA
        Grade_Sheet
      }
    }`;
    this.queryRef2 = this.apollo.watchQuery({
      query: req2,
      variables: {
      data: {
        Register_No: regNo
      }
    }
    });
  	this.queryRef2.valueChanges.subscribe(((result: any) => {
      this.gpas = JSON.parse(JSON.stringify(result.data.studentGpas));
      
    }));
    this.studentDetailsService.getDropDown('Session').subscribe(result => {
      this.sessions = result;
    });
  }
  editModel(){
    const dialogRef = this.dialog.open(MarkModelComponent,{
      width: "100%",
      data:{
        currentSem: this.currentSem,
        gpa: this.filterGpa(),
        sessions: this.sessions,
        grades: this.semMarks
      }
    });
    dialogRef.afterClosed().subscribe(result => {
			if (result) {
        
        let updateGrades=new Array(); 
        for(let subj of result.grades){
          updateGrades.push({
            Mark_ID:subj.Mark_ID,
            Semester: subj.Semester,
            Session_Ref: subj.Session_Ref, 
            Grade: subj.Grade,
            Credits: subj.Credits,
            Entry_Date: subj.Entry_Date
          })
        }
        
        const req1 = gql `
        mutation  updateStudentEndsemMark($data: [updateStudentEndsemMarkInput!]!){
          updateStudentEndsemMark(data:$data){
            Register_No
          }
        }`;
				this.apollo.mutate({
					mutation: req1,
					variables: {
						data: updateGrades
					}
				}).subscribe(({ data }) => {
					
					this.queryRef1.refetch();
          this.queryRef2.refetch();
        });
			} 
		});
  }
  
  semFilter(semester){
    this.semMarks=this.marks.filter(l => l.Semester === semester);
    this.currentSem=semester;
    
  }

  filterGpa(){
    return this.gpas.filter(l => l.Semester === this.currentSem)[0];
  }

  filterSession(session){
    return this.sessions.filter(l => l.Reference_ID === session)[0];
  }
}
