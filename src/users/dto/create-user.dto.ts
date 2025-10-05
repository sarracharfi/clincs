import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsOptional() prenom?: string;
  @IsEmail() @IsNotEmpty() email: string;
  @IsString() @IsNotEmpty() password: string;
  @IsNumber() @IsNotEmpty() roleId: number;

  @IsOptional() @IsString() clinique?: string;
  @IsOptional() @IsString() services?: string;
  @IsOptional() @IsString() agenda?: string;
  @IsOptional() @IsString() dossiersMedicaux?: string;
  @IsOptional() @IsString() ordonnances?: string;
  @IsOptional() @IsString() rendezVous?: string;
  @IsOptional() @IsString() facturation?: string;
  @IsOptional() @IsString() paiement?: string;
  @IsOptional() @IsString() ordonnanceDownload?: string;
}
