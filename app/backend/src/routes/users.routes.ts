import { Request, Router, Response } from 'express';
import UsersController from '../controller/UsersControlle';
import validateLogin from '../middlewares/validateLogin';

const usersController = new UsersController();

const router = Router();

router.post(
  '/',
  validateLogin.validateLogin,
  async (req: Request, res: Response) => usersController.login(req, res),

);

export default router;
