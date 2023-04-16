import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  courses = [
    { title: "Algorithms", description: "Test", image: "https://images8.alphacoders.com/130/1309407.jpg" },
    { title: "Algorithms", description: "Test", image: "https://images8.alphacoders.com/130/1309407.jpg" },
    { title: "Algorithms", description: "Test", image: "https://images8.alphacoders.com/130/1309407.jpg" },
    { title: "Algorithms", description: "Test", image: "https://images8.alphacoders.com/130/1309407.jpg" },
  ]

}
