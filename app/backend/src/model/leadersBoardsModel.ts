import { QueryTypes } from 'sequelize';
import ILeaderBoards from '../Interfaces/leadersBoards/ILeaderBoards';
import QueryLeaderBoard from '../utils/QueryLeaderBoard';
import QueryAwayLeaderBoards from '../utils/QueryAwayLeaderBoards';
import db from '../database/models';

export default class LeaderBoardsModel {
  private db = db;

  async getLeaderBoards(): Promise<ILeaderBoards[]> {
    const leaderBoards = await this.db.query(QueryLeaderBoard, {
      type: QueryTypes.SELECT,
    }) as ILeaderBoards[];
    return leaderBoards;
  }

  async getAwayLeaderBoards(): Promise<ILeaderBoards[]> {
    const awayLeaderBoards = await this.db.query(QueryAwayLeaderBoards, {
      type: QueryTypes.SELECT,
    }) as ILeaderBoards[];
    return awayLeaderBoards;
  }
}
