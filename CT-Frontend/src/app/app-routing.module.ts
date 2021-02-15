import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { AcademicsComponent } from './academics/academics.component';
import { DetailsComponent } from './events/details/details.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ScholarComponent } from './people/scholar/scholar.component';
import { StaffsComponent } from './people/staffs/staffs.component';
import { StudentComponent } from './people/student/student.component';
import { PlacementsComponent } from './activities/placements/placements.component';
import { ProjectsComponent } from './research/projects/projects.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { SupervisorsComponent } from './research/supervisors/supervisors.component';
import { PhdComponent } from './academics/phd/phd.component';
import { AnnouncementComponent } from './general/announcement/announcement.component';
import { ThesisComponent } from './research/thesis/thesis.component';
import { ProfileComponent } from './people/staffs/profile/profile.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { VisionMissionComponent } from './general/vision-mission/vision-mission.component';
import { IcoacComponent } from './events/icoac/icoac.component';
import { AssociationComponent } from './activities/association/association.component';
import { StaffsResolver } from './people/staffs/staffs.resolver';
import { PublicationsResolver } from './research/publications/publications.resolver';
import { AlumniComponent } from './activities/alumni/alumni.component';
import { AlumniResolver } from './activities/alumni/alumni.resolver';
import { ReferenceResolver } from './general/reference.resolver';
import { NonTeachingComponent } from './people/staffs/non-teaching/non-teaching.component';
import { ProjectsResolver } from './research/projects/projects.resolver';
import { StudentResolver } from './people/student/student.resolver';
import { SupervisorsResolver } from './research/supervisors/supervisors.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'announcements',
        component: AnnouncementComponent,
    },
    {
        path: 'vision-mission',
        component: VisionMissionComponent,
    },
    {
        path: 'infrastructure',
        component: InfrastructureComponent,
    },
    {
        path: 'events',
        component: EventsComponent,
    },
    {
        path: 'events/all-events',
        component: AllEventsComponent,
    },
    {
        path: 'events/details/:year',
        redirectTo: 'events/all-events',
        pathMatch: 'full',
    },
    {
        path: 'events/details/:year/:event-id',
        component: DetailsComponent,
    },
    {
        path: 'events/icoac/:year',
        component: IcoacComponent,
    },
    {
        path: 'activities/placements',
        component: PlacementsComponent,
    },
    {
        path: 'activities/association',
        component: AssociationComponent,
    },
    {
        path: 'activities/alumni',
        component: AlumniComponent,
        resolve: {
            data: AlumniResolver,
        },
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'research/publications',
        component: PublicationsComponent,
        resolve: {
            data: PublicationsResolver,
            ref: ReferenceResolver,
        },
    },
    {
        path: 'research/projects',
        component: ProjectsComponent,
        resolve: {
            data: ProjectsResolver,
        },
    },
    {
        path: 'research/supervisors',
        component: SupervisorsComponent,
        resolve: {
            data: SupervisorsResolver,
            ref: ReferenceResolver,
        },
    },
    {
        path: 'research/thesis',
        component: ThesisComponent,
    },
    {
        path: 'people/staffs',
        component: StaffsComponent,
        resolve: {
            data: StaffsResolver,
            ref: ReferenceResolver,
        },
    },
    {
        path: 'people/staffs/profile/:id',
        component: ProfileComponent,
        resolve: {
            data: StaffsResolver,
            ref: ReferenceResolver,
        },
    },
    {
        path: 'people/staffs/non-teaching',
        component: NonTeachingComponent,
    },
    {
        path: 'people/scholar',
        component: ScholarComponent,
    },
    {
        path: 'people/student/:type',
        component: StudentComponent,
        resolve: {
            data: StudentResolver,
        },
    },
    {
        path: 'people/student/:type/:year',
        component: StudentComponent,
        resolve: {
            data: StudentResolver,
        },
    },
    {
        path: 'people/student',
        redirectTo: 'people/student/be',
        pathMatch: 'full',
    },
    {
        path: 'academics/phd',
        component: PhdComponent,
    },
    {
        path: 'academics/:type',
        component: AcademicsComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 120],
    relativeLinkResolution: 'legacy',
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
