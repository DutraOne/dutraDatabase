import { Pool } from 'pg';
import pool from '../config/database';
import { User } from '../models/userModel';

export class UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query('SELECT * FROM users');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addUser(name: string, email: string): Promise<User> {
    const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
    const { rows } = await this.pool.query(queryText, [name, email]);
    return rows[0];
  }
}