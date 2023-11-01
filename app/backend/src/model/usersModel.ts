import IUsers from '../Interfaces/users/IUsers';
import SequelizeUsers from '../database/models/UserModel';
import { IUsersModel } from '../Interfaces/users/IUsersModel';

export default class UsersModel implements IUsersModel {
  private model = SequelizeUsers;

  async findByEmail(email: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { email } });

    if (!dbData) return null;

    const { id, username, role, password }: IUsers = dbData;
    return { id, username, role, email, password };
  }
}
