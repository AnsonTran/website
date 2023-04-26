import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
  host: {
    "class" : "fixed h-screen transition-transform",
    "[class.-translate-x-full]" : "hidden"
  }
})
export class SideNavbarComponent {
  hidden:boolean = true;

  toggle() {
    this.hidden = !this.hidden;
  }
}
