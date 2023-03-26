export interface ICollection {
  brand: string,
  name: string,
  creator: string,
  budget: number,
  season : 'inverno' | 'verão' | 'primavera' | 'outono',
  year: number,
  collectionId?: number,
}
