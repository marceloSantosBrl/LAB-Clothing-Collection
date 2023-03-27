import {
  Component, OnDestroy, OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { IServerData } from '../../../models/i-server-data';
import { ServerData } from '../../../../utils/classes/server-data';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { ICollection } from '../../../models/i-collection';

@Component({
  selector: 'app-collections-creating',
  templateUrl: './collections-creating.component.html',
  styleUrls: ['./collections-creating.component.scss'],
})
export class CollectionsCreatingComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: TemplateRef }) public modalTemplate!: TemplateRef<any>;

  public modalMessage: string = '';

  public deleteGetSubscription!: Subscription;

  public deletePutSubscription!: Subscription;

  public serverData!: IServerData;

  public serverHelper = ServerData;

  constructor(
    private readonly _server: ServerConnectionService,
    private readonly _modal: NgbModal,
    private readonly _router: Router,
  ) { }

  public ngOnInit() {
    this.deleteGetSubscription = this._server.getServerData()
      .subscribe({
        next: (data) => {
          this.serverData = data;
        },
        error: () => alert('Falha ao comunicar-se com o servidor'),
      });
  }

  public ngOnDestroy() {
    this.deleteGetSubscription.unsubscribe();
    if (this.deletePutSubscription) {
      this.deletePutSubscription.unsubscribe();
    }
  }

  private openModal(modalMessage: string): void {
    this.modalMessage = modalMessage;
    this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
  }

  public handleModal() {
    this._modal.dismissAll();
    this._router.navigate(['/collection-listing']);
  }

  public handleSubmit(collection: ICollection): void {
    let newServerData: IServerData;
    try {
      newServerData = this.serverHelper.addCollection(collection, this.serverData);
    } catch (e) {
      this.openModal('Coleção com esse nome já existe');
      return;
    }
    this.deletePutSubscription = this._server.updateServerData(newServerData)
      .subscribe({
        next: () => this.openModal('Coleção adicionada com sucesso'),
        error: () => alert('Falha ao comunicar-se com o servidor'),
      });
  }
}
