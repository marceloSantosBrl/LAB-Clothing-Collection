import { IUserCredentials } from './i-user-credentials';

export interface IServerCredentials {
  id: number,
  credentials: IUserCredentials[]
}
