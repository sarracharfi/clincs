import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Inscription
  async register(registerDto: RegisterDto) {
    const { email, password, roleId } = registerDto;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await this.usersService.findByEmail(email).catch(() => null);
    if (existingUser) throw new UnauthorizedException('Email already registered');

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création utilisateur
    const user = await this.usersService.create({ ...registerDto, password: hashedPassword });

    // Recharge l'utilisateur avec la relation role
    const fullUser = await this.usersService.findOne(user.id);

    return {
      id: fullUser.id,
      name: fullUser.name,
      prenom: fullUser.prenom,
      email: fullUser.email,
      role: fullUser.role?.name || null,
      permissions: fullUser.role?.permissions || [],
      // Attributs spécifiques selon rôle
      clinique: fullUser.clinique,
      services: fullUser.services,
      agenda: fullUser.agenda,
      dossiersMedicaux: fullUser.dossiersMedicaux,
      ordonnances: fullUser.ordonnances,
      rendezVous: fullUser.rendezVous,
      facturation: fullUser.facturation,
      paiement: fullUser.paiement,
      ordonnanceDownload: fullUser.ordonnanceDownload,
    };
  }

  // Connexion
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.usersService.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Payload JWT
    const payload = { sub: user.id, email: user.email, roleId: user.roleId };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        prenom: user.prenom,
        email: user.email,
        role: user.role?.name || null,
        permissions: user.role?.permissions || [],
      },
    };
  }

  // Validation utilisateur
  async validateUser(userId: number) {
    const user = await this.usersService.findOne(userId);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
