import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bootstrap from 'bootstrap-4-react';
import 'animate.css';
import Rotas from './Rotas.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Rotas}/>
  </React.StrictMode>,
)
