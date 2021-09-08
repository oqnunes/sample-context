
import { useContext, useEffect } from 'react';
import { UserContext } from './hooks/contexts/UserContex';
import BoxInputs from './components/BoxInputs';

import './App.css';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const { userGlobalState } = useContext(UserContext);

  useEffect(() => {
    console.log({
      userGlobalState: userGlobalState
    })
  }, [userGlobalState]);

  return (
    <div className="App">
      <BoxInputs />  
      <BoxDisplay />
    </div>
  );
}

export default App;
