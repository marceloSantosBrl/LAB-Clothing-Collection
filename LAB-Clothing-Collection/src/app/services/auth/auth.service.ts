import { Injectable } from '@angular/core';
import { IUserCredentials } from '../../models/i-user-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserValid(
    incomingCredential: IUserCredentials,
    validCredentials: IUserCredentials[],
  ): boolean {
    let credentialsMatch = false;
    for (let i = 0; i < validCredentials.length; i += 1) {
      credentialsMatch = validCredentials[i].email === incomingCredential.email
        && validCredentials[i].password === incomingCredential.password;
      if (credentialsMatch) {
        return true;
      }
    }
    return false;
  }

  public addUserCredential(
    credential: IUserCredentials,
    previousCredentials: IUserCredentials[],
  ):IUserCredentials[] {
    previousCredentials.push(credential);
    return previousCredentials;
  }

  public get isLogged(): boolean {
    return window.localStorage
      .getItem('logged') === 'true';
  }

  private set isLogged(loggingStatus: boolean) {
    window.localStorage.setItem('logged', loggingStatus.toString());
  }

  public attemptLogin(
    incomingCredentials: IUserCredentials,
    validCredentials: IUserCredentials[],
  ): void {
    if (this.isUserValid(incomingCredentials, validCredentials)) {
      this.isLogged = true;
    }
  }

  public logoff(): void {
    this.isLogged = false;
  }
}
