import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || '45cc2edde55a91db80089520ff221f25ce483d2b0a3874cba2630b71c1571d06',
    });
  }

  async validate(payload: any) {
    // payload.sub contient l'ID utilisateur
    const user = await this.authService.validateUser(payload.sub);
    if (!user) throw new UnauthorizedException('Invalid token');

    // Retourne l'utilisateur pour que JwtAuthGuard le mette dans request.user
    return user;
  }
}
