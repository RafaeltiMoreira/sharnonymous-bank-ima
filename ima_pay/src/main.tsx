import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Logo } from "./assets/img/Logo.png"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
