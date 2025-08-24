import { useState } from 'react';
import './App.css'
import Loading from './components/shared/Loading'
import Navbar from './components/navbar/Navbar';

function App() {

  const [onComplete, setOnComplete] = useState(true);

  return (
    <>
     { !onComplete && <Loading onComplete={()=>setOnComplete(true)} /> }
      <div className={`min-h-screen transition-opacity duration-700 ${onComplete ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar></Navbar>
      </div>
    </> 
  )
}

export default App
