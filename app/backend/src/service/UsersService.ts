import * as bcrypt from 'bcryptjs';
import UsersModel from '../model/usersModel';
import { IUsersLogin } from '../Interfaces/users/IUsersLogin';
import IUser from '../Interfaces/users/IUsers';
import { IUsersModel } from '../Interfaces/users/IUsersModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import JWT from '../utils/JWT';
import { TToken } from '../Interfaces/token/TToken';

export default class UsersService {
  constructor(
    private userModel: IUsersModel = new UsersModel(),
    private jwtService = JWT,
  ) { }

  public async login(data: IUsersLogin): Promise<ServiceResponse<ServiceMessage | TToken>> {
    const user = await this.userModel.findByEmail(data.email);

    if (user) {
      if (!bcrypt.compareSync(data.password, user.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }

      const { email } = user as IUser;

      const token = this.jwtService.sign({ email });
      return { status: 'SUCCESSFUL', data: { token } };
    }

    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }

  public async findByEmail(email: string): Promise<ServiceResponse<IUser | ServiceMessage>> {
    const user = await this.userModel.findByEmail(email);

    if (user) {
      return { status: 'SUCCESSFUL', data: user };
    }

    return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  }
}
