import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';

import { StudentModelComponent } from './student-model/student-model.component';
import { StudentModel } from './student.model';
import { PersonReferenceModel } from './../person-reference.model';
import { StudentDetailsService } from './../student-details.service';
import { PersonModel } from './../person.model';
import { ImageModelComponent } from './image-model/image-model.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  gender: PersonReferenceModel[];
  community: PersonReferenceModel[];
  residentialType: PersonReferenceModel[];
  programme: PersonReferenceModel[];
  branch: PersonReferenceModel[];
  registrationMode: PersonReferenceModel[];
  bloodGroup: PersonReferenceModel[];
  admissionCategory: PersonReferenceModel[];
  scholarshipReceived: PersonReferenceModel[];
  volunteer: PersonReferenceModel[];
  student: StudentModel;
  facultyAdvisors: PersonModel[];
  queryRef: QueryRef<StudentModel, any>;
  photoURL="../../../assets/img/student/back.jpg";
  constructor(public dialog: MatDialog,private apollo: Apollo,public studentDetailsService: StudentDetailsService) { }
  ngOnInit(): void {
    const id: number = this.studentDetailsService.getRegisterNo();
    const baseURL=this.studentDetailsService.getURL();
    
    const req=gql`
      query student{
        student{
          Register_No
          First_Name
          Middle_Name
          Last_Name
          Gender_Ref
          DOB
          Community_Ref
          Caste
          MailID
          Aadhar_Card
          Primary_ContactNumber
          Secondary_ContactNumber
          Address_Line1
          Address_Line2
          Address_Line3
          Address_Line4
          Correspondence_Address
          Photo
          Residential_Type_Ref
          FA
          Programme_Ref
          Branch_Ref
          Registration_Mode_Ref
          Blood_Group_Ref
          GATE_Cutoff_Mark
          Admission_Date
          Admission_Category_Ref
          Scholarship_Received_Ref
          Scholarship_Details
          NSS_NSO_YRC_Volunteer_Ref
          Hostel_Block_Room
        }
      }`;
    
    this.queryRef = this.apollo 
    .watchQuery<StudentModel>({
      query: req
    });
    this.queryRef.valueChanges.subscribe(((result: any) => {
      this.student = JSON.parse(JSON.stringify(result.data.student));
      const temp1 = parseFloat(result.data.student.DOB) / 1000;
      const myDate1 = new Date(0);
      myDate1.setUTCSeconds(temp1);
      
      this.student.DOB = myDate1 ;
      this.student.Aadhar_Card=this.addSpace(this.student.Aadhar_Card);

      const temp2 = parseFloat(result.data.student.Admission_Date) / 1000;
      const myDate2 = new Date(0);
      myDate2.setUTCSeconds(temp2);
      
      this.student.Admission_Date = myDate2 ;
      
      this.photoURL=result.data.student.Photo!=""?baseURL+result.data.student.Photo:"../../../assets/img/student/back.jpg";
      

    }));
    this.studentDetailsService.getDropDown('Gender').subscribe(result => {
      this.gender = result;
    });
    this.studentDetailsService.getDropDown('Community').subscribe(result => {
      this.community = result;
    });
    this.studentDetailsService.getDropDown('Residential_Type').subscribe(result => {
      this.residentialType = result;
    });
    this.studentDetailsService.getDropDown('Programme').subscribe(result => {
      this.programme = result;
    });
    this.studentDetailsService.getDropDown('Branch').subscribe(result => {
      this.branch = result;
    });
    this.studentDetailsService.getDropDown('Registration_Mode').subscribe(result => {
      this.registrationMode = result;
    });
    this.studentDetailsService.getDropDown('Blood_Group').subscribe(result => {
      this.bloodGroup = result;
    });
    this.studentDetailsService.getDropDown('Admission_Category').subscribe(result => {
      this.admissionCategory = result;
    });
    this.studentDetailsService.getDropDown('Option').subscribe(result => {
      this.scholarshipReceived = result;
    });
    this.studentDetailsService.getDropDown('NSS/NSO/YRC_Volunteer').subscribe(result => {
      this.volunteer = result;
    });
    this.studentDetailsService.getFA().subscribe(result =>{
      this.facultyAdvisors=result;
    })
    
  }

  convertDate(inputDate:any){
    if(inputDate.isMomentObject){
      inputDate=inputDate._d;
    }
    const dt=new Date(inputDate);
    const date=new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    return date;
  }

  addSpace(number: String){
    return number.substring(0,4) + ' ' + number.substring(4,8) + ' ' + number.substring(8,12);
  }

  removeSpace(number: String){
    return number.substring(0,4) + number.substring(5,9) + number.substring(10,14);
  }

  onOpenModel() {
    let dialogRef = this.dialog.open(StudentModelComponent, {
      data: {
        student: this.student,
        gender: this.gender,
        community: this.community,
        residentialType:this.residentialType,
        programme:this.programme,
        branch:this.branch,
        registrationMode:this.registrationMode,
        bloodGroup:this.bloodGroup,
        admissionCategory:this.admissionCategory,
        scholarshipReceived:this.scholarshipReceived,
        volunteer:this.volunteer,
        facultyAdvisors:this.facultyAdvisors
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        if(result.Residential_Type_Ref!=96){  
          result.Hostel_Block_Room='';
        }
        if(result.Scholarship_Received_Ref==87){  
          result.Scholarship_Details='';
        }
        
        const req = gql `
        mutation updateStudent($data: updateStudentInput!) {
          updateStudent(data: $data) {
            Register_No
          }
        }`;
        this.apollo.mutate({
          mutation: req,
          variables: {
            data: {
              Register_No: result.Register_No,
              First_Name: result.First_Name,
              Middle_Name: result.Middle_Name,
              Last_Name: result.Last_Name,
              Gender_Ref: result.Gender_Ref,
              DOB: this.convertDate(result.DOB),
              Community_Ref: result.Community_Ref,
              Caste: result.Caste,
              MailID: result.MailID,
              Aadhar_Card: this.removeSpace(result.Aadhar_Card),
              Primary_ContactNumber: result.Primary_ContactNumber,
              Secondary_ContactNumber: result.Secondary_ContactNumber,
              Address_Line1: result.Address_Line1,
              Address_Line2: result.Address_Line2,
              Address_Line3: result.Address_Line3,
              Address_Line4: result.Address_Line4,
              Correspondence_Address: result.Correspondence_Address,
              Residential_Type_Ref: result.Residential_Type_Ref,
              FA: result.FA,
              Programme_Ref: result.Programme_Ref,
              Branch_Ref: result.Branch_Ref,
              Registration_Mode_Ref: result.Registration_Mode_Ref,
              Blood_Group_Ref: result.Blood_Group_Ref,
              GATE_Cutoff_Mark: result.GATE_Cutoff_Mark,
              Admission_Date: this.convertDate(result.Admission_Date),
              Admission_Category_Ref: result.Admission_Category_Ref,
              Scholarship_Received_Ref: result.Scholarship_Received_Ref,
              Scholarship_Details: result.Scholarship_Details,
              NSS_NSO_YRC_Volunteer_Ref: result.NSS_NSO_YRC_Volunteer_Ref,
              Hostel_Block_Room: result.Hostel_Block_Room
            }
          }
        }).subscribe(({ data }) => {
          
          this.queryRef.refetch();
        });
      }
    });
  }
  filterGender(): PersonReferenceModel {
    return this.gender.filter(l => l.Reference_ID === this.student.Gender_Ref)[0];
  }
  filterCommunity(): PersonReferenceModel {
    return this.community.filter(l => l.Reference_ID === this.student.Community_Ref)[0];
  }
  filterResidentialType(): PersonReferenceModel {
    return this.residentialType.filter(l => l.Reference_ID === this.student.Residential_Type_Ref)[0];
  }
  filterProgramme(): PersonReferenceModel {
    return this.programme.filter(l => l.Reference_ID === this.student.Programme_Ref)[0];
  }
  filterBranch(): PersonReferenceModel {
    return this.branch.filter(l => l.Reference_ID === this.student.Branch_Ref)[0];
  }
  filterRegistrationMode(): PersonReferenceModel {
    return this.registrationMode.filter(l => l.Reference_ID === this.student.Registration_Mode_Ref)[0];
  }
  filterBloodGroup(): PersonReferenceModel {
    return this.bloodGroup.filter(l => l.Reference_ID === this.student.Blood_Group_Ref)[0];
  }
  filterAdmissionCategory(): PersonReferenceModel {
    return this.admissionCategory.filter(l => l.Reference_ID === this.student.Admission_Category_Ref)[0];
  }
  filterScholarshipReceived(): PersonReferenceModel {
    return this.scholarshipReceived.filter(l => l.Reference_ID === this.student.Scholarship_Received_Ref)[0];
  }
  filterVolunteer(): PersonReferenceModel {
    return this.volunteer.filter(l => l.Reference_ID === this.student.NSS_NSO_YRC_Volunteer_Ref)[0];
  }
  filterFA():PersonModel{
    return this.facultyAdvisors.filter(l =>l.Person_ID === this.student.FA)[0];
  }
  openImageUpload(){
    let dialogRef = this.dialog.open(ImageModelComponent,{ 
      data: {
        photoURL:this.photoURL
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      
      this.photoURL=this.photoURL;
      this.queryRef.refetch();
    });
  }
}