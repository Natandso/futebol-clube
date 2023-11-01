import { Router } from 'express';
import teamRouter from './teams.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', usersRouter);

export default router;
