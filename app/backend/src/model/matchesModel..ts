import IMatches from '../Interfaces/matches/IMatches';
import SequelizeMatches from '../database/models/MatchesModel';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import SequelizeTeams from '../database/models/TeamsModel';
import IMatchesUpdateGoals from '../Interfaces/matches/IMatchesUpdateGoals';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(inProgress?: boolean): Promise<IMatches[]> {
    const dbDataMatches = await this.model.findAll({
      where: inProgress !== undefined ? { inProgress } : undefined,
      attributes: ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId', 'awayTeamGoals',
        'inProgress'],
      include: [
        {
          model: SequelizeTeams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return dbDataMatches;
  }

  async patchMatches(id: IMatches['id']): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updateMatchesGoals(id: IMatches['id'], data: IMatchesUpdateGoals): Promise<void> {
    await this.model.update(
      { awayTeamGoals: data.awayTeamGoals, homeTeamGoals: data.homeTeamGoals },
      { where: { id } },
    );
  }
}
