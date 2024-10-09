import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const user = await userService.createUser(name, email);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
