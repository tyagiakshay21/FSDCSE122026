import './App.css'
import ICard from './component/ICard'
import Gallery from './component/gallery'
import ReactHook from './component/ReactHook'
import Imagemanupulation from './component/Imagemanupulation'
import React from 'react'
import UseEffect from './component/UseEffect'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
function App() {



  return (
    <div>
      {/* <Gallery/>
    <ICard/> */}
    {/* <Imagemanupulation/> */}
    {/* <ReactHook/>
    <UseEffect/> */}

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Registration/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>

  </Routes>


  </BrowserRouter>


    </div>
  )
}

export default App;