import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    {    path:'onewaybinding', component:OnewaybindingComponent},
    { path:'twowaybinding', component:TwowaybindingComponent},
    {path:'calculator',component:CalculatorComponent}
];
