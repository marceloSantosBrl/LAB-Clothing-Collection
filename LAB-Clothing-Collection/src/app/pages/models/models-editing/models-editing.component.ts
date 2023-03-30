import {
  Component, OnDestroy, OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IModel } from '../../../models/i-model';
import { ServerConnectionService } from '../../../services/server-connection/server-connection.service';
import { IServerData } from '../../../models/i-server-data';
import { ServerData } from '../../../../utils/classes/server-data';

@Component({
  selector: 'app-models-editing',
  templateUrl: './models-editing.component.html',
  styleUrls: ['./models-editing.component.scss'],
})
export class ModelsEditingComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: TemplateRef }) public modalTemplate!: TemplateRef<any>;

  @ViewChild('dangerModal', { read: TemplateRef }) public dangerTemplate!: TemplateRef<any>;

  public modelName: string = '';

  public serverData!: IServerData;

  public serverHelper = ServerData;

  public modelId!: number;

  public modalMessage: string = '';

  private deleteGetSubscription!: Subscription;

  private deletePutSubscription!: Subscription;

  private deleteDelSubscription!: Subscription;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _server: ServerConnectionService,
    private readonly _modal: NgbModal,
  ) { }

  public ngOnInit() {
    this.modelName = this._activatedRoute.snapshot.queryParamMap.get('name') ?? '';
    this.deleteGetSubscription = this._server.getServerData()
      .subscribe({
        next: (data) => {
          this.serverData = data;
          this.modelId = this.serverHelper.finModelId(this.modelName, data);
        },
        error: () => alert('Erro ao se comunicar com o servidor'),
      });
  }

  public ngOnDestroy() {
    this.deleteGetSubscription.unsubscribe();
    if (this.deletePutSubscription) {
      this.deletePutSubscription.unsubscribe();
    }
    if (this.deleteDelSubscription) {
      this.deleteDelSubscription.unsubscribe();
    }
  }

  private openModal(modalMessage: string): void {
    this.modalMessage = modalMessage;
    this._modal.open(this.modalTemplate, { centered: true, size: 'sm' });
  }

  public handleSubmit(model: IModel): void {
    const newModel = structuredClone(model);
    newModel.modelId = this.modelId;
    let data: IServerData;
    try {
      data = this.serverHelper.deleteModel(this.modelName, this.serverData);
      data = this.serverHelper.addModel(newModel, data);
    } catch (e) {
      this.openModal('Modelo não encontrado');
      return;
    }
    this.deletePutSubscription = this._server.updateServerData(data)
      .subscribe({
        next: () => this.openModal('Modelo editado com sucesso'),
        error: () => alert('Erro ao se comunicar com o servidor'),
      });
  }

  public handleDeleteModal(): void {
    const data = this.serverHelper.deleteModel(this.modelName, this.serverData);
    this.deleteDelSubscription = this._server.updateServerData(data)
      .subscribe({
        next: () => {
          this.openModal('Modelo deletado com sucesso');
          this._router.navigate(['/models-listing']);
        },
        error: () => alert('Erro ao conectar-se com o servidor'),
      });
    this._modal.dismissAll();
  }

  public handleSuccess(): void {
    this._modal.dismissAll();
    this._router.navigate(['/models-listing']);
  }

  public handleDelete(): void {
    this._modal.open(this.dangerTemplate, { centered: true, size: 'sm' });
  }
}
