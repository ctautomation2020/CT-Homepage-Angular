import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';
import { StudentDetailsService } from './../../student-details.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import gql from 'graphql-tag';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-internship-model',
  templateUrl: './internship-model.component.html',
  styleUrls: ['./internship-model.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class InternshipModelComponent implements OnInit {
  internshipForm: FormGroup;
  fileToUpload;
  sizeValid: boolean=false;
  typeValid: boolean=false;
  fileSrc: String = "../../../../assets/pdfs/sample.pdf";
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo, public dialogRef: MatDialogRef<InternshipModelComponent>,public studentDetailsService: StudentDetailsService) {
  }
  ngOnInit(): void {
    const baseURL=this.studentDetailsService.getURL();
    if(this.data.internship!=null)
      this.fileSrc=baseURL+this.data.internship.Order_Copy;
    console.log(this.fileSrc);
    this.internshipForm = new FormGroup({
      Company: new FormControl(this.data.internship!=null?this.data.internship.Company:"", Validators.required),
      Title: new FormControl(this.data.internship!=null?this.data.internship.Title:"", Validators.required),
      Address: new FormControl(this.data.internship!=null?this.data.internship.Address:"", Validators.required),
      Start_Date: new FormControl(this.data.internship!=null?this.convertDate(this.data.internship.Start_Date):"", Validators.required),
      End_Date: new FormControl(this.data.internship!=null?this.convertDate(this.data.internship.End_Date):"", Validators.required),
      Stiphend_Option_Ref: new FormControl(this.data.internship!=null?this.data.internship.Stiphend_Option_Ref:"", Validators.required),
      Stiphend_Amount: new FormControl(this.data.internship!=null?this.data.internship.Stiphend_Amount:"", Validators.required),
      Selection_Mode_Ref: new FormControl(this.data.internship!=null?this.data.internship.Selection_Mode_Ref:"", Validators.required),
      file: new FormControl("")
    });
    this.internshipForm.get('Stiphend_Option_Ref').valueChanges.subscribe(x => {
      if(x==87)
        this.internshipForm.controls.Stiphend_Amount.setValue(0);
    });
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length) {
      this.fileToUpload=event.target.files[0];
      const ftype=this.fileToUpload.type.slice(-3);
      const fsize=Math.floor(this.fileToUpload.size/1024);
      this.typeValid=ftype=="pdf"?true:false;
      this.sizeValid=fsize<=1024?true:false;
    }
  }

  onSubmit() {
    console.log(this.internshipForm.value);
    console.log(this.fileToUpload);
    if(this.data.internship==null){
      const req = gql `
      mutation createStudentInternship($data:createStudentInternshipInput!){
        createStudentInternship(data:$data){
          Internship_ID
        }
      }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Company: this.internshipForm.value.Company,
            Title: this.internshipForm.value.Title,
            Address: this.internshipForm.value.Address,
            Start_Date: this.convertDate2(this.internshipForm.value.Start_Date),
            End_Date: this.convertDate2(this.internshipForm.value.End_Date),
            Stiphend_Option_Ref: this.internshipForm.value.Stiphend_Option_Ref,
            Stiphend_Amount: this.internshipForm.value.Stiphend_Amount,
            Selection_Mode_Ref: this.internshipForm.value.Selection_Mode_Ref,
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
    else{
      const req = gql `
				mutation updateStudentInternship($data:updateStudentInternshipInput!){
          updateStudentInternship(data:$data){
            Internship_ID
          }
        }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Internship_ID: this.data.internship.Internship_ID,
            Company: this.internshipForm.value.Company,
            Title: this.internshipForm.value.Title,
            Address: this.internshipForm.value.Address,
            Start_Date: this.convertDate2(this.internshipForm.value.Start_Date),
            End_Date: this.convertDate2(this.internshipForm.value.End_Date),
            Stiphend_Option_Ref: this.internshipForm.value.Stiphend_Option_Ref,
            Stiphend_Amount: this.internshipForm.value.Stiphend_Amount,
            Selection_Mode_Ref: this.internshipForm.value.Selection_Mode_Ref,
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

  convertDate(edate){
    const myDate = new Date(0);
    const temp = parseFloat(edate) / 1000;
    myDate.setUTCSeconds(temp);
    return myDate;
  }

  convertDate2(inputDate:any){
    if(inputDate.isMomentObject){
      inputDate=inputDate._d;
    }
    const dt=new Date(inputDate);
    const date=new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    return date;
  }
}
