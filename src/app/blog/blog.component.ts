import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  courses = [
    { title: "Algorithm Design and Analysis",
      description: "An introduction to the main algorithmic paradigms. Greedy, divide-and-conquer, and dynamic programming",
      image: "https://images8.alphacoders.com/130/1309407.jpg"
    },
    { title: "Operating Systems",
      description: "Test",
      image: "https://images8.alphacoders.com/130/1309407.jpg"
    },
  ]
}
