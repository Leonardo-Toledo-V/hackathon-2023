import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
