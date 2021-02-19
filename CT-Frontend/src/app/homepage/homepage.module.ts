import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { HighchartsChartModule } from 'highcharts-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';

import { HomepageRoutingModule } from './homepage-routing.module';
import { AcademicsComponent } from './academics/academics.component';
import { AcademicsPipe } from './academics/academics.pipe';
import { PhdComponent } from './academics/phd/phd.component';
import { AlumniComponent } from './activities/alumni/alumni.component';
import { AssociationComponent } from './activities/association/association.component';
import { PlacementsComponent } from './activities/placements/placements.component';
import { ContactComponent } from './contact/contact.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { DetailsComponent } from './events/details/details.component';
import { EventsComponent } from './events/events.component';
import { IcoacComponent } from './events/icoac/icoac.component';
import { FootbarComponent } from './footbar/footbar.component';
import { AnnouncementComponent } from './general/announcement/announcement.component';
import { BackToTopComponent } from './general/back-to-top/back-to-top.component';
import { NoDataComponent } from './general/no-data/no-data.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { VisionMissionComponent } from './general/vision-mission/vision-mission.component';
import { HomeComponent } from './home/home.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { LoginModalComponent } from './navbar/login-modal/login-modal.component';
import { MenubarComponent } from './navbar/menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScholarListComponent } from './people/scholar/scholar-list/scholar-list.component';
import { ScholarComponent } from './people/scholar/scholar.component';
import { NonTeachingComponent } from './people/staffs/non-teaching/non-teaching.component';
import { ProfileComponent } from './people/staffs/profile/profile.component';
import { StaffsComponent } from './people/staffs/staffs.component';
import { StudentComponent } from './people/student/student.component';
import { ProjectsComponent } from './research/projects/projects.component';
import { PublicationsListComponent } from './research/publications/publications-list/publications-list.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { SupervisorsComponent } from './research/supervisors/supervisors.component';
import { ThesisListComponent } from './research/thesis/thesis-list/thesis-list.component';
import { ThesisComponent } from './research/thesis/thesis.component';

import { HomePageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomePageComponent,
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
        ProjectsComponent,
        StaffsComponent,
        ScholarComponent,
        ScholarListComponent,
        StudentComponent,
        AcademicsComponent,
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
        NonTeachingComponent,
        PublicationsListComponent,
        PhdComponent,
        SupervisorsComponent,
    ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        FormsModule,
        SlickCarouselModule,
        HighchartsChartModule,
        SwiperModule,
        NgxPaginationModule,
    ],
    providers: [Title],
})
export class HomepageModule {}
