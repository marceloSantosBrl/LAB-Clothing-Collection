import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { IUserCredentials } from '../../models/i-user-credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output('submitEvent') submitEvent = new EventEmitter<IUserCredentials>();

  public insertedCredentials = this._nfb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
  ) { }

  public OnSubmit() {
    if (this.insertedCredentials.valid) {
      this.submitEvent.emit(
        this.insertedCredentials.value as IUserCredentials,
      );
    }
  }
}
