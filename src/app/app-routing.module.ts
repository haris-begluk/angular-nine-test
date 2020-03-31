import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  
];
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
