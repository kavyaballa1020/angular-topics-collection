import { Routes } from '@angular/router';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BindingComponent } from './components/binding/binding.component'; // Parent component
import { AuthGuard } from './guards/auth.guard';
import { IfelseComponent } from './components/ifelse/ifelse.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgdirectivesComponent } from './components/ngdirectives/ngdirectives.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { CustomerlistComponent } from './components/customer-list/customer-list.component';
import { ParentComponent } from './components/parent/parent.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'binding', 
    component: BindingComponent, 
    children: [
      { path: 'onewaybinding', component: OnewaybindingComponent },
      { path: 'twowaybinding', component: TwowaybindingComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'services', component: UserListComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'ngdirectives' , component:NgdirectivesComponent,
    children:[
      {path:'ifelse',component:IfelseComponent},
      {path:'ngStyle',component:NgstyleComponent}
    ]
  },
  {path:'ngforloop',component:NgforComponent},
  {path:'customer',component:CustomerlistComponent},
  {path:'parent', component:ParentComponent}
];
