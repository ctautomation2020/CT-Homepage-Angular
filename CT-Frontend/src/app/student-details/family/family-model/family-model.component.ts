import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-family-model',
  templateUrl: './family-model.component.html',
  styleUrls: ['./family-model.component.scss']
})

export class FamilyModelComponent implements OnInit {
  familyForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private apollo: Apollo,public dialogRef: MatDialogRef<FamilyModelComponent>) {
  }

  ngOnInit(): void {
    this.familyForm = new FormGroup({
      Family_ID: new FormControl(this.data.family.Family_ID),
      Register_No: new FormControl(this.data.family.Register_No),
      Father_Name: new FormControl(this.data.family.Father_Name, Validators.required),
      Mother_Name: new FormControl(this.data.family.Mother_Name, Validators.required),
      Father_ContactNumber: new FormControl(this.data.family.Father_ContactNumber, [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      Mother_ContactNumber: new FormControl(this.data.family.Mother_ContactNumber, [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      Father_MailID: new FormControl(this.data.family.Father_MailID,[Validators.required,Validators.email]),
      Mother_MailID: new FormControl(this.data.family.Mother_MailID,[Validators.required,Validators.email]),
      Father_Occupation: new FormControl(this.data.family.Father_Occupation, Validators.required),
      Mother_Occupation: new FormControl(this.data.family.Mother_Occupation, Validators.required),
      Father_Affilation: new FormControl(this.data.family.Father_Affilation, Validators.required),
      Mother_Affilation: new FormControl(this.data.family.Mother_Affilation, Validators.required),
      Father_Company: new FormControl(this.data.family.Father_Company),
      Mother_Company: new FormControl(this.data.family.Mother_Company),
      Parents_Annual_Income: new FormControl(this.data.family.Parents_Annual_Income,Validators.required),
      Local_Guardian_Name: new FormControl(this.data.family.Local_Guardian_Name, Validators.required),
      Local_Guardian_Address: new FormControl(this.data.family.Local_Guardian_Address),
      Local_Guardian_Contact_Number: new FormControl(this.data.family.Local_Guardian_Contact_Number, [Validators.required,Validators.pattern('^[0-9]{10}$')])
    });
  }
  onSubmit() {
    console.log(this.familyForm.value);
    this.dialogRef.close(this.familyForm.value);
  }

}
