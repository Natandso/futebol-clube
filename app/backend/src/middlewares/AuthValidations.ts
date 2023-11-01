import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default class AuthValidations {
  static validateAuthorization(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const [type, token] = authorization.split(' ');
    if (!type || !token) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mySecret');
      res.locals.user = decoded;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}
