import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const
      isItInProgress: boolean | undefined = req.query.inProgress
        ? req.query.inProgress === 'true' : undefined;

    const { status, data } = await this.matchesService.getAllMatches(isItInProgress);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async finishMatches(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchesService.patchMatches(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateMatchesGoals(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchesService.updateMatchesGoals(Number(id), req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
