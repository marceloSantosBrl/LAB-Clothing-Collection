export interface IModel {
  collection: string,
  name: string,
  type: 'bermuda' | 'biquíni' | 'bolsa' | 'boné' |
  'calça' | 'calçados' | 'camisa' | 'chapéu' | 'saia',
  creator: string,
  isPrinted: boolean,
  isEmbroidered: boolean
  modelId?: number,
}
