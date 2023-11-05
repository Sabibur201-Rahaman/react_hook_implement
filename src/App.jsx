import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Asyn from './Asyn'
import NotFound from './pages/NotFound'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/product/:id/:name" element={<Product/>}/>
        <Route path="/profile/:facebookId/:whatsAppId" element={<Profile/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
