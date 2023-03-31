import {
  Component, OnDestroy, TemplateRef, ViewChild,
} from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUserCredentials } from '../../../models/i-user-credentials';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { IServerCredentials } from '../../../models/i-server-credentials';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  @ViewChild('modal', { read: TemplateRef }) modalTemplate!: TemplateRef<any>;

  public modalMessage:string = '';

  public delSubmitSubscription!: Subscription;

  constructor(
    private readonly _server: ServerConnectionService,
    private readonly _modal: NgbModal,
  ) { }

  ngOnDestroy() {
    if (this.delSubmitSubscription) {
      this.delSubmitSubscription.unsubscribe();
    }
  }

  private sendCredentials(
    serverCredentials: IServerCredentials,
    incomingCredentials: IUserCredentials,
  ): Observable<any> {
    const credentialsArray = serverCredentials.credentials;
    const credentialsMatch = credentialsArray
      .filter((credential) => incomingCredentials.email === credential.email)
      .length;
    if (credentialsMatch !== 0) {
      throw new Error('Email already in use');
    }
    credentialsArray.push(incomingCredentials);
    return this._server.updateUserCredentials(credentialsArray);
  }

  private getModalError(message: string): string {
    return message === 'Email already in use'
      ? 'Email já está em uso' : 'Falha ao se conectar com o servidor';
  }

  public submitHandler(credentials: IUserCredentials): void {
    this.delSubmitSubscription = this._server
      .getCredentials()
      .pipe(switchMap((serverCredentials) => this
        .sendCredentials(serverCredentials, credentials)))
      .subscribe({
        next: () => {
          this.modalMessage = 'Conta  cadastrada com sucesso';
          this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
        },
        error: (err) => {
          this.modalMessage = this.getModalError(err.message);
          this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
        },
      });
  }
}
