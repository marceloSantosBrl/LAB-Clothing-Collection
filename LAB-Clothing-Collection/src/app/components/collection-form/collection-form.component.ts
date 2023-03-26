import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICollection } from '../../models/i-collection';
import { CustomMath } from '../../../utils/classes/CustomMath';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss'],
})
export class CollectionFormComponent implements OnInit {
  @Input('data') public data: ICollection | { [index: string]: string } = {
    name: '',
    brand: '',
    creator: '',
    budget: '',
    season: '',
    year: '',
  };

  @Input('type') public type: string = '';

  @Output('sendEvent') public sendEvent = new EventEmitter<ICollection>();

  @Output('deleteClick') public deleteClick = new EventEmitter<string>();

  @Output('cancelClick') public cancelClick = new EventEmitter<any>();

  public collectionForm!:FormGroup;

  constructor(
    private readonly _nfb: NonNullableFormBuilder,
    public readonly _modal: NgbModal,
  ) { }

  public ngOnInit() {
    this.collectionForm = this._nfb.group({
      name: [this.data.name, [Validators.required]],
      creator: [this.data.creator, [Validators.required, Validators.pattern(/^[a-zA-Z ç]+$/)]],
      season: [this.data.season, [Validators.required]],
      brand: [this.data.brand, Validators.required],
      budget: [this.data.budget, [Validators.required, Validators.pattern(/^[0-9 .,]+$/)]],
      year: [this.data.year, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  public submitHandler(): void {
    if (this.collectionForm.valid) {
      const collection: ICollection = {
        name: this.collectionForm.get('name')?.value,
        creator: this.collectionForm.get('creator')?.value,
        season: this.collectionForm.get('season')?.value,
        brand: this.collectionForm.get('brand')?.value,
        budget: CustomMath.customRound(this.collectionForm.get('budget')?.value),
        year: this.collectionForm.get('year')?.value,
      };
      this.sendEvent.emit(collection);
    }
  }

  public deletModalHandler(): void {
    this.deleteClick.emit(this.collectionForm.get('name')?.value);
    this._modal.dismissAll();
  }
}
