import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import { StudentComponent } from './student/student.component';
import { StudentModelComponent } from './student/student-model/student-model.component';
import { ImageModelComponent } from './student/image-model/image-model.component';
import { FamilyComponent } from './family/family.component';
import { FamilyModelComponent } from './family/family-model/family-model.component';
import { MarkComponent } from './mark/mark.component';
import { EventComponent } from './event/event.component';
import { EventModelComponent } from './event/event-model/event-model.component';
import { InternshipComponent } from './internship/internship.component';
import { InternshipModelComponent } from './internship/internship-model/internship-model.component';
import { PlacementsComponent } from './placements/placements.component';
import { PlacementsModelComponent } from './placements/placements-model/placements-model.component';
import { HigherstudiesModelComponent } from './placements/higherstudies-model/higherstudies-model.component';
import { AwardsComponent } from './awards/awards.component';
import { AwardsModelComponent } from './awards/awards-model/awards-model.component';
import { ReportComponent } from './report/report.component';
import { MarkModelComponent } from './mark/mark-model/mark-model.component'


@NgModule({
  declarations: [
    NavComponent,
    StudentDetailsComponent,
    StudentComponent,
    StudentModelComponent,
    ImageModelComponent,
    FamilyComponent,
    FamilyModelComponent,
    MarkComponent,
    EventComponent,
    EventModelComponent,
    InternshipComponent,
    InternshipModelComponent,
    PlacementsComponent,
    PlacementsModelComponent,
    HigherstudiesModelComponent,
    AwardsComponent,
    AwardsModelComponent,
    ReportComponent,
    MarkModelComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StudentDetailsRoutingModule,
    PdfViewerModule
  ]
})
export class StudentDetailsModule{

}
