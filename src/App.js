import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Password from './pages/Password'
import Login from './pages/Login'
import Name from './pages/Name'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password' element={<Password/>}/>
          <Route path='/name' element={<Name/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

