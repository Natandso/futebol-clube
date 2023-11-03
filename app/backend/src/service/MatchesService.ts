import MatchesModel from '../model/matchesModel.';
import IMatchesUpdateGoals from '../Interfaces/matches/IMatchesUpdateGoals';
import IMatches from '../Interfaces/matches/IMatches';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import { ServiceResponse, ServiceMessage } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) { }

  public async getAllMatches(inProgress: boolean | undefined):
  Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll(inProgress);

    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async updateMatchesGoals(id: IMatches['id'], data: IMatchesUpdateGoals):
  Promise<ServiceResponse<ServiceMessage>> {
    await this.matchesModel.updateMatchesGoals(id, data);

    return { status: 'SUCCESSFUL', data: { message: 'Goals Updated ' } };
  }

  public async patchMatches(id: IMatches['id']): Promise<ServiceResponse<ServiceMessage>> {
    await this.matchesModel.patchMatches(id);

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }
}
