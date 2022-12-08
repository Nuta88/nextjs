import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
const users = require('./data/users.json');

export const createUser = async ({ name, email, password }) => {
  const userId = uuidv4();
  users.push({ name, email, password, id: userId });
  saveUsers();

  return { name, email, id: userId };
};

export const getAllUsers = () => users;

export const saveUsers = () => {
  fs.writeFileSync('api/data/users.json', JSON.stringify(users, null, 4));
};
