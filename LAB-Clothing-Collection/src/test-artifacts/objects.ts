import { ICollection } from '../app/models/i -collection';
import { IServerData } from '../app/models/i-server-data';
import { IModel } from '../app/models/i-model';

const collections: ICollection[] = [
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 9500,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 500,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 50005,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 950480,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 5001,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 508780,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 950895470,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 50870,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 54700,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 9599700,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 58700,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 444500,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 95,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 50054,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 5010,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 900,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 200,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 100,
    season: 'outono',
    year: 2003,
  },
  {
    name: 'Adidas New Inverno',
    brand: 'Adidas',
    creator: 'Yan esteves',
    budget: 80,
    season: 'inverno',
    year: 2003,
  },
  {
    name: 'Nike Conceptual',
    brand: 'Nike',
    creator: 'Victor Benni',
    budget: 20,
    season: 'verão',
    year: 2003,
  },
  {
    name: 'Gucci Prime',
    brand: 'Gucci',
    creator: 'Andre Sulart',
    budget: 1500,
    season: 'outono',
    year: 2003,
  },
];

const models: IModel[] = [
  {
    collection: 'Adidas New Inverno',
    name: 'Turbo',
    type: 'calça',
    creator: 'Yan esteves',
    isPrinted: true,
    isEmbroidered: false,
  },
  {
    collection: 'Adidas New Inverno',
    name: 'Vero',
    type: 'bermuda',
    creator: 'Yan esteves',
    isPrinted: false,
    isEmbroidered: false,
  },
  {
    collection: 'Adidas New Inverno',
    name: 'Talento',
    type: 'boné',
    creator: 'Armanni Gucci',
    isPrinted: false,
    isEmbroidered: true,
  },
  {
    collection: 'Gucci Prime',
    name: 'Breaker',
    type: 'saia',
    creator: 'Armanni Gucci',
    isPrinted: false,
    isEmbroidered: true,
  },
];

const testObject: IServerData = {
  id: 1,
  models,
  collections,
};

export default testObject;
