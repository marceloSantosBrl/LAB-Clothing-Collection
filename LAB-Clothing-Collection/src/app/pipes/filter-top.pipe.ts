import { Pipe, PipeTransform } from '@angular/core';
import { ICollection } from '../models/i-collection';

@Pipe({
  name: 'filterTop',
})
export class FilterTopPipe implements PipeTransform {
  transform(collections: ICollection[], topSize: number): ICollection[] {
    return collections
      .sort((col1, col2) => col2.budget - col1.budget)
      .slice(0, topSize);
  }
}
