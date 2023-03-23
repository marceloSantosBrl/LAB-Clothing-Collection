import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IServerData } from '../../models/i-server-data';
import { IUserCredentials } from '../../models/i-user-credentials';
import { IServerCredentials } from '../../models/i-server-credentials';

@Injectable({
  providedIn: 'root',
})
export class ServerConnectionService {
  constructor(
    private readonly _http: HttpClient,
  ) { }

  public getServerData(): Observable<IServerData[]> {
    return this._http.get<IServerData[]>(environment.API_URL)
      .pipe(catchError(
        () => {
          throw new Error('Failed to receive data from the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public updateServerData(serverData: IServerData): Observable<any> {
    return this._http.put(environment.API_URL, serverData)
      .pipe(
        catchError(
          () => {
            throw new Error('Failed to update server Data');
          },
        ),
        retry({ count: 2, delay: 500 }),
      );
  }

  public getCredentials(): Observable<IServerCredentials> {
    return this._http.get<IServerCredentials>(environment.CREDENTIALS_URL)
      .pipe(catchError(
        () => {
          throw new Error('Failed to receive credentials from the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public updateUserCredentials(credentials: IUserCredentials[]): Observable<any> {
    return this._http.put(environment.CREDENTIALS_URL, credentials)
      .pipe(catchError(
        () => {
          throw new Error('Failed to update server credentials');
        },
      ), retry({ count: 2, delay: 500 }));
  }
}
