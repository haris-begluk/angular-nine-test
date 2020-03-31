import { SignoutRedirectCallbackComponent } from './components/redirect-callbacks/signout-redirect-callback.component';
import { SigninRedirectCallbackComponent } from './components/redirect-callbacks/signin-redirect-callback.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent }
];
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
