import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { StudentDetailsService } from './../../student-details.service';

@Component({
  selector: 'app-higherstudies-model',
  templateUrl: './higherstudies-model.component.html',
  styleUrls: ['./higherstudies-model.component.scss']
})
export class HigherstudiesModelComponent implements OnInit {

  higherStudiesForm: FormGroup;
  fileToUpload;
  sizeValid: boolean=false;
  typeValid: boolean=false;
  fileSrc: String = "../../../../assets/pdfs/sample.pdf";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo, public dialogRef: MatDialogRef<HigherstudiesModelComponent>,public studentDetailsService: StudentDetailsService) {
  }

  ngOnInit(): void {
    const baseURL=this.studentDetailsService.getURL();
    if(this.data.higherstudy!=null)
      this.fileSrc=baseURL+this.data.higherstudy.Score_Card_Copy;
    this.higherStudiesForm = new FormGroup({
      University: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.University:"", Validators.required),
      Degree: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Degree:"", Validators.required),
      Specialization: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Specialization:"", Validators.required),
      Admission_Mode_Ref: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Admission_Mode_Ref:"", Validators.required),
      Score: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Score:"", Validators.required),
      Country: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Country:"", Validators.required),
      Location: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Location:"", Validators.required),
      LOR_Details: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.LOR_Details:"", Validators.required),
      Score_Card_Copy: new FormControl(this.data.higherstudy!=null?this.data.higherstudy.Score_Card_Copy:""),
      file: new FormControl("")
    });
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

  onSubmit() {
    console.log(this.higherStudiesForm.value);
    console.log(this.fileToUpload);
    if(this.data.higherstudy==null){
      const req = gql `
				mutation createStudentHigherStudy($data: createStudentHigherStudyInput!){
          createStudentHigherStudy(data:$data){
            HigherStudies_ID
          }
        }`;
				this.apollo.mutate({
					mutation: req,
					variables: {
						data: {
              University: this.higherStudiesForm.value.University,
              Degree: this.higherStudiesForm.value.Degree,
              Specialization: this.higherStudiesForm.value.Specialization,
              Admission_Mode_Ref: this.higherStudiesForm.value.Admission_Mode_Ref,
              Score: parseFloat(this.higherStudiesForm.value.Score),
              Country: this.higherStudiesForm.value.Country,
              Location: this.higherStudiesForm.value.Location,
              LOR_Details: this.higherStudiesForm.value.LOR_Details,
              file: this.fileToUpload     
						},
            context: {
              useMultipart: true
            }
					}
				}).subscribe(({ data }) => {
					console.log(data);
					this.dialogRef.close();
				});
    }
    else{
      const req = gql `
				mutation updateStudentHigherStudy($data: updateStudentHigherStudyInput!){
          updateStudentHigherStudy(data:$data){
            HigherStudies_ID
          }
        }`;
				this.apollo.mutate({
					mutation: req,
					variables: {
						data: {
              HigherStudies_ID: this.data.higherstudy.HigherStudies_ID,
              University: this.higherStudiesForm.value.University,
              Degree: this.higherStudiesForm.value.Degree,
              Specialization: this.higherStudiesForm.value.Specialization,
              Admission_Mode_Ref: this.higherStudiesForm.value.Admission_Mode_Ref,
              Score: parseFloat(this.higherStudiesForm.value.Score),
              Country: this.higherStudiesForm.value.Country,
              Location: this.higherStudiesForm.value.Location,
              LOR_Details: this.higherStudiesForm.value.LOR_Details,
              file: this.fileToUpload        
						}
					},
          context: {
            useMultipart: true
          }
				}).subscribe(({ data }) => {
					console.log(data);
					this.dialogRef.close();
				});
    }
  }
}
