import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatesHubComponent } from './gates-hub.component';



@NgModule({
  declarations: [
    GatesHubComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GatesHubComponent]
})
export class GatesHubModule { }
