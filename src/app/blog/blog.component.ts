import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course, COURSES } from 'notes';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  courses:Course[] = COURSES

  constructor(private route: ActivatedRoute, private router: Router ) {}

  selectCourse(id:String) {
    this.router.navigate([id], { relativeTo: this.route })
  }
}
