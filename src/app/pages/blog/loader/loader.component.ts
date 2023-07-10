import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Course, COURSES } from 'src/assets/notes';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private course!: Course | undefined;
  private page!: String;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe((param:Params) => {
      this.course = COURSES.find(element => element.id == param['course']);
      if (this.course !== undefined) {
        this.page = this.course.files[0]; // Must have at least one file
        this.router.navigate([this.page], { relativeTo: this.route });
      }
    });
  }
}
