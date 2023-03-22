import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICollection } from '../../models/ICollection';

@Injectable({
  providedIn: 'root',
})
export class ServerConnectionService {
  constructor(
    private readonly _http: HttpClient,
  ) { }

  public getAllCollections(): Observable<ICollection[]> {
    return this._http.get<ICollection[]>(environment.API_URL)
      .pipe(catchError(
        () => {
          throw new Error('Failed to receive data from the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public getCollection(id: string | number): Observable<ICollection[]> {
    return this._http.get<ICollection[]>(`${environment.API_URL}/${id}`)
      .pipe(catchError(
        () => {
          throw new Error('Failed to receive data from the server');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public updateCollection(collectionId: string | number, collection: ICollection): Observable<any> {
    return this._http.put(`${environment.API_URL}/${collectionId}`, collection)
      .pipe(catchError(
        () => {
          throw new Error('collection not found');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public postCollection(collection: ICollection): Observable<any> {
    return this._http.post(environment.API_URL, collection)
      .pipe(catchError(
        () => {
          throw new Error('failed to add collection');
        },
      ), retry({ count: 2, delay: 500 }));
  }

  public deleteCollection(id: string | number): Observable<any> {
    return this._http.delete(`${environment.API_URL}/${id}`)
      .pipe(catchError(
        () => {
          throw new Error('failed to delete resource');
        },
      ), retry({ count: 2, delay: 500 }));
  }
}
