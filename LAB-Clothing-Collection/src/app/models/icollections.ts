import { IModels } from './imodels';

export interface ICollections {
  id: number,
  name: string,
  creator: string,
  budget: number,
  season : 'inverno' | 'verão' | 'primavera' | 'outono',
  year: number,
  models: IModels[]
}
