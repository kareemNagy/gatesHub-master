import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeAreComponent } from './who-we-are.component';



@NgModule({
  declarations: [
    WhoWeAreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[WhoWeAreComponent]
})
export class WhoWeAreModule { }
