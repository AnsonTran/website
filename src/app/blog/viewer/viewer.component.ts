import { ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { COURSES, Course } from 'notes';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  course!: Course;
  page!: string;
  path!: string;

  constructor(private route: ActivatedRoute, private markdownService:MarkdownService) {
    this.route.params.subscribe((param: Params) => {
      this.course = COURSES.find((element) => element.id === param['course']) || COURSES[0]; // TODO: Proper error handling
      this.page = param['page'];
      if (this.course) this.path = 'notes/' + this.course.id + '/' + this.page;
    });
  }

  ngOnInit() {
    this.markdownService.renderer.image = (href: string|null, title:string|null, text:string|null) => {
      let html:string = '<p><img';
      html = href === null ? html : html.concat(' src="pictures/', this.course.id, '/', href, '"');
      html = text === null ? html : html.concat(' alt="', text, '"');
      html = title === null ? html : html.concat(' title="', title, '"');
      html.concat('></p>');
      return html;
    };
  }

  onLoad(event:any) {
  }

  onError(event:any){
  }
}
