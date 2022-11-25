import { Component, Input } from '@angular/core';

@Component({
  selector: 'kb-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() header: string = '';
}
