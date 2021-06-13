import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MainBannerModule } from '../components/main-banner/main-banner.module';
import { WhoWeAreModule } from '../components/who-we-are/who-we-are.module';
import { GatesHubModule } from '../components/gates-hub/gates-hub.module';
import { MeetTeamModule } from '../components/meet-team/meet-team.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MainBannerModule,
    WhoWeAreModule,
    GatesHubModule,
    MeetTeamModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
