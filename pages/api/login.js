import { getAllUsers } from "../../api";

export default function login(req, res) {
  const { name, password } = JSON.parse(req.body);
  const users = getAllUsers();
  const user = users.find(user => (user.name === name || user.email === name));

  if ( !user || user.password !== password ) {
    res.status(400).json({ message: 'Invalid name or password' });
  }

  if ( user ) {
   res.status(200).json(user);
  }

  res.status(500).json({ message: 'Internal Server Error' });
}
