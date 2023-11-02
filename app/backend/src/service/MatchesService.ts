import MatchesModel from '../model/matchesModel.';
import IMatches from '../Interfaces/matches/IMatches';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) { }

  public async getAllMatches(inProgress: boolean | undefined):
  Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll(inProgress);

    return { status: 'SUCCESSFUL', data: allMatches };
  }
}
