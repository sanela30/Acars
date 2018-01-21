import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarService } from './service/car.service';
import { CarFormComponent } from './components/car-form/car-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'add', component: CarFormComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    NavBarComponent,
    CarFormComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
