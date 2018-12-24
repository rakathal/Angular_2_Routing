import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardUsersHomeComponent } from 'src/app/dashboard/users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from 'src/app/dashboard/users/dashboard-user-details.component';
import { DashboardUsersComponent } from 'src/app/dashboard/users/dashboard-users.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
