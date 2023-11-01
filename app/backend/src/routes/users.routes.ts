import { Request, Router, Response } from 'express';
import UsersController from '../controller/UsersControlle';
import validateLogin from '../middlewares/validateLogin';
import AuthValidations from '../middlewares/AuthValidations';

const usersController = new UsersController();

const router = Router();

router.post(
  '/',
  validateLogin.validateLogin,
  async (req: Request, res: Response) => usersController.login(req, res),

);

router.get(
  '/role',
  AuthValidations.validateAuthorization,
  async (req: Request, res: Response) => usersController.roleUser(req, res),

);

export default router;
