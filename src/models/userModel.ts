export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string; // Armazenar o hash da senha
}