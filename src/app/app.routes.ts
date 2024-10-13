import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { UserListComponent } from './components/user-list/user-list.component';
export const routes: Routes = [
    {    path:'onewaybinding', component:OnewaybindingComponent},
    { path:'twowaybinding', component:TwowaybindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'services',component:UserListComponent}
];
