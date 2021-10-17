import { AuthGardGuard } from './../security/auth-gard.guard';
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LacamentSeachComponent } from "./lacament-seach/lacament-seach.component";
import { LancamentComponent } from "./lancament/lancament.component";

const routes: Routes= [
  {path: 'lancament', component:LacamentSeachComponent,
  canActivate: [AuthGardGuard],data:{roles:['ROLE_PESQUISA_LANCAMENTO']}
},

  {
    path: 'lancament/new', component:LancamentComponent,
  canActivate: [AuthGardGuard],data:{roles:['ROLE_CADASTRAR_LANCAMENTO']}
},

  {path:"lancament/:id",component:LancamentComponent
  ,canActivate: [AuthGardGuard],data:{roles:['ROLE_CADASTRAR_LANCAMENTO']}
},
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LacamentRoutingModule { }
