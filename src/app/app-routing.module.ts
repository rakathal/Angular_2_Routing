import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { AboutUserComponent } from 'src/app/about/about-user/about-user.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'about',
    loadChildren: 'src/app/about/about.module#AboutModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
