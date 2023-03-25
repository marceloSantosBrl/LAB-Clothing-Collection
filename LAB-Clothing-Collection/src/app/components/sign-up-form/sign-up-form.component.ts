import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { IUserCredentials } from '../../models/i-user-credentials';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  @Output('submitEvent') submitEvent = new EventEmitter<IUserCredentials>();

  public readonly signUpForm = this._nfb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    businessName: ['', [Validators.required, Validators.minLength(3)]],
    cnpj: ['', [Validators.required,
      Validators.minLength(14), Validators.pattern(/^[0-9 .]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
  ) { }

  public arePasswordsEquals(): boolean {
    return this.signUpForm.controls.password.value
      === this.signUpForm.controls.confirmPassword.value;
  }

  public submitHandler(): void {
    if (this.signUpForm.valid && this.arePasswordsEquals()) {
      this.submitEvent.emit({
        email: this.signUpForm.controls.email.value,
        password: this.signUpForm.controls.password.value,
      });
    }
  }
}
