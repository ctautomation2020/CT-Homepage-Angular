import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

const moment = _rollupMoment || _moment;
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
  selector: 'app-student-model',
  templateUrl: './student-model.component.html',
  styleUrls: ['./student-model.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class StudentModelComponent implements OnInit {
  studentForm: FormGroup;
  type;
  today = new Date();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo,public dialogRef: MatDialogRef<StudentModelComponent>) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      Register_No: new FormControl(this.data.student.Register_No),
      First_Name: new FormControl(this.data.student.First_Name, Validators.required),
      Middle_Name: new FormControl(this.data.student.Middle_Name),
      Last_Name: new FormControl(this.data.student.Last_Name),
      Gender_Ref: new FormControl(this.data.student.Gender_Ref,Validators.required),
      DOB: new FormControl(this.data.student.DOB, Validators.required),
      Community_Ref: new FormControl(this.data.student.Community_Ref,Validators.required),
      Caste: new FormControl(this.data.student.Caste, Validators.required),
      MailID: new FormControl(this.data.student.MailID,[Validators.email, Validators.required]),
      Aadhar_Card: new FormControl(this.data.student.Aadhar_Card, [Validators.required, Validators.pattern('^[0-9]{4} [0-9]{4} [0-9]{4}$')]),
      Primary_ContactNumber: new FormControl(this.data.student.Primary_ContactNumber, [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      Secondary_ContactNumber: new FormControl(this.data.student.Secondary_ContactNumber,Validators.pattern('^[0-9]{10}$')),
      Address_Line1: new FormControl(this.data.student.Address_Line1),
      Address_Line2: new FormControl(this.data.student.Address_Line2, Validators.required),
      Address_Line3: new FormControl(this.data.student.Address_Line3, Validators.required),
      Address_Line4: new FormControl(this.data.student.Address_Line4, [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      isSame:new FormControl(),
      Correspondence_Address: new FormControl(this.data.student.Correspondence_Address,Validators.required),
      Residential_Type_Ref: new FormControl(this.data.student.Residential_Type_Ref,Validators.required),
      FA: new FormControl(this.data.student.FA,Validators.required),
      Programme_Ref: new FormControl(this.data.student.Programme_Ref,Validators.required),
      Branch_Ref: new FormControl(this.data.student.Branch_Ref,Validators.required),
      Registration_Mode_Ref: new FormControl(this.data.student.Registration_Mode_Ref,Validators.required),
      Blood_Group_Ref: new FormControl(this.data.student.Blood_Group_Ref,Validators.required),
      GATE_Cutoff_Mark: new FormControl(this.data.student.GATE_Cutoff_Mark,[Validators.required,Validators.max(1000)]),
      Admission_Date: new FormControl(this.data.student.Admission_Date,Validators.required),
      Admission_Category_Ref: new FormControl(this.data.student.Admission_Category_Ref,Validators.required),
      Scholarship_Received_Ref: new FormControl(this.data.student.Scholarship_Received_Ref),
      Scholarship_Details: new FormControl(this.data.student.Scholarship_Details),
      NSS_NSO_YRC_Volunteer_Ref: new FormControl(this.data.student.NSS_NSO_YRC_Volunteer_Ref),
      Hostel_Block_Room: new FormControl(this.data.student.Hostel_Block_Room)
    });
    this.studentForm.get('Residential_Type_Ref').valueChanges.subscribe(x => {
      if(x==100 || x==101)
        this.studentForm.controls.Hostel_Block_Room.setValue("");
    });
    this.studentForm.get('Scholarship_Received_Ref').valueChanges.subscribe(x => {
      if(x==90)
        this.studentForm.controls.Scholarship_Details.setValue("");
    });
  }
  onSubmit() {
    this.dialogRef.close(this.studentForm.value);
  }
  cbox(){
    var cval=!(this.studentForm.value.isSame);
    var forms=this.studentForm.value;
    if(cval){
      this.studentForm.controls.Correspondence_Address.setValue(forms.Address_Line1+", "+forms.Address_Line2+", "+forms.Address_Line3+", "+forms.Address_Line4);
    }
    else{
      this.studentForm.controls.Correspondence_Address.setValue("");
    }
  }
  date = new FormControl(moment());

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    datepicker.select(normalizedMonth)
    datepicker.close();
  }

}