import { Pipe, PipeTransform } from '@angular/core';
import { IModel } from '../models/i-model';

@Pipe({
  name: 'orderModels',
})
export class OrderModelsPipe implements PipeTransform {
  transform(collections: IModel[]): IModel[] {
    return collections
      .sort((col1, col2) => (col2.modelId ?? 0) - (col1.modelId ?? 0));
  }
}
