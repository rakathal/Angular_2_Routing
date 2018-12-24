import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardUsersComponent } from 'src/app/dashboard/users/dashboard-users.component';
import { DashboardUsersHomeComponent } from 'src/app/dashboard/users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from 'src/app/dashboard/users/dashboard-user-details.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardUsersHomeComponent,
    DashboardUserDetailsComponent
  ],
})
export class DashboardModule { }
