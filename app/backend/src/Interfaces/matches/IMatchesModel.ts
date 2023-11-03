import IMatches from './IMatches';

export interface IMatchesModel {
  findAll(inProgress?: boolean | undefined): Promise<IMatches[]>
  patchMatches(id: IMatches['id']): void;
}
