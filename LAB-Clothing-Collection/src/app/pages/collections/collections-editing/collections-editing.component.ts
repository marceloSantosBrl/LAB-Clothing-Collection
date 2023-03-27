import {
  Component, OnDestroy, OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { IServerData } from '../../../models/i-server-data';
import { ICollection } from '../../../models/i-collection';
import { ServerData } from '../../../../utils/classes/server-data';

@Component({
  selector: 'app-collections-editing',
  templateUrl: './collections-editing.component.html',
  styleUrls: ['./collections-editing.component.scss'],
})
export class CollectionsEditingComponent implements OnInit, OnDestroy {
  public serverHelper = ServerData;

  public serverData!: IServerData;

  public collectionName: string = '';

  public delGetSubscription!: Subscription;

  public delPutSubscription!: Subscription;

  public delDeleteSubscription!: Subscription;

  public modalMessage: string = '';

  @ViewChild('modal', { read: TemplateRef }) public modalTemplate!: TemplateRef<any>;

  constructor(
    private readonly _server: ServerConnectionService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _modal: NgbModal,
  ) { }

  public getNamedCollection(
    collectionName: string | null,
    serverData: IServerData,
  ): ICollection | undefined {
    if (collectionName) {
      return serverData.collections.find((element) => element.name === collectionName);
    }
    return undefined;
  }

  ngOnInit() {
    this.collectionName = this._activatedRoute.snapshot.queryParamMap.get('name') ?? '';
    this.delGetSubscription = this._server.getServerData()
      .subscribe({
        next: (data) => {
          this.serverData = data;
        },
        error: () => alert('Falha ao se conectar com o servidor'),
      });
  }

  public handleSend(collection: ICollection): void {
    let deletedCollectionData: IServerData;
    let newServerData: IServerData;
    try {
      deletedCollectionData = this.serverHelper
        .deleteCollection(this.collectionName, this.serverData);
      newServerData = this.serverHelper.addCollection(collection, deletedCollectionData);
    } catch (e) {
      this.openModal('Coleção Não existe');
      return;
    }
    this.delPutSubscription = this._server.updateServerData(newServerData)
      .subscribe({
        next: () => {
          this.openModal('Coleção Alterada com sucesso');
        },
        error: () => alert('Falha ao se conectar com o servidor'),
      });
  }

  public handleCancel(): void {
    this._router.navigate(['/collection-listing']);
  }

  public handleDelete(): void {
    let newServerData: IServerData;
    try {
      newServerData = this.serverHelper.deleteCollection(this.collectionName, this.serverData);
    } catch (e) {
      alert('coleção não encontrada');
      return;
    }
    this.delDeleteSubscription = this._server.updateServerData(newServerData)
      .subscribe({
        next: () => {
          this.openModal('Coleção excluída com sucesso');
          this._router.navigate(['collection-listing']);
        },
        error: () => alert('Falha ao se conectar com o servidor'),
      });
  }

  private openModal(modalMessage: string) {
    this.modalMessage = modalMessage;
    this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
  }

  ngOnDestroy() {
    this.delGetSubscription.unsubscribe();
    if (this.delPutSubscription) {
      this.delPutSubscription.unsubscribe();
    }
    if (this.delDeleteSubscription) {
      this.delDeleteSubscription.unsubscribe();
    }
  }
}
