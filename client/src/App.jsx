import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing from './Landing';
import Pannel from './pannel';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
              <Routes >
                <Route path='/'  element={<Landing/>}/>
                <Route path='/shop'  element={<Pannel/>}/>
              </Routes>
              
      
      </BrowserRouter>
    </>
  )
}

export default App;
