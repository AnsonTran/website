import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  courses = [
    { id: "CSCC73",
      title: "Algorithm Design and Analysis",
      description: "An introduction to the main algorithmic paradigms. Greedy, divide-and-conquer, and dynamic programming",
      image: "https://images8.alphacoders.com/130/1309407.jpg"
    },
    { id: "CSCC69",
      title: "Operating Systems",
      description: "Test",
      image: "https://images5.alphacoders.com/131/1311254.png"
    },
  ]

  selectCourse(id:String) {
    console.log(id);
  }
}
