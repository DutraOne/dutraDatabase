import crypto from 'crypto';

export const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const comparePassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

// Simples armazenamento de sessão
const sessions: { [key: number]: boolean } = {};

export const createSession = (userId: number) => {
  sessions[userId] = true;
};

export const destroySession = (userId: number) => {
  delete sessions[userId];
};

export const isUserLoggedIn = (userId: number): boolean => {
  return !!sessions[userId];
};