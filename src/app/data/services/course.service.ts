import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from '../types/course';
import data from '../json/data.json';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = data.courses;

  getCourses(): Observable<Array<Course>>{
    return of(this.courses);
  }

  getCourseByIndex(idx: number): Observable<Course> {
    return of(this.courses[idx]);
  }

  getCourseById(id: string): Observable<Course> {
    const filter = this.courses.filter((item) => item.id == id);
    return of(filter[0]);
  }
}