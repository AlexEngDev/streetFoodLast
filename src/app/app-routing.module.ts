import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PaniniComponent } from './panini/panini.component';
import { MenuStreetFoodComponent } from './menu-street-food/menu-street-food.component';
import { authGuard } from './auth.guard';
import { NoAuthComponent } from './no-auth/no-auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pizza', component: PizzeComponent},
  {path: 'panini', component: PaniniComponent},
  {path: 'menu', component: MenuStreetFoodComponent, canActivate: [authGuard]},
  {path: 'auth', component: NoAuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
