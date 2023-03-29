import {
  Component, OnDestroy, OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { IServerData } from '../../../models/i-server-data';
import { ServerData } from '../../../../utils/classes/server-data';
import { IModel } from '../../../models/i-model';

@Component({
  selector: 'app-models-creating',
  templateUrl: './models-creating.component.html',
  styleUrls: ['./models-creating.component.scss'],
})
export class ModelsCreatingComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: TemplateRef }) public modalTemplate!: TemplateRef<any>;

  public modalMessage: string = '';

  public deleteGetSubscription!: Subscription;

  public deletePutSubscription!: Subscription;

  public serverData!: IServerData;

  public serverHelper = ServerData;

  constructor(
    private readonly _server: ServerConnectionService,
    private readonly _modal: NgbModal,
    public readonly _router: Router,
  ) { }

  public ngOnInit() {
    this.deleteGetSubscription = this._server.getServerData()
      .subscribe({
        next: (data) => {
          this.serverData = data;
        },
        error: () => alert('Falha ao se comunicar com o servidor'),
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
    this._router.navigate(['/models-listing']);
  }

  public handleSubmit(model: IModel): void {
    const newModel = structuredClone(model);
    newModel.modelId = this.serverHelper.getNewId(this.serverData.models);
    let newServerData: IServerData;
    try {
      newServerData = this.serverHelper.addModel(newModel, this.serverData);
    } catch (e) {
      this.openModal('Modelo com esse nome já existe');
      return;
    }
    this.deletePutSubscription = this._server.updateServerData(newServerData)
      .subscribe({
        next: () => this.openModal('Modelo adicionado com sucesso'),
        error: () => alert('Falha ao conectar-se com o servidor'),
      });
  }
}
