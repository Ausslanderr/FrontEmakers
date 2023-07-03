import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './home/navbar.tsx';
import Login from './login-signup/login.tsx';
import Signup from './login-signup/Signup.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecuperarSenha from './login-signup/recuperarSenha.tsx';
import Conta from './perfilUser/conta.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/recuperarSenha",
    element: <RecuperarSenha/>,
  },
  {
    path: "/minhaConta",
    element: <Conta/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
