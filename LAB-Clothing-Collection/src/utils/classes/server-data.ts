import { ICollection } from '../../app/models/i -collection';
import { IServerData } from '../../app/models/i-server-data';
import { IModel } from '../../app/models/i-model';

export class ServerData {
  public static finModelId(modelName: string, serverData: IServerData): number {
    const { models } = serverData;
    for (let i = 0; i < models.length; i += 1) {
      if (models[i].name === modelName) {
        return i;
      }
    }
    return -1;
  }

  public static findCollectionId(collectionName: string, serverData: IServerData): number {
    const { collections } = serverData;
    for (let i = 0; i < collections.length; i += 1) {
      if (collections[i].name === collectionName) {
        return i;
      }
    }
    return -1;
  }

  public static findModels(collectionName: string, serverData: IServerData): IModel[] {
    const { models } = serverData;
    return models
      .filter((model) => model.collection === collectionName);
  }

  public static getBudgetAverage(collections: ICollection[]): number {
    const totalBudget = collections.reduce(
      (accumulator, currentValue) => accumulator + currentValue.budget,
      0,
    );
    return totalBudget === 0
      ? 0 : totalBudget / collections.length;
  }

  public static addCollection(
    collection: ICollection,
    serverData: IServerData,
  ): IServerData {
    const isCollectionExistent = this.findCollectionId(collection.name, serverData) !== -1;
    if (!isCollectionExistent) {
      serverData.collections.push(collection);
      return serverData;
    }
    throw new Error('collection already exists');
  }

  public static editCollection(
    collection: ICollection,
    serverData: IServerData,
  ): IServerData {
    const newServerData = this.deleteCollection(collection.name, serverData);
    return this.addCollection(collection, newServerData);
  }

  public static deleteCollection(
    collectionName: string,
    serverData: IServerData,
  ): IServerData {
    const { collections } = serverData;
    const newCollectionArray = collections
      .filter((collection) => collection.name !== collectionName);
    return {
      models: serverData.models,
      collections: newCollectionArray,
    };
  }

  public static addModel(model: IModel, serverData: IServerData): IServerData {
    const isModelExistent = this
      .findCollectionId(model.name, serverData) !== -1;
    if (!isModelExistent) {
      serverData.models.push(model);
      return serverData;
    }
    throw new Error('Model already exists');
  }

  public static editModel(model: IModel, serverData: IServerData): IServerData {
    const newServerData = this.deleteModel(model.name, serverData);
    return this.addModel(model, newServerData);
  }

  public static deleteModel(modelName: string, serverData: IServerData): IServerData {
    const { models } = serverData;
    const newModelsArray = models
      .filter((model) => model.name !== modelName);
    return {
      collections: serverData.collections,
      models: newModelsArray,
    };
  }
}
