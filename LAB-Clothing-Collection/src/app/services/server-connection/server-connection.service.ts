import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IServerData } from '../../models/iserver-data';

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
      .pipe(catchError(
        () => {
          throw new Error('Failed to receive Server Data');
        },
      ), retry({ count: 2, delay: 500 }));
  }
}
