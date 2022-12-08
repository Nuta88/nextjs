import { getAllUsers } from '../../api';

export default function login(req, res) {
  const { email, password } = JSON.parse(req.body);
  const users = getAllUsers();
  const user = users.find(user => user.email === email);

  if ( !user || user.password !== password ) {
    res.status(400).json({ message: 'Invalid name or password' });
  }

  if ( user ) {
   res.status(200).json(user);
  }

  res.status(500).json({ message: 'Internal Server Error' });
}
