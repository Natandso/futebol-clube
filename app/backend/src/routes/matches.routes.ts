import { Request, Router, Response } from 'express';
import MatchesController from '../controller/MatchesController';
import AuthValidations from '../middlewares/AuthValidations';
import validateLogin from '../middlewares/validateLogin';

const matchesController = new MatchesController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),

);

router.patch(
  '/:id/finish',
  AuthValidations.validateAuthorization,
  async (req: Request, res: Response) => matchesController.finishMatches(req, res),

);

router.patch(
  '/:id',
  AuthValidations.validateAuthorization,
  async (req: Request, res: Response) => matchesController.updateMatchesGoals(req, res),

);

router.post(
  '/',
  AuthValidations.validateAuthorization,
  validateLogin.validateTeams,
  async (req: Request, res: Response) => matchesController.creatingMatches(req, res),

);

export default router;
