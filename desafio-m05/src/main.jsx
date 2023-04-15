import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './config/router'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
