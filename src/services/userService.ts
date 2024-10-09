import { UserRepository } from '../repositories/userRepository';
import { isValidEmail } from '../helpers/validationHelper';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string) {
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    return await this.userRepository.addUser(name, email);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}