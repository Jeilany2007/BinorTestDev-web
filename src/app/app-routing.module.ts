import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';


const routes: Routes = [
  {
    path:"consultation",component:ConsultationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
