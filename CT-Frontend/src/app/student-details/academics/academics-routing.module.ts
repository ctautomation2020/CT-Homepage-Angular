import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcademicsComponent } from "./academics.component";
import { AssessmentListComponent } from "./assessment-list/assessment-list.component";
import { AssessmentComponent } from "./assessment/assessment.component";
import { AttendenceComponent } from "./attendence/attendence.component";
import { CourseFeaturesComponent } from "./course-features/course-features.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { SessionComponent } from "./session/session.component";
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { MaterialsComponent } from './materials/materials.component';
import { InternalsComponent } from './internals/internals.component';

const routes: Routes =  [
  {
    path: '',
    component: AcademicsComponent,
    children: [
      {
        path: '',
        component: SessionComponent
      },
      {
        path: 'course-list/:reference_id',
        component: CourseListComponent
      },
      {
        path: 'course-features/:cregst_id',
        component: CourseFeaturesComponent
      },
      {
        path: 'assessment-list/:cregst_id',
        component: AssessmentListComponent
      },
      {
        path: 'assessment/:assess_num/:cregst_id',
        component: AssessmentComponent
      },
      {
        path: 'attendence/:cregst_id',
        component: AttendenceComponent
      },
      {
        path: 'assignment-list/:cregst_id',
        component: AssignmentListComponent
      },
      {
        path: 'assignment/:assign_num/:cregst_id',
        component: AssignmentComponent
      },
      {
        path: 'materials/:cregst_id',
        component: MaterialsComponent
      },
      {
        path: 'internals/:cregst_id',
        component: InternalsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule {

}
