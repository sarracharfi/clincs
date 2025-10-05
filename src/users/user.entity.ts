import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../roles/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  clinique: string;

  @Column({ nullable: true })
  services: string;

  @Column({ nullable: true })
  agenda: string;

  @Column({ nullable: true })
  dossiersMedicaux: string;

  @Column({ nullable: true })
  ordonnances: string;

  @Column({ nullable: true })
  rendezVous: string;

  @Column({ nullable: true })
  facturation: string;

  @Column({ nullable: true })
  paiement: string;

  @Column({ nullable: true })
  ordonnanceDownload: string;

  @Column({ nullable: true })
  dateNaissance: string; // ← nouveau champ
  @Column({ nullable: true })
  telephone: string; // ← nouveau champ

  @Column()
  roleId: number;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;
}
