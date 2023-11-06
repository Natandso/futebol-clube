import { Request, Response } from 'express';
import LeaderBoardsService from '../service/LeaderBoardsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderBoardsController {
  constructor(
    private leaderBoardsService: LeaderBoardsService = new LeaderBoardsService(),
  ) { }

  public async getLeaderBoards(req: Request, res: Response): Promise<void | Response> {
    const { status, data } = await this.leaderBoardsService.getLeaderBoards();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAwayLeaderBoards(req: Request, res: Response): Promise<void | Response> {
    const { status, data } = await this.leaderBoardsService.getAwayLeaderBoards();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
