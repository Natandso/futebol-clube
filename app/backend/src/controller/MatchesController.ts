import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const serviceResponse = await this.matchesService.getAllMatches();
    return res.status(200).json(serviceResponse.data);
  }
}
