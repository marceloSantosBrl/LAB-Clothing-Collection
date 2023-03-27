import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IModel } from '../../models/i-model';

@Component({
  selector: 'app-models-form',
  templateUrl: './models-form.component.html',
  styleUrls: ['./models-form.component.scss'],
})
export class ModelsFormComponent implements OnInit {
  public modelForm!: FormGroup;

  @Input('formType') public formType: string = '';

  @Input('modelData') public modelData: IModel = {
    collection: '',
    name: '',
    type: 'bermuda',
    creator: '',
    isPrinted: true,
    isEmbroidered: true,
    modelId: 0,
  };

  @Input('collectionsName') public collectionsName: string[] = [''];

  @Output('deleteEvent') public deleteEvent = new EventEmitter<any>();

  @Output('submitEvent') public submitEvent = new EventEmitter<IModel>();

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
    public readonly _router: Router,
  ) { }

  ngOnInit() {
    this.modelForm = this._nfb.group({
      name: [this.modelData.name, Validators.required],
      type: [this.modelData.type, Validators.required],
      creator: [this.modelData.creator, [Validators.required, Validators.pattern(/^[a-zA-Z ç]+$/)]],
      collection: [this.modelData.collection, Validators.required],
      isEmbroidered: [this.modelData.isEmbroidered, Validators.required],
      isPrinted: [this.modelData.isPrinted, Validators.required],
    });
  }

  public submitHandler(): void {
    if (this.modelForm.valid) {
      const collection: IModel = {
        name: this.modelForm.get('name')?.value,
        type: this.modelForm.get('type')?.value,
        creator: this.modelForm.get('creator')?.value,
        collection: this.modelForm.get('collection')?.value,
        isEmbroidered: this.modelForm.get('isEmbroidered')?.value,
        isPrinted: this.modelForm.get('isPrinted')?.value,
      };
      this.submitEvent.emit(collection);
    }
  }

  public clothingTypes: string[] = ['bermuda', 'biquíni', 'bolsa', 'boné',
    'calça', 'calçados', 'camisa', 'chapéu', 'saia'];
}
