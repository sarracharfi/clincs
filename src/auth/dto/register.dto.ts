import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  // Champs spécifiques selon rôle
  @IsOptional()
  @IsString()
  clinique?: string; // Pour Admin/Propriétaire

  @IsOptional()
  @IsString()
  services?: string; // Pour Admin

  @IsOptional()
  @IsString()
  agenda?: string; // Pour Médecin

  @IsOptional()
  @IsString()
  dossiersMedicaux?: string; // Pour Médecin

  @IsOptional()
  @IsString()
  ordonnances?: string; // Pour Médecin

  @IsOptional()
  @IsString()
  rendezVous?: string; // Pour Réceptionniste

  @IsOptional()
  @IsString()
  facturation?: string; // Pour Réceptionniste

  @IsOptional()
  @IsString()
  paiement?: string; // Pour Patient

  @IsOptional()
  @IsString()
  ordonnanceDownload?: string; // Pour Patient

  // ✅ Nouveaux attributs
  @IsOptional()
  @IsDateString()
  dateNaissance?: string;

  @IsOptional()
  @IsString()
  telephone?: string;
}
