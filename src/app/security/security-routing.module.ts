import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {path:"login",component:LoginComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SecurityRouterModule { }
