import List from './List';
import { useCallback, useState } from 'react';
import Profile from './Profile';
function App() {

  const [getCount,setCount] = useState(0);
  const [getUserName,setUserName] = useState('');
  const [getProfile,setProfile] = useState(0);

  const onClickHandler=useCallback(()=>{
    setProfile(previous=>previous+1);
  },[getProfile])

  return (
    <div className="App">
      <List count={getCount}/>
      <button onClick={()=>setCount(getCount+1)}>Count</button>
      <br/>
      <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
      <h1>UserName:{getUserName}</h1>
      <Profile names={getProfile} click={onClickHandler}/>
    </div>
  );
}

export default App;
