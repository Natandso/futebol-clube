import LeaderBoardsModel from '../model/leadersBoardsModel';
import ILeaderBoards from '../Interfaces/leadersBoards/ILeaderBoards';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class LeaderBoardsService {
  constructor(
    private leaderBoardsModel: LeaderBoardsModel = new LeaderBoardsModel(),
  ) { }

  public async getLeaderBoards(): Promise<ServiceResponse<ILeaderBoards[]>> {
    const leaderBoards = await this.leaderBoardsModel.getLeaderBoards();
    return { status: 'SUCCESSFUL', data: leaderBoards };
  }

  public async getAwayLeaderBoards(): Promise<ServiceResponse<ILeaderBoards[]>> {
    const awayLeaderBoards = await this.leaderBoardsModel.getAwayLeaderBoards();
    return { status: 'SUCCESSFUL', data: awayLeaderBoards };
  }
}
