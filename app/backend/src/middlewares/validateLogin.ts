import { NextFunction, Request, Response } from 'express';
import TeamsModel from '../model/teamModel';

const teamsModel = new TeamsModel();

export default class validateLogin {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }

  static async validateTeams(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const { homeTeamId, awayTeamId } = req.body;

    if (homeTeamId === awayTeamId) {
      return res.status(422).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }

    const homeTeam = await teamsModel.findById(homeTeamId);
    const awayTeam = await teamsModel.findById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    next();
  }
}
