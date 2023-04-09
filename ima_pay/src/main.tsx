<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Logo } from "./assets/img/Logo.png"
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> main

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

