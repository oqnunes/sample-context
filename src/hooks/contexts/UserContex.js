
import React, { createContext } from "react";
import useSetState from "../../utils/useSetState";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [state, setState] = useSetState({
    name: '',
    email: '',
    age: 0,
    address: ""
  });

  return (
    <UserContext.Provider
      value={{ 
        userGlobalState: state, 
        setUserGlobalState: setState 
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;