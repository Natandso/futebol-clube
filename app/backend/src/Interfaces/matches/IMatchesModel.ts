import IMatches from './IMatches';
import IMatchesUpdateGoals from './IMatchesUpdateGoals';

export interface IMatchesModel {
  findAll(inProgress?: boolean | undefined): Promise<IMatches[]>
  patchMatches(id: IMatches['id']): Promise<void>;
  updateMatchesGoals(id: IMatches['id'], data: IMatchesUpdateGoals): Promise<void>
  creatingMatches(data: IMatches): Promise<IMatches>;
}
