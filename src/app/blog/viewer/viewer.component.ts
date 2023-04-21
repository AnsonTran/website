import { Component } from '@angular/core';
import { Course, COURSES } from 'notes';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {

  onLoad(event:any) {
    console.log(event)
  }

  onError(event:any){
    console.log(event)
  }
}
