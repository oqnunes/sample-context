
import { useContext } from 'react';
import { UserContext } from './../hooks/contexts/UserContex';

function BoxInputs() {

  const { userGlobalState, setUserGlobalState } = useContext(UserContext);

  return (
    <div>
      <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        Name:
        <input 
          type={"text"}
          value={userGlobalState.name}
          onChange={(event) => setUserGlobalState({ name: event.target.value })}
        />   
      </label> 
      <br />
      <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        E-mail:
        <input 
          type={"email"}
          value={userGlobalState.email}
          onChange={(event) => setUserGlobalState({ email: event.target.value })}
        />   
      </label> 
      <br />
      <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        Age:
        <input 
          type={"number"}
          value={userGlobalState.age}
          onChange={(event) => setUserGlobalState({ age: event.target.value })}
        />   
      </label> 
      <br />
      <label style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        Address:
        <input 
          type={"text"}
          value={userGlobalState.address}
          onChange={(event) => setUserGlobalState({ address: event.target.value })}
        />   
      </label> 
      <br />
    </div>
  );
}

export default BoxInputs;
