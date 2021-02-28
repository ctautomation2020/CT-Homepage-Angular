import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { StudentDetailsService } from './../student-details.service';
import { PersonReferenceModel } from './../person-reference.model';
import { InternshipModel } from './internship.model';
import { InternshipModelComponent } from './internship-model/internship-model.component';
import { AlertboxComponent } from './../../shared/alertbox/alertbox.component';


@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  internships: InternshipModel[];
  stiphendType: PersonReferenceModel[];
  selectionType: PersonReferenceModel[];
  queryRef: QueryRef<InternshipModel[], any>;
  fileSrc: String = "../../../assets/pdfs/sample.pdf";

  constructor(public dialog: MatDialog,private apollo: Apollo,public studentDetailsService: StudentDetailsService) { }
  
  convertDate(inputDate:any){
    if(inputDate.isMomentObject){
      inputDate=inputDate._d;
    }
    const dt=new Date(inputDate);
    const date=new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    return date;
  }

  ngOnInit(): void {
    const regNo: number = this.studentDetailsService.getRegisterNo();
	  const req=gql`
	  query studentInternships($data:studentInternshipsQueryInput!){
      studentInternships(data:$data){
        Internship_ID
        Register_No
        Company
        Title
        Order_Copy
        Address
        Start_Date
        End_Date
        Stiphend_Option_Ref
        Stiphend_Amount
        Selection_Mode_Ref
      }
    }`;
    this.queryRef = this.apollo.watchQuery({
      query: req,
      variables: {
      data: {
        Register_No: regNo
      }
    }
    });
  	this.queryRef.valueChanges.subscribe(((result: any) => {
      this.internships = JSON.parse(JSON.stringify(result.data.studentInternships));
      
    }));
    this.studentDetailsService.getDropDown('Option').subscribe(result => {
      this.stiphendType = result;
      
    });
    this.studentDetailsService.getDropDown('Selection_Mode').subscribe(result => {
      this.selectionType = result;
      
    });
  }
	createModel() {
		const dialogRef = this.dialog.open(InternshipModelComponent,{
      data:{
        internship: null,
        stiphendType: this.stiphendType,
        selectionType: this.selectionType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.queryRef.refetch();
		});
  }

	editModel(id:number) {
		const internship=this.internships.filter((q) => q.Internship_ID === id)
    const dialogRef = this.dialog.open(InternshipModelComponent,{
      data:{
        internship: internship[0],
        stiphendType: this.stiphendType,
        selectionType: this.selectionType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
			this.queryRef.refetch(); 
		});
  }
  
  deleteModel(id:number) {
    let dialogRef = this.dialog.open(AlertboxComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        const req = gql `
        mutation deleteStudentInternship($data: deleteStudentInternshipInput!){
          deleteStudentInternship(data:$data){
            Internship_ID
          }
        }`;
        this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Internship_ID: id
          }
        }}).subscribe(({ data }) => {
          this.queryRef.refetch();
        });
      }
    });

  }
  filterStiphendType(stype): PersonReferenceModel {
    return this.stiphendType.filter(l => l.Reference_ID === stype)[0];
  }
  filterSelectionType(stype): PersonReferenceModel {
    return this.selectionType.filter(l => l.Reference_ID === stype)[0];
  }

}
