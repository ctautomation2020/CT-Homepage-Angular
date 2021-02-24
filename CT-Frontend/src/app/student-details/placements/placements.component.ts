import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { StudentDetailsService } from './../student-details.service';
import { PersonReferenceModel } from './../person-reference.model';

import {PlacementsModel} from './placements.model';
import { PlacementsModelComponent } from './placements-model/placements-model.component';
import { HigherStudiesModel } from './higherstudies.model';
import { HigherstudiesModelComponent } from './higherstudies-model/higherstudies-model.component';
import { AlertboxComponent } from './../../shared/alertbox/alertbox.component';


@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements OnInit {
  placements: PlacementsModel[];
  placementType: PersonReferenceModel[];
  queryRef1: QueryRef<PlacementsModel[], any>;
  higherStudies: HigherStudiesModel[];
  admissionMode: PersonReferenceModel[];
  queryRef2: QueryRef<HigherStudiesModel[], any>;
  openTab: String = "placement";
  pColor: String = "#0f5b99";
  hColor: String = "#1982e4";
  oColor: String = "#1982e4";
  othersForm: FormGroup;
  types = ['Govt. Job', 'Banking', 'Civil Service', 'Self Employed', 'Entrepreneurship'];
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
    const req1=gql`
	  query studentPlacements($data:studentPlacementsQueryInput!){
      studentPlacements(data:$data) {
        Placement_ID
        Register_No
        Company
        Package
        Appointment_Order_Copy
        Location
        Designation
        Appointment_OrderNum
        Appointment_Letter_IssueDate
        Joining_Date
        Placement_Type_Ref
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
      this.placements = JSON.parse(JSON.stringify(result.data.studentPlacements));
      console.log(this.placements);
    }));
    this.studentDetailsService.getDropDown('Placement_Type').subscribe(result => {
      this.placementType = result;
      console.log(this.placementType);
    });
    const req2=gql`
	  query studentHigherStudies($data:studentHigherStudiesQueryInput!){
      studentHigherStudies(data:$data) {
        HigherStudies_ID
        Register_No
        University
        Degree
        Specialization
        Admission_Mode_Ref
        Score
        Country
        Location
        LOR_Details
        Score_Card_Copy
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
      this.higherStudies = JSON.parse(JSON.stringify(result.data.studentHigherStudies));
      console.log(this.higherStudies);
    }));
    this.studentDetailsService.getDropDown('Admission_Mode').subscribe(result => {
      this.admissionMode = result;
      console.log(this.admissionMode);
    });

    this.othersForm = new FormGroup({
        type: new FormControl(),
        description: new FormControl()
    })
    
  }

	placementsTab(){
    this.openTab = "placement";
    this.pColor = "#0f5b99";
    this.hColor = "#1982e4";
    this.oColor = "#1982e4";
	}

	higherStudiesTab(){
		this.openTab = "higher";
    this.hColor = "#0f5b99";
    this.pColor = "#1982e4";
    this.oColor = "#1982e4";
	}

	othersTab(){
		this.openTab = "other";
    this.hColor = "#1982e4";
    this.pColor = "#1982e4";
    this.oColor = "#0f5b99";
	}

	createPlacement(){
    const dialogRef = this.dialog.open(PlacementsModelComponent,{
      data:{
        placement: null,
        placementType: this.placementType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.queryRef1.refetch();
		});
  }
	editPlacement(id:number){
    let placement=this.placements.filter((q) => q.Placement_ID === id)
    const dialogRef = this.dialog.open(PlacementsModelComponent,{
      data:{
        placement: placement[0],
        placementType: this.placementType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
			this.queryRef1.refetch();
		});
  }
  deletePlacement(id:number){
    const dialogRef = this.dialog.open(AlertboxComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const req = gql `
        mutation deleteStudentPlacement($data: deleteStudentPlacementInput!){
          deleteStudentPlacement(data:$data){
            Placement_ID
          }
        }`;
        this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Placement_ID: id
          }
        }}).subscribe(({ data }) => {
          this.queryRef1.refetch();
        });
      }
    });
  }

	createHigherStudies(){
    const dialogRef = this.dialog.open(HigherstudiesModelComponent,{
      data:{
        higherstudy: null,
        admissionMode: this.admissionMode
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.queryRef2.refetch();
		});
	}
	editHigherStudies(id:number){
    let higherstudy=this.higherStudies.filter((q) => q.HigherStudies_ID === id)
    const dialogRef = this.dialog.open(HigherstudiesModelComponent,{
      data:{
        higherstudy: higherstudy[0],
        admissionMode: this.admissionMode
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.queryRef2.refetch();
    });
  }
  deleteHigherStudies(id:number){
    const dialogRef = this.dialog.open(AlertboxComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const req = gql `
        mutation deleteStudentHigherStudy($data: deleteStudentHigherStudyInput!){
          deleteStudentHigherStudy(data:$data){
            HigherStudies_ID
          }
        }`;
        this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            HigherStudies_ID: id
          }
        }}).subscribe(({ data }) => {
          this.queryRef2.refetch();
        });
      }
    });
  }

  filterAdmissionMode(stype): PersonReferenceModel {
    return this.admissionMode.filter(l => l.Ref_Code === stype)[0];
  }
  filterPlacementType(stype): PersonReferenceModel {
    return this.placementType.filter(l => l.Ref_Code === stype)[0];
  }
  
}