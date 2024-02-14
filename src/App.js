import { useState } from 'react';
import Navbar from'./Components/Navbar';
import Login from './Components/Login';


function App() {
  const[mode,setMode]=useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(1 11 19)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
   <Navbar title="Login-Form" mode ={mode} toggleMode={toggleMode}/>
   <Login mode = {mode} />
   </>
  );
}

export default App;
