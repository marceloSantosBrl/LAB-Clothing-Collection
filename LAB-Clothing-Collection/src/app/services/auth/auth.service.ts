import { Injectable } from '@angular/core';
import { IUserCredentials } from '../../models/i-user-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserValid(incomingCredential: IUserCredentials): boolean {
    const credentialsArr = this.getUsersCredentials();
    let credentialsMatch = false;
    for (let i = 0; i < credentialsArr.length; i += 1) {
      credentialsMatch = credentialsArr[i].email === incomingCredential.email
        && credentialsArr[i].password === incomingCredential.password;
      if (credentialsMatch) {
        return true;
      }
    }
    return false;
  }

  public addUserCredential(credential: IUserCredentials):void {
    const newCredentials = this.getUsersCredentials();
    newCredentials.push(credential);
    window.localStorage
      .setItem('credentials', JSON.stringify(newCredentials));
  }

  private getUsersCredentials(): IUserCredentials[] {
    const credentialsStr = window.localStorage
      .getItem('credentials')
      ?? '[{"email":"marcelo@senai.com",'
      + '"password":"123456789",'
      + '"username":"marcelo"}]';
    return JSON.parse(credentialsStr);
  }

  public get isLogged(): boolean {
    return window.localStorage
      .getItem('logged') === 'true';
  }

  private set isLogged(loggingStatus: boolean) {
    window.localStorage.setItem('logged', loggingStatus.toString());
  }

  public attemptLogin(incomingCredentials: IUserCredentials): void {
    if (this.isUserValid(incomingCredentials)) {
      this.isLogged = true;
    }
  }

  public logoff(): void {
    this.isLogged = false;
  }
}
