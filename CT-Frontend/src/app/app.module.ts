import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HighchartsChartModule } from 'highcharts-angular';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { EventsComponent } from './events/events.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { DetailsComponent } from './events/details/details.component';
import { PlacementsComponent } from './activities/placements/placements.component';
import { ContactComponent } from './contact/contact.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { PublicationsListComponent } from './research/publications/publications-list/publications-list.component';
import { ProjectsComponent } from './research/projects/projects.component';
import { SupervisorsComponent } from './research/supervisors/supervisors.component';
import { StaffsComponent } from './people/staffs/staffs.component';
import { ScholarComponent } from './people/scholar/scholar.component';
import { ScholarListComponent } from './people/scholar/scholar-list/scholar-list.component';
import { StudentComponent } from './people/student/student.component';
import { AcademicsComponent } from './academics/academics.component';
import { PhdComponent } from './academics/phd/phd.component';
import { AnnouncementComponent } from './general/announcement/announcement.component';
import { NoDataComponent } from './general/no-data/no-data.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { ThesisComponent } from './research/thesis/thesis.component';
import { ThesisListComponent } from './research/thesis/thesis-list/thesis-list.component';
import { ProfileComponent } from './people/staffs/profile/profile.component';
import { VisionMissionComponent } from './general/vision-mission/vision-mission.component';
import { IcoacComponent } from './events/icoac/icoac.component';
import { AssociationComponent } from './activities/association/association.component';
import { LoginModalComponent } from './navbar/login-modal/login-modal.component';
import { MenubarComponent } from './navbar/menubar/menubar.component';
import { AcademicsPipe } from './academics/academics.pipe';
import { BackToTopComponent } from './general/back-to-top/back-to-top.component';
import { AlumniComponent } from './activities/alumni/alumni.component';
import { NonTeachingComponent } from './people/staffs/non-teaching/non-teaching.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FootbarComponent,
    InfrastructureComponent,
    EventsComponent,
    AllEventsComponent,
    DetailsComponent,
    PlacementsComponent,
    ContactComponent,
    PublicationsComponent,
    PublicationsListComponent,
    ProjectsComponent,
    SupervisorsComponent,
    StaffsComponent,
    ScholarComponent,
    ScholarListComponent,
    StudentComponent,
    AcademicsComponent,
    PhdComponent,
    AnnouncementComponent,
    NoDataComponent,
    PageNotFoundComponent,
    ThesisComponent,
    ThesisListComponent,
    ProfileComponent,
    VisionMissionComponent,
    IcoacComponent,
    AssociationComponent,
    LoginModalComponent,
    MenubarComponent,
    AcademicsPipe,
    BackToTopComponent,
    AlumniComponent,
    NonTeachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    HighchartsChartModule,
    SwiperModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
