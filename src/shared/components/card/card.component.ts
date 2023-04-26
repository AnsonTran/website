import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'flex flex-col shadow-xl border rounded-lg hover:scale-105 delay-75 transition'
  }
})
export class CardComponent {
  @Input() title: String = '';
  @Input() description: String = '';
  @Input() image!: String;
}
