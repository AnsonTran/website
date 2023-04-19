import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course, COURSES } from 'notes/index';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  courses:Course[] = COURSES
  course!:string;

  constructor(private route: ActivatedRoute, private router: Router ) {}

  selectCourse(id:String) {
    this.router.navigate(['notes', id])
  }
}
