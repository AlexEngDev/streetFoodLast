import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PaniniComponent } from './panini/panini.component';
import { HomeComponent } from './home/home.component';
import { MenuStreetFoodComponent } from './menu-street-food/menu-street-food.component';
import { NoAuthComponent } from './no-auth/no-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzeComponent,
    PaniniComponent,
    HomeComponent,
    MenuStreetFoodComponent,
    NoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
