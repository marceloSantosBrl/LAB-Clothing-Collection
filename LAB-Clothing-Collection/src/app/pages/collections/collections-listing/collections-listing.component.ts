import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { IServerData } from '../../../models/i-server-data';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';

@Component({
  selector: 'app-collections-listing',
  templateUrl: './collections-listing.component.html',
  styleUrls: ['./collections-listing.component.scss'],
})
export class CollectionsListingComponent implements OnInit, OnDestroy {
  public readonly colsNames: string[] = ['Coleção',
    'Responsável', 'Estação - Lançamento', 'Modelos', 'Orçamento'];

  public mode:string = 'collection-listing';

  private delGetSubscription!: Subscription;

  public serverData!: IServerData;

  constructor(
    private readonly _serve: ServerConnectionService,
    private readonly _router: Router,
  ) { }

  ngOnInit() {
    this.delGetSubscription = this._serve.getServerData()
      .subscribe({
        next: (data) => {
          this.serverData = data;
        },
        error: () => alert('Erro ao conectar-se com o servidor'),
      });
  }

  ngOnDestroy() {
    this.delGetSubscription.unsubscribe();
  }

  clickHandler(collectionName: string) {
    this._router.navigate(
      ['/collection-editing'],
      { queryParams: { name: collectionName } },
    );
  }
}
