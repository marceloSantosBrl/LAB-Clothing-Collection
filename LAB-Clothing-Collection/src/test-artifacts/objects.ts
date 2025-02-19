import { ICollection } from '../app/models/i-collection';
import { IServerData } from '../app/models/i-server-data';
import { IModel } from '../app/models/i-model';

const collections: ICollection[] = [{
  name: 'Adidas Originals',
  brand: 'Adidas',
  creator: 'Adi Dassler',
  budget: 35000,
  season: 'verão',
  year: 2022,
},
{
  name: 'Gucci Garden',
  brand: 'Gucci',
  creator: 'Alessandro Michele',
  budget: 8000,
  season: 'primavera',
  year: 2023,
},
{
  name: 'Prada Resort',
  brand: 'Prada',
  creator: 'Miuccia Prada',
  budget: 8700,
  season: 'inverno',
  year: 2022,
},
{
  name: 'Chanel Classic',
  brand: 'Chanel',
  creator: 'Coco Chanel',
  budget: 18000,
  season: 'outono',
  year: 2021,
},
{
  name: 'Nike Air',
  brand: 'Nike',
  creator: 'Tinker Hatfield',
  budget: 4200,
  season: 'verão',
  year: 2023,
},
{
  name: 'Versace Barocco',
  brand: 'Versace',
  creator: 'Gianni Versace',
  budget: 4800,
  season: 'outono',
  year: 2022,
},
{
  name: 'Converse All Star',
  brand: 'Converse',
  creator: 'Marquis Mills Converse',
  budget: 2000,
  season: 'verão',
  year: 2023,
},
];

const models: IModel[] = [
  {
    modelId: 1,
    collection: 'Adidas Originals',
    name: 'Turbo',
    type: 'calça',
    creator: 'Yan esteves',
    isPrinted: true,
    isEmbroidered: false,
  },
  {
    modelId: 2,
    collection: 'Adidas Originals',
    name: 'Vero',
    type: 'bermuda',
    creator: 'Yan esteves',
    isPrinted: false,
    isEmbroidered: false,
  },
  {
    modelId: 3,
    collection: 'Adidas Originals',
    name: 'Talento',
    type: 'boné',
    creator: 'Armanni Gucci',
    isPrinted: false,
    isEmbroidered: true,
  },
  {
    modelId: 4,
    collection: 'Gucci Garden',
    name: 'Breaker',
    type: 'saia',
    creator: 'Armanni Gucci',
    isPrinted: false,
    isEmbroidered: true,
  },
  {
    modelId: 5,
    collection: 'Nike Air',
    name: 'Air Max 90',
    type: 'calçados',
    creator: 'Tinker Hatfield',
    isPrinted: false,
    isEmbroidered: false,
  },
  {
    modelId: 6,
    collection: 'Adidas Originals',
    name: 'Superstar',
    type: 'calçados',
    creator: 'Adi Dassler',
    isPrinted: false,
    isEmbroidered: true,
  },
  {
    modelId: 7,
    collection: 'Puma x Rihanna',
    name: 'Fenty Creeper',
    type: 'calçados',
    creator: 'Rihanna',
    isPrinted: true,
    isEmbroidered: false,
  },
  {
    modelId: 8,
    collection: 'Converse All Star',
    name: 'Chuck Taylor',
    type: 'calçados',
    creator: 'Chuck Taylor',
    isPrinted: false,
    isEmbroidered: false,
  },
  {
    modelId: 9,
    collection: 'Gucci Garden',
    name: 'Floral Skirt',
    type: 'saia',
    creator: 'Alessandro Michele',
    isPrinted: true,
    isEmbroidered: true,
  },
  {
    modelId: 10,
    collection: 'Chanel Classic',
    name: 'Tweed Skirt',
    type: 'saia',
    creator: 'Coco Chanel',
    isPrinted: false,
    isEmbroidered: false,
  },
  {
    modelId: 11,
    collection: 'Prada Resort',
    name: 'Pleated Skirt',
    type: 'saia',
    creator: 'Miuccia Prada',
    isPrinted: false,
    isEmbroidered: true,
  },
  {
    modelId: 12,
    collection: 'Versace Barocco',
    name: 'Baroque Skirt',
    type: 'saia',
    creator: 'Gianni Versace',
    isPrinted: true,
    isEmbroidered: false,
  },
];

const testObject: IServerData = {
  id: 1,
  models,
  collections,
};

export default testObject;
