import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./homepage/homepage.module').then(
                (mod) => mod.HomepageModule
            ),
    },
    {
        path:'student-details',
        loadChildren: () =>
            import('./student-details/student-details.module').then(
                (mod) => mod.StudentDetailsModule
            ),
        canActivate: [AdminGuard]
    }
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
