import ITeams from '../Interfaces/ITeams';
import SequelizeTeams from '../database/models/TeamsModel';
import { ITeamModel } from '../Interfaces/ITeamsModel';

export default class TeamsModel implements ITeamModel {
  private model = SequelizeTeams;

  async findAll(): Promise<ITeams[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: ITeams['id']): Promise<ITeams | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData === null) return null;

    const { teamName }: ITeams = dbData;
    return { id, teamName };
  }
}
