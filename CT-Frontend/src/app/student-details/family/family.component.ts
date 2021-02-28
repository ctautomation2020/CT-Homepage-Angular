import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { FamilyModelComponent } from './family-model/family-model.component';
import { FamilyModel } from './family.model';
import { StudentDetailsService } from './../student-details.service';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
	family: FamilyModel;
	queryRef: QueryRef<FamilyModel>; 
  constructor(public dialog: MatDialog,private apollo: Apollo,public studentDetailsService: StudentDetailsService) { }
  ngOnInit(): void {
	  const regNo: number = this.studentDetailsService.getRegisterNo();
	  const req=gql`
	  query studentFamilyDetails($data: studentFamilyDetailsQueryInput!){
		studentFamilyDetails(data:$data) {
			Family_ID
			Register_No
			Father_Name
			Mother_Name
			Father_ContactNumber
			Mother_ContactNumber
			Father_MailID
			Mother_MailID
			Father_Occupation
			Mother_Occupation
			Father_Affilation
			Mother_Affilation
			Father_Company
			Mother_Company
			Parents_Annual_Income
			Local_Guardian_Name
			Local_Guardian_Address
			Local_Guardian_Contact_Number
		}
	}`;
	this.queryRef = this.apollo.watchQuery<FamilyModel>({
	  query: req,
	  variables: {
		data: {
			Register_No: regNo
		}
	}
	});
  	this.queryRef.valueChanges.subscribe(((result: any) => {
	  this.family = JSON.parse(JSON.stringify(result.data.studentFamilyDetails));
	}));
  }
	onOpenModel() {
		let dialogRef = this.dialog.open(FamilyModelComponent,{ 
			data: {
				family:this.family
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				const req = gql `
				mutation updateStudentFamilyDetails($data: updateStudentFamilyDetailsInput!) {		
					updateStudentFamilyDetails(data: $data){
						Family_ID
					}
				}`;
				this.apollo.mutate({
					mutation: req,
					variables: {
						data: {
							Family_ID: result.Family_ID,
							Father_Name: result.Father_Name,
							Mother_Name: result.Mother_Name,
							Father_ContactNumber: result.Father_ContactNumber,
							Mother_ContactNumber: result.Mother_ContactNumber,
							Father_MailID: result.Father_MailID,
							Mother_MailID: result.Mother_MailID,
							Father_Occupation: result.Father_Occupation,
							Mother_Occupation: result.Mother_Occupation,
							Father_Affilation: result.Father_Affilation,
							Mother_Affilation: result.Mother_Affilation,
							Father_Company: result.Father_Company,
							Mother_Company: result.Mother_Company,
							Parents_Annual_Income: result.Parents_Annual_Income,
							Local_Guardian_Name: result.Local_Guardian_Name,
							Local_Guardian_Address: result.Local_Guardian_Address,
							Local_Guardian_Contact_Number: result.Local_Guardian_Contact_Number
						}
					}
				}).subscribe(({ data }) => {
					
					this.queryRef.refetch();
				});
			} 
		});
	}

}
