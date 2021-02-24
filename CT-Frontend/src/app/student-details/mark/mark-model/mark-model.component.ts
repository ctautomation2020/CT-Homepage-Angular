import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo,QueryRef} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-mark-model',
  templateUrl: './mark-model.component.html',
  styleUrls: ['./mark-model.component.scss']
})
export class MarkModelComponent implements OnInit {
  markForm: FormGroup;
  fileToUpload;
  session;
  grade;
  grades;
  queryRef: QueryRef<any>;
  sizeValid: boolean=false;
  typeValid: boolean=false;
  fileSrc: String = "../../../../assets/pdfs/sample.pdf";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo, public dialogRef: MatDialogRef<MarkModelComponent>) {
  }

  ngOnInit(): void {
    this.markForm=new FormGroup({
      file: new FormControl(""),
      Gpa: new FormControl(this.data.gpa.GPA,Validators.required),
      Gpa_ID: new FormControl(this.data.gpa.Gpa_ID),
      grade: new FormArray([]),
      session: new FormArray([])
    });
    this.grade=this.markForm.get('grade') as FormArray;
    this.session=this.markForm.get('session') as FormArray;
    for(let subj of this.data.grades){
      this.grade.push(new FormControl(subj.Grade));
      this.session.push(new FormControl(subj.Session_Ref));
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      this.fileToUpload=event.target.files[0];
      const ftype=this.fileToUpload.type.slice(-3);
      const fsize=Math.floor(this.fileToUpload.size/1024);
      this.typeValid=ftype=="pdf"?true:false;
      this.sizeValid=fsize<=1024?true:false;
    }
  }

  onSubmit(){
    console.log(this.fileToUpload);
    let i:number=0;
    for(i=0;i<this.grade.value.length;i++){
      this.data.grades[i].Grade=this.grade.value[i]
      this.data.grades[i].Session_Ref=this.session.value[i]
      this.data.grades[i].Entry_Date=new Date()
    }
    this.data.gpa=this.markForm.value.Gpa;

    const req = gql `
      mutation uploadStudentGpa($data: uploadStudentGpaInput!) {
        uploadStudentGpa(data: $data)
      }`;
    this.apollo.mutate({
      mutation: req,
      variables: {
        data:{
          Gpa_ID: this.markForm.value.Gpa_ID,
          file: this.fileToUpload
        }
      },
      context: {
        useMultipart: true
      }
    }).subscribe(({ data }) => {
      console.log(data);
    });
    this.dialogRef.close(this.data);
  }

}
