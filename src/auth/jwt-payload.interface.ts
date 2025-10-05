export interface JwtPayload {
  sub: number;
  email: string;
  role: string | null;   // ← permet null
  permissions: string[];
  name: string;
  prenom: string;
  clinique?: string | null;
  services?: string[] | null;
}
