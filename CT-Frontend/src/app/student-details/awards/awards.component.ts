import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { PersonReferenceModel } from './../person-reference.model';
import { AwardsModelComponent } from './awards-model/awards-model.component';
import { AwardsModel } from './awards.model';
import { StudentDetailsService } from './../student-details.service';
import { AlertboxComponent } from './../../shared/alertbox/alertbox.component';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  awards: AwardsModel[];
  awardType: PersonReferenceModel[];
  awardCategory: PersonReferenceModel[];
  queryRef: QueryRef<AwardsModel[], any>;
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
	  query studentAwards($data:studentAwardsQueryInput!){
      studentAwards(data:$data) {
        Award_ID
        Register_No
        Award_Name
        Organizer_Name
        Award_Type_Ref
        Award_Category_Ref
        Place_of_Event
        Certificate_Copy
        Award_Date
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
      this.awards = JSON.parse(JSON.stringify(result.data.studentAwards));
      console.log(this.awards);
    }));
    this.studentDetailsService.getDropDown('Award_Type').subscribe(result => {
      this.awardType = result;
      console.log(this.awardType);
    });
    this.studentDetailsService.getDropDown('Award_Category').subscribe(result => {
      this.awardCategory = result;
      console.log(this.awardCategory);
    });
  }

  addModel(){
    const dialogRef = this.dialog.open(AwardsModelComponent,{
      data:{
        award: null,
        awardType: this.awardType,
        awardCategory: this.awardCategory
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.queryRef.refetch();
		}); 
  }
  
  editModel(id:number){
    let award=this.awards.filter((q) => q.Award_ID === id);
    const dialogRef = this.dialog.open(AwardsModelComponent,{
      data:{
        award: award[0],
        awardType: this.awardType,
        awardCategory: this.awardCategory
      }
    });
    dialogRef.afterClosed().subscribe(result => {
			this.queryRef.refetch();
		});
  }
  
  deleteModel(id: number): void {
    const dialogDeleteRef = this.dialog.open(AlertboxComponent);
    dialogDeleteRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const req = gql `
        mutation deleteStudentAward($data: deleteStudentAwardInput!){
          deleteStudentAward(data:$data){
            Award_ID
          }
        }`;
        this.apollo.mutate({
        mutation: req,
        variables: {
          data: {
            Award_ID: id
          }
        }}).subscribe(({ data }) => {
          this.queryRef.refetch();
        });
      }
    });
  }
  filterawardType(atype): PersonReferenceModel {
    return this.awardType.filter(l => l.Ref_Code === atype)[0];
  }
  filterAwardCategory(atype): PersonReferenceModel {
    return this.awardCategory.filter(l => l.Ref_Code === atype)[0];
  }
}
