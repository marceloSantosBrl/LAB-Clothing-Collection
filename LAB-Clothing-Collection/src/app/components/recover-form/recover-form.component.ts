import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-form',
  templateUrl: './recover-form.component.html',
  styleUrls: ['./recover-form.component.scss'],
})
export class RecoverFormComponent {
  @Output('submitEvent') submitEvent = new EventEmitter<string>();

  public emailForm = this._nfb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
  ) { }

  public submitHandler(): void {
    if (this.emailForm.valid) {
      this.submitEvent
        .emit(this.emailForm.controls.email.value);
    }
  }
}
