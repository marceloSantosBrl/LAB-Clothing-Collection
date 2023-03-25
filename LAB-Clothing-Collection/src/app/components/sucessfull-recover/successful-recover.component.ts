import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-recover',
  templateUrl: './successful-recover.component.html',
  styleUrls: ['./successful-recover.component.scss'],
})
export class SuccessfulRecoverComponent {
  @Input('email') public email:string = '';

  @Output('backSignal') public backSignal = new EventEmitter<any>();

  constructor(
    private readonly _router: Router,
  ) { }

  public backHandler(): void {
    this.backSignal.emit();
  }

  public navigateLogin():void {
    this._router.navigate(['/login']);
  }
}
