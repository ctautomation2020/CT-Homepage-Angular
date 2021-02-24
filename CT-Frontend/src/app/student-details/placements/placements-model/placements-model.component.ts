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
  selector: 'app-placements-model',
  templateUrl: './placements-model.component.html',
  styleUrls: ['./placements-model.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class PlacementsModelComponent implements OnInit {

  placementsForm: FormGroup;
  fileToUpload;
  sizeValid: boolean=false;
  typeValid: boolean=false;
  fileSrc: String = "../../../../assets/pdfs/sample.pdf";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo, public dialogRef: MatDialogRef<PlacementsModelComponent>,public studentDetailsService: StudentDetailsService) {}

  ngOnInit(): void {
    const baseURL=this.studentDetailsService.getURL();
    if(this.data.placement!=null)
      this.fileSrc=baseURL+this.data.placement.Appointment_Order_Copy;
    this.placementsForm = new FormGroup({
      Company: new FormControl(this.data.placement!=null?this.data.placement.Company:"", Validators.required),
      Package: new FormControl(this.data.placement!=null?this.data.placement.Package:"", Validators.required),
      Location: new FormControl(this.data.placement!=null?this.data.placement.Location:"", Validators.required),
      Designation: new FormControl(this.data.placement!=null?this.data.placement.Designation:"", Validators.required),
      Appointment_OrderNum: new FormControl(this.data.placement!=null?this.data.placement.Appointment_OrderNum:"", Validators.required),
      Appointment_Letter_IssueDate: new FormControl(this.data.placement!=null?this.convertDate(this.data.placement.Appointment_Letter_IssueDate):"", Validators.required),
      Appointment_Order_Copy: new FormControl(this.data.placement!=null?this.data.placement.Appointment_Order_Copy:""),
      Joining_Date: new FormControl(this.data.placement!=null?this.convertDate(this.data.placement.Joining_Date):"", Validators.required),
      Placement_Type_Ref: new FormControl(this.data.placement!=null?this.data.placement.Placement_Type_Ref:"", Validators.required),
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
    console.log(this.placementsForm.value);
    console.log(this.fileToUpload);
    if(this.data.placement==null){
      const req = gql `
      mutation createStudentPlacement($data: createStudentPlacementInput!){
        createStudentPlacement(data:$data){
          Placement_ID
        }
      }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Company: this.placementsForm.value.Company,
            Package: parseFloat(this.placementsForm.value.Package),
            Location: this.placementsForm.value.Location,
            Designation: this.placementsForm.value.Designation,
            Appointment_OrderNum: this.placementsForm.value.Appointment_OrderNum,
            Appointment_Letter_IssueDate: this.convertDate2(this.placementsForm.value.Appointment_Letter_IssueDate),
            Joining_Date: this.convertDate2(this.placementsForm.value.Joining_Date),
            Placement_Type_Ref: this.placementsForm.value.Placement_Type_Ref,
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
      mutation updateStudentPlacement($data: updateStudentPlacementInput!){
        updateStudentPlacement(data:$data){
          Placement_ID
        }
      }`;
      this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Placement_ID: this.data.placement.Placement_ID,
            Company: this.placementsForm.value.Company,
            Package: parseFloat(this.placementsForm.value.Package),
            Location: this.placementsForm.value.Location,
            Designation: this.placementsForm.value.Designation,
            Appointment_OrderNum: this.placementsForm.value.Appointment_OrderNum,
            Appointment_Letter_IssueDate: this.convertDate2(this.placementsForm.value.Appointment_Letter_IssueDate),
            Joining_Date: this.convertDate2(this.placementsForm.value.Joining_Date),
            Placement_Type_Ref: this.placementsForm.value.Placement_Type_Ref,
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
