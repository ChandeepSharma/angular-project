import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisgterComponent } from './regisgter/regisgter.component';
import { SharedModulesModule } from '../shared/shared-modules.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisgterComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule
  ]
})
export class PagesModule { }
