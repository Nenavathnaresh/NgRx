import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { authGuard } from './Guard/auth.guard';
import { LoginGuard } from './Guard/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
  {path:"home", component:HomeComponent, canActivate:[authGuard]},
  {path:"games", component:GamesComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
