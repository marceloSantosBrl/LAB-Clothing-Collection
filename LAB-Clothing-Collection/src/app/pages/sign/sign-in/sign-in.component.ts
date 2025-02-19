import {
  Component, OnDestroy, TemplateRef, ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IUserCredentials } from '../../../models/i-user-credentials';
import { AuthService } from '../../../services/auth/auth.service';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnDestroy {
  @ViewChild('modal', { read: TemplateRef }) public modalTemplate!: TemplateRef<any>;

  public delGetSubscription!: Subscription;

  constructor(
    private readonly _auth: AuthService,
    private readonly _server: ServerConnectionService,
    private readonly _router: Router,
    private readonly _modal: NgbModal,
  ) { }

  ngOnDestroy() {
    if (this.delGetSubscription) {
      this.delGetSubscription.unsubscribe();
    }
  }

  private loginHandler(
    formCredentials: IUserCredentials,
    credentialsArray: IUserCredentials[],
  ): void {
    this._auth.attemptLogin(formCredentials, credentialsArray);
    if (this._auth.isLogged) {
      this._router.navigate(['/home']);
    } else {
      this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
    }
  }

  public eventHandler(formCredentials: IUserCredentials): void {
    this.delGetSubscription = this._server
      .getCredentials()
      .subscribe({
        next: (value) => {
          this.loginHandler(formCredentials, value.credentials);
        },
        error: () => alert('Falha ao comunicar com o servidor'),
      });
  }
}
