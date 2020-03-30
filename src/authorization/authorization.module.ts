import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { StudentService } from './Services/student.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[StudentService],
  declarations: [
    StudentComponent,
    StudentListComponent, 
    StudentListItemComponent
  ]
})
export class AuthorizationModule { }
