import { IModel } from './IModel';

export interface ICollection {
  brand: string,
  name: string,
  creator: string,
  budget: number,
  season : 'inverno' | 'verão' | 'primavera' | 'outono',
  year: number,
  models: IModel[]
  id?: number,
}
