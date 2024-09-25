// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onewaybinding', component: OnewaybindingComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent }, // Correct path
  { path: 'calculator', component: CalculatorComponent },
  { path: 'services', component: UserListComponent },
  { path: 'login', component: LoginComponent }
];
