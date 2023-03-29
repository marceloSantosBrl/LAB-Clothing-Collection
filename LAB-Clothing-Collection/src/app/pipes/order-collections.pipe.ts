import { Pipe, PipeTransform } from '@angular/core';
import { ICollection } from '../models/i-collection';

@Pipe({
  name: 'orderCollections',
})
export class OrderCollectionsPipe implements PipeTransform {
  transform(collections: ICollection[]): ICollection[] {
    return collections
      .sort((col1, col2) => col2.budget - col1.budget);
  }
}
