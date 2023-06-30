import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './home/navbar'
import Carousel from './home/carousel'
import Conta from './perfilUser/conta'
import Login from './login-signup/login';
import Signup from './login-signup/Signup';
function App() {
  
  return <div><Navbar/>
  <Carousel/>
  <Conta/>
  <Signup/>
  <Login/>
  </div>
}

export default App
