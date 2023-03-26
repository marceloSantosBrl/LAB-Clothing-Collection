import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('data') public data = {
    message: '',
    number: 0,
  };

  @Input('complete') public complete: boolean = false;
}
