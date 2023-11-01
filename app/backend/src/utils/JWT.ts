import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

export default class JWT {
  private static mySecret: Secret = process.env.JWT_SECRET || 'mySecret';

  private static jwtConfig: SignOptions = {
    expiresIn: '20d',
    algorithm: 'HS256',
  };

  static sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.mySecret, this.jwtConfig);
  }

  static verify(token: string): JwtPayload | string {
    try {
      return verify(token, this.mySecret) as JwtPayload;
    } catch (error) {
      return 'Token must be a valid token';
    }
  }
}
