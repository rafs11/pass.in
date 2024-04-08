import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

// Componentes e propriedades (funções que retornam um HTML)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
