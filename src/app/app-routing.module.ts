import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './otp/dashboard/dashboard.component';
import { SuccessComponent } from './otp/success/success.component';
import { VerifyComponent } from './otp/verify/verify.component';


const routes: Routes = [
  {
    path:'',component:DashboardComponent,pathMatch:'full'
  },
  {
    path:'verify',component:VerifyComponent
  },
  {
    path:'success',component:SuccessComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
