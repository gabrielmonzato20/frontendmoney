import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotAuthorizeComponent } from './core/page-not-authorize.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes= [
  {path:'',redirectTo:"lancament",pathMatch:"full"},
  {path:"pageNotFound",component:PageNotFoundComponent},
  {path:"notauthorize",component:PageNotAuthorizeComponent},
  {path:"**",redirectTo:"pageNotFound"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
