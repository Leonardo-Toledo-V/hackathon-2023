import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
