import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import { AboutUserComponent } from 'src/app/about/about-user/about-user.component';
import { AboutRoutingModule } from 'src/app/about/about-routing.module';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from 'src/app/about/about-section.component';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ]
})

export class AboutModule { }
