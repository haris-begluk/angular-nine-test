import { AuthorizationModule } from './../authorization/authorization.module';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from 'src/authorization/student/student.component';
const routes: Routes = [
  {
      path: '',
      component: StudentComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AuthorizationModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
