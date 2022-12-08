import { createUser, getAllUsers } from '../../api';

export default async function register(req, res) {
  const { name, email, password } = JSON.parse(req.body);
  const users = getAllUsers();
  const user = users.find(user => (user.name === name || user.email === email));

  if ( user ) {
    res.status(400).json({ message: 'User already exists' });
  }

  if ( !user ) {
    const newUser = await createUser({ name, email, password });
    res.status(200).json(newUser);
  }

  res.status(500).json({ message: 'Internal Server Error' });
}