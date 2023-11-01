import IUsers from './IUsers';

export interface IUsersLogin {
  email: string;
  password: string;
}

export type IUserResponse = Omit<IUsers, 'password'>;
