import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BallotComponent } from './ballot/ballot.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';





const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ballot', component: BallotComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  // {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: '',redirectTo: 'home',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
