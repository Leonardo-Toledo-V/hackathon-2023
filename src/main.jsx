import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import Lists from './pages/LIsts.jsx'
import Activities from './pages/Activities.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)