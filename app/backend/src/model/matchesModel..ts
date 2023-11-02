import IMatches from '../Interfaces/matches/IMatches';
import SequelizeMatches from '../database/models/MatchesModel';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import SequelizeTeams from '../database/models/TeamsModel';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      attributes: ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId',
        'awayTeamGoals',
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
    return dbData;
  }
}
