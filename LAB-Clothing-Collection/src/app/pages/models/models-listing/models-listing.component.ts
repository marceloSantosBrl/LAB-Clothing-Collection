import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { IServerData } from '../../../models/i-server-data';

@Component({
  selector: 'app-models-listing',
  templateUrl: './models-listing.component.html',
  styleUrls: ['./models-listing.component.scss'],
})
export class ModelsListingComponent implements OnInit, OnDestroy {
  public readonly colsNames: string[] = ['ModeloID',
    'Nome do Modelo', 'Responsável', 'Coleção'];

  public mode:string = 'model-listing';

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

  clickHandler(modelName: string) {
    this._router.navigate(
      ['/models-editing'],
      { queryParams: { name: modelName } },
    );
  }
}
