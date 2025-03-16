
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Landing from './pages/Landing.jsx';
import { useState } from 'react';


const root = createRoot(document.getElementById('root'));

function App(){

  const [users, setusers] = useState([
    {
      username: "vishwa",
      password: "1234"
    }

  ])
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}/>} />
      <Route path="/signup" element={<Signup users={users} setusers={setusers} />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  </BrowserRouter>

  )
}

root.render(<App/>);