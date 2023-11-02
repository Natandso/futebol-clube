import { Router } from 'express';
import teamRouter from './teams.routes';
import usersRouter from './users.routes';
import matchesRouter from './matches.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', usersRouter);
router.use('/matches', matchesRouter);

export default router;
