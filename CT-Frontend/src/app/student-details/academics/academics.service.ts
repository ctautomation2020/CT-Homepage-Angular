import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { AcademicsModel } from './academics.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicsService {
  category = 'Session';
  constructor(private apollo: Apollo) { }

  getSession(reference_id: number) {
    const req = gql`
    query courseReference($data: Course_Reference_Input) {
      courseReference(data: $data) {
        reference_id
        ref_code
        description
      }
    }`;
    return this.apollo.watchQuery({
      query: req,
      variables: {
        data: {
          category: this.category,
          reference_id: reference_id
        }
      }
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.courseReference))));
  }

  getStudentCourses(json){
    const req = gql`
    query studentRegisteredCourses($data: studentRegisteredCoursesQueryInput){
      studentRegisteredCourses(data:$data){
        cregst_id
        course_code
        reg_no
        semester
        group_ref
        session_ref
        course_list{
          title
        }
      }
    }`;
    return  this.apollo.watchQuery<any>({
      query: req,
      variables: {
        data: json
      }
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.studentRegisteredCourses))));
  }

  getStaffDetails(json: any) {
    const req = gql`
    query staffAlloted($data: staffAllotedQueryInput){
      staffAlloted(data:$data){
        sallot_id
        staff_id
        class_room
        student_count
        person{
          First_Name
          Last_Name
          Primary_MailID
          Primary_ContactNumber
        }
      } 
    }`;
    return this.apollo.watchQuery<any>({
      query: req,
      variables: {
        data: json
      }
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.staffAlloted))));
  }

  getAssessmentList(json: any) {
    const req = gql`
    query session_assessments($data: sessionQueryInput!) {
      session_assessments(data: $data)
    }`;
    return  this.apollo
      .watchQuery<any>({
        query: req,
        variables: {
          data: json
        },
        fetchPolicy: 'no-cache'
      }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.session_assessments))));
  }

  getAssessment(query: any) {
    const req = gql`
    query assessment($data: assesmentQueryInput!) {
      assessment(data: $data) {
        cassess_id
        course_code
        group_ref
        session_ref
        assess_num
        question_num
        question_stmt
        blooms_level
        co_num
        marks
        section
      }
    }`;
    return this.apollo
    .watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assessment))));
  }

  isAssessEvaluated(query){
    const req = gql `
    query assessIsEval($data: assesIsEvalQueryInput!){
      assessIsEval(data:$data)
    }`;
    return this.apollo.watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assessIsEval))));
  }

  isAssignEvaluated(query){
    const req = gql `
    query assignIsEval($data: assignIsEvalQueryInput!){
      assignIsEval(data:$data)
    }`;
    return this.apollo.watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assignIsEval))));
  }

  getAssessEvaluation(query: any) {
    const req = gql `
    query assess_evaluation($data: assess_evaluationQueryInput!) {
      assess_evaluation(data: $data) {
        question_num
        mark
      }
    }`;
    return this.apollo.watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assess_evaluation))));
  }

  getAssignmentList(json: any) {
    const req = gql`
    query session_assignments($data: sessionQueryInput!){
      session_assignments(data:$data)
    }`;
    return  this.apollo.watchQuery<any>({
      query: req,
      variables: {
        data: json
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.session_assignments))));
  }

  getAssignment(query: any) {
    const req = gql`
    query assignment($data: assignmentQueryInput!) {
      assignment(data: $data) {
        cassign_id
        course_code
        group_ref
        session_ref
        assign_num
        question_num
        question_stmt
        question_img
        co_num
        marks
        deadline
      }
    }`;
    return this.apollo
    .watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assignment))));
  }

  getAssignEvaluation(query: any) {
    const req = gql `
    query assign_evaluation($data: assign_evaluationQueryInput!) {
      assign_evaluation(data: $data) {
        question_num
        mark
      }
    }`;
    return this.apollo.watchQuery({
      query: req,
      variables: {
        data: query
      },
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result: any) => JSON.parse(JSON.stringify(result.data.assign_evaluation))));
  }

  
}
