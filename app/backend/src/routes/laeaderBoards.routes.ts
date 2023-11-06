import { Request, Router, Response } from 'express';
import LeaderBoardsController from '../controller/LeaderBoardsController';

const leaderBoardsController = new LeaderBoardsController();

const router = Router();

router.get('/home', async (req: Request, res: Response) => (
  leaderBoardsController.getLeaderBoards(req, res)
));

router.get('/away', async (req: Request, res: Response) => (
  leaderBoardsController.getAwayLeaderBoards(req, res)
));

export default router;
