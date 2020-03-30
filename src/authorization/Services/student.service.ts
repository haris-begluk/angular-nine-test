import { Injectable } from '@angular/core';
import { Student } from '../Models/student.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      id: 1,
      name: 'Al Capone',
      enrollNumber: 110470116021,
      college: 'VVP Engineering College',
      university: 'GTU'
    },
    {
      id: 2,
      name: 'Don Vito Corleone',
      enrollNumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU'
    },
    {
      id: 3,
      name: 'Pablo Escobar',
      enrollNumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU'
    }
  ];
  constructor() {}

  public getStudents(): any {
    const studentObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return studentObservable;
  }
}
