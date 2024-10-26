import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';





function App() {
 const[mode,setMode] = useState ('light');  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark') ; //within  state setMode cannot be change = 'dark' it has to be setMode('dark)
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
 }
  return (
    <>
    <Navbar title="Word Count "  mode={mode} toggleMode={toggleMode}/>

    <div className="container my-3">
    <TextForm headding = "Enter Your Text To Analyze Below "  mode={mode}/>
    </div>
    </>
   
  );
}

export default App;
