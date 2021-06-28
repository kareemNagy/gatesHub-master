import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [HeaderComponent, NavigationModule]
})
export class HeaderModule { }
