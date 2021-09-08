import React, { useContext } from 'react';
import { UserContext } from './../hooks/contexts/UserContex';

function BoxDisplay() {

  const { userGlobalState } = useContext(UserContext);

  return (
    <div style={{ minWidth: 300, textAlign: 'left' }}>
      <p><span>Name: </span>{userGlobalState.name}</p>
      <p><span>E-mail: </span>{userGlobalState.email}</p>
      <p><span>Age: </span>{userGlobalState.age}</p>
      <p><span>Address: </span>{userGlobalState.address}</p>
    </div>
  );
}

export default BoxDisplay;