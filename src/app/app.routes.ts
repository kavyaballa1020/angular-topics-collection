// src/app/app.routes.ts
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'onewaybinding', component: OnewaybindingComponent },
    { path: 'twowaybinding', component: TwowaybindingComponent, canActivate: [AuthGuard] }, // Add the guard here
    { path: 'calculator', component: CalculatorComponent },
    { path: 'services', component: UserListComponent },
    {path : 'login',component:LoginComponent}
];
