import IMatches from './IMatches';

export interface IMatchesModel {
  findAll(inProgress?: boolean | undefined): Promise<IMatches[]>
}
