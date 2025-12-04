import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function UserSelect() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <select value={user.name} onChange={(e)=> setUser({name: e.target.value})}>
      <option>Ana</option>
      <option>Luis</option>
      <option>Invitado</option>
    </select>
  );
}
