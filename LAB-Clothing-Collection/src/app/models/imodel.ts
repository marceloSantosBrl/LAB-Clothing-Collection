export interface Imodel {
  modelId: number,
  name: string,
  type: 'bermuda' | 'biquíni' | 'bolsa' | 'boné' |
  'calça' | 'calçados' | 'camisa' | 'chapéu' | 'saia',
  creator: string,
  isPrinted: boolean,
  isEmbroidered: boolean
}
