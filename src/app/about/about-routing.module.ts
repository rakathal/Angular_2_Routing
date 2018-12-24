import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { AboutUserComponent } from 'src/app/about/about-user/about-user.component';
import { NgModule } from '@angular/core';
import { AboutSectionComponent } from 'src/app/about/about-section.component';

// const appRoutes: Routes = [
//     { path: 'about', component: AboutComponent },
//     { path: 'about/:username', component: AboutUserComponent },
// ];

const appRoutes: Routes = [
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent
            },
            {
                path: ':username',
                component: AboutUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
