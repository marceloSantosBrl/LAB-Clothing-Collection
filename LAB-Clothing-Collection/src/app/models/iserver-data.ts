import { ICollection } from './i -collection';
import { IModel } from './i-model';

export interface IServerData {
  collections: ICollection[],
  models: IModel[],
  id?: number
}
