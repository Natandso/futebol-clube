import { Router } from 'express';
import teamRouter from './teams.routes';
import usersRouter from './users.routes';
import matchesRouter from './matches.routes';
import leadersBoardsRouter from './laeaderBoards.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', usersRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leadersBoardsRouter);

export default router;
