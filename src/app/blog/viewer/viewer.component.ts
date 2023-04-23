import { ActivatedRoute, Params } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  private course!: String;
  private page!: String;
  path!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param: Params) => {
      this.course = param['course'];
      this.page = param['page'];
    });
    this.path = 'notes/' + this.course + '/' + this.page;
  }

  onLoad(event:any) {
  }

  onError(event:any){
  }
}
