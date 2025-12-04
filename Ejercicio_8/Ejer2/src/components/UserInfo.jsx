import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default React.memo(function UserInfo(){
  const { user } = useContext(AuthContext);
  return <div>Usuario: {user.name}</div>;
});
