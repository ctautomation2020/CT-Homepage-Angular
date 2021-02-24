import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { StudentDetailsService } from './../../student-details.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

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
  selector: 'app-awards-model',
  templateUrl: './awards-model.component.html',
  styleUrls: ['./awards-model.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class AwardsModelComponent implements OnInit {

  awardsForm: FormGroup;
  fileToUpload;
  sizeValid: boolean=false;
  typeValid: boolean=false;
  fileSrc: String = "../../../../assets/pdfs/sample.pdf";
  today = new Date();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo, public dialogRef: MatDialogRef<AwardsModelComponent>,public studentDetailsService: StudentDetailsService) {
  }
  ngOnInit(): void {
    const baseURL=this.studentDetailsService.getURL();
    if(this.data.award!=null)
      this.fileSrc=baseURL+this.data.award.Certificate_Copy;
    this.awardsForm = new FormGroup({
      Award_Name: new FormControl(this.data.award!=null?this.data.award.Award_Name:"", Validators.required),
      Organizer_Name: new FormControl(this.data.award!=null?this.data.award.Organizer_Name:"", Validators.required),
      Award_Type_Ref: new FormControl(this.data.award!=null?this.data.award.Award_Type_Ref:"", Validators.required),
      Award_Category_Ref: new FormControl(this.data.award!=null?this.data.award.Award_Category_Ref:"", Validators.required),
      Place_of_Event: new FormControl(this.data.award!=null?this.data.award.Place_of_Event:"", Validators.required),
      Award_Date: new FormControl(this.data.award!=null?this.convertDate(this.data.award.Award_Date):"", Validators.required),
      Certificate_Copy: new FormControl(this.data.award!=null?this.data.award.Certificate_Copy:""),
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
    console.log(this.awardsForm.value);
    if(this.data.award==null){
      const req = gql `
      mutation createStudentAward($data: createStudentAwardInput!){
        createStudentAward(data:$data){
          Award_ID
        }
      }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Award_Name: this.awardsForm.value.Award_Name,
            Organizer_Name: this.awardsForm.value.Organizer_Name,
            Award_Type_Ref: this.awardsForm.value.Award_Type_Ref,
            Award_Category_Ref: this.awardsForm.value.Award_Category_Ref,
            Place_of_Event: this.awardsForm.value.Place_of_Event,
            Award_Date: this.convertDate2(this.awardsForm.value.Award_Date),
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
      mutation updateStudentAward($data: updateStudentAwardInput!){
        updateStudentAward(data:$data){
          Award_ID
        }
      }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Award_ID: this.data.award.Award_ID,
            Award_Name: this.awardsForm.value.Award_Name,
            Organizer_Name: this.awardsForm.value.Organizer_Name,
            Award_Type_Ref: this.awardsForm.value.Award_Type_Ref,
            Award_Category_Ref: this.awardsForm.value.Award_Category_Ref,
            Place_of_Event: this.awardsForm.value.Place_of_Event,
            Award_Date: this.convertDate2(this.awardsForm.value.Award_Date),
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
