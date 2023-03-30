import { ICollection } from '../../app/models/i-collection';
import { IServerData } from '../../app/models/i-server-data';
import { IModel } from '../../app/models/i-model';

export class ServerData {
  public static getModel(modelName: String, serverData: IServerData): IModel | undefined {
    const selectedModel = serverData.models.find((model) => modelName === model.name);
    if (selectedModel) {
      return selectedModel;
    }
    return undefined;
  }

  public static getNewId(models: IModel[]): number {
    for (let i = 1; i < models.length - 1; i += 1) {
      if (i !== models[i - 1].modelId) {
        return i;
      }
    }
    return models.length;
  }

  public static getCollectionsNames(serverData: IServerData): string[] {
    return serverData.collections.map((collection) => collection.name);
  }

  public static finModelId(modelName: string, serverData: IServerData): number {
    const { models } = serverData;
    for (let i = 0; i < models.length; i += 1) {
      if (models[i].name === modelName) {
        return i;
      }
    }
    return -1;
  }

  public static getCollectionId(collectionName: string, serverData: IServerData): number {
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
    const isCollectionExistent = this.getCollectionId(collection.name, serverData) !== -1;
    if (!isCollectionExistent) {
      serverData.collections.push(collection);
      return serverData;
    }
    throw new Error('collection already exists');
  }

  public static deleteCollection(
    collectionName: string,
    serverData: IServerData,
  ): IServerData {
    const { collections } = serverData;
    const newCollectionArray = collections
      .filter((collection) => collection.name !== collectionName);
    if (newCollectionArray.length === collections.length) {
      throw new Error('Collection doesn\'t exist');
    }
    return {
      models: serverData.models,
      collections: newCollectionArray,
    };
  }

  public static addModel(model: IModel, serverData: IServerData): IServerData {
    const isModelExistent = this
      .finModelId(model.name, serverData) !== -1;
    if (!isModelExistent) {
      serverData.models.push(model);
      return serverData;
    }
    throw new Error('Model already exists');
  }

  public static deleteModel(modelName: string, serverData: IServerData): IServerData {
    const { models } = serverData;
    const newModelsArray = models
      .filter((model) => model.name !== modelName);
    if (newModelsArray.length === models.length) {
      throw new Error('model not found');
    }
    return {
      collections: serverData.collections,
      models: newModelsArray,
    };
  }

  public static renameChildModels(
    previousName: string,
    newName: string,
    serverData: IServerData,
  ): IServerData {
    const newServerData = structuredClone(serverData);
    const newModels = newServerData.models;
    for (let i = 0; i < newModels.length; i += 1) {
      if (newModels[i].collection === previousName) {
        newModels[i].collection = newName;
      }
    }
    return newServerData;
  }

  public static removeChildModels(
    collectionName: string,
    serverData: IServerData,
  ) {
    const newServerData = structuredClone(serverData);
    const { models } = newServerData;
    const newModels: IModel[] = [];
    for (let i = 0; i < models.length; i += 1) {
      if (models[i].collection !== collectionName) {
        newModels.push(models[i]);
      }
    }
    newServerData.models = newModels;
    return newServerData;
  }
}
