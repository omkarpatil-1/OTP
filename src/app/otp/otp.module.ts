import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessComponent } from './success/success.component';
import { RouterModule } from '@angular/router';
import { VerifyComponent } from './verify/verify.component';





@NgModule({
  declarations: [
  
  
    DashboardComponent,
          SuccessComponent,
          VerifyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],
  exports:[
    DashboardComponent,
    SuccessComponent
  ]
 
})
export class OtpModule { }
