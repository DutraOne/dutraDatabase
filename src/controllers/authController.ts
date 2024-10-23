import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

// Registro de usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login de usuário
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};