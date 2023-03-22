import { Imodel } from './imodel';

export interface Icollection {
  id: number,
  brand: string,
  name: string,
  creator: string,
  budget: number,
  season : 'inverno' | 'verão' | 'primavera' | 'outono',
  year: number,
  models: Imodel[]
}
