import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Password from './components/password'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div> 
      
      <Password />  
      <ToastContainer />
      {/*<Card /> */} 

    </div>
  )
}

export default App
