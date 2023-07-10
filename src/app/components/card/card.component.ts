import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'flex flex-col' }
})
export class CardComponent {
  @Input() title: String = '';
  @Input() description: String = '';
  @Input() image!: String;
}
