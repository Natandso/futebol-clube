import { Request, Response } from 'express';
import UsersService from '../service/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) { }

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, data } = await
    this.usersService.login(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async roleUser(req: Request, res: Response) {
    const { user } = res.locals;
    const { data } = await this.usersService.findByEmail(user.email);

    if ('role' in data && data.role) {
      return res.status(200).json({ role: data.role });
    }
    return res.status(404).json({ message: 'User not found' });

    return this;
  }
}
